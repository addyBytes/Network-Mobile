import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

export default function PasswordInput({ label, placeholder }: any) {
  const [secure, setSecure] = useState(true);

  return (
    <View className="mb-5">
      <Text className="text-[14px] font-bold text-[#0F172A] mb-2">{label}</Text>
      <View className="flex-row items-center bg-white border border-[#E2E8F0] rounded-2xl px-5 h-16">
        <TextInput
          className="flex-1 text-lg text-[#0F172A]"
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={secure}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Ionicons name="eye-outline" size={22} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}