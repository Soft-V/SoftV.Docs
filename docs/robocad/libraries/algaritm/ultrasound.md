---
id: ultrasound
title: Ultrasound distance sensor
---

# Ultrasound distance sensor

The ultrasound distance sensor is used to determine the distance to an obstacle.

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
        # move forward until the ultrasound sensor measures 15 cm
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # wait a bit for robocad to initialize
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = -30

        # wait until distance is measured
        while robot.us_1 > 15:
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // move forward until the ultrasound sensor measures 15 cm
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // wait a bit for robocad to initialize
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(-30);

                // wait until distance is measured
                while (robot.getUltrasound1() > 15) {
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
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   

:::note
Ultrasound sensor values vary approximately from `8` to `100` cm.
:::
