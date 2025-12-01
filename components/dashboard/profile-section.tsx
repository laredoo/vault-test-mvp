"use client"

import { useState } from "react"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Award,
  Code,
  Shield,
  CheckCircle2,
  Edit3,
  Camera,
  Plus,
  X,
  Star,
  TrendingUp,
  Target,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useLanguageStore } from "@/lib/language-store"
import { useUserStore } from "@/lib/user-store"
import LanguageToggle from "@/components/language-toggle"

const profileTranslations = {
  en: {
    myProfile: "My Profile",
    myProfileDesc: "Manage your tester profile, skills, and preferences",
    personalInfo: "Personal Info",
    skills: "Skills",
    certifications: "Certifications",
    preferences: "Preferences",
    editProfile: "Edit Profile",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    location: "Location",
    title: "Professional Title",
    bio: "Bio",
    bioPlaceholder: "Tell companies about your testing experience and expertise...",
    memberSince: "Member Since",
    profileCompletion: "Profile Completion",
    testsCompleted: "Tests Completed",
    successRate: "Success Rate",
    avgRating: "Avg. Rating",
    totalEarnings: "Total Earnings",
    technicalSkills: "Technical Skills",
    testingTypes: "Testing Types",
    tools: "Tools & Frameworks",
    addSkill: "Add Skill",
    skillLevel: "Skill Level",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
    myCertifications: "My Certifications",
    addCertification: "Add Certification",
    certificationName: "Certification Name",
    issuingOrg: "Issuing Organization",
    issueDate: "Issue Date",
    expiryDate: "Expiry Date",
    credentialId: "Credential ID",
    verified: "Verified",
    testingPreferences: "Testing Preferences",
    preferredTestTypes: "Preferred Test Types",
    minPayoutAmount: "Minimum Payout Amount",
    availability: "Availability",
    hoursPerWeek: "Hours per Week",
    notifications: "Notifications",
    emailNotifications: "Email Notifications",
    emailNotificationsDesc: "Receive notifications about new tests via email",
    pushNotifications: "Push Notifications",
    pushNotificationsDesc: "Receive push notifications for urgent deadlines",
    weeklyDigest: "Weekly Digest",
    weeklyDigestDesc: "Receive a weekly summary of available opportunities",
    fullTime: "Full Time (40+ hrs)",
    partTime: "Part Time (20-40 hrs)",
    occasional: "Occasional (< 20 hrs)",
  },
  "pt-BR": {
    myProfile: "Meu Perfil",
    myProfileDesc: "Gerencie seu perfil de testador, habilidades e preferências",
    personalInfo: "Informações Pessoais",
    skills: "Habilidades",
    certifications: "Certificações",
    preferences: "Preferências",
    editProfile: "Editar Perfil",
    saveChanges: "Salvar Alterações",
    cancel: "Cancelar",
    fullName: "Nome Completo",
    email: "Endereço de Email",
    phone: "Número de Telefone",
    location: "Localização",
    title: "Título Profissional",
    bio: "Biografia",
    bioPlaceholder: "Conte às empresas sobre sua experiência e expertise em testes...",
    memberSince: "Membro Desde",
    profileCompletion: "Conclusão do Perfil",
    testsCompleted: "Testes Concluídos",
    successRate: "Taxa de Sucesso",
    avgRating: "Avaliação Média",
    totalEarnings: "Ganhos Totais",
    technicalSkills: "Habilidades Técnicas",
    testingTypes: "Tipos de Teste",
    tools: "Ferramentas e Frameworks",
    addSkill: "Adicionar Habilidade",
    skillLevel: "Nível de Habilidade",
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
    expert: "Especialista",
    myCertifications: "Minhas Certificações",
    addCertification: "Adicionar Certificação",
    certificationName: "Nome da Certificação",
    issuingOrg: "Organização Emissora",
    issueDate: "Data de Emissão",
    expiryDate: "Data de Validade",
    credentialId: "ID da Credencial",
    verified: "Verificado",
    testingPreferences: "Preferências de Teste",
    preferredTestTypes: "Tipos de Teste Preferidos",
    minPayoutAmount: "Valor Mínimo de Pagamento",
    availability: "Disponibilidade",
    hoursPerWeek: "Horas por Semana",
    notifications: "Notificações",
    emailNotifications: "Notificações por Email",
    emailNotificationsDesc: "Receba notificações sobre novos testes por email",
    pushNotifications: "Notificações Push",
    pushNotificationsDesc: "Receba notificações push para prazos urgentes",
    weeklyDigest: "Resumo Semanal",
    weeklyDigestDesc: "Receba um resumo semanal de oportunidades disponíveis",
    fullTime: "Tempo Integral (40+ hrs)",
    partTime: "Meio Período (20-40 hrs)",
    occasional: "Ocasional (< 20 hrs)",
  },
}

const userSkills = {
  technical: [
    { name: "JavaScript", level: "expert" },
    { name: "Python", level: "advanced" },
    { name: "SQL", level: "advanced" },
    { name: "TypeScript", level: "intermediate" },
    { name: "Java", level: "intermediate" },
  ],
  testingTypes: [
    { name: "Security Testing", level: "expert" },
    { name: "API Testing", level: "expert" },
    { name: "Performance Testing", level: "advanced" },
    { name: "Functional Testing", level: "advanced" },
    { name: "Accessibility Testing", level: "intermediate" },
  ],
  tools: [
    { name: "Selenium", level: "expert" },
    { name: "Cypress", level: "advanced" },
    { name: "Postman", level: "expert" },
    { name: "JMeter", level: "advanced" },
    { name: "Burp Suite", level: "advanced" },
    { name: "OWASP ZAP", level: "intermediate" },
  ],
}

const userCertifications = [
  {
    id: 1,
    name: "ISTQB Certified Tester",
    organization: "ISTQB",
    issueDate: "2020-03-15",
    expiryDate: "2025-03-15",
    credentialId: "ISTQB-2020-45678",
    verified: true,
  },
  {
    id: 2,
    name: "Certified Ethical Hacker (CEH)",
    organization: "EC-Council",
    issueDate: "2021-06-20",
    expiryDate: "2024-06-20",
    credentialId: "CEH-2021-78901",
    verified: true,
  },
  {
    id: 3,
    name: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    issueDate: "2022-01-10",
    expiryDate: "2025-01-10",
    credentialId: "AWS-SA-2022-12345",
    verified: true,
  },
]

export default function ProfileSection() {
  const { language } = useLanguageStore()
  const t = profileTranslations[language]
  const [isEditing, setIsEditing] = useState(false)

  const { profile, updateProfile } = useUserStore()

  // Local edit state for form fields
  const [editForm, setEditForm] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    title: profile.title,
    bio: profile.bio,
  })

  const handleSave = () => {
    updateProfile(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditForm({
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      location: profile.location,
      title: profile.title,
      bio: profile.bio,
    })
    setIsEditing(false)
  }

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-primary text-primary-foreground"
      case "advanced":
        return "bg-accent text-accent-foreground"
      case "intermediate":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getSkillLevelLabel = (level: string) => {
    switch (level) {
      case "expert":
        return language === "en" ? "Expert" : "Especialista"
      case "advanced":
        return language === "en" ? "Advanced" : "Avançado"
      case "intermediate":
        return language === "en" ? "Intermediate" : "Intermediário"
      default:
        return language === "en" ? "Beginner" : "Iniciante"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{t.myProfile}</h1>
          <p className="text-muted-foreground mt-1">{t.myProfileDesc}</p>
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          {isEditing ? (
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCancel}>
                {t.cancel}
              </Button>
              <Button onClick={handleSave}>{t.saveChanges}</Button>
            </div>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit3 className="w-4 h-4 mr-2" />
              {t.editProfile}
            </Button>
          )}
        </div>
      </div>

      {/* Profile Completion */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">{t.profileCompletion}</span>
            <span className="text-sm text-muted-foreground">{profile.profileCompletion}%</span>
          </div>
          <Progress value={profile.profileCompletion} className="h-2" />
        </CardContent>
      </Card>

      {/* Stats Cards - Now using shared store data */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{profile.stats.testsCompleted}</p>
                <p className="text-xs text-muted-foreground">{t.testsCompleted}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{profile.stats.successRate}%</p>
                <p className="text-xs text-muted-foreground">{t.successRate}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-500/10">
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{profile.stats.avgRating}</p>
                <p className="text-xs text-muted-foreground">{t.avgRating}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">${profile.stats.totalEarnings.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{t.totalEarnings}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">{t.personalInfo}</TabsTrigger>
          <TabsTrigger value="skills">{t.skills}</TabsTrigger>
          <TabsTrigger value="certifications">{t.certifications}</TabsTrigger>
          <TabsTrigger value="preferences">{t.preferences}</TabsTrigger>
        </TabsList>

        {/* Personal Info Tab */}
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{profile.avatar}</span>
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                        <Camera className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="gap-1">
                      <Shield className="w-3 h-3" />
                      {t.verified}
                    </Badge>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="flex-1 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.fullName}</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        value={isEditing ? editForm.name : profile.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={isEditing ? editForm.email : profile.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        value={isEditing ? editForm.phone : profile.phone}
                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">{t.location}</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="location"
                        value={isEditing ? editForm.location : profile.location}
                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">{t.title}</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="title"
                        value={isEditing ? editForm.title : profile.title}
                        onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>{t.memberSince}</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={profile.memberSince} disabled className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">{t.bio}</Label>
                    <Textarea
                      id="bio"
                      value={isEditing ? editForm.bio : profile.bio}
                      onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                      disabled={!isEditing}
                      placeholder={t.bioPlaceholder}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{t.technicalSkills}</CardTitle>
                </div>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    {t.addSkill}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userSkills.technical.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="px-3 py-1.5 gap-2">
                    {skill.name}
                    <span className={`text-xs px-1.5 py-0.5 rounded ${getSkillLevelColor(skill.level)}`}>
                      {getSkillLevelLabel(skill.level)}
                    </span>
                    {isEditing && (
                      <button className="ml-1 hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{t.testingTypes}</CardTitle>
                </div>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    {t.addSkill}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userSkills.testingTypes.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="px-3 py-1.5 gap-2">
                    {skill.name}
                    <span className={`text-xs px-1.5 py-0.5 rounded ${getSkillLevelColor(skill.level)}`}>
                      {getSkillLevelLabel(skill.level)}
                    </span>
                    {isEditing && (
                      <button className="ml-1 hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{t.tools}</CardTitle>
                </div>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    {t.addSkill}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userSkills.tools.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="px-3 py-1.5 gap-2">
                    {skill.name}
                    <span className={`text-xs px-1.5 py-0.5 rounded ${getSkillLevelColor(skill.level)}`}>
                      {getSkillLevelLabel(skill.level)}
                    </span>
                    {isEditing && (
                      <button className="ml-1 hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Certifications Tab */}
        <TabsContent value="certifications" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{t.myCertifications}</CardTitle>
                </div>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    {t.addCertification}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {userCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg gap-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{cert.name}</h4>
                        {cert.verified && (
                          <Badge variant="secondary" className="gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {t.verified}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.organization}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {t.credentialId}: {cert.credentialId}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right">
                    <p>
                      {t.issueDate}: {new Date(cert.issueDate).toLocaleDateString()}
                    </p>
                    <p>
                      {t.expiryDate}: {new Date(cert.expiryDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">{t.testingPreferences}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>{t.preferredTestTypes}</Label>
                  <Select disabled={!isEditing} defaultValue="security">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="security">Security Testing</SelectItem>
                      <SelectItem value="functional">Functional Testing</SelectItem>
                      <SelectItem value="performance">Performance Testing</SelectItem>
                      <SelectItem value="api">API Testing</SelectItem>
                      <SelectItem value="accessibility">Accessibility Testing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>{t.minPayoutAmount}</Label>
                  <Select disabled={!isEditing} defaultValue="200">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100">$100+</SelectItem>
                      <SelectItem value="200">$200+</SelectItem>
                      <SelectItem value="500">$500+</SelectItem>
                      <SelectItem value="1000">$1,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>{t.availability}</Label>
                <Select disabled={!isEditing} defaultValue="parttime">
                  <SelectTrigger className="w-full md:w-1/2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">{t.fullTime}</SelectItem>
                    <SelectItem value="parttime">{t.partTime}</SelectItem>
                    <SelectItem value="occasional">{t.occasional}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">{t.notifications}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>{t.emailNotifications}</Label>
                  <p className="text-sm text-muted-foreground">{t.emailNotificationsDesc}</p>
                </div>
                <Switch disabled={!isEditing} defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>{t.pushNotifications}</Label>
                  <p className="text-sm text-muted-foreground">{t.pushNotificationsDesc}</p>
                </div>
                <Switch disabled={!isEditing} defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>{t.weeklyDigest}</Label>
                  <p className="text-sm text-muted-foreground">{t.weeklyDigestDesc}</p>
                </div>
                <Switch disabled={!isEditing} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
