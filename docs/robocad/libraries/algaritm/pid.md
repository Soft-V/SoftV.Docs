---
id: pid
title: PID controller
---

# PID controller

The motor controller board has a built-in PID controller. Here are examples of configuring it.

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
        # enable PID controller and set parameters
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # wait a bit for robocad to initialize
        time.sleep(0.1)

        # enable PID controller and set coefficients
        robot.set_pid_settings(True, 0.14, 0.1, 0)
        time.sleep(0.1)

        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        time.sleep(5)
        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // enable PID controller and set parameters
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // wait a bit for robocad to initialize
                Thread.sleep(100);

                // enable PID controller and set coefficients
                robot.setPidSettings(true, 0.14f, 0.1f, 0f);
                Thread.sleep(100);

                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                Thread.sleep(5000);
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // enable PID controller and set parameters
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // wait a bit for robocad to initialize
            std::this_thread::sleep_for(std::chrono::milliseconds(100));

            // enable PID controller and set coefficients
            robot.set_pid_settings(true, 0.14f, 0.1f, 0.0f);
            std::this_thread::sleep_for(std::chrono::milliseconds(100));

            robot.set_motor_speed_0(30);
            robot.set_motor_speed_1(30);
            robot.set_motor_speed_2(30);

            std::this_thread::sleep_for(std::chrono::milliseconds(5000));
            robot.set_motor_speed_0(0);
            robot.set_motor_speed_1(0);
            robot.set_motor_speed_2(0);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // enable PID controller and set parameters
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // wait a bit for robocad to initialize
                Thread.Sleep(100);

                // enable PID controller and set coefficients
                robot.SetPidSettings(true, 0.14f, 0.1f, 0f);
                Thread.Sleep(100);

                robot.MotorSpeed0 = 30;
                robot.MotorSpeed1 = 30;
                robot.MotorSpeed2 = 30;

                Thread.Sleep(5000);
                robot.MotorSpeed0 = 0;
                robot.MotorSpeed1 = 0;
                robot.MotorSpeed2 = 0;

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

:::warning
Be careful — before enabling the PID controller, make sure the encoders are connected to the board.
:::
