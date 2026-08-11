---
id: connecting-limit-switch
title: 连接限位开关
---

# 连接限位开关

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

每个电机端口都配备两个限位开关输入，在板上标记为 Llim 和 Hlim。这两个端口用途相同——它们专为连接限位开关而设计，用于检测机构何时达到行程极限。这些输入没有预定义的功能；你可以在软件中设置它们，以便在开关被触发时停止或反转电机。

<img src="/docshome/img/algaritm-kit/driver/driver-limit-switch-ports.PNG"/>

使用套件附带的标准 2 针线缆将限位开关连接到其端口。与其他连接不同，这些端口不区分极性——导线的哪一端接哪一侧都没有关系，可以按任意方向连接。

<img src="/docshome/img/algaritm-kit/driver/driver-limit-switch-connection.png"/>

下面的代码片段获取连接到 M3 电机 Llim 端口的限位开关的布尔值，并将其发送到 shufflecad。这提供了一种快速简便的方法，用于验证限位开关工作是否正常以及连接是否正确。

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

        ls_3_L: ShuffleVariable = shufflecad.add_var(ShuffleVariable("limit_switch_3_L", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ls_3_L.set_bool(robot.titan_limits[7])
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

                ShuffleVariable ls3L = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("limitSwitch3L", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ls3L.setBool(robot.getTitanLimits()[7]);
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

            ShuffleVariable* ls_3_L = shufflecad.add_var(new ShuffleVariable("limit_switch_3_L", ShuffleVariable::BOOL_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ls_3_L->set_bool(robot.get_titan_limits()[7]);
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

                var ls3L = shufflecad.AddVar(new ShuffleVariable("LimitSwitch3L", ShuffleVariable.BoolType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ls3L.SetBool(robot.TitanLimits[7]);
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
上方的触点始终是公共线（Common）。其余两个触点为：
- NO — 常开：静止时为 LOW，按下时为 HIGH
- NC — 常闭：静止时为 HIGH，按下时为 LOW

请参见下方示例图片。
<img src="/docshome/img/algaritm-kit/other/limit-switch-pinout.png"/>
:::

:::note
限位端口为只读，排列方式如下：
- M0:
    - Hlim: 0
    - Llim: 1
- M1:
    - Hlim: 2
    - Llim: 3
- M2:
    - Hlim: 4
    - Llim: 5
- M3:
    - Hlim: 6
    - Llim: 7
:::
