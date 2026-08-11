---
id: connecting-infrared
title: Подключение инфракрасных датчиков
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Подключение инфракрасных датчиков

Плата оснащена 4 специализированными портами для аналоговых датчиков со стандартной трёхконтактной распиновкой: **GND**, **5V** и **S** (сигнал). Такая конфигурация обеспечивает совместимость с широким спектром аналоговых датчиков, например, инфракрасных. Встроенный источник питания на 5 В обеспечивает достаточное питание для инфракрасных датчиков расстояния, поставляемых с набором, что исключает необходимость во внешних источниках питания и упрощает подключение датчиков.

<div style={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-analog-overview.png"/>
</div>

Используйте стандартные 3-пиновые кабели, входящие в набор, для подключения инфракрасных датчиков к портам аналоговых входов. Обязательно соблюдайте правильную распиновку.

<img src="/docshome/img/studica-kit/vmx/vmx-connecting-analog.png"/>

Чтобы помочь вам начать работу, приведённый ниже фрагмент кода считывает значения с инфракрасного аналогового датчика, подключённого к порту 0 (как показано в примере выше), и отправляет их в shufflecad. Это позволяет быстро и легко проверить, что датчик работает исправно, а подключение выполнено правильно.

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

        robot = RobotVmxTitan(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        ir0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ir0.set_float(robot.analog_1())
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

                ShuffleVariable ir0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
            
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ir0.setFloat(robot.getAnalog1());
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

            ShuffleVariable* ir0 = shufflecad.add_var(new ShuffleVariable("ir0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ir0->set_float(robot.get_analog_1());
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

                var ir0 = shufflecad.AddVar(new ShuffleVariable("ir0", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ir0.SetFloat(robot.Analog1);
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
Распиновка Sharp GP2Y0A41S:

- Белый — сигнал
- Черный — GND
- Красный — VCC

Пример см. на изображении ниже.
<div style={{marginRight: 50, marginLeft: 50}}>
    <img src="/docshome/img/studica-kit/other/sharp-infrared.png"/>   
</div>
:::