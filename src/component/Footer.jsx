import './css/main.css'
import './css/Footer.css'
import LogoKampus from '../assets/icon/logo_StikesNani.webp'
import icon_IG from '../assets/img/icon_IG.png'
import icon_Fb from '../assets/img/icon_Fb.png'
import icon_Gmail from '../assets/img/icon_Gmail.png'
import icon_Tiktok from '../assets/img/icon_Tiktok.png'
function Footer() {
    const iconFooter = [
        {img : icon_Gmail, alt : 'Icon Gmail'},
        {img : icon_IG, alt : 'Icon Instagram'},
        {img : icon_Tiktok, alt : 'Icon Tiktok'},
        {img : icon_Fb, alt : 'Icon FB'},
    ]
    return (
        <>
            <footer>
                <div className="footer_ContainerImg">
                    <img src={LogoKampus} alt="Logo Stikes Nani Hasanuddin Makassar" className='logoKampus' />
                </div>
                <div className="footer_ContainerContent">
                    <p>@CopyRight Nurmalida - 2024 : Stikes Nani Hasanuddin Makassar</p>
                </div>
           
                    <div className="footer_ContainerIcon">
                    {iconFooter.map((item, index) => (
                        <img key={index} src={item.img} alt={item.alt} className='iconFooter' />
                    ))}
                    </div>
               
            </footer>
        </>
    )
}
export default Footer