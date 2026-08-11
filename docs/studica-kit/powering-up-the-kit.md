---
id: powering-up-the-kit
title: Connecting controllers
---

# Connecting controllers

# Powering up the kit

The kit includes 2 power cables, which are used to distribute power from the motor driver board to the rest of the system. Plug one end of the cables into the VMX.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-power.png"/>
</div>

Plug the same wire into the Titan Quad's power socket.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/titan/titan-power-up-1.png"/>
</div>

Do the same with the second cable — plug one end into the Servo Power Block.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-power-block-power-up.png"/>
</div>

Plug the other end into the remaining power socket on Titan Quad Motor Controller.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/titan/titan-power-up-2.png"/>
</div>

Once all connections are made, your system should match the reference diagram shown below. The image illustrates the correct wiring of the entire controller setup — the VMX Robotics Controller, the Titan Quad Motor Controller, and the Servo Power Block — ensuring that power line is properly connected.

<div>
    <img src="/docshome/img/studica-kit/other/powering-up-the-kit.png"/>
</div>

:::note
These power sockets are bi‑directional, meaning they can be used either to supply power to other devices (output mode) or to receive power from an external source (input mode). While this provides flexibility for different system configurations, we recommend following the standard power connection setup for this guide — using the ports as outputs to power the main controller and the servo power block.
:::

# Communication between controllers
Communication between the Titan motor controller and the VMX Robotics Controller is carried out over USB. Connect the Type‑C end of the cable to the DFU USB port on the Titan, and the standard USB end to one of the USB ports on the VMX controller.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/usb-connection.png"/>
</div>