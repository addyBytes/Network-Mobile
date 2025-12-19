import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AuthLayout from "../components/AuthLayout";
import TextInputField from "../components/TextInputField";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <AuthLayout>
      <Text className="text-6xl font-serif text-[#1F2937] mb-4">Register</Text>
      <Text className="text-lg text-gray-500 mb-8 leading-6">
        We have sent a 4 digit code in your email, enter it to verify your email
      </Text>

      <TextInputField label="Email" placeholder="Placeholder text..." />
      <TextInputField label="Mobile No:" placeholder="8329306815" keyboardType="number-pad" />
      <PasswordInput label="Password" placeholder="••••••••" />

      <PrimaryButton title="Continue" onPress={() => router.push("/enter-code")} />

      <TouchableOpacity className="mt-6" onPress={() => router.back()}>
        <Text className="text-sm text-gray-600">Forgot Password?</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}