import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: '이용약관 — NeuraAPI',
  description: 'NeuraAPI 이용약관 — 인공지능 서비스 및 디지털 템플릿.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ko/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">이용약관</h1>
          <p className="mt-2 text-indigo-300">최종 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">제1조 — 목적</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>본 이용약관(이하 "약관")은 NeuraAPI SAS(이하 "판매자")와 본 웹사이트 <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a>에서 제공되는 서비스 및 제품을 구매하고자 하는 자연인 또는 법인(이하 "고객") 간의 계약 관계를 규율합니다.</p>
              <p>웹사이트에서 서비스 또는 제품을 주문하면 본 약관을 무제한으로 수락하는 것을 의미합니다. 판매자는 본 약관을 언제든지 변경할 권리를 보유합니다. 적용되는 약관은 고객이 주문한 시점에 유효한 것입니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><ShoppingCart className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제2조 — 제품 및 서비스</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>판매자는 다음 제품 및 서비스를 판매합니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">인공지능 API 구독</span> — 개인 API 키를 통한 AI 엔드포인트(텍스트 생성, SEO, 코드) 접근.</li>
                <li><span className="font-semibold text-white">디지털 템플릿</span> — 구매한 라이선스에 따라 다운로드 및 사용할 수 있는 웹 템플릿(Next.js, Tailwind CSS).</li>
                <li><span className="font-semibold text-white">크레딧 팩</span> — API 호출용 소비 단위. 정해진 기간 동안 유효.</li>
              </ul>
              <p>제품 및 서비스의 기본 특징은 웹사이트에 표시됩니다. 이미지 및 설명은 참고용이며 판매자를 구속하지 않습니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><CreditCard className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제3조 — 가격 및 결제 조건</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 가격</h3>
              <p>제품 및 서비스의 가격은 모든 세금 포함(현행 부가가치세 포함) 유로(€)로 표시됩니다. 판매자는 가격을 언제든지 변경할 권리를 보유합니다. 적용되는 가격은 고객이 주문을 확인한 시점의 것입니다.</p>
              <h3 className="font-semibold text-white mt-4">3.2 결제 방법</h3>
              <p>결제는 다음 방법으로만 온라인으로 진행됩니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>신용카드 (Visa, Mastercard, American Express)</li>
                <li>송금 (Enterprise 구독의 경우)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">3.3 청구</h3>
              <p>각 결제 후 전자적으로 청구서가 발행되며 고객 영역에서 확인할 수 있습니다. 고객은 청구서를 보관하는 것에 동의합니다.</p>
              <h3 className="font-semibold text-white mt-4">3.4 미결제</h3>
              <p>미결제의 경우, 판매자는 15일간 효력이 없는 최고 후 서비스 접근을 중단할 권리를 보유합니다. 법정 이율의 3배에 해당하는 지연배상금이 적용될 수 있습니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><Truck className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제4조 — 제공 및 배송</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 구독 서비스</h3>
              <p>결제 확인 후 즉시 API 접근이 제공됩니다. API 키는 자동으로 생성되며 고객 영역에서 접근할 수 있습니다.</p>
              <h3 className="font-semibold text-white mt-4">4.2 디지털 템플릿</h3>
              <p>템플릿은 구매 후 즉시 다운로드할 수 있습니다. 다운로드 링크가 이메일로 전송되며 고객 영역에서도 접근할 수 있습니다.</p>
              <h3 className="font-semibold text-white mt-4">4.3 크레딧 팩</h3>
              <p>크레딧은 결제 후 즉시 고객 계정에 적립되며 구매일로부터 12개월간 유효합니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><RotateCcw className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제5조 — 청약철회권</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>법적 규정에 따라, 고객은 가입 또는 구매일로부터 <span className="font-semibold text-white">14일</span> 이내에 이유를 불문하고 청약철회권을 행사할 수 있습니다.</p>
              <h3 className="font-semibold text-white mt-4">5.1 청약철회 조건</h3>
              <p>청약철회를 행사하려면, 고객은 판매자에게 청약철회 의사를 명확히 표시하는 서면 통지(이메일 또는 서신)를 보내야 합니다.</p>
              <p>이메일: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              <h3 className="font-semibold text-white mt-4">5.2 청약철회권 예외</h3>
              <p>다음의 경우 청약철회권을 행사할 수 없습니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>고객의 명시적 동의로 14일 기간 만료 전에 서비스 이행이 시작된 경우</li>
                <li>디지털 콘텐츠(템플릿)가 고객에 의해 다운로드 또는 활성화된 경우</li>
                <li>청약철회 기간 만료 전에 서비스가 완전히 이행된 경우</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">5.3 환불</h3>
              <p>유효한 청약철회의 경우, 환불은 최대 14일 이내에 원래 거래에 사용된 것과 동일한 결제 방법으로 진행됩니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><Shield className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제6조 — 보증</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 적합성 보증</h3>
              <p>법적 규정에 따라, 판매자는 계약에 적합한 상품을 인도할 의무를 부담합니다. 고객은 납품 후 2년 이내에 적합성을 청구할 수 있습니다.</p>
              <h3 className="font-semibold text-white mt-4">6.2 하자 보증</h3>
              <p>법적 규정에 따라, 판매자는 숨겨진 하자에 대한 보증을 부담합니다. 고객은 하자를 발견한 날로부터 2년 이내에 조치를 취할 수 있습니다.</p>
              <h3 className="font-semibold text-white mt-4">6.3 서비스 가용성</h3>
              <p>판매자는 월간 가동률 99.9%(SLA)의 서비스 가용성을 보장할 것을 약속합니다. 예정된 유지보수는 48시간 전에 통지됩니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><AlertTriangle className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제7조 — 책임 제한</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>판매자는 다음으로 인한 손해에 대해 책임을 지지 않습니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>고객에 의한 서비스의 비적합 사용</li>
                <li>유지보수 또는 업데이트로 인한 일시적 서비스 중단</li>
                <li>기술 인프라 장애로 인한 데이터 손실</li>
                <li>간접적 손해, 매출 손실, 데이터 손실 또는 기타 모든 손해</li>
                <li>불법 목적 또는 공공 질서에 반하는 목적의 AI 생성 결과 사용</li>
              </ul>
              <p className="mt-4">판매자의 총 책임은 손해를 유발한 사건 이전 12개월 동안 고객이 지불한 금액으로 제한됩니다.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><FileText className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제8조 — 템플릿 사용 라이선스</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>템플릿 구매 시 고객에게 비독점적, 양도 불가능, 제한적인 사용 라이선스가 부여됩니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>개인 또는 상업 프로젝트에서 템플릿 사용</li>
                <li>필요에 따라 템플릿 수정</li>
                <li>무제한 프로젝트에서 템플릿 사용</li>
              </ul>
              <p className="mt-3">고객은 다음을 할 수 없습니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>템플릿 재판매 또는 재배포</li>
                <li>템플릿 서브라이선스</li>
                <li>저작권 표시 삭제 또는 수정</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><Scale className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제9조 — 개인정보</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>고객의 개인정보 처리는 <a href="/ko/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">개인정보 처리방침</a>에 따르며, GDPR을 준수합니다.</p>
              <p>고객은 개인정보에 대한 접근, 정정, 삭제, 이동성 및 반대 권리를拥有합니다. 연락처: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4"><Scale className="h-5 w-5 text-indigo-400" /><h2 className="text-xl font-bold text-white">제10조 — 준거법 및 분쟁</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>본 약관은 <span className="font-semibold text-white">프랑스 법</span>의 적용을 받습니다. 분쟁이 발생하면 당사자는 우호적 해결을 위해 노력합니다. 그렇지 않을 경우 분쟁은 파리 사법 법원에 제출됩니다.</p>
              <p>해결되지 않은 분쟁의 경우, 소비자 중재자에게 무료로 연락할 수 있습니다:</p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">소비자 중재 — mediation-conso.fr</a></p>
                <p>• EU 온라인 분쟁 해결 플랫폼: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">제11조 — 기타 조항</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 완전성</h3>
              <p>본 약관은 판매자와 고객 간의 전체 계약을 구성합니다. 어떤 조항이 무효로 선언되더라도 나머지 조항은 유효합니다.</p>
              <h3 className="font-semibold text-white mt-4">11.2 변경</h3>
              <p>판매자는 본 약관을 언제든지 변경할 권리를 보유합니다. 적용되는 약관은 주문 시점의 것입니다.</p>
              <h3 className="font-semibold text-white mt-4">11.3 불가항력</h3>
              <p>불가항력의 경우, 판매자는 의무 이행에 대해 책임을 지지 않습니다.</p>
              <h3 className="font-semibold text-white mt-4">11.4 연락처</h3>
              <p>본 약관에 대한 질문은 <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>으로 연락하십시오.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
