import './Projects.css'
import './Projects-media.css'

import { FaCss3, FaHtml5, FaReact } from "react-icons/fa6"
import { SiFirebase } from "react-icons/si"
import IMGTaskProject from '../../../public/assets/task-project.png'
import IMGEcommerce from '../../../public/assets/ecommerce.png'
import IMGRifa from '../../../public/assets/rifa.png'
import IMGPortfolioJhorran from '../../../public/assets/portfolio-jhorran.png'
import { TbBrandFramerMotion } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'
import { IoIosArrowRoundForward } from 'react-icons/io'

export const Projects = ({sectionRef2}) =>{
    return(
        <div ref={sectionRef2} className='container-projects'>
            <h1 className='container-projects-h1'>Projetos </h1>
            <div className="div-projects">
                <div className="project-card">
                    <a href="https://projeto-tarefas-kappa.vercel.app/" target='blank'>
                        <div>
                            <img src={IMGTaskProject} alt="Projeto tarefas" style={{maxWidth:'500px', borderRadius:'20px 20px 0px 0px'}}/>
                        </div>
                        <div className='div-project-details'>
                            <h1 className='h1-project-detail'>Tarefas Andritz</h1>
                            <p>Desenvolvi esse site para que meus gestores pudessem ter um controle mais preciso das minhas tarefas no trabalho.</p>
                            <div className='info-stack'>
                                <p>Stack utilizada:</p>
                                <FaReact className='info-stack-icon'/>
                                <FaCss3 className='info-stack-icon'/>
                                <SiFirebase className='info-stack-icon'/>
                                <TbBrandFramerMotion className='info-stack-icon'/>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="project-card">
                    <a href="https://lipelutz.github.io/studio-sant/" target='blank'>
                        <div>
                            <img src={IMGPortfolioJhorran} alt="Portfólio Jhorran Sant" style={{maxWidth:'500px', borderRadius:'20px 20px 0px 0px'}}/>
                        </div>
                        <div className='div-project-details'>
                            <h1 className='h1-project-detail'>Portfólio Jhorran Sant</h1>
                            <p>Freelance feito para arquiteto que desejava um portfólio.</p>
                            <div className='info-stack'>
                                <p>Stack utilizada:</p>
                                <FaReact className='info-stack-icon'/>
                                <FaCss3 className='info-stack-icon'/>
                                <TbBrandFramerMotion className='info-stack-icon'/>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="project-card">
                    <a href="https://lipelutz.github.io/e-commerce_react-js" target='blank'>
                        <div>
                            <img src={IMGEcommerce} alt="Projeto e-commerce" style={{maxWidth:'500px', borderRadius:'20px 20px 0px 0px'}}/>
                        </div>
                        <div className='div-project-details'>
                            <h1 className='h1-project-detail'>E-commerce</h1>
                            <p>Desenvolvi esse site quando estava aprendendo React, com o intuito de treinar. Utilizei uma API de produtos.</p>
                            <div className='info-stack'>
                                <p>Stack utilizada:</p>
                                <FaReact className='info-stack-icon'/>
                                <FaCss3 className='info-stack-icon'/>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="project-card">
                    <a href="https://lipelutz.github.io/projeto-rifa/" target='blank'>
                        <div>
                            <img src={IMGRifa} alt="Projeto rifa da Simone" style={{maxWidth:'500px', borderRadius:'20px 20px 0px 0px'}}/>
                        </div>
                        <div className='div-project-details'>
                            <h1 className='h1-project-detail'>Rifa da Simone</h1>
                            <p>Desenvolvi esse site de rifa para ajudar minha mãe a arrecadar dinheiro para um tratamento de saúde.</p>
                            <div className='info-stack'>
                                <p>Stack utilizada:</p>
                                <FaHtml5 className='info-stack-icon'/>
                                <FaCss3 className='info-stack-icon'/>
                                <IoLogoJavascript className='info-stack-icon'/>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            
            <div className='div-see-projects'>
                <a href='https://github.com/LipeLutz' target='blank' className='btn-see-projects'>Ver mais projetos </a>
                <IoIosArrowRoundForward className='arrow-icon'/>
            </div>
        </div>
    )
}