import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Clausform() {
    const [input, setInput] = useState({
        Brand: "",
        Model: "",
        ManufacturingYear: "",
        vehicletype_id: ""
    });
    
    const hdlChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    

    const hdlSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("Brand", input.Brand);
            formData.append("Model", input.Model);
            formData.append("ManufacturingYear", input.ManufacturingYear);
            formData.append("vehicletype_id", input.vehicletype_id);
    
            const token = localStorage.getItem("token");
            const response = await axios.post(
                "http://localhost:8889/claus",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            hdlSuccess();
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

    const [showPopup, setShowPopup] = useState(false);

    const hdlSuccess = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    }

    return (

        <form
            className="flex flex-row rounded w-4/6 mx-auto p-4 gap-6 m-10 mt-1"
            onSubmit={hdlSubmit}
        >
            
            <div className="p-[10%] border w-6/6 min-w-[400px] max-w-[700px] max-h-[800px] mx-auto  mt-[5%] text-center" >
            <div className="label">
    <span className="label-text">กรุณาระบุรถยนต์ของท่าน
กรุณาระบุ แบรนด์ รุ่นและปีที่ผลิต ให้ครบถ้วน</span>
  </div>
  <label className="form-control w-full max-w-xs" style={{ marginTop: '20px' }}>
  <select className="select select-bordered">
  <option value="" selected="selected">-- กรุณาเลือกแบรนด์ --</option>
   <option value="Alfa Romeo">Alfa Romeo</option><option value="Aston Martin">Aston Martin</option><option value="Audi">Audi</option><option value="BMW">BMW</option><option value="BYD">BYD</option><option value="Bentley">Bentley</option><option value="Chery">Chery</option><option value="Chevrolet">Chevrolet</option><option value="Chrysler">Chrysler</option><option value="Citroen">Citroen</option><option value="DFM">DFM</option><option value="DFSK">DFSK</option><option value="Daewoo">Daewoo</option><option value="Daihatsu">Daihatsu</option><option value="FOMM">FOMM</option><option value="Ferrari">Ferrari</option><option value="Fiat">Fiat</option><option value="Ford">Ford</option><option value="Foton">Foton</option><option value="Haval">Haval</option><option value="Holden">Holden</option><option value="Honda">Honda</option><option value="Hummer">Hummer</option><option value="Hyundai">Hyundai</option><option value="Isuzu">Isuzu</option><option value="Jaguar">Jaguar</option><option value="Jeep">Jeep</option><option value="Kia">Kia</option><option value="Lamborghini">Lamborghini</option><option value="Land Rover">Land Rover</option><option value="Lexus">Lexus</option><option value="Lotus">Lotus</option><option value="MG">MG</option><option value="MINE">MINE</option><option value="Maserati">Maserati</option><option value="Maxus">Maxus</option><option value="Mazda">Mazda</option><option value="McLaren">McLaren</option><option value="Mercedes-Benz">Mercedes-Benz</option><option value="Mini">Mini</option><option value="Mitsubishi">Mitsubishi</option><option value="Mitsuoka">Mitsuoka</option><option value="Naza">Naza</option><option value="Neta">Neta</option><option value="Nissan">Nissan</option><option value="ORA">ORA</option><option value="Opel">Opel</option><option value="Peugeot">Peugeot</option><option value="Polarsun">Polarsun</option><option value="Porsche">Porsche</option><option value="Proton">Proton</option><option value="Renault">Renault</option><option value="Rolls-Royce">Rolls-Royce</option><option value="Rover">Rover</option><option value="Saab">Saab</option><option value="Seat">Seat</option><option value="Skoda">Skoda</option><option value="Smart">Smart</option><option value="Spyker">Spyker</option><option value="Ssangyong">Ssangyong</option><option value="Subaru">Subaru</option><option value="Suzuki">Suzuki</option><option value="TR">TR</option><option value="Tata">Tata</option><option value="Tesla">Tesla</option><option value="Toyota">Toyota</option><option value="Volkswagen">Volkswagen</option><option value="Volt">Volt</option><option value="Volvo">Volvo</option>
  </select>
</label>

                <label className="form-control w-full max-w-xs" style={{ marginTop: '20px' }}>
  <select className="select select-bordered">
    <option disabled selected>--กรุณาเลือกรุ่น--</option>
  </select>
</label>
<label className="form-control w-full max-w-xs" style={{ marginTop: '20px' }}>
  
  <select className="select select-bordered">
    <option disabled selected>--กรุณาเลือกปีที่ผลิต--</option>
    
  </select>
</label>

<label className="form-control w-full max-w-xs" style={{ marginTop: '20px' }}>
<option disabled selected style={{color:' blue'}}>ทะเบียนรถยนต์*</option>

<input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

</label>
                <label className="form-control w-[500px]" style={{ marginTop: '20px' }}>
                    <div className="label">
                        <span className="label-text text-white">ข้อมูลเพิ่มเติม (More Information)</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered h-[200px]"
                        name="detail"
                        value={input.detail}
                        onChange={hdlChange}
                    />
                </label>
                <button type="submit" className="btn btn-primary mt-5 ml-96 " onClick={hdlSuccess}>Add new</button>
            </div>
            


        </form>
    );
}