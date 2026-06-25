'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/i18n'
import {
  Bot,
  TrendingUp,
  TrendingDown,
  Minus,
  Star,
  Zap,
  Clock,
  CheckCircle,
  RefreshCw,
  Settings,
  BarChart3,
  MessageSquare,
  Target,
  Activity,
  ArrowUpRight,
  Shield,
  FileCheck,
  Users
} from 'lucide-react'

interface AgentScore {
  id: string
  name: string
  role: string
  description: string
  version: number
  score: number
  criteria: Record<string, number>
  stats: {
    totalRequests: number
    successRate: number
    averageResponseTime: number
    errorRate: number
    uptime: number
  }
  feedback: {
    averageRating: number
    totalFeedback: number
    trend: string
  }
  realTime: {
    activeRequests: number
    requestsPerMinute: number
    averageLatency: number
    errorPercentage: number
  }
  capabilities: string[]
  tags: string[]
  updatedAt: string
}

interface ScoreCriteria {
  name: string
  label: string
  weight: number
  description: string
}

interface Summary {
  totalAgents: number
  averageScore: number
  topPerformer: string
  totalRequests: number
}

export default function AgentsDashboard() {
  const { t } = useI18n()
  const [agents, setAgents] = useState<AgentScore[]>([])
  const [criteria, setCriteria] = useState<ScoreCriteria[]>([])
  const [summary, setSummary] = useState<Summary | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedAgent, setSelectedAgent] = useState<AgentScore | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'improvement' | 'architects'>('overview')
  const [architectAgents] = useState([
    { id: 'architect-security', name: t('adminAgentsAgentArchitectSecurite'), description: t('adminAgentsAgentArchitectSecuriteDesc'), score: 8.5, auditsCompleted: 12, lastAudit: '2024-03-15', status: t('adminDashboardFilterActive') },
    { id: 'architect-quality', name: t('adminAgentsAgentArchitectQualite'), description: t('adminAgentsAgentArchitectQualiteDesc'), score: 7.8, auditsCompleted: 8, lastAudit: '2024-03-14', status: t('adminDashboardFilterActive') }
  ])
  const [auditHistory] = useState([
    { id: 'audit-1', agentName: t('adminAgentsAgentArchitectSecurite'), type: t('adminAgentsSecurite'), score: 8.5, route: '/api/orders', date: '2024-03-15', vulnerabilities: 2 },
    { id: 'audit-2', agentName: t('adminAgentsAgentArchitectQualite'), type: t('adminAgentsQualite'), score: 7.8, route: 'src/app/admin/agents/page.tsx', date: '2024-03-14', issues: 5 },
    { id: 'audit-3', agentName: t('adminAgentsAgentArchitectSecurite'), type: t('adminAgentsSecurite'), score: 9.0, route: '/api/users', date: '2024-03-13', vulnerabilities: 0 },
    { id: 'audit-4', agentName: t('adminAgentsAgentArchitectQualite'), type: t('adminAgentsQualite'), score: 8.2, route: 'src/lib/db.ts', date: '2024-03-12', issues: 3 }
  ])
  const [teamStatus] = useState({
    name: t('adminAgentsTeamSecuriteQualite'),
    members: [t('adminAgentsAgentArchitectSecurite'), t('adminAgentsAgentArchitectQualite')],
    progress: 60,
    version: 2,
    lastEvolution: '2024-03-15'
  })

  useEffect(() => {
    loadAgents()
    const interval = setInterval(loadAgents, 30000)
    return () => clearInterval(interval)
  }, [])

  async function loadAgents() {
    try {
      const response = await fetch('/api/agents')
      if (response.ok) {
        const data = await response.json()
        setAgents(data.agents || [])
        setCriteria(data.criteria || [])
        setSummary(data.summary || null)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  async function triggerImprovement(agentId: string) {
    try {
      const response = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'improve', agentId })
      })

      if (response.ok) {
        loadAgents()
      }
    } catch (error) {
    }
  }

  async function createImprovementPlan(agentId: string) {
    try {
      const response = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'plan', agentId })
      })

      if (response.ok) {
        const data = await response.json()
      }
    } catch (error) {
    }
  }

  function getScoreColor(score: number): string {
    if (score >= 9.5) return 'text-emerald-600'
    if (score >= 8.0) return 'text-indigo-600'
    if (score >= 6.0) return 'text-amber-600'
    return 'text-red-600'
  }

  function getScoreBg(score: number): string {
    if (score >= 9.5) return 'bg-emerald-100'
    if (score >= 8.0) return 'bg-indigo-100'
    if (score >= 6.0) return 'bg-amber-100'
    return 'bg-red-100'
  }

  function getTrendIcon(trend: string) {
    if (trend === 'improving') return <TrendingUp className="w-4 h-4 text-emerald-500" />
    if (trend === 'declining') return <TrendingDown className="w-4 h-4 text-red-500" />
    return <Minus className="w-4 h-4 text-gray-400" />
  }

  function getCriteriaLabel(name: string): string {
    const labels: Record<string, string> = {
      accuracy: t('adminAgentsCriteriaAccuracy'),
      speed: t('adminAgentsCriteriaSpeed'),
      creativity: t('adminAgentsCriteriaCreativity'),
      reliability: t('adminAgentsCriteriaReliability'),
      efficiency: t('adminAgentsCriteriaEfficiency'),
      innovation: t('adminAgentsCriteriaInnovation')
    }
    return labels[name] || name
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Bot className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">{t('adminAgentsTitle')}</h1>
          </div>
          <p className="text-gray-500">{t('adminAgentsSubtitle')}</p>
        </div>

        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{t('adminAgentsTotal')}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{summary.totalAgents}</p>
                </div>
                <Bot className="w-8 h-8 text-indigo-500" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{t('adminAgentsAverageScore')}</p>
                  <p className={`text-2xl font-bold mt-1 ${getScoreColor(summary.averageScore)}`}>
                    {summary.averageScore}/10
                  </p>
                </div>
                <Star className="w-8 h-8 text-amber-500" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{t('adminAgentsTopPerformer')}</p>
                  <p className="text-lg font-bold text-gray-900 mt-1 truncate">
                    {summary.topPerformer}
                  </p>
                </div>
                <Zap className="w-8 h-8 text-emerald-500" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{t('adminAgentsTotalRequests')}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {summary.totalRequests.toLocaleString()}
                  </p>
                </div>
                <Activity className="w-8 h-8 text-violet-500" />
              </div>
            </div>
          </div>
        )}

        <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          {[
            { id: 'overview', label: t('adminAgentsOverview'), icon: BarChart3 },
            { id: 'details', label: t('adminAgentsDetails'), icon: Settings },
            { id: 'improvement', label: t('adminAgentsImprovement'), icon: Target },
            { id: 'architects', label: t('adminAgentsArchitects'), icon: Shield }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as 'overview' | 'details' | 'improvement' | 'architects')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {agents.map(agent => (
              <div
                key={agent.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedAgent(agent)
                  setActiveTab('details')
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getScoreBg(agent.score)}`}>
                      <Bot className={`w-6 h-6 ${getScoreColor(agent.score)}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                      <p className="text-sm text-gray-500">v{agent.version}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(agent.feedback.trend)}
                    <span className={`text-2xl font-bold ${getScoreColor(agent.score)}`}>
                      {agent.score.toFixed(2)}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{agent.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-600">{agent.stats.successRate}% {t('adminAgentsSuccessRate')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span className="text-gray-600">{agent.stats.averageResponseTime}ms</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-amber-500" />
                    <span className="text-gray-600">{agent.feedback.averageRating}/5</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Activity className="w-4 h-4 text-violet-500" />
                    <span className="text-gray-600">{agent.stats.totalRequests} {t('adminAgentsRequests')}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {agent.capabilities.slice(0, 3).map(cap => (
                    <span
                      key={cap}
                      className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'details' && selectedAgent && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getScoreBg(selectedAgent.score)}`}>
                    <Bot className={`w-8 h-8 ${getScoreColor(selectedAgent.score)}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedAgent.name}</h2>
                    <p className="text-gray-500">{selectedAgent.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${getScoreColor(selectedAgent.score)}`}>
                    {selectedAgent.score.toFixed(2)}
                  </div>
                  <p className="text-sm text-gray-500">{t('adminAgentsCompositeScore')}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(selectedAgent.criteria).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">{getCriteriaLabel(key)}</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${(value / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-900">{value.toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{t('adminAgentsPerformance')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsSuccessRateLabel')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.stats.successRate}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsAverageTime')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.stats.averageResponseTime}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsErrorRate')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.stats.errorRate}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsUptime')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.stats.uptime}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{t('adminAgentsFeedback')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsAverageRating')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.feedback.averageRating}/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsTotalFeedback')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.feedback.totalFeedback}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsTrend')}</span>
                    <span className="font-medium text-gray-900 capitalize">
                      {selectedAgent.feedback.trend === 'improving' ? t('adminAgentsTrendUp') :
                       selectedAgent.feedback.trend === 'declining' ? t('adminAgentsTrendDown') : t('adminAgentsTrendStable')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{t('adminAgentsRealTime')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsActiveRequests')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.realTime.activeRequests}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsRequestsPerMinute')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.realTime.requestsPerMinute}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsAverageLatency')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.realTime.averageLatency}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{t('adminAgentsErrors')}</span>
                    <span className="font-medium text-gray-900">{selectedAgent.realTime.errorPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => triggerImprovement(selectedAgent.role)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                {t('adminAgentsTriggerImprovement')}
              </button>
              <button
                onClick={() => createImprovementPlan(selectedAgent.role)}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Target className="w-4 h-4" />
                {t('adminAgentsCreatePlan')}
              </button>
              <button
                onClick={async () => {
                  if (selectedAgent.version > 1) {
                    const response = await fetch('/api/agents', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        action: 'rollback',
                        agentId: selectedAgent.role,
                        data: { targetVersion: selectedAgent.version - 1 }
                      })
                    })
                    if (response.ok) loadAgents()
                  }
                }}
                className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg hover:bg-amber-200 transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                {t('adminAgentsRollback')}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'improvement' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('adminAgentsGoal')}</h3>
              <p className="text-gray-600 mb-6">
                {t('adminAgentsGoalDescription')}
              </p>

              <div className="space-y-4">
                {agents.map(agent => {
                  const progress = (agent.score / 9.99) * 100
                  return (
                    <div key={agent.id} className="flex items-center gap-4">
                      <div className="w-32 truncate text-sm font-medium text-gray-900">
                        {agent.name}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            agent.score >= 9.5 ? 'bg-emerald-500' :
                            agent.score >= 8.0 ? 'bg-indigo-500' :
                            agent.score >= 6.0 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="w-20 text-right">
                        <span className={`font-bold ${getScoreColor(agent.score)}`}>
                          {agent.score.toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => triggerImprovement(agent.role)}
                        className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"
                        title={t('adminAgentsImprove')}
                        aria-label={t('adminAgentsImproveLabel')}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{t('adminAgentsImprovementProcess')}</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: t('adminAgentsStep1Title'), desc: t('adminAgentsStep1Desc') },
                    { step: '2', title: t('adminAgentsStep2Title'), desc: t('adminAgentsStep2Desc') },
                    { step: '3', title: t('adminAgentsStep3Title'), desc: t('adminAgentsStep3Desc') },
                    { step: '4', title: t('adminAgentsStep4Title'), desc: t('adminAgentsStep4Desc') },
                    { step: '5', title: t('adminAgentsStep5Title'), desc: t('adminAgentsStep5Desc') }
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
                        {step}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{t('adminAgentsGlobalStats')}</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-indigo-700">{t('adminAgentsCurrentAverage')}</span>
                      <span className="text-lg font-bold text-indigo-900">
                        {summary?.averageScore || 0}/10
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-700">{t('adminAgentsTargetGoal')}</span>
                      <span className="text-lg font-bold text-emerald-900">9.99/10</span>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-amber-700">{t('adminAgentsGapToClose')}</span>
                      <span className="text-lg font-bold text-amber-900">
                        {((9.99 - (summary?.averageScore || 0)).toFixed(2))} {t('adminAgentsPts')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architects' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">{t('adminAgentsArchitectAgents')}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectAgents.map(agent => (
                  <div key={agent.id} className="border border-indigo-100 rounded-lg p-5 bg-indigo-50/30">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                          {agent.id === 'architect-security' ? (
                            <Shield className="w-5 h-5 text-indigo-600" />
                          ) : (
                            <FileCheck className="w-5 h-5 text-indigo-600" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{agent.name}</h4>
                          <p className="text-sm text-gray-500">{agent.status}</p>
                        </div>
                      </div>
                      <span className={`text-lg font-bold ${getScoreColor(agent.score)}`}>
                        {agent.score.toFixed(1)}/10
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{agent.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-500">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {agent.auditsCompleted} {t('adminAgentsAudit')}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock className="w-4 h-4 text-indigo-500" />
                        {agent.lastAudit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">{t('adminAgentsAuditHistory')}</h3>
                </div>
                <div className="space-y-3">
                  {auditHistory.map(audit => (
                    <div key={audit.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${audit.type === t('adminAgentsSecurite') ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{audit.agentName}</p>
                          <p className="text-xs text-gray-500">{audit.route} • {audit.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`font-bold ${getScoreColor(audit.score)}`}>{audit.score.toFixed(1)}</span>
                        <p className="text-xs text-gray-500">
                          {audit.type === t('adminAgentsSecurite') ? `${audit.vulnerabilities} ${t('adminAgentsVuln')}` : `${audit.issues} issues`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">{t('adminAgentsTeamStatus')}</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-indigo-700">{teamStatus.name}</span>
                      <span className="text-sm text-indigo-600">v{teamStatus.version}</span>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${teamStatus.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-indigo-600 mt-1">{teamStatus.progress}% {t('adminAgentsProgression')}</p>
                  </div>

                  <div className="space-y-2">
                    {teamStatus.members.map((member, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-gray-700">{member}</span>
                        <span className="text-xs text-gray-400 ml-auto">{t('adminAgentsActive')}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{t('adminAgentsLastEvolution')}</span>
                      <span className="text-gray-900">{teamStatus.lastEvolution}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
