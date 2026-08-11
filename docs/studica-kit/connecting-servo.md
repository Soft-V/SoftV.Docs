---
id: connecting-servo
title: Connecting servo
---

# Connecting servo

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The VMX Robotics Controller provides multiple options for connecting and controlling servos, ranging from direct PWM control to specialized servo power modules.

The VMX features dedicated PWM outputs designed specifically for servo control, with each port supporting standard RC‑type servo signals. The ports use the same standard 3‑pin servo connector found on most hobby‑grade servos, providing signal, power, and ground through a single interface.

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-high-current-dio-overview.png"/>
</div>

To connect servos, start by using a standard 3‑pin cable to connect the Servo Power Block to the VMX — plug one end into the VMX's PWM port and the other into the INPUT port on the power block. 

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-servo.png"/>
</div>

Next, connect your servos to the OUTPUT ports on the Servo Power Block. 

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-with-power-block.png"/>
</div>

The final wiring diagram is shown in the image below.

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-connection-assembly.png"/>
</div>

Use the code snippet below to set servo angles and ensure correct servo connection, as shown in the example.

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

        servo_0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.set_angle_hcdio(servo_0.get_float(), 1)
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

                ShuffleVariable servo0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAngleHCDIO(servo0.getFloat(), 1);
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

            ShuffleVariable* servo_0 = shufflecad.add_var(new ShuffleVariable("servo0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_servo_angle(servo_0->get_float(), 1);
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

                var servo0 = shufflecad.AddVar(new ShuffleVariable("servo0", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.SetAngleHcdio(servo0.GetFloat(), 1);
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
VMX HCDIO ports are **write-only**. There are 10 ports available in robocadV library. Numeration starts from 1.
:::