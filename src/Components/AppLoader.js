import React, {useState, memo, forwardRef, useImperativeHandle} from 'react';
import {Modal, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {Color} from '../Helper';

const ContainerView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${Color.modalOverlay};
`;

const SubContainerView = styled.View`
  width: 100;
    height: 100;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20;
    shadow-color: ${Color.black};
    shadow-offset: {
      width: 0;
      height: 3;
    },
    shadow-opacity: 0.29;
    shadow-radius: 4.65;
    elevation: 7;
`;

const AppLoader = forwardRef((props, ref) => {
  const [isLoading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    // methods connected to `ref`
    showLoader: () => showLoader(),
    hideLoader: () => hideLoader(),
  }));

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return (
    <Modal animationType="fade" visible={isLoading} transparent>
      <ContainerView>
        <SubContainerView>
          <ActivityIndicator color={Color.green75} size="large" />
        </SubContainerView>
      </ContainerView>
    </Modal>
  );
});

export default memo(AppLoader);
