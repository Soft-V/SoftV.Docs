---
id: lidar
title: Лидар
---

# Лидар   

Лидар используется для получения расстояний по окружности в реальном времени с робота.

#### Пример:

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
        # стоять в течение 10 секунд и отправлять данные лидара в shufflecad
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)

        # работа с shufflecad
        lidar_sv: ShuffleVariable = shufflecad.add_var(ShuffleVariable("lidar", ShuffleVariable.RADAR_TYPE, ShuffleVariable.OUT_VAR))
        
        # ждем, пока robocad инициализируется
        time.sleep(0.1)

        st_time = time.time()
        while time.time() - st_time < 10:
            data = robot.lidar_data
            if data is not None:
                lidar_sv.set_radar(data)
            time.sleep(0.1)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // стоять в течение 10 секунд и отправлять данные лидара в shufflecad
        import io.github.softv.shufflecad.Shufflecad;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.RobotAlgaritm;

        import java.util.ArrayList;
        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                // работа с shufflecad
                ShuffleVariable svLidar = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("lidar", ShuffleVariable.RADAR_TYPE, ShuffleVariable.OUT_VAR));

                // ждем, пока robocad инициализируется
                Thread.sleep(100);

                long stTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - stTime < 10000) {
                    ArrayList<Integer> data = robot.getLidarData();
                    if (data != null)
                        svLidar.setRadar(data);
                    Thread.sleep(100);
                }

                shufflecad.stop();
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // стоять в течение 10 секунд и отправлять данные лидара в shufflecad
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);
            Shufflecad shufflecad(&robot);

            // работа с shufflecad
            ShuffleVariable* lidar_sv = shufflecad.add_var(new ShuffleVariable("lidar", ShuffleVariable::RADAR_TYPE, ShuffleVariable::OUT_VAR));

            // ждем, пока robocad инициализируется
            std::this_thread::sleep_for(std::chrono::milliseconds(100));

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(10)) {
                std::vector<float> data = robot.get_lidar();
                if (!data.empty())
                    lidar_sv->set_radar(data);
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            shufflecad.stop();
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // стоять в течение 10 секунд и отправлять данные лидара в shufflecad
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);
                var shufflecad = new Shufflecad(robot);

                // работа с shufflecad
                var lidarSv = (ShuffleVariable)shufflecad.AddVar(new ShuffleVariable("lidar", ShuffleVariable.RadarType, ShuffleVariable.OutVar));

                // ждем, пока robocad инициализируется
                System.Threading.Thread.Sleep(100);

                var stTime = System.DateTime.UtcNow;
                while ((System.DateTime.UtcNow - stTime).TotalSeconds < 10)
                {
                    float[] data = robot.LidarData;
                    if (data != null)
                        lidarSv.SetRadar(data);
                    System.Threading.Thread.Sleep(100);
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

:::note
Данные лидара приходят в виде массива размером 360 со значениями расстояний в миллиметрах.  
:::
