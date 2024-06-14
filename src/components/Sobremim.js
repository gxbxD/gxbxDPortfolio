import React, { useState } from "react";
import profpic from '../profilepic.jpg';
import Contatos from "./Contatos";
import styles from '../styles/Sobremim.module.css';

function Sobremim() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <section className={styles.sobremim}>
            <div className={`${styles.sobremimcontainer} ${isFlipped ? styles.flipped : ''}`}>
                <div className={styles.front}>
                    <div className={styles.profpiccontainer}>
                        <img src={profpic} className={styles.profpic} alt="profpic" />
                    </div>
                    <h1>Sobre mim...</h1>
                    <button onClick={handleFlip} className={styles.flipButton}>
                Ver mais
            </button>
                </div>
                <div className={styles.back}>
                    <div className={styles.info}>
                        <h1>Gabriel D'angelo</h1>
                        <p>
                            Sou Designer com 7 anos de experiência especializada em restauração de imagens, buscando novos desafios na área de Tecnologia, minha verdadeira paixão. Desde criança, estou imerso no mundo dos computadores, o que despertou em mim um interesse profundo e contínuo por esse campo. Atualmente, estou me dedicando aos estudos de tecnologia há 7 meses, focando em desenvolvimento Fullstack. Tenho experiência em desenvolvimento web e estou ansioso para aplicar e expandir essas habilidades.

                            Defensor do conhecimento livre, acredito no poder da tecnologia para transformar vidas e estou sempre pronto para aprender e compartilhar o que sei. Procuro um ambiente de trabalho inovador e colaborativo onde possa contribuir como Desenvolvedor Fullstack, aproveitando minha criatividade e conhecimento técnico para criar soluções eficazes e impactantes. Estou em busca de oportunidades que me permitam evoluir constantemente, tanto profissionalmente quanto como ser humano.
                        </p>
                    </div>
                    <Contatos />
                    <button onClick={handleFlip} className={styles.flipButton}>
                Voltar
            </button>
                </div>
            </div>
        </section>
    );
}

export default Sobremim;
