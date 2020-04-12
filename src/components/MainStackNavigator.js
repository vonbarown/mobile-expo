import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Homescreen";
import TestFiles from "../screens/testFiles";
import Detail from "../screens/Details";
import Settings from "../screens/Settings";
import CameraApp from "../screens/Camera";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          headerStyle: { backgroundColor: "#101010" },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "#ffd700",
          headerBackTitleVisible: false,
        }}
        headerMode="float"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="Test"
          component={TestFiles}
          options={{ title: "Test Screen" }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraApp}

          // options={{ title: "Camera Screen" }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route }) => ({
            title: route.params.item.name,
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
