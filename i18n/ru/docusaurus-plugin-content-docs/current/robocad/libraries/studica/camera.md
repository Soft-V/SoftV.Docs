---
id: camera
title: Камера
---

# Камера   

Камера используется для получения изображения в реальном времени с робота.

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
        # поворачиваться в течение 5 секунд и отправлять изображение с камеры в shufflecad
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable
        from robocad.studica import RobotVmxTitan

        import time

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)

        # работа с shufflecad
        cv_default_camera: CameraVariable = shufflecad.add_var(CameraVariable("default"))
        
        # ждем, пока robocad инициализируется
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        st_time = time.time()
        while time.time() - st_time < 5:
            img = robot.camera_image
            if img is not None:
                cv_default_camera.set_mat(img)
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        time.sleep(0.1)
        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // поворачиваться в течение 5 секунд и отправлять изображение с камеры в shufflecad
        import io.github.softv.shufflecad.Shufflecad;
        import io.github.softv.shufflecad.CameraVariable;
        import io.github.softv.RobotVmxTitan;

        import org.opencv.core.Mat;
        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                if (IS_REAL_ROBOT) {
                    System.load("/home/pi/opencv/build/lib/libopencv_java490.so");
                } else {
                    System.load("C:\\path\\to\\opencv_java.dll");
                }

                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                // работа с shufflecad
                CameraVariable cvDefaultCamera = (CameraVariable)shufflecad.addVar(new CameraVariable("default"));

                // ждем, пока robocad инициализируется
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                long stTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - stTime < 5000) {
                    Mat img = robot.getCameraImage();
                    if (img != null)
                        cvDefaultCamera.setMat(img);
                    Thread.sleep(100);
                }

                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                Thread.sleep(100);
                shufflecad.stop();
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // поворачиваться в течение 5 секунд и отправлять изображение с камеры в shufflecad
        #include "studica.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = false;
            RobotVmxTitan robot(IS_REAL_ROBOT);
            Shufflecad shufflecad(&robot);

            // работа с shufflecad
            CameraVariable* cv_default_camera = shufflecad.add_var(new CameraVariable("default"));

            // ждем, пока robocad инициализируется
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_motor_speed_0(30);
            robot.set_motor_speed_1(30);
            robot.set_motor_speed_2(30);

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(5)) {
                cv_default_camera->set_mat(robot.get_camera());
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            robot.set_motor_speed_0(0);
            robot.set_motor_speed_1(0);
            robot.set_motor_speed_2(0);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            shufflecad.stop();
            robot.stop();
        }
        ```  

        Подключите **OpenCV** в `CMakeLists.txt` (`find_package(OpenCV REQUIRED)`); поскольку библиотека линкуется статически на этапе сборки, ручная загрузка рантайма, как в Java, не требуется.
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // поворачиваться в течение 5 секунд и отправлять изображение с камеры в shufflecad
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = false;

            static void Main(string[] args)
            {
                var robot = new RobotVMXTitan(IsRealRobot);
                var shufflecad = new Shufflecad(robot);

                // работа с shufflecad
                var cvDefaultCamera = (CameraVariable)shufflecad.AddVar(new CameraVariable("default"));

                // ждем, пока robocad инициализируется
                Thread.Sleep(100);
                robot.MotorSpeed0 = 30;
                robot.MotorSpeed1 = 30;
                robot.MotorSpeed2 = 30;

                var stTime = System.DateTime.UtcNow;
                while ((System.DateTime.UtcNow - stTime).TotalSeconds < 5)
                {
                    cvDefaultCamera.SetMat(robot.CameraImage);
                    Thread.Sleep(100);
                }

                robot.MotorSpeed0 = 0;
                robot.MotorSpeed1 = 0;
                robot.MotorSpeed2 = 0;

                Thread.Sleep(100);
                shufflecad.Stop();
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
Для использования изображения с камеры требуется библиотека OpenCV.
:::
