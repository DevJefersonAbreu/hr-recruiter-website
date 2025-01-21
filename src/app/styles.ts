import styled from "styled-components";
import Link from "next/link";
import { theme } from "../components/styles/treme";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
`;

export const Main = styled.main`
  flex: 1;
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 4rem;
  background: linear-gradient(-45deg, ${theme.colors.primary}, ${theme.colors.accent1}, ${theme.colors.accent2}, ${theme.colors.accent3});
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
    clip-path: none;
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.background};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${theme.colors.accent3};
  font-weight: 300;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.background};
  max-width: 600px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const HeroButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const RecruiterImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  &:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  img {
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 2rem;
    width: 200px;
    height: 200px;
  }
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${theme.colors.background};
  background-color: ${theme.colors.accent1};
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${theme.colors.accent2};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${theme.colors.accent1};
  background-color: ${theme.colors.background};
  border: 2px solid ${theme.colors.accent1};
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent1};
    color: ${theme.colors.background};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${theme.colors.primary};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${theme.colors.accent3};
    margin: 1rem auto 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const StatisticsSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 4rem 2rem;
  background-color: ${theme.colors.quaternary};
  margin-top: -5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding: 2rem 1rem;
    border-radius: 0;
  }
`;

export const StatisticItem = styled.div`
  text-align: center;
  padding: 1rem;

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: 2rem;
  }
`;

export const StatisticNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: 0.5rem;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

export const StatisticLabel = styled.div`
  font-size: 1.1rem;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

export const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.div`
  background-color: ${theme.colors.tertiary};
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
`;

export const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

export const TestimonialCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const TestimonialArrow = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${theme.colors.primary};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent1};
  }
`;

export const TestimonialItem = styled.blockquote`
  background-color: ${theme.colors.tertiary};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 0 2rem;
  text-align: center;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1.5rem;
    margin: 0 1rem;
  }
`;

export const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  color: ${theme.colors.text};
  font-size: 1.1rem;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const TestimonialAuthor = styled.footer`
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const CTASection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${theme.colors.accent1}, ${theme.colors.accent2});
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 4rem 1rem;
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
  }
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

export const ProcessSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${theme.colors.quaternary};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

export const ProcessSteps = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProcessStep = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  margin: 1rem;
  text-align: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 100%;
    margin: 1rem 0;
  }
`;

export const ProcessStepNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${theme.colors.accent1};
  margin-bottom: 1rem;
`;

export const ProcessStepContent = styled.div``;

export const ProcessStepTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const ProcessStepDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
`;

export const RecentBlogPostsSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

export const BlogPostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const BlogPostItem = styled.article`
  background-color: ${theme.colors.tertiary};
  padding: 2rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const BlogPostDate = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.text}80;
  margin-bottom: 0.5rem;
`;

export const BlogPostTitle = styled.h3`
  font-size: 1.3rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

export const BlogPostLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.accent1};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent2};
  }

  svg {
    margin-left: 0.5rem;
  }
`;

export const ViewAllBlogPostsLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 3rem;
  font-size: 1.1rem;
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent1};
  }
`;

