import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Listpage() {
    return (
        <div>
<form className="mb-6" style={{ margin: 'top '}}>

<div className="flex-1">
    <a className="btn btn-ghost text-xl">เลือกรายการ</a>
  </div>
<div className="flex justify-center mt-8">
  <div className="flex-1 max-w-screen-lg">
    <div className="flex justify-center space-x-4">
    <Link to="/Bill"><button className="btn btn-outline btn-info btn-lg" style={{ width: '250px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
</svg>

บิลที่ต้องชำระ</button></Link>
      <button className="btn btn-outline btn-info btn-lg" style={{ width: '250px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
จ่ายเงิน</button>
      <button className="btn btn-outline btn-info btn-lg" style={{ width: '250px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10m16 0h2m-2 0v2m0-2h-2m0-14v2m0-2h2m0 10h-2m2 0v2m0-2h2m-2-14h-2m2 0v2m0-2h2" />
</svg>
ถอนเงิน</button>
      <button className="btn btn-outline btn-info btn-lg" style={{ width: '250px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h6l4 4-4 4H4V4zm7 0v7m-3-3h7m0 0v7m0-7l7 7m-7-7L4 16" />
</svg>
สแกน QR</button>
    </div>
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ border: '1px solid black', width: '40vw', height: '220px', borderRadius: '5px', marginTop: '70px', marginLeft: '10vw', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: '15px' }}>
    <div className="bold-text" style={{ marginRight: '70px', marginTop: '15px' }}>เช็คยอดเงิน</div>
    <p style={{ fontSize: '15px', marginTop: '30px' }}>เปิดใช้งานฟังก์ชันนี้เพื่อให้แสดงยอดเงินในหน้าหลัก</p>
    <button className="btn btn-outline btn-primary" style={{ marginLeft: '8rem', marginTop: '1rem' }}>เปิดใช้งาน</button>
  </div>
  <div style={{ marginLeft: '50px' }}> {/* เพิ่มระยะห่างระหว่างกรอบ */}
  <div style={{ border: '1px solid black', width: '40vw', height: '220px', borderRadius: '5px', marginTop: '70px', marginRight: '10vw', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: '15px', color: 'gray' }}>
  ปุ่มลัด
  <p style={{ fontSize: '15px', marginTop: '20px', color: 'gray' }}>สิทธิประโยชน์</p>
  <button className="btn btn-outline btn-error" style={{ marginLeft: '8rem', marginTop: '3rem' }}>เพิ่มเติม</button>
</div>
  </div>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between',marginBottom:'100px' }}>
  <div style={{ border: '1px solid black', width: '40vw', height: '220px', borderRadius: '5px', marginTop: '70px', marginLeft: '10vw', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', padding: '15px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
      <div className="bold-text">รายการโปรด</div>
      <div className="bold-text" style={{ marginLeft: 'auto' }}>ทั้งหมด</div>
    </div>
    <button className="btn btn-outline btn-primary" style={{ marginLeft: '8rem', marginTop: '5rem' }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" /></svg>
      เพิ่มรายการ
    </button>
  </div>
</div>
<div className="btm-nav" style={{ marginTop: '100px' }}>
  <button className="bg-pink-200 text-pink-600">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    <span className="btm-nav-label">Home</span>
  </button>
  <Link to="/new" className="bg-teal-200 text-teal-600"><button>
  
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    <span className="btm-nav-label">บริการ</span>
  
</button></Link>
  <button className="active bg-blue-200 text-blue-600 border-blue-600">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span className="btm-nav-label">อื่นๆ</span>
  </button>
  
</div>

                
            </form>
        </div>
    )
}

export default Listpage