import { Tabs } from 'expo-router';
import { TabBarIcon } from '~/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="check" color={color} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
        <Tabs.Screen
            name="cart"
            options={{
                title: 'Tab Three',
                tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
            }}
        />
    </Tabs>
  );
}
