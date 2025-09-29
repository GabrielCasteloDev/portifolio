import { motion } from "motion/react";
import './About.css'

const Sobre = () => {
    return(
        <div className="about">
            <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2}}
            src="./character-main.png"/>

            <div 
        
            className="about-block">
                <h2>Perfil Profissional</h2>
                <p>Sou programador front-end com experiência em desenvolver interfaces modernas, responsivas e funcionais, 
                    sempre com foco em oferecer a melhor experiência para o usuário. Também atuo como designer gráfico e editor de vídeo, 
                    criando identidades visuais, artes e conteúdos audiovisuais que comunicam com clareza e criatividade. Além dessas áreas, 
                    presto serviços de manutenção de computadores, garantindo suporte técnico confiável e eficiente. Busco constantemente aprimorar minhas
                     habilidades e acompanhar as tendências do mercado, unindo tecnologia e design para entregar soluções completas e de qualidade.</p>
            </div>
        </div>
    )
}

export default Sobre