import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface AcceptedTest {
  id: string
  acceptedAt: string
  status: "in-progress" | "submitted" | "under-review" | "completed" | "rejected"
  progress: number
  submittedAt?: string
  completedAt?: string
}

interface AcceptedTestsState {
  acceptedTests: AcceptedTest[]
  acceptTest: (testId: string) => void
  updateTestProgress: (testId: string, progress: number) => void
  updateTestStatus: (testId: string, status: AcceptedTest["status"]) => void
  isTestAccepted: (testId: string) => boolean
  getAcceptedTest: (testId: string) => AcceptedTest | undefined
}

export const useAcceptedTestsStore = create<AcceptedTestsState>()(
  persist(
    (set, get) => ({
      acceptedTests: [],
      acceptTest: (testId: string) => {
        const existing = get().acceptedTests.find((t) => t.id === testId)
        if (!existing) {
          set((state) => ({
            acceptedTests: [
              ...state.acceptedTests,
              {
                id: testId,
                acceptedAt: new Date().toISOString(),
                status: "in-progress",
                progress: 0,
              },
            ],
          }))
        }
      },
      updateTestProgress: (testId: string, progress: number) => {
        set((state) => ({
          acceptedTests: state.acceptedTests.map((t) => (t.id === testId ? { ...t, progress } : t)),
        }))
      },
      updateTestStatus: (testId: string, status: AcceptedTest["status"]) => {
        set((state) => ({
          acceptedTests: state.acceptedTests.map((t) =>
            t.id === testId
              ? {
                  ...t,
                  status,
                  submittedAt: status === "submitted" ? new Date().toISOString() : t.submittedAt,
                  completedAt: status === "completed" ? new Date().toISOString() : t.completedAt,
                }
              : t,
          ),
        }))
      },
      isTestAccepted: (testId: string) => {
        return get().acceptedTests.some((t) => t.id === testId)
      },
      getAcceptedTest: (testId: string) => {
        return get().acceptedTests.find((t) => t.id === testId)
      },
    }),
    {
      name: "accepted-tests-storage",
    },
  ),
)
