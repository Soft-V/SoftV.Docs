---
id: connecting-infrared
title: 红外传感器的连接
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 红外传感器的连接

该板配备 4 个专用的模拟传感器端口，采用标准 3 针引脚排列：GND、5V 和 S（信号）。这种配置确保了与各种模拟传感器（例如红外传感器）的兼容性。板载 5V 电源为套件中包含的红外距离传感器提供足够的电力，无需外部电源，从而简化了传感器的连接。
<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-analog-overview.png"/>
</div>

使用套件中附带的标准 3 针电缆将红外传感器连接到模拟输入端口。请务必遵守正确的引脚排列。

<img src="/docshome/img/studica-kit/vmx/vmx-connecting-analog.png"/>

为了帮助您入门，下面的代码片段会读取连接到端口 0（如上方示例所示）的红外模拟传感器的值，并将其发送到 shufflecad。这可以快速简便地验证传感器是否工作正常以及连接是否正确。

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

        robot = RobotVmxTitan(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        ir0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ir0.set_float(robot.analog_1())
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

                ShuffleVariable ir0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
            
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ir0.setFloat(robot.getAnalog1());
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

            ShuffleVariable* ir0 = shufflecad.add_var(new ShuffleVariable("ir0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ir0->set_float(robot.get_analog_1());
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

                var ir0 = shufflecad.AddVar(new ShuffleVariable("ir0", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ir0.SetFloat(robot.Analog1);
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
Sharp GP2Y0A41S 引脚定义：

- 白色 — 信号
- 黑色 — GND
- 红色 — VCC

示例请参见下图。
<div style={{marginRight: 50, marginLeft: 50}}>
    <img src="/docshome/img/studica-kit/other/sharp-infrared.png"/>   
</div>
:::