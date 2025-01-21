"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tag, Calendar, User, ArrowRight } from "lucide-react"
import * as S from "./styles"

const blogPosts = [
  {
    id: 1,
    title: "10 Dicas para Melhorar seu Currículo",
    excerpt: "Aprenda a destacar suas habilidades e experiências de forma eficaz em seu currículo.",
    category: "Dicas de Carreira",
    author: "Maria Silva",
    date: "2023-05-15",
    imageUrl: "/assets/imageHome/client-3.png",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Como se Preparar para uma Entrevista de Emprego",
    excerpt: "Estratégias comprovadas para se sair bem em entrevistas de emprego e conquistar a vaga dos seus sonhos.",
    category: "Entrevistas",
    author: "João Santos",
    date: "2023-05-10",
    imageUrl: "/assets/imageHome/client-3.png",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Tendências do Mercado de Trabalho em 2023",
    excerpt: "Descubra as habilidades mais procuradas e os setores em crescimento neste ano.",
    category: "Mercado de Trabalho",
    author: "Ana Oliveira",
    date: "2023-05-05",
    imageUrl: "/assets/imageHome/client-3.png",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Networking: A Chave para o Sucesso Profissional",
    excerpt: "Aprenda a construir e manter uma rede de contatos profissionais valiosa.",
    category: "Desenvolvimento Profissional",
    author: "Carlos Mendes",
    date: "2023-04-30",
    imageUrl: "/assets/imageHome/client-3.png",
    readTime: "4 min",
  },
  {
    id: 5,
    title: "Como Negociar seu Salário com Confiança",
    excerpt: "Técnicas e estratégias para negociar um salário justo e competitivo.",
    category: "Dicas de Carreira",
    author: "Fernanda Lima",
    date: "2023-04-25",
    imageUrl: "/assets/imageHome/client-3.png",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "Desenvolvendo Habilidades de Liderança",
    excerpt: "Descubra como cultivar e aprimorar suas habilidades de liderança para impulsionar sua carreira.",
    category: "Desenvolvimento Profissional",
    author: "Ricardo Souza",
    date: "2023-04-20",
    imageUrl: "/assets/imageHome/client-3.png",
    readTime: "8 min",
  },
]

const categories = ["Todas", "Dicas de Carreira", "Entrevistas", "Mercado de Trabalho", "Desenvolvimento Profissional"]

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const filteredPosts = blogPosts.filter((post) => {
    return selectedCategory === "Todas" || post.category === selectedCategory
  })

  return (
    <S.BlogContainer>
      <S.BlogHeader>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Blog de Carreira
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dicas, tendências e insights para impulsionar sua carreira
        </motion.p>
      </S.BlogHeader>

      <S.CategoryFilter>
        {categories.map((category) => (
          <S.CategoryButton
            key={category}
            onClick={() => setSelectedCategory(category)}
            $active={category === selectedCategory}
          >
            {category}
          </S.CategoryButton>
        ))}
      </S.CategoryFilter>

      <S.FeaturedPost>
        <Image
          src="/assets/imageHome/client-3.png"
          alt="Featured post"
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
        <S.FeaturedPostContent>
          <S.FeaturedPostCategory>Destaque</S.FeaturedPostCategory>
          <S.FeaturedPostTitle>Como Construir uma Carreira de Sucesso na Era Digital</S.FeaturedPostTitle>
          <S.FeaturedPostExcerpt>
            Descubra as habilidades essenciais e estratégias para prosperar no mercado de trabalho atual, dominado pela
            tecnologia e em constante evolução.
          </S.FeaturedPostExcerpt>
          <S.FeaturedPostMeta>
            <span>
              <User size={14} /> João Silva
            </span>
            <span>
              <Calendar size={14} /> 20 de Maio, 2023
            </span>
            <span>10 min de leitura</span>
          </S.FeaturedPostMeta>
          <Link href="/blog/post-destaque">
            <S.ReadMoreButton>
              Ler mais
              <ArrowRight size={16} />
            </S.ReadMoreButton>
          </Link>
        </S.FeaturedPostContent>
      </S.FeaturedPost>

      <S.BlogGrid>
        {filteredPosts.map((post) => (
          <S.BlogCard key={post.id}>
            <S.BlogCardImage>
              <Image
                src={post.imageUrl || "/assets/imageHome/client-3.png"}
                alt={post.title}
                width={300}
                height={200}
                style={{ width: "100%", height: "auto" }}
              />
              <S.BlogCardCategory>
                <Tag size={14} />
                {post.category}
              </S.BlogCardCategory>
            </S.BlogCardImage>
            <S.BlogCardContent>
              <S.BlogCardTitle>{post.title}</S.BlogCardTitle>
              <S.BlogCardExcerpt>{post.excerpt}</S.BlogCardExcerpt>
              <S.BlogCardMeta>
                <span>
                  <User size={14} /> {post.author}
                </span>
                <span>
                  <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                </span>
                <span>{post.readTime} de leitura</span>
              </S.BlogCardMeta>
              <Link href={`/blog/${post.id}`}>
                <S.ReadMoreButton>
                  Ler mais
                  <ArrowRight size={16} />
                </S.ReadMoreButton>
              </Link>
            </S.BlogCardContent>
          </S.BlogCard>
        ))}
      </S.BlogGrid>

      <S.NewsletterSection>
        <S.NewsletterContent>
          <h2>Inscreva-se em nossa Newsletter</h2>
          <p>Receba as últimas novidades e dicas de carreira diretamente na sua caixa de entrada.</p>
          <S.NewsletterForm>
            <S.NewsletterInput type="email" placeholder="Seu melhor e-mail" />
            <S.NewsletterButton>Inscrever-se</S.NewsletterButton>
          </S.NewsletterForm>
        </S.NewsletterContent>
      </S.NewsletterSection>
    </S.BlogContainer>
  )
}

export default BlogPage;

