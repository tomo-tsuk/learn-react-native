/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import LearnButton from './component/Button';

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }} testID="top-view" >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LearnButton testID="main-button" />
        </View>
      </SafeAreaView>
    </>
  );
};


export default App;
