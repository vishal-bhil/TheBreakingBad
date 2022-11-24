import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';

import {AppText} from '../../../Components';
import {Responsive, Color, Screen} from '../../../Helper';

const HouseItem = props => {
  const {item, navigation} = props;

  const onItemPress = () => {
    navigation.push(Screen.DetailScreen, {item});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
      <Image source={{uri: item.img}} style={styles.characterImage} />
      <View style={styles.nameContainer}>
        <AppText
          text={item.name}
          fontColor={Color.white}
          fontSize="14"
          fontWeight="bold"
          numberOfLines={1}
        />
        <AppText
          text={item.nickname}
          fontColor={Color.white}
          fontSize="14"
          fontWeight="light"
          numberOfLines={1}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(HouseItem);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    marginEnd: Responsive.widthPx(5),
  },
  characterImage: {
    width: Responsive.widthPx(42),
    height: Responsive.widthPx(60),
    borderRadius: 10,
  },
  nameContainer: {
    flex: 1,
    marginTop: 5,
  },
  flex1: {
    flex: 1,
  },
});
