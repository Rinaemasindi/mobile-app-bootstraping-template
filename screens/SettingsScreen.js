import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from '../layout/Header';

/**
 * SettingsScreen component displays a list of settings options with a header.
 */
const settingsData = [
  { id: '1', title: 'Account Settings' },
  { id: '2', title: 'Privacy' },
  { id: '3', title: 'Notifications' },
];

const SettingsScreen = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      ListHeaderComponent={<Header title="Settings" />}
      contentContainerStyle={styles.listContent}
      data={settingsData}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>{item.title}</Text>
        </TouchableOpacity>
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
  settingItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
