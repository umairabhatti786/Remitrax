import React, { useEffect, useRef } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';

const AnimatedProgressBar = ({ progress = 0, height = 10, color = '#FFFFFF', backgroundColor , duration = 500,width }:any) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: progress,
      duration,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animation.interpolate({
    inputRange: [0, 200],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.container, { height, backgroundColor:backgroundColor ||'#F7F7F780',    width:     width|| '100%',
 
  }]}>
      <Animated.View
        style={[
          styles.progressBar,
          { width: widthInterpolated, backgroundColor: color },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 8,
  },
});

export default AnimatedProgressBar;
