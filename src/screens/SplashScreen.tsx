import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'react-native';
import { useAppStore } from '../store/appStore';
import { RootStackParamList } from '../navigation/types';

export function SplashScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Splash'>) {
  const setHasSeenSplash = useAppStore((state) => state.setHasSeenSplash);

  const handleContinue = () => {
    setHasSeenSplash(true);
    navigation.replace('Onboarding');
  };

  return (
    <View className="flex-1 bg-brand px-6 justify-center">
      <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-white text-4xl mb-3">ParentCircle</Text>
      <Text style={{ fontFamily: 'Inter_400Regular' }} className="text-white/90 text-lg mb-10">
        You don't have to parent alone.
      </Text>
      <Pressable onPress={handleContinue} className="bg-accent py-4 rounded-full items-center">
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-white text-base">Get Started</Text>
      </Pressable>
    </View>
  );
}
