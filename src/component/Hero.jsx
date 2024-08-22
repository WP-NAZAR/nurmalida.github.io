import './css/main.css';
import './css/Hero.css';
import imgHero from '../assets/images/imgHero.jpg';
import iconDownload from '../assets/img/icon_Download.png';
import React, { useState, useEffect } from 'react';

function Hero() {
    const texts = ["HI! I'M NURMALIDA", "WELCOME TO MY PROFILE"];
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 150;
        const delay = isDeleting ? 100 : 2000;

        const handleTyping = () => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex(prev => prev - 1);
                    setCurrentText(texts[currentIndex].substring(0, charIndex - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((currentIndex + 1) % texts.length);
                }
            } else {
                if (charIndex < texts[currentIndex].length) {
                    setCharIndex(prev => prev + 1);
                    setCurrentText(texts[currentIndex].substring(0, charIndex + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, currentIndex, texts]);

    return (
        <>
            <div className="mainContainer_Hero">
                <div className="hero">
                    <div className="hero_Content">
                        <div className="hero_containerLeft">
                            <div className="container_heroContent">
                                <div className="container_heroTitle">
                                    <h1 className='hero_title'>{currentText}</h1>
                                </div>
                                <h3 className='hero_Profesi'>- Mahasiswa Stikes Nani Hasanuddin, MAKASSAR</h3>
                                <div className="container_heroDesc">
                                    <p>"Kemenangan hanya Akan Datang Pada Mereka Yang Telah Mempersiapkannya: By - Nazaruddin"</p>
                                </div>
                                <div className="container_heroBtn">
                                    <button className='BtnHero'>
                                        Download Cv <img src={iconDownload} className='iconDownload' alt="Download Icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hero_containerRight">
                            <div className="container_heroImg">
                                <img src={imgHero} alt="Img Hero Nurmalida" className='imgHero' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
