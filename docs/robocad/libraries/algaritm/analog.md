---
id: analog
title: Analog sensors
---

# Analog sensors

Analog sensors are used to read voltage from analog components.

#### Example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="python"
    values={[
        {label: 'Python', value: 'python'},
        {label: 'Java', value: 'java'},
        {label: 'LabVIEW', value: 'labview'},
    ]}>
    <TabItem value="python">  
        ```python
        # Rotate until the robot finds a black line connected to analog port 3
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # wait until robocad is initialized
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        # wait for the line
        while robot.analog_3 > 1500:
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // Rotate until the robot finds a black line connected to analog port 3
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // wait until robocad is initialized
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                // wait for the line
                while (robot.getAnalog3() > 1500) {
                    Thread.sleep(100);
                }
                
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   

:::note
Analog ports are used to connect analog sensors (for example: the [infrared distance sensor](infrared)).
The shield has only 8 analog ports. Indexing starts at 1.
:::
