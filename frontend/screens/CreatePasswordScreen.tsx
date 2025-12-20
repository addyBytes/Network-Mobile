import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import AuthLayout from "../components/AuthLayout";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function CreatePasswordScreen() {
  const router = useRouter();

  return (
    <AuthLayout>
      {/* Header aligned to left */}
      <View className="mb-10">
        <Text className="text-4xl font-serif text-[#1F2937] mb-3">
          Create New Password
        </Text>
        <Text className="text-gray-500 text-base leading-5">
          Your new password must be different from previously used passwords
        </Text>
      </View>

      {/* Input Fields */}
      <PasswordInput 
        label="New Password" 
        placeholder="Enter new password" 
      />
      <PasswordInput 
        label="Confirm Password" 
        placeholder="Confirm new password" 
      />

      {/* Reset Button */}
      <PrimaryButton 
        title="Reset Password" 
        onPress={() => {
          console.log("Password Reset Successful");
          router.push("/login");
        }} 
      />

      {/* Footer Link - Center aligned as per standard UI patterns */}
      <View className="flex-row items-center justify-center mt-10">
        <Text className="text-gray-500 text-sm">
          Back to{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className="text-[#111827] font-bold text-sm">
            Login →
          </Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}