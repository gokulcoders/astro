import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const dates = [
  'JAN\n17', 'JAN\n18', 'JAN\n19', 'JAN\n20', 'JAN\n21', 'JAN\n22', 'JAN\n23'
];

const sections = [
  { title: 'சுபமுஹூர்த்தம்', times: [] },
  { title: 'நல்ல நேரம்', times: ['6:30 AM', '7:30 AM', '4:30 PM', '5:30 PM'] },
  { title: 'கெளரி நல்ல நேரம்', times: ['9:30 AM', '10:30 AM', '7:30 PM', '8:30 PM'] },
  { title: 'இராகு', times: ['7:30 AM', '9:00 AM'] },
  { title: 'குளிகை', times: ['1:30 PM', '3:00 PM'] },
  { title: 'எமகண்டம்', times: ['10:30 AM', '12:00 PM'] },
];

export default function DayCalendarScreen() {
  const [selectedIndex, setSelectedIndex] = useState(3);

  return (
    <View style={styles.container}>
      {/* Header Gradient */}
      <LinearGradient colors={['#ffd11a', '#ffb366']} style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>நாள் காட்டி</Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Month Title */}
        <Text style={styles.monthTitle}>ஜனவரி - திங்கள்கிழமை</Text>

        {/* Horizontal Date Selector */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
          {dates.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedIndex(index)} style={[
              styles.dateButton,
              selectedIndex === index && styles.dateButtonActive
            ]}>
              <Text style={[
                styles.dateText,
                selectedIndex === index && styles.dateTextActive
              ]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Subheader */}
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>உத்திராணம் - குரோசி - தை - 7</Text>
        </View>

        {/* Sections */}
        {sections.map((section, idx) => (
  <Animated.View
    key={idx}
    entering={FadeIn}
    exiting={FadeOut}
    style={styles.section}
  >
    <View style={styles.sectionHeader}>
      <View style={styles.bullet} />
      <Text style={styles.sectionTitle}>{section.title}</Text>
      {section.title === 'சுபமுஹூர்த்தம்' && (
        <Image
          source={require('../../../assets/images/bedtime.png')}
          style={styles.RightArrow}
        />
      )}
    </View>

    {/* Your content inside the section, like time slots */}
    <View style={styles.timeContainer}>
      {section.times.map((time, id) => (
        <View key={id} style={styles.timeBox}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      ))}
    </View>

    {/* Gray line after each section */}
    <View style={styles.separator} />
  </Animated.View>
))}


        {/* Bottom Details */}
        <View style={styles.bottomDetails}>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>குலம் - சித்ருக்கு </Text>
          <Text style={styles.bottomText}>பக்கிராம் - தபீர்</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.bottomText}>மகர லக்கணம் இருப்பது 04 நாட்கள் 12 விராடி</Text>
          <View style={styles.separator} />
          {/* Icons Row */}
          <View style={styles.iconRow}>
          <Image
          source={require('../../../assets/images/landscape_2(1).png')}
          style={styles.RightArrow}
        />
            <Text style={styles.iconLabel}>சூரிய உதயம்</Text>
          </View>

          <View style={styles.timeContainer}>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>9:00 AM</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>10:00 AM</Text>
            </View>
          </View>
          <View style={styles.iconRow}>
          <Image
          source={require('../../../assets/images/adjust.png')}
          style={styles.RightArrow}
        />
            <Text style={styles.iconLabel}>சூரிய உதயம்</Text>
          </View>

          <View style={styles.timeContainer}>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>9:00 AM</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>10:00 AM</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height:130, // or whatever fixed height you want
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 0, // <-- important to remove bottom line
    marginBottom: 0, 
    paddingBottom: 0, 
  },
  
  backButton: {
    position: 'absolute',
    left: 20,
    top: 55,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  bottomText: {
    fontSize: 14,
    color: '#666',
    marginRight:10,
  },
  
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0', // Light gray color
    marginVertical: 12, // Space above and below the line
    marginHorizontal: 16, // Indent line from both sides
  },
  
  scrollContent: {
    paddingBottom: 20,
  },
  monthTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#F39C12',
  },
  dateScroll: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  dateButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateButtonActive: {
    backgroundColor: '#ffbf80',
    borderColor: '#F39C12',
    borderWidth: 2,
  },
  dateText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  dateTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
  subHeader: {
    marginTop: 10,
    alignItems: 'center',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#555',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    width: 10,
    height: 10,
    backgroundColor: 'orange',
    borderRadius: 4,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff9933',
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeBox: {
    backgroundColor: 'rgb(232, 230, 230)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    margin: 5,
  },
  timeText: {
    fontSize: 14,
    color: 'black',
    fontWeight:500,
  },
  bottomDetails: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconLabel: {
    fontSize: 14,
    marginLeft: 8,
    color: '#333',
    
  },
  RightArrow: {
    width: 20,   
    height: 20,
    marginLeft: 8, 
    resizeMode: 'contain', 
  },
});
