---
id: connecting-analog
title: Подключение аналоговых датчиков
---

# Подключение аналоговых датчиков

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Датчик Cobra Line Follower представляет собой 4-канальную инфракрасную рефлекторную сенсорную решётку, входящую в состав набора и предназначенную в первую очередь для применения в системах следования по линии. Он позволяет роботу различать светлые и тёмные поверхности, излучая инфракрасный свет и измеряя количество отражённого излучения.

<img src="/docshome/img/studica-kit/other/cobra.png"/>

Используйте стандартные 3-пиновые кабели, входящие в набор, для подключения датчика чёрной линии к порту аналогового входа. Обязательно соблюдайте правильную распиновку.

<img src="/docshome/img/studica-kit/vmx/vmx-connecting-analog-2.png"/>

Приведённый ниже фрагмент кода считывает значения с аналогового датчика, подключённого к порту 1 (как показано в примере выше), и отправляет их в shufflecad. Это позволяет быстро и легко проверить, что датчик работает исправно, а подключения выполнены правильно.

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

        ir1: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ir1.set_float(robot.analog_2())
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

                ShuffleVariable ir1 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir1", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
            
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ir1.setFloat(robot.getAnalog2());
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

            ShuffleVariable* ir1 = shufflecad.add_var(new ShuffleVariable("ir1", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ir1->set_float(robot.get_analog_2());
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

                var ir1 = shufflecad.AddVar(new ShuffleVariable("ir1", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ir1.SetFloat(robot.Analog2);
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