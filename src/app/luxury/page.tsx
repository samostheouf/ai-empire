import Link from 'next/link'
export const dynamic='force-dynamic'
export default function LuxuryPage(){
  return (
    <main style={{maxWidth:860,margin:'0 auto',padding:'20px',fontFamily:'system-ui, sans-serif'}}>
      <h1 style={{fontSize:24,fontWeight:800,margin:'8px 0'}}>Louis Vuitton x NBA — Varsity M FW21 Virgil Abloh — 4500€</h1>
      <p style={{color:'#666',margin:'0 0 12px'}}>Porte 3x Parfait A+ — 14 photos HD + macros VCCM09/CA36929 — DHL Express assure + signature — Stock 1</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:12,margin:'16px 0'}}>
        {Array.from({length:12},(_,i)=>(
          <div key={i} style={{height:160,background:'#0a0a0a',border:'1px solid #222',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',color:'#888'}}>Photo {String(i+1).padStart(2,'0')} HD</div>
        ))}
      </div>
      <div style={{border:'1px solid #ddd',borderRadius:12,padding:16,background:'#fff'}}>
        <h3 style={{margin:'0 0 8px'}}>Acheter maintenant — 4500€ — Stripe securise</h3>
        <form id="luxForm">
          <input name="email" type="email" placeholder="votre@email.com" required style={{padding:'10px 12px',borderRadius:8,border:'1px solid #ccc',width:'100%',maxWidth:360}}/>
          <button type="submit" style={{marginTop:12,padding:'12px 20px',background:'#000',color:'#fff',borderRadius:10,fontWeight:700,cursor:'pointer'}}>Payer 4500€ — DHL assure</button>
        </form>
        <p style={{fontSize:12,color:'#888',marginTop:8}}>Vente directe autonome — eBay/Grailed/Vestiaire desactives auto apres paiement (webhook Stripe → LuxurySale sold)</p>
        <p id="luxMsg" style={{fontSize:13,marginTop:8}}></p>
      </div>
      <p style={{marginTop:16,fontSize:13}}><Link href="/api/ebay/auth?redirect=1" style={{color:'#0066ff'}}>Ou acheter via eBay (OAuth)</Link> — <Link href="/api/luxury/health" style={{color:'#888'}}>Health</Link> — <Link href="/api/luxury/checkout" style={{color:'#888'}}>Checkout API</Link></p>
      <script dangerouslySetInnerHTML={{__html:`document.getElementById('luxForm')?.addEventListener('submit',async(e)=>{e.preventDefault();const m=document.getElementById('luxMsg');const fd=new FormData(e.target);const email=fd.get('email');m.textContent='Creation session...';try{const r=await fetch('/api/luxury/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})});const j=await r.json();if(j.url) location.href=j.url; else m.textContent=j.error||'Erreur'}catch(err){m.textContent='Erreur reseau'}})`}}/>
    </main>
  )
}
