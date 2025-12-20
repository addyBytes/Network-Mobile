import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

import AuthLayout from "../components/AuthLayout";
import TextInputField from "../components/TextInputField";
import PrimaryButton from "../components/PrimaryButton";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const headerHeight = useHeaderHeight();

  return (
    <AuthLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={headerHeight}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: 40, // 🔥 allows scroll when keyboard opens
          }}
        >
          {/* Header */}
          <View className="mb-10">
            <Text className="text-4xl font-serif text-[#1F2937] mb-3">
              Forgot Password
            </Text>
            <Text className="text-gray-500 text-base leading-5">
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

          <PrimaryButton
             title="Send Reset Link"
             onPress={() => {
             console.log("Reset requested for:", email);
             router.push("/create-password"); // Ensure this matches your route name
        }}
          />

          {/* Footer */}
          <View className="flex-row items-center justify-center mt-10">
            <Text className="text-gray-500 text-sm">
              Remembered your password?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
