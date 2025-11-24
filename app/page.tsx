"use client"

import { useState, useCallback, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"
import TestOpportunityCard from "@/components/dashboard/test-opportunity-card"
import TestFilters from "@/components/dashboard/test-filters"
import MyTestsSection from "@/components/dashboard/my-tests-section"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { testOpportunities } from "@/lib/test-data"

export default function Dashboard() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialSection = searchParams.get("section") || "available"
  const [activeSection, setActiveSection] = useState(initialSection)
  const [filteredTests, setFilteredTests] = useState(testOpportunities)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const sectionParam = searchParams.get("section")
    if (sectionParam && sectionParam !== activeSection) {
      setActiveSection(sectionParam)
    }
  }, [searchParams, activeSection])

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    router.push(`/?section=${section}`, { scroll: false })
  }

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
        <DashboardSidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <DashboardSidebar
            activeSection={activeSection}
            onSectionChange={(section) => {
              handleSectionChange(section)
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

          {activeSection === "my-tests" && <MyTestsSection onBrowseTests={() => handleSectionChange("available")} />}

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
