---
id: connecting-camera
title: 摄像头的连接
---

# 摄像头的连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

套件中包含 Microsoft LifeCam 摄像头 —— 这是一款 USB 网络摄像头，广泛应用于教育和竞赛机器人领域，通常作为深度相机的更简单、更经济的替代方案，用于视觉处理任务。它特别适合物体检测、颜色追踪和基础图像处理等应用，因为其兼容 OpenCV 等主流框架。

<div style={{textAlign: "center"}}>
    <img src="/docshome/img/studica-kit/other/microsoft-lifecam.png"/>
</div>

摄像头通过 USB 连接，为获得最佳性能，建议将其连接到 VMX 控制器上的 USB 3.0 端口之一。

<div style={{textAlign: "center"}}>
    <img src="/docshome/img/studica-kit/other/camera-connection.png"/>
</div>

下面的代码片段从摄像头捕获视频流并在 shufflecad 中显示，从而可以快速检查摄像头是否正常工作以及连接是否正确。

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

        在您的 `CMakeLists.txt` 中链接 **OpenCV**`（find_package(OpenCV REQUIRED)）`；无需手动加载运行时环境，因为该库已在构建阶段链接。
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