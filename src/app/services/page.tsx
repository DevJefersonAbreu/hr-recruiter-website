"use client"

import React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Clock, DollarSign, Users, Briefcase, Award, ChevronDown, ChevronUp } from "lucide-react"
import * as S from "./styles"

const Services: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const services = [
    {
      icon: <Users size={40} />,
      title: "Mentorias Personalizadas",
      description:
        "Sessões individuais para orientar sua carreira, definir metas e criar estratégias para alcançá-las.",
      features: ["Plano de carreira personalizado", "Feedback contínuo", "Acompanhamento mensal"],
      price: "A partir de R$ 300,00 por sessão",
      duration: "Duração: 1 hora por sessão",
      link: "/agendamento?service=mentoria",
    },
    {
      icon: <Image src="/placeholder.svg" alt="Ícone de Revisão de Currículo" width={40} height={40} />,
      title: "Revisão de Currículo",
      description: "Análise detalhada e otimização do seu currículo para destacar suas habilidades e experiências.",
      features: ["Formatação profissional", "Destaque de competências-chave", "Otimização para ATS"],
      price: "R$ 250,00",
      duration: "Entrega em até 5 dias úteis",
      link: "/agendamento?service=curriculo",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Consultoria para LinkedIn",
      description:
        "Otimização do seu perfil no LinkedIn para aumentar sua visibilidade profissional e atrair recrutadores.",
      features: ["Otimização de palavras-chave", "Criação de resumo impactante", "Estratégias de networking"],
      price: "R$ 350,00",
      duration: "Inclui 1 sessão de 1 hora + otimização",
      link: "/agendamento?service=linkedin",
    },
    {
      icon: <Award size={40} />,
      title: "Simulação de Entrevistas",
      description:
        "Prepare-se para entrevistas reais com simulações e feedback detalhado para melhorar seu desempenho.",
      features: ["Simulação personalizada", "Feedback detalhado", "Dicas de linguagem corporal"],
      price: "R$ 400,00 por sessão",
      duration: "Duração: 1,5 horas por sessão",
      link: "/agendamento?service=entrevista",
    },
  ]

  const testimonials = [
    {
      text: "A mentoria transformou minha carreira. Recomendo fortemente!",
      author: "Maria S., Gerente de Projetos",
    },
    {
      text: "A revisão do meu currículo me ajudou a conseguir mais entrevistas.",
      author: "João P., Desenvolvedor Senior",
    },
    {
      text: "A simulação de entrevista foi fundamental para minha preparação.",
      author: "Ana R., Analista de Marketing",
    },
  ]

  const faqs = [
    {
      question: "Como funciona o processo de agendamento?",
      answer:
        "Após escolher o serviço desejado, você será direcionado para nossa página de agendamento, onde poderá selecionar a data e horário que melhor se adequam à sua agenda. Você receberá uma confirmação por e-mail com os detalhes da sua sessão.",
    },
    {
      question: "Qual é a política de cancelamento?",
      answer:
        "Cancelamentos podem ser feitos até 24 horas antes do horário agendado sem custo. Cancelamentos com menos de 24 horas de antecedência estão sujeitos a uma taxa de 50% do valor do serviço. Em caso de emergências, entre em contato conosco para discutir opções.",
    },
    {
      question: "Os serviços são oferecidos online ou presencialmente?",
      answer:
        "Oferecemos ambas as opções. As sessões online são realizadas via videoconferência, enquanto as sessões presenciais ocorrem em nosso escritório em São Paulo. Durante o agendamento, você poderá escolher a modalidade que preferir.",
    },
    {
      question: "Quanto tempo leva para receber a revisão do currículo?",
      answer:
        "Normalmente, entregamos a revisão do currículo em até 5 dias úteis após o recebimento de todas as informações necessárias. Para pedidos urgentes, oferecemos um serviço expresso com entrega em 48 horas, mediante uma taxa adicional.",
    },
    {
      question: "Vocês oferecem pacotes de serviços com desconto?",
      answer:
        "Sim, oferecemos pacotes personalizados que combinam diferentes serviços com descontos especiais. Por exemplo, você pode optar por um pacote que inclua revisão de currículo, otimização de LinkedIn e uma sessão de simulação de entrevista. Entre em contato conosco para discutir as opções disponíveis.",
    },
  ]

  return (
    <S.Container>
      <S.Hero>
        <S.HeroContent>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
            <S.Title>Nossos Serviços</S.Title>
            <S.Subtitle>Soluções personalizadas para impulsionar sua carreira</S.Subtitle>
          </motion.div>
        </S.HeroContent>
      </S.Hero>

      <S.Main>
        <S.ServicesList>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <S.ServiceItem>
                <S.ServiceIcon>{service.icon}</S.ServiceIcon>
                <S.ServiceTitle>{service.title}</S.ServiceTitle>
                <S.ServiceDescription>{service.description}</S.ServiceDescription>
                <S.ServiceFeatures>
                  {service.features.map((feature, featureIndex) => (
                    <S.ServiceFeature key={featureIndex}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </S.ServiceFeature>
                  ))}
                </S.ServiceFeatures>
                <S.ServicePrice>
                  <DollarSign size={20} />
                  <span>{service.price}</span>
                </S.ServicePrice>
                <S.ServiceDuration>
                  <Clock size={16} />
                  <span>{service.duration}</span>
                </S.ServiceDuration>
                <S.CTAButton href={service.link}>Agendar {service.title}</S.CTAButton>
              </S.ServiceItem>
            </motion.div>
          ))}
        </S.ServicesList>

        <S.ProcessSection>
          <S.SectionTitle>Nosso Processo</S.SectionTitle>
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
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <S.ProcessStep>
                  <S.ProcessStepNumber>{step.number}</S.ProcessStepNumber>
                  <S.ProcessStepContent>
                    <S.ProcessStepTitle>{step.title}</S.ProcessStepTitle>
                    <S.ProcessStepDescription>{step.description}</S.ProcessStepDescription>
                  </S.ProcessStepContent>
                </S.ProcessStep>
              </motion.div>
            ))}
          </S.ProcessSteps>
        </S.ProcessSection>

        <S.TestimonialsSection>
          <S.SectionTitle>O que nossos clientes dizem</S.SectionTitle>
          <S.TestimonialsList>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <S.TestimonialItem>
                  <S.TestimonialText>{testimonial.text}</S.TestimonialText>
                  <S.TestimonialAuthor>- {testimonial.author}</S.TestimonialAuthor>
                </S.TestimonialItem>
              </motion.div>
            ))}
          </S.TestimonialsList>
        </S.TestimonialsSection>

        <S.FAQSection>
          <S.SectionTitle>Perguntas Frequentes</S.SectionTitle>
          <S.FAQList>
            {faqs.map((faq, index) => (
              <S.FAQItem key={index}>
                <S.FAQQuestion onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}>
                  {faq.question}
                  {expandedFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </S.FAQQuestion>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <S.FAQAnswer>{faq.answer}</S.FAQAnswer>
                    </motion.div>
                  )}
                </AnimatePresence>
              </S.FAQItem>
            ))}
          </S.FAQList>
        </S.FAQSection>

        <S.CTASection>
          <S.CTAContent>
            <S.CTATitle>Pronto para impulsionar sua carreira?</S.CTATitle>
            <S.CTADescription>
              Escolha o serviço que melhor atende às suas necessidades e dê o próximo passo em direção ao sucesso
              profissional.
            </S.CTADescription>
            <S.CTAButton href="/agendamento">Agende uma Consulta Gratuita</S.CTAButton>
          </S.CTAContent>
        </S.CTASection>
      </S.Main>
    </S.Container>
  )
}

export default Services;

