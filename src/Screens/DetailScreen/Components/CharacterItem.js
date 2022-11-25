import React, {memo} from 'react';
import styled from 'styled-components/native';
import {AppText} from '../../../Components';
import {Responsive, Color, Screen} from '../../../Helper';

const HouseItem = props => {
  const {item, navigation} = props;

  const onItemPress = () => {
    navigation.push(Screen.DetailScreen, {item});
  };

  return (
    <Container onPress={onItemPress}>
      <CharacterImage source={{uri: item.img}} />
      <NameContainer>
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
      </NameContainer>
    </Container>
  );
};

export default memo(HouseItem);

const Container = styled.TouchableOpacity`
  overflow: hidden;
  margin-end: ${Responsive.widthPx(5)};
`;

const CharacterImage = styled.Image`
  width: ${Responsive.widthPx(42)};
  height: ${Responsive.widthPx(60)};
  border-radius: 10;
`;

const NameContainer = styled.View`
  flex: 1;
  margin-top: 5;
`;
