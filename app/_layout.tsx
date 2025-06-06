import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://app.appsmith.com/app/energy-control-mobile/login-683d8b75fe677b0402bfcd94?embed=true' }} style={{ flex: 1 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    overflow: "hidden"
  },
})
