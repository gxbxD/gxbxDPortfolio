import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'
import logo from '../logo GD.png'

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <header className={styles.Appheader}>
            <div className='logo-container'>
                <img src={logo} className={styles.logo} alt='logo'></img>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href='#contato'>Contato</a>
                    </li>
                    <li>
                        <a href='#projetos'>Projetos</a>
                    </li>
                    <li>
                        <a href='#habilidades'>Habilidades</a>
                    </li>
                    <li>
                        <a href='#certificados'>Certificados</a>
                    </li>
                    {/* botao pra ajeitar dps
                    <li>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>
                                <svg
                                    className={styles.langico}
                                    style={{ color: "rgb(128, 0, 128)" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"
                                        fill="#800080"
                                    />
                                    <path
                                        d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"
                                        fill="#800080"
                                    />
                                </svg>
                            </button>
                            <div className={styles.dropdownContent}>
                                <a onClick={() => changeLanguage('en')}>English</a>
                                <a onClick={() => changeLanguage('pt')}>Português</a>
                                <a onClick={() => changeLanguage('de')}>Deutsch</a>
                                <a onClick={() => changeLanguage('es')}>Español</a>
                            </div>
                        </div>
                    </li>
    */}
                    <li>
                        <a href='#inicio'>
                            <svg
                                className={styles.homeico}
                                style={{ color: "rgb(128, 0, 128)" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                <path
                                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                                    fill="#800080"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;