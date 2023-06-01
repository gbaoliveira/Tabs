import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="telaA"
        options={{
          href: 'telaA',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="telaB"
        options={{
          href: 'telaB',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
