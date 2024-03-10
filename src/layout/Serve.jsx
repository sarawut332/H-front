import React from "react"
import {Link, useNavigate} from 'react-router-dom'

function Serve() {
    return (

        <>
<div>
<div className="button-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
<Link to='/Contact'><button className="btn btn-outline" style={{ marginRight: '10px', fontSize: '1.2rem', padding: '10px 20px' }}>ติดต่อ</button></Link>
  <Link to='/Statuspage'><button className="btn btn-outline btn-primary" style={{ marginRight: '10px', fontSize: '1.2rem', padding: '10px 20px' }}>ติดตามสถานะ</button></Link>
  <Link to='/Servepage'><button className="btn btn-outline btn-secondary" style={{ marginRight: '10px', fontSize: '1.2rem', padding: '10px 20px' }}>บริการอื่นๆ</button></Link>
  <Link to='/User'><button className="btn btn-outline btn-error" style={{ fontSize: '1.2rem', padding: '10px 20px' }}>ย้อนกลับ</button></Link>
</div>

<Link to="/Page"><div className="card card-side bg-base-100 shadow-xl card-sm" style={{ margin: '20px' }}>
  <figure style={{ maxWidth: '330px' }}><img src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie" style={{ height: '200px',width:'330px' }} /></figure>
  <div className="card-body">
    <h2 className="card-title">สินเชื่อทะเบียนรถยนต์</h2>
    <p> ให้คุณได้มากกว่า คล่องตัวทุกสถานการณ์ด้านการเงิน ไม่ต้องโอนกรรมสิทธิ์รถยนต์ในเล่มทะเบียน โดยผู้ขอสินเชื่อ ยังมีชื่อเป็นเจ้าของกรรมสิทธิ์ และสามารถใช้รถยนต์ได้ตามปกติ</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div></Link>


</div>

            

        </>


    )
}

export default Serve