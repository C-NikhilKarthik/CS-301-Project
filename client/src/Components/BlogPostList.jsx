import React from 'react';
import { Link } from 'react-router-dom';
import { useStaticQuery, graphql } from 'gatsby';

const BlogPostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      {posts.map(({ node }) => (
        <div key={node.fields.slug}>
          <Link to={`/post/${node.fields.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
