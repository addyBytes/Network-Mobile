import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AuthLayout from "../components/AuthLayout";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function EnterCodeScreen() {
  const router = useRouter();

  return (
    <AuthLayout>
      <Text className="text-6xl font-serif text-[#1F2937] mb-4">Enter Code</Text>
      <Text className="text-lg text-gray-500 mb-10 leading-6">
        We have sent a 4 digit code in your email, enter it to verify your email
      </Text>

      <PasswordInput label="Enter Code" placeholder="••••" />

      <PrimaryButton title="Continue" onPress={() => router.replace("/")} />

      <TouchableOpacity className="mt-6" onPress={() => router.back()}>
        <Text className="text-sm text-gray-600">Forgot Password?</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}