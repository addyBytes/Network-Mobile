import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import AuthLayout from "../components/AuthLayout";
import TextInputField from "../components/TextInputField";
import PrimaryButton from "../components/PrimaryButton";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF7ED" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
            paddingBottom: 20,
          }}
        >
          <AuthLayout>
            {/* Header */}
            <View className="mb-8">
              <Text className="text-6xl font-serif text-[#1F2937] mb-3">
                Forgot Password
              </Text>
              <Text className="text-lg text-gray-500 leading-6">
                Enter your registered email address and we'll send you a reset link
              </Text>
            </View>

            {/* Input */}
            <TextInputField
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Button */}
            <PrimaryButton
              title="Send Reset Link"
              onPress={() => {
                console.log("Reset requested for:", email);
                router.push("/create-password");
              }}
            />

            {/* Footer */}
            <View className="flex-row items-center justify-center mt-6">
              <Text className="text-gray-500 text-sm">
                Remembered your password?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/")}>
                <View className="flex-row items-center">
                  <Text className="text-[#111827] font-bold text-sm">
                    Login{" "}
                  </Text>
                  <Ionicons
                    name="arrow-forward"
                    size={14}
                    color="#111827"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </AuthLayout>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
