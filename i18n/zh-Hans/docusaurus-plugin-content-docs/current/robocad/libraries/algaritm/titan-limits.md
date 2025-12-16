---
id: titan-limits
title: 电机控制板的限位端口
---

# 电机控制板的限位端口

电机控制板的限位端口用于从按钮等组件获取布尔值。

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
        # 前进直到按钮被按下
        from robocad.algaritm import RobotAlgaritm

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        
        # 等待 robocad 初始化
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = -30

        # 等待按钮按下
        while not robot.titan_limits[0]:
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // 前进直到按钮被按下
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

                // 等待按钮按下
                while (!robot.getTitanLimits().get(0)) {
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
限位端口为只读，通常用于按钮。
端口的排列顺序如下：
- Limit Low 0
- Limit High 0
- Limit Low 1
- Limit High 1
- Limit Low 2
- Limit High 2
- Limit Low 3
- Limit High 3
:::
