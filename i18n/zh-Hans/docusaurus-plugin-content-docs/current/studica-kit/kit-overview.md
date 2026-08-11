---
id: kit-overview
title: Studica 套件概述
---

# Studica 套件概述

控制系统的核心是 VMX Robotics Controller。我们将更详细地介绍该控制器及其功能。

VMX 是一款功能强大的基于 Linux 的机器人控制器，既可以作为机器人控制系统，也可以作为图像和运动处理器，支持 Python、Java、C++ 和 C# 编程。它提供了丰富的 I/O 接口，并基于多核 Linux 计算平台构建，配备千兆以太网、USB 3.0 端口以及内置 Wi-Fi/蓝牙。其传感器核心是 9 轴 navX-IMU，用于精确的方位跟踪。通过该控制器，可使用以下接口：

- 模拟和数字引脚 — 用于连接各种传感器和离散设备；
- PWM 输出 — 用于精确定位伺服电机；
- CAN、SPI、I2C 和 UART 接口 — 用于与外围芯片和模块进行高速实时数据交换。

<div style={{ textAlign: "center"}}>
    <img src="/docshome/img/studica-kit/vmx/vmx-overview.png"/>
</div>

Titan Quad Motor Controller 是一款功能强大的四通道 CAN 总线驱动板，专为机器人与自动化领域中的复杂任务而设计。它是 WorldSkills Mobile Robotics 系列的核心组件，为高性能机器人提供可靠且稳定的电机控制。

电机控制器配备四个独立的直流电机通道，每个通道提供：
- 电机驱动能力；
- 两个限位开关输入，用于机械终点检测；
- 一个编码器输入，用于闭环速度和位置反馈。

<div style={{ textAlign: "center"}}>
    <img src="/docshome/img/studica-kit/titan/titan-overview.png"/>
</div>