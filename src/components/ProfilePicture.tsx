import React from "react";
import Img from "gatsby-image";
import { Image } from "semantic-ui-react";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";

type Props = {
  fileName: String;
};
const ProfilePicture = ({ fileName }: Props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fixed(
                  height: 375
                  toFormat: PNG
                  cropFocus: ATTENTION
                  fit: CONTAIN
                ) {
                  originalName
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      `}
      render={data => {
        const edge: any = (data.allImageSharp.edges as any[]).find(
          (e: any) => e.node.fixed.originalName === fileName
        );
        if (!edge) {
          return null;
        }

        return (
          <Image
            as={Img}
            className="profile-picture-x"
            fixed={edge.node.fixed}
          />
        );
      }}
    />
  );
};

export default ProfilePicture;
