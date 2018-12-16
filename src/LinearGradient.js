import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { normalizeIntervals, degToRad } from './utils';

const { hairlineWidth } = StyleSheet;
const doubleHairlineWidth = hairlineWidth * 2;
const negativeHairlineWidth = -hairlineWidth;

export default class LinearGradient extends React.Component {
  render() {
    const { style, height, width, colors, children } = this.props;
    let { intervals, rotation } = this.props;

    rotation %= 360; // set rotation greater than 360° to its less than 360° equivalent

    if (rotation < 0) {
      rotation = 360 + rotation; // set negative rotation to its positive equivalent
    }

    let scaleX = 1;
    let scaleY = 1;

    const normalizedRotation = rotation % 90;

    if (rotation > 180) {
      rotation %= 180;
      scaleX = -1;
      scaleY = -1;
    }

    const sin1 = Math.sin(degToRad(90 - (rotation > 90 ? rotation % 90 : rotation)));
    const sin2 = Math.sin(degToRad(rotation));
    const gradientYLength = height * sin1 + width * sin2;
    const gradientXLength = width * sin1 + height * sin2;
    const gradientArrayLength = Math.ceil(gradientYLength / hairlineWidth);
    const normalIntervals = normalizeIntervals(intervals, colors, gradientArrayLength);

    return (
      <View style={[style, { height, width }]}>
        <View
          style={{
            ...StyleSheet.absoluteFill,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          <View style={{ transform: [{ scaleX }, { scaleY }, { rotate: `${rotation}deg` }] }}>
            {[...Array(gradientArrayLength)].map((_, i) => {
              return (
                <Animated.View
                  key={i}
                  style={{
                    height: doubleHairlineWidth,
                    marginTop: negativeHairlineWidth,
                    width: gradientXLength,
                    backgroundColor: new Animated.Value(i).interpolate({
                      inputRange: normalIntervals,
                      outputRange: colors
                    })
                  }}
                />
              );
            })}
          </View>
        </View>
        {children}
      </View>
    );
  }
}

LinearGradient.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  intervals: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.number // in degrees - NOT radians.
};

LinearGradient.defaultProps = {
  height: 0,
  width: 0,
  rotation: 0
};
