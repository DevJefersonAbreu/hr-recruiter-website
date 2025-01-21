"use client"
import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import * as S from "./styles"

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <S.Container>
      <S.HeroSection>
        <S.HeroContent>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
            <S.Title>Sobre a Recrutadora RH</S.Title>
            <S.Subtitle>Transformando Carreiras, Conectando Talentos</S.Subtitle>
          </motion.div>
        </S.HeroContent>
      </S.HeroSection>

      <S.Main>
        <S.StorySection>
          <S.SectionTitle>Nossa História</S.SectionTitle>
          <S.StoryContent>
            <S.StoryText>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <S.Paragraph>
                  A Recrutadora RH nasceu da paixão por conectar pessoas e oportunidades. Fundada em 2010 por Ana Silva,
                  uma profissional com mais de 15 anos de experiência em recursos humanos, nossa empresa se dedica a
                  transformar a vida profissional de nossos clientes.
                </S.Paragraph>
                <S.Paragraph>
                  Nossa missão é ser a ponte entre talentos excepcionais e empresas visionárias, criando conexões que
                  impulsionam carreiras e negócios. Acreditamos que cada pessoa tem um potencial único, e estamos aqui
                  para ajudá-la a descobrir e desenvolver esse potencial.
                </S.Paragraph>
              </motion.div>
            </S.StoryText>
            <S.StoryImage>
              <Image
                src="/assets/imageHome/client-3.png"
                alt="Equipe Recrutadora RH"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </S.StoryImage>
          </S.StoryContent>
        </S.StorySection>

        <S.TimelineSection>
          <S.SectionTitle>Nossa Jornada</S.SectionTitle>
          <S.Timeline>
            <S.TimelineItem>
              <S.TimelineDate>2010</S.TimelineDate>
              <S.TimelineContent>
                <h3>Fundação da Recrutadora RH</h3>
                <p>Ana Silva inicia a empresa com a visão de transformar o mercado de RH.</p>
              </S.TimelineContent>
            </S.TimelineItem>
            <S.TimelineItem>
              <S.TimelineDate>2015</S.TimelineDate>
              <S.TimelineContent>
                <h3>Expansão Nacional</h3>
                <p>A Recrutadora RH se torna referência em todo o país.</p>
              </S.TimelineContent>
            </S.TimelineItem>
            <S.TimelineItem>
              <S.TimelineDate>2020</S.TimelineDate>
              <S.TimelineContent>
                <h3>Inovação Digital</h3>
                <p>Lançamento de plataformas online para melhor atender nossos clientes.</p>
              </S.TimelineContent>
            </S.TimelineItem>
            <S.TimelineItem>
              <S.TimelineDate>Hoje</S.TimelineDate>
              <S.TimelineContent>
                <h3>Liderança no Mercado</h3>
                <p>Continuamos a inovar e liderar o setor de recrutamento e RH.</p>
              </S.TimelineContent>
            </S.TimelineItem>
          </S.Timeline>
        </S.TimelineSection>

        <S.ValuesSection>
          <S.SectionTitle>Nossos Valores</S.SectionTitle>
          <S.ValuesList>
            {[
              { icon: "🎯", title: "Excelência", description: "Buscamos a excelência em tudo o que fazemos" },
              { icon: "🤝", title: "Empatia", description: "Colocamos as pessoas em primeiro lugar" },
              { icon: "💡", title: "Inovação", description: "Estamos sempre em busca de novas soluções" },
              { icon: "🌱", title: "Crescimento", description: "Incentivamos o desenvolvimento contínuo" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <S.ValueItem>
                  <S.ValueIcon>{value.icon}</S.ValueIcon>
                  <S.ValueTitle>{value.title}</S.ValueTitle>
                  <S.ValueDescription>{value.description}</S.ValueDescription>
                </S.ValueItem>
              </motion.div>
            ))}
          </S.ValuesList>
        </S.ValuesSection>

        <S.CTASection>
          <S.CTAContent>
            <S.CTATitle>Pronto para Transformar sua Carreira?</S.CTATitle>
            <S.CTAButton href="/contato">Entre em Contato</S.CTAButton>
          </S.CTAContent>
        </S.CTASection>
      </S.Main>
    </S.Container>
  )
}

export default About;

