// src/screens/ProfileScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Profile Header */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://placehold.co/100x100/BBF246/000?text=P' }} // Placeholder profile image
          style={styles.profileImage}
        />
        <Text style={styles.name}>Shahmeer Bukhari</Text>
        <Text style={styles.email}>shahmeerbukhari007@gmail.com</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>72kg</Text>
          <Text style={styles.statLabel}>Weight</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>175cm</Text>
          <Text style={styles.statLabel}>Height</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>22</Text>
          <Text style={styles.statLabel}>Age</Text>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemContent}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/user_icon.png' }}
              style={styles.settingIcon}
            />
            <Text style={styles.settingText}>Personal Information</Text>
          </View>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/arrow_right_icon.png' }}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemContent}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/history_icon.png' }}
              style={styles.settingIcon}
            />
            <Text style={styles.settingText}>Activity History</Text>
          </View>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/arrow_right_icon.png' }}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemContent}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/bell_icon.png' }}
              style={styles.settingIcon}
            />
            <Text style={styles.settingText}>Notification Settings</Text>
          </View>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/arrow_right_icon.png' }}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemContent}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/lock_icon.png' }}
              style={styles.settingIcon}
            />
            <Text style={styles.settingText}>Privacy Policy</Text>
          </View>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/arrow_right_icon.png' }}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemContent}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/help_icon.png' }}
              style={styles.settingIcon}
            />
            <Text style={styles.settingText}>Help & Support</Text>
          </View>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/arrow_right_icon.png' }}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingItem, styles.logoutButton]}>
          <View style={styles.settingItemContent}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753696848/logout_icon.png' }}
              style={styles.settingIcon}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6FA', // Light background for the screen
  },
  content: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 60, // Give some space from the top for better aesthetics
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#BBF246', // Border color to match app theme
    borderWidth: 3,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  editProfileButton: {
    backgroundColor: '#BBF246', // Theme color for button
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  editProfileButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute space evenly
    width: '100%',
    marginBottom: 40, // Increased margin for separation
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background for stat boxes
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    flex: 1, // Allow boxes to take equal space
    marginHorizontal: 5, // Small margin between boxes
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15, // Increased margin for section title
    paddingLeft: 5, // Align with setting items
  },
  settingItem: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 15, // More rounded corners
    marginBottom: 12, // Consistent spacing
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between content and arrow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  settingItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    width: 24,
    height: 24,
    marginRight: 15, // Space between icon and text
    tintColor: '#555', // Default icon color
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  arrowIcon: {
    width: 18,
    height: 18,
    tintColor: '#999',
  },
  logoutButton: {
    backgroundColor: '#FFEBEE', // Light red for logout
    marginTop: 20, // More space above logout
    borderColor: '#FF7676',
    borderWidth: 1,
  },
  logoutText: {
    color: '#FF7676', // Red text for logout
    fontSize: 16,
    fontWeight: '600',
  },
});