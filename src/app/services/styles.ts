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

export const Hero = styled.section`
  background: linear-gradient(-45deg, ${theme.colors.primary}, ${theme.colors.accent1}, ${theme.colors.accent2}, ${theme.colors.accent3});
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

export const HeroContent = styled.div`
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${theme.colors.background};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${theme.colors.accent3};
  font-weight: 300;
`;

export const Main = styled.main`
  flex: 1;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const ServiceItem = styled.div`
  background-color: ${theme.colors.tertiary};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

export const ServiceFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

export const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  svg {
    color: ${theme.colors.accent1};
    margin-right: 0.5rem;
  }
`;

export const ServicePrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${theme.colors.accent1};
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

export const ServiceDuration = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${theme.colors.background};
  background-color: ${theme.colors.accent1};
  border-radius: 50px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.accent2};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ProcessSection = styled.section`
  margin-bottom: 4rem;
`;

export const ProcessSteps = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ProcessStep = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: flex-start;
`;

export const ProcessStepNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${theme.colors.accent1};
  margin-right: 1rem;
`;

export const ProcessStepContent = styled.div``;

export const ProcessStepTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary};
`;

export const ProcessStepDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
`;

export const TestimonialsSection = styled.section`
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${theme.colors.primary};
`;

export const TestimonialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const TestimonialItem = styled.blockquote`
  background-color: ${theme.colors.quaternary};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  color: ${theme.colors.text};
`;

export const TestimonialAuthor = styled.footer`
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const FAQSection = styled.section`
  margin-bottom: 4rem;
`;

export const FAQList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const FAQItem = styled.div`
  background-color: ${theme.colors.tertiary};
  border-radius: 10px;
  overflow: hidden;
`;

export const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const FAQAnswer = styled.div`
  padding: 0 1.5rem 1.5rem;
  font-size: 1rem;
  color: ${theme.colors.text};
`;

export const CTASection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.accent1}, ${theme.colors.accent2});
  padding: 4rem 2rem;
  border-radius: 20px;
  text-align: center;
`;

export const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.background};
`;

export const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.background};
`;

