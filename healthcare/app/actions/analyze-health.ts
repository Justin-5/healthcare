'use server'

import { HealthFormValues } from '../lib/schema'

interface AnalysisResponse {
  summary: {
    health_score: number;
    risk_level: string;
    risk_message: string;
    predicted_condition: string;
    confidence: number;
  };
  analysis: {
    metrics_overview: {
      total_metrics: number;
      metrics_at_risk: number;
      normal_metrics: number;
      trends: object;
    };
    detailed_metrics: object;
    risk_factors: object;
  };
  action_plan: {
    immediate_actions: string[];
    monitoring: string[];
    lifestyle_changes: string[];
    preventive_measures: string[];
  };
  warnings: {
    abnormal_metrics: object;
    critical_values: string[];
  };
}

export async function analyzeHealth(data: HealthFormValues): Promise<{ success: boolean; data?: AnalysisResponse; error?: string }> {
  try {
    const response = await fetch('http://localhost:8000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Server error')
    }

    const result: AnalysisResponse = await response.json()
    return { success: true, data: result }
  } catch (error) {
    console.error('Error analyzing health data:', error)
    return { success: false, error: 'An error occurred while analyzing your health data. Please try again.' }
  }
}

