import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const popularWorkouts = [
  {
    id: '1',
    title: 'Lower Body Training',
    image: require('../../assets/images/lowbdytrn.png'),
    kcal: '500 kcal',
    time: '50 Min',
  },
  {
    id: '2',
    title: 'Hand Training',
    image: require('../../assets/images/handtrain.png'),
    kcal: '600 kcal',
    time: '30 Min',
  },
];

const todayPlans = [
  {
    id: '1',
    title: 'Push Up',
    subtitle: '100 Push up a day',
    level: 'Intermediate',
    progress: 50,
    image: require('../../assets/images/Push Up.png'),
  },
  {
    id: '2',
    title: 'Sit Up',
    subtitle: '20 Sit up a day',
    level: 'Beginner',
    progress: 75,
    image: require('../../assets/images/Sit Up.png'),
  },
  {
    id: '3',
    title: 'Knee Push Up',
    subtitle: '10 Knee Push Up a day',
    level: 'Beginner',
    progress: 75,
    image: require('../../assets/images/Knee Push Up.png'),
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning 🔥</Text>
          <Text style={styles.name}>Shahmeer Bukhari</Text>
        </View>

        <TextInput
          placeholder="Search workout, training plan..."
          placeholderTextColor="#999"
          style={styles.searchBar}
        />

        <Text style={styles.sectionTitle}>Popular Workouts</Text>

        <FlatList
          data={popularWorkouts}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                item.id === '1'
                  ? navigation.navigate('WorkoutDetails', { workout: item })
                  : null
              }
            >
              <Image source={item.image} style={styles.cardImage} />

              <LinearGradient
                colors={['rgba(0,0,0,0.5)', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.cardGradient}
              />

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>

                <View style={styles.infoRow}>
                  <Image
                    source={require('../../assets/images/fire.png')}
                    style={styles.infoIcon}
                  />
                  <Text style={styles.infoText}>{item.kcal}</Text>
                </View>

                <View style={[styles.infoRow, { marginTop: 4 }]}>
                  <Image
                    source={require('../../assets/images/minutes.png')}
                    style={styles.infoIcon}
                  />
                  <Text style={styles.infoText}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.sectionTitle}>Today Plan</Text>
      </ScrollView>

      {/* FlatList outside ScrollView for Today Plan */}
      <FlatList
        data={todayPlans}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.todayCard}>
            <Image source={item.image} style={styles.todayImage} />
            <View style={styles.todayContent}>
              <Text style={styles.todayTitle}>{item.title}</Text>
              <Text style={styles.todaySubtitle}>{item.subtitle}</Text>

              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.level}</Text>
              </View>

              <View style={styles.progressBackground}>
                <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
                <Text style={styles.progressText}>{item.progress}%</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontFamily: 'Lato_400Regular',
    color: '#666',
     marginTop: 30,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato_700Bold',
    color: '#000',
  },
  searchBar: {
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontFamily: 'Lato_400Regular',
    marginBottom: 30,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
    marginBottom: 10,
    color: '#000',
  },
  card: {
    width: 280,
    height: 174,
    borderRadius: 23,
    overflow: 'hidden',
    backgroundColor: '#F9F9F9',
    position: 'relative',
    marginRight: 20,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 23,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '30%',
    height: '100%',
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
  },
  cardContent: {
    position: 'absolute',
    left: 20,
    top: 32,
  },
  cardTitle: {
    width: 128,
    height: 58,
    fontSize: 24,
    fontFamily: 'Lato_700Bold',
    color: '#FFFFFF',
    lineHeight: 24,
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFFCC',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 9,
    gap: 4,
  },
  infoIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  infoText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Lato_400Regular',
  },
  todayCard: {
    width: 350,
    height: 120,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 20,
  },
  todayImage: {
    width: 151,
    height: 101,
    borderRadius: 12,
    margin: 10,
  },
  todayContent: {
    flex: 1,
    paddingTop: 10,
  },
  todayTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
    color: '#000',
  },
  todaySubtitle: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4,
    color: '#444',
  },
  badge: {
    alignSelf: 'flex-end',
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    marginBottom: 6,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
  progressBackground: {
    width: 209,
    height: 16,
    backgroundColor: '#F2F2F2',
    borderRadius: 3,
    justifyContent: 'center',
    marginTop: 5,
  },
  progressBar: {
    height: 16,
    backgroundColor: '#BBF246',
    borderRadius: 3,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  progressText: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
});
