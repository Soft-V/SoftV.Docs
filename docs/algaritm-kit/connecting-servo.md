---
id: connecting-servo
title: Connecting servo
---

# Connecting servo

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The main controller features 8 PWM ports specifically designed for connecting standard angular servo motors. These ports generate the precise PWM signals required to position a servo at any angle within its operating range. With 8 independent channels, you can control up to eight servos simultaneously, making the board ideal for complex projects such as multi‑joint robotic arms, pan‑tilt camera gimbals, or any mechanism that requires coordinated motion of multiple actuators.

<img src="/docshome/img/algaritm-kit/shield/shield-pwm-overview.png"/>

To work with servos, first, connect the signal cable from one of the PWM ports on the main controller to the **I** (INPUT) port on the servo power block.
<div style={{ marginBottom: "10px"}}>
    <img src="/docshome/img/algaritm-kit/shield/shield-servo-connection.png"/>
</div>
 Then, plug your servos directly into the **O** (OUT) ports on the servo power block.

<img src="/docshome/img/algaritm-kit/other/servo-power-block-servo-connection.PNG"/>

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
        from robocad.algaritm import RobotAlgaritm
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        servo_0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))
        servo_4: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.set_angle_servo(servo_0.get_float(), 1)
            robot.set_angle_servo(servo_4.get_float(), 5)
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

                ShuffleVariable servo0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable servo4 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAngleServo(servo0.getFloat(), 1);
                    robot.setAngleServo(servo4.getFloat(), 5);
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

            ShuffleVariable* servo_0 = shufflecad.add_var(new ShuffleVariable("servo0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* servo_4 = shufflecad.add_var(new ShuffleVariable("servo4", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_servo_angle(servo_0->get_float(), 1);
                robot.set_servo_angle(servo_4->get_float(), 5);
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

                var servo0 = shufflecad.AddVar(new ShuffleVariable("servo0", ShuffleVariable.FloatType, ShuffleVariable.InVar));
                var servo4 = shufflecad.AddVar(new ShuffleVariable("servo4", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.SetAngleServo(servo0.GetFloat(), 1);
                    robot.SetAngleServo(servo4.GetFloat(), 5);
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
The servo motors included in the kit support an operating range of **0°** to **180°**.
:::

# Connecting additional servo

The main controller already includes servo ports, but for projects that require more servos, the motor driver board provides 2 additional servo outputs — giving you the ability to control even more actuators.

<img src="/docshome/img/algaritm-kit/driver/driver-additional-servo-overview.PNG"/>

The additional servo outputs on the motor driver board use the same standard 3‑pin servo connector. Unlike the servo ports on the main controller, they do not require connection through the servo power block — they can be connected directly to the servos.

<img src="/docshome/img/algaritm-kit/driver/driver-additional-servo.PNG"/>

Use the code snippet below to set additional servo angles and ensure correct servo connection, as shown in the example.

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

        add_servo_2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("add_servo_2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.additional_servo_2 = add_servo_2.get_float()
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

                ShuffleVariable addServo2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("addServo2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAdditionalServo2(addServo2.getFloat());
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

            ShuffleVariable* add_servo_2 = shufflecad.add_var(new ShuffleVariable("add_servo_2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_additional_servo_2(add_servo_2->get_float());
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

                var addServo2 = shufflecad.AddVar(new ShuffleVariable("addServo2", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.AdditionalServo2 = addServo2.GetFloat();
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

