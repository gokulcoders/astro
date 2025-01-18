import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Text as SvgText, Rect } from 'react-native-svg';

const DetailsScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <Svg width="100%" height="210" viewBox="0 0 100% 200">
      <Defs>
  <RadialGradient id="grad1" cx="55%" cy="-12%" r="113%" fx="50%" fy="50%">
    
    <Stop offset="38%" stopColor="#F9A307" stopOpacity="1" />
    {/* <Stop offset="0%" stopColor="#FFD426" stopOpacity="2" /> */}
    <Stop offset="100%" stopColor="#F9A307" stopOpacity="0" />
  </RadialGradient>
</Defs>

        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
        
        <SvgText
          x="50%"
          y="65%"
          textAnchor="middle"
          fontSize="30"
          fontWeight="650"
          fill="black"
        >
          AstroGlow
        </SvgText>
      </Svg>

     
      <View style={styles.inputContainer}>
        <View style={styles.labelInputPair}>
          <Text style={styles.label}>பெயர்</Text>
          <Text style={styles.colon}>:</Text> 
          <TextInput style={styles.input}  />
        </View>
        <View style={styles.labelInputPair}>
          <Text style={styles.label}>பிறந்த தேதி</Text>
          <Text style={styles.colon}>:</Text> 
          <TextInput style={styles.input}  />
        </View>
        <View style={styles.labelInputPair}>
          
          <Text style={styles.label}>பிறந்த நேரம்</Text>
          <Text style={styles.colon}>:</Text> 
          <TextInput style={styles.input} />
        </View>
        <View style={styles.labelInputPair}>
          <Text style={styles.label}>பிறந்த இடம்</Text>
          <Text style={styles.colon}>:</Text> 
          <TextInput style={styles.input}  />
        </View>
        <View style={styles.labelInputPair}>
  <Text style={styles.label}>மொபைல் எண்</Text>
  <Text style={styles.colon}>:</Text> 
  <TextInput style={styles.input}  />
</View>


      </View>
      <View style={styles.button}>
        <Button
          title="Next"
          onPress={() => navigation.navigate('Shopping')}
          color="#FF6600"
        />
        
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  button: {
    width: 200,
    padding: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    marginTop: 50,
    margin: 10,
    padding: 15,   
    borderRadius: 10, 
    marginBottom: 60,
  },
  labelInputPair: {
    flexDirection: 'row',      
    alignItems: 'center',       
    marginBottom: 32,           
  },
 
  label: {
    width: 140,                
    marginRight: 5,           
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    fontWeight: '500',
  },
  colon: {
    fontSize: 15,  
    marginRight: 10, 
  },
  input: {
    flex: 1,                  
    borderBottomWidth: 1,
    borderBottomColor: '#FF6600',
    padding: 5,
  },
});
