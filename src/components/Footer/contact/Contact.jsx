import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    const [showChatOptions, setShowChatOptions] = useState(false);

    return (
        <div className={styles.contactInfo}>
            <p>📍 Հայաստան, Կոտայքի մարզ, գյուղ Գողթ</p>

            {/* Phone with interactive popup/dropdown */}
            <div className={styles.phoneWrapper}>
                <p>
                    📞 Հեռ․{' '}
                    <button
                        type="button"
                        className={styles.phoneLinkBtn}
                        onClick={() => setShowChatOptions(!showChatOptions)}
                    >
                        +374 77 30 58 60 <span className={styles.arrow}>▾</span>
                    </button>
                </p>

                {showChatOptions && (
                    <div className={styles.chatDropdown}>
                        <a href="https://wa.me/37477305860" target="_blank" rel="noreferrer" className={styles.chatOption}>
                            <svg className={styles.dropdownIcon} viewBox="0 0 24 24" width="18" height="18"><path fill="#25d366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" /></svg>
                            Գրել WhatsApp-ով
                        </a>
                        <a href="https://t.me/+37477305860" target="_blank" rel="noreferrer" className={styles.chatOption}>
                            <svg className={styles.dropdownIcon} viewBox="0 0 24 24" width="18" height="18"><path fill="#24a1de" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.75 3.8-1.65 6.33-2.74 7.58-3.28 3.61-1.57 4.36-1.84 4.85-1.85.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.04.23z" /></svg>
                            Գրել Telegram-ով
                        </a>
                        <a href="tel:+37477305860" className={styles.chatOption}>
                            📞 Զանգահարել
                        </a>
                    </div>
                )}
            </div>

            {/* Social & Messaging Buttons with Real SVGs */}
            <div className={styles.socialButtons}>
                {/* WhatsApp */}
                <a
                    href="https://wa.me/37477305860"
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.socialBtn} ${styles.waBtn}`}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 1.77c2.27 0 4.41.88 6.02 2.49 3.32 3.32 3.32 8.72 0 12.04-1.61 1.61-3.75 2.49-6.02 2.49-1.47 0-2.91-.37-4.18-1.08l-.3-.17-3.11.82.83-3.03-.19-.32a8.04 8.04 0 0 1-1.23-4.28c0-4.43 3.61-8.04 8.04-8.04zm4.59 10.58c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.38-.79-1.89-.21-.5-.43-.43-.59-.44h-.5c-.17 0-.45.06-.69.32-.24.25-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.69.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.5-.08 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" /></svg>
                    WhatsApp
                </a>

                {/* Telegram */}
                <a
                    href="https://t.me/+37477305860"
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.socialBtn} ${styles.tgBtn}`}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.75 3.8-1.65 6.33-2.74 7.58-3.28 3.61-1.57 4.36-1.84 4.85-1.85.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.04.23z" /></svg>
                    Telegram
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/royal_goght?rpxt=MWZhY2UxeGF1MmFlaA=="
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.socialBtn} ${styles.instaBtn}`}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    Instagram
                </a>

                {/* Facebook */}
                <a
                    href="https://www.facebook.com/share/1DvZdWZTh1/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.socialBtn} ${styles.fbBtn}`}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.589 0 9 1.582 9 4.75V8z" /></svg>
                    Facebook
                </a>
            </div>

            {/* Navigation App Links */}
            <div className={styles.navButtons}>
                <a
                    href="https://maps.app.goo.gl/dsbC3AuzMLBf8uRP9?g_st=ic"
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.navBtn} ${styles.googleBtn}`}
                >
                    📍 Google Maps
                </a>

                <a
                    href="https://yandex.ru/maps?whatshere%5Bzoom%5D=18&whatshere%5Bpoint%5D=44.791402,40.140678&si=mht753948c33y4urepqt0h28m8"
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.navBtn} ${styles.yandexBtn}`}
                >
                    🗺️ Yandex Maps
                </a>
            </div>
        </div>
    );
};

export default Contact;