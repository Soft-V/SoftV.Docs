---
id: powering-up-the-kit
title: 控制器连接
---

# 控制器连接

# 电源连接

套件中包含 2 根电源线，用于将电源从电机驱动板分配给系统的其他组件。将电缆的一端连接到 VMX。

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-power.png"/>
</div>

将同一根线连接到 Titan Quad 的电源接口。

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/titan/titan-power-up-1.png"/>
</div>

对第二根线执行相同的操作 — 将其一端连接到 Servo Power Block。

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-power-block-power-up.png"/>
</div>

将另一端连接到 Titan Quad Motor Controller 上剩余的电源接口。
<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/titan/titan-power-up-2.png"/>
</div>

完成所有连接后，您的系统应如下图所示。该图展示了整个控制系统（VMX Robotics Controller、Titan Quad Motor Controller 和 Servo Power Block）的正确接线方案，确保电源线路连接正确。

<div>
    <img src="/docshome/img/studica-kit/other/powering-up-the-kit.png"/>
</div>

:::note
这些电源接口是双向的，也就是说，它们既可用于向其他设备供电（输出模式），也可用于从外部电源接收电力（输入模式）。虽然这为不同系统配置提供了灵活性，但在本指南中，我们建议采用标准的电源连接方式——将这些端口用作输出，为控制器和伺服电源模块供电。
:::

# 控制器之间的通信
Titan Quad 电机控制器与 VMX 控制器之间通过 USB 进行通信。将 USB Type‑C 端连接到 Titan 上的 DFU USB 端口，将标准 USB 端连接到 VMX 控制器上的任一 USB 端口。

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/usb-connection.png"/>
</div>