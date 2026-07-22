---
id: titan-limits
title: Titan limit ports
---

# Titan limit ports

Titan limit ports are used to get values from buttons and other bool type components.

#### Example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
        # move forward until button pressed
        from robocad.studica import RobotVmxTitan

        import time

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        
        # wait a bit so robocad inites
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = -30

        # wait for button press
        while not robot.titan_limits[0]:
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // move forward until button pressed
        import io.github.softv.RobotVmxTitan;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // wait a bit so robocad inites
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(-30);

                // wait for button press
                while (!robot.getTitanLimits().get(0)) {
                    Thread.sleep(100);
                }
                
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // move forward until button pressed
        #include "studica.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = false;
            RobotVmxTitan robot(IS_REAL_ROBOT);

            // wait a bit so robocad inites
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_motor_speed_0(30);
            robot.set_motor_speed_1(-30);

            // wait for button press
            while (!robot.get_titan_limits()[0]) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            robot.set_motor_speed_0(0);
            robot.set_motor_speed_1(0);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // move forward until button pressed
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = false;

            static void Main(string[] args)
            {
                var robot = new RobotVMXTitan(IsRealRobot);

                // wait a bit so robocad inites
                Thread.Sleep(100);
                robot.MotorSpeed0 = 30;
                robot.MotorSpeed1 = -30;

                // wait for button press
                while (!robot.TitanLimits[0])
                {
                    Thread.Sleep(100);
                }

                robot.MotorSpeed0 = 0;
                robot.MotorSpeed1 = 0;

                Thread.Sleep(100);
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
Titan limit ports are read-only!  
They are typically used for connecting buttons.
Limits are arranged in the following order:
- Limit High 0
- Limit Low 0
- Limit High 1
- Limit Low 1
- Limit High 2
- Limit Low 2
- Limit High 3
- Limit Low 3
:::
