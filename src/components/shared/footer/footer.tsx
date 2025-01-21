"use client";
import React from "react";
import Link from "next/link";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.Content>
        <S.Column>
          <S.Title>Recrutadora RH</S.Title>
          <S.Text>Transformando carreiras, conectando talentos</S.Text>
        </S.Column>
        <S.Column>
          <S.Title>Links Rápidos</S.Title>
          <S.LinkGrid>
            <Link href="/" passHref><S.Link>Início</S.Link></Link>
            <Link href="/sobre" passHref><S.Link>Sobre</S.Link></Link>
            <Link href="/servicos" passHref><S.Link>Serviços</S.Link></Link>
            <Link href="/contato" passHref><S.Link>Contato</S.Link></Link>
          </S.LinkGrid>
        </S.Column>
        <S.Column>
          <S.Title>Contato</S.Title>
          <S.Text>Email: contato@recrutadorarh.com</S.Text>
          <S.Text>Telefone: (11) 1234-5678</S.Text>
        </S.Column>
        <S.Column>
          <S.Title>Redes Sociais</S.Title>
          <S.SocialLinks>
            <S.SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</S.SocialLink>
            <S.SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</S.SocialLink>
          </S.SocialLinks>
        </S.Column>
      </S.Content>
      <S.Copyright>© 2023 Recrutadora RH. Todos os direitos reservados.</S.Copyright>
    </S.Footer>
  );
};

export default Footer;

