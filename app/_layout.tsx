import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.safeArea}>
      <WebView source={{ uri: 'https://app.appsmith.com/app/energy-control-mobile/login-683d8b75fe677b0402bfcd94?embed=true' }} style={styles.container} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 37,
    paddingBottom: 47,
  },
  container: {
    flex: 1,
    overflow: "hidden",
  },
})
