"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import * as S from "./styles";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Header>
      <Link href="/" passHref>
        <S.Logo>Recrutadora RH</S.Logo>
      </Link>
      <S.MenuToggle onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </S.MenuToggle>
      <S.Nav $isOpen={isMenuOpen}>
        <Link href="/" passHref><S.NavItem onClick={() => setIsMenuOpen(false)}>Início</S.NavItem></Link>
        <Link href="/sobre" passHref><S.NavItem onClick={() => setIsMenuOpen(false)}>Sobre</S.NavItem></Link>
        <Link href="/servicos" passHref><S.NavItem onClick={() => setIsMenuOpen(false)}>Serviços</S.NavItem></Link>
        <Link href="/agendamento" passHref><S.NavItem onClick={() => setIsMenuOpen(false)}>Agendamento</S.NavItem></Link>
        <Link href="/blog" passHref><S.NavItem onClick={() => setIsMenuOpen(false)}>Blog</S.NavItem></Link>
        <Link href="/contato" passHref><S.NavItem onClick={() => setIsMenuOpen(false)}>Contato</S.NavItem></Link>
      </S.Nav>
    </S.Header>
  );
};

export default Header;

