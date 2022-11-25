import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {Responsive, Color, Fonts} from '../../Helper';

const HeaderContainer = styled.View`
  background-color: ${Color.grey24};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${Responsive.widthPx(5)};
  padding-vertical: ${Platform.OS === 'android'
    ? Responsive.widthPx(2)
    : Responsive.widthPx(5)};
  padding-top: ${Platform.OS === 'android'
    ? Responsive.widthPx(2)
    : Responsive.widthPx(10)};
`;

const SearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const SearchInput = styled.TextInput`
  flex: 1;
  font-family: ${Fonts.Roboto_Thin};
  font-size: ${Responsive.font(7)};
  color: ${Color.white};
  margin-vertical: 10;
  margin-start: 5;
`;

const ListContainer = styled.FlatList`
  margin-top: 20;
  padding-horizontal: ${Responsive.widthPx(5)};
`;

const ItemSeparator = styled.View`
  margin-top: 20;
`;

export {
  HeaderContainer,
  SearchContainer,
  SearchInput,
  ListContainer,
  ItemSeparator,
};
