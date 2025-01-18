import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet,Image } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Text as SvgText, Rect } from 'react-native-svg';

const DetailsScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>

      <Svg width="100%" height="210" viewBox="0 0 100% 200">
      <Defs>
  <RadialGradient id="grad1" cx="55%" cy="-12%" r="113%" fx="50%" fy="50%">
    
    <Stop offset="38%" stopColor="#E5B266" stopOpacity="1" />
    {/* <Stop offset="0%" stopColor="#FFD426" stopOpacity="2" /> */}
    <Stop offset="100%" stopColor="#E5B266" stopOpacity="0" />
  </RadialGradient>
</Defs>

        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
        
        <Image
    source={require('../../../assets/images/shapping1.png')}
    style={styles.cartIcon}
  />
      </Svg>

     
      <View style={styles.inputContainer}>
        <View style={styles.labelInputPair}>
          <Text style={styles.label}>அஷ்டலட்சுமி யந்திரம்
          </Text>
        
        </View>
     
        <View style={styles.labelInputPair}>
          <Text style={styles.price}>₹700

          </Text>
        
        </View>
        <View style={styles.labelInputPair}>
          <Text style={styles.contentone}>
          அஷ்டலட்சுமி யந்திரம் என்பது செல்வத்தை, வளத்தை மற்றும் இறையருளைப் பெற்றுக்கொள்வதற்கான புனிதமான ஆன்மீக சாதனமாகும். இந்த யந்திரம் மகாலட்சுமியின் எட்டு திருவடிவங்களையும் பிரதிபலிக்கிறது.

          </Text>
        
        </View>
        <View style={styles.labelInputPair}>
          <Text style={styles.contentone}>
          அவை ஆதி லட்சுமி, தன லட்சுமி, தைரிய லட்சுமி,கஜ லட்சுமி, சந்தான லட்சுமி, விஜய லட்சுமி, வித்யா லட்சுமி மற்றும் தான்ய லட்சுமி ஆகியவையாகும்
          </Text>
        
        </View>
        <View style={styles.buttonRow}>
      <TouchableOpacity style={[styles.button, styles.addToCart]}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buyNow]}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
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
  cartIcon: {
    width: 180, 
    height: 180, 
    marginLeft:90,
    marginTop:120,
    position:'absolute'
  },
  button: {
    width: 200,
    padding: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    marginTop: 110,
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
    width: 300,                
    marginRight: 5,           
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '800',
  },
  contentone: {
    width: 300,                
    marginRight: 5,           
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    fontWeight: '200',
    color:'#b0b0b0'
  },
  price: {
    width: 200,                
    marginRight: 5,           
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '800',
  },
  buttonRow: {
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-between', // Add space between the buttons
    padding: 10, // Add padding around the container
    width: '100%', // Full width of the parent container
  },
  button: {
    flex: 1, // Buttons take equal width
    paddingVertical: 12, // Vertical padding for height
    marginHorizontal: 5, // Add space between the buttons
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center the text
  },
  addToCart: {
    backgroundColor: '#FFD642', // Orange background for "Add to Cart"
  },
  buyNow: {
    backgroundColor: '#DD7B02', // Red background for "Buy Now"
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16, // Font size
    fontWeight: 'bold', // Bold text
  },
});
