---
id: connecting-step-motors
title: 连接步进电机
---

# 连接步进电机

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

除直流电机和舵机外，电机驱动板还支持步进电机。提供两个专用端口，可连接最多两台步进电机，实现精确的增量定位，适用于机械臂、传送带或云台机构等应用。

<img src="/docshome/img/algaritm-kit/driver/driver-step-motor-ports.PNG"/>

使用套件附带的标准线缆将步进电机连接到板上。

<img src="/docshome/img/algaritm-kit/driver/driver-step-motors-connection.PNG"/>

下面的代码片段为示例中连接的每台步进电机设置位置。这提供了一种快速简便的方法，用于验证每台电机工作是否正常以及所有连接是否正确。

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
        from robocad.algaritm import RobotAlgaritm
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
        time.sleep(1)

        robot.step_motor_move(1, 10000, 1000, True)

        time.sleep(0.1)
        while robot.is_step_1_busy:
            time.sleep(0.1)

        robot.step_motor_move(2, 10000, 1000, False)

        time.sleep(0.1)
        while robot.is_step_2_busy:
            time.sleep(0.1)

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotAlgaritm;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Thread.sleep(100);
                
                robot.stepMotorMove(1, 10000, 1000, true);
                
                Thread.sleep(100);
                while (robot.isStep1Busy()) {
                    Thread.sleep(100);
                }
                
                robot.stepMotorMove(2, 10000, 1000, false);
                
                Thread.sleep(100);
                while (robot.isStep2Busy()) {
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
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotAlgaritm robot(true);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            robot.step_motor_move(1, 10000, 1000, true);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_1_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            robot.step_motor_move(2, 10000, 1000, false);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_2_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        using RobocadCs;

        class Program
        {
            public static void Main(string[] args)
            {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Thread.Sleep(1000);

                robot.StepMotorMove(1, 10000, 1000, true);

                Thread.Sleep(100);
                while (robot.IsStep1Busy)
                {
                    Thread.Sleep(100);
                }

                robot.StepMotorMove(2, 10000, 1000, false);

                Thread.Sleep(100);
                while (robot.IsStep2Busy)
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
        **待完成：** 😇
    </TabItem>
</Tabs>

:::note
套件包含一个 17HS2408 NEMA17 步进电机。该电机步距角为 1.8°，可实现平滑精确的增量运动。转动一整圈需要 200 步（360° ÷ 每步 1.8°），因此易于实现精准定位。
<img src="/docshome/img/algaritm-kit/other/step-motor.PNG"/>
:::
