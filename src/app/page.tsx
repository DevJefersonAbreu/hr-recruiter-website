"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Users, FileText, Award } from "lucide-react"
import * as S from "./styles"
import ClientSideOnly from "../components/clientSideOnly"

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "A mentoria foi fundamental para minha mudança de carreira. Recomendo!",
      author: "Maria S.",
      role: "Gerente de Projetos",
    },
    {
      text: "Graças à consultoria, consegui meu emprego dos sonhos. Obrigado!",
      author: "João P.",
      role: "Desenvolvedor Senior",
    },
    {
      text: "A simulação de entrevista me deu confiança para conquistar a vaga.",
      author: "Ana R.",
      role: "Analista de Marketing",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const recentBlogPosts = [
    { title: "10 Dicas para um Currículo Impactante", date: "2023-05-15", slug: "10-dicas-curriculo-impactante" },
    { title: "Como se Preparar para Entrevistas Online", date: "2023-05-10", slug: "preparacao-entrevistas-online" },
    {
      title: "Tendências do Mercado de Trabalho em 2023",
      date: "2023-05-05",
      slug: "tendencias-mercado-trabalho-2023",
    },
  ]

  return (
    <S.Container>
      <S.Main>
        <S.Hero>
          <S.HeroContent>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <S.Title>Transforme Sua Carreira com a Recrutadora RH</S.Title>
              <S.Subtitle>Conectando Talentos, Impulsionando Futuros</S.Subtitle>
              <S.HeroDescription>
                Somos especialistas em recrutamento e desenvolvimento de carreira, oferecendo soluções personalizadas
                para profissionais e empresas. Nossa missão é potencializar talentos e conectar as pessoas certas às
                oportunidades ideais.
              </S.HeroDescription>
              <S.HeroButtonGroup>
                <S.CTAButton as={Link} href="/agendamento">
                  Agende uma Mentoria
                </S.CTAButton>
                <S.SecondaryButton as={Link} href="/servicos">
                  Nossos Serviços
                </S.SecondaryButton>
              </S.HeroButtonGroup>
            </motion.div>
          </S.HeroContent>
          <S.RecruiterImageWrapper>
            <Image
              src="/assets/imageHome/client-3.png"
              alt="Ana Silva - Recrutadora RH"
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </S.RecruiterImageWrapper>
        </S.Hero>

        <S.StatisticsSection>
          <S.StatisticItem>
            <S.StatisticNumber>500+</S.StatisticNumber>
            <S.StatisticLabel>Carreiras Impulsionadas</S.StatisticLabel>
          </S.StatisticItem>
          <S.StatisticItem>
            <S.StatisticNumber>98%</S.StatisticNumber>
            <S.StatisticLabel>Taxa de Satisfação</S.StatisticLabel>
          </S.StatisticItem>
          <S.StatisticItem>
            <S.StatisticNumber>10+</S.StatisticNumber>
            <S.StatisticLabel>Anos de Experiência</S.StatisticLabel>
          </S.StatisticItem>
        </S.StatisticsSection>

        <S.FeaturesSection>
          <S.SectionTitle>Nossos Serviços Especializados</S.SectionTitle>
          <S.FeaturesList>
            {[
              {
                icon: <Users size={40} />,
                title: "Mentorias Personalizadas",
                description: "Orientação individualizada para impulsionar sua carreira.",
              },
              {
                icon: <FileText size={40} />,
                title: "Revisão de Currículo",
                description: "Otimize seu currículo para destacar-se no mercado.",
              },
              {
                icon: <Award size={40} />,
                title: "Consultoria para LinkedIn",
                description: "Aprimore seu perfil profissional online.",
              },
              {
                icon: <Calendar size={40} />,
                title: "Simulação de Entrevistas",
                description: "Prepare-se para entrevistas com feedback especializado.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <S.FeatureItem>
                  <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
                  <S.FeatureTitle>{feature.title}</S.FeatureTitle>
                  <S.FeatureDescription>{feature.description}</S.FeatureDescription>
                </S.FeatureItem>
              </motion.div>
            ))}
          </S.FeaturesList>
        </S.FeaturesSection>

        <S.ProcessSection>
          <S.SectionTitle>Como Trabalhamos</S.SectionTitle>
          <S.ProcessSteps>
            {[
              {
                number: "01",
                title: "Avaliação Inicial",
                description: "Entendemos suas metas e desafios profissionais.",
              },
              {
                number: "02",
                title: "Plano Personalizado",
                description: "Desenvolvemos uma estratégia sob medida para você.",
              },
              { number: "03", title: "Implementação", description: "Colocamos o plano em ação com suporte contínuo." },
              {
                number: "04",
                title: "Acompanhamento",
                description: "Monitoramos seu progresso e ajustamos conforme necessário.",
              },
            ].map((step, index) => (
              <S.ProcessStep key={index}>
                <S.ProcessStepNumber>{step.number}</S.ProcessStepNumber>
                <S.ProcessStepContent>
                  <S.ProcessStepTitle>{step.title}</S.ProcessStepTitle>
                  <S.ProcessStepDescription>{step.description}</S.ProcessStepDescription>
                </S.ProcessStepContent>
              </S.ProcessStep>
            ))}
          </S.ProcessSteps>
        </S.ProcessSection>

        <S.TestimonialsSection>
          <S.SectionTitle>O Que Nossos Clientes Dizem</S.SectionTitle>
          <S.TestimonialCarousel>
            <S.TestimonialArrow onClick={prevTestimonial}>
              <ChevronLeft size={24} />
            </S.TestimonialArrow>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <S.TestimonialItem>
                  <S.TestimonialText>{testimonials[currentTestimonial].text}</S.TestimonialText>
                  <S.TestimonialAuthor>
                    - {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].role}
                  </S.TestimonialAuthor>
                </S.TestimonialItem>
              </motion.div>
            </AnimatePresence>
            <S.TestimonialArrow onClick={nextTestimonial}>
              <ChevronRight size={24} />
            </S.TestimonialArrow>
          </S.TestimonialCarousel>
        </S.TestimonialsSection>

        <S.RecentBlogPostsSection>
          <S.SectionTitle>Artigos Recentes</S.SectionTitle>
          <S.BlogPostsList>
            {recentBlogPosts.map((post, index) => (
              <S.BlogPostItem key={index}>
                <S.BlogPostDate>
                  {new Date(post.date).toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
                </S.BlogPostDate>
                <S.BlogPostTitle>{post.title}</S.BlogPostTitle>
                <S.BlogPostLink href={`/blog/${post.slug}`}>
                  Ler mais <ArrowRight size={16} />
                </S.BlogPostLink>
              </S.BlogPostItem>
            ))}
          </S.BlogPostsList>
          <S.ViewAllBlogPostsLink href="/blog">Ver todos os artigos</S.ViewAllBlogPostsLink>
        </S.RecentBlogPostsSection>

        <ClientSideOnly>
          {/* Place any client-side only code here */}
          <S.CTASection>
            <S.CTAContent>
              <S.CTATitle>Pronto para Dar o Próximo Passo na Sua Carreira?</S.CTATitle>
              <S.CTADescription>
                Agende uma consulta gratuita e descubra como podemos ajudar você a alcançar seus objetivos
                profissionais.
              </S.CTADescription>
              <S.CTAButton as={Link} href="/agendamento">
                Agende Agora
              </S.CTAButton>
            </S.CTAContent>
          </S.CTASection>
        </ClientSideOnly>
      </S.Main>
    </S.Container>
  )
}

export default Home;

