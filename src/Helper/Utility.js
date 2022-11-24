import {Alert} from 'react-native';
import {CommonActions} from '@react-navigation/routers';

const navigate = (navigation, screen) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: screen}],
    }),
  );
};

const showAlert = (title, message) => {
  Alert.alert(title, message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

const showErrorAlert = message => {
  Alert.alert('Error', message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

const showNoInternet = () => {
  Alert.alert('Error', 'No internet connection please try again', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

const Utility = {
  navigate,
  showAlert,
  showErrorAlert,
  showNoInternet,
};

export default Utility;
