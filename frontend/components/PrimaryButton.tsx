import { TouchableOpacity, Text } from "react-native";

export default function PrimaryButton({ title, disabled, onPress }: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      className={`w-full h-12 rounded-lg mt-4 px-4 
        flex-row items-center 
        ${disabled ? "bg-[#CBD5E1]" : "bg-[#111827]"}`}
    >
      <Text
        className={`text-sm font-medium 
        ${disabled ? "text-[#64748B]" : "text-white"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
