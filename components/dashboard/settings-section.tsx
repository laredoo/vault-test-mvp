"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Bell,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Globe,
  CreditCard,
  Trash2,
  Download,
  AlertTriangle,
  CheckCircle2,
  Smartphone,
  Mail,
  Key,
} from "lucide-react"
import { useLanguageStore } from "@/lib/language-store"
import { useTranslation } from "@/lib/translations"
import LanguageToggle from "@/components/language-toggle"

export default function SettingsSection() {
  const { theme, setTheme } = useTheme()
  const { language } = useLanguageStore()
  const t = useTranslation(language)

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    testAlerts: true,
    paymentAlerts: true,
    weeklyDigest: false,
    marketingEmails: false,
  })
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEarnings: false,
    showCompletedTests: true,
  })
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  const isNightMode = theme === "dark"

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{t.settingsTitle}</h1>
        <p className="text-muted-foreground mt-1">{t.settingsDescription}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Settings Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Appearance Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {isNightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                {t.appearance}
              </CardTitle>
              <CardDescription>{t.appearanceDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Night Mode Toggle */}
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-full transition-all duration-500 ${
                      isNightMode ? "bg-indigo-500/20 text-indigo-400" : "bg-amber-500/20 text-amber-500"
                    }`}
                  >
                    {isNightMode ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                  </div>
                  <div>
                    <Label htmlFor="night-mode" className="text-base font-medium">
                      {t.nightMode}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {isNightMode ? t.nightModeOnDescription : t.nightModeOffDescription}
                    </p>
                  </div>
                </div>
                <Switch
                  id="night-mode"
                  checked={isNightMode}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  className="data-[state=checked]:bg-indigo-500"
                />
              </div>

              {/* Theme Preview */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setTheme("light")}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    !isNightMode ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="h-5 w-5 text-amber-500" />
                    <span className="font-medium">{t.lightMode}</span>
                    {!isNightMode && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {t.active}
                      </Badge>
                    )}
                  </div>
                  <div className="rounded-md border border-border bg-white p-2 space-y-1.5">
                    <div className="h-2 w-3/4 rounded bg-gray-200" />
                    <div className="h-2 w-1/2 rounded bg-gray-200" />
                    <div className="h-2 w-2/3 rounded bg-gray-200" />
                  </div>
                </button>

                <button
                  onClick={() => setTheme("dark")}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    isNightMode ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Moon className="h-5 w-5 text-indigo-400" />
                    <span className="font-medium">{t.darkMode}</span>
                    {isNightMode && (
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {t.active}
                      </Badge>
                    )}
                  </div>
                  <div className="rounded-md border border-gray-700 bg-gray-900 p-2 space-y-1.5">
                    <div className="h-2 w-3/4 rounded bg-gray-700" />
                    <div className="h-2 w-1/2 rounded bg-gray-700" />
                    <div className="h-2 w-2/3 rounded bg-gray-700" />
                  </div>
                </button>
              </div>

              <Separator />

              {/* Language Setting */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-muted">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <Label className="text-base font-medium">{t.language}</Label>
                    <p className="text-sm text-muted-foreground">{t.languageDescription}</p>
                  </div>
                </div>
                <LanguageToggle />
              </div>
            </CardContent>
          </Card>

          {/* Notifications Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                {t.notificationSettings}
              </CardTitle>
              <CardDescription>{t.notificationSettingsDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label htmlFor="email-notif">{t.emailNotifications}</Label>
                    <p className="text-sm text-muted-foreground">{t.emailNotificationsDescription}</p>
                  </div>
                </div>
                <Switch
                  id="email-notif"
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label htmlFor="push-notif">{t.pushNotifications}</Label>
                    <p className="text-sm text-muted-foreground">{t.pushNotificationsDescription}</p>
                  </div>
                </div>
                <Switch
                  id="push-notif"
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label htmlFor="test-alerts">{t.testAlerts}</Label>
                    <p className="text-sm text-muted-foreground">{t.testAlertsDescription}</p>
                  </div>
                </div>
                <Switch
                  id="test-alerts"
                  checked={notifications.testAlerts}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, testAlerts: checked })}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label htmlFor="payment-alerts">{t.paymentAlerts}</Label>
                    <p className="text-sm text-muted-foreground">{t.paymentAlertsDescription}</p>
                  </div>
                </div>
                <Switch
                  id="payment-alerts"
                  checked={notifications.paymentAlerts}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, paymentAlerts: checked })}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <Label htmlFor="weekly-digest">{t.weeklyDigest}</Label>
                    <p className="text-sm text-muted-foreground">{t.weeklyDigestDescription}</p>
                  </div>
                </div>
                <Switch
                  id="weekly-digest"
                  checked={notifications.weeklyDigest}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyDigest: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Security Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {t.securitySettings}
              </CardTitle>
              <CardDescription>{t.securitySettingsDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-full ${
                      twoFactorEnabled ? "bg-green-500/20 text-green-500" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Key className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Label className="text-base font-medium">{t.twoFactorAuth}</Label>
                      {twoFactorEnabled && (
                        <Badge className="bg-green-500/20 text-green-600 border-green-500/30">{t.enabled}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{t.twoFactorAuthDescription}</p>
                  </div>
                </div>
                <Switch
                  checked={twoFactorEnabled}
                  onCheckedChange={setTwoFactorEnabled}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>

              <Separator />

              {/* Change Password */}
              <div className="space-y-4">
                <Label className="text-base font-medium">{t.changePassword}</Label>
                <div className="grid gap-4">
                  <div className="relative">
                    <Input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder={t.currentPassword}
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                  <div className="relative">
                    <Input type={showNewPassword ? "text" : "password"} placeholder={t.newPassword} className="pr-10" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                  <Input type="password" placeholder={t.confirmNewPassword} />
                  <Button className="w-fit">{t.updatePassword}</Button>
                </div>
              </div>

              <Separator />

              {/* Active Sessions */}
              <div className="space-y-4">
                <Label className="text-base font-medium">{t.activeSessions}</Label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-500/20">
                        <Smartphone className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{t.currentDevice}</p>
                        <p className="text-xs text-muted-foreground">Chrome · São Paulo, Brazil</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-500/30">
                      {t.active}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-muted">
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">iPhone 15 Pro</p>
                        <p className="text-xs text-muted-foreground">Safari · {t.lastActive} 2h ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      {t.revoke}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                {t.privacySettings}
              </CardTitle>
              <CardDescription>{t.privacySettingsDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <Label htmlFor="profile-visible">{t.profileVisibility}</Label>
                  <p className="text-sm text-muted-foreground">{t.profileVisibilityDescription}</p>
                </div>
                <Switch
                  id="profile-visible"
                  checked={privacy.profileVisible}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, profileVisible: checked })}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div>
                  <Label htmlFor="show-earnings">{t.showEarnings}</Label>
                  <p className="text-sm text-muted-foreground">{t.showEarningsDescription}</p>
                </div>
                <Switch
                  id="show-earnings"
                  checked={privacy.showEarnings}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, showEarnings: checked })}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div>
                  <Label htmlFor="show-tests">{t.showCompletedTests}</Label>
                  <p className="text-sm text-muted-foreground">{t.showCompletedTestsDescription}</p>
                </div>
                <Switch
                  id="show-tests"
                  checked={privacy.showCompletedTests}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, showCompletedTests: checked })}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.quickActions}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                {t.downloadData}
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                <CreditCard className="h-4 w-4" />
                {t.paymentMethods}
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-destructive hover:text-destructive bg-transparent"
              >
                <Trash2 className="h-4 w-4" />
                {t.deleteAccount}
              </Button>
            </CardContent>
          </Card>

          {/* Account Status Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.accountStatus}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-500/20">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.emailVerified}</p>
                  <p className="text-xs text-muted-foreground">alex@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-500/20">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.identityVerified}</p>
                  <p className="text-xs text-muted-foreground">{t.verifiedOn} Nov 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${twoFactorEnabled ? "bg-green-500/20" : "bg-amber-500/20"}`}>
                  {twoFactorEnabled ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.twoFactorAuth}</p>
                  <p className="text-xs text-muted-foreground">{twoFactorEnabled ? t.enabled : t.notEnabled}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Card */}
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">{t.needHelp}</h3>
                <p className="text-sm text-muted-foreground">{t.needHelpDescription}</p>
                <Button variant="link" className="text-primary">
                  {t.contactSupport}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
