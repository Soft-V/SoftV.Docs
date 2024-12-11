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
        {label: 'LabVIEW', value: 'labview'},
    ]}>
    <TabItem value="python">  
        ```python
        # move forward until button pressed
        from robocad.studica import RobotVmxTitan

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
        import io.github.softv.studica.RobotVmxTitan;

        public class Main {
            const boolean IS_REAL_ROBOT = false;

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
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   

:::note
Titan limit ports are read-only!  
Usually used for buttons.  
Limits are placed in the order:
- Limit High 0
- Limit Low 0
- Limit High 1
- Limit Low 1
- Limit High 2
- Limit Low 2
- Limit High 3
- Limit Low 3
:::
