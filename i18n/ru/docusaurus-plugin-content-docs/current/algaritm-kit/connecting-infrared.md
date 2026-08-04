---
id: connecting-infrared
title: Подключение инфракрасных датчиков
---

# Подключение инфракрасных датчиков

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

На плате предусмотрено 8 выделенных аналоговых портов для датчиков со стандартной 3‑контактной распайкой: сигнал (**V1**), **5V** и **GND**. Такая конфигурация обеспечивает совместимость с широким спектром аналоговых датчиков, в том числе инфракрасных. Встроенный источник 5V обеспечивает достаточную мощность для инфракрасных датчиков расстояния, входящих в комплект набора Algaritmica, что исключает необходимость внешних источников питания и упрощает подключение датчиков.

<div style={{paddingBottom: '10px'}}>
    <img src="/docshome/img/algaritm-kit/shield/shield-analog-overview.png"/>
</div>

Используйте стандартные 3‑контактные кабели из комплекта набора Algaritmica для подключения инфракрасных датчиков к аналоговым входным портам. Обязательно соблюдайте правильную распайку контактов.

<div style={{paddingBottom: '10px'}}>
    <img src="/docshome/img/algaritm-kit/shield/shield-analog-connection.png"/>
</div>

Для быстрого старта фрагмент кода ниже считывает значения с инфракрасных аналоговых датчиков, подключённых к портам 0, 2 и 7 (как показано в примере выше), и передаёт их в shufflecad. Это позволяет быстро и просто проверить работоспособность каждого датчика и правильность всех подключений.
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

        ir0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        ir2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        ir7: ShuffleVariable = shufflecad.add_var(ShuffleVariable("ir7", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ir0.set_float(robot.analog_1())
            ir2.set_float(robot.analog_3())
            ir7.set_float(robot.analog_8())
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

                ShuffleVariable ir0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable ir2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable ir7 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("ir7", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ir0.setFloat(robot.getAnalog1());
                    ir2.setFloat(robot.getAnalog3());
                    ir7.setFloat(robot.getAnalog8());
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

            ShuffleVariable* ir0 = shufflecad.add_var(new ShuffleVariable("ir0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* ir2 = shufflecad.add_var(new ShuffleVariable("ir2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* ir7 = shufflecad.add_var(new ShuffleVariable("ir7", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ir0->set_float(robot.get_analog_1());
                ir0->set_float(robot.get_analog_3());
                ir0->set_float(robot.get_analog_8());
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

                var ir0 = shufflecad.AddVar(new ShuffleVariable("ir0", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var ir2 = shufflecad.AddVar(new ShuffleVariable("ir2", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var ir7 = shufflecad.AddVar(new ShuffleVariable("ir7", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ir0.SetFloat(robot.Analog1);
                    ir2.SetFloat(robot.Analog3);
                    ir7.SetFloat(robot.Analog8);
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
Распайка датчика Sharp GP2Y0A41S:

- Белый — сигнал
- Чёрный — GND
- Красный — VCC

Пример см. на изображении ниже.
<div style={{marginRight: 50, marginLeft: 50}}>
    <img src="/docshome/img/algaritm-kit/other/sharp-infrared.png"/>   
</div>
:::
