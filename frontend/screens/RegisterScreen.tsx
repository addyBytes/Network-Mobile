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
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";

import AuthLayout from "../components/AuthLayout";
import TextInputField from "../components/TextInputField";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function RegisterScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isTablet = width >= 600;

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#FBF7ED");
      NavigationBar.setButtonStyleAsync("dark");
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#FBF7ED]">
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerClassName={`
          flex-grow
          px-6
          pb-8
          ${isTablet ? "items-center justify-center" : "justify-end"}
        `}
      >
        {/* Width wrapper */}
        <View
          className="w-full items-center"
          style={isTablet ? { width: 400 } : undefined}
        >
          <View className="w-full">
            <AuthLayout>
              {/* CENTERED HEADER */}
              <View className="items-center mb-6">
                <Text className="text-5xl font-serif text-[#1F2937] mb-3 text-center">
                  Register
                </Text>

                <Text className="text-base text-gray-500 leading-6 text-center">
                  We have sent a 4 digit code in your email, enter it to verify your email
                </Text>
              </View>

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

              {/* Continue Button */}
              <View className="mb-4">
                <PrimaryButton
                  title="Continue"
                  onPress={() => router.push("/enter-code")}
                />
              </View>

              {/* Forgot Password – CENTERED */}
              <TouchableOpacity
                className="items-center"
                onPress={() => router.back()}
              >
                <Text className="text-sm text-gray-600">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </AuthLayout>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
