import { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { softShadow } from '../theme/shadows';

export function AppCard({ children, style }: PropsWithChildren<{ style?: ViewStyle }>) {
  return (
    <View
      style={[
        {
          backgroundColor: colors.white,
          borderRadius: 16,
          padding: 16,
          borderWidth: 1,
          borderColor: colors.border
        },
        softShadow,
        style
      ]}
    >
      {children}
    </View>
  );
}
