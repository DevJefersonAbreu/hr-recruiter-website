"use client"

import type React from "react"
import Image from "next/image"
import { ArrowLeft, Calendar, User,  Clock, Facebook, Twitter, Linkedin } from "lucide-react"
import * as S from "./styles"

const blogPost = {
  id: 1,
  title: "10 Dicas para Melhorar seu Currículo",
  content: `
    <p>Um currículo bem elaborado é a sua primeira impressão para potenciais empregadores. É crucial que ele destaque suas habilidades, experiências e conquistas de maneira clara e eficaz. Aqui estão 10 dicas para ajudar você a criar um currículo que se destaque:</p>

    <h2>1. Personalize seu currículo para cada vaga</h2>
    <p>Adapte seu currículo para cada posição que você se candidata, enfatizando as habilidades e experiências mais relevantes para aquela vaga específica.</p>

    <h2>2. Use palavras-chave relevantes</h2>
    <p>Muitas empresas usam sistemas de rastreamento de candidatos (ATS) para filtrar currículos. Inclua palavras-chave da descrição da vaga para aumentar suas chances de passar por esses filtros.</p>

    <h2>3. Destaque suas realizações</h2>
    <p>Em vez de apenas listar suas responsabilidades, foque em suas conquistas. Use números e métricas sempre que possível para quantificar seus resultados.</p>

    <h2>4. Mantenha-o conciso e relevante</h2>
    <p>Seu currículo deve ter no máximo duas páginas. Priorize as informações mais relevantes e recentes.</p>

    <h2>5. Use um design limpo e profissional</h2>
    <p>Opte por um layout claro e fácil de ler. Use fontes legíveis e mantenha uma formatação consistente em todo o documento.</p>

    <h2>6. Inclua um resumo ou objetivo profissional</h2>
    <p>No topo do seu currículo, adicione um breve resumo ou objetivo que destaque suas principais qualificações e o que você busca em sua carreira.</p>

    <h2>7. Utilize verbos de ação</h2>
    <p>Comece cada item de experiência com verbos fortes como "liderou", "implementou", "desenvolveu" para dar mais impacto às suas realizações.</p>

    <h2>8. Inclua habilidades relevantes</h2>
    <p>Liste habilidades técnicas e interpessoais que sejam relevantes para a posição desejada. Certifique-se de incluir tanto habilidades hard quanto soft.</p>

    <h2>9. Preste atenção à ordem das informações</h2>
    <p>Coloque as informações mais importantes e relevantes no topo do seu currículo. Para a maioria dos profissionais, isso significa listar a experiência de trabalho antes da educação.</p>

    <h2>10. Revise e peça feedback</h2>
    <p>Sempre revise seu currículo para erros de ortografia e gramática. Peça a amigos, familiares ou mentores para revisarem e fornecerem feedback.</p>

    <p>Lembre-se, seu currículo é uma ferramenta de marketing pessoal. Ele deve apresentar você da melhor maneira possível e convencer o empregador de que você é o candidato ideal para a posição. Com essas dicas, você estará no caminho certo para criar um currículo impressionante que chamará a atenção dos recrutadores.</p>
  `,
  category: "Dicas de Carreira",
  author: "Maria Silva",
  date: "2023-05-15",
  readTime: "5 min",
  imageUrl: "/assets/imageHome/client-3.png",
}

const BlogPostPage: React.FC = () => {
  return (
    <S.BlogPostContainer>
      <S.BackLink href="/blog">
        <ArrowLeft size={20} />
        Voltar para o Blog
      </S.BackLink>
      <S.BlogPostHeader>
        <S.BlogPostCategory>{blogPost.category}</S.BlogPostCategory>
        <S.BlogPostTitle>{blogPost.title}</S.BlogPostTitle>
        <S.BlogPostMeta>
          <S.MetaItem>
            <User size={16} />
            {blogPost.author}
          </S.MetaItem>
          <S.MetaItem>
            <Calendar size={16} />
            {new Date(blogPost.date).toLocaleDateString()}
          </S.MetaItem>
          <S.MetaItem>
            <Clock size={16} />
            {blogPost.readTime} de leitura
          </S.MetaItem>
        </S.BlogPostMeta>
      </S.BlogPostHeader>
      <S.BlogPostImage>
        <Image
          src={blogPost.imageUrl || "/assets/imageHome/client-3.png"}
          alt={blogPost.title}
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </S.BlogPostImage>
      <S.BlogPostContent dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      <S.ShareSection>
        <h3>Compartilhe este artigo</h3>
        <S.ShareButtons>
          <S.ShareButton>
            <Facebook size={20} />
            Facebook
          </S.ShareButton>
          <S.ShareButton>
            <Twitter size={20} />
            Twitter
          </S.ShareButton>
          <S.ShareButton>
            <Linkedin size={20} />
            LinkedIn
          </S.ShareButton>
        </S.ShareButtons>
      </S.ShareSection>
      <S.RelatedPosts>
        <h3>Artigos Relacionados</h3>
        <S.RelatedPostsGrid>
          {[1, 2, 3].map((id) => (
            <S.RelatedPostCard key={id}>
              <Image
                src="/assets/imageHome/client-3.png"
                alt="Related post"
                width={250}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <S.RelatedPostTitle>Título do Artigo Relacionado {id}</S.RelatedPostTitle>
              <S.RelatedPostMeta>
                <span>Autor</span>
                <span>Data</span>
              </S.RelatedPostMeta>
            </S.RelatedPostCard>
          ))}
        </S.RelatedPostsGrid>
      </S.RelatedPosts>
    </S.BlogPostContainer>
  )
}

export default BlogPostPage;

