"use client"

import Link from "next/link"
import { Calendar, Clock, DollarSign, ArrowRight, Building2, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { TestOpportunity } from "@/lib/test-data"
import { useAcceptedTestsStore } from "@/lib/accepted-tests-store"

interface CardProps {
  test: TestOpportunity
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}

export default function TestOpportunityCard({ test }: CardProps) {
  const { isTestAccepted } = useAcceptedTestsStore()
  const accepted = isTestAccepted(test.id)

  const daysUntilDeadline = Math.ceil((new Date(test.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  const isUrgent = daysUntilDeadline <= 7

  return (
    <Card
      className={cn(
        "group flex flex-col h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30",
        accepted && "border-green-500/30 bg-green-50/30 dark:bg-green-900/10",
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {test.type}
            </Badge>
            {accepted && (
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Accepted
              </Badge>
            )}
          </div>
          <Badge className={cn("text-xs", difficultyColors[test.difficulty])}>{test.difficulty}</Badge>
        </div>
        <h3 className="font-semibold text-lg leading-tight mt-3 group-hover:text-primary transition-colors">
          {test.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="w-4 h-4" />
          <span>{test.company}</span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{test.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {test.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
          {test.tags.length > 3 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{test.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{test.estimatedHours}h est.</span>
          </div>
          <div
            className={cn(
              "flex items-center gap-2",
              isUrgent ? "text-red-600 dark:text-red-400" : "text-muted-foreground",
            )}
          >
            <Calendar className="w-4 h-4" />
            <span>{daysUntilDeadline}d left</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t border-border">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-xl font-bold text-foreground">{test.reward}</span>
          </div>
          <Link href={`/test/${test.id}`}>
            <Button
              className={cn(
                "group/btn",
                accepted
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              {accepted ? "View Progress" : "View Details"}
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
