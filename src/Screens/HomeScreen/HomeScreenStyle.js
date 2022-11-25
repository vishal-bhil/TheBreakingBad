import styled from 'styled-components/native';
import {Responsive} from '../../Helper';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-horizontal: ${Responsive.widthPx(5)};
`;

const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FavoriteIcon = styled.TouchableOpacity`
  margin-start: 20;
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
  IconContainer,
  FavoriteIcon,
  ListContainer,
  ItemSeparator,
};
