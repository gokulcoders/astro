import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Text as SvgText, Rect } from 'react-native-svg';


import Toast from 'react-native-toast-message';
import { postRequest } from '../../utils/api'; 
import { setAuthToken } from '../../utils/api'; 
const DetailsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [dob, setdob] = useState('');
  const [phone, setphone] = useState('');
  const [place, setplace] = useState('');
  const [dobdate, setdobdate] = useState('');
  const handleNameChange = (text, field) => {
    if (field === 'name') {
      setName(text);
    } else if (field === 'dob') {
      setdob(text);
    }else if (field === 'phonenumber') {
      const phoneRegex = /^[0-9]{10}$/;
      
      // Remove any non-numeric characters
      const cleanedText = text.replace(/[^0-9]/g, ''); 
    
      if (cleanedText.length > 10) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'தவறான மொபைல் எண்',
          text2: 'தயவுசெய்து சரியான 10 இலக்க எண்ணை உள்ளிடவும்.',
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 60
        });
      } else {
        setphone(cleanedText); 
      }
    }
    
    else if (field === 'dobday') {
      setdobdate(text);
    } else if (field === 'place') {
      setplace(text);
    }
    console.log(field + ':', text);  
  };


const handleNext = async () => {
  if (!name || !dob || !dobdate || !place || !phone) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'பிழை',
      text2: 'அனைத்து தகவல்களையும் உள்ளிடவும்.',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 60
    });
    return;
  }

  const body = {
    phoneNumber: phone,
    name: name,
    dateOfBirth: dob,
    birthTime: dobdate,
    birthPlace: place,
  };

  try {
    const response = await postRequest('/auth/signup/customer', body);
    console.log('Signup Success:', response);
    setAuthToken(response.token);
    navigation.navigate('Home', { token: response.token });
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'வெற்றி!',
      text2: response.message, // ✅ showing backend message
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 60,
    });
  } catch (error) {
  
    console.error('Signup Failed:', error.response?.data || error.message);
  
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'பிழை',
      text2: error.response?.data?.message || error.message || 'API அழைப்பு தோல்வி.',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 60,
    });
  }
  
};

  
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
          x="52%"
          y="65%"
          textAnchor="middle"
          fontSize="15"
          fontWeight="650"
          fill="black"
        >
          நல்ல நேரம் ஆஸ்ட்ரோ
        </SvgText>
     
      </Svg>

     
      <View style={styles.inputContainer}>
      <View style={styles.title}>
      <Text style={styles.labeltitle}>உங்கள் வாழ்கையின் ரகசியங்களை <Text style={styles.boldtext}>அறிவோம்!</Text>

      </Text>
      </View>
        <View style={styles.labelInputPair}>
          <Text style={styles.label}>பெயர்</Text>
          <Text style={styles.colon}>:</Text> 
          <TextInput 
            style={styles.input}
            value={name}
            onChangeText={(text) => handleNameChange(text, 'name')}
            placeholder=""
          />
        </View>
        <View style={styles.labelInputPair}>
          <Text style={styles.label}>பிறந்த தேதி</Text>
          <Text style={styles.colon}>:</Text> 
          <TextInput style={styles.input}  
          value={dob}
          onChangeText={(text) => handleNameChange(text, 'dob')}
           placeholder="00-00-0000"
          />
        </View>
        <View style={styles.labelInputPair}>
          
          <Text style={styles.label}>பிறந்த நேரம்</Text>
          <Text style={styles.colon}>:</Text> 
          <TextInput style={styles.input}  
          value={dobdate}
          onChangeText={(text) => handleNameChange(text, 'dobday')}
           placeholder="0:00 PM"
          />
        </View>
        <View style={styles.labelInputPair}>
          <Text style={styles.label}>பிறந்த இடம்</Text>
          <Text style={styles.colon}>:</Text> 
          <TextInput style={styles.input}  
          value={place}
          onChangeText={(text) => handleNameChange(text, 'place')}
           placeholder=""
          />
        </View>
        <View style={styles.labelInputPair}>
  <Text style={styles.label}>மொபைல் எண்</Text>
  <Text style={styles.colon}>:</Text> 
  <TextInput style={styles.input}  
          value={phone}
          onChangeText={(text) => handleNameChange(text, 'phonenumber')}
           placeholder=""
          />
</View>


      </View>
      <View style={styles.button}>
        <Button
          title="Next"
          onPress={handleNext}
          color="#FF6600"
        />
          <Image
                  source={require('../../../assets/images/Nextpage.png')} 
                  style={styles.homes}
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
  labeltitle: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#333',   // or any dark color
    textAlign: 'center',
    lineHeight: 28,
    marginBottom:20,
  },

  homes: {
    width: 20,   
    height: 20,
    marginLeft: 8, 
    resizeMode: 'contain', 
  },
    title: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:20,
    },
   

  
  button: {
    width: 200,
    padding: 20,
    alignSelf: 'center',
  },
  boldtext: {
    fontWeight: 'bold',
  },
  
  inputContainer: {
    marginTop: 30,
    margin: 10,
    padding: 15,   
    borderRadius: 10, 
    marginBottom: 20,
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
