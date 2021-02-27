import { ReactChild } from "react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

export class Job {
  owner: String;
  icon: SemanticICONS;
  title: String;
  description?: String;
  meta?: String;
  extra?: String;
  child?: ReactChild;
}

const jobs: Job[] = [
  {
    description:
      "Design and development of the prototype RC cars, with autonomous \
      functionality. We currently have one operational vehicle under manual \
      control. It has an open circuit interface, so it is ready to be used \
      for further development",
    icon: "car",
    meta: "Started 01/27/2021",
    owner: "Dalton Clift",
    title: "Vehicle Prototyping"
  },
  {
    description:
      "Simulate a realistic 3D enviornment with real physics for testing the \
      autonomous vehicles. Begin creating initial communication protocols and \
      test their efficacy in simulation. We are using Microsoft's AirSim library. \
      Initial experimentation showed that the Unity version is not developed \
      enough, so we have opted to use the Unreal Engine.",
    icon: "computer",
    meta: "Started 02/23/2021",
    owner: "Sam Hirsch",
    title: "Environment Simulation"
  },
  {
    description:
      "Determing which integrated circuit and microcontroller to use for the LPS \
      functionality. Begin programming these modules and test their operation. \
      We are currently planning to use the Qorvo DWM1000 chip. We are waiting on \
      shipment to begin testing.",
    icon: "location arrow",
    meta: "Started 02/20/2021",
    owner: "Benjamin Wadsworth",
    title: "LPS Programming"
  }
];

export default jobs;
