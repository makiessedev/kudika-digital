import React from 'react'

export default function Footer() {
  return (
      <footer className='bg-zinc-800 px-[65px] py-[50px]'>
        <div className='flex flex-row justify-between'>
        <div className='flex items-center'>
          <h4>Logotipo da Kudika</h4>
        </div>
        <div>
          <h4 className='text-gray-100 text-2xl font-extrabold uppercase mb-6'>Mapa do site</h4>
          <ul className='flex flex-col text-gray-200 text-lg font-bold uppercase gap-3'>
            <li>A Kudika</li>
            <li>Soluções</li>
            <li>Cases</li>
            <li>Serviços</li>
            <li>Blog</li>
            <li>Orçamento</li>
          </ul>
        </div>
        <div>
          <h4 className='text-gray-100 text-2xl font-extrabold uppercase mb-6'>Contactos</h4>
          <div  className='flex flex-col gap-4 text-gray-200'>
          <div>
            <h5 className='text-lg font-bold uppercase'>Nossa sede</h5>
            <span className='text-base font-light'>Rangel-CTTs, Ed. Digital.ao, 2º Andar</span>
          </div>
          <div>
            <h5 className='text-lg font-bold uppercase'>Telefone</h5>
            <span>+244 937 411 079 | 990 411 079</span>
          </div>
          <div>
            <h5 className='text-lg font-bold uppercase'>E-mail</h5>
            <span>contacto@kudikadigital.com</span>
          </div>
          <div>
            <h5 className='text-lg font-bold uppercase'>Redes sociais</h5>
          </div>
          </div>
        </div>
        </div>
        <div className='flex items-center justify-center text-gray-300 mt-20'>
          <p>&copy; 2023 Kudika Digital</p>
        </div>
    </footer>
  )
}
