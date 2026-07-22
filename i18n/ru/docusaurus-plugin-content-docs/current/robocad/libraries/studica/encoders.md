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
        {label: 'C++', value: 'cpp'},
        {label: 'C#', value: 'cs'},
        {label: 'LabVIEW', value: 'labview'},
    ]}>
    <TabItem value="python">  
        ```python
        # поворачивайтесь 5 секунд, остановитесь и проверьте разницу энкодеров
        from robocad.studica import RobotVmxTitan

        import time

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
        import io.github.softv.RobotVmxTitan;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = false;

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
    <TabItem value="cpp">
        ```cpp
        // поворачивайтесь 5 секунд, остановитесь и проверьте разницу энкодеров
        #include "studica.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = false;
            RobotVmxTitan robot(IS_REAL_ROBOT);

            // ждем, пока robocad инициализируется
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            int32_t enc_start = robot.get_motor_enc_0();
            robot.set_motor_speed_0(30);
            robot.set_motor_speed_1(30);
            robot.set_motor_speed_2(30);

            std::this_thread::sleep_for(std::chrono::seconds(5));
            robot.set_motor_speed_0(0);
            robot.set_motor_speed_1(0);
            robot.set_motor_speed_2(0);

            int32_t enc_diff = robot.get_motor_enc_0() - enc_start;

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // поворачивайтесь 5 секунд, остановитесь и проверьте разницу энкодеров
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = false;

            static void Main(string[] args)
            {
                var robot = new RobotVMXTitan(IsRealRobot);

                // ждем, пока robocad инициализируется
                System.Threading.Thread.Sleep(100);
                int encStart = robot.MotorEnc0;
                robot.MotorSpeed0 = 30;
                robot.MotorSpeed1 = 30;
                robot.MotorSpeed2 = 30;

                System.Threading.Thread.Sleep(5000);
                robot.MotorSpeed0 = 0;
                robot.MotorSpeed1 = 0;
                robot.MotorSpeed2 = 0;

                int encDiff = robot.MotorEnc0 - encStart;

                System.Threading.Thread.Sleep(100);
                robot.Stop();
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
