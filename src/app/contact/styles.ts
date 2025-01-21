import styled, { keyframes } from "styled-components";
import { theme } from "../../components/styles/treme";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
`;

export const Header = styled.header`
  background: linear-gradient(-45deg, ${theme.colors.primary}, ${theme.colors.accent1}, ${theme.colors.accent2}, ${theme.colors.accent3});
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: ${theme.colors.background};
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%);
    animation: pulse 15s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  p {
    font-size: 1.3rem;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    gap: 4rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  background-color: ${theme.colors.tertiary};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  position: relative;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent1};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: ${theme.colors.background};
  border-radius: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  svg {
    color: ${theme.colors.accent1};
    margin-right: 1rem;
    font-size: 2rem;
    flex-shrink: 0;
  }

  div {
    flex-grow: 1;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.primary};
  }

  p {
    font-size: 1rem;
    color: ${theme.colors.text};
    line-height: 1.4;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.background};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 1rem 1.5rem;
  background-color: ${theme.colors.primary};
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${theme.colors.accent1};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const FAQList = styled.div`
  display: grid;
  gap: 2rem;
`;

export const FAQItem = styled.div`
  background-color: ${theme.colors.background};
  padding: 2rem;
  border-radius: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.3rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: ${theme.colors.text};
    line-height: 1.6;
  }
`;

