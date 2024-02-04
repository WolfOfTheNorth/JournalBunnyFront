// GCloud Auth0 Client ID Web: 777521442556-5m2ktp6b830gdlhdpi1g34aei1mt65gd.apps.googleusercontent.com
// GCloud Auth0 Client Secret Web: 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
// IOS: 777521442556-oq7ajt5dcclnpaqq4ql7v8c3drktps2h.apps.googleusercontent.com
// Android: 777521442556-5jua1vvqm762vqvmq8gde6ikfhsq7pj8.apps.googleusercontent.com
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themes/Themed';
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ModalScreen() {
  const [user, setUser] = React.useState(null as string | null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: Platform.select({
        ios: '777521442556-oq7ajt5dcclnpaqq4ql7v8c3drktps2h.apps.googleusercontent.com',
        android: '777521442556-5jua1vvqm762vqvmq8gde6ikfhsq7pj8.apps.googleusercontent.com',
        web: '777521442556-5m2ktp6b830gdlhdpi1g34aei1mt65gd.apps.googleusercontent.com',
      }),
    }
  );

  return (
    <View style={styles.container}>
      {user 
      ? (
          <>
            <Text style={styles.title}>Modal</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="app/modal.tsx" />
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
          </>
        ) : (
          <>
          <Text style={styles.title}>Please sign in</Text>
          <Button title="Sign in with Google" onPress={() => {
            promptAsync().then((res) => {
              if (res.type === 'success') {
                const { id_token } = res.params;
                setUser(id_token);
                AsyncStorage.setItem('user', JSON.stringify({ id_token }));
              }
            });
          }} />
          </>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
