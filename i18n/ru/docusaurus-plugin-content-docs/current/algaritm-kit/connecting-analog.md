---
id: connecting-analog
title: Подключение аналоговых датчиков
---

# Подключение аналоговых датчиков

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TCRT5000 — универсальный оптический рефлекторный датчик, входящий в комплект набора Algaritmica. Принцип его работы прост: датчик излучает инфракрасный свет и измеряет количество отражённого сигнала. Это делает его идеальным для проектов вроде роботов для следования по линии, где датчик может различать чёрную линию и белый фон.

<div style={{ paddingBottom: "10px" }}>
    <img src="/docshome/img/algaritm-kit/other/tcrt5000-line-follower-sensor.PNG"/>
</div>

Используйте стандартные 3‑контактные кабели из комплекта набора Algaritmica для подключения датчиков следования по линии к аналоговому входному порту. Обязательно соблюдайте правильную распайку контактов.

<img src="/docshome/img/algaritm-kit/shield/shield-tcrt5000-connection.PNG"/>

Фрагмент кода ниже считывает значения с аналогового датчика, подключённого к порту 1 (как показано в примере выше), и передаёт их в shufflecad. Это позволяет быстро и просто проверить работоспособность датчика и правильность подключения.

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
        **TODO:** 😇
    </TabItem>
</Tabs>

:::note
Распайка датчика следования по линии TCRT5000:
- Чёрный — GND
- Белый — OUT (A1)
- Красный — VCC (5V)

Пример см. на изображении ниже.
<img src="/docshome/img/algaritm-kit/other/tcrt5000-pinout.PNG"/>
:::
