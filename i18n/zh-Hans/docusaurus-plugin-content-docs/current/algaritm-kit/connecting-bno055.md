---
id: connecting-bno055
title: 连接 BNO055
---

# 连接 BNO055

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

BNO055 是博世传感器公司（Bosch Sensortec）出品的智能九轴绝对方向传感器。它将三个核心传感器集成在一块板上：用于测量线性加速度的三轴加速度计、用于角速度的三轴陀螺仪，以及用于磁场强度的三轴磁力计。

该板提供 UART 和 I2C 接口以连接其他外设。I2C_1 端口专为 BNO055 传感器设计。
<img src="/docshome/img/algaritm-kit/shield/shield-uart-i2c-ports.PNG"/>

使用配套的 6 转 4 针线缆连接传感器，注意 6 针一侧的引脚方向要正确。

<img src="/docshome/img/algaritm-kit/shield/shield-bno055-connection.PNG"/>

该代码片段获取偏航角（yaw）、横滚角（roll）和俯仰角（pitch）的数值并发送到 shufflecad。这提供了一种快速简便的方法，用于验证姿态传感器工作是否正常以及连接是否正确。

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

        yaw: ShuffleVariable = shufflecad.add_var(ShuffleVariable("yaw", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        roll: ShuffleVariable = shufflecad.add_var(ShuffleVariable("roll", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        pitch: ShuffleVariable = shufflecad.add_var(ShuffleVariable("pitch", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            yaw.set_float(robot.yaw)
            roll.set_float(robot.roll)
            pitch.set_float(robot.pitch)
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

                ShuffleVariable yaw = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("yaw", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable roll = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("roll", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable pitch = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("pitch", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    yaw.setFloat(robot.getYaw());
                    roll.setFloat(robot.getRoll());
                    pitch.setFloat(robot.getPitch());
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

            ShuffleVariable* yaw = shufflecad.add_var(new ShuffleVariable("yaw", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* roll = shufflecad.add_var(new ShuffleVariable("roll", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* pitch = shufflecad.add_var(new ShuffleVariable("pitch", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(60)) {
                yaw->set_float(robot.get_yaw());
                roll->set_float(robot.get_roll());
                pitch->set_float(robot.get_pitch());
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

                var yaw = shufflecad.AddVar(new ShuffleVariable("yaw", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var roll = shufflecad.AddVar(new ShuffleVariable("roll", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var pitch = shufflecad.AddVar(new ShuffleVariable("pitch", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    yaw.SetFloat(robot.Yaw);
                    roll.SetFloat(robot.Roll);
                    pitch.SetFloat(robot.Pitch);
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
BNO055 引脚定义：

- 红色 — 3.3V
- 黑色 — GND
- 黄色 — SDA
- 绿色 — SCL

请参见下方示例图片。
<div style={{paddingLeft: "20px", paddingRight: "20px"}}>
    <img src="/docshome/img/algaritm-kit/other/bno055.png"/>
</div>
:::
