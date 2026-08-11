---
id: connecting-limit-switch
title: Connecting limit switch
---

# Connecting limit switch

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each motor port is equipped with two limit switch inputs, labeled Llim and Hlim on the board. Both ports serve the same purpose — they are designed for connecting end‑stop switches that detect when a mechanism has reached the limit of its travel. These inputs do not have predefined functions; you can assign them in software to stop or reverse the motor when a switch is triggered.

<img src="/docshome/img/algaritm-kit/driver/driver-limit-switch-ports.PNG"/>

Use the standard 2‑pin cables supplied with the kit to connect limit switch to its port. Unlike other connections, these ports are not polarity-sensitive — it doesn't matter which side of the wire goes where. You can connect them in any orientation.

<img src="/docshome/img/algaritm-kit/driver/driver-limit-switch-connection.png"/>

The code snippet below gets boolean value from the limit switch connected to the Llim port on M3 motor and sends it to shufflecad. This provides a quick and easy way to verify that limit switch is functioning properly and that the connection has been made correctly.

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

        ls_3_L: ShuffleVariable = shufflecad.add_var(ShuffleVariable("limit_switch_3_L", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ls_3_L.set_bool(robot.titan_limits[7])
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

                ShuffleVariable ls3L = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("limitSwitch3L", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ls3L.setBool(robot.getTitanLimits()[7]);
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

            ShuffleVariable* ls_3_L = shufflecad.add_var(new ShuffleVariable("limit_switch_3_L", ShuffleVariable::BOOL_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ls_3_L->set_bool(robot.get_titan_limits()[7]);
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

                var ls3L = shufflecad.AddVar(new ShuffleVariable("LimitSwitch3L", ShuffleVariable.BoolType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ls3L.SetBool(robot.TitanLimits[7]);
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
The upper contact will always be the Common wire. The remaining two contacts are:
- NO — Normally opened: LOW when idle, HIGH when pressed
- NC — Normally closed: HIGH when idle, LOW when pressed

See the image below for the example.
<img src="/docshome/img/algaritm-kit/other/limit-switch-pinout.png"/>
:::

:::note
Limit ports are read-only and are arranged as follows:
- M0:
    - Hlim: 0
    - Llim: 1
- M1:
    - Hlim: 2
    - Llim: 3
- M2:
    - Hlim: 4
    - Llim: 5
- M3:
    - Hlim: 6
    - Llim: 7
:::