import React from 'react'
import { KudikaLogo } from './KudikaLogo'
import Image from 'next/image'
import { Container } from './Container'
import { CopyrightWrapper } from './CopyrightWrapper'
import { SiteMapWrapper } from './SiteMapWrapper'
import { SocialMidiaWrapper } from './SocialMidiaWrapper'

export default function Footer() {
  return (
    <Container>
      <section className='flex flex-col justify-center gap-4 md:flex-row md:justify-between'>
        <KudikaLogo/>
        
        <SiteMapWrapper>
          <h4 className='text-gray-100 text-2xl font-extrabold uppercase mb-6'>Mapa do site</h4>
          <ul className='flex flex-row text-gray-200 text-lg font-bold uppercase gap-8'>
            <div className='space-y-4'>
              <li className='text-lg text-white font-bold uppercase'>A Kudika</li>
              <li className='text-lg text-white font-bold uppercase'>Soluções</li>
              <li className='text-lg text-white font-bold uppercase'>Orçamento</li>
            </div>
            <div className='space-y-4'>
              <li className='text-lg text-white font-bold uppercase'>Cases</li>
              <li className='text-lg text-white font-bold uppercase'>Serviços</li>
              <li className='text-lg text-white font-bold uppercase'>Blog</li>
            </div>
          </ul>
        </SiteMapWrapper>

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

              <SocialMidiaWrapper>
                <Image src='/icons/facebook.png' alt='facebook icon' width={50} height={50} />
                <Image src='/icons/instagram.png' alt='instagram icon' width={50} height={50} />
                <Image src='/icons/linkedin.png' alt='linkedin icon' width={50} height={50} />
                <Image src='/icons/whatsapp.png' alt='whatsapp icon' width={50} height={50} />
                <Image src='/icons/youtube.png' alt='youtube icon' width={50} height={50} />
              </SocialMidiaWrapper>
            </div>
          </div>
        </div>
      </section>
      <CopyrightWrapper>
        <p>&copy; 2023 Kudika Digital</p>
      </CopyrightWrapper>
    </Container>
  )
}
