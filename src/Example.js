import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import LinearGradient from './LinearGradient';

const { height, width } = Dimensions.get('window');
const colors = ['#ade', '#fde'];
// const colors = ['#000', '#fff'];
// const colors = ['red', 'green', 'blue'];
// const balancePoints = [0, 0.3, 1];

export default class Example extends React.Component {
  state = { rotation: -360, showGradient: false };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.showGradient ? (
          <LinearGradient
            height={height}
            width={width}
            rotation={this.state.rotation}
            // rotation={90}
            colors={colors}
            // balancePoints={balancePoints}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 42, fontWeight: '900', color: '#fff9' }}>
              {this.state.rotation}°
            </Text>
          </LinearGradient>
        ) : (
          <Text>Nothing</Text>
        )}
      </View>
    );
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showGradient: true }), 500);
    setInterval(() => {
      let rotation = this.state.rotation + 45;
      if (rotation > 360) {
        rotation = -360;
      }
      this.setState({ rotation });
    }, 1500);
  }
}
