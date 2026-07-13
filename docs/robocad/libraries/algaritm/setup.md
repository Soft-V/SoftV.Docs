---
id: setup
title: Project setup
---


# Project setup

This page shows an example of how to configure a project to run if you do not use a project template:

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
        
        # actions go here

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

                // actions go here

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
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   
