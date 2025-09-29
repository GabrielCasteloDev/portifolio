import './Footer.css';

const Footer = () => {

    return(
        <div className='footer'>
            <div className='left'>
                <h3>Gabriel Castelo</h3>
                <p>Desenvolvedor Front End - Designer - Editor</p>
            </div>
            <div className='right'>
                <ul>
                    <label>Contato</label>
                    <li><a href='https://www.linkedin.com/in/gabrielcastelorozales/' target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href='mailto:contatogabrielcastelo1@gmail.com' target="_blank" rel="noopener noreferrer">Email</a></li>
                    <li><a href='https://github.com/GabrielCasteloDev' target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
                <ul>
                    <label>Navegação</label>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#projetos'>Projetos</a></li>
                    <li><a href='#contato'>Contato</a></li>
                </ul>
            </div>
        </div>
    )

}

export default Footer;