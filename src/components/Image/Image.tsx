/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

const ImageNotFound: React.FC = () => <div>Picture not found</div>;
const Image: React.FC<{
  relativePath: string;
  round?: boolean;
  bordered?: boolean;
}> = ({relativePath = '', round = false, bordered = false}) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  if (!data?.images?.edges) {
    return <ImageNotFound />;
  }

  const fluidImage = data.images.edges
    .filter(
      (edge: Record<string, any>) =>
        edge.node.childImageSharp.fluid.originalName === relativePath,
    )
    .reduce((acc: Record<string, any>, edge: Record<string, any>) => {
      const {originalName, ...fluidObj} = edge.node.childImageSharp.fluid;

      return fluidObj;
    }, {});

  if (!fluidImage?.src) {
    return <ImageNotFound />;
  }

  return (
    <Img
      fluid={fluidImage}
      sx={{
        borderRadius: round ? '100%' : 0,
        ...(bordered && {border: '0.625rem solid currentColor'}),
      }}
    />
  );
};

export default Image;
