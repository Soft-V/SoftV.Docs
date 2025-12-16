---
id: servo
title: Сервоприводы
---

# Сервоприводы

Здесь описан функционал управления сервоприводами с помощью библиотеки robocad. Также этот функционал может быть использован для управления светодиодами. 

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
        # двигать сервомоторами
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # немного подождать, чтобы robocad инициализировался
        time.sleep(0.1)
        robot.set_angle_servo(0, 1) # установка угла 0 для порта 1

        # подождать 3 секунды
        time.sleep(3)
        robot.set_angle_servo(180, 1) # установка угла 180 для порта 1

        time.sleep(0.1)
        robot.stop()
        ```  

        Также доступна работа с сервоприводами на плате управления моторами:  
        ```python
        # двигать сервомоторами
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # немного подождать, чтобы robocad инициализировался
        time.sleep(0.1)
        robot.additional_servo_1 = 0   # установка угла 0 для порта 1

        # подождать 3 секунды
        time.sleep(3)
        robot.additional_servo_1 = 180 # установка угла 180 для порта 1

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // двигать сервомоторами
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // немного подождать, чтобы robocad инициализировался
                Thread.sleep(100);
                robot.setAngleServo(0, 1); // установка угла 0 для порта 1

                // подождать 3 секунды
                Thread.sleep(3000);
                robot.setAngleServo(180, 1); // установка угла 180 для порта 1

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```

        Также доступна работа с сервоприводами на плате управления моторами:  
        ```java
        // двигать сервомоторами
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // немного подождать, чтобы robocad инициализировался
                Thread.sleep(100);
                robot.setAdditionalServo1(0);   // установка угла 0 для порта 1

                // подождать 3 секунды
                Thread.sleep(3000);
                robot.setAdditionalServo1(180); // установка угла 180 для порта 1

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
Есть 8 портов для сервоприводов. Нумерация начинается с 1.  
Для сервомоторов на плате управления двигателями есть только два порта.  
:::
