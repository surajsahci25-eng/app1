import { ScrollView, Text } from 'react-native';
import { AppCard } from '../components/AppCard';
import { conversations } from '../data/mockData';

export function MessagingScreen() {
  return (
    <ScrollView className="flex-1 bg-warm px-4" contentContainerStyle={{ paddingVertical: 16, gap: 12 }}>
      <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-2xl text-[#1F1147]">Messages</Text>
      {conversations.map((chat) => (
        <AppCard key={chat.id}>
          <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-[#1F1147]">{chat.name}</Text>
          <Text className="text-[#6B6799] mt-1">{chat.message}</Text>
          <Text className="text-brand mt-2">{chat.time} ago</Text>
        </AppCard>
      ))}
    </ScrollView>
  );
}
