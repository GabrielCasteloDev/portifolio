import './Orcamento.css';
import { motion } from 'motion/react';

const Orcamento = ({servicos}) => {
    return (
        <div className="orcamento">
            <h2>Serviços Disponíveis</h2>
            <div className='line'></div>

            <div className='conteiner'>
                    {servicos.map((servico, index) => (
                        <motion.div className="box"
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}>
                            <div className='box-text'>
                                <h2>{servico.titulo}</h2>
                                <p>{servico.descricao}</p>
                            </div>
                            <button>$</button>
                        </motion.div>
                    )) }               
            </div>
        </div>
    )
}

export default Orcamento