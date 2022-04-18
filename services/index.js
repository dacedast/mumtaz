import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            slug
            title
            content
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            price
            videoUrl
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        slug
        title
        price
        videoUrl
        content
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          node {
            slug
            title
            price
            content
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.postsConnection.edges;
};

export const getLunchMenu = async () => {
  const query = gql`
    query GetLunchMenu {
      lunchMenus {
        priceLunch
        lunchImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.lunchMenus;
};
export const getGallery = async () => {
  const query = gql`
    query GetGallery {
      galleries {
        photos {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.galleries;
};
