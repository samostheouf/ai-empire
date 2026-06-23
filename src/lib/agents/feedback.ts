export interface UserFeedback {
  id: string
  agentId: string
  userId?: string
  rating: number
  comment?: string
  category: 'quality' | 'speed' | 'accuracy' | 'creativity' | 'helpfulness'
  timestamp: Date
  requestId?: string
}

export interface FeedbackAnalysis {
  agentId: string
  totalFeedback: number
  averageRating: number
  ratingDistribution: Record<number, number>
  categoryAverages: Record<string, number>
  sentimentScore: number
  improvementAreas: string[]
  strengths: string[]
  recentTrend: 'improving' | 'declining' | 'stable'
}

export interface ImprovementSuggestion {
  id: string
  agentId: string
  category: string
  priority: 'high' | 'medium' | 'low'
  description: string
  implementation: string
  expectedImpact: number
  createdAt: Date
}

export class FeedbackSystem {
  private feedback: Map<string, UserFeedback[]> = new Map()

  submitFeedback(feedback: Omit<UserFeedback, 'id' | 'timestamp'>): UserFeedback {
    const newFeedback: UserFeedback = {
      ...feedback,
      id: crypto.randomUUID(),
      timestamp: new Date()
    }

    const agentFeedback = this.feedback.get(feedback.agentId) || []
    agentFeedback.push(newFeedback)
    this.feedback.set(feedback.agentId, agentFeedback)

    return newFeedback
  }

  analyzeFeedback(agentId: string): FeedbackAnalysis {
    const agentFeedback = this.feedback.get(agentId) || []

    if (agentFeedback.length === 0) {
      return this.emptyAnalysis(agentId)
    }

    const totalRating = agentFeedback.reduce((sum, f) => sum + f.rating, 0)
    const averageRating = totalRating / agentFeedback.length

    const ratingDistribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    agentFeedback.forEach(f => {
      ratingDistribution[f.rating] = (ratingDistribution[f.rating] || 0) + 1
    })

    const categoryAverages: Record<string, number> = {}
    const categoryCounts: Record<string, number> = {}
    agentFeedback.forEach(f => {
      if (!categoryAverages[f.category]) {
        categoryAverages[f.category] = 0
        categoryCounts[f.category] = 0
      }
      categoryAverages[f.category] += f.rating
      categoryCounts[f.category]++
    })

    for (const category of Object.keys(categoryAverages)) {
      categoryAverages[category] = Math.round(
        (categoryAverages[category] / categoryCounts[category]) * 100
      ) / 100
    }

    const sentimentScore = Math.round((averageRating / 5) * 100)

    const improvementAreas: string[] = []
    const strengths: string[] = []

    for (const [category, avg] of Object.entries(categoryAverages)) {
      if (avg < 3.5) {
        improvementAreas.push(category)
      } else if (avg >= 4.5) {
        strengths.push(category)
      }
    }

    const recentTrend = this.calculateTrend(agentFeedback)

    return {
      agentId,
      totalFeedback: agentFeedback.length,
      averageRating: Math.round(averageRating * 100) / 100,
      ratingDistribution,
      categoryAverages,
      sentimentScore,
      improvementAreas,
      strengths,
      recentTrend
    }
  }

  generateSuggestions(agentId: string): ImprovementSuggestion[] {
    const analysis = this.analyzeFeedback(agentId)
    const suggestions: ImprovementSuggestion[] = []

    for (const area of analysis.improvementAreas) {
      const priority = analysis.categoryAverages[area] < 2.5 ? 'high' : 'medium'

      suggestions.push({
        id: crypto.randomUUID(),
        agentId,
        category: area,
        priority,
        description: this.getSuggestionDescription(area, analysis.categoryAverages[area]),
        implementation: this.getSuggestionImplementation(area),
        expectedImpact: Math.round((5 - analysis.categoryAverages[area]) * 10),
        createdAt: new Date()
      })
    }

    if (analysis.averageRating < 4.0) {
      suggestions.push({
        id: crypto.randomUUID(),
        agentId,
        category: 'general',
        priority: 'high',
        description: 'Score général faible - révision complète du prompt recommandée',
        implementation: 'Analyser les commentaires négatifs et adapter le prompt système',
        expectedImpact: 25,
        createdAt: new Date()
      })
    }

    return suggestions.sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      return priorityOrder[a.priority] - priorityOrder[b.priority]
    })
  }

  private calculateTrend(feedback: UserFeedback[]): 'improving' | 'declining' | 'stable' {
    if (feedback.length < 10) return 'stable'

    const sorted = [...feedback].sort(
      (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
    )

    const midpoint = Math.floor(sorted.length / 2)
    const firstHalf = sorted.slice(0, midpoint)
    const secondHalf = sorted.slice(midpoint)

    const avgFirst = firstHalf.reduce((sum, f) => sum + f.rating, 0) / firstHalf.length
    const avgSecond = secondHalf.reduce((sum, f) => sum + f.rating, 0) / secondHalf.length

    const difference = avgSecond - avgFirst

    if (difference > 0.3) return 'improving'
    if (difference < -0.3) return 'declining'
    return 'stable'
  }

  private getSuggestionDescription(category: string, currentScore: number): string {
    const descriptions: Record<string, string> = {
      quality: `Qualité insuffisante (${currentScore}/5) - améliorer la pertinence des réponses`,
      speed: `Temps de réponse trop lent (${currentScore}/5) - optimiser les prompts`,
      accuracy: `Précision insuffisante (${currentScore}/5) - renforcer la vérification des faits`,
      creativity: `Créativité limitée (${currentScore}/5) - diversifier les approches`,
      helpfulness: `Utilité perçue faible (${currentScore}/5) - mieux comprendre le contexte utilisateur`
    }
    return descriptions[category] || `Score faible en ${category}: ${currentScore}/5`
  }

  private getSuggestionImplementation(category: string): string {
    const implementations: Record<string, string> = {
      quality: 'Ajouter des exemples de haute qualité au prompt et valider la cohérence',
      speed: 'Simplifier le prompt et réduire les instructions non essentielles',
      accuracy: 'Ajouter des contraintes de vérification et des sources de référence',
      creativity: 'Inspirer de styles variés et encourager l\'originalité dans le prompt',
      helpfulness: 'Améliorer la compréhension du contexte et personnaliser les réponses'
    }
    return implementations[category] || 'Analyser les retours et adapter le comportement'
  }

  private emptyAnalysis(agentId: string): FeedbackAnalysis {
    return {
      agentId,
      totalFeedback: 0,
      averageRating: 0,
      ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      categoryAverages: {},
      sentimentScore: 0,
      improvementAreas: [],
      strengths: [],
      recentTrend: 'stable'
    }
  }
}

export const feedbackSystem = new FeedbackSystem()
