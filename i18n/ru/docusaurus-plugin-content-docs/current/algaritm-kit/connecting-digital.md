---
id: connecting-digital
title: Подключение кнопок и светодиодов
---

# Подключение кнопок и светодиодов

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Расширительная плата предоставляет 8 цифровых портов ввода-вывода 0–7. Порты D0–D3 настроены как выходы для управления светодиодами, которые используются для индикации состояния робота — например, для отображения питания, режима работы или предупреждений. Порты D4–D7 настроены как входы для подключения программируемых кнопок и переключателей, что позволяет оператору запускать автономные действия, переключать режимы работы или вручную переопределять выполняемые алгоритмы.

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-buttons-and-leds-overview.png"/>
</div>

В комплект набора Algaritmica входят светодиоды, которые можно подключать напрямую к цифровым выходным портам D0–D3. Для этих светодиодов достаточно подключить сигнальный контакт (красный или жёлтый провод) и землю к соответствующим портам на расширительной плате — после этого они готовы к работе. Однако при использовании других светодиодов может потребоваться добавить токоограничивающий резистор последовательно с сигнальной линией. Значение около 220Ω обычно достаточно для большинства стандартных 5V-приложений.

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-leds-connection.png"/>
</div>

Входящие в комплект кнопки подключаются к портам D4–D7 так же, как и светодиоды — каждой кнопке требуется только сигнальное подключение (красный или жёлтый провод) и подключение к земле. Достаточно подключить их к соответствующим портам, и они готовы к использованию в качестве цифровых входов.

<div style={{ marginBottom: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-button-connection.png"/>
</div>
Фрагмент кода устанавливает логические значения для светодиодов (порты 0 и 3) и считывает состояние кнопки с порта 6 (как показано в примере выше). Это позволяет быстро и просто проверить работоспособность каждого устройства и правильность всех подключений.
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

        led0: ShuffleVariable = shufflecad.add_var(ShuffleVariable("led0", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR))
        led3: ShuffleVariable = shufflecad.add_var(ShuffleVariable("led3", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR))
        btn6: ShuffleVariable = shufflecad.add_var(ShuffleVariable("btn6", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            robot.outputs[0] = led0.get_bool()
            robot.outputs[3] = led3.get_bool()
            btn6.set_bool(robot.inputs[3])
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
                ShuffleVariable led0 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("led0", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable led3 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("led3", ShuffleVariable.BOOL_TYPE, ShuffleVariable.IN_VAR));
                ShuffleVariable btn6 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("btn6", ShuffleVariable.BOOL_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    robot.getOutputs()[0] = led0.getBool();
                    robot.getOutputs()[3] = led3.getBool();
                    btn6.setBool(robot.getInputs()[3]);
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

            ShuffleVariable* led0 = shufflecad.add_var(new ShuffleVariable("led0", ShuffleVariable::BOOL_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* led3 = shufflecad.add_var(new ShuffleVariable("led3", ShuffleVariable::BOOL_TYPE, ShuffleVariable::IN_VAR));
            ShuffleVariable* btn6 = shufflecad.add_var(new ShuffleVariable("btn6", ShuffleVariable::BOOL_TYPE, ShuffleVariable::OUT_VAR));

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(60)) {
                robot.outputs[0] = led0->get_bool();
                robot.outputs[3] = led3->get_bool();
                btn6->set_bool(robot.get_inputs()[3]);
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

                var led0 = shufflecad.AddVar(new ShuffleVariable("led0", ShuffleVariable.BoolType, ShuffleVariable.InVar));
                var led3 = shufflecad.AddVar(new ShuffleVariable("led3", ShuffleVariable.BoolType, ShuffleVariable.InVar));

                var btn6 = shufflecad.AddVar(new ShuffleVariable("btn6", ShuffleVariable.BoolType, ShuffleVariable.OutVar));

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    robot.Outputs[0] = led0.GetBool();
                    robot.Outputs[3] = led3.GetBool();
                    btn6.SetBool(robot.Inputs[3]);
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
Распайка кнопки аварийной остановки:

- Жёлтый — NO (Normally Opened: LOW в покое, HIGH при нажатии)
- Чёрный — C

Пример см. на изображении ниже.
<img src="/docshome/img/algaritm-kit/other/ems.png"/>
:::
:::note
По умолчанию линия VCC на расширительной плате подключена к встроенной шине 5V. Для устройств, работающих на 3.3V, можно переставить перемычку и переключить выходное напряжение соответствующим образом. Это обеспечивает бесшовную интеграцию с широким спектром внешних датчиков, выходящих за рамки комплекта набора Algaritmica. Обратите внимание, что перестановка перемычки также изменит выходное напряжение ультразвуковых датчиков. Правильное положение перемычки при использовании 3.3V см. на изображении ниже.

<div style={{ marginRight: "20px", marginLeft: "20px" }}>
    <img src="/docshome/img/algaritm-kit/shield/shield-v2-3v3.png"/>
</div>
:::
