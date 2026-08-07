---
id: kit-overview
title: Algaritm kit overview
---

# Algaritm kit overview

The core of the control system is a Repka 5 + expansion shield bundle. We will dive deeper into the expansion shield and it's capabilities.

The shield provides a comprehensive set of I/O interfaces for connecting sensors, actuators, and peripheral modules. Through it, the following are accessible:

- Analog and digital pins — for interfacing with a wide range of sensors and discrete devices;
- PWM outputs — for precise positioning of servos;
- Wired interfaces UART, SPI, I2C for high-speed data exchange with peripheral chips and modules.

<div style={{paddingBottom:'30px'}}>
    <img src="/docshome/img/algaritm-kit/shield/shield-overview.png"/>
</div>

The motor controller is a robust, four-channel driver board designed for demanding robotics and automation applications.

The motor controller features four independent PWM channels for DC motor control, with each channel providing:
- Current drive capability;
- Dual limit switch inputs for mechanical end-stop detection;
- An encoder input for closed-loop velocity and position feedback.

In addition to DC motors, the board supports two servo outputs with standard PWM control, as well as two dedicated ports for stepper motors.

For communication between the motor controller and the shield, the controller offers a USB Type-C interface for fast configuration and real-time monitoring.


<img src="/docshome/img/algaritm-kit/driver/driver-overview.png"/>
