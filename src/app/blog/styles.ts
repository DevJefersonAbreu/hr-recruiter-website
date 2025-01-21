import styled from "styled-components"
import { theme } from "../../components/styles/treme"


export const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

export const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent1});
  padding: 4rem 2rem;
  border-radius: 15px;
  color: ${theme.colors.background};

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.3rem;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.9;
  }
`

export const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const CategoryButton = styled.button<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.tertiary)};
  color: ${({ $active }) => ($active ? theme.colors.background : theme.colors.text)};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? theme.colors.primary : theme.colors.quaternary)};
    transform: translateY(-2px);
  }
`

export const FeaturedPost = styled.div`
  position: relative;
  margin-bottom: 3rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export const FeaturedPostContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: ${theme.colors.background};
`

export const FeaturedPostCategory = styled.span`
  background-color: ${theme.colors.accent1};
  color: ${theme.colors.background};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: inline-block;
`

export const FeaturedPostTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const FeaturedPostExcerpt = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`

export const FeaturedPostMeta = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`

export const ReadMoreButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  border-radius: 25px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${theme.colors.accent1};
    transform: translateY(-2px);
  }
`

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

export const BlogCard = styled.article`
  background-color: ${theme.colors.tertiary};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`

export const BlogCardImage = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`

export const BlogCardCategory = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${theme.colors.accent1};
  color: ${theme.colors.background};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const BlogCardContent = styled.div`
  padding: 1.5rem;
`

export const BlogCardTitle = styled.h3`
  font-size: 1.3rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`

export const BlogCardExcerpt = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`

export const BlogCardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.8rem;
  color: ${theme.colors.text}80;
  margin-bottom: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`

export const NewsletterSection = styled.section`
  margin-top: 4rem;
  background-color: ${theme.colors.quaternary};
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
`

export const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: ${theme.colors.text};
    margin-bottom: 1.5rem;
  }
`

export const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const NewsletterInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid ${theme.colors.tertiary};
  border-radius: 25px;
  font-size: 1rem;
  flex-grow: 1;
  max-width: 300px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`

export const NewsletterButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  border-radius: 25px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent1};
    transform: translateY(-2px);
  }
`
;