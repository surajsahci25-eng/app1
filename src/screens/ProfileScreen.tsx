import { ScrollView, Text, View } from 'react-native';
import { AppCard } from '../components/AppCard';
import { useAppStore } from '../store/appStore';

export function ProfileScreen() {
  const onboarding = useAppStore((state) => state.onboarding);

  return (
    <ScrollView className="flex-1 bg-warm px-4" contentContainerStyle={{ paddingVertical: 16, gap: 12 }}>
      <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-2xl text-[#1F1147]">Your Profile</Text>
      <AppCard>
        <View className="w-16 h-16 rounded-full bg-brand items-center justify-center mb-3">
          <Text className="text-white text-xl">{onboarding.name?.[0] ?? 'P'}</Text>
        </View>
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-[#1F1147] text-lg">{onboarding.name || 'Parent'}</Text>
        <Text className="text-[#6B6799]">Child age group: {onboarding.childAgeGroup || 'Not set'}</Text>
      </AppCard>
      <AppCard>
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-[#1F1147] mb-2">Interests</Text>
        <Text className="text-[#6B6799]">{onboarding.interests.length ? onboarding.interests.join(' • ') : 'No interests selected yet.'}</Text>
      </AppCard>
    </ScrollView>
  );
}
