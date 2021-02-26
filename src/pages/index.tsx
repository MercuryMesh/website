import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";
import ProfilePicture from "../components/ProfilePicture";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header inverted as="h1">
          MercuryMesh
        </Header>
        <Header inverted as="h2">
          Connecting autonomous vehicles and driving the future
        </Header>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              laudantium ad, quae, perspiciatis ipsa distinctio.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed="very"
        stackable
        className="container"
      >
        <Grid.Row>
          <Header as="h3">Team Members</Header>
        </Grid.Row>
        <br />
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <ProfilePicture fileName="ben.png" />
              <br />
              Benjamin Wadsworth
            </Header>
            <p>
              Benjamin is a Computer Engineering and Mechanical Engineering
              student at the University of Utah, with coursework in embedded
              systems, logic design, robotics, and control. As a research and
              development intern at APCO Inc, he was the primary developer
              creating experimental human machine interfaces for industrial use.
              He is working on initial Local Positioning System chip
              architecture and design.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <ProfilePicture fileName="dalton.jpg" />
              <br />
              Dalton Clift
            </Header>
            <p>
              Dalton is an IT specialist working at the University of Utah in
              the Web Automation Development group. He is also a student,
              majoring in computer engineering, with a minor in business. He has
              worked in the computer industry field for most of his life,
              working as a freelance technician since he was 15 years old, and
              starting a company at 17. His interests are focused on data center
              administration, server management relating to big data, and high
              performance computing. Currently, he is working on the development
              of our prototype autonomous bots.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <ProfilePicture fileName="sam.jpg" />
              <br />
              Sam Hirsch
            </Header>
            <p>
              Sam is an undergraduate student pursuing a Bachelor’s Degree in
              Computer Engineering at the University of Utah where she is also a
              Research Assistant with the Compiler Technology to Optimize
              Performance (CTOP) group, and focuses on developing methods to
              automatically optimize low-level software. She is current working
              on simulating our P2P communication method with virtual vehicle
              models to help determine ideal program parameters.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default withLayout(IndexPage);
