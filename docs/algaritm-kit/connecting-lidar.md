---
id: connecting-lidar
title: Connecting LiDAR
---

# Connecting LiDAR

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The kit includes a WHEELTEC N10 LiDAR — a compact 360° scanning laser rangefinder specifically designed for indoor robotics applications. The N10 offers a detection range of up to 25 meters for white surfaces (11 meters for black objects) with an accuracy of ±3 cm up to 6 meters.

<img src="/docshome/img/algaritm-kit/other/lidar-n10.PNG"/>

The kit includes a dedicated cable for interfacing the LiDAR with the communication board. Simply connect one end (5-pin side) to the LiDAR module.

<img src="/docshome/img/algaritm-kit/other/lidar-connecting-lidar.PNG"/>

Next step is to connect 4-pin side of the cable to the communication board/ There are two connectors available and you must use the smaller one.

<img src="/docshome/img/algaritm-kit/other/lidar-connecting-communication-block.PNG"/>

The last step is to connect the USB cable. Plug the Type-C end into the module and the Type-A end into the USB 3.0 port of the controller.

<div style={{marginBottom: "10px"}}>
    <img src="/docshome/img/algaritm-kit/other/lidar-communication-block-type-c.PNG"/>
</div>

The code snippet below retrieves distance data from the LiDAR and sends it to shufflecad, where it is displayed as a radar‑style plot, giving you a clear view of the surrounding environment. 
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
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        from robocad.algaritm import RobotAlgaritm
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        lidar: ShuffleVariable = shufflecad.add_var(ShuffleVariable("lidar", ShuffleVariable.RADAR_TYPE, ShuffleVariable.OUT_VAR))

        start_time = time.time()
        while time.time() - start_time < 60:
            data = robot.lidar_data
            if data is not None:
                lidar.set_radar(data)
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.shufflecad.Shufflecad;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.RobotAlgaritm;

        import java.util.ArrayList;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);

                ShuffleVariable lidar = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("lidar", ShuffleVariable.RADAR_TYPE, ShuffleVariable.OUT_VAR));

                long startTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - startTime < 60_000) {
                    ArrayList<Integer> data = robot.getLidarData();
                    if (data != null)
                        lidar.setRadar(data);
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
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {

            RobotAlgaritm robot(true);
            Shufflecad shufflecad(&robot);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            ShuffleVariable* lidar = shufflecad.add_var(new ShuffleVariable("lidar", ShuffleVariable::RADAR_TYPE, ShuffleVariable::OUT_VAR));

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(60)) {
                std::vector<float> data = robot.get_lidar();
                if (!data.empty())
                    lidar->set_radar(data);
                std::this_thread::sleep_for(std::chrono::milliseconds(20));
            }

            shufflecad.stop();
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        using RobocadCs;

        class Program
        {
            public static void Main(string[] args)
            {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.Sleep(1000);

                ShuffleVariable lidar = (ShuffleVariable)shufflecad.AddVar(new ShuffleVariable("lidar", ShuffleVariable.RadarType, ShuffleVariable.OutVar));

                var startTime = DateTime.UtcNow;
                while ((DateTime.UtcNow - startTime).TotalSeconds < 60)
                {
                    float[] data = robot.LidarData;
                    if (data != null)
                        lidar.SetRadar(data);
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