import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setLocalCharacterList} from '../../../Store/characterSlice';
import {AppText} from '../../../Components';
import {Responsive, Color, Screen, SVGs} from '../../../Helper';
import {WithLocalSvg} from 'react-native-svg';

const HouseItem = props => {
  const {item, index, navigation} = props;

  const localCharacterList = useSelector(
    state => state.character.characterList,
  );
  const dispatch = useDispatch();

  const isEven = index % 2 === 0;

  const isFavorite = localCharacterList.some(i => i.name === item.name);

  const onItemPress = () => {
    navigation.navigate(Screen.DetailScreen, {item});
  };

  const onFavoritePress = () => {
    if (localCharacterList.some(i => i.name === item.name)) {
      var filteredList = localCharacterList.filter(i => i.name !== item.name);
      dispatch(setLocalCharacterList(filteredList));
    } else {
      const tmpList = [];
      tmpList.push(item);
      dispatch(setLocalCharacterList(tmpList.concat(localCharacterList)));
    }
  };

  return (
    <TouchableOpacity style={styles.container(isEven)} onPress={onItemPress}>
      <Image source={{uri: item.img}} style={styles.characterImage} />
      <View style={styles.nameContainer}>
        <View style={styles.flex1}>
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

        <TouchableOpacity onPress={onFavoritePress}>
          <WithLocalSvg
            asset={isFavorite ? SVGs.IcHeartFill : SVGs.IcHeart}
            height={20}
            width={20}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default memo(HouseItem);

const styles = StyleSheet.create({
  container: isEven => ({
    overflow: 'hidden',
    marginStart: isEven ? 0 : Responsive.widthPx(6),
  }),
  characterImage: {
    width: Responsive.widthPx(42),
    height: Responsive.widthPx(60),
    borderRadius: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  flex1: {
    flex: 1,
  },
});
