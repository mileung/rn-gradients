import React from 'react';
import { View, StatusBar, Dimensions, Text } from 'react-native';
import LinearGradient from './LinearGradient';
import RadialGradient from './RadialGradient';

const { height, width } = Dimensions.get('window');
let colors = ['#ade', '#fde'];
colors = ['#000', '#fff'];
// colors = ['red', 'green', 'blue'];
// const intervals = [0.2, 0.8, 1];

export default class Example extends React.Component {
  state = {
    rotation: 0,
    showGradient: false
  };

  render() {
    const { rotation } = this.state;
    let Gradient = LinearGradient;
    // Gradient = RadialGradient;

    // return (
    //   <Gradient
    //     height={height}
    //     width={width}
    //     colors={colors}
    //     rotation={rotation}
    //     style={{ justifyContent: 'center', alignItems: 'center' }}
    //   >
    //     <Text style={{ fontSize: 42, fontWeight: '900', color: '#fffe' }}>Hello, World!</Text>
    //   </Gradient>
    // );

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar hidden />
        {this.state.showGradient ? (
          <Gradient
            height={height}
            width={width}
            colors={colors}
            // intervals={intervals}
            rotation={rotation}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 42, fontWeight: '900', color: '#fff9' }}>{rotation}°</Text>
          </Gradient>
        ) : (
          // This is just here to show how quickly the gradients can be
          <Text>Hold on...</Text>
        )}
      </View>
    );
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showGradient: true }), 100);
    // setInterval(() => {
    //   let rotation = this.state.rotation + 15;
    //   if (rotation > 360) {
    //     rotation = -360;
    //   }
    //   this.setState({ rotation });
    // }, 1000);
  }
}
