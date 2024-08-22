import './css/main.css'
import './css/Services.css'

// Import Icon Services
import icon_CTD from '../assets/img/Logo_CTD.png'
import icon_Infus from '../assets/img/icon_Infus.png'
import icon_CekSuhu from '../assets/img/icon_CekSuhu.png'
import icon_Suntik from '../assets/img/icon_Suntik.png'

function Services() {

    const itemServices = [
        {img : icon_CTD, name : 'LAYANAN CEK TD', desc : 'Ayo Cek Tekanan Darah'},
        {img : icon_Infus, name : 'LAYANAN INFUS', desc : 'Siap Melakukan Infus'},
        {img : icon_CekSuhu, name : 'LAYANAN CEK ST', desc : 'Ayo Cek Suhu Tubuh Anda'},
        {img : icon_Suntik, name : 'LAYANAN TD ', desc : 'Ayo Transfusi Darah'}
    ]
    return (
        <>
            <div className="mainContainer_Services">
                <div className="services">
                    <div className="container_titleServ">
                        <h1 className='services_brand'>Special Services For <br /> My Patients</h1>
                        
                    </div>
                    <div className='content_Services'>
                        {itemServices.map((item, index) => (    
                            <div className="container_ContentServ">
                                <div className='containerCon'>
                                    <img src={item.img} alt="icon Servis" className='iconServis' />
                                    <h3>{item.name}</h3>
                                    <h5>{item.desc}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services