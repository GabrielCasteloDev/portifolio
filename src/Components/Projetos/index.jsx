import './Projetos.css'


const Projetos = ({projetos = [] }) => {

    return (
    <div className="block">
            <h1>Projetos</h1>
            <div className="line"></div>
            <div className='projetos'>
            {projetos.map((projeto, index) =>(
                <div
                key={index}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="projeto">
                    <div className="imagem-box">    
                        <img src={projeto.src}/>
                    </div>
                    <h2>{projeto.titulo}</h2>
                    <p>{projeto.descricao}</p>
                    <button
                        className="button-projetos"
                        onClick={() => projeto.link && window.open(projeto.link, "_blank")}
                        disabled={!projeto.link}>
                            {projeto.botaoTexto}       
                        </button>
                    </div>))}
            </div>
        </div>  
    )
}

export default Projetos