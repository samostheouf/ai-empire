import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: '법적고지 — NeuraAPI',
  description: 'NeuraAPI 웹사이트의 법적 정보.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ko/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">법적고지</h1>
          <p className="mt-2 text-indigo-300">NeuraAPI 웹사이트 관련 법적 정보</p>
          <p className="mt-1 text-sm text-indigo-400">최종 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Building2 className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">사이트 운영자</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">회사명:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">법적 형태:</span> 간이 주식회사 (SAS)</p>
              <p><span className="font-semibold text-white">본사:</span> 12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET:</span> 미기재</p>
              <p><span className="font-semibold text-white">SIREN:</span> 미기재</p>
              <p><span className="font-semibold text-white">NAF/APE 코드:</span> 6201Z — 컴퓨터 프로그래밍</p>
              <p><span className="font-semibold text-white">EU 부가가치세 번호:</span> 미기재</p>
              <p><span className="font-semibold text-white">자본금:</span> 미기재</p>
              <p><span className="font-semibold text-white">출판 담당자:</span> 미기재</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Globe className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">호스팅 제공자</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">이름:</span> Vercel Inc.</p>
              <p><span className="font-semibold text-white">주소:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, United States</p>
              <p><span className="font-semibold text-white">웹사이트:</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">본 사이트는 Vercel의 클라우드 인프라에서 호스팅되며, GDPR 보안 및 가용성 기준을 준수합니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Mail className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">연락처</h2></div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-indigo-400" /><p><span className="font-semibold text-white">이메일:</span> <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-indigo-400" /><p><span className="font-semibold text-white">전화:</span> 미기재</p></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-indigo-400" /><p><span className="font-semibold text-white">주소:</span> 12 Rue de la Paix, 75002 Paris, France</p></div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Shield className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">전문 보험</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">보험사:</span> AXA France</p>
              <p><span className="font-semibold text-white">보험 증권 번호:</span> 미기재</p>
              <p><span className="font-semibold text-white">보장 범위:</span> 전문직 배상책임보험 및 사이버 리스크</p>
              <p className="text-sm text-indigo-300 mt-4">법적 규정에 따라 NeuraAPI SAS는 사업 활동으로 인해 제3자에게 발생한 손해를 보장하는 전문직 배상책임보험에 가입되어 있습니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><FileText className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">지적 재산권</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>본 웹사이트의 모든 콘텐츠(텍스트, 이미지, 그래픽, 로고, 아이콘, 사운드, 소프트웨어)는 NeuraAPI SAS 또는 그 파트너의 독점 자산이며, 프랑스 및 국제 지적 재산권 법에 의해 보호됩니다.</p>
              <p>NeuraAPI SAS의 사전 서면 동의 없이 사이트 또는 그 콘텐츠의 복제, 표시, 수정, 게시, 전송 또는 변형은 어떤 방법으로든 금지됩니다.</p>
              <p>본 사이트에 표시되는 상표 및 로고는 NeuraAPI SAS 또는 그 파트너의 등록 상표입니다. 사전 동의 없이 이러한 상표 또는 로고의 전체 또는 부분적 복제 또는 표시는 금지됩니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Shield className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">개인정보</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>개인정보 처리는 일반 개인정보 보호법(GDPR — EU 2016/679) 및 관련 데이터 보호 법률에 의해 규제됩니다.</p>
              <p>자세한 내용은 <a href="/ko/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">개인정보 처리방침</a>을 참조하십시오.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><FileText className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">쿠키</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>GDPR에 따라 본 사이트를 방문할 때 장치에 쿠키가 설정될 수 있습니다.</p>
              <p>사용되는 쿠키와 관리 방법에 대한 자세한 내용은 <a href="/ko/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">쿠키 정책</a>을 참조하십시오.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">분쟁 해결</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>비전문 고객에게 무료 분쟁 해결 메커니즘을 제공합니다.</p>
              <p>분쟁이 발생하면 소비자 중재자에게 문의할 수 있습니다:</p>
              <div className="ml-4 space-y-2">
                <p>• 웹사이트: <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• 주소: BP 84229, 69342 Lyon Cedex 07</p>
                <p>• 이메일: <a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">EU 온라인 분쟁 해결 플랫폼도 이용할 수 있습니다: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">준거법</h2></div>
            <div className="space-y-3 text-indigo-200">
              <p>본 법적 고지는 프랑스 법의 적용을 받습니다. 분쟁이 발생할 경우, 강제 규정에 의해 달리 정하지 않는 한 파리 사법 법원에 전속 관할권이 있습니다.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
