---
id: connecting-servo
title: 连接舵机
---

# 连接舵机

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

主控制器提供 8 个 PWM 端口，专门用于连接标准角度舵机。这些端口生成精确的 PWM 信号，以将舵机定位到其工作范围内的任意角度。凭借 8 个独立通道，你可以同时控制多达八个舵机，非常适合多关节机械臂、云台摄像头，或任何需要多个执行器协同运动的机构等复杂项目。

<img src="/docshome/img/algaritm-kit/shield/shield-pwm-overview.png"/>

要使用舵机，首先将信号线从主控制器上的某个 PWM 端口连接到舵机电源模块的 **I**（输入）端口。

<img src="/docshome/img/algaritm-kit/shield/shield-servo-connection.png"/>

然后，将舵机直接插入舵机电源模块的 **O**（输出）端口。

<img src="/docshome/img/algaritm-kit/other/servo-power-block-servo-connection.PNG"/>

使用下面的代码片段设置舵机角度，并确认舵机连接是否正确，如示例所示。

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
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        servo_0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))
        servo_4: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.set_angle_servo(servo_0.get_float(), 1)
            robot.set_angle_servo(servo_4.get_float(), 5)
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotAlgaritm;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.shufflecad.Shufflecad;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);

                ShuffleVariable servo0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable servo4 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAngleServo(servo0.getFloat(), 1);
                    robot.setAngleServo(servo4.getFloat(), 5);
                    Thread.sleep(20);
                }

                shufflecad.stop();
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotAlgaritm robot(true);
            Shufflecad shufflecad(&robot);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            ShuffleVariable* servo_0 = shufflecad.add_var(new ShuffleVariable("servo0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* servo_4 = shufflecad.add_var(new ShuffleVariable("servo4", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_servo_angle(servo_0->get_float(), 1);
                robot.set_servo_angle(servo_4->get_float(), 5);
                std::this_thread::sleep_for(std::chrono::milliseconds(20));
            }

            shufflecad.stop();
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
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.Sleep(1000);

                var servo0 = shufflecad.AddVar(new ShuffleVariable("servo0", ShuffleVariable.FloatType, ShuffleVariable.InVar));
                var servo4 = shufflecad.AddVar(new ShuffleVariable("servo4", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.SetAngleServo(servo0.GetFloat(), 1);
                    robot.SetAngleServo(servo4.GetFloat(), 5);
                    Thread.Sleep(20);
                }

                shufflecad.Stop();
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
套件所含舵机的工作范围为 **0°** 至 **180°**。
:::

# 连接附加舵机

主控制器已内置了舵机端口，但对于需要更多舵机的项目，电机驱动板还提供 2 个额外的舵机输出——让你能够控制更多的执行器。

<img src="/docshome/img/algaritm-kit/driver/driver-additional-servo-overview.PNG"/>

电机驱动板上的附加舵机输出使用与标准相同的 3 针舵机接口。与主控制器上的舵机端口一样，它们也必须通过舵机电源模块连接，以确保供电稳定。

<img src="/docshome/img/algaritm-kit/driver/driver-additional-servo.PNG"/>

使用下面的代码片段设置附加舵机的角度，并确认舵机连接是否正确，如示例所示。

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
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        add_servo_2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("add_servo_2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.additional_servo_2 = add_servo_2.get_float()
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotAlgaritm;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.shufflecad.Shufflecad;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);

                ShuffleVariable addServo2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("addServo2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAdditionalServo2(addServo2.getFloat());
                    Thread.sleep(20);
                }

                shufflecad.stop();
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotAlgaritm robot(true);
            Shufflecad shufflecad(&robot);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            ShuffleVariable* add_servo_2 = shufflecad.add_var(new ShuffleVariable("add_servo_2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_additional_servo_2(add_servo_2->get_float());
                std::this_thread::sleep_for(std::chrono::milliseconds(20));
            }

            shufflecad.stop();
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
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.Sleep(1000);

                var addServo2 = shufflecad.AddVar(new ShuffleVariable("addServo2", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.AdditionalServo2 = addServo2.GetFloat();
                    Thread.Sleep(20);
                }

                shufflecad.Stop();
                robot.Stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="labview">
        **待完成：** 😇
    </TabItem>
</Tabs>
