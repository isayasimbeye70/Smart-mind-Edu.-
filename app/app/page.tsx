import Link from "next/link";

export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'white',padding:'30px',textAlign:'center'}}>
      <h1 style={{fontSize:'45px',fontWeight:'bold',marginTop:'60px'}}>🧠 SmartMind Edu</h1>
      <p style={{fontSize:'22px',marginTop:'20px',color:'#facc15'}}>School Management System - IKO LIVE!</p>
      <div style={{marginTop:'50px',background:'rgba(255,255,255,0.1)',padding:'30px',borderRadius:'20px',maxWidth:'600px',margin:'50px auto'}}>
        <h2>Karibu!</h2>
        <p style={{marginTop:'15px'}}>Mfumo wa kisasa wa shule umeanza kazi.</p>
        <Link href="/login" style={{display:'inline-block',marginTop:'25px',padding:'15px 40px',background:'white',color:'black',borderRadius:'30px',fontWeight:'bold',textDecoration:'none'}}>Ingia Sasa 🚀</Link>
      </div>
    </div>
  )
}
