"use client"

import { useState, useCallback } from "react"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"
import TestOpportunityCard from "@/components/dashboard/test-opportunity-card"
import TestFilters from "@/components/dashboard/test-filters"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

// Mock data for testing opportunities
const testOpportunities = [
  {
    id: "1",
    title: "E-commerce Platform Security Audit",
    company: "ShopMax Inc.",
    description:
      "Conduct comprehensive security testing on a large-scale e-commerce platform including payment processing, user authentication, and data handling.",
    reward: 850,
    deadline: "2025-02-15",
    type: "Security Testing",
    difficulty: "Advanced",
    estimatedHours: 20,
    tags: ["Web App", "Payment Systems", "Authentication"],
  },
  {
    id: "2",
    title: "Mobile Banking App Functional Testing",
    company: "FinanceFirst",
    description:
      "Perform end-to-end functional testing on iOS and Android banking application. Focus on transaction flows and account management features.",
    reward: 600,
    deadline: "2025-02-10",
    type: "Functional Testing",
    difficulty: "Intermediate",
    estimatedHours: 15,
    tags: ["Mobile", "iOS", "Android", "Finance"],
  },
  {
    id: "3",
    title: "Healthcare Portal Accessibility Testing",
    company: "MedCare Systems",
    description:
      "Evaluate WCAG 2.1 compliance and overall accessibility of patient portal. Test screen reader compatibility and keyboard navigation.",
    reward: 450,
    deadline: "2025-02-20",
    type: "Accessibility Testing",
    difficulty: "Intermediate",
    estimatedHours: 12,
    tags: ["Healthcare", "WCAG", "Accessibility"],
  },
  {
    id: "4",
    title: "SaaS Dashboard Performance Testing",
    company: "CloudMetrics",
    description:
      "Load and stress testing for analytics dashboard. Identify bottlenecks and performance issues under high concurrent user loads.",
    reward: 700,
    deadline: "2025-02-08",
    type: "Performance Testing",
    difficulty: "Advanced",
    estimatedHours: 18,
    tags: ["SaaS", "Load Testing", "Analytics"],
  },
  {
    id: "5",
    title: "API Integration Testing Suite",
    company: "DataSync Corp",
    description:
      "Create and execute test cases for RESTful API endpoints. Validate data integrity, error handling, and rate limiting functionality.",
    reward: 550,
    deadline: "2025-02-25",
    type: "API Testing",
    difficulty: "Intermediate",
    estimatedHours: 14,
    tags: ["API", "REST", "Integration"],
  },
  {
    id: "6",
    title: "Gaming Platform Regression Testing",
    company: "PlayZone Studios",
    description:
      "Execute regression test suite for multiplayer gaming platform after major update. Focus on matchmaking and in-game transactions.",
    reward: 400,
    deadline: "2025-02-12",
    type: "Regression Testing",
    difficulty: "Beginner",
    estimatedHours: 10,
    tags: ["Gaming", "Multiplayer", "Transactions"],
  },
]

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("available")
  const [filteredTests, setFilteredTests] = useState(testOpportunities)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleFilterChange = useCallback(
    (filters: {
      search: string
      type: string
      difficulty: string
      sortBy: string
    }) => {
      let results = [...testOpportunities]

      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        results = results.filter(
          (test) =>
            test.title.toLowerCase().includes(searchLower) ||
            test.company.toLowerCase().includes(searchLower) ||
            test.description.toLowerCase().includes(searchLower),
        )
      }

      // Type filter
      if (filters.type && filters.type !== "all") {
        results = results.filter((test) => test.type === filters.type)
      }

      // Difficulty filter
      if (filters.difficulty && filters.difficulty !== "all") {
        results = results.filter((test) => test.difficulty === filters.difficulty)
      }

      // Sorting
      switch (filters.sortBy) {
        case "reward-high":
          results.sort((a, b) => b.reward - a.reward)
          break
        case "reward-low":
          results.sort((a, b) => a.reward - b.reward)
          break
        case "deadline":
          results.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
          break
        case "newest":
        default:
          // Keep original order for newest
          break
      }

      setFilteredTests(results)
    },
    [],
  )

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <DashboardSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <DashboardSidebar
            activeSection={activeSection}
            onSectionChange={(section) => {
              setActiveSection(section)
              setMobileMenuOpen(false)
            }}
          />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64">
        <DashboardHeader onMenuClick={() => setMobileMenuOpen(true)} />

        <main className="p-4 md:p-6 lg:p-8">
          {activeSection === "available" && (
            <>
              <div className="mb-6">
                <h1 className="text-2xl font-semibold text-foreground">Available Tests</h1>
                <p className="text-muted-foreground mt-1">
                  Browse and accept testing opportunities matched to your profile
                </p>
              </div>

              <TestFilters onFilterChange={handleFilterChange} />

              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">Showing {filteredTests.length} opportunities</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filteredTests.map((test) => (
                    <TestOpportunityCard key={test.id} test={test} />
                  ))}
                </div>

                {filteredTests.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No tests match your filters.</p>
                    <p className="text-sm text-muted-foreground mt-1">Try adjusting your search criteria.</p>
                  </div>
                )}
              </div>
            </>
          )}

          {activeSection === "my-tests" && (
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">My Tests</h1>
              <p className="text-muted-foreground mb-6">Track your active and completed test assignments</p>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <p className="text-muted-foreground">You haven't accepted any tests yet.</p>
                <Button
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setActiveSection("available")}
                >
                  Browse Available Tests
                </Button>
              </div>
            </div>
          )}

          {activeSection === "profile" && (
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">My Profile</h1>
              <p className="text-muted-foreground mb-6">Manage your tester profile and skills</p>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">Profile settings coming soon...</p>
              </div>
            </div>
          )}

          {activeSection === "settings" && (
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Settings</h1>
              <p className="text-muted-foreground mb-6">Configure your account preferences</p>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground">Settings panel coming soon...</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
