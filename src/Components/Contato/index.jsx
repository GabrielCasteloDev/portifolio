import './Contato.css'
import { motion } from 'framer-motion';

const Contato = () => {
    return (
        <div className='contato' id='contato'>

            <h2>Contato</h2>
            <div className='line'></div>

            <motion.div className='blocks'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.05 }}
            >
                <div className='block linkedin'>
                    <a href='https://www.linkedin.com/in/gabrielcastelorozales/' target="_blank" rel="noopener noreferrer">
                    <img src='./icons/linkedin.png'/>
                    <p>LinkedIn</p>
                    </a>
                </div>
                <div className='block email'>
                    <a href='mailto:contatogabrielcastelo1@gmail.com' target="_blank" rel="noopener noreferrer">
                    <img src='./icons/gmail.png'/>
                    <p>Email</p>
                    </a>
                </div>
                <div className='block github'>
                    <a href='https://github.com/GabrielCasteloDev' target="_blank" rel="noopener noreferrer">
                    <img src='./icons/github.png'/>
                    <p>Github</p>
                    </a>
                </div>
            </motion.div>
        </div>

    )}

    export default Contato