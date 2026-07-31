---
id: connecting-ultrasonic
title: Connecting ultrasonic sensors
---

# Connecting ultrasonic sensors

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The shield includes four ultrasonic sensor ports, allowing you to measure distances in multiple directions simultaneously. Each port provides 5V power, ground, and dedicated Trigger and Echo signal lines for standard HC‑SR04‑type sensors.
<img src="/docshome/img/algaritm-kit/shield/shield-ultrasonic-overview.png"/>

<div style={{width: "100%", display: "flex", justifyContent: "center"}}>
    <table style={{
        marginLeft: "0 auto",
        marginRight: "0 auto"
    }}>
        <thead>
            <tr>
                <th style={{ width: "200px", textAlign: "center" }}>Port</th>
                <th style={{ width: "200px", textAlign: "center" }}>Trigger</th>
                <th style={{ width: "200px", textAlign: "center" }}>Echo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{ textAlign: "center" }}><b>Port 1</b></td>
                <td style={{ textAlign: "center" }}>D0</td>
                <td style={{ textAlign: "center" }}>D1</td>
            </tr>
            <tr>
                <td style={{ textAlign: "center" }}><b>Port 2</b></td>
                <td style={{ textAlign: "center" }}>D2</td>
                <td style={{ textAlign: "center" }}>D3</td>
            </tr>
            <tr>
                <td style={{ textAlign: "center" }}><b>Port 3</b></td>
                <td style={{ textAlign: "center" }}>D4</td>
                <td style={{ textAlign: "center" }}>D5</td>
            </tr>
            <tr>
                <td style={{ textAlign: "center" }}><b>Port 4</b></td>
                <td style={{ textAlign: "center" }}>D6</td>
                <td style={{ textAlign: "center" }}>D7</td>
            </tr>
        </tbody>
    </table>
</div>

Connect the sensors using the supplied 4‑pin cables, ensuring correct pinout orientation. 
<img src="/docshome/img/algaritm-kit/shield/shield-ultrasonic-connection.PNG"/>

The code snippet below reads the distance measurements from the ultrasonic sensors connected to ports 1 and 4 (as shown in the example above) and sends them to shufflecad. This provides a quick and easy way to verify that each sensor is functioning properly and that all connections have been made correctly.
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

        us1: ShuffleVariable = shufflecad.add_var(ShuffleVariable("us1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        us4: ShuffleVariable = shufflecad.add_var(ShuffleVariable("us4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            us1.set_float(robot.us_1)
            us4.set_float(robot.us_4)
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
                ShuffleVariable us1 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("us1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable us4 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("us4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    us1.setFloat(robot.getUltrasound1());
                    us4.setFloat(robot.getUltrasound4());
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

            ShuffleVariable* us1 = shufflecad.add_var(new ShuffleVariable("us1", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* us4 = shufflecad.add_var(new ShuffleVariable("us4", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                us1->set_float(robot.get_us1());
                us4->set_float(robot.get_us4());
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

                var us1 = shufflecad.AddVar(new ShuffleVariable("us1", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var us4 = shufflecad.AddVar(new ShuffleVariable("us4", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    us1.SetFloat(robot.Us1);
                    us4.SetFloat(robot.Us4);
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
HC-SR04 sensor pinout:

- Red — VCC
- Yellow — Trigger
- Green — Echo
- Black — GND

See the image below for the example.
<div style={{marginRight: 50, marginLeft: 50}}>
    <img src="/docshome/img/algaritm-kit/other/ultrasonic.png"/>   
</div>
:::