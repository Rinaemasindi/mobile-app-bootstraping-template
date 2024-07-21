import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.header}>
      <Text style={styles.headerText}>Home</Text>
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.text}>Scrollable Content Here</Text>
      {/* Add more content here */}
    </ScrollView>
  </SafeAreaView>
);

const SettingsScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.header}>
      <Text style={styles.headerText}>Settings</Text>
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.text}>Scrollable Content Here</Text>
      {/* Add more content here */}
    </ScrollView>
  </SafeAreaView>
);

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.header}>
      <Text style={styles.headerText}>Profile</Text>
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.text}>Scrollable Content Here</Text>
      {/* Add more content here */}
    </ScrollView>
  </SafeAreaView>
);

const MoreScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.header}>
      <Text style={styles.headerText}>More</Text>
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.text}>Scrollable Content Here</Text>
      {/* Add more content here */}
    </ScrollView>
  </SafeAreaView>
);

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
              case 'More':
                iconName = 'more-horiz';
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
            display: 'flex',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
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
  header: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default App;
