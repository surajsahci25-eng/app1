import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { interests } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import { useAppStore } from '../store/appStore';

const childAgeOptions = ['0-2', '3-5', '6-9', '10-13', '14-17'];

export function OnboardingScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Onboarding'>) {
  const onboarding = useAppStore((state) => state.onboarding);
  const updateOnboarding = useAppStore((state) => state.updateOnboarding);
  const completeOnboarding = useAppStore((state) => state.completeOnboarding);

  const toggleInterest = (value: string) => {
    const exists = onboarding.interests.includes(value);
    const next = exists ? onboarding.interests.filter((i) => i !== value) : [...onboarding.interests, value];
    updateOnboarding({ interests: next });
  };

  const finish = () => {
    completeOnboarding();
    navigation.replace('MainTabs');
  };

  return (
    <ScrollView className="flex-1 bg-warm px-6" contentContainerStyle={{ paddingVertical: 24, gap: 24 }}>
      <View>
        <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-3xl text-[#1F1147]">Let’s personalize ParentCircle</Text>
        <Text style={{ fontFamily: 'Inter_400Regular' }} className="text-[#6B6799] mt-2">3 quick steps to find your people.</Text>
      </View>

      <View className="gap-3">
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-lg text-[#1F1147]">1) About you</Text>
        <TextInput
          value={onboarding.name}
          onChangeText={(name) => updateOnboarding({ name })}
          placeholder="Your first name"
          className="bg-white rounded-card p-4 border border-[#ECE8F8]"
        />
      </View>

      <View className="gap-3">
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-lg text-[#1F1147]">2) Child age group</Text>
        <View className="flex-row flex-wrap gap-2">
          {childAgeOptions.map((option) => (
            <Pressable
              key={option}
              onPress={() => updateOnboarding({ childAgeGroup: option })}
              className={`px-4 py-2 rounded-full border ${onboarding.childAgeGroup === option ? 'bg-brand border-brand' : 'bg-white border-[#ECE8F8]'}`}
            >
              <Text className={`${onboarding.childAgeGroup === option ? 'text-white' : 'text-[#1F1147]'}`}>{option}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View className="gap-3">
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-lg text-[#1F1147]">3) Interests</Text>
        <View className="flex-row flex-wrap gap-2">
          {interests.map((item) => {
            const selected = onboarding.interests.includes(item);
            return (
              <Pressable
                key={item}
                onPress={() => toggleInterest(item)}
                className={`px-4 py-2 rounded-full border ${selected ? 'bg-accent border-accent' : 'bg-white border-[#ECE8F8]'}`}
              >
                <Text className={`${selected ? 'text-white' : 'text-[#1F1147]'}`}>{item}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <Pressable onPress={finish} className="bg-brand py-4 rounded-full items-center mt-2">
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-white">Enter ParentCircle</Text>
      </Pressable>
    </ScrollView>
  );
}
