import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {WithLocalSvg} from 'react-native-svg';
import {AppContainer, AppText} from '../../Components';
import {Color, Loader, Screen, Utility, SVGs} from '../../Helper';
import {
  HeaderContainer,
  IconContainer,
  FavoriteIcon,
  ListContainer,
  ItemSeparator,
} from './HomeScreenStyle';
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
      <HeaderContainer>
        <AppText
          text="The Breaking Bad"
          fontSize="6"
          fontWeight="bold"
          fontColor={Color.white}
        />
        <IconContainer>
          <TouchableOpacity onPress={onSearchPress}>
            <Icon name="search" color={Color.white} size={25} />
          </TouchableOpacity>
          <FavoriteIcon onPress={onFavoritePress}>
            <WithLocalSvg asset={SVGs.IcHeartFill} height={25} width={25} />
          </FavoriteIcon>
        </IconContainer>
      </HeaderContainer>

      <ListContainer
        data={charactersList}
        renderItem={renderCharacterItem}
        numColumns={2}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </AppContainer>
  );
};
export default HomeScreen;
