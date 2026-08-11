---
id: connecting-motors
title: 电机的连接
---

# 电机的连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Titan Quad Motor Controller 提供四个直流电机输出端口，在板上标记为 M0、M1、M2 和 M3。每个通道设计用于驱动电流高达 20 A 的电机，并配有内置保险丝座，在通电前需要先安装 20 A 的保险丝。

套件中的电机已预装 Anderson Powerpole 电源连接器。

<img src="/docshome/img/studica-kit/titan/titan-connecting-motor.png"/>

使用下面的代码片段，您可以通过 shufflecad 手动设置示例中所连接电机的速度。

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

        motor2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("motor2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))


        start_time = time.time()
        while time.time() - start_time < 120:
            robot.motor_speed_2 = motor2.get_float()
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

                ShuffleVariable motor2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("motor2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 120_000) {
                    robot.setMotorSpeed2(motor2.getFloat());
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

            ShuffleVariable* motor2 = shufflecad.add_var(new ShuffleVariable("motor2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(120)) {
                robot.set_motor_speed_2(motor2->get_float());
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

                var motor2 = shufflecad.AddVar(new ShuffleVariable("motor2", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 120_000)
                {
                    robot.MotorSpeed2 = motor2.GetFloat();
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

我们的库包含一个内置的 PID 控制器，有助于实现平滑而精确的电机控制。有关编码器使用和 PID 控制器的完整指南，请参阅[连接编码器](../studica-kit/connecting-encoders)页面.