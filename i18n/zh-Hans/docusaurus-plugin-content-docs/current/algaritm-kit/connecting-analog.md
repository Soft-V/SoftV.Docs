---
id: connecting-analog
title: 连接模拟传感器
---

# 连接模拟传感器

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TCRT5000 是套件自带的一款多功能反射式光电传感器。其工作原理很简单：它发射红外光并测量反射回来的光量。这使它非常适合循线机器人等项目，传感器可以区分黑线和白色背景。

<div style={{ paddingBottom: "10px" }}>
    <img src="/docshome/img/algaritm-kit/other/tcrt5000-line-follower-sensor.PNG"/>
</div>

使用套件附带的标准 3 针线缆将循线传感器连接到模拟输入端口。请务必注意正确的引脚定义。

<img src="/docshome/img/algaritm-kit/shield/shield-tcrt5000-connection.PNG"/>

下面的代码片段读取连接到端口 1（如上例所示）的模拟传感器的数值，并将其发送到 shufflecad。这提供了一种快速简便的方法，用于验证传感器工作是否正常以及连接是否正确。

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

        robot = RobotAlgaritm(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        ir1_line_follower: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir1_line_follower", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ir1_line_follower.set_float(robot.analog_2())
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

                ShuffleVariable ir1LineFollower = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir1LineFollower", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ir1LineFollower.setFloat(robot.getAnalog2());
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

            ShuffleVariable* ir1_line_follower = shufflecad.add_var(new ShuffleVariable("ir1_line_follower", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ir1_line_follower->set_float(robot.get_analog_1());
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

                var ir1LineFollower = shufflecad.AddVar(new ShuffleVariable("ir1LineFollower", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ir1LineFollower.SetFloat(robot.Analog1);
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
TCRT5000 循线传感器引脚定义：
- 黑色 — GND
- 白色 — OUT (A1)
- 红色 — VCC (5V)

请参见下方示例图片。
<img src="/docshome/img/algaritm-kit/other/tcrt5000-pinout.PNG"/>
:::
