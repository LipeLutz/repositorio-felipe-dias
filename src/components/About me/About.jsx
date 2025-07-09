import { FaCss3, FaHtml5, FaReact, FaSass } from 'react-icons/fa'
import './About.css'
import './About-media.css'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiJest, SiTestinglibrary, SiTypescript } from 'react-icons/si'
import { DiJqueryLogo } from 'react-icons/di'

export const About = ({sectionRef1}) =>{
    return(
        <div ref={sectionRef1} className="div-about">
            <h1 className='h1-about'>Sobre mim</h1>
            <p className='p-objective'>Meu objetivo é transformar ideias em experiências web intuitivas usando:</p>
            <div className='div-soft-skills'>
                <div className='soft-skills'>
                    <FaReact className='tec-icon'/>
                    <p>React</p>
                </div>

                <div className='soft-skills'>
                    <IoLogoJavascript className='tec-icon'/>
                    <p>JavaScript</p>
                </div>

                <div className='soft-skills'>
                    <FaHtml5 className='tec-icon'/>
                    <p>HTML </p>
                </div>

                <div className='soft-skills'>
                    <FaCss3 className='tec-icon'/>
                    <p>CSS</p>
                </div>

                <div className='soft-skills'>
                    <SiTypescript className='tec-icon'/>
                    <p>TypeScript</p>
                </div>

                <div className='soft-skills'>
                    <SiTestinglibrary className='tec-icon'/>
                    <p>Testing library</p>
                </div>

                <div className='soft-skills'>
                    <SiJest className='tec-icon'/>
                    <p>Jest</p>
                </div>

                <div className='soft-skills'>
                    <FaSass className='tec-icon'/>
                    <p>SASS</p>
                </div>

                <div className='soft-skills'>
                    <DiJqueryLogo className='tec-icon'/>
                    <p>jQuery</p>
                </div>

            </div>

        </div>
    )
}