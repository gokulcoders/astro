import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Image} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Text as SvgText, Rect } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Sidebar from '../sidenavbar/sidenavbar'; 
import  { useState } from 'react';
const DetailsScreen = ({ navigation }) => {
  

    
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  
  
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <View style={styles.container}>

      <Svg width="100%" height="200" viewBox="0 0 100% 200">
           <Defs>
       <RadialGradient id="grad1" cx="55%" cy="-12%" r="113%" fx="50%" fy="50%">
         
         <Stop offset="40%" stopColor="#F9A307" stopOpacity="1" />
         {/* <Stop offset="0%" stopColor="#FFD426" stopOpacity="2" /> */}
         <Stop offset="100%" stopColor="#F9A307" stopOpacity="0" />
       </RadialGradient>
     </Defs>
     
             <Rect x="0" y="0" width="100%" height="65%" fill="url(#grad1)" />
             
             <SvgText
               x="50%"
               y="70%"
               textAnchor="middle"
               fontSize="30"
               fontWeight="650"
               fill="black"
             >
                <View style={styles.rowicon}>
                <TouchableOpacity onPress={toggleSidebar}>
                    <Icon name="menu" size={30} color="black" /> 
                  </TouchableOpacity>
       
     
     </View>
     <Text style={styles.title}>ஆன்லைனில் ஜோதிடம் பார்க்க
     </Text>
     
               
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

 <View style={styles.labelInputPair}>
          
          <Text style={styles.label}>ஜாதகம் பார்க்க விரும்பும் நாள்</Text>
          <Text style={styles.colon}>:</Text> 
          <Image
                     source={require('../../../assets/images/Calendar.png')} 
                     style={styles.cartIcon}
                   />
        </View>

        <View style={styles.labelInputPair}>
          
          <Text style={styles.label}>தேவைப்படும் நேரம்</Text>
          <Text style={styles.colon}>:</Text> 
          <Image
                     source={require('../../../assets/images/Time Span.png')} 
                     style={styles.cartIcon}
                   />
        </View>
        <View style={styles.labelInputPair}>
          
          <Text style={styles.label}>
கேள்விகள்</Text>
          <Text style={styles.colon}>:</Text> 
          <Image
                     source={require('../../../assets/images/Play Record.png')} 
                     style={styles.cartIcon}
                   />
                     <Image
                     source={require('../../../assets/images/Add.png')} 
                     style={styles.cartIconplus}
                   />
        </View>
        <View style={styles.labelInputPair}>
          
          <Text style={styles.labellimit}>
          Limit 5 Per Audio ₹1000
</Text>
       
          <Text style={styles.labellimit}>
          Limit 5 Per Audio ₹1000
</Text>
        </View>
        <Text></Text>
        <View style={styles.labelInputPair}>
          
          <Text style={styles.label}>ஆன்லைனில் பணம் செலுத்த
          </Text>
            <View style={styles.button}>
      
        <Button
          title="Pay Now"
          onPress={() => navigation.navigate('Shopping')}
          color="#DD7B02"
        />
        
      </View>
      
        </View>
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
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
    marginTop: 10,
    margin: 10,
    padding: 15,   
    borderRadius: 10, 
    marginBottom: 60,
  },
  labelInputPair: {
    flexDirection: 'row',      
    alignItems: 'center',       
    marginBottom: 15,           
  },
 
  label: {
    width: 140,                
    marginRight: 5,           
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    fontWeight: '500',
  },
  labellimit: {
    width: 140,                
    marginRight: 5,           
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    fontWeight: '200',
    color:'red'
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
  rowicon: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space out the images evenly
    width: '100%', // Full width
    padding: 10, // Optional: Add padding to the container
    alignItems:'top',
    position: 'absolute'
  },
  cartIcon: {
    width: 30, 
    height: 30, 
  },
  cartIconplus: {
    width: 30, 
    height: 30, 
    marginLeft:80,
  },
  title:{
    width: 800,                
    marginLeft: 20,           
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '500',
    justifyContent:'center',
    marginTop:10,
    alignContent:'center',
    position: 'absolute',
    marginTop:70,
  }
});
