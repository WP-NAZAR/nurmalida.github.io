import './css/main.css'
import './css/About.css'
import ImageMalida from '../assets/images/ImageMalida.jpg'
function About() {
    return (
        <>
            <div className="mainContainer_About">
                <div className="about">
                    <div className="container_abtLeft">
                        <img src={ImageMalida} alt="ImageMalida" className='imageAbout' />
                    </div>
                    <div className="container_abtRight">
                        <h1 className='about_brand'>Nurmalida S.Kep Ners</h1>
                        <h4>- Perawat Profesional</h4>
                        <div className="containerDesc_About">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum possimus aliquid iure eaque suscipit odio corporis et nisi distinctio? Placeat repellat debitis labore culpa quisquam perferendis quaerat est ipsum?</p>
                        </div>
                        <div className="cotainer_btnAbout">
                            <button className='btnAbout'>SELENGKAPNYA</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About