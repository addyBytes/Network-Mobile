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

export default function LoginScreen() {
  const router = useRouter();

  // ✅ Android navigation bar styling (icons visible)
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
          paddingBottom: 20, // aligns exactly above nav bar
        }}
      >
        <AuthLayout>
          {/* Title */}
          <Text className="text-6xl font-serif text-[#1F2937] mb-3">
            Login
          </Text>

          {/* Subtitle */}
          <Text className="text-lg text-gray-500 mb-2 leading-6">
            Login to see what is out there waiting for you on the network and help you.
          </Text>

      <TextInputField ClassName="font-bold" label="Email" placeholder="Placeholder text..." />
      <PasswordInput label="Password" placeholder="••••••••" />

      <PrimaryButton title="Next" onPress={() => router.push("/register")} />

      <TouchableOpacity className="mt-6">
        <Text className="text-sm text-gray-600">Forgot Password?</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}   