import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Text as SvgText, Rect } from 'react-native-svg';

const AstroScreen = () => {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="170" viewBox="0 0 100% 200">
        <Defs>
          <RadialGradient id="grad1" cx="55%" cy="-12%" r="113%" fx="50%" fy="50%">
            <Stop offset="38%" stopColor="#F9A307" stopOpacity="1" />
            <Stop offset="100%" stopColor="#F9A307" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />

        <SvgText
          x="50%"
          y="65%"
          textAnchor="middle"
          fontSize="20"
          fontWeight="100"
          fill="black"
        >
          செல்வன்
        </SvgText>
      </Svg>


      <View style={styles.grid}>
        {/* First row */}
        <Text style={styles.cell}></Text> 
        <Text style={styles.cell}></Text>
        <Text style={styles.cell}></Text>
        <Text style={styles.cell}></Text>

        {/* Second row */}
        <Text style={styles.cell}>ல
        </Text>
        <Text style={styles.cellemty}></Text>
        <Text style={styles.cellemty}></Text>
        <Text style={styles.cell}></Text>

        {/* Third row */}
        <Text style={styles.cell}></Text>
        <Text style={styles.cellemty}></Text>
        <Text style={styles.cellemty}></Text>
        <Text style={styles.cell}></Text>

        {/* Fourth row */}
        <Text style={styles.cell}> </Text>
        <Text style={styles.cell}>ரா</Text>
        <Text style={styles.cell}></Text>
        <Text style={styles.cell}></Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.dataItem}>Data</Text>
        <Text style={styles.dataItem}>Data</Text>
      </View>
    </View>
  );
};

export default AstroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  cell: {
    width: '25%', 
    height: 70,   
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    lineHeight: 50,
  },
  cellemty: {
    width: '25%', 
    height: 50,  
    
    textAlign: 'center',
    lineHeight: 50, 
  },
  dataContainer: {
    marginTop: 60,
    margin:40
  },
  dataItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 5,
  },
});
