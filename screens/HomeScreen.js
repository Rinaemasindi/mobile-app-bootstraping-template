import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../layout/Header';
import Card from '../components/Card';
import { sampleData } from '../utils/sampleData';

/**
 * HomeScreen component displays a list of items with a header.
 */
const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      ListHeaderComponent={<Header title="Welcome to Home Screen" />}
      contentContainerStyle={styles.listContent}
      data={sampleData}
      renderItem={({ item }) => (
        <Card title={item.title} description={item.description} />
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
});

export default HomeScreen;
