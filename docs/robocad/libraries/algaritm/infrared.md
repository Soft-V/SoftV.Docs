---
id: infrared
title: Infrared distance sensor
---

# Infrared distance sensor

The infrared distance sensor is used to determine the distance to an obstacle.

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
        # move forward until the IR sensor reads 2000 mV
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # wait a bit for robocad to initialize
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = -30

        # wait until the distance is reached
        while robot.analog_1 < 2000:
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // move forward until the IR sensor reads 2000 mV
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

                // wait until the distance is reached
                while (robot.getAnalog1() < 2000) {
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
The voltage on the infrared sensor varies approximately from `570` to `2700`.
To convert voltage to distance you can write a converter function. Example in C#:
```csharp
public static float VoltageToDist(ushort voltage)
{
    // check for division by zero
    if (voltage == 0)
        return 0;
    return (float)Math.Pow((13673.9f / voltage), 1 / 0.83022f);
}
```
:::
