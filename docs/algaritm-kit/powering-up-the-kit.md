---
id: powering-up-the-kit
title: Connecting controllers
---

# Connecting controllers

# Powering up the kit

The kit includes an XT30 1‑to‑2 splitter cable, which is used to distribute power from the motor driver board to the rest of the system. 

<img src="/docshome/img/algaritm-kit/other/xt30-parallel.PNG"/>

Plug the single end into the power output on the motor driver board.

<img src="/docshome/img/algaritm-kit/driver/driver-power-output.png"/>


Before connecting the splitter cable to the other devices, you will need to attach a standard wire with XT30 connector to each of the split ends. Then, connect one end to the shield power socket.

<img src="/docshome/img/algaritm-kit/shield/shield-power-up.PNG"/>

After that, connect the other end of cable to the power input of the servo power block.

<img src="/docshome/img/algaritm-kit/other/servo-power-block-power-up.PNG"/>

The last step is to connect the battery to the XT60 socket on the motor driver board. Once connected, power will be distributed to all components — the motor driver itself, the main controller, and the servo power block.

<img src="/docshome/img/algaritm-kit/driver/driver-power-up.png"/>



:::danger
Do not attempt to connect the battery directly to the shield!
:::

:::note
The battery provides stable power for all the elements in the kit. However, power surges may occur. To prevent the boards from catching fire, fuses are installed next to the XT60 connector on the motor driver board. In the event of a blown fuse, you can replace it with a new one of the same rating, as indicated on the board.
<img src="/docshome/img/algaritm-kit/driver/driver-fuses-installation.png"/>
:::

# Communication between controllers

Communication between the motor driver board and the main controller is established over USB. The motor driver is equipped with a **USB Type‑C** connector, located near the XT60 socket, and the main controller provides a **USB 3.0** port. Use the USB cable supplied in the kit to connect the two boards.