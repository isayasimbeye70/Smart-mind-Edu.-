"use client";
import Link from "next/link";
export default function Login(){ return (<div style={{minHeight:'100vh',background:'#0f172a',display:'flex',justifyContent:'center',alignItems:'center'}}><div style={{background:'white',padding:'30px',borderRadius:'20px'}}><Link href="/app">← Rudi</Link><h2>Login Inafanya Kazi!</h2><button onClick={()=>location.href='/app/dashboard'} style={{marginTop:'15px',padding:'12px',background:'black',color:'white',borderRadius:'10px',width:'100%'}}>Ingia Dashboard</button></div></div>) }
