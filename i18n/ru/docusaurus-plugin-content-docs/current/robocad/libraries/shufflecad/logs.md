---
id: logs
title: Логирование в shufflecad
---

# Логирование в shufflecad   

Также shufflecad предоставляет возможность записи логов в приложение.

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
        # поворачиваться в течение 5 секунд и отправлять логи в shufflecad
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)
        
        shufflecad.print_to_log("Robot started", Shufflecad.LOG_INFO)

        # ждем, пока robocad инициализируется
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        time.sleep(5)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        shufflecad.print_to_log("Robot stopped", Shufflecad.LOG_INFO)

        time.sleep(0.3)
        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // поворачиваться в течение 5 секунд и отправлять логи в shufflecad
        import io.github.softv.shufflecad.Shufflecad;
        import io.github.softv.shufflecad.CameraVariable;
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                shufflecad.printToLog("Robot started", Shufflecad.LOG_INFO);

                // ждем, пока robocad инициализируется
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                Thread.sleep(5000);

                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                shufflecad.printToLog("Robot stopped", Shufflecad.LOG_INFO);

                Thread.sleep(300);
                shufflecad.stop();
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
Для логирования доступны уровни:  
- *LOG_INFO*;
- *LOG_WARNING*;
- *LOG_ERROR*.  
  
Также третьим параметром функция для логирования может принимать цвет текста в формате hex, например ```"#CCCCCC"```.
:::
