// src/screens/AnalyticsScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function AnalyticsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <Text style={styles.monthText}>July 2022</Text>
        <View style={styles.dayRow}>
          {['S\n10', 'M\n11', 'T\n18', 'W\n13', 'T\n14', 'F\n15', 'S\n17'].map((day, index) => (
            <View
              key={index}
              style={[styles.dayBox, index === 2 && styles.activeDayBox]}>\n              <Text style={[styles.dayText, index === 2 && styles.activeDayText]}>
                {day}
              </Text>
            </View>
          ))}
        </View>

        {/* Today Report */}
        <Text style={styles.sectionTitle}>Today Report</Text>

        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.cardSmall}>
            <Text style={styles.cardLabel}>Active Calories</Text>
            <Text style={styles.cardValue}>645 Cal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardLargeDark}>
            <View style={styles.cardHeader}>
              <Image
                source={require('../../assets/images/cycle.png')}
                style={styles.icon}
              />
              <Text style={styles.cardLabelLight}>Cycling</Text>
            </View>
            <Image
              source={require('../../assets/images/Map.png')}
              style={styles.mapImageFull}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.cardSmallLight}>
            <Text style={styles.cardLabel}>Training Time</Text>
            <View style={styles.circleBox}>
              <Text style={styles.cardValue}>80%</Text>
            </View>
          </TouchableOpacity>

          <View style={{ width: width * 0.5 }}>
            <TouchableOpacity style={[styles.cardRed, { marginBottom: 10 }]}>
              <View style={styles.cardHeader}>
                <Image
                  source={require('../../assets/images/heart.png')}
                  style={styles.icon}
                />
                <Text style={styles.cardLabel}>Heart Rate</Text>
              </View>
              <Image
                source={require('../../assets/images/Heartrate.png')}
                style={styles.waveImage}
                resizeMode="contain"
              />
              <Text style={styles.cardValue}>79 Bpm</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardPurple}>
              <View style={styles.cardHeader}>
                <Image
                  source={require('../../assets/images/sleep.png')}
                  style={styles.icon}
                />
                <Text style={styles.cardLabel}>Sleep</Text>
              </View>
              <Image
                source={require('../../assets/images/sleepbar.png')}
                style={styles.sleepBar}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gridColumn}>
          <View style={styles.rightColumn}>
            <TouchableOpacity style={[styles.cardYellow, { marginBottom: 10 }]}>
              <View style={styles.cardHeader}>
                <Image
                  source={require('../../assets/images/steps.png')}
                  style={styles.icon}
                />
                <Text style={styles.cardLabel}>Steps</Text>
              </View>
              <Text style={styles.cardValue}>999 / 2000</Text>
              <View style={styles.progressBarBg}>
                <View style={styles.progressBarFill} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.cardMotivation, { marginBottom: 10 }]}>
              <Text style={styles.cardLabel}>Keep it up! 💪</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardBlue}>
              <View style={styles.cardHeader}>
                <Image
                  source={require('../../assets/images/water.png')}
                  style={styles.icon}
                />
                <Text style={styles.cardLabel}>Water</Text>
              </View>
              <View style={styles.whiteContainer}>
                <Image
                  source={require('../../assets/images/waterwave.png')}
                  style={styles.waterWave}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.cardValue}>6 / 8 Cups</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F6FA' },
  scrollContent: { padding: 20, paddingBottom: 100 },

  monthText: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  dayRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  dayBox: {
    backgroundColor: '#C9FF5D',
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDayBox: { backgroundColor: '#111' },
  dayText: { textAlign: 'center', fontSize: 12 },
  activeDayText: { color: '#fff' },

  sectionTitle: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  gridColumn: { flexDirection: 'row', marginTop: 10 },
  rightColumn: { width: '100%' },

  icon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  cardSmall: {
    width: width * 0.42,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
  },
  cardLargeDark: {
    width: width * 0.5,
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
  },
  mapImageFull: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginTop: 10,
  },
  cardLabelLight: { color: '#fff', fontSize: 16, fontWeight: '600' },

  cardSmallLight: {
    width: width * 0.42,
    backgroundColor: '#DAD0FF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  circleBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: '#957EFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  cardRed: {
    width: '100%',
    backgroundColor: '#FFE5E8',
    padding: 16,
    borderRadius: 12,
  },
  waveImage: {
    width: '100%',
    height: 30,
    marginVertical: 10,
  },

  cardYellow: {
    width: '100%',
    backgroundColor: '#FFF2DD',
    padding: 16,
    borderRadius: 12,
  },
  progressBarBg: {
    width: '100%',
    height: 8,
    backgroundColor: '#FDE9C3',
    borderRadius: 4,
    marginTop: 6,
  },
  progressBarFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#F7B84B',
    borderRadius: 4,
  },

  cardMotivation: {
    width: '100%',
    backgroundColor: '#FFD5D5',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
  },

  cardPurple: {
    width: '100%',
    backgroundColor: '#EEE2FF',
    padding: 16,
    borderRadius: 12,
  },
  sleepBar: {
    width: '100%',
    height: 40,
    marginTop: 10,
  },

  cardBlue: {
    width: '100%',
    backgroundColor: '#DCEFFB',
    padding: 16,
    borderRadius: 12,
  },
  whiteContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  waterWave: {
    width: '100%',
    height: 40,
  },

  cardLabel: { fontSize: 14, fontWeight: '600' },
  cardValue: { fontSize: 16, fontWeight: '700', marginTop: 6 },
});
