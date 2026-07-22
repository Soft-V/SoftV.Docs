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
        {label: 'C++', value: 'cpp'},
        {label: 'C#', value: 'cs'},
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
    <TabItem value="cpp">
        ```cpp
        // move servo motors
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // wait a bit for robocad to initialize
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_servo_angle(0, 1); // set angle 0 for port 1

            // wait 3 seconds
            std::this_thread::sleep_for(std::chrono::seconds(3));
            robot.set_servo_angle(180, 1); // set angle 180 for port 1

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```

        Additional servos on the motor control board can also be used:
        ```cpp
        // move servo motors on the motor controller board
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // wait a bit for robocad to initialize
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_additional_servo_1(0);   // set angle 0 for port 1

            // wait 3 seconds
            std::this_thread::sleep_for(std::chrono::seconds(3));
            robot.set_additional_servo_1(180); // set angle 180 for port 1

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // move servo motors
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // wait a bit for robocad to initialize
                System.Threading.Thread.Sleep(100);
                robot.SetAngleServo(0, 1); // set angle 0 for port 1

                // wait 3 seconds
                System.Threading.Thread.Sleep(3000);
                robot.SetAngleServo(180, 1); // set angle 180 for port 1

                System.Threading.Thread.Sleep(100);
                robot.Stop();
            }
        }
        ```

        Additional servos on the motor control board can also be used:
        ```csharp
        // move servo motors on the motor controller board
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // wait a bit for robocad to initialize
                System.Threading.Thread.Sleep(100);
                robot.AdditionalServo1 = 0;   // set angle 0 for port 1

                // wait 3 seconds
                System.Threading.Thread.Sleep(3000);
                robot.AdditionalServo1 = 180; // set angle 180 for port 1

                System.Threading.Thread.Sleep(100);
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
There are 8 servo ports. Indexing starts at 1.
The motor controller board has only 2 additional servo ports.
:::
