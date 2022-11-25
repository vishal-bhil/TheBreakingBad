import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {Responsive, Color} from '../../Helper';
import {AppText} from '../../Components';

const BackgroundImage = styled.ImageBackground`
  width: ${Responsive.widthPx(100)};
  height: ${Responsive.widthPx(120)};
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${Responsive.widthPx(5)};
  padding-vertical: ${Responsive.widthPx(5)};
  padding-top: ${Responsive.widthPx(10)};
`;

const ImageContainer = styled.View`
  align-items: center;
  position: absolute;
  bottom: 10;
  align-self: center;
`;

const CharacterImage = styled.Image`
  width: ${Responsive.widthPx(42)};
  height: ${Responsive.widthPx(60)};
  border-radius: 10;
  margin-bottom: 20;
`;

const SubContainer = styled.View`
  padding-horizontal: ${Responsive.widthPx(5)};
`;

const PotrayedContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20;
`;

const DOBContainer = styled.View`
  flex-direction: row;
`;

const GiftIcon = styled(Icon)`
  margin-start: 10;
`;

const OccupationText = styled(AppText)`
  margin-top: 10;
`;

const AppearedText = styled(AppText)`
  margin-top: 30;
`;

const SeasonContainer = styled.View`
  background-color: ${Color.grey1A};
  align-self: flex-start;
  margin-start: 5;
  margin-top: 10;
  border-radius: 5;
  padding-horizontal: ${Responsive.widthPx(2)};
  padding-vertical: ${Responsive.widthPx(2)};
`;

const ListStyle = styled.FlatList`
  margin-top: 20;
`;

export {
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
};
