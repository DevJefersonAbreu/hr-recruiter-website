import styled from "styled-components";
import { theme } from "../../styles/treme";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  position: relative;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.background};
  text-decoration: none;

  &:hover,
  &:focus,
  &:visited {
    text-decoration: none;
    color: ${theme.colors.background}; /* Garante consistência */
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.background};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 1rem;
  text-decoration: none;

  @media (max-width: ${theme.breakpoints.md}) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${theme.colors.primary};
    padding: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: ${theme.colors.background};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover,
  &:focus,
  &:visited {
    text-decoration: none;
    color: ${theme.colors.accent3}; 
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0.5rem 0;
  }
`;
