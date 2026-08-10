---
id: connecting-motors
title: Подключение моторов
---

# Подключение моторов

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Контроллер двигателей предоставляет 4 выделенных PWM-порта для подключения DC-моторов, каждый из которых использует надёжный разъём XT30. Эти разъёмы специально выбраны за способность пропускать высокие токи с минимальным падением напряжения, что делает их идеальными для приводов в требовательных робототехнических приложениях. Разъёмы также обеспечивают плотную посадку с фиксацией, предотвращая случайное отключение во время работы. На примере изображения ниже моторы подключены к портам 3 и 4.
<div style={{ marginBottom: "10px"}}>
    <img src="/docshome/img/algaritm-kit/driver/driver-dc-motors-connection.png"/>
</div>
С помощью фрагмента кода ниже можно вручную задавать скорость каждому мотору, подключённому в примере. Это позволяет быстро и просто проверить работоспособность каждого мотора и правильность всех подключений.
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

        motor3: ShuffleVariable = shufflecad.add_var(ShuffleVariable("motor3", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))
        motor4: ShuffleVariable = shufflecad.add_var(ShuffleVariable("motor4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 120:
            robot.motor_speed_2 = motor3.get_float()
            robot.motor_speed_3 = motor4.get_float()
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
                
                ShuffleVariable motor3 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("motor3", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable motor4 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("motor4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));
                
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 120_000) {
                    robot.setMotorSpeed2(motor3.getFloat());
                    robot.setMotorSpeed3(motor4.getFloat());
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

            ShuffleVariable* motor3 = shufflecad.add_var(new ShuffleVariable("motor3", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* motor4 = shufflecad.add_var(new ShuffleVariable("motor4", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(120)) {
                robot.set_motor_speed_2(motor3->get_float());
                robot.set_motor_speed_3(motor4->get_float());
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

                var motor3 = shufflecad.AddVar(new ShuffleVariable("motor3", ShuffleVariable.FloatType, ShuffleVariable.InVar));
                var motor4 = shufflecad.AddVar(new ShuffleVariable("motor4", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 120_000)
                {
                    robot.MotorSpeed2 = motor3.GetFloat();
                    robot.MotorSpeed3 = motor4.GetFloat();
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

Библиотека robocad включает встроенный PID-контроллер, который помогает достичь плавного и точного регулирования моторов. Полное руководство по работе с энкодерами и использованию PID-контроллера см. на странице [Подключение энкодеров](../algaritm-kit/connecting-encoders).
