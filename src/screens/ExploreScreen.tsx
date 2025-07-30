import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function ExploreScreen() {
  const bestForYouData = [
    {
      title: 'Belly fat burner',
      duration: '10 min',
      level: 'Beginner',
      image: { uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680808/Belly_fat_burner_dorerd.png' },
    },
    {
      title: 'Lose Fat',
      duration: '10 min',
      level: 'Beginner',
      image: { uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680810/Lose_Fat_ankaow.png' },
    },
    {
      title: 'Plank',
      duration: '5 min',
      level: 'Expert',
      image: { uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680811/plank_copy_ecokji.png' },
    },
    {
      title: 'Build Wide',
      duration: '30 min',
      level: 'Intermediate',
      image: { uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680808/Build_Whider_Biceps_jzqgx1.png' },
    },
  ];

  const fastWarmupData = [
    {
      title: 'Leg exercises',
      duration: '10 min',
      level: 'Beginner',
      image: { uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680810/leg_zssutq.png' },
    },
    {
      title: 'Backward lunges',
      duration: '5 min',
      level: 'Beginner',
      image: { uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680810/lunges_mg7zt2.png' },
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F6FA' }}>
      <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingBottom: 100 }]}>
        {/* Title Image Section */}
        <View style={styles.titleCard}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680828/workout_hany7u.png' }}
            style={styles.titleImage}
          />
          <View style={styles.titleOverlay}>
            <Text style={styles.titleText}>Best Quarantine{'\n'}Workout</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See more {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Best for You Section */}
        <Text style={styles.sectionTitle}>Best for you</Text>
        <View style={styles.workoutGrid}>
          {bestForYouData.map((item, index) => (
            <WorkoutCard
              key={index}
              title={item.title}
              duration={item.duration}
              level={item.level}
              image={item.image}
            />
          ))}
        </View>

        {/* Challenge Section */}
        <Text style={styles.sectionTitle}>Challenge</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.challengeScroll}
        >
          <ChallengeCard
            title="Plank Challenge"
            image={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680811/plankC_imgblf.png' }}
            color="#C4FF5E"
          />
          <ChallengeCard
            title="Sprint Challenge"
            image={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680821/Sprint_y3w3g8.png' }}
            color="#1D1D1D"
            isLight={false}
          />
          <ChallengeCard
            title="Squat Challenge"
            image={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680821/Sqt_rg9fhn.png' }}
            color="#F2F2F2"
          />
        </ScrollView>

        {/* Fast Warmup Section */}
        <Text style={styles.sectionTitle}>Fast Warmup</Text>
        <View style={styles.workoutGrid}>
          {fastWarmupData.map((item, index) => (
            <WorkoutCard
              key={index}
              title={item.title}
              duration={item.duration}
              level={item.level}
              image={item.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

type WorkoutCardProps = {
  title: string;
  duration: string;
  level: string;
  image: any;
};

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  duration,
  level,
  image,
}) => (
  <View style={styles.workoutCard}>
    <View style={styles.workoutCardContent}>
      <Image source={image} style={styles.workoutImage} />
      <View style={styles.workoutInfo}>
        <Text style={styles.workoutTitle}>{title}</Text>
        <Text style={styles.workoutMeta}>{duration}</Text>
        <Text style={styles.workoutMeta}>{level}</Text>
      </View>
    </View>
  </View>
);

type ChallengeCardProps = {
  title: string;
  image: any;
  color: string;
  isLight?: boolean;
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  image,
  color,
  isLight = true,
}) => (
  <View style={[styles.challengeCard, { backgroundColor: color }]}>
    <Image source={image} style={styles.challengeImage} />
    <Text style={[styles.challengeText, { color: isLight ? '#000' : '#fff' }]}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  titleCard: {
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 24,
  },
  titleImage: {
    width: '100%',
    height: '100%',
  },
  titleOverlay: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  seeMore: {
    color: '#C4FF5E',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 8,
  },
  workoutGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  workoutCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  workoutCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workoutImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  workoutInfo: {
    flex: 1,
    padding: 12,
  },
  workoutTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#1D1D1D',
  },
  workoutMeta: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  challengeScroll: {
    marginBottom: 24,
  },
  challengeCard: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginRight: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  challengeText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});