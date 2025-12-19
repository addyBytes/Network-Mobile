import { TouchableOpacity, Text } from "react-native";

export default function PrimaryButton({ title, disabled, onPress }: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      className={`w-full rounded-2xl py-5 mt-4 ${disabled ? "bg-[#CBD5E1]" : "bg-[#111827]"}`}
    >
      <Text className={`text-center text-lg font-medium ${disabled ? "text-[#64748B]" : "text-white"}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}