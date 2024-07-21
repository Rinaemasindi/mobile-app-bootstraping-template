import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Header component displays a header with a given title.
 * 
 * @param {string} title - The title to display in the header.
 */
const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Header;
