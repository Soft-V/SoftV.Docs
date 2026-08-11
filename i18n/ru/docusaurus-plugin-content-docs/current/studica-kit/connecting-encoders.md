---
id: connecting-encoders
title: Подключение энкодеров
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Подключение энкодеров

Каждый канал двигателя на плате драйвера оснащён портом для подключения энкодера. Подключив цифровой энкодер, вы можете отслеживать вращение двигателя в реальном времени. Это обеспечивает точный контроль как скорости, так и перемещения, что крайне важно для приложений, требующих высокой точности движений, таких как следование по линии, одометрия или позиционирование руки робота.

Используйте стандартные 4-жильные кабели, входящие в набор, для подключения цифровых энкодеров. Обязательно соблюдайте правильную распиновку.

<img src="/docshome/img/studica-kit/titan/titan-connecting-encoder.png"/>

Приведённый ниже фрагмент кода считывает значения с цифрового энкодера, подключённого к порту 2 (как показано в примере выше), и отправляет их в shufflecad. Это позволяет быстро и легко проверить, что энкодер работает исправно, а подключение выполнено правильно.

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

        enc2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("enc2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        robot.motor_speed_1 = 50

        start_time = time.time()
        while time.time() - start_time < 60:
            enc2.set_float(robot.motor_enc_2)
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

                ShuffleVariable enc2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("enc2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                robot.setMotorSpeed1(50);

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    enc2.setFloat(robot.getMotorEnc2());
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

            ShuffleVariable* enc2 = shufflecad.add_var(new ShuffleVariable("enc2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            robot.set_motor_speed_1(50);

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                enc2->set_float(robot.get_motor_enc_2());
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

                var enc2 = shufflecad.AddVar(new ShuffleVariable("enc2", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                robot.MotorSpeed1 = 50;

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    enc2.SetFloat(robot.MotorEnc2);
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
