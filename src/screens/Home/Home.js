
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Sidebar from '../sidenavbar/sidenavbar'; 
const Home = () => {
  const navigation = useNavigation();

  const [isSidebarVisible, setSidebarVisible] = useState(false);
  
  
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const formatDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    

    return `${day < 10 ? '0' + day : day} - ${month < 10 ? '0' + month : month} - ${year}`;
  };

  return (
    <View style={styles.homeContainer}>
     
      <View style={styles.Menu}>
      <TouchableOpacity onPress={toggleSidebar}>
          <Icon name="menu" size={30} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="notifications" size={30} color="black" /> 
        </TouchableOpacity>
      </View>
 
      
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
  
      <View style={styles.dateSection}>
        <Text style={styles.date}>{formatDate()}</Text> {/* Display today's date */}
        <Text style={styles.tamilDate}>கார்த்திகை - 23 குருபிரு</Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={[styles.card, styles.orangeCard]}  onPress={() => {navigation.navigate('Shopping');
         toggleSidebar(); }
       }>
          <Text style={styles.cardTextshoop}>ஆன்லைன் பொருட்கள் வாங்க</Text>
          <Image
          source={require('../../../assets/images/Vector.png')} 
          style={styles.homes}
        />
          <View style={styles.containericon}>
    
    </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.yellowCard]}  onPress={() => {navigation.navigate('Onlineastro');
         toggleSidebar(); }
       }>
          <Text style={styles.cardTextmain}>ஆன்லைனில் ஜோதிடம் பார்க்க
          </Text>
          <Image
          source={require('../../../assets/images/Color Mode.png')} 
          style={styles.home}
        />
      
        </TouchableOpacity>
      </View>

      <View style={styles.videoSection}>
        <View style={styles.videoContainer}>
        
        <Image
          source={require('../../../assets/images/Videocam.png')} 
          style={styles.home}
        />
          <Text style={styles.videoText}>Video</Text>
        </View>
      </View>

      {/* More Cards */}
      {/* <View style={styles.moreCards}>
        <View style={styles.moreCardsLeft}>
          <TouchableOpacity style={[styles.smallCard, styles.greenCard, styles.row]} >
          <Icon name="calendar" size={20} color="#B75606" />
            <Text style={styles.cardText}>நாள் காட்டி</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.smallCard, styles.redCard, styles.row]}>
          <Icon name="flower" size={20} color="#4df052" />
            <Text style={styles.cardText}>சுபஹோரை</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.smallCard, styles.blueCard, styles.row]}>
          <Icon name="person" size={10} color="#1ffbff" />
          <Icon name="person" size={10} color="#1ffbff" />
            <Text style={styles.cardTextweeding}>திருமண பொருத்தம்</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.smallCard, styles.purpleCard, styles.row]}>
          <Icon name="link" size={20} color="#a530ff" />
            <Text style={styles.cardTextdate}>முகூர்த்த தினங்கள்</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.moreCardsRight}>
        <TouchableOpacity style={[styles.smallCard, styles.yellow, styles.row]} >
          <Icon name="calendar" size={20} color="#FFD642" />
            <Text style={styles.cardText}>மாத காட்டி</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.smallCard, styles.redCardbull, styles.row]}>
          <Icon name="flower" size={20} color="#e33522" />
            <Text style={styles.cardTextbull}>ராசுகாலம் எமகண்டம்</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.smallCard, styles.blueCardstar, styles.row]}>
          <Icon name="star" size={20} color="#0839fc" />
            <Text style={styles.cardTextstar}>கூடா நட்சத்திரம்</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.smallCard, styles.purpleCardbook,styles.row]}>
          <Icon name="book" size={20} color="#800080" />
            <Text style={styles.cardTextbook}>கொளரி புன்சாங்களம்</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <Text style={styles.todaysupdate}>Today's Updates</Text>
       <View style={styles.rowContainer}>
       <View style={styles.currentnewsleft}>
      <View style={styles.row}>
        <Image
          source={require('../../../assets/images/Ereader.png')} 
          style={styles.newsimage}
        />
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('Updates'); 
        }}
      >  <Text style={styles.text}  >Current News</Text></TouchableOpacity>
      
      </View>  <Image
          source={require('../../../assets/images/Right Arrow.png')} 
          style={styles.RightArrow}
        />

    </View>
      <View style={styles.currentnews}>
      <View style={styles.row}>
        <Image
          source={require('../../../assets/images/Ereader.png')} 
          style={styles.newsimage}
        />
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('Onlineastro'); 
        }}
      >  <Text style={styles.text}  >Current News</Text></TouchableOpacity>
      
      </View>
      <Image
          source={require('../../../assets/images/Right Arrow.png')} 
          style={styles.RightArrow}
        />
    </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    separator: {
        width: '90%', 
        height: 2, 
        backgroundColor: '#000000', 
        marginBottom: 20, 
        marginLeft: 20, 
      },
      home:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',

      },
      homes:{
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',

      },
      todaysupdate:{
         fontSize:18,
         fontWeight:500,
         marginTop:20,
         marginRight:160,
         alignItems:'left',
      },
      rowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginRight:20,
        backgroundColor: 'transprant', 
        marginTop:30,
        
      },
      RightArrow:{
        width: 50,
        height: 40, 
      },
    
     
      currentnews: {
        height: 120, 
        width: 150, 
        marginLeft:10, 
        backgroundColor: '#E60002', 
        borderRadius: 8, 
        alignItems: 'center', 
        justifyContent: 'center', 
      },
      currentnewsleft: {
        height: 120, 
        width: 150, 
        marginLeft:40, 
        backgroundColor: '#E60002', 
        borderRadius: 5, 
        padding:2,
        alignItems: 'center', 
        justifyContent: 'center', 
      },
      row: {
        flexDirection: 'row', 
        alignItems: 'center', 
      },
      newsimage: {
        width: 20,
        height: 20, 
        marginRight: 5, 
      },
    
      
      text: {
        color: 'white', 
        fontSize: 14, 
        fontWeight: 'bold', 
        
      },
    sidebar: {
        position: 'absolute', 
        top: 85,
        left: 0,
        width: '90%', 
        height: '100%', 
        backgroundColor: '#ffffff',
        paddingTop: 20,
        zIndex: 999, 
        shadowColor: '#000', 
        shadowOffset: { width: -2, height: 0 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 2, 
      },

sidebarItem: {
    marginBottom: 20, 
    padding: 10, 

    borderRadius: 8, 
    alignItems: 'center',
  },
  
  sidebarText: {
    fontSize: 15, // Adjust font size
    color: '#333', // Text color
 
    textAlign: 'left', // Align text to the left
  },
    
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFF5C6',
    alignItems: 'center',
    padding: 20,
   
  },
  dateSection: {
    backgroundColor: '#faaf3e',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    width: '95%',
  },
  containericon: {
    flex: 1,                
    justifyContent: 'center', 
    alignItems: 'center',    
    marginRight:14,
    marginTop:10
  
  },
  Menu: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', // Align icons to left and right
    padding: 10,
    marginTop:20,
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tamilDate: {
    fontSize: 12,
    marginTop: 10,
    color: 'black',
  },
  sidetitle: {
    fontSize: 26,
    marginLeft: 50,
    color: '#F9A307',
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  orangeCard: {
    backgroundColor: '#e78d05',
  },
  yellowCard: {
    backgroundColor: '#FFD642',
    
  },
  cardText: {
    fontSize: 13,
    color: 'black',
    marginLeft: 5, 
  },
  cardTextmain: {
    fontSize: 13,
    color: 'black',
    marginLeft: 5, 

  },
  cardTextshoop: {
    fontSize: 13,
    color: '#ffffff',
    marginLeft: 5, 
  },
  cardTextdate: {
    fontSize: 11,
    color: 'black',
    marginLeft: 5, 
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
  cardTextweeding: {
    fontSize: 11,
    color: 'black',
    marginLeft: 5, 
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  videoSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  videoContainer: {
    backgroundColor: '#d6d6c2',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: '90%',
  },
  videoIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  videoText: {
    fontSize: 20,
    color: 'black',
  },
  moreCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  moreCardsLeft: {
    flex: 1,
    alignItems: 'center',
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
  
  
  redCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#4df052', 
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
  blueCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 5,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    borderColor: '#1ffbff', 
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
});

export default Home;
