import './Main.css'
import IMG from '../../../public/assets/my-photo.jpg'
import CV from '../../../public/assets/curriculo-felipe-dias.pdf'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'

export const Main = () =>{
    return(
        <main>
            <div className="div-presentation">
               <div className="div-presentation-name">
                   <h1>Olá, eu sou o </h1>
                   <h1 className='h1-name'>Felipe</h1>
               </div> 

               <h1 className='h1-welcome'>Seja bem vindo ao meu portfólio!</h1>
               <p className='frontend-developer'>Desenvolvedor Front End</p>

               <div className='div-hire-me'>
                    <a href={CV} download className='btn-download-cv'>Baixar currículo</a>
                    <IoIosArrowRoundForward className='arrow-icon'/>
               </div>

               <div className='div-contact-icons'>
                    <a target='blank' href='https://www.linkedin.com/in/felipe-lutz-282589260/' className='contact-icons'>
                        <FaLinkedinIn />
                    </a>
                    <a className='contact-icons' target='blank' href='https://github.com/LipeLutz'>
                        <FiGithub />
                    </a>  
               </div>
            </div>

            <div className='div-img'>
                <img src={IMG} alt="" style={{maxWidth:'400px', borderRadius:'300px'}}/>
            </div>
        </main>
    )
}