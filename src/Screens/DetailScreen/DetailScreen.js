import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {WithLocalSvg} from 'react-native-svg';
import {useSelector, useDispatch} from 'react-redux';
import {setLocalCharacterList} from '../../Store/characterSlice';
import {AppContainer, AppScrollView, AppText} from '../../Components';
import {Color, Loader, Utility, SVGs} from '../../Helper';
import styles from './DetailScreenStyle';
import CharacterItem from './Components/CharacterItem';
import APICall from '../../Network/APICall';
import EndPoints from '../../Network/EndPoints';

const DetailScreen = ({navigation, route}) => {
  const characterItem = route.params.item;

  const localCharacterList = useSelector(
    state => state.character.characterList,
  );
  const dispatch = useDispatch();

  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    getCharactersList();
  }, []);

  const getCharactersList = () => {
    Loader.showLoader();
    APICall('get', null, EndPoints.getCharacters, null)
      .then(response => {
        var filteredList = response.data.filter(
          i => i.name !== characterItem.name,
        );
        setCharactersList(filteredList);
      })
      .catch(error => Utility.showErrorAlert(error.message))
      .finally(() => Loader.hideLoader());
  };

  const onFavoritePress = () => {
    if (localCharacterList.some(i => i.name === characterItem.name)) {
      var filteredList = localCharacterList.filter(
        i => i.name !== characterItem.name,
      );
      dispatch(setLocalCharacterList(filteredList));
    } else {
      const tmpList = [];
      tmpList.push(characterItem);
      dispatch(setLocalCharacterList(tmpList.concat(localCharacterList)));
    }
  };

  const renderCharacterItem = ({item, index}) => {
    return <CharacterItem item={item} index={index} navigation={navigation} />;
  };

  return (
    <AppContainer isPadding={false} isTopSafeArea={false}>
      <AppScrollView>
        <ImageBackground
          source={{uri: characterItem.img}}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" color={Color.white} size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFavoritePress}>
              <WithLocalSvg
                asset={
                  localCharacterList.some(i => i.name === characterItem.name)
                    ? SVGs.IcHeartFill
                    : SVGs.IcHeart
                }
                height={25}
                width={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: characterItem.img}}
              style={styles.characterImage}
            />
            <AppText
              text={characterItem.name}
              fontColor={Color.white}
              fontSize="7"
              fontWeight="bold"
              numberOfLines={1}
            />
            <AppText
              text={characterItem.nickname}
              fontColor={Color.white}
              fontSize="14"
              fontWeight="light"
              numberOfLines={1}
            />
            <AppText
              text={characterItem.status}
              fontColor={Color.red4E}
              fontSize="12"
              fontWeight="bold"
              numberOfLines={1}
            />
          </View>
        </ImageBackground>
        <View style={styles.subContainer}>
          <View style={styles.potrayedContainer}>
            <View>
              <AppText
                text={'Potrayed'}
                fontColor={Color.green75}
                fontSize="14"
                fontWeight="bold"
              />
              <AppText
                text={characterItem.portrayed}
                fontColor={Color.white}
                fontSize="14"
                fontWeight="thin"
              />
            </View>
            <View style={styles.dobContainer}>
              <AppText
                text={characterItem.birthday}
                fontColor={Color.white}
                fontSize="14"
                fontWeight="thin"
              />
              <Icon
                name="gift"
                color={Color.white}
                size={15}
                style={styles.marginStart10}
              />
            </View>
          </View>

          <AppText
            text={'Occupation'}
            fontColor={Color.green75}
            fontSize="14"
            fontWeight="bold"
            containerStyle={styles.marginTop30}
          />

          {characterItem.occupation.map(occItem => {
            return (
              <AppText
                text={occItem}
                fontColor={Color.white}
                fontSize="14"
                fontWeight="thin"
                containerStyle={styles.marginTop10}
              />
            );
          })}

          <AppText
            text={'Appeared in'}
            fontColor={Color.green75}
            fontSize="14"
            fontWeight="bold"
            containerStyle={styles.marginTop30}
          />
          <ScrollView horizontal={true}>
            {characterItem.appearance.map(appItem => {
              return (
                <View style={styles.seasonContainer}>
                  <AppText
                    text={`Season ${appItem}`}
                    fontColor={Color.white}
                    fontSize="14"
                    fontWeight="thin"
                  />
                </View>
              );
            })}
          </ScrollView>

          <AppText
            text={'Other characters'}
            fontColor={Color.white}
            fontSize="7"
            fontWeight="bold"
            containerStyle={styles.marginTop30}
          />

          <FlatList
            data={charactersList}
            renderItem={renderCharacterItem}
            horizontal
            style={styles.listStyle}
          />
        </View>
      </AppScrollView>
    </AppContainer>
  );
};
export default DetailScreen;
