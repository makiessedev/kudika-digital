import React from 'react'
import Container from '../container'

export default function Footer() {
  return (
      <footer className='bg-zinc-800 px-[65px] py-[50px]'>
        <div className='flex flex-row justify-between'>
        <div>
          <h4>Logotipo</h4>
        </div>
        <div>
          <h4>Mapa do site</h4>
          <ul>
            <li>A Kudika</li>
            <li>Soluções</li>
            <li>Cases</li>
            <li>Serviços</li>
            <li>Blog</li>
            <li>Orçamento</li>
          </ul>
        </div>
        <div>
          <h4>Contactos</h4>
          <div>
            <h5>Nossa sede</h5>
            <span>Rangel-CTTs, Ed. Digital.ao, 2º Andar</span>
          </div>
          <div>
            <h5>Telefone</h5>
            <span>+244 937 411 079 | 990 411 079</span>
          </div>
          <div>
            <h5>E-mail</h5>
            <span>contacto@kudikadigital.com</span>
          </div>
          <div>
            <h5>Redes sociais</h5>
          </div>
        </div>
        </div>
        <div className='flex items-center justify-center'>
          <p>&copy; 2023 Kudika Digital</p>
        </div>
    </footer>
  )
}
