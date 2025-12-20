import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as NavigationBar from "expo-navigation-bar";

import AuthLayout from "../components/AuthLayout";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function CreatePasswordScreen() {
  const router = useRouter();

  // Android navigation bar styling
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#FBF7ED");
      NavigationBar.setButtonStyleAsync("dark");
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBF7ED" }}>
      <KeyboardAwareScrollView
        enableOnAndroid
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
            <Text className="text-6xl font-serif text-[#1F2937] mb-2">
              Create New Password
            </Text>
            <Text className="text-lg text-gray-500 leading-6">
              Your new password must be different from previously used passwords
            </Text>
          </View>

          {/* Inputs */}
          <PasswordInput
            label="New Password"
            placeholder="Enter new password"
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm new password"
          />

          {/* Button */}
          <PrimaryButton
            title="Reset Password"
            onPress={() => {
              console.log("Password Reset Successful");
              router.push("/");
            }}
          />

          {/* Footer */}
          <View className="flex-row items-center justify-center mt-6">
            <Text className="text-gray-500 text-sm">
              Back to{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text className="text-[#111827] font-bold text-sm">
                Login →
              </Text>
            </TouchableOpacity>
          </View>
        </AuthLayout>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
