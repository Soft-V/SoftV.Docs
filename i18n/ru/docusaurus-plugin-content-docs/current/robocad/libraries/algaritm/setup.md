---
id: setup
title: Настройка проекта
---


# Настройка проекта

Здесь представлен пример того, как можно настроить проект для запуска, если вы не используете проект-шаблон:  

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
        
        # действия здесь

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

                // действия здесь

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```

        Убедитесь, что в вашем **pom.xml** есть:
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```

        Чтобы работать с камерой из симулятора, вам следует [скомпилировать или скачать предварительно собранную версию OpenCV](https://docs.opencv.org/5.0/tutorials/introduction/general_install/general_install.html) и загрузить требуемую библиотеку в начале вашей программы. Например:
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

            // действия здесь

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```  

        Убедитесь, что ваш CMake-таргет линкуется с `robocad-cpp` (см. [установку](../installation/cpp)) и с **OpenCV**, а также что рантайм OpenCV доступен при запуске для работы с камерой.
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

                // действия здесь

                Thread.Sleep(100);
                robot.Stop();
            }
        }
        ```  

        Убедитесь, что в вашем проекте подключён NuGet-пакет **RobocadCs** (см. [установку](../installation/cs)).
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   