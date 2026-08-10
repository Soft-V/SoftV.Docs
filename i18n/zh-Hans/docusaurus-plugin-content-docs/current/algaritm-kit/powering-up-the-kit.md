---
id: powering-up-the-kit
title: 连接控制器
---
# 连接控制器

# 套件通电

套件中包含一根 XT30 一分二转接线，用于将电源从电机控制器分配到系统的其余部分。

<img src="/docshome/img/algaritm-kit/other/xt30-parallel.PNG"/>

将转接线的单端插入电机控制器上的电源输出接口。

<img src="/docshome/img/algaritm-kit/driver/driver-power-output.png"/>


在将转接线连接到其他设备之前，需要先在每个分支端接上一根带 XT30 接口的标准导线。然后将其中一端连接到扩展板的电源插座。

<img src="/docshome/img/algaritm-kit/shield/shield-power-up.PNG"/>

之后，将电缆的另一端连接到舵机电源模块的电源输入端。

<img src="/docshome/img/algaritm-kit/other/servo-power-block-power-up.PNG"/>

最后一步是将电池连接到电机控制器上的 XT60 接口。连接完成后，电源将分配到所有组件——电机控制器本身、主控制器以及舵机电源模块。

<img src="/docshome/img/algaritm-kit/driver/driver-power-up.png"/>



:::danger
请勿尝试将电池直接连接到扩展板！
:::

:::note
电池为套件中的所有元件提供稳定的电源。但是，可能会出现电涌情况。为防止电路板起火，电机驱动板上 XT60 接口旁边安装了保险丝。若保险丝烧断，可用相同规格（板上有标注）的新保险丝进行更换。
<img src="/docshome/img/algaritm-kit/driver/driver-fuses-installation.png"/>
:::

# 控制器之间的通信

电机控制器与主控制器之间通过 USB 建立通信。电机控制器配备了位于 XT60 接口附近的 **USB Type‑C** 接口，主控制器则提供 **USB 3.0** 接口。使用套件附带的 USB 线缆连接这两块板。
