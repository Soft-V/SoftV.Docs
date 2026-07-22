---
id: step-motors
title: 步进电机
---

# 步进电机

步进电机用于驱动机器人及其各功能模块。

#### 示例：

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
        # 向一个方向旋转，然后向相反方向旋转
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # 等待 robocad 初始化
        time.sleep(0.1)

        # 向一个方向旋转 10000 步
        robot.step_motor_move(1, 10000, 1000, True)

        # 等待电机到达目标
        time.sleep(0.1)
        while robot.is_step_1_busy:
            time.sleep(0.1)

        # 向相反方向旋转 10000 步
        robot.step_motor_move(1, 10000, 1000, False)

        # 等待电机到达目标
        time.sleep(0.1)
        while robot.is_step_1_busy:
            time.sleep(0.1)

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // 向一个方向旋转，然后向相反方向旋转
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // 等待 robocad 初始化
                Thread.sleep(100);

                // 向一个方向旋转 10000 步
                robot.stepMotorMove(1, 10000, 1000, true);

                // 等待电机到达目标
                Thread.sleep(100);
                while (robot.isStep1Busy()) {
                    Thread.sleep(100);
                }

                // 向相反方向旋转 10000 步
                robot.stepMotorMove(1, 10000, 1000, false);

                // 等待电机到达目标
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
        // 向一个方向旋转，然后向相反方向旋转
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // 等待 robocad 初始化
            std::this_thread::sleep_for(std::chrono::milliseconds(100));

            // 向一个方向旋转 10000 步
            robot.step_motor_move(1, 10000, 1000, true);

            // 等待电机到达目标
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_1_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            // 向相反方向旋转 10000 步
            robot.step_motor_move(1, 10000, 1000, false);

            // 等待电机到达目标
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
        // 向一个方向旋转，然后向相反方向旋转
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // 等待 robocad 初始化
                System.Threading.Thread.Sleep(100);

                // 向一个方向旋转 10000 步
                robot.StepMotorMove(1, 10000, 1000, true);

                // 等待电机到达目标
                System.Threading.Thread.Sleep(100);
                while (robot.IsStep1Busy)
                {
                    System.Threading.Thread.Sleep(100);
                }

                // 向相反方向旋转 10000 步
                robot.StepMotorMove(1, 10000, 1000, false);

                // 等待电机到达目标
                System.Threading.Thread.Sleep(100);
                while (robot.IsStep1Busy)
                {
                    System.Threading.Thread.Sleep(100);
                }

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
可控制的步进电机端口为 1 和 2。
:::
