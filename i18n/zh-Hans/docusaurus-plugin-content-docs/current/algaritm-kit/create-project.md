---
id: create-project
title: 创建初始项目
---

# 创建初始项目

如果你不使用项目模板，本页展示了如何配置一个可运行的项目示例：

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
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # 在此处放置你的代码

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // 在此处放置你的代码

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```  

        请确保你的 **pom.xml** 文件中包含以下内容：
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```  

        要在模拟器中使用摄像头，你需要[编译或下载预编译的 OpenCV](https://docs.opencv.org/5.0/tutorials/introduction/general_install/general_install.html)，并在程序开头加载所需的库。   
        例如：
        ```java
        System.load("C:\\opencv\\build\\java\\x64\\opencv_java490.dll");
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);

            // 在此处放置你的代码

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```  

        请确保你的 CMake 目标链接到 `robocad-cpp`（参见[安装说明](../robocad/libraries/installation/cpp)），并链接到 **OpenCV**，其运行时库需要在执行时可被发现，以支持摄像头功能。
    </TabItem>
    <TabItem value="cs">
        ```csharp
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);

                // 在此处放置你的代码

                Thread.Sleep(100);
                robot.Stop();
            }
        }
        ```  

        请确保你的项目引用了 **RobocadCs** NuGet 包（参见[安装说明](../installation/cs)）。
    </TabItem>
    <TabItem value="labview">
        **待完成：** 😇
    </TabItem>
</Tabs>   
