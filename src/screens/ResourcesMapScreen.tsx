import { ScrollView, Text, View } from 'react-native';
import { AppCard } from '../components/AppCard';
import { resources } from '../data/mockData';

export function ResourcesMapScreen() {
  return (
    <ScrollView className="flex-1 bg-warm px-4" contentContainerStyle={{ paddingVertical: 16, gap: 12 }}>
      <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-2xl text-[#1F1147]">Local Resources</Text>
      <View className="bg-[#E9E2FB] rounded-card h-44 items-center justify-center">
        <Text className="text-brand">Map preview (Mapbox/Supabase integration next)</Text>
      </View>
      {resources.map((resource) => (
        <AppCard key={resource.id}>
          <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-[#1F1147]">{resource.name}</Text>
          <Text className="text-[#6B6799]">{resource.type} • {resource.distance}</Text>
          <Text className="text-accent mt-2">★ {resource.rating}</Text>
        </AppCard>
      ))}
    </ScrollView>
  );
}
