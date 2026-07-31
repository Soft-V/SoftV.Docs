---
id: connecting-motors
title: Connecting motors
---

# Connecting motors

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The motor driver board provides 4 dedicated PWM ports for DC motor connection, each utilizing a robust XT30 connector. These connectors are specifically chosen for their ability to handle higher currents with minimal voltage drop, making them ideal for driving motors in demanding robotics applications. The connectors also feature a snug fit with positive retention, preventing accidental disconnection during operation. In the example image below, motors are connected to ports 3 and 4.
<div style={{ marginBottom: "10px"}}>
    <img src="/docshome/img/algaritm-kit/driver/driver-dc-motors-connection.png"/>
</div>
Using the code snippet below, you can manually set speed to each motor connected in the example. This provides a quick and easy way to verify that each motor is functioning properly and that all connections have been made correctly.
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

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(120)) {
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
        **TODO:** 😇
    </TabItem>
</Tabs>

Our slibrary includes a built‑in PID controller to help you achieve smooth and accurate motor regulation. For a complete guide on working with encoders and using the PID controller, refer to the [Connecting encoders](../algaritm-kit/connecting-encoders.md) page.