---
id: connecting-motors
title: 连接电机
---

# 连接电机

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

电机驱动板提供 4 个专用的 PWM 端口用于连接直流电机，每个端口都使用坚固的 XT30 接口。选用这些接口是因为它们能够以极小的压降承受更大的电流，非常适合驱动要求较高的机器人应用中的电机。这些接口还具有紧密贴合、正向锁定的特点，可防止运行过程中意外脱落。下图示例中，电机分别连接到端口 3 和 4。
<div style={{ marginBottom: "10px"}}>
    <img src="/docshome/img/algaritm-kit/driver/driver-dc-motors-connection.png"/>
</div>
使用下面的代码片段，你可以手动为示例中连接的每个电机设置转速。这提供了一种快速简便的方法，用于验证每个电机工作是否正常以及所有连接是否正确。
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

        robot: RobotAlgaritm = RobotAlgaritm(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        motor3: ShuffleVariable = shufflecad.add_var(ShuffleVariable("motor3", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))
        motor4: ShuffleVariable = shufflecad.add_var(ShuffleVariable("motor4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 120:
            robot.motor_speed_2 = motor3.get_float()
            robot.motor_speed_3 = motor4.get_float()
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
                
                ShuffleVariable motor3 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("motor3", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable motor4 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("motor4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));
                
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 120_000) {
                    robot.setMotorSpeed2(motor3.getFloat());
                    robot.setMotorSpeed3(motor4.getFloat());
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

            ShuffleVariable* motor3 = shufflecad.add_var(new ShuffleVariable("motor3", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* motor4 = shufflecad.add_var(new ShuffleVariable("motor4", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(120)) {
                robot.set_motor_speed_2(motor3->get_float());
                robot.set_motor_speed_3(motor4->get_float());
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

                var motor3 = shufflecad.AddVar(new ShuffleVariable("motor3", ShuffleVariable.FloatType, ShuffleVariable.InVar));
                var motor4 = shufflecad.AddVar(new ShuffleVariable("motor4", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 120_000)
                {
                    robot.MotorSpeed2 = motor3.GetFloat();
                    robot.MotorSpeed3 = motor4.GetFloat();
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

我们的库内置了一个 PID 控制器，可帮助你实现平滑、精准的电机调节。有关编码器使用和 PID 控制器的完整指南，请参阅[连接编码器](../algaritm-kit/connecting-encoders)页面。
