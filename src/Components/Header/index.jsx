import './Header.css'

const Header = () => {
    return(
        <header className='header'>
        
        <h1>Portifólio.</h1>

            <ul>
                <li><a href="#home">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </header>
    )
}

export default Header