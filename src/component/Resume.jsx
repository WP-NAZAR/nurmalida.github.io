import './css/main.css'
import './css/Resume.css'
function Resume() {

    const myResume = [
        {title : '- SDN KADATUA', date : '2 Agustus 2007 - 10 Desember 2012', desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem officia assumenda veniam ipsum dignissimos consectetur quia reiciendis? Molestiae nostrum soluta fugiat explicabo ab ut perferendis corrupti, dolore tempore veniam dicta'},
        {title : '- SMP KADATUA', date : '26 Desember 2012 - 20 Oktober 2017', desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem officia assumenda veniam ipsum dignissimos consectetur quia reiciendis? Molestiae nostrum soluta fugiat explicabo ab ut perferendis corrupti, dolore tempore veniam dicta'},
        {title : '- SMA KADATUA', date : '12 Desember 2017 - 20 September 2019', desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem officia assumenda veniam ipsum dignissimos consectetur quia reiciendis? Molestiae nostrum soluta fugiat explicabo ab ut perferendis corrupti, dolore tempore veniam dicta'},
        {title : '- STIKES NANI HASANUDDIN MAKASSAR', date : '2 Januari 2019 - 20 Desember 2022', desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem officia assumenda veniam ipsum dignissimos consectetur quia reiciendis? Molestiae nostrum soluta fugiat explicabo ab ut perferendis corrupti, dolore tempore veniam dicta'}
    ]

    return (
        <>
            <div className="mainContainer_Resume">
            <h1 className='resume_brand'>My Resume</h1>
                <div className="resume">
                    {myResume.map((item, index) => (
                        <div className="container_ContentResume" key={index}>
                            <div className="container_HrResume">
                                <hr className='hrABout' />
                            </div>
                            <div className="container_COntentRes">
                                <h1>{item.title}</h1>
                                <h4>{item.date}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Resume