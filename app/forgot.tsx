import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const Forgot = () => {
  const router = useRouter();

  const onReset = () => console.log("Reset password pressed");
  const onLogin = () => router.push("/login");

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1612831455547-0a2c6a4f5d06?fit=crop&w=800&q=80" }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.container}>
        {/* Circular Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
            style={styles.logo}
          />
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Enter your email to reset password</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />

          <MyButton title="Reset Password" onPress={onReset} />
        </View>

        {/* Back to Login */}
        <TouchableOpacity onPress={onLogin} style={{ marginTop: 15 }}>
          <Text style={styles.backLogin}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    alignItems: "center",
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "#ff7f50",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff7f50",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  backLogin: {
    color: "#ff7f50",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Forgot;
