---
id: connecting-limit-switches-and-leds
title: Подключение кнопок и LED
---

# Подключение кнопок и LED

# Подключение кнопок

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Каждый порт мотора оснащён двумя входами для концевых выключателей, обозначенными на плате как Lim.H и Lim.L. Оба порта выполняют одну и ту же функцию — они предназначены для подключения концевых выключателей, которые определяют, когда механизм достиг предела своего хода. Эти входы не имеют предопределённых функций; вы можете назначить их в программном обеспечении для остановки или реверса двигателя при срабатывании концевика.

Используйте стандартные 3-пиновые кабели, входящие в набор, для подключения концевых выключателей к соответствующим портам. В отличие от других подключений, эти порты не чувствительны к полярности — не имеет значения, какая сторона провода куда подключается. Вы можете подключать их в любой ориентации.

<img src="/docshome/img/studica-kit/titan/titan-connecting-button.png"/>

Используйте приведённый ниже фрагмент кода, чтобы проверить правильность подключения концевого выключателя. Согласно примеру выше, концевой выключатель подключён к порту **M2 Lim. H**.

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
Верхний контакт всегда является общим проводом (Common). Остальные два контакта:
- NO (Normally Open — нормально разомкнутый): LOW в состоянии покоя, HIGH при нажатии;
- NC (Normally Closed — нормально замкнутый): HIGH в состоянии покоя, LOW при нажатии.

Пример см. на изображении ниже.
<img src="/docshome/img/studica-kit/other/limit-switch-pinout.png"/>
:::

:::note
Порты концевиков на Titan доступны **только для чтения** и расположены в следующем порядке:

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

# Подключение LED

Для простых индикаторных светодиодов (например, светодиодов состояния) вы можете подключать их напрямую к VMX, используя порты High‑Current DIO. Эти порты обеспечивают питание, землю и сигнальный контакт, который можно настроить как цифровой выход.

<img src="/docshome/img/studica-kit/vmx/vmx-high-current-dio-overview.png"/>

Используйте стандартный 3-пиновый кабель для подключения светодиода к разъёму High‑Current DIO на VMX. Для этого подключения вам понадобятся только сигнальный провод и земля (GND) — линию питания можно оставить неподключённой.

<div style={{ marginBottom: "10px" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-led.png"/>
</div>

Используйте приведённый ниже фрагмент кода, чтобы установить состояние светодиода и проверить правильность его подключения, как показано в примере.

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
Порты HCDIO на VMX доступны **только для записи**. В библиотеке robocadV доступно 10 портов. Нумерация начинается с 1.
:::