---
id: connecting-analog
title: 模拟传感器的连接
---

# 模拟传感器的连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cobra Line Follower 传感器 是一款 4 通道红外反射式传感器阵列，包含在套件中，主要用于巡线应用。它通过发射红外光并测量反射回来的光量，使机器人能够区分明亮和黑暗的表面。

<img src="/docshome/img/studica-kit/other/cobra.png"/>

使用套件中附带的标准 3 针电缆将巡线传感器连接到模拟输入端口。请务必遵循正确的引脚排列。


<img src="/docshome/img/studica-kit/vmx/vmx-connecting-analog-2.png"/>

下面的代码片段读取连接到端口 1（如上方示例所示）的模拟传感器的值，并将其发送到 shufflecad。这样可快速轻松地验证传感器是否工作正常以及连接是否正确

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

        ir1: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ir1.set_float(robot.analog_2())
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

                ShuffleVariable ir1 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
            
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ir1.setFloat(robot.getAnalog2());
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

            ShuffleVariable* ir1 = shufflecad.add_var(new ShuffleVariable("ir1", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ir1->set_float(robot.get_analog_2());
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

                var ir1 = shufflecad.AddVar(new ShuffleVariable("ir1", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ir1.SetFloat(robot.Analog2);
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