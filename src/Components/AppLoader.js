import React, {useState, memo, forwardRef, useImperativeHandle} from 'react';
import {Modal, View, StyleSheet, ActivityIndicator} from 'react-native';
import {Color} from '../Helper';

const AppLoader = forwardRef((props, ref) => {
  const [isLoading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    // methods connected to `ref`
    showLoader: () => showLoader(),
    hideLoader: () => hideLoader(),
  }));

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return (
    <Modal animationType="fade" visible={isLoading} transparent>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <ActivityIndicator color={Color.orange00} size="large" />
        </View>
      </View>
    </Modal>
  );
});

export default memo(AppLoader);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.modalOverlay,
  },
  innerContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
