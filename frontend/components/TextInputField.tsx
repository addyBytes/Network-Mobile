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
      <Text className=" font-bold text-xs text-gray-700 mb-1">{label}</Text>
      <TextInput
        className="h-12 shadow-sm border-grey-300 w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
}
