"use client"

import { useState, useEffect } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface FiltersProps {
  onFilterChange: (filters: {
    search: string
    type: string
    difficulty: string
    sortBy: string
  }) => void
}

const testTypes = [
  "Security Testing",
  "Functional Testing",
  "Accessibility Testing",
  "Performance Testing",
  "API Testing",
  "Regression Testing",
]

const difficulties = ["Beginner", "Intermediate", "Advanced"]

export default function TestFilters({ onFilterChange }: FiltersProps) {
  const [search, setSearch] = useState("")
  const [type, setType] = useState("all")
  const [difficulty, setDifficulty] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    onFilterChange({ search, type, difficulty, sortBy })
  }, [search, type, difficulty, sortBy, onFilterChange])

  const activeFiltersCount = [type, difficulty].filter((f) => f !== "all").length

  const clearFilters = () => {
    setSearch("")
    setType("all")
    setDifficulty("all")
    setSortBy("newest")
  }

  return (
    <div className="space-y-4">
      {/* Search and Filter Toggle */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by title, company, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1 bg-primary text-primary-foreground">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="deadline">Deadline</SelectItem>
              <SelectItem value="reward-high">Highest Reward</SelectItem>
              <SelectItem value="reward-low">Lowest Reward</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-3 p-4 bg-muted/50 rounded-lg border border-border">
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-2 block">Test Type</label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {testTypes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-2 block">Difficulty</label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                {difficulties.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {activeFiltersCount > 0 && (
            <div className="flex items-end">
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                <X className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
