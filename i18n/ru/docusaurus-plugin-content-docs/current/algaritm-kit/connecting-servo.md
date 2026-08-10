---
id: connecting-servo
title: Подключение сервопривода
---

# Подключение сервопривода

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Главный контроллер оснащён 8 PWM-портами, специально предназначенными для подключения стандартных угловых сервоприводов. Эти порты генерируют точные PWM-сигналы, необходимые для установки сервопривода в любое положение в пределах рабочего диапазона. Благодаря 8 независимым каналам можно одновременно управлять до восьми сервоприводов, что делает плату идеальной для сложных проектов — многозвенных роботизированных манипуляторов, подвесов камер pan-tilt или любых механизмов, требующих согласованного движения нескольких приводов.

<img src="/docshome/img/algaritm-kit/shield/shield-pwm-overview.png"/>

Для работы с сервоприводами сначала подключите сигнальный кабель от одного из PWM-портов главного контроллера к порту **I** (INPUT) на блоке питания сервоприводов.
<div style={{ marginBottom: "10px"}}>
    <img src="/docshome/img/algaritm-kit/shield/shield-servo-connection.png"/>
</div>
 Затем подключите сервоприводы напрямую к портам **O** (OUT) на блоке питания сервоприводов.

<img src="/docshome/img/algaritm-kit/other/servo-power-block-servo-connection.PNG"/>

Используйте фрагмент кода ниже для установки углов сервоприводов и проверки правильности подключения, как показано в примере.

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

        servo_0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))
        servo_4: ShuffleVariable = shufflecad.add_var(ShuffleVariable("servo_4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.set_angle_servo(servo_0.get_float(), 1)
            robot.set_angle_servo(servo_4.get_float(), 5)
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

                ShuffleVariable servo0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo0", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable servo4 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("servo4", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAngleServo(servo0.getFloat(), 1);
                    robot.setAngleServo(servo4.getFloat(), 5);
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

            ShuffleVariable* servo_0 = shufflecad.add_var(new ShuffleVariable("servo0", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* servo_4 = shufflecad.add_var(new ShuffleVariable("servo4", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_servo_angle(servo_0->get_float(), 1);
                robot.set_servo_angle(servo_4->get_float(), 5);
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

                var servo0 = shufflecad.AddVar(new ShuffleVariable("servo0", ShuffleVariable.FloatType, ShuffleVariable.InVar));
                var servo4 = shufflecad.AddVar(new ShuffleVariable("servo4", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.SetAngleServo(servo0.GetFloat(), 1);
                    robot.SetAngleServo(servo4.GetFloat(), 5);
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
Сервоприводы, входящие в комплект набора Algaritmica, поддерживают рабочий диапазон от **0°** до **180°**.
:::

# Подключение дополнительного сервопривода

Главный контроллер уже включает порты для сервоприводов, но для проектов, требующих большего количества сервоприводов, драйвер предоставляет 2 дополнительных выхода.

<img src="/docshome/img/algaritm-kit/driver/driver-additional-servo-overview.PNG"/>

Дополнительные выходы сервоприводов на драйвере используют тот же стандартный 3‑контактный разъём сервопривода. В отличие от портов сервоприводов на главном контроллере, их можно подключать к ним напрямую.

<img src="/docshome/img/algaritm-kit/driver/driver-additional-servo.PNG"/>

Используйте фрагмент кода ниже для установки углов дополнительных сервоприводов и проверки правильности подключения, как показано в примере.

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

        add_servo_2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("add_servo_2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.additional_servo_2 = add_servo_2.get_float()
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

                ShuffleVariable addServo2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("addServo2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.IN_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.setAdditionalServo2(addServo2.getFloat());
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

            ShuffleVariable* add_servo_2 = shufflecad.add_var(new ShuffleVariable("add_servo_2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::IN_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                robot.set_additional_servo_2(add_servo_2->get_float());
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

                var addServo2 = shufflecad.AddVar(new ShuffleVariable("addServo2", ShuffleVariable.FloatType, ShuffleVariable.InVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.AdditionalServo2 = addServo2.GetFloat();
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

