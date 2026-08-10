---
id: connecting-bno055
title: Подключение BNO055
---

# Подключение BNO055

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

BNO055 — интеллектуальный 9-осевой датчик абсолютной ориентации от Bosch Sensortec. На одной плате он объединяет три базовых датчика: 3-осевой датчик линейного ускорения, 3-осевой гироскоп для угловой скорости и 3-осевой магнитометр для измерения напряжённости магнитного поля.

Плата предоставляет интерфейсы UART и I2C для дополнительной периферии. Порт I2C_1 предназначен для датчика BNO055.
<img src="/docshome/img/algaritm-kit/shield/shield-uart-i2c-ports.PNG"/>

Подключите датчик с помощью кабеля 6-to-4-pin из комплекта набора Algaritmica, соблюдая правильную ориентацию распайки на 6-контактной стороне.

<img src="/docshome/img/algaritm-kit/shield/shield-bno055-connection.PNG"/>

Фрагмент кода получает значения yaw, roll и pitch и передаёт их в shufflecad. Это позволяет быстро и просто проверить работоспособность датчика ориентации и правильность подключения.

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

        yaw: ShuffleVariable = shufflecad.add_var(ShuffleVariable("yaw", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        roll: ShuffleVariable = shufflecad.add_var(ShuffleVariable("roll", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        pitch: ShuffleVariable = shufflecad.add_var(ShuffleVariable("pitch", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            yaw.set_float(robot.yaw)
            roll.set_float(robot.roll)
            pitch.set_float(robot.pitch)
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

                ShuffleVariable yaw = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("yaw", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable roll = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("roll", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));
                ShuffleVariable pitch = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("pitch", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    yaw.setFloat(robot.getYaw());
                    roll.setFloat(robot.getRoll());
                    pitch.setFloat(robot.getPitch());
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

            ShuffleVariable* yaw = shufflecad.add_var(new ShuffleVariable("yaw", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* roll = shufflecad.add_var(new ShuffleVariable("roll", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));
            ShuffleVariable* pitch = shufflecad.add_var(new ShuffleVariable("pitch", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(60)) {
                yaw->set_float(robot.get_yaw());
                roll->set_float(robot.get_roll());
                pitch->set_float(robot.get_pitch());
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

                var yaw = shufflecad.AddVar(new ShuffleVariable("yaw", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var roll = shufflecad.AddVar(new ShuffleVariable("roll", ShuffleVariable.FloatType, ShuffleVariable.OutVar));
                var pitch = shufflecad.AddVar(new ShuffleVariable("pitch", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    yaw.SetFloat(robot.Yaw);
                    roll.SetFloat(robot.Roll);
                    pitch.SetFloat(robot.Pitch);
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
Распайка BNO055:

- Красный — 3.3V
- Чёрный — GND
- Жёлтый — SDA
- Зелёный — SCL

Пример см. на изображении ниже.
<div style={{paddingLeft: "20px", paddingRight: "20px"}}>
    <img src="/docshome/img/algaritm-kit/other/bno055.png"/>
</div>
:::
