import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { LinearGradient } from 'expo-linear-gradient';

type WorkoutDetailsRouteProp = RouteProp<RootStackParamList, 'WorkoutDetails'>;

const cardData = [
  {
    id: '1',
    text: 'Jumping Jacks',
    timestamp: '00:30',
    image: require('../../assets/images/jumpjack.png'),
  },
  {
    id: '2',
    text: 'Squats',
    timestamp: '01:30',
    image: require('../../assets/images/squats.png'),
  },
  {
    id: '3',
    text: 'Backward Lunge',
    timestamp: '02:30',
    image: require('../../assets/images/Build Whider Biceps.png'),
  },
];

export default function WorkoutDetailsScreen() {
  const route = useRoute<WorkoutDetailsRouteProp>();
  const navigation = useNavigation();
  const { workout } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={workout.image} style={styles.headerImage} />

      {/* status.png centered below image */}
      <View style={styles.statusContainer}>
        <Image source={require('../../assets/images/status.png')} style={styles.statusImage} />
      </View>

      <View style={styles.headerContent}>
        <Text style={styles.workoutTitle}>{workout.title}</Text>
      </View>

      <Text style={styles.description}>
        The lower abdomen and hips are the most difficult areas of the body to reduce when we are on a diet. Even so, in this area, especially the legs as a whole, you can reduce weight even if you don't use tools.
      </Text>

      {/* Rounds Section */}
      <View style={styles.roundsHeader}>
        <Text style={styles.roundsText}>Rounds</Text>
        <Text style={styles.roundsCount}>1/8</Text>
      </View>

      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.text}</Text>
              <Text style={styles.cardTimestamp}>{item.timestamp}</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Image
                source={require('../../assets/images/blkbutton.png')}
                style={{ width: 28, height: 28 }}
              />
              {/* Overlay Box on Header Image */}
            <View style={styles.overlayBox}>
              {/* Gradient Overlay Box */}
                <LinearGradient
                  colors={['#1D1D1D', '#68686800']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.overlayBox}
                />
              {/* You can add content here later, for now it’s just the container */}
            </View>

            </TouchableOpacity>
          </View>
        )}
      />

      {/* Let's Workout Button */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Let’s Workout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192126',
  },
  headerImage: {
    width: '100%',
    height: 280,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  statusContainer: {
    alignItems: 'center',
    marginTop: -32,
  },
  statusImage: {
    width: 258,
    height: 64,
    resizeMode: 'contain',
  },
  headerContent: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  workoutTitle: {
    fontSize: 28,
    fontFamily: 'Lato_700Bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  description: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    color: '#FFFFFF80',
    lineHeight: 22,
  },
  roundsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  roundsText: {
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
    color: '#FFFFFF',
  },
  roundsCount: {
    fontSize: 16,
    fontFamily: 'Lato_500Medium',
    color: '#FFFFFF',
  },
  card: {
    width: 350,
    height: 74,
    borderRadius: 15,
    backgroundColor: '#384046',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardImage: {
    width: 90,
    height: 60,
    marginLeft: 10,
    borderRadius: 8,
  },
  cardContent: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Lato_500Medium',
    color: '#FFFFFF',
    height: 22,
  },
  cardTimestamp: {
    fontSize: 13,
    fontFamily: 'Lato_400Regular',
    color: '#FFFFFF80',
    height: 16,
  },
  playButton: {
    position: 'absolute',
    right: 16,
    top: 23,
    width: 28,
    height: 28,
  },
  startButton: {
    marginHorizontal: 20,
    marginVertical: 30,
    backgroundColor: '#BBF246',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 16,
    fontFamily: 'Lato_700Bold',
    color: '#000',
  },
overlayBox: {
  position: 'absolute',
  top: 220,
  left: 20,
  width: 350,
  height: 134,
  borderBottomLeftRadius: 23,
  borderBottomRightRadius: 23,
  zIndex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 5,
  overflow: 'hidden',
  flexDirection: 'row',
},



});
