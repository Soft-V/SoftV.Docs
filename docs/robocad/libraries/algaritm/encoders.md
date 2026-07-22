---
id: encoders
title: Encoders
---

# Encoders

Encoders are used to determine the number of motor rotations.

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
        # rotate for 5 seconds, stop and check encoder difference
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # wait until robocad is initialized
        time.sleep(0.1)
        enc_start = robot.motor_enc_0
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        time.sleep(5)
        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        enc_diff = robot.motor_enc_0 - enc_start

        time.sleep(0.1)
        robot.stop()
        ```
        You can also reset the accumulated encoder value:
        ```python
        robot.reset_motor_enc_0()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // rotate for 5 seconds, stop and check encoder difference
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // wait until robocad is initialized
                Thread.sleep(100);
                float encStart = robot.getMotorEnc0();
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                Thread.sleep(5000);
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                float encDiff = robot.getMotorEnc0() - encStart;

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```

        You can also reset the accumulated encoder value:
        ```java
        robot.resetMotorEnc0();
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // rotate for 5 seconds, stop and check encoder difference
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // wait until robocad is initialized
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            int32_t enc_start = robot.get_motor_enc_0();
            robot.set_motor_speed_0(30);
            robot.set_motor_speed_1(30);
            robot.set_motor_speed_2(30);

            std::this_thread::sleep_for(std::chrono::seconds(5));
            robot.set_motor_speed_0(0);
            robot.set_motor_speed_1(0);
            robot.set_motor_speed_2(0);

            int32_t enc_diff = robot.get_motor_enc_0() - enc_start;

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
        You can also reset the accumulated encoder value:
        ```cpp
        robot.reset_motor_enc_0();
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // rotate for 5 seconds, stop and check encoder difference
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // wait until robocad is initialized
                Thread.Sleep(100);
                int encStart = robot.MotorEnc0;
                robot.MotorSpeed0 = 30;
                robot.MotorSpeed1 = 30;
                robot.MotorSpeed2 = 30;

                Thread.Sleep(5000);
                robot.MotorSpeed0 = 0;
                robot.MotorSpeed1 = 0;
                robot.MotorSpeed2 = 0;

                int encDiff = robot.MotorEnc0 - encStart;

                Thread.Sleep(100);
                robot.Stop();
            }
        }
        ```
        You can also reset the accumulated encoder value:
        ```cs
        robot.ResetMotorEnc0();
        ```
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   

:::warning
The internal implementation of encoders may change over time, so values can differ!
:::
