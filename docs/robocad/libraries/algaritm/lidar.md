---
id: lidar
title: Lidar
---

# Lidar

Lidar is used to obtain distances around the robot in real time.

#### Example:

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
        # stand for 10 seconds and send lidar data to shufflecad
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)

        # work with shufflecad
        lidar_sv: ShuffleVariable = shufflecad.add_var(ShuffleVariable("lidar", ShuffleVariable.RADAR_TYPE, ShuffleVariable.OUT_VAR))
        
        # wait until robocad is initialized
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
        // stand for 10 seconds and send lidar data to shufflecad
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

                // work with shufflecad
                ShuffleVariable svLidar = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("lidar", ShuffleVariable.RADAR_TYPE, ShuffleVariable.OUT_VAR));

                // wait until robocad is initialized
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
Lidar data arrives as an array of size 360 with distance values in millimeters.
:::
