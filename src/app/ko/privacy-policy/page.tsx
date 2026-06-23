import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '개인정보 처리방침 (GDPR) — NeuraAPI',
  description: 'NeuraAPI 개인정보 처리방침. 일반 개인정보 보호법(GDPR — EU 2016/679) 준수.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ko/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">개인정보 처리방침</h1>
          <p className="mt-2 text-indigo-300">일반 개인정보 보호법(GDPR — EU 2016/679) 준수</p>
          <p className="mt-1 text-sm text-indigo-400">최종 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Users className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">1. 개인정보 처리자</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">처리자:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">본사:</span> 12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET:</span> 미기재</p>
              <p><span className="font-semibold text-white">개인정보보호책임자(DPO):</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-400" /><a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></div>
                <div className="flex items-center gap-2 mt-1"><MapPin className="h-4 w-4 text-indigo-400" /><p>12 Rue de la Paix, 75002 Paris, France</p></div>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Database className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">2. 수집하는 데이터</h2></div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>서비스 제공 과정에서 다음 범주의 데이터를 수집합니다:</p>
              <h3 className="font-semibold text-white">신원확인 데이터</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>성명</li><li>이메일 주소</li><li>비밀번호(암호화)</li><li>사용자 이름</li></ul>
              <h3 className="font-semibold text-white mt-4">청구 데이터</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>청구 주소</li><li>결제 정보(Stripe 처리, 카드 번호 접근 불가)</li><li>거래 내역</li></ul>
              <h3 className="font-semibold text-white mt-4">사용 데이터</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>API 키(암호화)</li><li>API 호출 이력(프롬프트, 응답, 타임스탬프)</li><li>사용 통계(호출 수, 사용 크레딧)</li><li>성능 및 진단 데이터</li></ul>
              <h3 className="font-semibold text-white mt-4">연결 데이터</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>IP 주소</li><li>브라우저 유형 및 운영체제</li><li>로그인 날짜 및 시간</li><li>방문한 페이지 및 수행한 작업</li></ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Target className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">3. 처리 목적</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>데이터는 다음 목적으로 처리됩니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">계정 관리:</span> 사용자 계정 생성, 관리 및 인증</li>
                <li><span className="font-semibold text-white">서비스 제공:</span> API 접근, 템플릿 배송, 크레딧 관리</li>
                <li><span className="font-semibold text-white">청구:</span> 청구서 발행, 결제 추적, 독촉</li>
                <li><span className="font-semibold text-white">고객 지원:</span> 요청 응답 및 문제 해결</li>
                <li><span className="font-semibold text-white">서비스 개선:</span> 사용 통계, 성능 최적화</li>
                <li><span className="font-semibold text-white">보안:</span> 사기 방지, 남용 탐지, 공격 방어</li>
                <li><span className="font-semibold text-white">통신:</span> 서비스 관련 중요 알림 발송</li>
                <li><span className="font-semibold text-white">법적 의무:</span> 회계 및 세무 데이터 보관</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">4. 처리의 법적 근거</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>각 데이터 처리는 다음 법적 근거에 기반합니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">계약 이행(GDPR 제6.1.b조):</span> 서비스 제공, 계정 관리, 청구</li>
                <li><span className="font-semibold text-white">정당한 이익(GDPR 제6.1.f조):</span> 서비스 보안, 개선, 사기 방지</li>
                <li><span className="font-semibold text-white">법적 의무(GDPR 제6.1.c조):</span> 회계 및 세무 데이터 보관</li>
                <li><span className="font-semibold text-white">동의(GDPR 제6.1.a조):</span> 비필수 쿠키, 마케팅 통신</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Clock className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">5. 보관 기간</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>데이터는 다음 기간 동안 보관됩니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">계정 데이터:</span> 계약 관계 전체 기간, 마지막 로그인 후 3년</li>
                <li><span className="font-semibold text-white">청구 데이터:</span> 10년(법적 회계 의무)</li>
                <li><span className="font-semibold text-white">API 호출 이력:</span> 마지막 호출 후 12개월</li>
                <li><span className="font-semibold text-white">연결 데이터:</span> 12개월</li>
                <li><span className="font-semibold text-white">쿠키:</span> 최대 13개월</li>
                <li><span className="font-semibold text-white">영업 데이터:</span> 마지막 연락 후 3년</li>
              </ul>
              <p className="mt-4">기간 만료 시 데이터는 비가역적으로 삭제되거나 익명화됩니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Users className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">6. 데이터 수신자</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>데이터는 다음과 같은 범주의 수신자와 공유될 수 있습니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">기술 제공자:</span> Vercel(호스팅), Stripe(결제), Vercel Analytics(통계)</li>
                <li><span className="font-semibold text-white">결제 제공자:</span> Stripe Inc. — 안전한 결제 처리</li>
                <li><span className="font-semibold text-white">관할 당국:</span> 법적 의무 또는 사법 요구 시</li>
              </ul>
              <p className="mt-4">이러한 제공자는 GDPR에 따른 데이터 보호를 보장하는 계약 의무를 따릅니다. 데이터를 제3자에게 판매하지 않습니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Eye className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">7. EU 외부 전송</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>일부 제공자는 EU 외부(특히 미국)에 위치하고 있습니다. 이러한 전송은 다음에 의해 규제됩니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>유럽위원회의 실행 결정에 따른 표준계약조항(SCC)</li>
                <li>프라이버시 실드(인증된 제공자)</li>
                <li>GDPR 제46조 이하에 따른 적절한 추가 보장</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">8. 귀하의 권리</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>GDPR에 따라 귀하는 개인정보에 대해 다음과 같은 권리를拥有합니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">접근권(제15조):</span> 데이터 사본 취득</li>
                <li><span className="font-semibold text-white">정정권(제16조):</span> 부정확한 데이터 정정</li>
                <li><span className="font-semibold text-white">삭제권(제17조):</span> 데이터 삭제 요청</li>
                <li><span className="font-semibold text-white">처리 제한권(제18조):</span> 데이터 처리 제한</li>
                <li><span className="font-semibold text-white">데이터 이동권(제20조):</span> 구조화된 형식으로 데이터 수신</li>
                <li><span className="font-semibold text-white">반대권(제21조):</span> 데이터 처리에 반대</li>
                <li><span className="font-semibold text-white">동의 철회:</span> 언제든지 가능. 이전 처리의 적법성에 영향 없음</li>
              </ul>
              <p className="mt-4">권리를 행사하려면 <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>으로 연락하십시오.</p>
              <p>CNIL에 불만을 제기할 권리도 있습니다: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Cookie className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">9. 쿠키</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>본 사이트는 현행 규정에 따라 쿠키를 사용합니다. 자세한 내용은 <a href="/ko/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">쿠키 정책</a>을 참조하십시오.</p>
              <p>첫 방문 시 표시되는 동의 배너를 통해 쿠키 환경설정을 관리할 수 있습니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Shield className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">10. 데이터 보안</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>데이터를 보호하기 위해 다음과 같은 기술적 및 조직적 조치를 시행합니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>모든 통신에 TLS/SSL 암호화</li>
                <li>저장 시 민감 데이터 암호화</li>
                <li>다중 인증(MFA) 지원</li>
                <li>암호화되어 안전하게 관리되는 API 키</li>
                <li>최소 권한 원칙에 따른 데이터 접근 제한</li>
                <li>접근 로깅 및 모니터링</li>
                <li>정기적인 보안 감사</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Mail className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">11. 연락처</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>개인정보 보호에 대한 질문:</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-400" /><span>이메일: </span><a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-indigo-400" /><span>주소: NeuraAPI SAS — DPO, 12 Rue de la Paix, 75002 Paris, France</span></div>
              </div>
              <p className="mt-4">1개월 이내에 요청에 답변할 것을 약속합니다.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
