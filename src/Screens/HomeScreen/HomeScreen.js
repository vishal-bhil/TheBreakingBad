import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {WithLocalSvg} from 'react-native-svg';
import {AppContainer, AppText} from '../../Components';
import {Color, Loader, Screen, Utility, SVGs} from '../../Helper';
import styles from './HomeScreenStyle';
import CharacterItem from './Components/CharacterItem';
import APICall from '../../Network/APICall';
import EndPoints from '../../Network/EndPoints';

const HomeScreen = ({navigation}) => {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    getCharactersList();
  }, []);

  const getCharactersList = () => {
    Loader.showLoader();
    APICall('get', null, EndPoints.getCharacters, null)
      .then(response => {
        setCharactersList(response.data);
      })
      .catch(error => Utility.showErrorAlert(error.message))
      .finally(() => Loader.hideLoader());
  };

  const onSearchPress = () => {
    navigation.navigate(Screen.SearchScreen);
  };

  const onFavoritePress = () => {
    navigation.navigate(Screen.FavoriteScreen);
  };

  const renderCharacterItem = ({item, index}) => {
    return <CharacterItem item={item} index={index} navigation={navigation} />;
  };

  return (
    <AppContainer isPadding={false}>
      <View style={styles.headerContainer}>
        <AppText
          text="The Breaking Bad"
          fontSize="6"
          fontWeight="bold"
          fontColor={Color.white}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onSearchPress}>
            <Icon name="search" color={Color.white} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onFavoritePress}
            style={styles.favoriteIcon}>
            <WithLocalSvg asset={SVGs.IcHeartFill} height={25} width={25} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={charactersList}
        renderItem={renderCharacterItem}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.ItemSeparator} />}
        style={styles.listStyle}
      />
    </AppContainer>
  );
};
export default HomeScreen;
