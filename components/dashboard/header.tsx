"use client"

import { Bell, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUserStore } from "@/lib/user-store"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguageStore } from "@/lib/language-store"
import { useTranslation } from "@/lib/translations"

interface HeaderProps {
  onMenuClick: () => void
}

export default function DashboardHeader({ onMenuClick }: HeaderProps) {
  const { profile } = useUserStore()
  const { language } = useLanguageStore()
  const t = useTranslation(language)

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="w-5 h-5" />
          <span className="sr-only">Open menu</span>
        </Button>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input type="search" placeholder={t.searchPlaceholder} className="pl-10 bg-muted/50 border-border" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <LanguageToggle variant="compact" />

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                <span className="sr-only">{t.notifications}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>{t.notifications}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                <span className="font-medium">{t.newTestOpportunity}</span>
                <span className="text-sm text-muted-foreground">{t.ecommerceSecurityAvailable}</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                <span className="font-medium">{t.paymentReceived}</span>
                <span className="text-sm text-muted-foreground">{t.paymentAmount}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-primary">{t.viewAllNotifications}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Stats */}
          <div className="hidden sm:flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">{t.completed}</p>
              <p className="font-semibold text-foreground">
                {profile.stats.testsCompleted} {t.tests}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">{t.earned}</p>
              <p className="font-semibold text-primary">${profile.stats.totalEarnings.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
