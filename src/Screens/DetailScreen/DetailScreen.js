import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {WithLocalSvg} from 'react-native-svg';
import {useSelector, useDispatch} from 'react-redux';
import {setLocalCharacterList} from '../../Store/characterSlice';
import {AppContainer, AppScrollView, AppText} from '../../Components';
import {Color, Loader, Utility, SVGs} from '../../Helper';
import {
  BackgroundImage,
  HeaderContainer,
  ImageContainer,
  CharacterImage,
  SubContainer,
  PotrayedContainer,
  DOBContainer,
  GiftIcon,
  OccupationText,
  AppearedText,
  SeasonContainer,
  ListStyle,
} from './DetailScreenStyle';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <BackgroundImage
          source={{uri: characterItem.img}}
          imageStyle={{opacity: 0.3, backgroundColor: Color.modalOverlay}}>
          <HeaderContainer>
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
          </HeaderContainer>
          <ImageContainer>
            <CharacterImage source={{uri: characterItem.img}} />
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
          </ImageContainer>
        </BackgroundImage>
        <SubContainer>
          <PotrayedContainer>
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
            <DOBContainer>
              <AppText
                text={characterItem.birthday}
                fontColor={Color.white}
                fontSize="14"
                fontWeight="thin"
              />
              <GiftIcon name="gift" color={Color.white} size={15} />
            </DOBContainer>
          </PotrayedContainer>

          <AppearedText
            text={'Occupation'}
            fontColor={Color.green75}
            fontSize="14"
            fontWeight="bold"
          />

          {characterItem.occupation.map(occItem => {
            return (
              <OccupationText
                text={occItem}
                fontColor={Color.white}
                fontSize="14"
                fontWeight="thin"
              />
            );
          })}

          <AppearedText
            text={'Appeared in'}
            fontColor={Color.green75}
            fontSize="14"
            fontWeight="bold"
          />
          <ScrollView horizontal={true}>
            {characterItem.appearance.map(appItem => {
              return (
                <SeasonContainer>
                  <AppText
                    text={`Season ${appItem}`}
                    fontColor={Color.white}
                    fontSize="14"
                    fontWeight="thin"
                  />
                </SeasonContainer>
              );
            })}
          </ScrollView>

          <AppearedText
            text={'Other characters'}
            fontColor={Color.white}
            fontSize="7"
            fontWeight="bold"
          />

          <ListStyle
            data={charactersList}
            renderItem={renderCharacterItem}
            horizontal
          />
        </SubContainer>
      </AppScrollView>
    </AppContainer>
  );
};
export default DetailScreen;
