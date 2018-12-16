import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import LinearGradient from './LinearGradient';
import RadialGradient from './RadialGradient';

const { height, width } = Dimensions.get('window');
let colors = ['#ade', '#fde'];
colors = ['#000', '#fff'];
// colors = ['red', 'green', 'blue'];
// const intervals = [0.2, 0.8, 1];

export default class Example extends React.Component {
  state = { rotation: 0, showGradient: false };

  render() {
    const { rotation } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.showGradient ? (
          <>
            {/* <LinearGradient
              height={height}
              width={width}
              rotation={rotation}
              colors={colors}
              // intervals={intervals}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ fontSize: 42, fontWeight: '900', color: '#fff9' }}>{rotation}°</Text>
            </LinearGradient> */}
            <RadialGradient
              height={height}
              // height={width}
              width={width}
              // rotation={rotation}
              colors={colors}
              // intervals={intervals}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              {/* <Text style={{ fontSize: 42, fontWeight: '900', color: '#fff9' }}>{rotation}°</Text> */}
            </RadialGradient>
          </>
        ) : (
          <Text>Nothing</Text>
        )}
      </View>
    );
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showGradient: true }), 500);
    // setInterval(() => {
    //   let rotation = this.state.rotation + 45;
    //   if (rotation > 360) {
    //     rotation = -360;
    //   }
    //   this.setState({ rotation });
    // }, 1500);
  }
}
