---
id: step-motors
title: Шаговые двигатели
---

# Шаговые двигатели

Шаговые двигатели используются для перемещения робота или его компонентов.

#### Пример:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
        # вращаться в одну сторону, потом в другую сторону
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # немного подождать, чтобы robocad инициализировался
        time.sleep(0.1)

        # вращаем в одну сторону на 10000 шагов
        robot.step_motor_move(1, 10000, 1000, True)

        # ждать, пока мотор не дойдет до нужного значения
        time.sleep(0.1)
        while robot.is_step_1_busy:
            time.sleep(0.1)

        # вращаем в другую сторону на 10000 шагов
        robot.step_motor_move(1, 10000, 1000, False)

        # ждать, пока мотор не дойдет до нужного значения
        time.sleep(0.1)
        while robot.is_step_1_busy:
            time.sleep(0.1)

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // вращаться в одну сторону, потом в другую сторону
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // немного подождать, чтобы robocad инициализировался
                Thread.sleep(100);

                // вращаем в одну сторону на 10000 шагов
                robot.stepMotorMove(1, 10000, 1000, true);

                // ждать, пока мотор не дойдет до нужного значения
                Thread.sleep(100);
                while (robot.isStep1Busy()) {
                    Thread.sleep(100);
                }

                // вращаем в другую сторону на 10000 шагов
                robot.stepMotorMove(1, 10000, 1000, false);

                // ждать, пока мотор не дойдет до нужного значения
                Thread.sleep(100);
                while (robot.isStep1Busy()) {
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
        // вращаться в одну сторону, потом в другую сторону
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // немного подождать, чтобы robocad инициализировался
            std::this_thread::sleep_for(std::chrono::milliseconds(100));

            // вращаем в одну сторону на 10000 шагов
            robot.step_motor_move(1, 10000, 1000, true);

            // ждать, пока мотор не дойдет до нужного значения
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_1_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            // вращаем в другую сторону на 10000 шагов
            robot.step_motor_move(1, 10000, 1000, false);

            // ждать, пока мотор не дойдет до нужного значения
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            while (robot.is_step_1_busy()) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // вращаться в одну сторону, потом в другую сторону
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // немного подождать, чтобы robocad инициализировался
                System.Threading.Thread.Sleep(100);

                // вращаем в одну сторону на 10000 шагов
                robot.StepMotorMove(1, 10000, 1000, true);

                // ждать, пока мотор не дойдет до нужного значения
                System.Threading.Thread.Sleep(100);
                while (robot.IsStep1Busy)
                {
                    System.Threading.Thread.Sleep(100);
                }

                // вращаем в другую сторону на 10000 шагов
                robot.StepMotorMove(1, 10000, 1000, false);

                // ждать, пока мотор не дойдет до нужного значения
                System.Threading.Thread.Sleep(100);
                while (robot.IsStep1Busy)
                {
                    System.Threading.Thread.Sleep(100);
                }

                System.Threading.Thread.Sleep(100);
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
Для управления шаговыми моторами доступны порты 1 и 2. 
:::
