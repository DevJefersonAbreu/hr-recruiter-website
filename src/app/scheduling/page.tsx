"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import * as S from "./styles"
import { services, hrProfessionals } from "./data"
import { Input, Select } from "./styles"

const formatWhatsApp = (number: string) => {
  const digits = number.replace(/\D/g, "")
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

const validateWhatsApp = (number: string) => {
  const digits = number.replace(/\D/g, "")
  return digits.length >= 10 && digits.length <= 11
}

const Agendamento: React.FC = () => {
  const [fullName, setFullName] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [selectedHRProfessional, setSelectedHRProfessional] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [whatsappError, setWhatsappError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isWhatsappTouched, setIsWhatsappTouched] = useState(false)

  useEffect(() => {
    if (isWhatsappTouched && !validateWhatsApp(whatsapp)) {
      setWhatsappError("Por favor, insira um número de WhatsApp válido")
    } else {
      setWhatsappError("")
    }
  }, [whatsapp, isWhatsappTouched])

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatWhatsApp(e.target.value)
    setWhatsapp(formattedNumber)
  }

  const handleWhatsappBlur = () => {
    setIsWhatsappTouched(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsWhatsappTouched(true)
    const newErrors: { [key: string]: string } = {}

    if (!fullName.trim()) newErrors.fullName = "Nome completo é obrigatório"
    if (!selectedService) newErrors.service = "Selecione um serviço"
    if (!selectedHRProfessional) newErrors.hrProfessional = "Selecione um profissional de RH"
    if (!whatsapp.trim()) {
      newErrors.whatsapp = "Número do WhatsApp é obrigatório"
    } else if (!validateWhatsApp(whatsapp)) {
      newErrors.whatsapp = "Por favor, insira um número de WhatsApp válido"
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Verificando disponibilidade", { fullName, selectedService, selectedHRProfessional, whatsapp })
      setIsSubmitted(true)
    } else {
      setErrors(newErrors)
    }
  }

  const isFormValid = () => {
    return !!fullName && !!selectedService && !!selectedHRProfessional && validateWhatsApp(whatsapp)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  }

  if (isSubmitted) {
    return (
      <S.Container>
        <S.Content
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <S.ThankYou>
            <h2>Solicitação Enviada!</h2>
            <p>
              Agradecemos seu interesse. Entraremos em contato via WhatsApp para confirmar sua disponibilidade de
              agendamento.
            </p>
          </S.ThankYou>
        </S.Content>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Content initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <S.Title>Agende sua Consulta de RH</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <motion.div {...fadeInUp}>
            <S.FormStep>
              <h2>Nome Completo</h2>
              <S.InputWrapper>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Digite seu nome completo"
                  required
                />
                {errors.fullName && <S.ErrorMessage>{errors.fullName}</S.ErrorMessage>}
              </S.InputWrapper>
            </S.FormStep>
          </motion.div>

          <motion.div {...fadeInUp}>
            <S.FormStep>
              <h2>Selecione o Serviço</h2>
              <S.SelectWrapper>
                <Select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
                  <option value="" disabled>
                    Escolha um serviço
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </Select>
                {errors.service && <S.ErrorMessage>{errors.service}</S.ErrorMessage>}
              </S.SelectWrapper>
            </S.FormStep>
          </motion.div>

          <motion.div {...fadeInUp}>
            <S.FormStep>
              <h2>Escolha o Profissional de RH</h2>
              <S.SelectWrapper>
                <Select
                  value={selectedHRProfessional}
                  onChange={(e) => setSelectedHRProfessional(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Escolha um profissional
                  </option>
                  {hrProfessionals.map((professional) => (
                    <option key={professional.id} value={professional.id}>
                      {professional.name}
                    </option>
                  ))}
                </Select>
                {errors.hrProfessional && <S.ErrorMessage>{errors.hrProfessional}</S.ErrorMessage>}
              </S.SelectWrapper>
            </S.FormStep>
          </motion.div>

          <motion.div {...fadeInUp}>
            <S.FormStep>
              <h2>Seu WhatsApp</h2>
              <S.InputWrapper>
                <Input
                  type="tel"
                  value={whatsapp}
                  onChange={handleWhatsappChange}
                  onBlur={handleWhatsappBlur}
                  placeholder="(DD) XXXXX-XXXX"
                  required
                />
                {isWhatsappTouched && whatsappError && <S.ErrorMessage>{whatsappError}</S.ErrorMessage>}
              </S.InputWrapper>
            </S.FormStep>
          </motion.div>

          <S.SubmitButton>
            <button type="submit" disabled={!isFormValid()}>
              Ver Disponibilidade de Agendamento
            </button>
          </S.SubmitButton>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}

export default Agendamento;

