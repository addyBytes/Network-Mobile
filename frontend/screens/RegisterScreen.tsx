import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";

import AuthLayout from "../components/AuthLayout";
import TextInputField from "../components/TextInputField";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function RegisterScreen() {
  const router = useRouter();

  // ✅ Android navigation bar styling (same as Login)
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
          paddingBottom: 20, // exactly like Login
        }}
      >
        <AuthLayout>
          {/* Title */}
          <Text className="text-6xl font-serif text-[#1F2937] mb-3">
            Register
          </Text>

          {/* Subtitle */}
          <Text className="text-lg text-gray-500 mb-2 leading-6">
            We have sent a 4 digit code in your email, enter it to verify your email
          </Text>

          {/* Email */}
          <TextInputField
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
          />

          {/* Mobile number */}
          <TextInputField
            label="Mobile No"
            placeholder="9876543210"
            keyboardType="number-pad"
          />

          {/* Password */}
          <PasswordInput
            label="Password"
            placeholder="••••••••"
          />

          {/* Button */}
          <View className="mb-3">
            <PrimaryButton
              title="Continue"
              onPress={() => router.push("/enter-code")}
            />
          </View>

          {/* Back / Forgot */}
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-sm text-gray-600">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </AuthLayout>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
