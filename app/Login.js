// app/login.js

// import { useRouter } from 'expo-router';
// import { useRef } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { WebView } from 'react-native-webview';

// export default function LoginScreen() {
//   const webViewRef = useRef(null);
//   const router = useRouter();
//   console.log("login Screen")

//   const onNavigationStateChange = (navState) => {
//      if (navState.url.includes('myaccount.google.com') || navState.url.includes('inbox')) {
//       router.replace('TwoStepGuide');
//       //console.log("DF")
//   }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login with Gmail</Text>
//       <WebView
//         ref={webViewRef}
//         source={{ uri: 'https://accounts.google.com/signin' }}
//         onNavigationStateChange={onNavigationStateChange}
//         style={styles.webview}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, marginTop: 30 },
//   title: { fontSize: 22, textAlign: 'center', marginVertical: 10 },
//   webview: { flex: 1 },
// });


// app/login.js
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function LoginScreen() {
  const webViewRef = useRef(null);
  const router = useRouter();
  const [sessionCleared, setSessionCleared] = useState(false);

  const onNavigationStateChange = (navState) => {
    if (
      navState.url.includes('myaccount.google.com') ||
      navState.url.includes('inbox')
    ) {
      router.replace('TwoStepGuide');
    }
  };

  // Plan B: First WebView to clear session
  const renderSessionClearingWebView = () => (
    <WebView
      source={{ uri: 'https://accounts.google.com/logout' }}
      onLoadEnd={() => {
        setTimeout(() => {
          setSessionCleared(true); // Now show login screen
        }, 1500); // give it a short delay to ensure logout
      }}
      injectedJavaScript={`
        window.localStorage.clear();
        window.sessionStorage.clear();
        document.cookie = "";
        true;
      `}
      style={{ flex: 1 }}
    />
  );

  const renderLoginWebView = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Login with Gmail</Text>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://accounts.google.com/signin' }}
        onNavigationStateChange={onNavigationStateChange}
        style={styles.webview}
      />
    </View>
  );

  return sessionCleared ? renderLoginWebView() : renderSessionClearingWebView();
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30 },
  title: { fontSize: 22, textAlign: 'center', marginVertical: 10 },
  webview: { flex: 1 },
});
