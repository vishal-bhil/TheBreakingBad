import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppNavigator from './Router/AppNavigator';
import AppLoader from './Components/AppLoader';
import {Loader} from './Helper';

function StartComponent() {
  return (
    <View style={styles.flexBox}>
      <AppLoader ref={e => Loader.setLoader(e)} />
      <AppNavigator />
    </View>
  );
}

export default StartComponent;

const styles = StyleSheet.create({
  flexBox: {
    flex: 1,
  },
});
