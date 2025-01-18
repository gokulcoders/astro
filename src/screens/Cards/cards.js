import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Svg, { Defs, RadialGradient, Stop, Text as SvgText, Rect } from 'react-native-svg';

const Cards = () => {
    const navigation = useNavigation();
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

        <Rect x="0" y="0" width="100%" height="70%" fill="url(#grad1)" />
        
        <SvgText
          x="50%"
          y="65%"
          textAnchor="middle"
          fontSize="30"
          fontWeight="650"
          fill="black"
        >
           <View style={styles.rowicon}>
           <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home'); 
      }}
    ><Image
    source={require('../../../assets/images/Back.png')}
    style={styles.cartIcon}
  /></TouchableOpacity>
  
 <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home'); 
      }}
    >
      <Image
        source={require('../../../assets/images/Doorbell.png')}
        style={styles.cartIcon}
      />
    </TouchableOpacity>
</View>

          
        </SvgText>
      </Svg>
      <Text style={styles.todaysupdate}>Today's Updates</Text>
      <View style={styles.moreCards}>
   
   
    
   <View style={styles.moreCardsLeft}>
     <TouchableOpacity style={[styles.smallCard, styles.greenCard, styles.row]} >
     <Image
                      source={require('../../../assets/images/calendar 1(1).png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardText}>நாள் காட்டி</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.redCard, styles.row]}>
     <Image
                      source={require('../../../assets/images/Flower.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardText}>சுபஹோரை</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.blueCard, styles.row]}>
     <Image
                      source={require('../../../assets/images/Meeting.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardTextweeding}>திருமண பொருத்தம்</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.purpleCard, styles.row]}>
     <Image
                      source={require('../../../assets/images/Chain Intermediate.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardTextdate}>முகூர்த்த தினங்கள்</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.redCard, styles.row]}>
     <Image
                      source={require('../../../assets/images/Flower.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardText}>சுபஹோரை</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.blueCard, styles.row]}>
     <Image
                      source={require('../../../assets/images/Meeting.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardTextweeding}>திருமண பொருத்தம்</Text>
     </TouchableOpacity>
   </View>

   <View style={styles.moreCardsRight}>
   <TouchableOpacity style={[styles.smallCard, styles.yellow, styles.row]} >
   <Image
                      source={require('../../../assets/images/calendar 1.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardText}>மாத காட்டி</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.redCardbull, styles.row]}>
     <Image
                      source={require('../../../assets/images/Bull.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardTextbull}>ராசுகாலம் எமகண்டம்</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.blueCardstar, styles.row]}>
     <Image
                      source={require('../../../assets/images/Christmas Star.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardTextstar}>கூடா நட்சத்திரம்</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={[styles.smallCard, styles.purpleCardbook,styles.row]}>
     <Image
                      source={require('../../../assets/images/Cooking Book.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardTextbook}>கொளரி புன்சாங்களம்</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.redCardbull, styles.row]}>
     <Image
                      source={require('../../../assets/images/Bull.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardTextbull}>ராசுகாலம் எமகண்டம்</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.smallCard, styles.blueCardstar, styles.row]}>
     <Image
                      source={require('../../../assets/images/Christmas Star.png')} 
                      style={styles.cartIcon}
                    />
       <Text style={styles.cardTextstar}>கூடா நட்சத்திரம்</Text>
     </TouchableOpacity>
   </View>
 </View>
     

    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
 
    padding: 0,
    margin: 0,
  },
  
  blueCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#1ffbff', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  todaysupdate:{
    fontSize:18,
    fontWeight:500,
    marginBottom:20,
    marginRight:180,
    alignItems:'left',
 },
  purpleCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#a530ff', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  purpleCardbook: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#800080', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  blueCardstar: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#0839fc', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  cardTextbull: {
    fontSize: 11,
    color: 'black',
    marginLeft: 10, 
  },
  cardTextstar: {
    fontSize: 11,
    color: 'black',
    marginLeft: 3, 
  },
  cardTextbook: {
    fontSize: 11,
    color: 'black',
    marginLeft: 5, 
  },
  moreCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:5
  },
  moreCardsLeft: {
    flex: 1,
    alignItems: 'center',
    marginTop:3,
  },
  cardText: {
    fontSize: 13,
    color: 'black',
    marginLeft: 5, 
  },
  cardTextweeding: {
    fontSize: 11,
    color: 'black',
    marginLeft: 5, 
  },
  cardTextdate: {
    fontSize: 11,
    color: 'black',
    marginLeft: 5, 
  },
  moreCardsRight: {
    flex: 1,
    alignItems: 'center',
  },
  smallCard: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  redCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#4df052', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  greenCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#B75606', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  yellow: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#FFD642', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  redCardbull:{
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#e33522', 
    borderLeftWidth: 5, 
    borderWidth: 0, 

  },
  blueCardstar: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#0839fc', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  purpleCardbook: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#800080', 
    borderLeftWidth: 5, 
    borderWidth: 0, 
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  rowicon: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space out the images evenly
    width: '100%', // Full width
    padding: 10, // Optional: Add padding to the container
    alignItems:'top',
  },
  cartIcon: {
    width: 20, 
    height: 20, 
  },
});