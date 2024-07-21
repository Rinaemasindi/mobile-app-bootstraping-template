import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Platform, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Sample data for list and card components
const sampleData = [
  { id: '1', title: 'Item 1', description: 'This is the first item' },
  { id: '2', title: 'Item 2', description: 'This is the second item' },
  { id: '3', title: 'Item 3', description: 'This is the third item' },
];

// Card component
const Card = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome to Home Screen</Text>
        </View>
      }
      contentContainerStyle={styles.listContent}
      data={sampleData}
      renderItem={({ item }) => (
        <Card title={item.title} description={item.description} />
      )}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);

const SettingsScreen = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Settings</Text>
        </View>
      }
      contentContainerStyle={styles.listContent}
      data={[
        { id: '1', title: 'Account Settings' },
        { id: '2', title: 'Privacy' },
        { id: '3', title: 'Notifications' },
      ]}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Profile</Text>
        </View>
      }
      contentContainerStyle={styles.listContent}
      data={[
        { id: '1', title: 'Name: John Doe' },
        { id: '2', title: 'Email: john.doe@example.com' },
        { id: '3', title: 'Bio: A brief bio about John Doe.' },
      ]}
      renderItem={({ item }) => (
        <Text style={styles.profileText}>{item.title}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);

const SearchScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
      />
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

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Settings':
                iconName = 'settings';
                break;
              case 'Profile':
                iconName = 'person';
                break;
              case 'Search':
                iconName = 'search';
                break;
              default:
                iconName = 'home';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            elevation: 5, // Android shadow
            shadowColor: '#000', // iOS shadow color
            shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
            shadowOpacity: 0.2, // iOS shadow opacity
            shadowRadius: 2, // iOS shadow radius
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        {/* Commented out the More screen */}
        {/* <Tab.Screen name="More" component={MoreScreen} /> */}
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  settingItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 16,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    padding: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  moreItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  moreText: {
    fontSize: 16,
  },
});

export default App;
