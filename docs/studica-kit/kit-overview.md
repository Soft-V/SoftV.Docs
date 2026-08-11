---
id: kit-overview
title: Studica kit overview
---

# Studica kit overview

The core of the control system is the VMX Robotics Controller. We will dive deeper into the controller and its capabilities.

The VMX is a powerful, Linux-based robot controller that can function as both a robot control system and a vision/motion processor, supporting programming in Python, Java, C++ and C#. It provides a comprehensive set of I/O interfaces and is built on a multi-core Linux computing platform with Gigabit Ethernet, USB 3.0 ports, and built-in Wi-Fi/Bluetooth . At the heart of its sensor suite is a 9-axis navX-IMU for accurate orientation tracking. Through it, the following are accessible:

- Analog and digital pins — for interfacing with a wide range of sensors and discrete devices;
- PWM outputs — for precise positioning of servos;
- CAN bus, SPI, I2C, and UART interfaces — for high-speed, real-time data exchange with peripheral chips and modules.

<div style={{ textAlign: "center"}}>
    <img src="/docshome/img/studica-kit/vmx/vmx-overview.png"/>
</div>

The Titan Quad Motor Controller is a powerful, four-channel CAN-based driver board designed for demanding robotics and automation applications. It is a key component of the WorldSkills Mobile Robotics Collection, providing robust and reliable motor control for high-performance robots.

The motor controller features four independent DC motor channels, with each channel providing:
- Current drive capability — each channel is capable of driving motors with continuous currents up to 20A;
- Dual limit switch inputs — for mechanical end-stop detection, with both High and Low limit ports available per motor;
- An encoder input — a hardware quadrature encoder port is provided for each motor, enabling closed-loop velocity and position feedback.

<div style={{ textAlign: "center"}}>
    <img src="/docshome/img/studica-kit/titan/titan-overview.png"/>
</div>