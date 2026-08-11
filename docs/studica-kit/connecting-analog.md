---
id: connecting-analog
title: Connecting analog sensors
---

# Connecting analog sensors

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Cobra Line Follower sensor is a 4-channel infrared reflectance sensor array included in the kit, primarily designed for line‑following applications. It allows the robot to distinguish between light and dark surfaces by shining infrared light and measuring the amount reflected back.

<img src="/docshome/img/studica-kit/other/cobra.png"/>

Use the standard 3‑pin cables supplied with the kit to connect the black line sensor to the analog input port. Make sure to observe the correct pinout.

<img src="/docshome/img/studica-kit/vmx/vmx-connecting-analog-2.png"/>

The code snippet below reads the values from the analog sensor connected to port 1 (as shown in the example above) and sends them to shufflecad. This provides a quick and easy way to verify that sensor is functioning properly and that the connections have been made correctly.

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