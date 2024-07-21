import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import Header from '../layout/Header';

/**
 * ProfileScreen component displays user profile information with a header.
 */
const profileData = [
  { id: '1', title: 'Name: John Doe' },
  { id: '2', title: 'Email: john.doe@example.com' },
  { id: '3', title: 'Bio: A brief bio about John Doe.' },
];

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      ListHeaderComponent={<Header title="Profile" />}
      contentContainerStyle={styles.listContent}
      data={profileData}
      renderItem={({ item }) => (
        <Text style={styles.profileText}>{item.title}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProfileScreen;
