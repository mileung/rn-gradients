import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const { hairlineWidth } = StyleSheet;
const doubleHairlineWidth = hairlineWidth * 2;
const negativeHairlineWidth = -hairlineWidth;

// const diagonal = getHypotenuse(SCREEN_HEIGHT, SCREEN_WIDTH);
const DEG_PER_RAD = Math.PI / 180;
const degToRad = deg => deg * DEG_PER_RAD;

// function getHypotenuse(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }

export default class LinearGradient extends React.Component {
  render() {
    let { style, height, width, colors, balancePoints, rotation, children } = this.props;

    // set rotation greater than 360° to its less than 360° equivalent
    rotation %= 360;

    if (rotation < 0) {
      // set negative rotation to its positive equivalent
      rotation = 360 + rotation;
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

    if (balancePoints && balancePoints.length !== colors.length) {
      throw 'balancePoints.length should be equal to colors.length';
    } else if (!balancePoints) {
      const { length } = colors;
      balancePoints = [...Array(length)].map((_, i) => i / (length - 1));
    }
    balancePoints = balancePoints.map(num => num * gradientArrayLength);

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
                      inputRange: balancePoints,
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
  balancePoints: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.number // in degrees - NOT radians.
};

LinearGradient.defaultProps = {
  height: 0,
  width: 0,
  rotation: 0
};
