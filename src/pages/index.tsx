import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Segment,
  Container,
  Grid,
  Header,
  Card,
  Statistic,
  Icon,
  StatisticGroup,
  Message,
  Item,
  Progress,
  Table
} from "semantic-ui-react";
import ProfilePicture from "../components/ProfilePicture";
import jobs from "../../data/sources/jobDistribution";
import Particles from "react-particles-js";

const IndexPage = (props: LayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  const bubbles = {
    particles: {
      color: {
        value: "#71a7b2"
      },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        speed: 2.5
      },
      number: {
        density: {
          enable: true
        },
        value: 60
      },
      size: {
        value: 3
      }
    },
    retina_detect: true
  };

  return (
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
          <Particles className="particles" params={bubbles} />
        </Container>
      </Segment>

      {/* About this starter */}
      <Segment vertical className="stripe">
        <Grid verticalAlign="middle" className="container">
          <Grid.Row centered>
            <Header as="h3">Abstract</Header>
          </Grid.Row>
          <Grid.Row centered>
            <StatisticGroup>
              <Statistic value="~5,000,000" label="Car accidents per year" />
              <Statistic value="~30,000" label="Fatalities annually" />
            </StatisticGroup>
          </Grid.Row>
          <Grid.Row>
            <p>
              Our aim to change this statistic. Autonomous Vehicles are a
              revolutionary technology that will not only change the face of
              transportation but also save lives and prefent life-changing
              injuries.
            </p>
            <p>
              MercuryMesh enables autonomous vehicles to communicate with each
              other in real-time. This ability allows vehicles to share
              information about the road so that each car has a more full view
              of its environment. Additionally, MercuryMesh enabled vehicles can
              communicate preemptively about their immediate intentions to allow
              for cleaner vehicle coordination and reduced traffic on busy
              streets.
            </p>
            <p>
              Our project leads to safer roads for all and a more coordinated
              environment. We intend to show that using such communication and
              coordination reduces the risk of accidents while allowing vehicles
              to travel close together in highly coordinated patterns and avoid
              causing traffic jams.
            </p>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment vertical className="stripe alternate">
        <Grid stackable className="container">
          <Grid.Row centered>
            <Header as="h3">Key Questions</Header>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="8">
              <Header>What resources do we need for this project?</Header>
              <p>
                Quite frankly, a large cost is simply going to be time. This
                project involves a lot of work in various different areas and
                will require our whole team to devlote a good bit of personal
                time to it.
              </p>
              <p>
                We will also need a lot of hardware. For our initial prototype,
                we plan to contruct 4 autonomous RC cars. Each car will need to
                have its own camera and LiDAR sensor in order to fascillitate
                autonomous operation. Additionally, each car needs a Local
                Positioning System (LPS) chip to keep track of its own location
                and a DSRC chip for vehicle-to-vehicle communication.
              </p>
              <p>
                It would also be very useful to have access to some
                professionals who are experienced with self driving algorithms
                and peer-to-peer networks who may be able to act as mentors.
              </p>
              <Header>How long does each method take?</Header>
              <p>
                We plan on parallelizing the early work between the team members
                so that we can accomplish more, faster. The first things to be
                done will be simulating the autonomous environment, creating a
                prototype vehicle, and establishing the LPS and DSRC chip
                programming. We anticipate that each of these processes will
                take the majority of the semester.
              </p>
              <Message>
                <p>
                  For more information on our timetable, view the timeline
                  below.
                </p>
              </Message>
            </Grid.Column>
            <Grid.Column width="6" floated="right">
              <Header>How will we deal with problems?</Header>
              <p>
                Our group is already very communicative and flexible. We are in
                frequent communication and have all worked together in the past.
                We plan to keep each other updated on the progress and potential
                issues we run into so that we can devise a quick solution to any
                problems. Should any team member be delayed in their work, we
                may plan on delaying everyone or redistributing some tasks to
                that the load is more manageable.
              </p>
              <Header>What are the potential risks?</Header>
              <p>
                There are several foreseeable risks with this project given its
                large scope. Early on, we may run into issues with implementing
                the autonomous algorithm. The core of this project is{" "}
                <em>not</em>, however, creating autonomous vehicles. As such, we
                will use pre-developed algorithms liberally for this section to
                mitigate this risk.
              </p>
              <p>
                We may eventually discover that vehicles travelling in different
                directions simply cannot maintain a communication channel long
                enough to be useful. If we find this, our plan is to pivot to
                focus on transportation fleets. These fleets involve several
                trucks travelling in the same direction. Our technology could
                prove more useful in this scenario since these vehicles will
                stay in-range of each other for longer.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment vertical className="stripe container">
        <Grid>
          <Grid.Row centered>
            <Header as="h3">Prototyping</Header>
          </Grid.Row>
          <Grid.Row>
            <p>Our project prototype will consist of two main components:</p>
            <p>
              First, we have our physical prototypes. We are constructing four
              open source, RC cars. These cars will provide us extensible access
              to the software and hardware that drives them. We will attach 2D
              Lidar sensors to each vehicle to generate proximity maps of the
              area around the car. Each car will also be equipped with local
              positioning system (LPS) modules to automatically range and
              determine physical location.
              <br />
              Our prototype will primarily be a demonstration of generating and
              collecting information from each vehicle as they are in operation.
              We will show that they can continuously determine their location
              while generating proxity data.
            </p>
            <p>
              Secondly, we have our simulation prototypes. We are using Unreal
              Engine and AirSim, a autonomous vehicle library from Microsoft, to
              create a realistic simualtion of self-driving cars. This
              simulation will demonstrate a working model of our proposed
              technology. We will use the pre-built autonomous driving libraries
              so we aren't concerned with developing new methods of driving
              vehicles.
              <br />
              Our prototype will demonstrate that sharing information between
              vehicles allows them to operate more reliably and more safely.
            </p>
            <Message>
              For more updates on our project, view the prototype tag in the
              <Link to="/blog/tags/prototype"> project blog.</Link>
            </Message>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment vertical className="stripe container">
        <Grid centered>
          <Grid.Row>
            <Header as="h3">Current Job Distribution</Header>
          </Grid.Row>
          <Grid.Row>
            Each job below has a listed owner. The owner is not owner is not the
            only person working on the job, rather the project is their
            responsibility. If they need to delegate subtasks, that is up to
            their own discretion.
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Item.Group divided relaxed>
                {jobs.map((job, index) => (
                  <Item
                    key={index}
                    header={job.title}
                    image={<Icon size="huge" bordered name={job.icon} />}
                    description={job.description}
                    meta={[
                      <span>Owner: {job.owner}</span>,
                      <br />,
                      <span>{job.meta}</span>
                    ]}
                  />
                ))}
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment vertical className="stripe alternate">
        <Grid centered>
          <Grid.Row centered>
            <Header as="h3">Timeline</Header>
          </Grid.Row>
          <Grid.Row centered>
            <Table basic="very" celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Month</Table.HeaderCell>
                  <Table.HeaderCell>Tasks</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>March</Table.Cell>
                  <Table.Cell>Begin Prototyping</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>April</Table.Cell>
                  <Table.Cell>
                    Basic Two Way Ranging
                    <br />
                    Autonomous Driving Via Existing Sensors
                    <br />
                    Communication Exploration
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>May</Table.Cell>
                  <Table.Cell>
                    LPS Components Work
                    <br />
                    Specify Computer Vision System
                    <br />
                    Communication Simulated
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>June</Table.Cell>
                  <Table.Cell>
                    Prototype Finalization
                    <br />
                    Design and Fabricate Mobile Bases
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>July</Table.Cell>
                  <Table.Cell>Robotics Integration</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>August</Table.Cell>
                  <Table.Cell>
                    Communication Software Built
                    <br />
                    Communication used in Autonomous Driving
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>September</Table.Cell>
                  <Table.Cell>Full Integration</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>October</Table.Cell>
                  <Table.Cell>Use Case / Demonstration Work</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>November</Table.Cell>
                  <Table.Cell>Finalization</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>December</Table.Cell>
                  <Table.Cell>Project Finished</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
        <Container className="container">
          <Item>
            <Item.Header as="h2">Approximate Progress</Item.Header>
            <Item.Meta>Updated 2/26/2021</Item.Meta>
            <Item.Content>
              <Progress
                percent={8}
                indicating
                progress="percent"
                active
                size="large"
              />
            </Item.Content>
          </Item>
        </Container>
      </Segment>
      <Segment vertical className="stripe feature">
        <Grid
          centered
          columns="3"
          textAlign="center"
          stackable
          className="container"
        >
          <Grid.Row>
            <Header as="h3">Team Members</Header>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <Card>
                <ProfilePicture fileName="ben.png" />
                <Card.Content>
                  <Card.Header>Benjamin Wadsworth</Card.Header>
                  <Card.Description>
                    Benjamin is a Computer Engineering and Mechanical
                    Engineering student at the University of Utah, with
                    coursework in embedded systems, logic design, robotics, and
                    control. As a research and development intern at APCO Inc,
                    he was the primary developer creating experimental human
                    machine interfaces for industrial use. He is working on
                    initial Local Positioning System chip architecture and
                    design.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://bcwadsworth.me/" target="_blank">
                    <Icon name="external" />
                    Personal Website
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <ProfilePicture fileName="dalton.jpg" />
                <Card.Content>
                  <Card.Header>Dalton Clift</Card.Header>
                  <Card.Description>
                    Dalton is an IT specialist working at the University of Utah
                    in the Web Automation Development group. He is also a
                    student, majoring in computer engineering, with a minor in
                    business. He has worked in the computer industry field for
                    most of his life, working as a freelance technician since he
                    was 15 years old, and starting a company at 17. His
                    interests are focused on data center administration, server
                    management relating to big data, and high performance
                    computing. Currently, he is working on the development of
                    our prototype autonomous bots.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://daltonclift.com/" target="_blank">
                    <Icon name="external" />
                    Personal Website
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <ProfilePicture fileName="sam.jpg" />
                <Card.Content>
                  <Card.Header>Sam Hirsch</Card.Header>
                  <Card.Description>
                    Sam is an undergraduate student pursuing a Bachelor’s Degree
                    in Computer Engineering at the University of Utah where she
                    is also a Research Assistant with the Compiler Technology to
                    Optimize Performance (CTOP) group, and focuses on developing
                    methods to automatically optimize low-level software. She is
                    current working on simulating our P2P communication method
                    with virtual vehicle models to help determine ideal program
                    parameters.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://www.samhirsch.me" target="_blank">
                    <Icon name="external" />
                    Personal Website
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default withLayout(IndexPage);
