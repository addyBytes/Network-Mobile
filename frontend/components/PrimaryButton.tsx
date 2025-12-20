import { TouchableOpacity, Text } from "react-native";

type Props = {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
};

export default function PrimaryButton({
  title,
  disabled = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      className={`
        w-full
        h-14
        rounded-xl
        flex-row
        items-center
        ${disabled ? "bg-[#CBD5E1]" : "bg-[#111827]"}
      `}
    >
      {/* Left aligned text */}
      <Text
        className={`
          ml-5
          text-base
          font-medium
          ${disabled ? "text-[#64748B]" : "text-white"}
        `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
