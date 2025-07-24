import './Contact.css'
import './Contact-media.css'

import { HiOutlineMail } from "react-icons/hi"
import { SlLocationPin } from "react-icons/sl"
import emailjs from '@emailjs/browser'
import { useState } from 'react'

export const Contact = ({sectionRef3}) =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [enterprise, setEnterprise] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(name === '' || email === '' || message === ''){
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }
        
        await emailjs.send("service_rkok0sv", "template_gwslibd", templateParams, "zg_e_b6frdBaxVWJJ")
            .then((response) => {
                console.log("Email enviado", response.status)
                setName("")
                setEmail("")
                setPhone("")
                setEnterprise("")
                setMessage("")
            }, (err) => {
                console.log("Erro:", err)
            })
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
                        <input type="text" id="input-name" value={name} placeholder="Nome" required onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='div-input'>
                        <label htmlFor="input-email">Email</label>
                        <input type="email" id="input-email" value={email} placeholder="Seu melhor email" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='div-input'>
                        <label htmlFor="input-number">Telefone (opcional)</label>
                        <input type="tel" value={phone} placeholder="Seu melhor número" id="input-number" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className='div-input'>
                        <label htmlFor="input-company">Empresa (opcional)</label>
                        <input type="text" value={enterprise} placeholder="Empresa" id="input-company" onChange={(e) => setEnterprise(e.target.value)}/>
                    </div>
                    <div className='div-input'>
                        <label htmlFor="input-message">Mensagem</label>
                        <textarea id="input-message" value={message} placeholder="Sua mensagem" onChange={(e) => setMessage(e.target.value)} required/>
                    </div>
                </div>

                <div>
                    <button className='btn-send-form' type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}