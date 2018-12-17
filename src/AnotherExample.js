import React from 'react';
import { FlatList, StatusBar, SafeAreaView, View, Dimensions, Text } from 'react-native';
import LinearGradient from './LinearGradient';
import RadialGradient from './RadialGradient';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const spacing = 10;

export default class AnotherExample extends React.Component {
  render() {
    return (
      <>
        <StatusBar hidden />
        <FlatList
          data={data}
          keyExtractor={(_, i) => i}
          ListFooterComponent={<View style={{ height: spacing }} />}
          renderItem={({ item: { colors, intervals, rotation }, i, index }) => {
            return (
              <LinearGradient
                key={index}
                colors={colors}
                intervals={intervals}
                rotation={rotation + 180}
                width={SCREEN_WIDTH - 2 * spacing}
                height={SCREEN_WIDTH / 1.2}
                style={{
                  marginTop: spacing,
                  borderRadius: spacing,
                  overflow: 'hidden',
                  alignSelf: 'center'
                }}
              />
            );
          }}
        />
      </>
    );
  }
}

const data = [
  // I just copied Grabient.com
  {
    colors: ['#FFFFFF', '#6284FF', '#FF0000'],
    rotation: 180
  },
  {
    colors: ['#52ACFF', '#FFE32C'],
    intervals: [0.25, 1],
    rotation: 180
  },
  {
    colors: ['#FFE53B', '#FF2525'],
    intervals: [0, 0.75],
    rotation: 147
  },
  {
    colors: ['#FAACA8', '#DDD6F3'],
    rotation: 19
  },
  {
    colors: ['#21D4FD', '#B721FF'],
    rotation: 19
  },
  {
    colors: ['#08AEEA', '#2AF598'],
    rotation: 0
  },
  {
    colors: ['#FEE140', '#FA709A'],
    rotation: 90
  },
  {
    colors: ['#8EC5FC', '#E0C3FC'],
    rotation: 62
  },
  {
    colors: ['#FBAB7E', '#F7CE68'],
    rotation: 62
  },
  {
    colors: ['#FF3CAC', '#784BA0', '#2B86C5'],
    rotation: 225
  },
  {
    colors: ['#D9AFD9', '#97D9E1'],
    rotation: 0
  },
  {
    colors: ['#00DBDE', '#FC00FF'],
    rotation: 90
  },
  {
    colors: ['#F4D03F', '#16A085'],
    rotation: 132
  },
  {
    colors: ['#0093E9', '#80D0C7'],
    rotation: 160
  },
  {
    colors: ['#74EBD5', '#9FACE6'],
    rotation: 90
  },
  {
    colors: ['#FAD961', '#F76B1C'],
    rotation: 90
  },
  {
    colors: ['#FA8BFF', '#2BD2FF', '#2BFF88'],
    intervals: [0, 0.52, 0.9],
    rotation: 45
  },
  {
    colors: ['#FBDA61', '#FF5ACD'],
    rotation: 45
  },
  {
    colors: ['#8BC6EC', '#9599E2'],
    rotation: 135
  },
  {
    colors: ['#A9C9FF', '#FFBBEC'],
    rotation: 180
  },
  {
    colors: ['#3EECAC', '#EE74E1'],
    rotation: 19
  },
  {
    colors: ['#4158D0', '#C850C0', '#FFCC70'],
    intervals: [0, 0.46, 1],
    rotation: 43
  },
  {
    colors: ['#85FFBD', '#FFFB7D'],
    rotation: 45
  },
  {
    colors: ['#FFDEE9', '#B5FFFC'],
    rotation: 0
  },
  {
    colors: ['#FF9A8B', '#FF6A88', '#FF99AC'],
    intervals: [0, 0.55, 1],
    rotation: 90
  }
];
