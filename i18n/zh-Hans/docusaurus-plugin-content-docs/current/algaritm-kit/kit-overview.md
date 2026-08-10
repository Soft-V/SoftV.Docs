---
id: kit-overview
title: Algaritm 套件概述
---

# Algaritm 套件概述

控制系统的核心是 Repka 5 加扩展板套装。我们将深入介绍这块扩展板及其功能。

扩展板提供了一整套全面的 I/O 接口，用于连接传感器、执行器和外围模块。通过它，可以访问以下功能：

- 模拟和数字引脚——用于连接各种传感器和分立式设备；
- PWM 输出——用于舵机的精确定位；
- UART、SPI、I2C 有线接口——用于与外围芯片和模块进行高速数据交换。

<div style={{paddingBottom:'30px'}}>
    <img src="/docshome/img/algaritm-kit/shield/shield-overview.png"/>
</div>

电机控制器是一款坚固耐用的四通道驱动板，专为高要求的机器人和自动化应用而设计。

电机控制器具有四个独立的 PWM 通道用于直流电机控制，每个通道都具备：
- 电流驱动能力；
- 双限位开关输入，用于机械限位检测；
- 一个编码器输入，用于闭环速度和位置反馈。

除直流电机外，该板还支持两个标准 PWM 控制的舵机输出，以及两个专用的步进电机端口。

在电机控制器与扩展板之间的通信方面，控制器提供了一个 USB Type-C 接口用于快速配置和实时监控。


<img src="/docshome/img/algaritm-kit/driver/driver-overview.png"/>
