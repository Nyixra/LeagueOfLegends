import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function LinksScreen() {
  return (
      <WebView
          source={{uri: 'https://map.leagueoflegends.com'}}
      />
  );
}
