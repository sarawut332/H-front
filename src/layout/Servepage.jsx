export default function Servepage() {
    return (
        <div className="serve-page">
            <div className="card card-side bg-base-100 shadow-xl card-sm" style={{ margin: '20px' }}>
                <figure style={{ maxWidth: '330px' }}><img src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie" style={{ height: '200px', maxWidth: '100%', width: '330px' }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">สินเชื่อบ้าน</h2>
                    <p>เงินกู้ระยะยาวที่ทางสถาบันการเงิน เพื่อซื้อบ้านหรือที่อยู่อาศัย ไม่ว่าจะเป็น บ้านเดี่ยว, ทาวน์โฮม, อาคารพาณิชย์ หรือ คอนโด โดยผู้ขอสินเชื่อสามารถผ่อนชำระได้ยาวนานสูงสุด 40 ปี</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl card-sm" style={{ margin: '20px' }}>
                <figure><img src="https://images.pexels.com/photos/236164/pexels-photo-236164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie" style={{ height: '200px', maxWidth: '100%' }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">สินเชื่อส่วนบุคคล</h2>
                    <p>สินเชื่อที่ไม่ต้องหลักประกัน เพื่อนำไปใช้ในวัตถุประสงค์ต่าง ๆ ได้วงเงินสูงสุด 5 เท่าของรายได้</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl card-sm" style={{ margin: '20px' }}>
                <figure><img src="https://images.pexels.com/photos/1261909/pexels-photo-1261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie" style={{ height: '200px', maxWidth: '100%' }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">ประกันสุขภาพ</h2>
                    <p>ประกันสุขภาพที่ยิ่งออกกำลังกายเบี้ยยิ่งลด ให้คุณได้สนุกกับการออกกำลังกาย เพียงสมัครประกันสุขภาพ</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
}