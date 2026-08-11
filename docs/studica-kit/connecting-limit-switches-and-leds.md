---
id: connecting-limit-switches-and-leds
title: Connecting buttons and LEDs
---

# Connecting limit switches and LEDs

# Connecting limit switch

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each motor port is equipped with two limit switch inputs, labeled Lim.H and Lim.L on the board. Both ports serve the same purpose — they are designed for connecting end‑stop switches that detect when a mechanism has reached the limit of its travel. These inputs do not have predefined functions; you can assign them in software to stop or reverse the motor when a switch is triggered.

Use the standard 3‑pin cables supplied with the kit to connect limit switch to its port. Unlike other connections, these ports are not polarity-sensitive — it doesn't matter which side of the wire goes where. You can connect them in any orientation.

<img src="/docshome/img/studica-kit/titan/titan-connecting-button.png"/>

Use the code snippet below to verify correct connection of limit switch. According to the example above, the limit switch is connected to **M2 Lim. H** port.

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

        limit_switch_4: ShuffleVariable = shufflecad.add_var(ShuffleVariable("limit_switch_4", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            limit_switch_4.set_bool(robot.titan_limits[4])
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

                ShuffleVariable limitSwitch4 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("limitSwitch4", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    limitSwitch4.setBool(robot.getTitanLimits()[4]);
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

            ShuffleVariable* limit_switch_4 = shufflecad.add_var(new ShuffleVariable("limit_switch_4", ShuffleVariable::BOOL_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                limit_switch_4->set_bool(robot.get_titan_limits()[4]);
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

                var limitSwitch4 = shufflecad.AddVar(new ShuffleVariable("limitSwitch4", ShuffleVariable.BoolType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    limitSwitch4.SetBool(robot.TitanLimits[4]);
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
<img src="/docshome/img/studica-kit/other/limit-switch-pinout.png"/>
:::

:::note
Titan limit ports are **read-only** and are arranged in the following order:

- **M0:**
    - Lim. H — 0
    - Lim. L — 1
- **M1:**
    - Lim. H — 2
    - Lim. L — 3
- **M2:**
    - Lim. H — 4
    - Lim. L — 5
- **M3:**
    - Lim. H — 6
    - Lim. L — 7
:::

# Connecting LEDs

For simple indicator LEDs (e.g., status lights), you can connect them directly to the VMX using the High-Current DIO Ports. These ports provide power, ground, and a signal pin that can be configured as a digital output.

<img src="/docshome/img/studica-kit/vmx/vmx-high-current-dio-overview.png"/>

Use the standard 3‑pin cable to connect the LED to the VMX's High‑Current DIO Header. For this connection, you only need the signal wire and ground (GND) — the power line can be left unconnected.

<div style={{ marginBottom: "10px" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-led.png"/>
</div>
Use the code snippet below to set led state and ensure correct LED connection, as shown in the example.

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

        green_led: ShuffleVariable = shufflecad.add_var(ShuffleVariable("green_led", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.set_bool_hcdio(green_led.get_bool(), 5)
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

                ShuffleVariable greenLed = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("greenLed", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setBoolHCDIO(greenLed.getBool(), 5);
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

            ShuffleVariable* green_led = shufflecad.add_var(new ShuffleVariable("green_led", ShuffleVariable::BOOL_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_led_state(green_led->get_bool(), 5);
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

                var greenLed = shufflecad.AddVar(new ShuffleVariable("greenLed", ShuffleVariable.BoolType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.SetBoolHcdio(greenLed.GetBool(), 5);
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