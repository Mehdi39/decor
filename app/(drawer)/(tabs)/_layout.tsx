import { Tabs } from 'expo-router';
import { StyleSheet, Image } from 'react-native';

import { TabBarIcon } from '~/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#363130',
        tabBarInactiveTintColor: '#F4B5A4',
        tabBarStyle: { height: 70 },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabelStyle: styles.tabBarCustomLabelStyle,
          tabBarIcon: ({ color }) => (
            <Image source={require('~/app/(drawer)/(tabs)/home.png')} style={styles.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('~/app/(drawer)/(tabs)/categories.png')}
              style={styles.categories}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('~/app/(drawer)/(tabs)/cart.png')} style={styles.cart} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('~/app/(drawer)/(tabs)/wishlist.png')} style={styles.wishlist} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('~/app/(drawer)/(tabs)/profile.png')} style={styles.profile} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarCustomLabelStyle: {
    textDecorationColor: 'green',
  },
  home: {
    width: 23.61,
    height: 28,
  },
  categories: {
    width: 21.02,
    height: 19.11,
  },
  cart: {
    width: 22.92,
    height: 22.25,
  },
  wishlist: {
    width: 26.28,
    height: 19.11,
  },
  profile: {
    width: 17.07,
    height: 20.27,
  },
});
