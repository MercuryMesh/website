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

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">MercuryMesh</Header>
        <Header inverted as="h2">Connecting autonomous vehicles and driving the future</Header>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Header as="h3">Team Members</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="smile outline"></Icon>
              Benjamin Wadsworth
            </Header>
            <p>
              THIS IS WHERE BEN SHOULD DESCRIBE HIMSELF.
              Ben is neat, but he doesn't like TypeScript or web development so that's not great.
              He's working on some stuff with LPS and there's something with a crystal oscillator.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="smile outline"></Icon>
              Dalton Clift
            </Header>
            <p>
              THIS IS WHERE DALTON SHOULD DESCRIBE HIMSELF.
              Dalton has like a ton of servers and that's pretty crazy. 
              He's also a business major though so we make fun of him.
              He's working on building some robo-dudes that yell insults at each other
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              Sam Hirsch
            </Header>
            <p>
              Sam does a lot of work with lower-level programming and networking.
              She assisted in researching hardware-targetted C-level optimizations and 
              previously worked at a peer-2-peer networking company. She is current working 
              on simulating our P2P communication method with virtual vehicle models to help 
              determine ideal program parameters.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
