import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AuthLayout from "../components/AuthLayout";
import TextInputField from "../components/TextInputField";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/PrimaryButton";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <AuthLayout>
      <Text className="text-6xl font-serif text-[#1F2937] mb-4">Login</Text>
      <Text className="text-lg text-gray-500 mb-10 leading-6">
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