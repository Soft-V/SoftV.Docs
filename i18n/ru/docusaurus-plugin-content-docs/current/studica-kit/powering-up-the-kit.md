---
id: powering-up-the-kit
title: Подключение контроллеров
---

# Подключение контроллеров

# Подключение питания

В набор входят 2 силовых кабеля, которые используются для распределения питания от платы драйвера моторов на остальные компоненты системы. Подключите один конец кабеля к VMX.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-power.png"/>
</div>

Подключите этот же провод в разъём питания на Titan Quad.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/titan/titan-power-up-1.png"/>
</div>

Повторите то же самое со вторым кабелем — подключите один его конец к Servo Power Block.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-power-block-power-up.png"/>
</div>

Подключите другой конец в оставшийся разъём питания на Titan Quad Motor Controller.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/titan/titan-power-up-2.png"/>
</div>

После того как все подключения выполнены, ваша система должна соответствовать эталонной схеме, показанной ниже. На изображении показана правильная схема подключения всей системы управления — контроллера VMX Robotics Controller, контроллера моторов Titan Quad Motor Controller и блока питания сервоприводов Servo Power Block, — обеспечивающая корректное подключение линий питания.

<div>
    <img src="/docshome/img/studica-kit/other/powering-up-the-kit.png"/>
</div>

:::note
Эти разъёмы питания являются двунаправленными, то есть они могут использоваться как для подачи питания на другие устройства (режим выхода), так и для получения питания от внешнего источника (режим входа). Хотя это обеспечивает гибкость при настройке различных конфигураций системы, для данного руководства мы рекомендуем придерживаться стандартной схемы подключения питания — использовать порты как выходы для питания основного контроллера и блока питания сервоприводов.
:::

# Связь между контроллерами
Связь между контроллером моторов Titan Quad и контроллером VMX осуществляется через USB. Подключите конец с разъёмом Type‑C к порту DFU USB на Titan, а стандартный конец USB — к одному из USB-портов на контроллере VMX.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/usb-connection.png"/>
</div>