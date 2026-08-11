---
id: connecting-camera
title: Подключение камеры
---

# Подключение камеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

В набор входит камера Microsoft LifeCam — USB-веб-камера, широко используемая в образовательной и соревновательной робототехнике, часто как более простая и доступная альтернатива камерам глубины для задач обработки изображений. Она особенно хорошо подходит для таких приложений, как обнаружение объектов, отслеживание цвета и базовая обработка изображений, благодаря совместимости с распространёнными фреймворками, такими как OpenCV.

<div style={{textAlign: "center"}}>
    <img src="/docshome/img/studica-kit/other/microsoft-lifecam.png"/>
</div>

Камера подключается через USB, и для достижения наилучшей производительности рекомендуется подключать её к одному из портов USB 3.0 на контроллере VMX.

<div style={{textAlign: "center"}}>
    <img src="/docshome/img/studica-kit/other/camera-connection.png"/>
</div>

Приведённый ниже фрагмент кода захватывает видеопоток с камеры и отображает его в shufflecad, что позволяет быстро проверить работоспособность камеры и правильность её подключения.

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
        from robocad.shufflecad import Shufflecad, CameraVariable
        from robocad.studica import RobotVmxTitan
        import time

        robot: RobotVmxTitan = RobotVmxTitan(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        camera: CameraVariable = shufflecad.add_var(CameraVariable("default"))

        start_time = time.time()
        while time.time() - start_time < 60:
            img = robot.camera_image
            if img is not None:
                camera.set_mat(img)
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.shufflecad.CameraVariable;
        import io.github.softv.shufflecad.Shufflecad;
        import io.github.softv.RobotVmxTitan;
        import org.opencv.core.Mat;

        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);

                CameraVariable camera = (CameraVariable) shufflecad.addVar(new CameraVariable("default"));

                long startTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - startTime < 60_000) {
                    Mat img = robot.getCameraImage();
                    if (!img.empty())
                        camera.setMat(img);
                    Thread.sleep(20);
                }

                shufflecad.stop();
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        #include "studica.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {

            RobotVmxTitan robot(true);
            Shufflecad shufflecad(&robot);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            CameraVariable* camera = shufflecad.add_var(new CameraVariable("default"));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                cv::Mat img = robot.get_camera();
                if (!img.empty())
                    camera->set_mat(img);
                std::this_thread::sleep_for(std::chrono::milliseconds(20));
            }

            shufflecad.stop();
            robot.stop();
        }
        ```

        Выполните линковку с **OpenCV** в вашем `CMakeLists.txt` (`find_package(OpenCV REQUIRED)`); ручная загрузка среды выполнения не требуется, так как библиотека подключается на этапе сборки.
    </TabItem>
    <TabItem value="cs">
        ```csharp
        using OpenCvSharp;
        using RobocadCs;

        class Program
        {
            static void Main(string[] args)
            {
                RobotVMXTitan robot = new RobotVMXTitan(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.Sleep(1000);

                CameraVariable camera = shufflecad.AddVar(new CameraVariable("default"));

                var startTime = DateTime.UtcNow;
                while ((DateTime.UtcNow - startTime).TotalSeconds < 60)
                {
                    Mat img = robot.CameraImage;
                    if (!img.Empty())
                        camera.SetMat(img);
                    Thread.Sleep(20);
                }

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