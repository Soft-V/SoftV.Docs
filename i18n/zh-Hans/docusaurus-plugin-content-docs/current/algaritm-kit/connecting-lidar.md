---
id: connecting-lidar
title: 连接 LiDAR
---

# 连接 LiDAR

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

套件包含一个 WHEELTEC N10 LiDAR——一款专为室内机器人应用设计的紧凑型 360° 扫描激光测距仪。N10 对白色表面的探测范围可达 25 米（对黑色物体为 11 米），在 6 米以内精度为 ±3 厘米。

<img src="/docshome/img/algaritm-kit/other/lidar-n10.PNG"/>

套件包含一根专用线缆，用于将 LiDAR 与通信板连接。首先将一端（5 针一侧）连接到 LiDAR 模块。

<img src="/docshome/img/algaritm-kit/other/lidar-connecting-lidar.PNG"/>

下一步是将线缆的 4 针一侧连接到通信板。板上有两个可用接口，必须使用较小的那个。

<img src="/docshome/img/algaritm-kit/other/lidar-connecting-communication-block.PNG"/>

最后一步是连接 USB 线缆。将 Type-C 端插入模块，将 Type-A 端插入控制器的 USB 3.0 端口。

<div style={{marginBottom: "10px"}}>
    <img src="/docshome/img/algaritm-kit/other/lidar-communication-block-type-c.PNG"/>
</div>

下面的代码片段从 LiDAR 获取距离数据并发送到 shufflecad，在那里数据将以雷达图的形式显示，让你清晰地看到周围环境。 
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
        **待完成：** 😇
    </TabItem>
</Tabs>
