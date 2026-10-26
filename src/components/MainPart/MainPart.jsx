import React, { useState } from 'react';
import styles from './MainPart.module.scss';
import poolImg from '../../assets/images/pool.webp'; // Լողավազան
import bisoImg from '../../assets/images/biso.webp'; // Տաղավար (Բեսետկա)
import zalImg from '../../assets/images/zal.webp'; // Հյուրասենյակ
import sen1Img from '../../assets/images/sen1.webp'; // Առաջին ննջասենյակ
import sen2Img from '../../assets/images/sen2.webp'; // Երկրորդ ննջասենյակ
import sen3Img from '../../assets/images/sen3.webp'; // Երրորդ ննջասենյակ
import zugImg from '../../assets/images/zug.webp'; // Խոհանոց/Սանհանգույց
import asvaltImg from '../../assets/images/asvaltic.webp'; // Տեսքը ճանապարհից

const poolGallery = [
    { id: 1, src: poolImg, title: ' Լողավազան' },
];

const gazeboGallery = [
    { id: 1, src: bisoImg, title: 'Տաղավար (35 անձ)' },
];

const interiorGallery = [
    { id: 1, src: zalImg, title: 'Հյուրասենյակ' },
    { id: 2, src: sen1Img, title: 'Առաջին ննջասենյակ' },
    { id: 3, src: sen2Img, title: 'Երկրորդ ննջասենյակ' },
    { id: 4, src: sen3Img, title: 'Երրորդ ննջասենյակ' },
    { id: 5, src: zugImg, title: 'Խոհանոց' }
];

const roadViewGallery = [
    { id: 1, src: asvaltImg, title: 'Տան տեսքը ճանապարհից' },
];

const MainPart = () => {
    const [activeImages, setActiveImages] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openGalleryModal = (imagesArray) => {
        setActiveImages(imagesArray);
        setCurrentIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % activeImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
    };

    return (
        <main className={styles.mainPart}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>ROYAL STAY IN GOGHT</span>
                    <h1>Royal Goght – Ձեր պրեմիում հանգիստը Գողթում</h1>
                    <p>2 հարկանի հանգստյան տուն, լողավազան, 35 անձի համար բեսետկա և սարերի տեսարան</p>
                    <a href="#contact" className={styles.ctaBtn}>
                        Կապնվել մեզ հետ
                    </a>
                </div>
            </section>

            {/* Amenities */}
            <section className={styles.section} id="about">
                <h2 className={styles.sectionTitle}>Ինչու՞ ընտրել Royal Goght-ը</h2>
                <p className={styles.sectionSubtitle}>Ամեն ինչ ստեղծված է ձեր լիարժեք հանգստի և միջոցառումների համար</p>
                <div className={styles.grid4}>
                    <div className={styles.card}>
                        <div className={styles.icon}>🏊‍♂️</div>
                        <h3> Լողավազան</h3>
                        <p>Մաքուր և ընդարձակ լողավազան բակում</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🏕️</div>
                        <h3>Տաղավար (35 անձ)</h3>
                        <p>Նախատեսված միջոցառումների համար</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🥩</div>
                        <h3>Թոնիր & Մանղալ</h3>
                        <p>Բոլոր պարագաները համեղ խորովածի համար</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>⛰️</div>
                        <h3>Շքեղ Տեսարան</h3>
                        <p>Անկրկնելի panoramic տեսարան դեպի Գողթ</p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className={styles.section} id="gallery">
                <h2 className={styles.sectionTitle}>Լուսանկարներ</h2>
                <p className={styles.sectionSubtitle}>Սեղմեք բաժինների վրա՝ նկարները մեծացնելու և դիտելու համար</p>

                <div className={styles.galleryGrid}>
                    <div className={styles.galleryItem} onClick={() => openGalleryModal(poolGallery)}>
                        <img src={poolGallery[0].src} alt="Լողավազան" loading="lazy" />
                        <div className={styles.galleryOverlay}>🔍 Լողավազան</div>
                    </div>

                    <div className={styles.galleryItem} onClick={() => openGalleryModal(gazeboGallery)}>
                        <img src={gazeboGallery[0].src} alt="Տաղավար" loading="lazy" />
                        <div className={styles.galleryOverlay}>🔍 Տաղավար (Բեսետկա)</div>
                    </div>

                    <div className={styles.galleryItem} onClick={() => openGalleryModal(interiorGallery)}>
                        <img src={interiorGallery[0].src} alt="Տան ներսը" loading="lazy" />
                        <div className={styles.galleryOverlay}>🔍 Տան ներքին տեսքը (Սենյակները)</div>
                    </div>

                    <div className={styles.galleryItem} onClick={() => openGalleryModal(roadViewGallery)}>
                        <img src={roadViewGallery[0].src} alt="Տեսքը ճանապարհից" loading="lazy" />
                        <div className={styles.galleryOverlay}>🔍 Տեսքը ճանապարհից</div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {activeImages && (
                <div className={styles.modal} onClick={() => setActiveImages(null)}>
                    <span className={styles.closeBtn}>&times;</span>

                    {activeImages.length > 1 && (
                        <button className={styles.prevBtn} onClick={prevImage}>&#10094;</button>
                    )}

                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={activeImages[currentIndex].src} alt="Enlarged" />
                        <p className={styles.modalTitle}>
                            {activeImages[currentIndex].title} ({currentIndex + 1} / {activeImages.length})
                        </p>
                    </div>

                    {activeImages.length > 1 && (
                        <button className={styles.nextBtn} onClick={nextImage}>&#10095;</button>
                    )}
                </div>
            )}

            {/* Contact / Social Links Section */}
            <section className={styles.section} id="contact">
                <h2 className={styles.sectionTitle}>Կապ և Ամրագրում</h2>
                <p className={styles.sectionSubtitle}>Ամրագրման և հարցերի համար կարող եք կապնվել մեզ հետ սոցիալական ցանցերով</p>

                <div className={styles.socialButtonsContainer}>
                    <a
                        href="https://www.instagram.com/royal_goght?rpxt=MWZhY2UxeGF1MmFlaA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialBtn} ${styles.instaBtn}`}
                    >
                         Instagram
                    </a>

                    <a
                        href="https://www.facebook.com/share/1DvZdWZTh1/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialBtn} ${styles.fbBtn}`}
                    >
                        Facebook
                    </a>

                    <a
                        href="https://t.me/+37477305860"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialBtn} ${styles.tgBtn}`}
                    >
                         Telegram
                    </a>
                </div>
            </section>
        </main>
    );
};

export default MainPart;