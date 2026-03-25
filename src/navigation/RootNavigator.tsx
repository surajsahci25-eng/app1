import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SplashScreen } from '../screens/SplashScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { HomeFeedScreen } from '../screens/HomeFeedScreen';
import { CirclesScreen } from '../screens/CirclesScreen';
import { MatchingScreen } from '../screens/MatchingScreen';
import { ResourcesMapScreen } from '../screens/ResourcesMapScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { MessagingScreen } from '../screens/MessagingScreen';
import { MainTabParamList, RootStackParamList } from './types';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerTitleStyle: { fontFamily: 'Inter_600SemiBold', color: colors.textPrimary },
        tabBarStyle: { height: 68, paddingBottom: 10, paddingTop: 6 },
        tabBarActiveTintColor: colors.brand,
        tabBarInactiveTintColor: colors.textSecondary
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeFeedScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Text onPress={() => navigation.getParent()?.navigate('Messages')} style={{ color: colors.brand, fontFamily: 'Inter_600SemiBold' }}>
              Messages
            </Text>
          )
        })}
      />
      <Tab.Screen name="Circles" component={CirclesScreen} />
      <Tab.Screen name="Matches" component={MatchingScreen} />
      <Tab.Screen name="Resources" component={ResourcesMapScreen} options={{ title: 'Map' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Messages" component={MessagingScreen} options={{ headerShown: true, title: 'Direct Messages' }} />
    </Stack.Navigator>
  );
}
