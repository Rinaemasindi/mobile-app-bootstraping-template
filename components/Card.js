import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Card component displays a card with a title and description.
 * 
 * @param {string} title - The title of the card.
 * @param {string} description - The description of the card.
 */
const Card = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 1, // Shadow effect for Android
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default Card;
