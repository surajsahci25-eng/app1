import { ScrollView, Text, View } from 'react-native';
import { AppCard } from '../components/AppCard';
import { circles, matches } from '../data/mockData';

export function HomeFeedScreen() {
  return (
    <ScrollView className="flex-1 bg-warm px-4" contentContainerStyle={{ paddingVertical: 16, gap: 14 }}>
      <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-2xl text-[#1F1147]">Good evening 👋</Text>
      <AppCard>
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-brand text-base">Daily Check-In</Text>
        <Text className="text-[#1F1147] mt-2 text-lg">How are you feeling today?</Text>
      </AppCard>

      <View>
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-[#1F1147] mb-3">New Parents Near You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
          {matches.map((match) => (
            <AppCard key={match.id} style={{ width: 260 }}>
              <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-[#1F1147] text-lg">{match.name}</Text>
              <Text className="text-[#6B6799]">{match.city} • Kids {match.childAges}</Text>
              <Text className="text-brand mt-2">{match.reason}</Text>
            </AppCard>
          ))}
        </ScrollView>
      </View>

      <AppCard>
        <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-[#1F1147] mb-2">Circle Activity</Text>
        {circles.slice(0, 3).map((circle) => (
          <Text key={circle.id} className="text-[#6B6799] mb-1">• {circle.name} — {circle.active}</Text>
        ))}
      </AppCard>
    </ScrollView>
  );
}
