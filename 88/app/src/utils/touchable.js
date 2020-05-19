import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Platform, View} from 'react-native';

const LOLLIPOP = 21;

const PlatformTouchable = (props) => {
  const {
    style,
    children,
    activeOpacity,
    rippleColor,
    rippleOverflow,
    ...rest
  } = props;

  return Platform.OS === 'android' && Platform.Version >= LOLLIPOP ? (
    <TouchableNativeFeedback
      {...rest}
      background={TouchableNativeFeedback.Ripple(
        rippleColor ? rippleColor : 'rgba(255, 255, 255, .4)',
        rippleOverflow,
      )}
      useForeground={true}>
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity
      {...rest}
      style={style}
      activeOpacity={activeOpacity ? activeOpacity : 0.6}>
      {children}
    </TouchableOpacity>
  );
};

export default PlatformTouchable;
