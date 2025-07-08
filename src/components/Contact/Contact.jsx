import './Contact.css'

import { HiOutlineMail } from "react-icons/hi"
import { SlLocationPin } from "react-icons/sl"

export const Contact = ({sectionRef3}) =>{

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log('Formulário enviado')
    }

    return(
        <div ref={sectionRef3} className="container-contact">
            <div className='div-contact-info'>
                <h2>Entre em contato</h2>
                <h1>Vamos trabalhar juntos!</h1>

                <div className="div-my-info">
                    <p className='div-my-info-title'>Email</p>
                    <div className='div-icon-info'>
                        <HiOutlineMail />
                        <p>felipeclutz@gmail.com</p>
                    </div>
                </div>

                <div className="div-my-info">
                    <p className='div-my-info-title'>Endereço</p>
                    <div className='div-icon-info'>
                        <SlLocationPin />
                        <p>Petrópolis, RJ</p>
                    </div>
                </div>
            </div>

            <form className="form-contact" onSubmit={(e) => handleSubmit(e)}>
                <div className='div-form-contact'>
                    <div className='div-input'>
                        <label htmlFor="input-name">Nome</label>
                        <input type="text" name="input-name" placeholder="Nome" required/>
                    </div>
                    <div className='div-input'>
                        <label htmlFor="input-email">Email</label>
                        <input type="email" name="input-email" placeholder="Seu melhor email" required/>
                    </div>
                    <div className='div-input'>
                        <label htmlFor="input-number">Telefone (opcional)</label>
                        <input type="number" placeholder="Seu melhor número" name="input-number"/>
                    </div>
                    <div className='div-input'>
                        <label htmlFor="input-company">Empresa (opcional)</label>
                        <input type="text" placeholder="Empresa" name="input-company"/>
                    </div>
                    <div className='div-input'>
                        <label htmlFor="input-message">Mensagem</label>
                        <textarea name="input-messae" id="" placeholder="Sua mensagem"/>
                    </div>
                </div>

                <div>
                    <button className='btn-send-form' type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}