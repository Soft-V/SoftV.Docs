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
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   

:::note
Для управления шаговыми моторами доступны порты 1 и 2. 
:::
