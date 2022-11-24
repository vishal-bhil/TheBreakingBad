import React, {memo} from 'react';
import {Text} from 'react-native';
import {Responsive, Color, Fonts} from '../Helper';
import PropTypes from 'prop-types';

const AppText = (props: AppTextProps) => {
  const {fontWeight, fontSize, fontColor, containerStyle, text} = props;

  var platformFont = Fonts.Roboto_Bold;
  if (fontWeight === 'bold') {
    platformFont = Fonts.Roboto_Bold;
  } else if (fontWeight === 'light') {
    platformFont = Fonts.Roboto_Light;
  } else {
    platformFont = Fonts.Roboto_Thin;
  }

  return (
    <Text
      style={[
        {
          fontFamily: platformFont,
          fontSize:
            fontSize === '8'
              ? Responsive.font(2.5)
              : fontSize === '10'
              ? Responsive.font(3)
              : fontSize === '12'
              ? Responsive.font(3.5)
              : fontSize === '14'
              ? Responsive.font(4)
              : fontSize === '16'
              ? Responsive.font(4.5)
              : Responsive.font(fontSize),
          color: fontColor || Color.black,
        },
        containerStyle,
      ]}
      {...props}>
      {text}
    </Text>
  );
};

interface AppTextProps {
  fontWeight: 'bold' | 'light' | 'thin';
  fontSize: '8' | '10' | '12' | '14' | '16';
}

AppText.propTypes = {
  fontColor: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
};

export default memo(AppText);
