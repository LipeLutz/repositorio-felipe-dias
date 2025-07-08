import './Header.css'

export const Header = ({scrollToSection1, scrollToSection2, scrollToSection3}) =>{

    return(
        <header>
            <button onClick={scrollToSection1}>Sobre mim</button>
            <button onClick={scrollToSection2}>Projetos</button>
            <button onClick={scrollToSection3}>Fale comigo</button>
        </header>
    )
}