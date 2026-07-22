---
id: step-motors
title: Step motors
---

# Step motors

Step motors are used to move the robot or its components.

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
        # rotate in one direction, then in the other
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # wait a bit for robocad to initialize
        time.sleep(0.1)

        # rotate one way for 10000 steps
        robot.step_motor_move(1, 10000, 1000, True)

        # wait until the motor reaches the target
        time.sleep(0.1)
        while robot.is_step_1_busy:
            time.sleep(0.1)

        # rotate the other way for 10000 steps
        robot.step_motor_move(1, 10000, 1000, False)

        # wait until the motor reaches the target
        time.sleep(0.1)
        while robot.is_step_1_busy:
            time.sleep(0.1)

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // rotate in one direction, then in the other
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // wait a bit for robocad to initialize
                Thread.sleep(100);

                // rotate one way for 10000 steps
                robot.stepMotorMove(1, 10000, 1000, true);

                // wait until the motor reaches the target
                Thread.sleep(100);
                while (robot.isStep1Busy()) {
                    Thread.sleep(100);
                }

                // rotate the other way for 10000 steps
                robot.stepMotorMove(1, 10000, 1000, false);

                // wait until the motor reaches the target
                Thread.sleep(100);
                while (robot.isStep1Busy()) {
                    Thread.sleep(100);
                }

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // rotate in one direction, then in the other
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // wait a bit for robocad to initialize
            std::this_thread::sleep_for(std::chrono::milliseconds(100));

            // rotate one way for 10000 steps
            robot.step_motor_move(1, 10000, 1000, true);

            // wait until the motor reaches the target
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_1_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            // rotate the other way for 10000 steps
            robot.step_motor_move(1, 10000, 1000, false);

            // wait until the motor reaches the target
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_1_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // rotate in one direction, then in the other
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // wait a bit for robocad to initialize
                Thread.Sleep(100);

                // rotate one way for 10000 steps
                robot.StepMotorMove(1, 10000, 1000, true);

                // wait until the motor reaches the target
                Thread.Sleep(100);
                while (robot.IsStep1Busy)
                {
                    Thread.Sleep(100);
                }

                // rotate the other way for 10000 steps
                robot.StepMotorMove(1, 10000, 1000, false);

                // wait until the motor reaches the target
                Thread.Sleep(100);
                while (robot.IsStep1Busy)
                {
                    Thread.Sleep(100);
                }

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
Step motors 1 and 2 are available for control.
:::
