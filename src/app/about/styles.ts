import styled from "styled-components";
import { theme } from "../../components/styles/treme";

import Link from "next/link";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
`;

export const HeroSection = styled.section`
  background: linear-gradient(-45deg, ${theme.colors.primary}, ${theme.colors.accent1}, ${theme.colors.accent2}, ${theme.colors.accent3});
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
`;

export const Main = styled.main`
  flex: 1;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.background};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.accent3};
  font-weight: 300;
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: ${theme.colors.primary};
  text-align: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent3};
    margin: 1rem auto 0;
  }
`;

export const StorySection = styled.section`
  margin-bottom: 6rem;
`;

export const StoryContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const StoryText = styled.div`
  flex: 1;
`;

export const StoryImage = styled.div`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${theme.colors.text};
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: ${theme.colors.accent2};
  }
`;

export const TimelineSection = styled.section`
  margin-bottom: 6rem;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: ${theme.colors.accent1};
  }
`;

export const TimelineItem = styled.div`
  padding: 1rem 3rem;
  position: relative;
  background: ${theme.colors.tertiary};
  border-radius: 10px;
  margin-bottom: 2rem;

  &:nth-child(odd) {
    margin-left: auto;
    &::before {
      content: '';
      position: absolute;
      top: 24px;
      left: -15px;
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 15px solid ${theme.colors.tertiary};
    }
  }

  &:nth-child(even) {
    margin-right: auto;
    &::before {
      content: '';
      position: absolute;
      top: 24px;
      right: -15px;
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 15px solid ${theme.colors.tertiary};
    }
  }
`;

export const TimelineDate = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${theme.colors.accent3};
  color: ${theme.colors.text};
  border-radius: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const TimelineContent = styled.div`
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.text};
  }
`;

export const ValuesSection = styled.section`
  margin-bottom: 6rem;
`;

export const ValuesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const ValueItem = styled.div`
  background-color: ${theme.colors.tertiary};
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, ${theme.colors.accent2}20, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

export const ValueIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

export const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary};
`;

export const ValueDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
`;

export const CTASection = styled.section`
  background-image: linear-gradient(135deg, ${theme.colors.accent1}, ${theme.colors.accent2});
  padding: 6rem 2rem;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, ${theme.colors.accent3}30, transparent 70%);
    animation: pulse 15s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${theme.colors.background};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: ${theme.colors.accent3};
  color: ${theme.colors.text};
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${theme.colors.accent4};
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

