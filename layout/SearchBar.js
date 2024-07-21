import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

/**
 * SearchBar component allows users to enter search queries.
 * 
 * @param {string} placeholder - The placeholder text for the search bar.
 */
const SearchBar = ({ placeholder }) => (
  <TextInput
    style={styles.searchInput}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  searchInput: {
    padding: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default SearchBar;
