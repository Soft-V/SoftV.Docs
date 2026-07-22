---
id: camera
title: 摄像头
---

# 摄像头

摄像头用于从机器人获取实时图像。

#### 示例：

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
        # 旋转5秒并将摄像头图像发送到 shufflecad
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)

        # 与 shufflecad 交互
        cv_default_camera: CameraVariable = shufflecad.add_var(CameraVariable("default"))
        
        # 等待 robocad 初始化
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
        // 旋转5秒并将摄像头图像发送到 shufflecad
        import io.github.softv.shufflecad.Shufflecad;
        import io.github.softv.shufflecad.CameraVariable;
        import io.github.softv.RobotAlgaritm;

        import org.opencv.core.Mat;
        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                if (IS_REAL_ROBOT) {
                    System.load("/home/pi/opencv/build/lib/libopencv_java490.so");
                } else {
                    System.load("C:\\path\\to\\opencv_java.dll");
                }

                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                // 与 shufflecad 交互
                CameraVariable cvDefaultCamera = (CameraVariable)shufflecad.addVar(new CameraVariable("default"));

                // 等待 robocad 初始化
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
        // 旋转5秒并将摄像头图像发送到 shufflecad
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);
            Shufflecad shufflecad(&robot);

            // 与 shufflecad 交互
            CameraVariable* cv_default_camera = shufflecad.add_var(new CameraVariable("default"));

            // 等待 robocad 初始化
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_motor_speed_0(30);
            robot.set_motor_speed_1(30);
            robot.set_motor_speed_2(30);

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(5)) {
                cv::Mat img = robot.get_camera();
                if (!img.empty())
                    cv_default_camera->set_mat(img);
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

        请在 `CMakeLists.txt` 中链接 **OpenCV**（`find_package(OpenCV REQUIRED)`）；由于是在构建时静态链接，因此不需要像 Java 那样手动加载运行库。
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // 旋转5秒并将摄像头图像发送到 shufflecad
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);
                var shufflecad = new Shufflecad(robot);

                // 与 shufflecad 交互
                var cvDefaultCamera = (CameraVariable)shufflecad.AddVar(new CameraVariable("default"));

                // 等待 robocad 初始化
                System.Threading.Thread.Sleep(100);
                robot.MotorSpeed0 = 30;
                robot.MotorSpeed1 = 30;
                robot.MotorSpeed2 = 30;

                var stTime = System.DateTime.UtcNow;
                while ((System.DateTime.UtcNow - stTime).TotalSeconds < 5)
                {
                    var img = robot.CameraImage;
                    if (img != null)
                        cvDefaultCamera.SetMat(img);
                    System.Threading.Thread.Sleep(100);
                }

                robot.MotorSpeed0 = 0;
                robot.MotorSpeed1 = 0;
                robot.MotorSpeed2 = 0;

                System.Threading.Thread.Sleep(100);
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
使用摄像头图像需要 OpenCV 库。
:::
