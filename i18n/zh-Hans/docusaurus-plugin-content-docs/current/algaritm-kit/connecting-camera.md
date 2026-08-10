---
id: connecting-camera
title: 连接摄像头
---

# 连接摄像头

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

套件包含一个 RealSense D430 深度摄像头——一款配备主动红外技术的立体视觉模组，用于三维感知。它具有两个全局快门成像器，最高可提供 90 fps、1280×720 分辨率的深度视频。

<img src="/docshome/img/algaritm-kit/other/d430-camera.png"/>

使用套件附带的标准 Type‑C 线缆连接摄像头——将 Type‑C 端插入摄像头，将 Type‑A 端插入控制器。

<img src="/docshome/img/algaritm-kit/other/d430-camera-connecting-type-c.PNG"/>

下面的代码片段捕获摄像头的视频流并在 shufflecad 上显示，从而提供一种快速的方法来验证摄像头是否正常工作以及连接是否正确。

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
        from robocad.algaritm import RobotAlgaritm
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
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
        import io.github.softv.RobotAlgaritm;
        import org.opencv.core.Mat;

        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
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
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {

            RobotAlgaritm robot(true);
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

        在你的 `CMakeLists.txt` 中链接 **OpenCV**（`find_package(OpenCV REQUIRED)`）；由于是在构建时链接的，因此不需要手动加载运行时库。
    </TabItem>
    <TabItem value="cs">
        ```csharp
        using OpenCvSharp;
        using RobocadCs;

        class Program
        {
            static void Main(string[] args)
            {
                RobotAlgaritm robot = new RobotAlgaritm(true);
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
        **待完成：** 😇
    </TabItem>
</Tabs>
