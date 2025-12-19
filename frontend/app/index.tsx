import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import LoginScreen from "../screens/LoginScreen";

export default function Page() {
  const [screen, setScreen] = useState<"mockup" | "login">("mockup");

  // ---------- LOGIN SCREEN ----------
  if (screen === "login") return <LoginScreen />;

  // ---------- WELCOME MOCKUP (FIRST PAGE) ----------
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ flex: 1 }} />

        <Text style={styles.title}>
          Welcome to the new era of{"\n"}professional networking.
        </Text>

        <Text style={styles.subtitle}>
          People Search 3.0 is in full swing in network by Infidhi. This would
          be the sentence.
        </Text>

        <Pressable style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Sign up with Mail</Text>
        </Pressable>

        <Pressable style={styles.googleBtn}>
          <Text style={styles.googleText}>Continue with Gmail</Text>
        </Pressable>

        <Pressable
          onPress={() => setScreen("login")}
          style={{ marginTop: 14 }}
        >
          <Text style={styles.loginRow}>
            Already have an account? <Text style={styles.login}>Log in ›</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

// ---------- STYLES ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFAF3",   // FULL OFF-WHITE BACKGROUND
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    height: "92%",
    width: "88%",
    backgroundColor: "#FCFAF3",
    borderRadius: 28,
    padding: 22,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
    color: "#000",
  },

  subtitle: {
    fontSize: 12.5,
    color: "#666",
    marginBottom: 18,
  },

  primaryBtn: {
    backgroundColor: "#0D0F18",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  primaryText: {
    color: "#fff",
    fontSize: 14,
  },

  googleBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },

  googleText: {
    color: "#000",
    fontSize: 14,
  },

  loginRow: {
    fontSize: 12,
    color: "#555",
  },

  login: {
    color: "#000",
    fontWeight: "700",
  },
});
