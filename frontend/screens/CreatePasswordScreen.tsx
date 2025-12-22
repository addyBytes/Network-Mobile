import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as NavigationBar from "expo-navigation-bar";

import AuthLayout from "../components/AuthLayout";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function CreatePasswordScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768; // Standard breakpoint for iPad

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
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View 
          className={`flex-1 p-8 ${
            isTablet 
              ? "justify-center items-center" 
              : "justify-end items-start"
          }`}
        >
          {/* Constrain width on Tablet to match your iPad reference */}
          <View style={{ width: '100%', maxWidth: isTablet ? 400 : '100%' }}>
            
            {/* Header: Left-aligned on mobile, Center-aligned on iPad */}
            <View className={`mb-10 ${isTablet ? "items-center" : "items-start"}`}>
              <Text 
                className="text-5xl font-serif text-[#1F2937] mb-2"
                style={{ textAlign: isTablet ? 'center' : 'left' }}
              >
                Create Password
              </Text>
              <Text 
                className="text-lg text-gray-500 leading-6 mb-[-2]"
                style={{ textAlign: isTablet ? 'center' : 'left' }}
              >
                Your new password must be different from previously used passwords.
              </Text>
            </View>

            {/* Inputs */}
            <View className="w-full">
              <PasswordInput
                label="New Password"
                placeholder="Enter new password"
              />
              <View className="h-4 mb-[-8]" /> 
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm new password"
              />
            </View>

            {/* Button */}
            <View className="mt-2">
              <PrimaryButton
                title="Reset Password"
                onPress={() => router.push("/")}
              />
            </View>

            {/* Footer: Bottom-left on mobile, Centered on iPad */}
            <View 
              className={`flex-row mt-8 ${
                isTablet ? "justify-center" : "justify-start"
              }`}
            >
              <Text className="text-gray-400 text-sm mb-5">Back to </Text>
              <TouchableOpacity onPress={() => router.push("/")}>
                <Text className="text-[#111827] font-bold text-sm">
                  Login →
                </Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}