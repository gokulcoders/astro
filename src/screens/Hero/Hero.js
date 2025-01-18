import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Svg, { Defs, RadialGradient, Stop, Text as SvgText, Rect } from 'react-native-svg';

const Hero = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Home'); 
  //   }, 9000);

  //   return () => clearTimeout(timer); 
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <Svg style={styles.svgBackground}>
        <Defs>
          <RadialGradient id="grad1" cx="55%" cy="-12%" r="93%" fx="50%" fy="50%">
            <Stop offset="8%" stopColor="#F9A307" stopOpacity="1" />
            <Stop offset="100%" stopColor="#F9A307" stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
        <SvgText
          x="50%"
          y="65%"
          textAnchor="middle"
          fontSize="20"
          fontWeight="650"
          fill="black"
        >
          AstroGlow
        </SvgText>
      </Svg>

      <Image
        source={require('../../../assets/images/godimages.png')}
        style={[styles.heroImage, { width: screenWidth * 0.6 }]} 
        resizeMode="contain"
      />

      <Image
        source={require('../../../assets/images/download.png')}
        style={[styles.heroImageNext, { width: screenWidth * 0.8 }]} 
        resizeMode="contain"
      />

      <Text style={styles.number}>2025</Text>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0,
  },
  svgBackground: {
    width: '100%',
    height: 210,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  heroImage: {
    width: '70%', 
    height: '40%', 
    aspectRatio: 1, 
    marginTop: '50%', 
  },
  heroImageNext: {
    width: '80%', 
    height: '30%', 
    aspectRatio: 1.5, 
    marginTop: '5%', 
  },
  number: {
    fontSize: 10,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});