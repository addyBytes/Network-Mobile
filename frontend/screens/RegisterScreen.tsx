import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TextInputField from "../components/TextInputField";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function RegisterScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isTablet = width >= 600;

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const isEnabled =
    email.trim() !== "" &&
    mobile.trim() !== "" &&
    password.trim() !== "";

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
        extraScrollHeight={120}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
        }}
      >
        {/* MAIN WRAPPER */}
        <View
          className={`flex-1 ${
            isTablet ? "items-center justify-center" : "justify-end"
          }`}
        >
          {/* CONTENT */}
          <View
            className="w-full"
            style={isTablet ? { width: 400 } : undefined}
          >
            {/* TITLE */}
            <Text
              className={`text-5xl font-serif text-[#1F2937] mb-3 ${
                isTablet ? "text-center" : "text-left"
              }`}
            >
              Register
            </Text>

            {/* SUBTITLE */}
            <Text
              className={`text-base text-gray-500 mb-6 leading-6 ${
                isTablet ? "text-center" : "text-left"
              }`}
            >
              We have sent a 4 digit code in your email, enter it to verify your email
            </Text>

            {/* EMAIL */}
            <TextInputField
              label="Email"
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            {/* MOBILE */}
            <TextInputField
              label="Mobile No"
              placeholder="9876543210"
              keyboardType="number-pad"
              value={mobile}
              onChangeText={setMobile}
            />

            {/* PASSWORD */}
            <PasswordInput
              label="Password"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
            />

            {/* CONTINUE BUTTON */}
            <PrimaryButton
              title="Continue"
              disabled={!isEnabled}
              onPress={() => router.push("/enter-code")}
              className={isEnabled ? "bg-[#0D0F18]" : "bg-[#CBD5E1]"}
              textClassName={isEnabled ? "text-white" : "text-[#64748B]"}
            />

            {/* BACK / FORGOT */}
            <TouchableOpacity
              className={`mt-4 ${
                isTablet ? "items-center" : "items-start"
              }`}
              onPress={() => router.back()}
            >
              <Text className="text-sm text-gray-600">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* PHONE SAFE GAP */}
            {!isTablet && <View className="h-6" />}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
