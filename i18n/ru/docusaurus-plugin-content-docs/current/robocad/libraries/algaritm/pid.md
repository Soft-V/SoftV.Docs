---
id: pid
title: PID регулятор
---

# PID регулятор

На плате управления двигателями есть встроенный PID регулятор. Здесь показаны примеры его конфигурации.

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
        # включение PID регулятора и выставление настроек
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # немного подождать, чтобы robocad инициализировался
        time.sleep(0.1)

        # включаем PID регулятор и выставляем коэффициенты
        robot.set_pid_settings(True, 0.14, 0.1, 0)
        time.sleep(0.1)

        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        time.sleep(5)
        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // включение PID регулятора и выставление настроек
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // немного подождать, чтобы robocad инициализировался
                Thread.sleep(100);

                // включаем PID регулятор и выставляем коэффициенты
                robot.setPidSettings(true, 0.14f, 0.1f, 0f);
                Thread.sleep(100);

                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                Thread.sleep(5000);
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

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

:::warning
Будьте внимательны - перед включением PID регулятора проверьте подключение энкодеров к плате!
:::
