---
id: connecting-servo
title: Подключение сервомоторов
---

# Подключение сервомоторов

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Контроллер VMX Robotics Controller предоставляет несколько вариантов подключения и управления сервоприводами — от прямого ШИМ-управления до специализированных модулей питания сервоприводов.

VMX оснащён выделенными ШИМ-выходами, предназначенными специально для управления сервоприводами, причём каждый порт поддерживает стандартные сигналы RC-типа. Порты используют тот же стандартный 3-контактный разъём для сервоприводов, который используется в большинстве любительских сервомашинок, обеспечивая передачу сигнала, питания и земли через один интерфейс.

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-high-current-dio-overview.png"/>
</div>

Для подключения сервоприводов начните с использования стандартного 3-пинового кабеля для соединения блока питания сервоприводов Servo Power Block с VMX — подключите один конец к ШИМ-порту на VMX, а другой к порту INPUT на блоке питания.

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/vmx/vmx-connecting-servo.png"/>
</div>

Затем подключите ваши сервоприводы к портам OUTPUT на блоке питания сервоприводов Servo Power Block.

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-with-power-block.png"/>
</div>

Итоговая схема подключения показана на изображении ниже.

<div style ={{ textAlign: "center" }}>
    <img src="/docshome/img/studica-kit/other/servo-connection-assembly.png"/>
</div>

Используйте приведённый ниже фрагмент кода, чтобы задать углы поворота сервоприводов и проверить правильность их подключения, как показано в примере.

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

        servo_0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.set_angle_hcdio(servo_0.get_float(), 1)
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

                ShuffleVariable servo0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAngleHCDIO(servo0.getFloat(), 1);
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

            ShuffleVariable* servo_0 = shufflecad.add_var(new ShuffleVariable("servo0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_servo_angle(servo_0->get_float(), 1);
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

                var servo0 = shufflecad.AddVar(new ShuffleVariable("servo0", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.SetAngleHcdio(servo0.GetFloat(), 1);
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
Порты HCDIO на VMX доступны только для записи. В библиотеке robocadV доступно 10 портов. Нумерация начинается с 1.
:::