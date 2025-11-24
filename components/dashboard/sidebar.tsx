"use client"

import { Shield, ClipboardList, FolderCheck, User, Settings, LogOut, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navItems = [
  { id: "available", label: "Available Tests", icon: ClipboardList },
  { id: "my-tests", label: "My Tests", icon: FolderCheck },
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
]

export default function DashboardSidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="flex flex-col h-full bg-secondary text-secondary-foreground">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-secondary-foreground/10">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
          <Shield className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <span className="font-semibold text-lg">TestHub</span>
          <span className="block text-xs text-secondary-foreground/70">Tester Portal</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-secondary-foreground/80 hover:bg-secondary-foreground/10 hover:text-secondary-foreground",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="px-3 py-4 border-t border-secondary-foreground/10">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-secondary-foreground/70 hover:bg-secondary-foreground/10 hover:text-secondary-foreground transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium">Help & Support</span>
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-secondary-foreground/70 hover:bg-secondary-foreground/10 hover:text-secondary-foreground transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>

      {/* User Info */}
      <div className="px-4 py-4 border-t border-secondary-foreground/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-secondary-foreground/60 truncate">Senior Tester</p>
          </div>
        </div>
      </div>
    </div>
  )
}
