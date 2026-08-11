---
id: connecting-motors
title: Подключение моторов
---

# Подключение моторов

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Контроллер Titan Quad Motor Controller предоставляет четыре выхода для двигателей постоянного тока, обозначенных на плате как M0, M1, M2 и M3. Каждый канал рассчитан на управление двигателями с током до 20 А и оснащён встроенным отсеком для предохранителей, в который необходимо установить предохранитель на 20 А перед подачей питания.

Моторы, входящие в набор, поставляются с предустановленными разъёмами Anderson Powerpole для подключения питания.

<img src="/docshome/img/studica-kit/titan/titan-connecting-motor.png"/>

Используя приведённый ниже фрагмент кода, вы можете вручную установить скорость двигателя, подключённого в примере, с помощью shufflecad.

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

        motor2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("motor2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))


        start_time = time.time()
        while time.time() - start_time < 120:
            robot.motor_speed_2 = motor2.get_float()
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

                ShuffleVariable motor2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("motor2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 120_000) {
                    robot.setMotorSpeed2(motor2.getFloat());
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

            ShuffleVariable* motor2 = shufflecad.add_var(new ShuffleVariable("motor2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(120)) {
                robot.set_motor_speed_2(motor2->get_float());
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

                var motor2 = shufflecad.AddVar(new ShuffleVariable("motor2", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 120_000)
                {
                    robot.MotorSpeed2 = motor2.GetFloat();
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

Наша библиотека включает встроенный ПИД-регулятор, который помогает добиться плавного и точного управления двигателями. Полное руководство по работе с энкодерами и использованию ПИД-регулятора приведено на странице [Подключение энкодеров](../studica-kit/connecting-encoders).