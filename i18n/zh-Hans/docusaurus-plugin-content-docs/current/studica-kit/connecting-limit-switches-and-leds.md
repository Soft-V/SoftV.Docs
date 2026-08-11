---
id: connecting-limit-switches-and-leds
title: 按钮和 LED 的连接
---

# 按钮和 LED 的连接

# 按钮的连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

每个电机端口都配备两个限位开关输入，在板上标记为 Lim.H 和 Lim.L。两个端口功能相同——都用于连接限位开关，以检测机构是否已到达行程终点。这些输入没有预定义功能；您可以在软件中将其配置为在开关触发时停止或反转电机。

使用套件中附带的标准 3 针电缆将限位开关连接到相应端口。与其他连接不同，这些端口不区分极性——导线的哪一端连接到哪一侧没有关系。您可以按任意方向连接它们。

<img src="/docshome/img/studica-kit/titan/titan-connecting-button.png"/>

使用下面的代码片段来验证限位开关的连接是否正确。根据上面的示例，限位开关连接到 **M2 Lim. H** 端口。

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

        limit_switch_4: ShuffleVariable = shufflecad.add_var(ShuffleVariable("limit_switch_4", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            limit_switch_4.set_bool(robot.titan_limits[4])
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

                ShuffleVariable limitSwitch4 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("limitSwitch4", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    limitSwitch4.setBool(robot.getTitanLimits()[4]);
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

            ShuffleVariable* limit_switch_4 = shufflecad.add_var(new ShuffleVariable("limit_switch_4", ShuffleVariable::BOOL_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                limit_switch_4->set_bool(robot.get_titan_limits()[4]);
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

                var limitSwitch4 = shufflecad.AddVar(new ShuffleVariable("limitSwitch4", ShuffleVariable.BoolType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    limitSwitch4.SetBool(robot.TitanLimits[4]);
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
上方的触点始终为公共线（Common）。其余两个触点分别为：
- NO（常开）：空闲时为 LOW，按下时为 HIGH
- NC（常闭）：空闲时为 HIGH，按下时为 LOW

示例请参见下图
<img src="/docshome/img/studica-kit/other/limit-switch-pinout.png"/>
:::

:::note
Titan 上的限位端口为只读，并按以下顺序排列：

- **M0:**
    - Lim. H — 0
    - Lim. L — 1
- **M1:**
    - Lim. H — 2
    - Lim. L — 3
- **M2:**
    - Lim. H — 4
    - Lim. L — 5
- **M3:**
    - Lim. H — 6
    - Lim. L — 7
:::

# LED 的连接

对于简单的指示性 LED（例如状态指示灯），您可以使用 High‑Current DIO 端口将其直接连接到 VMX。这些端口提供电源、接地以及可配置为数字输出的信号引脚。

<img src="/docshome/img/studica-kit/vmx/vmx-high-current-dio-overview.png"/>

使用标准 3 针电缆将 LED 连接到 VMX 上的 High‑Current DIO 接口。此连接仅需信号线和接地（GND）——电源线可保持未连接状态。

<div style={{ marginBottom: "10px" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-led.png"/>
</div>

使用下面的代码片段来设置 LED 的状态，并验证其连接是否正确，如示例所示。

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

        green_led: ShuffleVariable = shufflecad.add_var(ShuffleVariable("green_led", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.set_bool_hcdio(green_led.get_bool(), 5)
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

                ShuffleVariable greenLed = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("greenLed", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setBoolHCDIO(greenLed.getBool(), 5);
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

            ShuffleVariable* green_led = shufflecad.add_var(new ShuffleVariable("green_led", ShuffleVariable::BOOL_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_led_state(green_led->get_bool(), 5);
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

                var greenLed = shufflecad.AddVar(new ShuffleVariable("greenLed", ShuffleVariable.BoolType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.SetBoolHcdio(greenLed.GetBool(), 5);
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