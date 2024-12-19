---
id: encoders
title: Энкодеры
---

# Энкодеры   

Энкодеры используются для определения количества оборотов моторов.

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
        # поворачивайтесь 5 секунд, остановитесь и проверьте разницу энкодеров
        from robocad.studica import RobotVmxTitan

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        
        # ждем, пока robocad инициализируется
        time.sleep(0.1)
        enc_start = robot.motor_enc_0
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        time.sleep(5)
        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        enc_diff = robot.motor_enc_0 - enc_start

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // поворачивайтесь 5 секунд, остановитесь и проверьте разницу энкодеров
        import io.github.softv.studica.RobotVmxTitan;

        public class Main {
            const boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // ждем, пока robocad инициализируется
                Thread.sleep(100);
                float encStart = robot.getMotorEnc0();
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                Thread.sleep(5000);
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                float encDiff = robot.getMotorEnc0() - encStart;

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="labview">
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/studica/labview/lv_enc.png" />
        </div>
    </TabItem>
</Tabs>   

:::warning
Внутренняя реализация энкодеров может со временем измениться, поэтому значения могут быть разными!
:::
