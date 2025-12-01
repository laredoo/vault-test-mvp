import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface UserStats {
  testsCompleted: number
  successRate: number
  avgRating: number
  totalEarnings: number
}

export interface UserProfile {
  name: string
  email: string
  phone: string
  location: string
  title: string
  bio: string
  avatar: string
  memberSince: string
  profileCompletion: number
  stats: UserStats
}

interface UserStore {
  profile: UserProfile
  updateProfile: (updates: Partial<UserProfile>) => void
  updateStats: (updates: Partial<UserStats>) => void
  addEarnings: (amount: number) => void
  incrementTestsCompleted: () => void
}

const defaultProfile: UserProfile = {
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  title: "Senior QA Engineer",
  bio: "Experienced software tester with 10+ years in security and performance testing. Passionate about ensuring software quality and security compliance.",
  avatar: "JD",
  memberSince: "January 2022",
  profileCompletion: 85,
  stats: {
    testsCompleted: 24,
    successRate: 98,
    avgRating: 4.9,
    totalEarnings: 8450,
  },
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      updateProfile: (updates) =>
        set((state) => ({
          profile: { ...state.profile, ...updates },
        })),
      updateStats: (updates) =>
        set((state) => ({
          profile: {
            ...state.profile,
            stats: { ...state.profile.stats, ...updates },
          },
        })),
      addEarnings: (amount) =>
        set((state) => ({
          profile: {
            ...state.profile,
            stats: {
              ...state.profile.stats,
              totalEarnings: state.profile.stats.totalEarnings + amount,
            },
          },
        })),
      incrementTestsCompleted: () =>
        set((state) => ({
          profile: {
            ...state.profile,
            stats: {
              ...state.profile.stats,
              testsCompleted: state.profile.stats.testsCompleted + 1,
            },
          },
        })),
    }),
    {
      name: "user-profile-storage",
    },
  ),
)
