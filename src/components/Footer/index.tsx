/* eslint-disable no-irregular-whitespace */
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollToTop from 'react-scroll-to-top'

import { KudikaLogo } from './KudikaLogo'
import { Container } from './Container'
import { CopyrightWrapper } from './CopyrightWrapper'
import { SiteMapWrapper } from './SiteMapWrapper'
import { SocialMidiaWrapper } from './SocialMidiaWrapper'

export default function Footer() {
  return (
    <Container>
      <ScrollToTop
        height="19px"
        smooth
        color="#BF0F0F"
        top={150}
        style={{
          padding: '6px',
          borderRadius: '12px',
          fontSize: '10px',
        }}
      ></ScrollToTop>
      <section className="flex flex-col justify-center gap-12 md:flex-row md:justify-between md:gap-0">
        <KudikaLogo />

        <SiteMapWrapper>
          <h4 className="mb-6 text-2xl font-extrabold uppercase text-gray-100">
            Mapa do site
          </h4>
          <ul className="text-gray-200 flex flex-row gap-8 text-lg font-bold uppercase">
            <div className="space-y-4">
              <li className="text-lg font-bold uppercase text-white">
                A Kudika
              </li>
              <li className="text-lg font-bold uppercase text-white">
                Soluções
              </li>
              <li className="text-lg font-bold uppercase text-white">
                Orçamento
              </li>
            </div>
            <div className="space-y-4">
              <li className="text-lg font-bold uppercase text-white">Cases</li>
              <li className="text-lg font-bold uppercase text-white">
                Serviços
              </li>
              <li className="text-lg font-bold uppercase text-white">Blog</li>
            </div>
          </ul>
        </SiteMapWrapper>

        <div className="ml-8">
          <h2 className="mb-6 text-2xl font-extrabold uppercase text-gray-100">
            Contactos
          </h2>
          <div className="text-gray-200 flex flex-col gap-4">
            <div>
              <h5 className="text-lg font-bold uppercase text-white">
                Nossa sede
              </h5>
              <span className="text-base font-light text-gray-100">
                Rangel-CTTs, Ed. Digital.ao, 2º Andar
              </span>
            </div>
            <div>
              <h5 className="text-lg font-bold uppercase text-white">
                Telefone
              </h5>
              <span className="text-gray-100">
                +244 937 411 079 | 990 411 079
              </span>
            </div>
            <div>
              <h5 className="text-lg font-bold  uppercase text-white">
                E-mail
              </h5>
              <span className="text-gray-100">geral@kudikadigital.com</span>
            </div>
            <div className="space-y-3">
              <h5 className="text-lg font-bold uppercase text-white">
                Redes sociais
              </h5>

              <SocialMidiaWrapper>
                <Link 
                  href='https://www.facebook.com/kudikadigital'
                  target='_blank'
                >
                  <Image
                    src="/icons/facebook.png"
                    alt="facebook icon"
                    width={30}
                    height={30}
                  />
                </Link>

                <Link 
                  href='https://www.instagram.com/kudikadigital/'
                  target='_blank'
                >
                  <Image
                    src="/icons/instagram.png"
                    alt="instagram icon"
                    width={30}
                    height={30}
                  />
                </Link>

                <Link 
                  href='https://www.linkedin.com/company/kudikadigital/mycompany/'
                  target='_blank'
                >
                  <Image
                    src="/icons/linkedin.png"
                    alt="linkedin icon"
                    width={30}
                    height={30}
                  />
                </Link>

                <Link 
                  href='https://wa.link/al8xry'
                  target='_blank'
                >
                  <Image
                    src="/icons/whatsapp.png"
                    alt="whatsapp icon"
                    width={30}
                    height={30}
                  />
                </Link>

                <Link 
                  href='https://www.youtube.com/@bminds7865'
                  target='_blank'
                >
                  <Image
                    src="/icons/youtube.png"
                    alt="youtube icon"
                    width={30}
                    height={30}
                  />
                </Link>

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
