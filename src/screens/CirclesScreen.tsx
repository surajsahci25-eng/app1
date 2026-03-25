import { ScrollView, Text, View } from 'react-native';
import { AppCard } from '../components/AppCard';
import { circles } from '../data/mockData';

export function CirclesScreen() {
  return (
    <ScrollView className="flex-1 bg-warm px-4" contentContainerStyle={{ paddingVertical: 16, gap: 12 }}>
      <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-2xl text-[#1F1147]">Community Circles</Text>
      <View className="flex-row flex-wrap gap-3">
        {circles.map((circle) => (
          <AppCard key={circle.id} style={{ width: '48%' }}>
            <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-[#1F1147]">{circle.name}</Text>
            <Text className="text-[#6B6799] mt-1">{circle.members} members</Text>
            <Text className="text-accent mt-2">{circle.active}</Text>
          </AppCard>
        ))}
      </View>
    </ScrollView>
  );
}
