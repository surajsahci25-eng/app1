import { Pressable, Text, View } from 'react-native';
import { AppCard } from '../components/AppCard';
import { matches } from '../data/mockData';

export function MatchingScreen() {
  const current = matches[0];

  return (
    <View className="flex-1 bg-warm px-4 py-5 gap-4">
      <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-2xl text-[#1F1147]">Parent Matching</Text>
      <AppCard style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-2xl text-[#1F1147]">{current.name}</Text>
          <Text className="text-[#6B6799] mt-1">{current.city} • Kids {current.childAges}</Text>
          <Text className="text-brand mt-3">Why we matched you: {current.reason}</Text>
          <View className="flex-row flex-wrap gap-2 mt-3">
            {current.tags.map((tag) => (
              <View key={tag} className="bg-[#F3EEFF] px-3 py-1 rounded-full">
                <Text className="text-brand">{tag}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="flex-row gap-3">
          <Pressable className="flex-1 bg-white border border-[#ECE8F8] rounded-full py-3 items-center"><Text>Skip</Text></Pressable>
          <Pressable className="flex-1 bg-accent rounded-full py-3 items-center"><Text className="text-white">Connect</Text></Pressable>
        </View>
      </AppCard>
    </View>
  );
}
