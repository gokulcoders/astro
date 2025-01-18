import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you are using the correct vector icon name
import { useNavigation } from '@react-navigation/native';

export default function SidebarScreen({ isVisible, toggleSidebar }) {
  const navigation = useNavigation();
  if (!isVisible) return null;
  return (
    <View style={styles.sidebar}>
      <View style={styles.astro}> <Image
          source={require('../../../assets/images/Fantasy.png')} 
          style={styles.Fantasy}
        />
         <Text style={styles.sidetitle}>AstroGlow</Text></View>
          
         <View style={styles.separator} />
       <TouchableOpacity style={styles.sidebarItem}   onPress={() => {
          navigation.navigate('Home');
          toggleSidebar(); 
        }}>
          <Image
          source={require('../../../assets/images/Home.png')} 
          style={styles.home}
        />
         <Text style={styles.sidebarText}>முகப்பு</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.sidebarItem} onPress={() => {navigation.navigate('Shopping');
         toggleSidebar(); }
       }>
          <Image
          source={require('../../../assets/images/Vector(2).png')} 
          style={styles.home}
        />
         <Text style={styles.sidebarText}>ஆன்மீக பொருள்கள் வாங்க
         </Text>
       
           
   
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.sidebarItem}  onPress={() => {navigation.navigate('Onlineastro');
         toggleSidebar(); }
       }>
        <Image
          source={require('../../../assets/images/Color Mode.png')} 
          style={styles.home}
        />
         <Text style={styles.sidebarText}>ஆன்லைனில் ஜோதிடம் பார்க்க</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.sidebarItem} onPress={() => {navigation.navigate('Astro')}}>
       <Image
          source={require('../../../assets/images/Services.png')} 
          style={styles.home}
        />
         <Text style={styles.sidebarText}>அமைப்புகள்
         </Text>
       </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute', 
        top: 45,
        left: 0,
        width: '96%', 
        height: '100%', 
        backgroundColor: '#ffffff', 
        paddingTop: 20,
        zIndex: 999, 
        
        shadowColor: '#000', 
        shadowOffset: { width: -2, height: 0 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 2, 
      },
      Fantasy:{
        marginLeft:30,
        width: 28, 
        height: 28,
        marginTop:5,
      },
      astro:{
        flexDirection: 'row', 
      },
      home: {
        width: 20,
        height: 20, 
        marginRight: 10,
      },
      sidetitle: {
        fontSize: 26,
        marginLeft: 30,
        color: '#F9A307',
        marginBottom: 10,
      },
      separator: {
        width: '92%', 
        height: 2, 
        backgroundColor: '#000000', 
        marginBottom: 20, 
        marginLeft: 10, 
      },
      sidebarItem: {
        marginBottom: 20, 
        padding: 10, 
        flexDirection: 'row', 
        alignItems: 'left', 
        borderRadius: 8, 
        justifyContent:'left'
      },
      sidebarText: {
        fontSize: 15, 
        color: '#333', 
       
        textAlign: 'left', 
      },
});
