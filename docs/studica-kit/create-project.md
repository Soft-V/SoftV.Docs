---
id: create-project
title: Create initial project
---

# Create initial Project  

This page shows an example of how to configure a project to run if you do not use a project template:

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
        from robocad.algaritm import RobotVmxTitan

        import time

        IS_REAL_ROBOT = True
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        
        # place your code here

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotVmxTitan;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // place your code here

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```  

        Make sure you have this in your **pom.xml** file:
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```  

        To work with camera from simulator you should [compile or download precompiled OpenCV](https://docs.opencv.org/5.0/tutorials/introduction/general_install/general_install.html) and load required library in the beginning of your program.   
        For example:
        ```java
        System.load("C:\\opencv\\build\\java\\x64\\opencv_java490.dll");
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        #include "studica.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotVmxTitan robot(IS_REAL_ROBOT);

            // place your code here

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```  

        Make sure your CMake target links against `robocad-cpp` (see [installation](../robocad/libraries/installation/cpp)) and against **OpenCV**, whose runtime should be discoverable at execution time for camera support.
    </TabItem>
    <TabItem value="cs">
        ```csharp
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotVMXTitan(IsRealRobot);

                // place your code here

                Thread.Sleep(100);
                robot.Stop();
            }
        }
        ```  

        Make sure your project references the **RobocadCs** NuGet package (see [installation](../robocad/libraries/installation/cs)).
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   