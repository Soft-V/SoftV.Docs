---
id: lidar
title: 激光雷达
---

# 激光雷达

激光雷达用于实时获取机器人周围的距离数据。

#### 示例：

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
        # 站立10秒并将激光雷达数据发送到 shufflecad
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)

        # 与 shufflecad 交互
        lidar_sv: ShuffleVariable = shufflecad.add_var(ShuffleVariable("lidar", ShuffleVariable.RADAR_TYPE, ShuffleVariable.OUT_VAR))
        
        # 等待 robocad 初始化
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
        // 站立10秒并将激光雷达数据发送到 shufflecad
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

                // 与 shufflecad 交互
                ShuffleVariable svLidar = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("lidar", ShuffleVariable.RADAR_TYPE, ShuffleVariable.OUT_VAR));

                // 等待 robocad 初始化
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
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>    

:::note
激光雷达数据以长度为 360 的数组形式到来，数组包含以毫米为单位的距离值。
:::
