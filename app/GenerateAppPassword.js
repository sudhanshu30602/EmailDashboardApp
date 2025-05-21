// import { useState } from 'react';
// import { Button, Linking, StyleSheet, Text, TextInput, View } from 'react-native';

// import { useRouter } from 'expo-router';

// export default function GenerateAppPasswordScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [appPassword, setAppPassword] = useState('');

//     const router = useRouter();

//   const handleSubmit = () => {
//     // Navigate to Dashboard and pass email + app password
//    router.replace({
//     pathname: '/Dashboard',
//     params: {
//       email,
//       appPassword,
//     },
//   });
//   console.log('fd')
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Generate an App Password</Text>
//       <Text style={styles.text}>
//         1. Visit the App Passwords page{'\n'}
//         2. Select 'Mail' and 'Other (Custom name)' → Enter a name like "EmailDashboard"{'\n'}
//         3. Copy the 16-character app password
//       </Text>
//       <Button
//         title="Open App Passwords Page"
//         onPress={() =>
//           Linking.openURL('https://myaccount.google.com/apppasswords')
//         }
//       />
//       <TextInput
//         placeholder="Enter Gmail address"
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         placeholder="Enter App Password"
//         style={styles.input}
//         value={appPassword}
//         onChangeText={setAppPassword}
//         secureTextEntry
//       />
//       <Button title="Continue to Dashboard" onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
//   text: { fontSize: 16, marginVertical: 10 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
// });


import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function GenerateAppPasswordScreen() {
  const [email, setEmail] = useState('');
  const [appPassword, setAppPassword] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (!email || !appPassword) return alert('Please fill in all fields');
    router.replace({
      pathname: '/Dashboard',
      params: { email, appPassword },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{
            uri: 'https://www.gstatic.com/images/icons/material/system/2x/lock_black_48dp.png',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Generate an App Password</Text>

        <View style={styles.card}>
          <Text style={styles.instructions}>
            1. Visit the App Passwords page{'\n'}
            2. Select <Text style={styles.bold}>Mail</Text> and{' '}
            <Text style={styles.bold}>Other (Custom name)</Text> → Enter a name like{' '}
            <Text style={styles.italic}>"EmailDashboard"</Text>{'\n'}
            3. Copy the 16-character App Password
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL('https://myaccount.google.com/apppasswords')
            }
          >
            <Text style={styles.buttonText}>Open App Passwords Page</Text>
          </TouchableOpacity>

          <TextInput
            placeholder="Enter Gmail address"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Enter App Password"
            style={styles.input}
            value={appPassword}
            onChangeText={setAppPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#1A73E8', marginTop: 10 }]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Continue to Dashboard</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    padding: 50,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#202124',
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
  instructions: {
    fontSize: 16,
    color: '#3C4043',
    lineHeight: 24,
    marginBottom: 20,
  },
  bold: {
    fontWeight: '600',
  },
  italic: {
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADCE0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },
  button: {
    backgroundColor: '#34A853',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
