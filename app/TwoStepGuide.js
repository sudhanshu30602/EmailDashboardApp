// import { useRouter } from 'expo-router';
// import { Button, Linking, ScrollView, StyleSheet, Text } from 'react-native';

// export default function TwoStepGuideScreen({ navigation }) {
//     console.log("dekh bhai")
//       const router = useRouter();
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Enable Two-Step Verification</Text>
//       <Text style={styles.text}>
//         To proceed, you must enable Two-Step Verification on your Google account.
//       </Text>
//       <Text style={styles.text}>
//         1. Go to your Google Account settings{'\n'}
//         2. Navigate to Security{'\n'}
//         3. Turn on Two-Step Verification{'\n'}
//       </Text>
//       <Button
//         title="Open Google Account Settings"
//         onPress={() =>
//           Linking.openURL('https://myaccount.google.com/security')
//         }
//       />
//       <Text style={styles.text}>
//         Once enabled, click the button below to proceed to generate your App Password.
//       </Text>
//       <Button
//         title="Generate App Password"
//         onPress={() => router.replace('GenerateAppPassword')}
//       />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
//   text: { fontSize: 16, marginVertical: 10 },
// });



import { useRouter } from 'expo-router';
import {
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TwoStepGuideScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{
            uri: 'https://www.gstatic.com/images/icons/material/system/2x/security_black_48dp.png',
          }}
          style={styles.image}
        />

        <Text style={styles.title}>Enable Two-Step Verification</Text>

        <View style={styles.card}>
          <Text style={styles.text}>
            To proceed, please enable Two-Step Verification on your Google account.
          </Text>
          <Text style={styles.steps}>
            1. Go to your Google Account settings{'\n'}
            2. Navigate to the "Security" section{'\n'}
            3. Turn on "2-Step Verification"
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://myaccount.google.com/security')}
          >
            <Text style={styles.buttonText}>Open Google Account Settings</Text>
          </TouchableOpacity>

          <Text style={styles.note}>
            After enabling it, click the button below to generate your App Password.
          </Text>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#1A73E8' }]}
            onPress={() => router.replace('GenerateAppPassword')}
          >
            <Text style={styles.buttonText}>Generate App Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1F3F4',
  },
  container: {
    padding: 50,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '120%',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    color: '#3C4043',
    marginBottom: 10,
  },
  steps: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5F6368',
    marginBottom: 20,
  },
  note: {
    fontSize: 15,
    color: '#5F6368',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#34A853',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
