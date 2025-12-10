"use client"

import type React from "react"

import { useLanguageStore, type Language } from "@/lib/language-store"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// UK Flag SVG Component
function UKFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className}>
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#uk-diag)" />
        <clipPath id="uk-diag">
          <path d="M30,15 L60,30 L60,15 L30,0 L0,0 L0,15 L30,30 L60,30 L60,15 Z" />
        </clipPath>
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  )
}

// Brazil Flag SVG Component
function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 42" className={className}>
      <rect width="60" height="42" fill="#009c3b" />
      <polygon points="30,3 57,21 30,39 3,21" fill="#ffdf00" />
      <circle cx="30" cy="21" r="9" fill="#002776" />
      <path d="M21,21 Q30,16 39,21" fill="none" stroke="#fff" strokeWidth="1.5" />
    </svg>
  )
}

interface LanguageToggleProps {
  variant?: "default" | "compact"
}

function LanguageToggle({ variant = "default" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguageStore()

  const languages: { code: Language; name: string; flag: React.ReactNode }[] = [
    {
      code: "en",
      name: "English",
      flag: <UKFlag className="w-6 h-4 rounded-sm" />,
    },
    {
      code: "pt-BR",
      name: "Português",
      flag: <BrazilFlag className="w-6 h-4 rounded-sm" />,
    },
  ]

  const currentLanguage = languages.find((l) => l.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={variant === "compact" ? "sm" : "default"}
          className={cn("gap-2 border-border hover:bg-muted", variant === "compact" && "px-2")}
        >
          {currentLanguage?.flag}
          {variant === "default" && <span className="hidden sm:inline">{currentLanguage?.name}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn("flex items-center gap-3 cursor-pointer", language === lang.code && "bg-muted")}
          >
            {lang.flag}
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { LanguageToggle }
export default LanguageToggle
