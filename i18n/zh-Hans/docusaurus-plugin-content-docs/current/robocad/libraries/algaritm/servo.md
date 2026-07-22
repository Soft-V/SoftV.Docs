---
id: servo
title: 伺服
---

# 伺服

本节介绍如何使用 robocad 库控制伺服。相同功能也可用于控制 LED。

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
        # 控制伺服电机
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # 等待 robocad 初始化
        time.sleep(0.1)
        robot.set_angle_servo(0, 1) # 将端口1设置为角度0

        # 等待3秒
        time.sleep(3)
        robot.set_angle_servo(180, 1) # 将端口1设置为角度180

        time.sleep(0.1)
        robot.stop()
        ```

        也可以使用电机控制板上的附加伺服：
        ```python
        # 控制电机控制板上的伺服
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # 等待 robocad 初始化
        time.sleep(0.1)
        robot.additional_servo_1 = 0   # 将端口1设置为角度0

        # 等待3秒
        time.sleep(3)
        robot.additional_servo_1 = 180 # 将端口1设置为角度180

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // 控制伺服电机
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // 等待 robocad 初始化
                Thread.sleep(100);
                robot.setAngleServo(0, 1); // 将端口1设置为角度0

                // 等待3秒
                Thread.sleep(3000);
                robot.setAngleServo(180, 1); // 将端口1设置为角度180

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```

        也可以使用电机控制板上的附加伺服：
        ```java
        // 控制电机控制板上的伺服
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // 等待 robocad 初始化
                Thread.sleep(100);
                robot.setAdditionalServo1(0);   // 将端口1设置为角度0

                // 等待3秒
                Thread.sleep(3000);
                robot.setAdditionalServo1(180); // 将端口1设置为角度180

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // 控制伺服电机
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // 等待 robocad 初始化
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_servo_angle(0, 1); // 将端口1设置为角度0

            // 等待3秒
            std::this_thread::sleep_for(std::chrono::seconds(3));
            robot.set_servo_angle(180, 1); // 将端口1设置为角度180

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```

        也可以使用电机控制板上的附加伺服：
        ```cpp
        // 控制电机控制板上的伺服
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // 等待 robocad 初始化
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_additional_servo_1(0);   // 将端口1设置为角度0

            // 等待3秒
            std::this_thread::sleep_for(std::chrono::seconds(3));
            robot.set_additional_servo_1(180); // 将端口1设置为角度180

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // 控制伺服电机
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // 等待 robocad 初始化
                System.Threading.Thread.Sleep(100);
                robot.SetAngleServo(0, 1); // 将端口1设置为角度0

                // 等待3秒
                System.Threading.Thread.Sleep(3000);
                robot.SetAngleServo(180, 1); // 将端口1设置为角度180

                System.Threading.Thread.Sleep(100);
                robot.Stop();
            }
        }
        ```

        也可以使用电机控制板上的附加伺服：
        ```csharp
        // 控制电机控制板上的伺服
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // 等待 robocad 初始化
                System.Threading.Thread.Sleep(100);
                robot.AdditionalServo1 = 0;   // 将端口1设置为角度0

                // 等待3秒
                System.Threading.Thread.Sleep(3000);
                robot.AdditionalServo1 = 180; // 将端口1设置为角度180

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
共有8个伺服端口，编号从1开始。
电机控制板上只有两个附加伺服端口。
:::
