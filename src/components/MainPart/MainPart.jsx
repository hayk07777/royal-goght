import React, { useState, useEffect } from 'react';
import styles from './MainPart.module.scss';

// Բակի և արտաքին տեսքի նկարներ
import poolImg from '../../assets/images/pool.webp';
import bisoImg from '../../assets/images/biso.webp';
import balkonchikImg from '../../assets/images/balkonchik.webp';
import asvaltImg from '../../assets/images/asvaltic.webp';

// 1-ին հարկի (Ներքև) նկարներ
import zal1nerqevImg from '../../assets/images/zal1nerqev.webp';
import zal2nerqevImg from '../../assets/images/zal2nerqev.webp';
import zal3nerqevImg from '../../assets/images/zal3nerqev.webp';
import sen1nerqevImg from '../../assets/images/sen1nerqev.webp';
import sen2nerqevImg from '../../assets/images/sen2nerqev.webp';
import sen3nerqevImg from '../../assets/images/sen3nerqev.webp';
import zugnerqevImg from '../../assets/images/zugnerqev.webp';

// 2-րդ հարկի (Վերև) նկարներ
import zal1verevImg from '../../assets/images/zal1verev.webp';
import zal2verevImg from '../../assets/images/zal2verev.webp';
import sen1verevImg from '../../assets/images/sen1verev.webp';
import sen2verevImg from '../../assets/images/sen2verev.webp';
import zug1verevImg from '../../assets/images/zug1verev.webp';

// Գալերեայի զանգվածներ
const poolGallery = [
    { id: 1, src: poolImg, title: 'Լողավազան' }
];

const gazeboGallery = [
    { id: 1, src: bisoImg, title: 'Տաղավար (35 անձ)' },
    { id: 2, src: balkonchikImg, title: 'Պատշգամբ / Տաղավար' }
];

// 1-ին հարկ
const floor1Gallery = [
    { id: 1, src: zal1nerqevImg, title: '1-ին հարկ - Հյուրասենյակ (1)' },
    { id: 2, src: zal2nerqevImg, title: '1-ին հարկ - Հյուրասենյակ (2)' },
    { id: 3, src: zal3nerqevImg, title: '1-ին հարկ - Հյուրասենյակ (3)' },
    { id: 4, src: sen1nerqevImg, title: '1-ին հարկ - Ննջասենյակ 1' },
    { id: 5, src: sen2nerqevImg, title: '1-ին հարկ - Ննջասենյակ 2' },
    { id: 6, src: sen3nerqevImg, title: '1-ին հարկ - Ննջասենյակ 3' },
    { id: 7, src: zugnerqevImg, title: '1-ին հարկ - Սանհանգույց' }
];

// 2-րդ հարկ
const floor2Gallery = [
    { id: 1, src: zal1verevImg, title: '2-րդ հարկ - Հյուրասենյակ (1)' },
    { id: 2, src: zal2verevImg, title: '2-րդ հարկ - Հյուրասենյակ (2)' },
    { id: 3, src: sen1verevImg, title: '2-րդ հարկ - Ննջասենյակ 1' },
    { id: 4, src: sen2verevImg, title: '2-րդ հարկ - Ննջասենյակ 2' },
    { id: 5, src: zug1verevImg, title: '2-րդ հարկ - Սանհանգույց / Խոհանոց' }
];

const roadViewGallery = [
    { id: 1, src: asvaltImg, title: 'Տան տեսքը ճանապարհից' }
];

const MainPart = () => {
    const [activeImages, setActiveImages] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openGalleryModal = (imagesArray) => {
        setActiveImages(imagesArray);
        setCurrentIndex(0);
    };

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        if (currentIndex === activeImages.length - 1) {
            setActiveImages(null);
        } else {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        if (currentIndex === 0) {
            setActiveImages(null);
        } else {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    // 1. Ստեղնաշարով թերթում (Left, Right, Escape)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!activeImages) return;
            if (e.key === 'ArrowRight') {
                if (currentIndex === activeImages.length - 1) {
                    setActiveImages(null);
                } else {
                    setCurrentIndex((prev) => prev + 1);
                }
            }
            if (e.key === 'ArrowLeft') {
                if (currentIndex === 0) {
                    setActiveImages(null);
                } else {
                    setCurrentIndex((prev) => prev - 1);
                }
            }
            if (e.key === 'Escape') setActiveImages(null);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeImages, currentIndex]);

    // 2. Արգելափակում ենք էջի scroll-ը, երբ modal-ը բաց է
    useEffect(() => {
        if (activeImages) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeImages]);

    return (
        <main className={styles.mainPart}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>ROYAL STAY IN GOGHT</span>
                    <h1>Royal Goght – Ձեր պրեմիում հանգիստը Գողթում</h1>
                    <p>Երկհարկանի հանգստյան տուն, լողավազան, տաղավար 35 անձի համար և շքեղ տեսարան</p>
                    <a href="#contact" className={styles.ctaBtn}>
                        Կապ հաստատել մեզ հետ
                    </a>
                </div>
            </section>

            {/* Amenities Section */}
            <section className={styles.section} id="about">
                <h2 className={styles.sectionTitle}>Ինչու՞ ընտրել Royal Goght-ը</h2>
                <p className={styles.sectionSubtitle}>Ամեն ինչ ստեղծված է ձեր լիարժեք հանգստի և միջոցառումների համար</p>
                <div className={styles.grid4}>
                    <div className={styles.card}>
                        <div className={styles.icon}>🏊‍♂️</div>
                        <h3>Լողավազան</h3>
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

            {/* Gallery Section */}
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
                        <div className={styles.galleryOverlay}>🔍 Տաղավար (35 անձ)</div>
                    </div>

                    <div className={styles.galleryItem} onClick={() => openGalleryModal(floor1Gallery)}>
                        <img src={floor1Gallery[0].src} alt="1-ին հարկ" loading="lazy" />
                        <div className={styles.galleryOverlay}>🔍 1-ին Հարկ (Սենյակներ)</div>
                    </div>

                    <div className={styles.galleryItem} onClick={() => openGalleryModal(floor2Gallery)}>
                        <img src={floor2Gallery[0].src} alt="2-րդ հարկ" loading="lazy" />
                        <div className={styles.galleryOverlay}>🔍 2-րդ Հարկ (Սենյակներ)</div>
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

                    <button className={styles.prevBtn} onClick={prevImage}>&#10094;</button>

                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={activeImages[currentIndex].src} alt="Enlarged" />

                        <p className={styles.modalTitle}>
                            {activeImages[currentIndex].title} ({currentIndex + 1} / {activeImages.length})
                        </p>

                        {/* Thumbnails (փոքր նկարներ ներքևում) */}
                        {activeImages.length > 1 && (
                            <div className={styles.thumbnailContainer}>
                                {activeImages.map((img, idx) => (
                                    <img
                                        key={img.id || idx}
                                        src={img.src}
                                        alt="thumb"
                                        className={`${styles.thumbnail} ${idx === currentIndex ? styles.activeThumb : ''}`}
                                        onClick={() => setCurrentIndex(idx)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <button className={styles.nextBtn} onClick={nextImage}>&#10095;</button>
                </div>
            )}

          
            {/* Contact Section */}
            <section className={styles.section} id="contact">
                <h2 className={styles.sectionTitle}>Կապ և Ամրագրում</h2>
                <p className={styles.sectionSubtitle}>Ամրագրման և հարցերի համար կարող եք կապ հաստատել մեզ հետ</p>

                <div className={styles.socialButtonsContainer}>
                    <a href="tel:+37493305860" className={`${styles.socialBtn} ${styles.phoneBtn}`}>
                        📞 Զանգահարել
                    </a>

                    <a
                        href="https://wa.me/37493305860"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialBtn} ${styles.waBtn}`}
                    >
                        💬 WhatsApp
                    </a>

                    <a
                        href="https://t.me/+37477305860"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialBtn} ${styles.tgBtn}`}
                    >
                        ✈️ Telegram
                    </a>

                    <a
                        href="https://www.instagram.com/royal_goght?rpxt=MWZhY2UxeGF1MmFlaA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialBtn} ${styles.instaBtn}`}
                    >
                        📸 Instagram
                    </a>

                    <a
                        href="https://www.facebook.com/share/1DvZdWZTh1/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialBtn} ${styles.fbBtn}`}
                    >
                        📘 Facebook
                    </a>
                </div>
            </section>
        </main>
    );
};

export default MainPart;