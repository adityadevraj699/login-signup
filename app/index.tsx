import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const router = useRouter(); // ✅ top level hook

  const onContinue = () => {
    router.navigate("/login"); // ✅ correct method
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <MyButton title="Continue" onPress={onContinue}/>
    </View>
  );
}
