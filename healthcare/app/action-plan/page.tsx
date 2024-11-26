'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Zap, Activity, Utensils, Shield } from 'lucide-react'
import Link from 'next/link'

// Mock API response data
const actionPlanData = {
  immediateActions: [
    "Schedule an appointment with your primary care physician within the next 7 days",
    "Begin monitoring your blood pressure daily",
    "Start a food diary to track your daily intake"
  ],
  monitoring: [
    "Check blood pressure every morning and evening",
    "Weigh yourself once a week",
    "Track your daily step count"
  ],
  lifestyleChanges: [
    "Increase daily water intake to 8 glasses",
    "Incorporate 30 minutes of moderate exercise 5 days a week",
    "Reduce sodium intake to less than 2,300 mg per day",
    "Aim for 7-9 hours of sleep each night"
  ],
  preventiveMeasures: [
    "Schedule annual health check-ups",
    "Get up-to-date on all recommended vaccinations",
    "Perform monthly self-examinations",
    "Practice stress-reduction techniques like meditation or deep breathing exercises"
  ]
}

interface ActionListProps {
  items: string[]
}

const ActionList: React.FC<ActionListProps> = ({ items }) => (
  <ol className="list-decimal list-inside space-y-2">
    {items.map((item, index) => (
      <li key={index} className="text-sm">{item}</li>
    ))}
  </ol>
)

export default function ActionPlanPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Personalized Action Plan</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-4 w-4 text-yellow-500" />
              Immediate Actions
            </CardTitle>
            <CardDescription>Steps to take right away</CardDescription>
          </CardHeader>
          <CardContent>
            <ActionList items={actionPlanData.immediateActions} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-4 w-4 text-blue-500" />
              Monitoring
            </CardTitle>
            <CardDescription>Regular check-ins for your health</CardDescription>
          </CardHeader>
          <CardContent>
            <ActionList items={actionPlanData.monitoring} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Utensils className="mr-2 h-4 w-4 text-green-500" />
              Lifestyle Changes
            </CardTitle>
            <CardDescription>Long-term habits for better health</CardDescription>
          </CardHeader>
          <CardContent>
            <ActionList items={actionPlanData.lifestyleChanges} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-4 w-4 text-purple-500" />
              Preventive Measures
            </CardTitle>
            <CardDescription>Proactive steps for future well-being</CardDescription>
          </CardHeader>
          <CardContent>
            <ActionList items={actionPlanData.preventiveMeasures} />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex justify-between">
        <Button asChild variant="outline">
          <Link href="/detailed-analysis">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Detailed Analysis
          </Link>
        </Button>
        <Button asChild>
          <Link href="/progress-tracker">Track Your Progress</Link>
        </Button>
      </div>
    </div>
  )
}

