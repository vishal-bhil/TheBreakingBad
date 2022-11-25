import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
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
    <Container isEven={isEven} onPress={onItemPress}>
      <CharacterImage source={{uri: item.img}} />
      <NameContainer>
        <NameSubContainer>
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
        </NameSubContainer>

        <TouchableOpacity onPress={onFavoritePress}>
          <WithLocalSvg
            asset={isFavorite ? SVGs.IcHeartFill : SVGs.IcHeart}
            height={20}
            width={20}
          />
        </TouchableOpacity>
      </NameContainer>
    </Container>
  );
};

export default memo(HouseItem);

const Container = styled.TouchableOpacity`
  overflow: hidden;
  margin-start: ${props => (props.isEven ? 0 : Responsive.widthPx(6))};
`;

const CharacterImage = styled.Image`
  width: ${Responsive.widthPx(42)};
  height: ${Responsive.widthPx(60)};
  border-radius: 10;
`;

const NameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5;
`;

const NameSubContainer = styled.View`
  flex: 1;
`;
