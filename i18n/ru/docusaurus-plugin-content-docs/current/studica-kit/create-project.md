---
id: create-project
title: Создание начального проекта
---

# Создание начального проекта  

На этой странице показан пример настройки проекта для запуска, если вы не используете шаблон проекта:

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
        
        # ваш код здесь

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

                // ваш код здесь

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```  

        Убедитесь, что в файле **pom.xml** указано следующее:
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```  

        Для работы с камерой из симулятора необходимо [скомпилировать или скачать готовую сборку OpenCV](https://docs.opencv.org/5.0/tutorials/introduction/general_install/general_install.html) и загрузить нужную библиотеку в начале программы.

        Например:
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

            // ваш код здесь

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```  

        Убедитесь, что CMake-таргет линкуется с `robocad-cpp` (см. [установку](../robocad/libraries/installation/cpp)) и с **OpenCV**, рантайм которой должен быть доступен при запуске для поддержки камеры.
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

                // ваш код здесь

                Thread.Sleep(100);
                robot.Stop();
            }
        }
        ```  

        Убедитесь, что в проекте добавлен NuGet-пакет **RobocadCs** (см. [установку](../robocad/libraries/installation/cs)).
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   