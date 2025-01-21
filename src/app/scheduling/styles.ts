import styled from "styled-components"
import { motion } from "framer-motion"
import { theme } from "../../components/styles/treme"

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, ${theme.colors.background}, ${theme.colors.quaternary});
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

export const Content = styled(motion.div)`
  background-color: ${theme.colors.tertiary};
  border-radius: 20px;
  padding: 1.25rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

export const Title = styled.h1`
  font-size: 1.75rem;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 1.25rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`

export const FormStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.25rem;
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    gap: 1rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  }
`

export const InputWrapper = styled.div`
  margin-bottom: 0.75rem;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
  }

  @media (max-width: 767px) {
    font-size: 16px; // Prevents zoom on iOS
  }
`

export const SelectWrapper = styled(InputWrapper)``

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 1em auto;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  @media (max-width: 767px) {
    font-size: 16px; // Prevents zoom on iOS
  }
`

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }

  button {
    background-color: ${theme.colors.primary};
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    @media (min-width: 768px) {
      width: auto;
    }
  }
`

export const ThankYou = styled.div`
  text-align: center;

  h2 {
    font-size: 1.75rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${theme.colors.text};
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`

export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`



