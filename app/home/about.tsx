import { Poppins_700Bold_Italic, useFonts } from "@expo-google-fonts/poppins";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function About() {
  const [loaded, error] = useFonts({
    Poppins_700Bold_Italic,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); // Prevent auto hide
    }
    prepare();
  }, []);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded or error occurs
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    ) // Still loading
  };

  if (error) {
    return <Text>Error loading font</Text>;
  }

  return (
    <View>
      <Text style={{ fontFamily: "Poppins_700Bold_Italic", fontSize: 20 }}>
        ℹ️ About Screen (Poppins Bold Italic)
      </Text>
    </View>
  );
}
