export const dynamic='force-dynamic'
export default function SuccessPage({searchParams}:{searchParams:{session_id?:string, sku?:string}}){
  return (
    <main style={{maxWidth:600,margin:'40px auto',padding:20,fontFamily:'system-ui',textAlign:'center'}}>
      <h1 style={{color:'#00aa66'}}>Paiement reussi — Merci</h1>
      <p>Votre commande {searchParams.sku || 'HERMES-LV-NBA-M-1A8WU8'} est confirmee.</p>
      <p style={{color:'#666'}}>Session {searchParams.session_id?.slice(0,16)}... — DHL tracking envoye par email sous 24h.</p>
      <p style={{fontSize:12,color:'#888'}}>Webhook Stripe → LuxurySale sold → crosslist desactive auto.</p>
    </main>
  )
}
