import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: '쿠키 정책 — NeuraAPI',
  description: 'NeuraAPI 쿠키 정책 — 사용되는 쿠키에 대한 정보 및 환경설정 관리.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ko/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">쿠키 정책</h1>
          <p className="mt-2 text-indigo-300">NeuraAPI에서 사용되는 쿠키에 대한 정보</p>
          <p className="mt-1 text-sm text-indigo-400">최종 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Info className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">쿠키란?</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>쿠키는 웹사이트를 방문할 때 사용자의 장치(컴퓨터, 태블릿, 스마트폰)에 저장되는 작은 텍스트 파일입니다. 웹사이트가 사용자의 장치를 인식하고 설정이나 과거 작업에 대한 정보를 저장할 수 있게 합니다.</p>
              <p>쿠키는 일반 개인정보 보호법(GDPR) 및 CNIL의 권고에 따라 규제됩니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Settings className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">사용되는 쿠키 유형</h2></div>
            <div className="space-y-8">
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50"><Eye className="h-4 w-4 text-green-400" /></div>
                  <h3 className="text-lg font-bold text-white">필수 쿠키</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">항상 활성</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">이러한 쿠키는 웹사이트의 운영에 필수적입니다. 웹사이트의 정상적인 작동에 필요하므로 비활성화할 수 없습니다.</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead><tr className="text-left text-indigo-300"><th className="pb-2 font-medium">쿠키</th><th className="pb-2 font-medium">목적</th><th className="pb-2 font-medium">기간</th></tr></thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">session_id</td><td className="py-2">사용자 세션</td><td className="py-2">세션</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">csrf_token</td><td className="py-2">CSRF 보호</td><td className="py-2">세션</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">cookie_consent</td><td className="py-2">쿠키 환경설정</td><td className="py-2">13개월</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">auth_token</td><td className="py-2">인증</td><td className="py-2">30일</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50"><BarChart3 className="h-4 w-4 text-blue-400" /></div>
                  <h3 className="text-lg font-bold text-white">분석 쿠키</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">동의 필요</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">이러한 쿠키는 웹사이트의 방문자를 측정하고, 방문자가 사이트를 어떻게 사용하는지 이해하며, 가장 많이 방문한 페이지를 식별하는 데 도움을 줍니다.</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead><tr className="text-left text-indigo-300"><th className="pb-2 font-medium">쿠키</th><th className="pb-2 font-medium">목적</th><th className="pb-2 font-medium">기간</th></tr></thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">_vercel_analytics</td><td className="py-2">방문자 통계</td><td className="py-2">세션</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">_vercel_insights</td><td className="py-2">성능 분석</td><td className="py-2">1년</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50"><Megaphone className="h-4 w-4 text-purple-400" /></div>
                  <h3 className="text-lg font-bold text-white">마케팅 쿠키</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">동의 필요</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">이러한 쿠키는 사용자의 관심사에 맞춰 맞춤형 광고와 콘텐츠를 제공하는 데 사용됩니다.</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">현재 NeuraAPI는 제3자 마케팅 쿠키를 사용하지 않습니다. 이 섹션은 필요 시 향후 사용을 위해 준비되어 있습니다.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Settings className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">쿠키 관리 방법</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">동의 배너를 통한</h3>
              <p>첫 방문 시 동의 배너가 표시되어 활성화 또는 비활성화할 쿠키를 선택할 수 있습니다. 페이지 하단의 "쿠키" 버튼을 클릭하여 언제든지 환경설정을 변경할 수 있습니다.</p>
              <h3 className="font-semibold text-white mt-4">브라우저 설정을 통한</h3>
              <p>브라우저 설정에서 직접 쿠키를 관리할 수도 있습니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/ko/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/ko-kr/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/ko-kr/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>
              <h3 className="font-semibold text-white mt-4">비활성화의 영향</h3>
              <p>필수 쿠키를 비활성화하면 웹사이트가 정상적으로 작동하지 않을 수 있습니다. 분석 및 마케팅 쿠키는 웹사이트 사용에 영향을 주지 않고 자유롭게 활성화 또는 비활성화할 수 있습니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Eye className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">제3자 쿠키</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>본 사이트에는 제3자 구성 요소가 포함될 수 있습니다. 이러한 제3자는 사용자가 본 사이트를 방문할 때 장치에 쿠키를 설정할 수 있습니다. 당사는 이러한 제3자 쿠키를 제어할 수 없습니다.</p>
              <h3 className="font-semibold text-white mt-4">Stripe (결제)</h3>
              <p>Stripe는 거래 보안 및 사기 방지를 위해 쿠키를 사용합니다. 자세한 내용: <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a></p>
              <h3 className="font-semibold text-white mt-4">Vercel (호스팅)</h3>
              <p>Vercel은 인프라의 정상적인 작동을 보장하고 익명화된 통계를 수집하기 위해 쿠키를 설정할 수 있습니다. 자세한 내용: <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Info className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">연락처</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>쿠키 정책에 대한 질문은 다음으로 연락하십시오:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>이메일: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">CNIL에 불만을 제기할 수도 있습니다: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
