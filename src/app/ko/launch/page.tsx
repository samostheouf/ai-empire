'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Globe, Star, Code, ExternalLink, Download, Check, Trophy, Rocket, BarChart3 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Breadcrumb from '@/components/Breadcrumb'

export default function ProductHuntPage() {
  const [stats, setStats] = useState<{ userCount: number; templateCount: number; totalDownloads: number } | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.userCount === 'number') setStats(data)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="bg-indigo-950 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Breadcrumb items={[{ name: '런칭', href: '/ko/launch' }]} />
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm text-orange-300 border border-orange-500/30 mb-8">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
            Product Hunt 런칭
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            NeuraAPI가 <span className="text-orange-400">런칭</span>했습니다
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            개발자를 위한 AI API + 프리미엄 Next.js 템플릿. 인공지능, SEO, 코드 생성 — 10개 언어로 제공됩니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/ko/register"
              className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-400 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              무료로 시작하기
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/ko/pricing"
              className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              가격 보기
            </Link>
          </div>

          {stats && (
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.userCount.toLocaleString('ko-KR')}</div>
                <div className="text-xs text-indigo-400">사용자</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.templateCount}</div>
                <div className="text-xs text-indigo-400">템플릿</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.totalDownloads.toLocaleString('ko-KR')}</div>
                <div className="text-xs text-indigo-400">다운로드</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Hunt */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-8 text-center">
            <Trophy className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Product Hunt에서 투표해 주세요</h2>
            <p className="text-indigo-300 mb-6">오늘의 최고 프로duct가 되도록 도와주세요</p>
            <a
              href="https://www.producthunt.com/products/neuraapi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-400 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Product Hunt에서 보기
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white mb-16">NeuraAPI가 제공하는 것</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Zap className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI API</h3>
              <p className="text-indigo-300">텍스트 생성, 코드, SEO. Groq, Gemini, OpenAI 연결. 바로 사용 가능.</p>
              <code className="mt-4 block rounded-lg bg-indigo-950 p-3 text-xs text-indigo-400 font-mono">
                POST /api/ai/generate<br/>
                {'{ "prompt": "...", "maxTokens": 1000 }'}
              </code>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Code className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Next.js 템플릿</h3>
              <p className="text-indigo-300">SaaS, 전자상거래, 랜딩 페이지, 포트폴리오. Stripe 통합 프로덕션 준비 완료.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['SaaS', 'E-commerce', 'Blog', 'Dashboard'].map(tag => (
                  <span key={tag} className="rounded-full bg-indigo-800/50 px-3 py-1 text-xs text-indigo-300">{tag}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Globe className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">10개 언어</h3>
              <p className="text-indigo-300">사이트와 문서가 FR, EN, ES, DE, IT, PT, JA, ZH, KO, AR로 번역됨.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['🇫🇷', '🇬🇧', '🇪🇸', '🇩🇪', '🇮🇹', '🇵🇹', '🇯🇵', '🇨🇳', '🇰🇷', '🇸🇦'].map(flag => (
                  <span key={flag} className="text-xl">{flag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white mb-4">NeuraAPI를 선택하는 이유</h2>
          <p className="text-center text-indigo-300 mb-12">기존 대안과의 비교</p>
          <div className="border border-indigo-800/50 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-900/50">
                  <th className="text-left px-6 py-4 font-medium text-indigo-200">기능</th>
                  <th className="text-center px-6 py-4 font-medium text-orange-400">NeuraAPI</th>
                  <th className="text-center px-6 py-4 font-medium text-indigo-400">기타</th>
                </tr>
              </thead>
              <tbody className="text-indigo-200">
                {[
                  ['AI API + 템플릿', true, '분리됨'],
                  ['TypeScript SDK', true, '아니오'],
                  ['10개 언어', true, '1-2'],
                  ['무료 시작 가능', true, '아니오'],
                  ['Stripe 통합', true, '다름'],
                  ['무료 업데이트', true, '유료'],
                  ['전체 문서', true, '다름'],
                ].map(([feat, ours, other], i) => (
                  <tr key={i} className="border-t border-indigo-800/50">
                    <td className="px-6 py-3">{feat as string}</td>
                    <td className="px-6 py-3 text-center">{ours ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-red-400">✗</span>}</td>
                    <td className="px-6 py-3 text-center text-indigo-400">{other as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white mb-4">런칭 가격</h2>
          <p className="text-center text-indigo-300 mb-12">런칭 가격이 현재 이용 가능합니다.</p>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-xl font-semibold text-white">Starter</h3>
              <p className="mt-2 text-indigo-300 text-sm">테스트 및 실험용.</p>
              <div className="mt-6"><span className="text-4xl font-bold text-white">0€</span></div>
              <ul className="mt-6 space-y-3 text-sm text-indigo-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 월 100 크레딧</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 모든 AI 엔드포인트</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 문서</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 커뮤니티 지원</li>
              </ul>
              <Link href="/ko/register" className="mt-8 block w-full rounded-lg py-3 text-center border border-indigo-600 text-indigo-200 font-semibold hover:bg-indigo-900/50 transition-colors">
                시작하기
              </Link>
            </div>
            <div className="relative rounded-2xl border border-orange-500 bg-indigo-900/50 p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">
                🔥 런칭 오퍼 -30%
              </div>
              <h3 className="text-xl font-semibold text-white">Pro</h3>
              <p className="mt-2 text-indigo-300 text-sm">심각한 프로젝트용.</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-white">19€</span>
                <span className="text-sm text-indigo-300 ml-1">/월</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-indigo-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 월 10,000 크레딧</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 모든 AI 엔드포인트</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 프리미엄 템플릿</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 우선 지원</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 고급 분석</li>
              </ul>
              <Link href="/ko/register" className="mt-8 block w-full rounded-lg py-3 text-center bg-orange-500 text-white font-semibold hover:bg-orange-400 transition-colors">
                오퍼 받기
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-xl font-semibold text-white">Enterprise</h3>
              <p className="mt-2 text-indigo-300 text-sm">팀 및 중요한 요구사항용.</p>
              <div className="mt-6"><span className="text-4xl font-bold text-white">99€</span><span className="text-sm text-indigo-300 ml-1">/월</span></div>
              <ul className="mt-6 space-y-3 text-sm text-indigo-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 무제한 크레딧</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 보장된 SLA</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 전담 24/7 지원</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 맞춤형 템플릿</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 맞춤형 통합</li>
              </ul>
              <Link href="/ko/contact" className="mt-8 block w-full rounded-lg py-3 text-center border border-indigo-600 text-indigo-200 font-semibold hover:bg-indigo-900/50 transition-colors">
                팀에 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8">기술 스택</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Stripe', 'Groq AI', 'OpenAI', 'Resend', 'Vercel', 'PostgreSQL'].map(tech => (
              <span key={tech} className="rounded-full border border-indigo-800/50 bg-indigo-900/30 px-4 py-2 text-sm text-indigo-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">프레스 키트</h2>
          <p className="text-indigo-300 mb-8">언론인과 블로거를 위한 리소스</p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Download className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">로고 및 브랜딩</h3>
              <p className="text-sm text-indigo-300">SVG 로고, 컬러 가이드라인, 폰트</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <BarChart3 className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">핵심 지표</h3>
              <p className="text-sm text-indigo-300">사용자 통계, 템플릿, 수익 (출시 예정)</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Rocket className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">설명</h3>
              <p className="text-sm text-indigo-300">1줄 피치, 문단, 롱폼</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-orange-500/10 border border-orange-500/30 p-12 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-orange-400 mb-4" />
          <h2 className="text-3xl font-bold text-white">Pro 플랜 월 19€</h2>
          <p className="mt-4 text-indigo-200">약정 없음, 언제든 해지 가능.</p>
          <div className="mt-8">
            <Link
              href="/ko/register"
              className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-400 transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              지금 가입하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'NeuraAPI 런칭',
          description: '개발자를 위한 AI API 및 프리미엄 Next.js 템플릿. 런칭 오퍼: Pro 플랜 30% 할인.',
          url: 'https://ai-empire-steel.vercel.app/ko/launch',
          publisher: { '@type': 'Organization', name: 'NeuraAPI' },
          inLanguage: 'ko-KR',
        }) }}
      />
    </div>
  )
}
