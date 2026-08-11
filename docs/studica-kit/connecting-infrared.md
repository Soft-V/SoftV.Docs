---
id: connecting-infrared
title: Connecting infrared sensors
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting infrared sensors


The board features 4 dedicated analog sensor ports with a standardized 3-pin layout: **GND**, **5V**, and **S** (signal). This configuration ensures compatibility with a wide range of analog sensors, such as infrared sensors. The onboard 5V supply provides sufficient power for infrared distance sensors shipped with the kit, eliminating the need for external power sources and making sensor setup straightforward.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-analog-overview.png"/>
</div>

Use the standard 3‑pin cables supplied with the kit to connect infrared sensors to the analog input ports. Make sure to observe the correct pinout.

<img src="/docshome/img/studica-kit/vmx/vmx-connecting-analog.png"/>

To help you get started, the code snippet below reads the values from the infrared analog sensor connected to port 0 (as shown in the example above) and sends them to shufflecad. This provides a quick and easy way to verify that sensor is functioning properly and that the connection has been made correctly.

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
Sharp GP2Y0A41S sensor pinout:

- White — signal
- Black — GND
- Red — VCC

See the image below for the example.
<div style={{marginRight: 50, marginLeft: 50}}>
    <img src="/docshome/img/studica-kit/other/sharp-infrared.png"/>   
</div>
:::