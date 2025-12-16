---
id: servo
title: Servos
---

# Servos

This page describes servo control functionality via the robocad library. The same functionality can also be used to control LEDs.

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
        # move servo motors
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # wait a bit for robocad to initialize
        time.sleep(0.1)
        robot.set_angle_servo(0, 1) # set angle 0 for port 1

        # wait 3 seconds
        time.sleep(3)
        robot.set_angle_servo(180, 1) # set angle 180 for port 1

        time.sleep(0.1)
        robot.stop()
        ```

        Additional servos on the motor control board can also be used:
        ```python
        # move servo motors on the motor controller board
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # wait a bit for robocad to initialize
        time.sleep(0.1)
        robot.additional_servo_1 = 0   # set angle 0 for port 1

        # wait 3 seconds
        time.sleep(3)
        robot.additional_servo_1 = 180 # set angle 180 for port 1

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // move servo motors
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // wait a bit for robocad to initialize
                Thread.sleep(100);
                robot.setAngleServo(0, 1); // set angle 0 for port 1

                // wait 3 seconds
                Thread.sleep(3000);
                robot.setAngleServo(180, 1); // set angle 180 for port 1

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```

        Additional servos on the motor control board can also be used:
        ```java
        // move servo motors on the motor controller board
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // wait a bit for robocad to initialize
                Thread.sleep(100);
                robot.setAdditionalServo1(0);   // set angle 0 for port 1

                // wait 3 seconds
                Thread.sleep(3000);
                robot.setAdditionalServo1(180); // set angle 180 for port 1

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
There are 8 servo ports. Numbering starts at 1.
The motor controller board has only two additional servo ports.
:::
