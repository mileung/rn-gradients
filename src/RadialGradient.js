import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { normalizeIntervals, getHypotenuse } from './utils';

// const { hairlineWidth } = StyleSheet;
const hairlineWidth = 1;
const doubleHairlineWidth = hairlineWidth * 2;

export default class RadialGradient extends React.Component {
  render() {
    const { style, height, width, colors, children } = this.props;
    let { intervals } = this.props;

    const diagonal = getHypotenuse(height, width);
    const gradientArrayLength = Math.ceil(diagonal / 2 / hairlineWidth);
    const normalIntervals = normalizeIntervals(intervals, colors, gradientArrayLength);

    return (
      <View style={[style, { height, width }]}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: height / 2,
              alignItems: 'center'
            }}
          >
            {[...Array(gradientArrayLength)].slice(0, undefined).map((_, i) => {
              const size = doubleHairlineWidth * (i + 1);
              return (
                <Animated.View
                  key={i}
                  style={{
                    zIndex: -i,
                    height: size,
                    width: size,
                    marginTop: -(doubleHairlineWidth * (i + 0.5)),
                    borderRadius: size / 2,
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

RadialGradient.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  intervals: PropTypes.arrayOf(PropTypes.number)
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    overflow: 'hidden'
  }
});
