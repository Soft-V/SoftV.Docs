---
id: connecting-infrared
title: 连接红外传感器
---

# 连接红外传感器

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

该板具有 8 个专用模拟传感器端口，采用标准化的 3 针布局：信号（**V1**）、**5V** 和 **GND**。这一配置确保了与红外传感器等各种模拟传感器的兼容性。板载 5V 电源可为套件自带的红外测距传感器提供足够的电力，无需外部电源，使传感器的设置更加简便。

<div style={{paddingBottom: '10px'}}>
    <img src="/docshome/img/algaritm-kit/shield/shield-analog-overview.png"/>
</div>

使用套件附带的标准 3 针线缆将红外传感器连接到模拟输入端口。请务必注意正确的引脚定义。

<div style={{paddingBottom: '10px'}}>
    <img src="/docshome/img/algaritm-kit/shield/shield-analog-connection.png"/>
</div>

为帮助你快速上手，下面的代码片段读取连接到端口 0、2 和 7（如上例所示）的红外模拟传感器的数值，并将其发送到 shufflecad。这提供了一种快速简便的方法，用于验证每个传感器工作是否正常以及所有连接是否正确。
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
        from robocad.algaritm import RobotAlgaritm
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        import time

        robot = RobotAlgaritm(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        ir0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        ir2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        ir7: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir7", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ir0.set_float(robot.analog_1())
            ir2.set_float(robot.analog_3())
            ir7.set_float(robot.analog_8())
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotAlgaritm;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.shufflecad.Shufflecad;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);

                ShuffleVariable ir0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable ir2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable ir7 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir7", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ir0.setFloat(robot.getAnalog1());
                    ir2.setFloat(robot.getAnalog3());
                    ir7.setFloat(robot.getAnalog8());
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
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotAlgaritm robot(true);
            Shufflecad shufflecad(&robot);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            ShuffleVariable* ir0 = shufflecad.add_var(new ShuffleVariable("ir0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* ir2 = shufflecad.add_var(new ShuffleVariable("ir2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* ir7 = shufflecad.add_var(new ShuffleVariable("ir7", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ir0->set_float(robot.get_analog_1());
                ir0->set_float(robot.get_analog_3());
                ir0->set_float(robot.get_analog_8());
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
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.Sleep(1000);

                var ir0 = shufflecad.AddVar(new ShuffleVariable("ir0", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var ir2 = shufflecad.AddVar(new ShuffleVariable("ir2", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var ir7 = shufflecad.AddVar(new ShuffleVariable("ir7", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ir0.SetFloat(robot.Analog1);
                    ir2.SetFloat(robot.Analog3);
                    ir7.SetFloat(robot.Analog8);
                    Thread.Sleep(20);
                }

                shufflecad.Stop();
                robot.Stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="labview">
        **待完成：** 😇
    </TabItem>
</Tabs>
:::note
Sharp GP2Y0A41S 传感器引脚定义：

- 白色 — 信号
- 黑色 — GND
- 红色 — VCC

请参见下方示例图片。
<div style={{marginRight: 50, marginLeft: 50}}>
    <img src="/docshome/img/algaritm-kit/other/sharp-infrared.png"/>   
</div>
:::
