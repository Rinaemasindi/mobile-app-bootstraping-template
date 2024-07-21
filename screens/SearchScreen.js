import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Header from '../layout/Header';
import SearchBar from '../layout/SearchBar';
import Card from '../components/Card';
import { sampleData } from '../utils/sampleData';

/**
 * SearchScreen component displays a search bar and a list of search results.
 */
const SearchScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchContainer}>
      <SearchBar placeholder="Search..." />
      <FlatList
        contentContainerStyle={styles.listContent}
        data={sampleData}
        renderItem={({ item }) => (
          <Card title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flex: 1,
    padding: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default SearchScreen;
