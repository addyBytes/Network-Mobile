import { View, Text, TextInput } from "react-native";

type Props = {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: "default" | "email-address" | "number-pad";
};

export default function TextInputField({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}: Props) {
  return (
    <View className="mb-4">
      <Text className="text-sm font-bold text-gray-700 mb-1">
        {label}
      </Text>

      <TextInput
        className="w-full bg-white border border-gray-200 rounded-xl px-4 h-14 text-base text-[#0F172A]"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
}
