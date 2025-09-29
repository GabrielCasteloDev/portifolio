import { motion } from "motion/react";
import './Main.css'

const Main = () => {
    return(
        <main className='main' id="home">

            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className='info'>

                <div className='block'>
                    <div className='circle'></div>
                    <h3>Olá, eu sou</h3>
                </div>

                <div className='block'>
                    <h1>Gabriel Castelo</h1>
                    <div className='line'></div>
                </div>

                <p>Desenvolvedor Front End  -   Designer - Editor</p>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className='img-pack'>
                <img src='./img-main.png' alt="Foto principal"/>
            </motion.div>
        </main>
    )
}

export default Main