import './css/Navbar.css'
import './css/main.css'
import Logo from '../assets/icon/Logo.png'
function Navbar() {
    const Menu = [
        'Home',
        'About',
        'Project',
        'Cv',
        'Contact'
    ]
    return (
        <>
            <div className="mainContainer_Navbar">
                <div className="navbar">
                    <img src={Logo} alt="Logo Nurmalida" className='navbar_brand' />
                    <ul className='navbar_links'>
                        {Menu.map((items,index) => (
                            <li className='navbar_item' key={index}><a href="#">{items}</a></li>
                        ))}
                    </ul>
                    <button className='btn_Navbar'><a href="#">Sign Up</a></button>
                </div>
            </div>
        </>
    )
}
export default Navbar