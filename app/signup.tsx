import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const { width } = Dimensions.get("window");

const Signup = () => {
  const router = useRouter();

  const onSignup = () => console.log("Signup pressed");
  const onLogin = () => router.push("/login");

  return (
      <View style={styles.background}>
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
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              secureTextEntry
            />

            <MyButton title="Signup" onPress={onSignup} />
          </View>

          {/* Already have an account */}
          <View style={styles.registerContainer}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity onPress={onLogin}>
              <Text style={styles.register}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width,
    backgroundColor: "#f8f8f8",
  },
  container: {
    width: "90%",
    alignItems: "center",
  },
  logoContainer: {
    width: 100,   // slightly smaller
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#ff7f50",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: 20, // slightly smaller padding
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 26,  // slightly smaller
    fontWeight: "bold",
    color: "#ff7f50",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,  // slightly smaller
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 45,  // reduced height
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 12,  // slightly smaller spacing
    fontSize: 15,
    color: "#333",
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  text: {
    color: "#555",
  },
  register: {
    color: "#ff7f50",
    fontWeight: "bold",
  },
});

export default Signup;
