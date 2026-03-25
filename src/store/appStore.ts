import { create } from 'zustand';

export type OnboardingState = {
  name: string;
  childAgeGroup: string;
  interests: string[];
};

type AppState = {
  hasSeenSplash: boolean;
  isOnboarded: boolean;
  onboarding: OnboardingState;
  setHasSeenSplash: (value: boolean) => void;
  updateOnboarding: (partial: Partial<OnboardingState>) => void;
  completeOnboarding: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  hasSeenSplash: false,
  isOnboarded: false,
  onboarding: {
    name: '',
    childAgeGroup: '',
    interests: []
  },
  setHasSeenSplash: (value) => set({ hasSeenSplash: value }),
  updateOnboarding: (partial) =>
    set((state) => ({ onboarding: { ...state.onboarding, ...partial } })),
  completeOnboarding: () => set({ isOnboarded: true })
}));
