import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { normalizeIntervals, getHypotenuse } from './utils';

// const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
// const { hairlineWidth } = StyleSheet;
const hairlineWidth = 4.8;
const doubleHairlineWidth = hairlineWidth * 2;

export default class RadialGradient extends React.Component {
  render() {
    const { style, height, width, scaleX, scaleY, colors, rotation, children } = this.props;
    let { intervals } = this.props;

    const diagonal = getHypotenuse(height, width);
    const gradientArrayLength = Math.ceil(diagonal / 2 / hairlineWidth);
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
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ scaleX: 1 }, { scaleY: 1 }, { rotate: `${rotation}deg` }]
            }}
          >
            {[...Array(gradientArrayLength)].slice(0, undefined).reduce((innerRing, _, i) => {
              // I've came to the conclusion that React Native limits the number of children, grandchildren, great grandchildren, etc. a single element can have. Why? Play around with the second argument of the slice method. If you just put in 9, you get a mostly black dot. If you put in 90 or undefined, the first, inner-most rings are gone and all that's left is a gray circle. Also, try setting the size variable to `i === 0 ? 300 : doubleHairlineWidth * (i + 1);`. There will be no black dot in the middle with a size of 300. I don't know what the limit is on how deep an component hierarchy can be, but I feel like it's definitely exists.
              const size = doubleHairlineWidth * (i + 1);
              return (
                <Animated.View
                  style={{
                    height: size,
                    width: size,
                    borderRadius: size / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: new Animated.Value(i).interpolate({
                      inputRange: normalIntervals,
                      outputRange: colors
                    })
                  }}
                >
                  {innerRing}
                </Animated.View>
              );
            }, null)}
            {/* {[...Array(gradientArrayLength)].map((_, i) => {
              const size = doubleHairlineWidth * (i + 1);
              return (
                <Animated.View
                  key={i}
                  style={{
                    zIndex: -i,
                    height: size,
                    width: size,
                    borderRadius: size / 2,
                    position: 'absolute',
                    backgroundColor: new Animated.Value(i).interpolate({
                      inputRange: normalIntervals,
                      outputRange: colors
                    })
                  }}
                />
              );
            })} */}
          </View>
        </View>
        {children}
      </View>
    );
  }
}

RadialGradient.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  intervals: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.number // in degrees - NOT radians.
};

RadialGradient.defaultProps = {
  height: 0,
  width: 0,
  rotation: 0
};
