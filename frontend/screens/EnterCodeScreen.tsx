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
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function EnterCodeScreen() {
  const router = useRouter();

  // ✅ Android navigation bar (same as Login)
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
        keyboardOpeningTime={0}
        extraScrollHeight={120} // 🔥 THIS is the key fix
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-end",
          paddingBottom: 20,
        }}
      >
        <AuthLayout>
          {/* Title */}
          <Text className="text-6xl font-serif text-[#1F2937] mb-2">
            Enter Code
          </Text>

          {/* Subtitle */}
          <Text className="text-lg text-gray-500 mb-4 leading-6">
            We have sent a 4 digit code in your email, enter it to verify your email
          </Text>

          {/* Code Input */}
          <PasswordInput
            label="Enter Code"
            placeholder="••••"
          />

          {/* Continue Button */}
          <View className="mb-3">
            <PrimaryButton
              title="Continue"
              onPress={() => router.replace("/")}
            />
          </View>

          {/* Back */}
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
