---
id: connecting-ultrasonic
title: 超声波传感器的连接
---

# 超声波传感器的连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

该板包含两个超声波传感器端口，可同时在不同方向上测量距离。每个端口为标准的 HC‑SR04 型传感器提供 5V 电源、接地以及专用的 Trigger 和 Echo 信号线。

<img src="/docshome/img/studica-kit/vmx/vmx-flex-dio-overview.png"/>

<div style={{width: "100%", display: "flex", justifyContent: "center"}}> <table style={{ marginLeft: "0 auto", marginRight: "0 auto" }}> <thead> <tr> <th style={{ width: "200px", textAlign: "center" }}>端口</th> <th style={{ width: "200px", textAlign: "center" }}>Trigger</th> <th style={{ width: "200px", textAlign: "center" }}>Echo</th> </tr> </thead> <tbody> <tr> <td style={{ textAlign: "center" }}><b>超声波 1</b></td> <td style={{ textAlign: "center" }}>8</td> <td style={{ textAlign: "center" }}>9</td> </tr> <tr> <td style={{ textAlign: "center" }}><b>超声波 2</b></td> <td style={{ textAlign: "center" }}>10</td> <td style={{ textAlign: "center" }}>11</td> </tr> </tbody> </table> </div>

请使用套件中附带的 4 芯 6 针连接器电缆连接传感器，并确保引脚排列方向正确。请参考下图。


<div style={{ marginBottom: "10px"}}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-us.png"/>
</div>

下面的代码片段读取连接到端口 1（如上方示例所示）的超声波传感器所测量的距离，并将其发送到 shufflecad。这可以快速、轻松地验证传感器是否工作正常以及连接是否正确

<Tabs
    defaultValue="python"
    values={[
        {label: 'Python', value: 'python'},
        {label: 'Java', value: 'java'},
        {label: 'C++', value: 'cpp'},
        {label: 'C#', value: 'cs'},
        {label: 'LabVIEW', value: 'labview'},
    ]}>
    <TabItem value="python">  
        ```python
        from robocad.studica import RobotVmxTitan
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        import time

        robot: RobotVmxTitan = RobotVmxTitan(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        us1: ShuffleVariable = shufflecad.add_var(ShuffleVariable("us1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            us1.set_float(robot.us_1)
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotVmxTitan;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.shufflecad.Shufflecad;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);
                
                ShuffleVariable us1 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("us1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    us1.setFloat(robot.getUltrasound1());
                    Thread.sleep(20);
                }

                shufflecad.stop();
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        #include "studica.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotVmxTitan robot(true);
            Shufflecad shufflecad(&robot);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            ShuffleVariable* us1 = shufflecad.add_var(new ShuffleVariable("us1", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                us1->set_float(robot.get_us1());
                std::this_thread::sleep_for(std::chrono::milliseconds(20));
            }

            shufflecad.stop();
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        using RobocadCs;

        class Program
        {
            public static void Main(string[] args)
            {
                RobotVMXTitan robot = new RobotVMXTitan(true);
                Shufflecad shufflecad = new Shufflecad(robot);

                Thread.Sleep(1000);

                var us1 = shufflecad.AddVar(new ShuffleVariable("us1", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    us1.SetFloat(robot.Us1);
                    Thread.Sleep(20);
                }

                shufflecad.Stop();
                robot.Stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>

:::note
HC-SR04 引脚定义

- 红色 — VCC
- 黄色 — Trigger
- 绿色 — Echo
- 黑色 — GND

示例请参见下图。
<div style={{marginRight: 50, marginLeft: 50}}>
    <img src="/docshome/img/studica-kit/other/ultrasonic.png"/>   
</div>
:::