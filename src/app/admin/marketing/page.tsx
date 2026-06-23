'use client'

import { useState, useEffect } from 'react'
import {
  Calendar,
  Mail,
  Search,
  Users,
  BarChart3,
  Send,
  Plus,
  Trash2,
  Copy,
  RefreshCw,
  Target,
  Zap,
} from 'lucide-react'

interface Campaign {
  id: string
  name: string
  type: string
  status: string
  emailsSent: number
  openRate: number
  clickRate: number
  createdAt: string
}

interface ScheduledPost {
  id: string
  platform: string
  content: string
  hashtags: string[]
  scheduledAt: string
  status: string
}

interface CampaignStats {
  totalCampaigns: number
  activeCampaigns: number
  totalEmailsSent: number
  averageOpenRate: number
  averageClickRate: number
}

interface ScheduleStats {
  pending: ScheduledPost[]
  published: ScheduledPost[]
  failed: ScheduledPost[]
  totalEngagement: number
}

interface SEOOutlineSection {
  heading: string
  subheadings: string[]
}

interface SEOAnalysisKeyword {
  keyword: string
  density: number
  occurrences: number
}

interface SEOResult {
  title?: string
  metaDescription?: string
  slug?: string
  score?: number
  outline?: { sections?: SEOOutlineSection[] }
  analysis?: SEOAnalysisKeyword[]
}

interface ReferralReward {
  type: string
  description: string
  value: number
}

interface ReferralShareableContent {
  platform: string
  text: string
}

interface ReferralData {
  stats?: { totalReferrals: number; creditsEarned: number }
  badge?: string
  referralLink?: string
  rewards?: ReferralReward[]
  shareableContent?: ReferralShareableContent[]
}

export default function MarketingDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'scheduler' | 'campaigns' | 'seo' | 'referrals'>('overview')
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [campaignStats, setCampaignStats] = useState<CampaignStats | null>(null)
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>([])
  const [scheduleStats, setScheduleStats] = useState<ScheduleStats | null>(null)
  const [loading, setLoading] = useState(true)

  const [newPost, setNewPost] = useState({
    platform: 'twitter',
    content: '',
    hashtags: '',
  })

  const [newCampaign, setNewCampaign] = useState({
    type: 'newsletter',
    name: '',
    subject: '',
    body: '',
    ctaText: '',
    ctaUrl: '',
  })

  const [seoData, setSeoData] = useState({
    topic: '',
    keywords: '',
    type: 'meta',
  })

  const [seoResult, setSeoResult] = useState<SEOResult | null>(null)
  const [referralData, setReferralData] = useState<ReferralData | null>(null)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)
    try {
      const [campaignsRes, schedulerRes, referralRes] = await Promise.all([
        fetch('/api/marketing/campaigns'),
        fetch('/api/marketing/scheduler'),
        fetch('/api/marketing/referral?userId=admin'),
      ])

      if (campaignsRes.ok) {
        const data = await campaignsRes.json()
        setCampaigns(data.campaigns || [])
        setCampaignStats(data.stats || null)
      }

      if (schedulerRes.ok) {
        const data = await schedulerRes.json()
        setScheduledPosts(data.posts || [])
        setScheduleStats(data.stats || null)
      }

      if (referralRes.ok) {
        const data = await referralRes.json()
        setReferralData(data)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  async function schedulePost() {
    if (!newPost.content) return

    try {
      const response = await fetch('/api/marketing/scheduler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform: newPost.platform,
          content: newPost.content,
          hashtags: newPost.hashtags.split(',').map(h => h.trim()).filter(Boolean),
        }),
      })

      if (response.ok) {
        setNewPost({ platform: 'twitter', content: '', hashtags: '' })
        loadData()
      }
    } catch (error) {
    }
  }

  async function createCampaign() {
    if (!newCampaign.name || !newCampaign.subject || !newCampaign.body) return

    try {
      const response = await fetch('/api/marketing/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: newCampaign.type,
          data: {
            name: newCampaign.name,
            subject: newCampaign.subject,
            body: newCampaign.body,
            ctaText: newCampaign.ctaText || 'En savoir plus',
            ctaUrl: newCampaign.ctaUrl || '/',
          },
        }),
      })

      if (response.ok) {
        setNewCampaign({ type: 'newsletter', name: '', subject: '', body: '', ctaText: '', ctaUrl: '' })
        loadData()
      }
    } catch (error) {
    }
  }

  async function generateSEO() {
    if (!seoData.topic) return

    try {
      const response = await fetch('/api/marketing/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: seoData.type,
          topic: seoData.topic,
          keywords: seoData.keywords.split(',').map(k => k.trim()).filter(Boolean),
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setSeoResult(data)
      }
    } catch (error) {
    }
  }

  async function deletePost(id: string) {
    try {
      await fetch(`/api/marketing/scheduler?id=${id}`, { method: 'DELETE' })
      loadData()
    } catch (error) {
    }
  }

  async function deleteCampaign(id: string) {
    try {
      await fetch(`/api/marketing/campaigns?id=${id}`, { method: 'DELETE' })
      loadData()
    } catch (error) {
    }
  }

  const tabs: { id: 'overview' | 'scheduler' | 'campaigns' | 'seo' | 'referrals'; label: string; icon: typeof BarChart3 }[] = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'scheduler', label: 'Planificateur', icon: Calendar },
    { id: 'campaigns', label: 'Campagnes Email', icon: Mail },
    { id: 'seo', label: 'SEO', icon: Search },
    { id: 'referrals', label: 'Parrainage', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Marketing Automatisé</h1>
          <p className="text-gray-500 mt-1">Gérez vos campagnes, planificateur et SEO</p>
        </div>

        <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
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

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
          </div>
        ) : (
          <>
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Campagnes actives</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                          {campaignStats?.activeCampaigns || 0}
                        </p>
                      </div>
                      <Mail className="w-8 h-8 text-indigo-500" />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Emails envoyés</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                          {campaignStats?.totalEmailsSent || 0}
                        </p>
                      </div>
                      <Send className="w-8 h-8 text-emerald-500" />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Taux d'ouverture</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                          {campaignStats?.averageOpenRate || 0}%
                        </p>
                      </div>
                      <Target className="w-8 h-8 text-amber-500" />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Posts planifiés</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                          {scheduleStats?.pending.length || 0}
                        </p>
                      </div>
                      <Calendar className="w-8 h-8 text-violet-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Campagnes récentes</h3>
                    <div className="space-y-3">
                      {campaigns.slice(0, 5).map((campaign) => (
                        <div key={campaign.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              campaign.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                            }`} />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{campaign.name}</p>
                              <p className="text-xs text-gray-500">{campaign.type}</p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{campaign.openRate}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Derniers posts</h3>
                    <div className="space-y-3">
                      {scheduledPosts.slice(0, 5).map((post) => (
                        <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">
                              {post.platform === 'twitter' ? '🐦' : post.platform === 'linkedin' ? '💼' : '📘'}
                            </span>
                            <div>
                              <p className="text-sm font-medium text-gray-900 line-clamp-1">{post.content}</p>
                              <p className="text-xs text-gray-500">{post.platform}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            post.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {post.status === 'pending' ? 'En attente' : 'Publié'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'scheduler' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Planifier un post</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Plateforme</label>
                      <select
                        value={newPost.platform}
                        onChange={(e) => setNewPost({ ...newPost, platform: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="twitter">Twitter</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="facebook">Facebook</option>
                        <option value="all">Toutes les plateformes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hashtags (séparés par virgule)</label>
                      <input
                        type="text"
                        value={newPost.hashtags}
                        onChange={(e) => setNewPost({ ...newPost, hashtags: e.target.value })}
                        placeholder="NeuraAPI, NextJS, WebDev"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contenu</label>
                      <textarea
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        rows={4}
                        placeholder="Rédigez votre post ici..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        onClick={schedulePost}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Planifier le post
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Posts planifiés</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {scheduledPosts.length === 0 ? (
                      <div className="p-6 text-center text-gray-500">Aucun post planifié</div>
                    ) : (
                      scheduledPosts.map((post) => (
                        <div key={post.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                          <div className="flex items-center gap-4">
                            <span className="text-2xl">
                              {post.platform === 'twitter' ? '🐦' : post.platform === 'linkedin' ? '💼' : '📘'}
                            </span>
                            <div>
                              <p className="text-sm font-medium text-gray-900 line-clamp-1">{post.content}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {new Date(post.scheduledAt).toLocaleString('fr-FR')}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              post.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {post.status === 'pending' ? 'En attente' : 'Publié'}
                            </span>
                            <button
                              onClick={() => deletePost(post.id)}
                              className="p-1 text-gray-400 hover:text-red-500"
                              aria-label="Supprimer le post"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'campaigns' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Créer une campagne</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type de campagne</label>
                      <select
                        value={newCampaign.type}
                        onChange={(e) => setNewCampaign({ ...newCampaign, type: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="newsletter">Newsletter</option>
                        <option value="welcome">Bienvenue</option>
                        <option value="abandoned-cart">Panier abandonné</option>
                        <option value="reengagement">Réengagement</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom de la campagne</label>
                      <input
                        type="text"
                        value={newCampaign.name}
                        onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                        placeholder="Newsletter Juin 2025"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                      <input
                        type="text"
                        value={newCampaign.subject}
                        onChange={(e) => setNewCampaign({ ...newCampaign, subject: e.target.value })}
                        placeholder="Objet de l'email"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contenu</label>
                      <textarea
                        value={newCampaign.body}
                        onChange={(e) => setNewCampaign({ ...newCampaign, body: e.target.value })}
                        rows={4}
                        placeholder="Contenu de l'email..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Texte du bouton</label>
                      <input
                        type="text"
                        value={newCampaign.ctaText}
                        onChange={(e) => setNewCampaign({ ...newCampaign, ctaText: e.target.value })}
                        placeholder="Découvrir"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">URL du bouton</label>
                      <input
                        type="text"
                        value={newCampaign.ctaUrl}
                        onChange={(e) => setNewCampaign({ ...newCampaign, ctaUrl: e.target.value })}
                        placeholder="/templates"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        onClick={createCampaign}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Créer la campagne
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Campagnes existantes</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {campaigns.length === 0 ? (
                      <div className="p-6 text-center text-gray-500">Aucune campagne</div>
                    ) : (
                      campaigns.map((campaign) => (
                        <div key={campaign.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                          <div className="flex items-center gap-4">
                            <div className={`w-2 h-2 rounded-full ${
                              campaign.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                            }`} />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{campaign.name}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {campaign.type} • {campaign.emailsSent} emails • {campaign.openRate}% ouverture
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              campaign.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                            }`}>
                              {campaign.status === 'active' ? 'Active' : 'Pausée'}
                            </span>
                            <button
                              onClick={() => deleteCampaign(campaign.id)}
                              className="p-1 text-gray-400 hover:text-red-500"
                              aria-label="Supprimer la campagne"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Générateur SEO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type de contenu</label>
                      <select
                        value={seoData.type}
                        onChange={(e) => setSeoData({ ...seoData, type: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="meta">Meta descriptions</option>
                        <option value="outline">Plan d'article</option>
                        <option value="keywords">Analyse de mots-clés</option>
                        <option value="full">Contenu complet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                      <input
                        type="text"
                        value={seoData.topic}
                        onChange={(e) => setSeoData({ ...seoData, topic: e.target.value })}
                        placeholder="Guide Next.js 14"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mots-clés (séparés par virgule)</label>
                      <input
                        type="text"
                        value={seoData.keywords}
                        onChange={(e) => setSeoData({ ...seoData, keywords: e.target.value })}
                        placeholder="nextjs, react, framework, web"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        onClick={generateSEO}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                      >
                        <Search className="w-4 h-4" />
                        Générer
                      </button>
                    </div>
                  </div>
                </div>

                {seoResult && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Résultat</h3>
                    <div className="space-y-4">
                      {seoResult.title && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Titre</p>
                          <p className="text-gray-900">{seoResult.title}</p>
                        </div>
                      )}
                      {seoResult.metaDescription && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Meta Description</p>
                          <p className="text-gray-900">{seoResult.metaDescription}</p>
                        </div>
                      )}
                      {seoResult.slug && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Slug</p>
                          <p className="text-gray-900">{seoResult.slug}</p>
                        </div>
                      )}
                      {seoResult.score !== undefined && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Score SEO</p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${seoResult.score}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-900">{seoResult.score}/100</span>
                          </div>
                        </div>
                      )}
                      {seoResult.outline && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-2">Plan de l'article</p>
                          <div className="space-y-2">
                            {seoResult.outline.sections?.map((section, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-indigo-600 font-medium">{i + 1}.</span>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{section.heading}</p>
                                  {section.subheadings?.map((h: string, j: number) => (
                                    <p key={j} className="text-xs text-gray-500 ml-4">• {h}</p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {seoResult.analysis && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-2">Analyse des mots-clés</p>
                          <div className="space-y-2">
                            {seoResult.analysis.map((kw, i) => (
                              <div key={i} className="flex items-center justify-between p-2 bg-white rounded">
                                <span className="text-sm font-medium text-gray-900">{kw.keyword}</span>
                                <span className="text-sm text-gray-500">{kw.density}% ({kw.occurrences} fois)</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'referrals' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-gray-500">Total parrainages</p>
                      <Users className="w-5 h-5 text-indigo-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      {referralData?.stats?.totalReferrals || 0}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-gray-500">Crédits gagnés</p>
                      <Zap className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      {referralData?.stats?.creditsEarned || 0}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-gray-500">Badge actuel</p>
                      <Target className="w-5 h-5 text-violet-500" />
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                      {referralData?.badge || '🆕 Nouveau'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Votre lien de parrainage</h3>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={referralData?.referralLink || ''}
                      readOnly
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 bg-gray-50"
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(referralData?.referralLink || '')
                      }}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copier
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Récompenses</h3>
                  <div className="space-y-3">
                    {referralData?.rewards?.map((reward, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          reward.type === 'credits' ? 'bg-amber-100' : 'bg-green-100'
                        }`}>
                          {reward.type === 'credits' ? (
                            <Zap className="w-5 h-5 text-amber-600" />
                          ) : (
                            <Target className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{reward.description}</p>
                          <p className="text-xs text-gray-500">{reward.type === 'credits' ? `+${reward.value} crédits` : `${reward.value}% réduction`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Partager sur les réseaux</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {referralData?.shareableContent?.map((content, i) => (
                      <div key={i} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">
                            {content.platform === 'twitter' ? '🐦' : content.platform === 'linkedin' ? '💼' : '📧'}
                          </span>
                          <span className="text-sm font-medium text-gray-900 capitalize">{content.platform}</span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3">{content.text}</p>
                        <button
                          onClick={() => navigator.clipboard.writeText(content.text)}
                          className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                        >
                          <Copy className="w-3 h-3" />
                          Copier
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
