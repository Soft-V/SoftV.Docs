---
id: setup
title: 專案設置
---


# 專案設置

這是一個如何設置專案的範例，如果你不使用範例專案的話:  

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
        from robocad.studica import RobotVmxTitan

        import time

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        
        # 在此處執行某些操作

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotVmxTitan;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // 在此處執行某些操作

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```

        確保在您的 **pom.xml** 中包含以下內容：
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```

        要從模擬器使用攝像頭，您應當[編譯或下載預編譯的 OpenCV](https://docs.opencv.org/5.0/tutorials/introduction/general_install/general_install.html)，並在程式開頭載入所需庫。例如：
        ```java
        System.load("C:\\opencv\\build\\java\\x64\\opencv_java490.dll");
        ```
    </TabItem>
    <TabItem value="labview">
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/studica/labview/lv_setup.png" />
        </div>
    </TabItem>
</Tabs>   