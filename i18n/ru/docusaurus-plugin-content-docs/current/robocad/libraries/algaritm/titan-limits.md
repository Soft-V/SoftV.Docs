---
id: titan-limits
title: Лимит порты платы управления моторами
---

# Лимит порты платы управления моторами

Лимит порты платы управления моторами используются для получения значений от кнопок и других компонентов типа bool.

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
        # двигаться вперёд до нажатия кнопки
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # немного подождать, чтобы robocad инициализировался
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = -30

        # ждать нажатия кнопки
        while not robot.titan_limits[0]:
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // двигаться вперёд до нажатия кнопки
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // немного подождать, чтобы robocad инициализировался
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(-30);

                // ждать нажатия кнопки
                while (!robot.getTitanLimits().get(0)) {
                    Thread.sleep(100);
                }
                
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);

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
Лимит порты только для чтения!  
Обычно используются для кнопок.  
Порты размещаются в следующем порядке:
- Limit Low 0
- Limit High 0
- Limit Low 1
- Limit High 1
- Limit Low 2
- Limit High 2
- Limit Low 3
- Limit High 3
:::
