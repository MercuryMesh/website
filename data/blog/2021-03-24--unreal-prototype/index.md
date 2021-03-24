---
title: Unreal Engine Prototype
createdDate: '2021-03-24'
updatedDate: '2021-03-24'
author: Sam Hirsch
tags:
  - project update
  - prototype
image: unreal_editor.png
draft: false
---

We have set up our initial virtual environment for testing. We're using Microsoft's [https://microsoft.github.io/AirSim/](AirSim) to drive the autonomous engine. This is a mature project that has rich support for multiple different types of sensors and forms of autonomous driving. 

The benefit of using Unreal Engine is that we can simulate different methods of communicate via C++ pub/sub operations. We will have to be careful to ensure that this communication channel isn't *too* reliable so that it is still a good simulation of reality. We will add artificial latency and data losses to get the simulation closer to real V2V communication.