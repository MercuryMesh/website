import React from "react";
import Img from "gatsby-image";
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
                  height: 200
                  width: 200
                  toFormat: PNG
                  cropFocus: ATTENTION
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

        return <Img className="profile-picture" fixed={edge.node.fixed} />;
      }}
    />
  );
};

export default ProfilePicture;
