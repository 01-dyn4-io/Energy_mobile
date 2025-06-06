import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebviewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.exemplo.com' }} style={{ flex: 1 }} />
    </View>
  );
};

export default WebviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
