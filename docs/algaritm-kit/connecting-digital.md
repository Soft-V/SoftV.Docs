---
id: connecting-digital
title: Connecting buttons and LEDs
---

# Connecting buttons and LEDs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ЕНhe shield provides 8 digital I/O ports 0-7. Ports D0–D3 are configured as outputs for driving LEDs, which are used for robot status indication — for example, to show power, mode, or warning states. Ports D4–D7 are configured as inputs for connecting programmable buttons and switches, allowing the operator to trigger autonomous actions, switch between operational modes, or manually override running routines.

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-buttons-and-leds-overview.png"/>
</div>

The kit includes LEDs that can be connected directly to the digital output ports D0–D3. For these LEDs, simply connect the signal pin (red or yellow wire) and ground to the corresponding ports on the shield, and they are ready to operate. However, if you want to use other LEDs, you may need to add a current-limiting resistor in series with the signal line. A value of around 220Ω is typically sufficient for most standard 5V applications.

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-leds-connection.png"/>
</div>

The included buttons connect to ports D4–D7 just like the LEDs — each button requires only a signal connection (red or yellow wire) and a ground connection to function. Simply wire them to the corresponding ports, and they are ready to be used as digital inputs.

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-button-connection.png"/>
</div>
The code snippet sets bool values to LEDs (port 0 and 3) and reads button status from the port 6 (as shown in the example above). This provides a quick and easy way to verify that each device is functioning properly and that all connections have been made correctly.
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

        led0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("led0", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR))
        led3: ShuffleVariable = shufflecad.add_var(ShuffleVariable("led3", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR))
        btn6: ShuffleVariable = shufflecad.add_var(ShuffleVariable("btn6", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.outputs[0] = led0.get_bool()
            robot.outputs[3] = led3.get_bool()
            btn6.set_bool(robot.inputs[3])
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
                ShuffleVariable led0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("led0", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable led3 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("led3", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable btn6 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("btn6", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.getOutputs()[0] = led0.getBool();
                    robot.getOutputs()[3] = led3.getBool();
                    btn6.setBool(robot.getInputs()[3]);
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

            ShuffleVariable* led0 = shufflecad.add_var(new ShuffleVariable("led0", ShuffleVariable::BOOL_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* led3 = shufflecad.add_var(new ShuffleVariable("led3", ShuffleVariable::BOOL_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* btn6 = shufflecad.add_var(new ShuffleVariable("btn6", ShuffleVariable::BOOL_TYPE, ShuffleVariable::OUT_VAR));

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(60)) {
                robot.outputs[0] = led0->get_bool();
                robot.outputs[3] = led3->get_bool();
                btn6->set_bool(robot.get_inputs()[3]);
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

                var led0 = shufflecad.AddVar(new ShuffleVariable("led0", ShuffleVariable.BoolType, ShuffleVariable.InVar));
                var led3 = shufflecad.AddVar(new ShuffleVariable("led3", ShuffleVariable.BoolType, ShuffleVariable.InVar));

                var btn6 = shufflecad.AddVar(new ShuffleVariable("btn6", ShuffleVariable.BoolType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.Outputs[0] = led0.GetBool();
                    robot.Outputs[3] = led3.GetBool();
                    btn6.SetBool(robot.Inputs[3]);
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
Emergency stop button pinout:

- Yellow — NO (Normally Opened: LOW when idle, HIGH when pressed)
- Black — C

See the image below for the example.
<img src="/docshome/img/algaritm-kit/other/ems.png"/>
:::
:::note
By default, the shield's VCC line is connected to the onboard 5V rail. To accommodate devices that operate at 3.3V, you can simply reposition the jumper and switch the output voltage accordingly. This ensures seamless integration with a wide range of external sensors beyond those included in the kit. Note that repositioning the jumper will also change ultrasonic sensors' output voltage. Refer to the image below for correct jumper position when using 3.3V.

<div style={{ marginRight: "20px", marginLeft: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-v2-3v3.png"/>
</div>
:::