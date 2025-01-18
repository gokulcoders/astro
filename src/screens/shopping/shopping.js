
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure this import is correct
import { useNavigation } from '@react-navigation/native';
import Sidebar from '../sidenavbar/sidenavbar'; // Import Sidebar.js
const App = () => {
  const products = [
    { id: '1', name: 'அஷ்டலட்சுமி யந்திரம்', price: '₹ 700', image: require('../../../assets/images/shapping1.png'), backgroundColor: 'rgb(219, 167, 115)' },
    { id: '2', name: 'பைரவர் சர்வதோச நிவர்த்தி யந்திரம்', price: '₹ 800', image: require('../../../assets/images/shop.png'), backgroundColor: 'rgb(190, 134, 79)',},
    { id: '3', name: 'தன ஆகர்கன தாயத்து', price: '₹ 1500',image: require('../../../assets/images/locket.png'), backgroundColor:'#ecddfe', },
    { id: '4', name: 'பைரவர் சர்வதோச நிவர்த்தி யந்திரம்', price: '₹ 800', image: require('../../../assets/images/shapping1.png'), backgroundColor: 'rgb(219, 167, 115)' },
    { id: '5', name: 'தன ஆகர்கன தாயத்து', price: '₹ 1500',  image: require('../../../assets/images/shop.png'), backgroundColor: 'rgb(190, 134, 79)', },
    { id: '6', name: 'பைரவர் சர்வதோச நிவர்த்தி யந்திரம்', price: '₹ 800', image: require('../../../assets/images/locket.png'), backgroundColor:'#ecddfe', },
  ];

  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const navigation = useNavigation();
  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const renderItem = ({ item }) => (
  
    <View style={styles.card}>
      {/* Top Image Section */}
      <View style={[styles.imageBackground, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.productImage} />
    </View>

      
      <View style={styles.detailsContainer} >
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.cartButton}   onPress={() => navigation.navigate('Order')}>
          <Image
            source={require('../../../assets/images/Add Shopping Cart.png')} 
            style={styles.cartIcon}
          />
           
        </TouchableOpacity>
      </View>
      
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        
      
        <View style={styles.header}>
 
  <TouchableOpacity onPress={toggleSidebar}>
    <Icon name="menu" size={30} color="black" /> 
  </TouchableOpacity>
 
  <TouchableOpacity onPress={() => { /* Add your search functionality */ }}>
    <Icon name="search" size={25} color="black" /> 
  </TouchableOpacity>

  <Text style={styles.headerText}>ஆன்மிக பொருட்கள்</Text>


</View>
<Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
<View style={styles.banner}>
        <Text style={styles.bannerText}>Discount up to 30%</Text>
       
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
        numColumns={2}
      />
    </SafeAreaView>
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
      
    sidebar: {
        position: 'absolute', // Ensures the sidebar overlays on top of the screen
        top: 85,
        left: 0,
        width: '90%', 
        height: '100%', // Full height of the screen
        backgroundColor: '#ffffff', // Background color of the sidebar
        paddingTop: 20,
        zIndex: 999, // Ensures it's above other content
        shadowColor: '#000', 
        shadowOffset: { width: -2, height: 0 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 2, 
      },

sidebarItem: {
    marginBottom: 20, // Add some spacing between the items
    padding: 10, // Padding for each item
    // backgroundColor: '#f5f5f5', // Background color for the button
    borderRadius: 8, // Rounded corners for the button
    alignItems: 'center',
  },
  
  sidebarText: {
    fontSize: 15, // Adjust font size
    color: '#333', // Text color
 
    textAlign: 'left', // Align text to the left
  },
  sidetitle: {
    fontSize: 26,
    marginLeft: 50,
    color: '#F9A307',
    marginBottom: 10,
  },



  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  header: {
    marginTop: 40,
    padding: 16,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center', 
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  banner: {
    backgroundColor: '#990000',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 8,
    height: 140,
    padding: 16,
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 40,
  },
  productList: {
    padding: 16,
    
    
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 10, 
    overflow: 'hidden',
    
  },
  imageBackground: {
   
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    overflow: 'hidden', 
    height: 120,
  },
  productImage: {
    width: '60%',
    height: 80,
    resizeMode: 'cover',
    alignItems:"center",
    justifyContent:'center',
    marginTop:20,
    marginLeft:30,
  },
  detailsContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15, // Radius for the top-left corner
    borderTopRightRadius: 15, 
  },
  
  
  productName: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
    marginRight:80,
    marginTop:20,
    fontWeight:"bold"
  },
  cartButton: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    borderWidth: 1, 
    borderRadius: 10, 
    borderColor: '#b0b0b0', 
    padding: 5, 
    backgroundColor: '#fff', 
  },
  
  cartIcon: {
    width: 18,
    height: 19,
    tintColor: '#000',
  },
});

export default App;
