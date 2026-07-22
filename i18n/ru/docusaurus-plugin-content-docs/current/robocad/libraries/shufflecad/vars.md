---
id: vars
title: Работа с переменными
---

# Работа с переменными   

Здесь показаны примеры добавления переменных в shufflecad и отправка/получение значений. Для примера будет использован набор Algaritm.  

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
        # поворачиваться и выводить yaw в shufflecad
        from robocad.algaritm import RobotAlgaritm
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)

        # создание переменных
        yaw_sv: ShuffleVariable = shufflecad.add_var(ShuffleVariable("yaw", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))
        
        # ждем, пока robocad инициализируется
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        st_time = time.time()
        while time.time() - st_time < 10:
            yaw_sv.set_float(robot.yaw)
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // поворачиваться и выводить yaw в shufflecad
        import io.github.softv.RobotAlgaritm;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.shufflecad.Shufflecad;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                // создание переменных
                ShuffleVariable yawSv = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("yaw", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                // ждем, пока robocad инициализируется
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                long stTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - stTime < 10000) {
                    yawSv.setFloat(robot.getYaw());
                    Thread.sleep(100);
                }
                
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // поворачиваться и выводить yaw в shufflecad
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);
            Shufflecad shufflecad(&robot);

            // создание переменных
            ShuffleVariable* yaw_sv = shufflecad.add_var(new ShuffleVariable("yaw", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            // ждем, пока robocad инициализируется
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_motor_speed_0(30);
            robot.set_motor_speed_1(30);
            robot.set_motor_speed_2(30);

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(10)) {
                yaw_sv->set_float(robot.get_yaw());
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            robot.set_motor_speed_0(0);
            robot.set_motor_speed_1(0);
            robot.set_motor_speed_2(0);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // поворачиваться и выводить yaw в shufflecad
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);
                var shufflecad = new Shufflecad(robot);

                // создание переменных
                var yawSv = (ShuffleVariable)shufflecad.AddVar(new ShuffleVariable("yaw", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                // ждем, пока robocad инициализируется
                System.Threading.Thread.Sleep(100);
                robot.MotorSpeed0 = 30;
                robot.MotorSpeed1 = 30;
                robot.MotorSpeed2 = 30;

                var stTime = System.DateTime.UtcNow;
                while ((System.DateTime.UtcNow - stTime).TotalSeconds < 10)
                {
                    yawSv.SetFloat(robot.Yaw);
                    System.Threading.Thread.Sleep(100);
                }

                robot.MotorSpeed0 = 0;
                robot.MotorSpeed1 = 0;
                robot.MotorSpeed2 = 0;

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
Доступные типы данных:  
- *FLOAT_TYPE*;
- *STRING_TYPE*;
- *BIG_STRING_TYPE*;
- *BOOL_TYPE*;
- *CHART_TYPE* (только для *OUT_VAR*);
- *SLIDER_TYPE* (только для *IN_VAR*);
- *RADAR_TYPE* (только для *OUT_VAR*).  

Доступные типы направлений:  
- *IN_VAR* (для получения значений из приложения shufflecad);
- *OUT_VAR* (для отправки значений в приложение shufflecad).
:::
