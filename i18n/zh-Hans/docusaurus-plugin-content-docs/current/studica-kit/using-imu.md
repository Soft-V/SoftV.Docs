---
id: using-imu
title: IMU 的使用
---

# IMU 的使用

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

VMX Robotics Controller 集成了基于 navX 技术的 9 轴惯性测量单元（IMU），可为机器人应用提供全面的运动测量和方向跟踪功能。但目前仅提供偏航角（yaw）数据。

以下代码片段将偏航角（yaw）值发送到 shufflecad。

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
        from robocad.studica import RobotVmxTitan
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        import time

        robot: RobotVmxTitan = RobotVmxTitan(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        yaw: ShuffleVariable = shufflecad.add_var(ShuffleVariable("yaw", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            yaw.set_float(robot.yaw)
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotVmxTitan;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.shufflecad.Shufflecad;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);

                ShuffleVariable yaw = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("yaw", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    yaw.setFloat(robot.getYaw());

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
        #include "studica.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotVmxTitan robot(true);
            Shufflecad shufflecad(&robot);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            ShuffleVariable* yaw = shufflecad.add_var(new ShuffleVariable("yaw", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(60)) {
                yaw->set_float(robot.get_yaw());
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
                RobotVMXTitan robot = new RobotVMXTitan(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.Sleep(1000);

                var yaw = shufflecad.AddVar(new ShuffleVariable("yaw", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
            
                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    yaw.SetFloat(robot.Yaw);
                    Thread.Sleep(20);
                }

                shufflecad.Stop();
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
偏航角（yaw）的取值范围为 -180 到 180 度。
:::