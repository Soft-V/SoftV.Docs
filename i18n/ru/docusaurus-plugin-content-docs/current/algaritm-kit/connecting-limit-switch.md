---
id: connecting-limit-switch
title: Подключение концевого выключателя
---

# Подключение концевого выключателя

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Каждый моторный порт оснащён двумя входами концевых выключателей, обозначенными на плате как Llim и Hlim. Оба порта служат одной цели — они предназначены для подключения концевых выключателей, которые определяют достижение механизмом предельного положения хода. Эти входы не имеют предопределённых функций; вы можете назначить их в программе для остановки или реверса мотора при срабатывании выключателя.

<img src="/docshome/img/algaritm-kit/driver/driver-limit-switch-ports.PNG"/>

Используйте стандартные 2‑контактные кабели из комплекта набора Algaritmica для подключения концевого выключателя к его порту. В отличие от других подключений, эти порты не чувствительны к полярности — не имеет значения, какая сторона провода куда подключена. Их можно подключать в любой ориентации.

<img src="/docshome/img/algaritm-kit/driver/driver-limit-switch-connection.png"/>

Фрагмент кода ниже получает логическое значение с концевого выключателя, подключённого к порту Llim мотора M3, и передаёт его в shufflecad. Это позволяет быстро и просто проверить работоспособность концевого выключателя и правильность подключения.

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

        ls_3_L: ShuffleVariable = shufflecad.add_var(ShuffleVariable("limit_switch_3_L", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            ls_3_L.set_bool(robot.titan_limits[7])
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

                ShuffleVariable ls3L = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("limitSwitch3L", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    ls3L.setBool(robot.getTitanLimits()[7]);
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

            ShuffleVariable* ls_3_L = shufflecad.add_var(new ShuffleVariable("limit_switch_3_L", ShuffleVariable::BOOL_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                ls_3_L->set_bool(robot.get_titan_limits()[7]);
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

                var ls3L = shufflecad.AddVar(new ShuffleVariable("LimitSwitch3L", ShuffleVariable.BoolType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    ls3L.SetBool(robot.TitanLimits[7]);
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
Верхний контакт всегда является проводом Common. Оставшиеся два контакта:
- NO — Normally opened: LOW в покое, HIGH при нажатии
- NC — Normally closed: HIGH в покое, LOW при нажатии

Пример см. на изображении ниже.
<img src="/docshome/img/algaritm-kit/other/limit-switch-pinout.PNG"/>
:::

:::note
Порты концевых выключателей доступны только для чтения и расположены следующим образом:
- M0:
    - Hlim: 0
    - Llim: 1
- M1:
    - Hlim: 2
    - Llim: 3
- M2:
    - Hlim: 4
    - Llim: 5
- M3:
    - Hlim: 6
    - Llim: 7
:::
