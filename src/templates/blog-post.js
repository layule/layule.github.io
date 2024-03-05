import * as React from "react";
import { graphql } from "gatsby";

// import Bio from "../components/bio"
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostTemplate = ({ data: { previous, next, site, markdownRemark: post }, location }) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />;
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
