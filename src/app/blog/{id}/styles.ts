import styled from 'styled-components';
import { theme } from '../../../components/styles/treme';
import Link from 'next/link';

export const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary};
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: bold;
  transition: color 0.3s ease;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${theme.colors.accent1};
  }
`;

export const BlogPostHeader = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

export const BlogPostCategory = styled.span`
  background-color: ${theme.colors.accent1};
  color: ${theme.colors.background};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 1rem;
`;

export const BlogPostTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const BlogPostMeta = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: ${theme.colors.text}80;
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

export const BlogPostImage = styled.div`
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const BlogPostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.text};

  h2 {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }

  a {
    color: ${theme.colors.accent1};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ShareSection = styled.div`
  margin-top: 3rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

export const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ShareButton = styled.button`
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
`;

export const RelatedPosts = styled.section`
  margin-top: 4rem;

  h3 {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const RelatedPostCard = styled.article`
  background-color: ${theme.colors.tertiary};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

export const RelatedPostTitle = styled.h4`
  font-size: 1.1rem;
  color: ${theme.colors.primary};
  margin: 1rem;
`;

export const RelatedPostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${theme.colors.text}80;
  margin: 0 1rem 1rem;
`;

