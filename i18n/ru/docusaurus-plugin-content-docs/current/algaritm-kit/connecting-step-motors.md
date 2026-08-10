---
id: connecting-step-motors
title: Подключение шаговых двигателей
---

# Подключение шаговых двигателей

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Помимо DC-моторов и сервоприводов, контроллер двигателей поддерживает шаговые двигатели. Доступны два выделенных порта, что позволяет подключить до двух шаговых двигателей и достичь точного инкрементного позиционирования для таких приложений, как роботизированные манипуляторы, конвейерные ленты или механизмы pan-tilt.

<img src="/docshome/img/algaritm-kit/driver/driver-step-motor-ports.PNG"/>

Используйте стандартный кабель из комплекта набора Algaritmica для подключения шагового двигателя к плате.

<img src="/docshome/img/algaritm-kit/driver/driver-step-motors-connection.PNG"/>

Фрагмент кода ниже задаёт положение каждому шаговому двигателю, подключённому в примере выше. Это позволяет быстро и просто проверить работоспособность каждого двигателя и правильность всех подключений.

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
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
        time.sleep(1)

        robot.step_motor_move(1, 10000, 1000, True)

        time.sleep(0.1)
        while robot.is_step_1_busy:
            time.sleep(0.1)

        robot.step_motor_move(2, 10000, 1000, False)

        time.sleep(0.1)
        while robot.is_step_2_busy:
            time.sleep(0.1)

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotAlgaritm;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Thread.sleep(100);
                
                robot.stepMotorMove(1, 10000, 1000, true);
                
                Thread.sleep(100);
                while (robot.isStep1Busy()) {
                    Thread.sleep(100);
                }
                
                robot.stepMotorMove(2, 10000, 1000, false);
                
                Thread.sleep(100);
                while (robot.isStep2Busy()) {
                    Thread.sleep(100);
                }

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotAlgaritm robot(true);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            robot.step_motor_move(1, 10000, 1000, true);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_1_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            robot.step_motor_move(2, 10000, 1000, false);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_2_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
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
                Thread.Sleep(1000);

                robot.StepMotorMove(1, 10000, 1000, true);

                Thread.Sleep(100);
                while (robot.IsStep1Busy)
                {
                    Thread.Sleep(100);
                }

                robot.StepMotorMove(2, 10000, 1000, false);

                Thread.Sleep(100);
                while (robot.IsStep2Busy)
                {
                    Thread.Sleep(100);
                }

                Thread.Sleep(100);
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
В комплект набора Algaritmica входит шаговый двигатель 17HS2408 NEMA17. Этот двигатель имеет шаг 1.8°, обеспечивая плавное и точное инкрементное движение. Полный оборот требует 200 шагов (360° / 1.8° на шаг), что упрощает достижение точного позиционирования.
<img src="/docshome/img/algaritm-kit/other/step-motor.PNG"/>
:::
