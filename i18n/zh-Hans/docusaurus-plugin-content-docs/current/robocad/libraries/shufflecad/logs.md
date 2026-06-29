---
id: logs
title: 在 shufflecad 中记录日志
---

# 在 shufflecad 中记录日志

shufflecad 还提供将日志写入应用的功能。

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
        # 旋转 5 秒并将日志发送到 shufflecad
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)
        
        shufflecad.print_to_log("Robot started", shufflecad.LOG_INFO)

        # 等待 robocad 初始化
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        time.sleep(5)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        shufflecad.print_to_log("Robot stopped", shufflecad.LOG_INFO)

        time.sleep(0.3)
        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // 旋转 5 秒并将日志发送到 shufflecad
        import io.github.softv.shufflecad.Shufflecad;
        import io.github.softv.shufflecad.CameraVariable;
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                shufflecad.printToLog("Robot started", shufflecad.LOG_INFO);

                // 等待 robocad 初始化
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                Thread.sleep(5000);

                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                shufflecad.printToLog("Robot stopped", shufflecad.LOG_INFO);

                Thread.sleep(300);
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
可用的日志级别：  
- *LOG_INFO*;
- *LOG_WARNING*;
- *LOG_ERROR*。  
  
此外，日志函数的第三个参数可以接受十六进制格式的颜色值，例如 ```"#CCCCCC"```。
:::
