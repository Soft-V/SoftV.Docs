---
id: connecting-ultrasonic
title: Подключение ультразвуковых датчиков
---

# Подключение ультразвуковых датчиков

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Плата включает два порта для ультразвуковых датчиков, позволяя измерять расстояния одновременно в нескольких направлениях. Каждый порт обеспечивает питание 5 В, землю и выделенные линии сигналов Trigger и Echo для стандартных датчиков типа HC‑SR04.

<img src="/docshome/img/studica-kit/vmx/vmx-flex-dio-overview.png"/>

<div style={{width: "100%", display: "flex", justifyContent: "center"}}>
    <table style={{
        marginLeft: "0 auto",
        marginRight: "0 auto"
    }}>
        <thead>
            <tr>
                <th style={{ width: "200px", textAlign: "center" }}>Порт</th>
                <th style={{ width: "200px", textAlign: "center" }}>Trigger</th>
                <th style={{ width: "200px", textAlign: "center" }}>Echo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{ textAlign: "center" }}><b>Ultrasonic 1</b></td>
                <td style={{ textAlign: "center" }}>8</td>
                <td style={{ textAlign: "center" }}>9</td>
            </tr>
            <tr>
                <td style={{ textAlign: "center" }}><b>Ultrasonic 2</b></td>
                <td style={{ textAlign: "center" }}>10</td>
                <td style={{ textAlign: "center" }}>11</td>
            </tr>
        </tbody>
    </table>
</div>

Подключайте датчики с помощью поставляемых 4-жильных кабелей с 6-контактным разъёмом, соблюдая правильную ориентацию распиновки. Смотрите изображение ниже для справки.

<div style={{ marginBottom: "10px"}}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-us.png"/>
</div>

Приведённый ниже фрагмент кода считывает измеренные расстояния с ультразвукового датчика, подключённого к порту 1 (как показано в примере выше), и отправляет их в shufflecad. Это позволяет быстро и легко проверить, что датчик работает исправно, а подключение выполнено правильно.

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

        us1: ShuffleVariable = shufflecad.add_var(ShuffleVariable("us1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            us1.set_float(robot.us_1)
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
                
                ShuffleVariable us1 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("us1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    us1.setFloat(robot.getUltrasound1());
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

            ShuffleVariable* us1 = shufflecad.add_var(new ShuffleVariable("us1", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                us1->set_float(robot.get_us1());
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

                var us1 = shufflecad.AddVar(new ShuffleVariable("us1", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    us1.SetFloat(robot.Us1);
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
Распиновка HC-SR04:

- Красный — VCC
- Желтый — Trigger
- Зеленый — Echo
- Черный — GND

Пример см. на изображении ниже.
<div style={{marginRight: 50, marginLeft: 50}}>
    <img src="/docshome/img/studica-kit/other/ultrasonic.png"/>   
</div>
:::