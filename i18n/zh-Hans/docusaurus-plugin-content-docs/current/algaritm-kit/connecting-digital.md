---
id: connecting-digital
title: 连接按钮和 LED
---

# 连接按钮和 LED

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

扩展板提供 8 个数字 I/O 端口（0-7）。D0–D3 端口被配置为输出，用于驱动 LED，可用于机器人状态指示——例如显示电源、模式或警告状态。D4–D7 端口被配置为输入，用于连接可编程按钮和开关，使操作者能够触发自主动作、切换操作模式或手动覆盖正在运行的例程。

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-buttons-and-leds-overview.png"/>
</div>

套件包含的 LED 可以直接连接到数字输出端口 D0–D3。对于这些 LED，只需将信号引脚（红色或黄色导线）和地线连接到扩展板上对应的端口，即可正常工作。但是，如果要使用其他 LED，可能需要在信号线上串联一个限流电阻。对于大多数标准 5V 应用，约 220Ω 的阻值通常就足够了。

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-leds-connection.png"/>
</div>

套件包含的按钮以与 LED 相同的方式连接到 D4–D7 端口——每个按钮只需要一个信号连接（红色或黄色导线）和一个地线连接即可工作。只需将它们连接到相应的端口，即可作为数字输入使用。

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-button-connection.png"/>
</div>
该代码片段将布尔值设置给 LED（端口 0 和 3），并读取端口 6（如上例所示）的按钮状态。这提供了一种快速简便的方法，用于验证每个设备工作是否正常以及所有连接是否正确。
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

        led0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("led0", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR))
        led3: ShuffleVariable = shufflecad.add_var(ShuffleVariable("led3", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR))
        btn6: ShuffleVariable = shufflecad.add_var(ShuffleVariable("btn6", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.outputs[0] = led0.get_bool()
            robot.outputs[3] = led3.get_bool()
            btn6.set_bool(robot.inputs[3])
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
                ShuffleVariable led0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("led0", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable led3 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("led3", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable btn6 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("btn6", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.getOutputs()[0] = led0.getBool();
                    robot.getOutputs()[3] = led3.getBool();
                    btn6.setBool(robot.getInputs()[3]);
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

            ShuffleVariable* led0 = shufflecad.add_var(new ShuffleVariable("led0", ShuffleVariable::BOOL_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* led3 = shufflecad.add_var(new ShuffleVariable("led3", ShuffleVariable::BOOL_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* btn6 = shufflecad.add_var(new ShuffleVariable("btn6", ShuffleVariable::BOOL_TYPE, ShuffleVariable::OUT_VAR));

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(60)) {
                robot.outputs[0] = led0->get_bool();
                robot.outputs[3] = led3->get_bool();
                btn6->set_bool(robot.get_inputs()[3]);
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

                var led0 = shufflecad.AddVar(new ShuffleVariable("led0", ShuffleVariable.BoolType, ShuffleVariable.InVar));
                var led3 = shufflecad.AddVar(new ShuffleVariable("led3", ShuffleVariable.BoolType, ShuffleVariable.InVar));

                var btn6 = shufflecad.AddVar(new ShuffleVariable("btn6", ShuffleVariable.BoolType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.Outputs[0] = led0.GetBool();
                    robot.Outputs[3] = led3.GetBool();
                    btn6.SetBool(robot.Inputs[3]);
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
急停按钮引脚定义：

- 黄色 — NO（常开：静止时为 LOW，按下时为 HIGH）
- 黑色 — C

请参见下方示例图片。
<img src="/docshome/img/algaritm-kit/other/ems.png"/>
:::
:::note
默认情况下，扩展板的 VCC 线连接到板载 5V 电源轨。若要兼容工作在 3.3V 的设备，只需重新放置跳线即可切换输出电压。这样可以无缝对接套件之外的各种外部传感器。请注意，重新放置跳线也会同时改变超声波传感器的输出电压。使用 3.3V 时的正确跳线位置请参见下图。

<div style={{ marginRight: "20px", marginLeft: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-v2-3v3.png"/>
</div>
:::
