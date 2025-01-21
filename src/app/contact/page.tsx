"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook, Clock } from 'lucide-react';
import * as S from "./styles";

const Contact: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <S.Container>
      <S.Header>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Entre em Contato
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Estamos aqui para ajudar você a impulsionar sua carreira
        </motion.p>
      </S.Header>

      <S.Content>
        <motion.div {...fadeInUp}>
          <S.Section>
            <S.SectionTitle>Informações de Contato</S.SectionTitle>
            <S.ContactInfoGrid>
              <S.ContactItem>
                <MapPin size={32} />
                <div>
                  <h3>Endereço</h3>
                  <p>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
                </div>
              </S.ContactItem>
              <S.ContactItem>
                <Phone size={32} />
                <div>
                  <h3>Telefone</h3>
                  <p>(11) 3456-7890</p>
                </div>
              </S.ContactItem>
              <S.ContactItem>
                <Mail size={32} />
                <div>
                  <h3>E-mail</h3>
                  <p>contato@recrutadorarh.com</p>
                </div>
              </S.ContactItem>
              <S.ContactItem>
                <Clock size={32} />
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 9h às 18h</p>
                </div>
              </S.ContactItem>
            </S.ContactInfoGrid>
          </S.Section>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <S.Section>
            <S.SectionTitle>Redes Sociais</S.SectionTitle>
            <S.SocialMediaLinks>
              <S.SocialMediaLink href="https://www.linkedin.com/company/recrutadorarh" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
                LinkedIn
              </S.SocialMediaLink>
              <S.SocialMediaLink href="https://www.instagram.com/recrutadorarh" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
                Instagram
              </S.SocialMediaLink>
              <S.SocialMediaLink href="https://www.facebook.com/recrutadorarh" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
                Facebook
              </S.SocialMediaLink>
            </S.SocialMediaLinks>
          </S.Section>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <S.Section>
            <S.SectionTitle>Perguntas Frequentes</S.SectionTitle>
            <S.FAQList>
              <S.FAQItem>
                <h3>Como posso agendar uma consultoria?</h3>
                <p>Você pode agendar uma consultoria através da nossa página de agendamento ou entrando em contato por telefone ou e-mail. Nossa equipe terá prazer em encontrar o melhor horário para você.</p>
              </S.FAQItem>
              <S.FAQItem>
                <h3>Quais serviços vocês oferecem?</h3>
                <p>Oferecemos uma variedade de serviços, incluindo mentoria de carreira personalizada, revisão e otimização de currículo, preparação para entrevistas, consultoria em LinkedIn e orientação para transição de carreira.</p>
              </S.FAQItem>
              <S.FAQItem>
                <h3>Vocês atendem remotamente?</h3>
                <p>Sim, oferecemos atendimento remoto para todos os nossos serviços. Utilizamos plataformas de videoconferência para garantir uma experiência de consultoria de alta qualidade, independentemente da sua localização.</p>
              </S.FAQItem>
            </S.FAQList>
          </S.Section>
        </motion.div>
      </S.Content>
    </S.Container>
  );
};

export default Contact;

