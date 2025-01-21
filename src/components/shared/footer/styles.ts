import styled from "styled-components";
import { theme } from "../../styles/treme";

export const Footer = styled.footer`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.background};
  padding: 2rem 0;
  margin-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${theme.colors.accent3};
`;

export const Text = styled.p`
  margin-bottom: 0.5rem;
`;

export const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const Link = styled.a`
  color: ${theme.colors.background};
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${theme.colors.accent3};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: ${theme.colors.background};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.accent3};
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${theme.colors.tertiary};
`;

