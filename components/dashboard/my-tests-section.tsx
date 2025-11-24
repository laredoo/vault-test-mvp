"use client"

import type React from "react"

import Link from "next/link"
import {
  Calendar,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Play,
  FileText,
  Send,
  ExternalLink,
  ChevronRight,
  Timer,
  TrendingUp,
  Award,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useAcceptedTestsStore, type AcceptedTest } from "@/lib/accepted-tests-store"
import { testOpportunities, type TestOpportunity } from "@/lib/test-data"

const statusConfig: Record<AcceptedTest["status"], { label: string; color: string; icon: React.ElementType }> = {
  "in-progress": {
    label: "In Progress",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    icon: Play,
  },
  submitted: {
    label: "Submitted",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    icon: Send,
  },
  "under-review": {
    label: "Under Review",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    icon: FileText,
  },
  completed: {
    label: "Completed",
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    icon: CheckCircle2,
  },
  rejected: {
    label: "Rejected",
    color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    icon: AlertCircle,
  },
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}

interface AcceptedTestWithDetails extends AcceptedTest {
  details: TestOpportunity
}

export default function MyTestsSection({ onBrowseTests }: { onBrowseTests: () => void }) {
  const { acceptedTests, updateTestProgress, updateTestStatus } = useAcceptedTestsStore()

  // Join accepted tests with full test details
  const testsWithDetails: AcceptedTestWithDetails[] = acceptedTests
    .map((acceptedTest) => {
      const details = testOpportunities.find((t) => t.id === acceptedTest.id)
      if (!details) return null
      return { ...acceptedTest, details }
    })
    .filter((t): t is AcceptedTestWithDetails => t !== null)

  // Separate by status
  const activeTests = testsWithDetails.filter(
    (t) => t.status === "in-progress" || t.status === "submitted" || t.status === "under-review",
  )
  const completedTests = testsWithDetails.filter((t) => t.status === "completed" || t.status === "rejected")

  // Calculate stats
  const totalEarnings = completedTests
    .filter((t) => t.status === "completed")
    .reduce((sum, t) => sum + t.details.reward, 0)
  const pendingEarnings = activeTests.reduce((sum, t) => sum + t.details.reward, 0)

  if (testsWithDetails.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">My Tests</h1>
        <p className="text-muted-foreground mb-6">Track your active and completed test assignments</p>
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">No Tests Yet</h3>
          <p className="text-muted-foreground mb-4">
            You haven't accepted any tests yet. Browse available opportunities to get started.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={onBrowseTests}>
            Browse Available Tests
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">My Tests</h1>
        <p className="text-muted-foreground">Track your active and completed test assignments</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Play className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{activeTests.length}</p>
                <p className="text-xs text-muted-foreground">Active Tests</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {completedTests.filter((t) => t.status === "completed").length}
                </p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${totalEarnings}</p>
                <p className="text-xs text-muted-foreground">Total Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                <Timer className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${pendingEarnings}</p>
                <p className="text-xs text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Tests */}
      {activeTests.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            Active Tests ({activeTests.length})
          </h2>
          <div className="space-y-4">
            {activeTests.map((test) => {
              const StatusIcon = statusConfig[test.status].icon
              const daysUntilDeadline = Math.ceil(
                (new Date(test.details.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
              )
              const isUrgent = daysUntilDeadline <= 3
              const isOverdue = daysUntilDeadline < 0

              return (
                <Card key={test.id} className={cn("overflow-hidden", isOverdue && "border-red-500/50")}>
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Main Info */}
                      <div className="flex-1 p-4 md:p-6">
                        <div className="flex flex-wrap items-start gap-2 mb-3">
                          <Badge className={statusConfig[test.status].color}>
                            <StatusIcon className="w-3.5 h-3.5 mr-1" />
                            {statusConfig[test.status].label}
                          </Badge>
                          <Badge variant="secondary">{test.details.type}</Badge>
                          <Badge className={difficultyColors[test.details.difficulty]}>{test.details.difficulty}</Badge>
                        </div>

                        <Link href={`/test/${test.id}`}>
                          <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                            {test.details.title}
                          </h3>
                        </Link>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{test.details.description}</p>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">Progress</span>
                            <span className="text-sm text-muted-foreground">{test.progress}%</span>
                          </div>
                          <Progress value={test.progress} className="h-2" />
                        </div>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-1.5">
                            <DollarSign className="w-4 h-4 text-primary" />
                            <span className="font-semibold text-foreground">${test.details.reward}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{test.details.estimatedHours}h estimated</span>
                          </div>
                          <div
                            className={cn(
                              "flex items-center gap-1.5",
                              isOverdue
                                ? "text-red-600 dark:text-red-400"
                                : isUrgent
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-muted-foreground",
                            )}
                          >
                            <Calendar className="w-4 h-4" />
                            {isOverdue ? (
                              <span className="font-medium">Overdue by {Math.abs(daysUntilDeadline)} days</span>
                            ) : (
                              <span className={isUrgent ? "font-medium" : ""}>{daysUntilDeadline} days left</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Actions Sidebar */}
                      <div className="flex md:flex-col items-center justify-between md:justify-center gap-3 p-4 md:p-6 bg-muted/30 md:w-48 border-t md:border-t-0 md:border-l border-border">
                        <Link href={`/test/${test.id}`} className="w-full">
                          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                        {test.status === "in-progress" && (
                          <Button
                            variant="outline"
                            className="w-full bg-transparent"
                            onClick={() => updateTestStatus(test.id, "submitted")}
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Submit
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Completed Tests */}
      {completedTests.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Completed Tests ({completedTests.length})
          </h2>
          <div className="space-y-3">
            {completedTests.map((test) => {
              const StatusIcon = statusConfig[test.status].icon
              return (
                <Card key={test.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                            test.status === "completed"
                              ? "bg-green-100 dark:bg-green-900/30"
                              : "bg-red-100 dark:bg-red-900/30",
                          )}
                        >
                          <StatusIcon
                            className={cn(
                              "w-5 h-5",
                              test.status === "completed"
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400",
                            )}
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-medium text-foreground truncate">{test.details.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>{test.details.company}</span>
                            <span>•</span>
                            <span>
                              Completed{" "}
                              {test.completedAt ? new Date(test.completedAt).toLocaleDateString() : "Recently"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        {test.status === "completed" && (
                          <div className="text-right">
                            <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                              +${test.details.reward}
                            </p>
                            <p className="text-xs text-muted-foreground">Earned</p>
                          </div>
                        )}
                        <Link href={`/test/${test.id}`}>
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="w-5 h-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Browse More CTA */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Keep Growing</h3>
                <p className="text-sm text-muted-foreground">
                  Browse more testing opportunities to increase your earnings
                </p>
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={onBrowseTests}>
              Find More Tests
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
