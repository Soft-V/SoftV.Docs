---
id: infrared
title: 红外测距传感器
---

# 红外测距传感器

红外测距传感器用于确定与障碍物之间的距离。

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
        # 前进直到红外传感器读数达到 2000 mV
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # 等待 robocad 初始化
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = -30

        # 等待达到目标距离
        while robot.analog_1 < 2000:
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // 前进直到红外传感器读数达到 2000 mV
        import io.github.softv.RobotAlgaritm;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);

                // 等待 robocad 初始化
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(-30);

                // 等待达到目标距离
                while (robot.getAnalog1() < 2000) {
                    Thread.sleep(100);
                }
                
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);

                Thread.sleep(100);
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
红外传感器的电压大约在 `570` 到 `2700` mV 之间。
要将电压转换为距离，可以编写一个转换函数，示例（C#）：
```csharp
public static float VoltageToDist(ushort voltage)
{
    // 检查除以零
    if (voltage == 0)
        return 0;
    return (float)Math.Pow((13673.9f / voltage), 1 / 0.83022f);
}
```
:::
