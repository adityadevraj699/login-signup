import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ title: "Welcome to My App" }} />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="signup" options={{ title: "Signup" }} />
        <Stack.Screen name="forgot" options={{ title: "Forgot Password" }} />
      </Stack>
      <StatusBar backgroundColor="white" style="dark" />
    </>
  );
}
