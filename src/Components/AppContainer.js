import React, {memo} from 'react';
import {View, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {Color, Responsive} from '../Helper';

const ContainerView = styled.View`
  flex: 1;
  background-color: ${Color.black07};
`;

const SubContainerView = styled.View`
  flex: 1;
  background-color: ${Color.black07};
  padding-horizontal: ${props =>
    props.isPadding ? Responsive.widthPx(5) : Responsive.widthPx(0)};
`;

const AppContainer = props => {
  const {
    isTopSafeArea = true,
    isBottomSafeArea = true,
    isPadding = true,
    bottomStyle = {},
    children,
  } = props;
  const TopComponent = isTopSafeArea ? SafeAreaView : View;
  const BottomComponent = isBottomSafeArea ? SafeAreaView : View;
  return (
    <ContainerView>
      <TopComponent />
      <SubContainerView isPadding={isPadding}>{children}</SubContainerView>
      <BottomComponent style={bottomStyle} />
    </ContainerView>
  );
};

export default memo(AppContainer);
