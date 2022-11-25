import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {AppContainer, AppText} from '../../Components';
import {Color, Loader, Utility} from '../../Helper';
import {
  HeaderContainer,
  SearchContainer,
  SearchInput,
  ListContainer,
  ItemSeparator,
} from './SearchScreenStyle';
import CharacterItem from '../HomeScreen/Components/CharacterItem';
import APICall from '../../Network/APICall';
import EndPoints from '../../Network/EndPoints';

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [charactersList, setCharactersList] = useState([]);
  const [isEmptyResult, setEmptyResult] = useState(false);

  const searchCharactersList = () => {
    Loader.showLoader();
    setEmptyResult(false);
    APICall('get', null, EndPoints.searchCharacters + searchText, null)
      .then(response => {
        setCharactersList(response.data);
        if (response.data.length === 0) {
          setEmptyResult(true);
        }
      })
      .catch(error => Utility.showErrorAlert(error.message))
      .finally(() => Loader.hideLoader());
  };

  const renderCharacterItem = ({item, index}) => {
    return <CharacterItem item={item} index={index} navigation={navigation} />;
  };

  return (
    <AppContainer isPadding={false} isTopSafeArea={false}>
      <HeaderContainer>
        <SearchContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" color={Color.white} size={25} />
          </TouchableOpacity>

          <SearchInput
            placeholderTextColor={Color.greyAB}
            placeholder="Search"
            onChangeText={setSearchText}
            value={searchText}
            returnKeyType="search"
            onSubmitEditing={searchCharactersList}
          />
        </SearchContainer>

        <TouchableOpacity
          onPress={() => {
            setSearchText('');
            setCharactersList();
          }}>
          <Icon name="x" color={Color.white} size={25} />
        </TouchableOpacity>
      </HeaderContainer>

      <ListContainer
        data={charactersList}
        renderItem={renderCharacterItem}
        numColumns={2}
        ItemSeparatorComponent={() => <ItemSeparator />}
        ListEmptyComponent={() => {
          return isEmptyResult ? (
            <View>
              <AppText
                text="No character found"
                fontColor={Color.green75}
                fontSize="5.5"
                fontWeight="light"
              />
              <AppText
                text="Try gain"
                fontColor={Color.greyC4}
                fontSize="5.5"
                fontWeight="light"
              />
            </View>
          ) : null;
        }}
      />
    </AppContainer>
  );
};
export default HomeScreen;
