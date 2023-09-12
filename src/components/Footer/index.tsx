import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react'
import { KudikaLogo } from './KudikaLogo'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center px-[65px] py-[50px] bg-gray-500'>
      <section className='flex flex-col justify-center gap-4 md:flex-row md:justify-between'>
        <KudikaLogo/>
        
        <div
          className='hidden md:block'
        >
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
          <h2 className='text-gray-100 text-2xl font-extrabold uppercase mb-6'>Contactos</h2>
          <div  className='flex flex-col gap-4 text-gray-200'>
            <div>
              <h5 className='text-lg text-white font-bold uppercase'>Nossa sede</h5>
              <span className='text-base text-gray-100 font-light'>Rangel-CTTs, Ed. Digital.ao, 2º Andar</span>
            </div>
            <div>
              <h5 className='text-lg text-white font-bold uppercase'>Telefone</h5>
              <span 
                className='text-gray-100'
              >+244 937 411 079 | 990 411 079</span>
            </div>
            <div>
              <h5 className='text-lg text-white  font-bold uppercase'>E-mail</h5>
              <span
                className='text-gray-100'
              >contacto@kudikadigital.com</span>
            </div>
            <div
              className='space-y-3'
            >
              <h5 className='text-lg text-white font-bold uppercase'>Redes sociais</h5>

              <section
                className='flex gap-3'
              >
                <Image src='/icons/facebook.png' alt='facebook icon' width={50} height={50} />
                <Image src='/icons/instagram.png' alt='instagram icon' width={50} height={50} />
                <Image src='/icons/linkedin.png' alt='linkedin icon' width={50} height={50} />
                <Image src='/icons/whatsapp.png' alt='whatsapp icon' width={50} height={50} />
                <Image src='/icons/youtube.png' alt='youtube icon' width={50} height={50} />
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center text-white mt-10 md:mt-20'>
        <p>&copy; 2023 Kudika Digital</p>
      </section>
    </footer>
  )
}
