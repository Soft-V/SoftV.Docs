---
id: connecting-servo
title: 伺服电机的连接
---

# 伺服电机的连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

VMX Robotics Controller 提供了多种连接和控制伺服电机的方式 —— 从直接 PWM 控制到专用的伺服电源模块。

VMX 配备专用于伺服控制的 PWM 输出端口，每个端口均支持标准 RC 型信号。这些端口采用与大多数业余级舵机相同的标准 3 针伺服接口，通过单一接口同时提供信号、电源和接地。

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-high-current-dio-overview.png"/>
</div>

要连接伺服电机，请先使用标准 3 针电缆将 Servo Power Block 连接到 VMX — 将一端连接到 VMX 的 PWM 端口，另一端连接到电源模块的 INPUT 端口。

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-servo.png"/>
</div>

然后将您的伺服电机连接到 Servo Power Block 上的 OUTPUT 端口。

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-with-power-block.png"/>
</div>

最终连接示意图如下所示。
<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-connection-assembly.png"/>
</div>

使用下面的代码片段来设置伺服电机的转动角度，并验证其连接是否正确，如示例所示。

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

        servo_0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.set_angle_hcdio(servo_0.get_float(), 1)
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

                ShuffleVariable servo0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAngleHCDIO(servo0.getFloat(), 1);
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

            ShuffleVariable* servo_0 = shufflecad.add_var(new ShuffleVariable("servo0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_servo_angle(servo_0->get_float(), 1);
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

                var servo0 = shufflecad.AddVar(new ShuffleVariable("servo0", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.SetAngleHcdio(servo0.GetFloat(), 1);
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
VMX 上的 HCDIO 端口为**只写**模式。robocadV 库中提供 10 个端口，编号从 1 开始。
:::