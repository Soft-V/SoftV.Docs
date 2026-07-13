---
id: setup
title: 项目设置
---


# 项目设置

下面的示例演示了在不使用项目模板的情况下，如何配置一个可运行的项目：

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
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # 在此处添加你的逻辑

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

                // 在此处添加你的逻辑

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```

        确保在您的 **pom.xml** 中包含以下内容：
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```

        要从模拟器使用摄像头，您应当[编译或下载预编译的 OpenCV](https://docs.opencv.org/5.0/tutorials/introduction/general_install/general_install.html)，并在程序开头加载所需库。例如：
        ```java
        System.load("C:\\opencv\\build\\java\\x64\\opencv_java490.dll");
        ```
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   
