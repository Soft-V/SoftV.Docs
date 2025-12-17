---
id: joystick
title: 使用手柄（摇杆）
---

# 使用手柄（摇杆）

本页展示如何从 shufflecad 获取手柄数据的示例。示例使用 Algaritm 机器人套件。

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
        # 使用手柄控制伺服
        from robocad.algaritm import RobotAlgaritm
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)
        
        # 等待 robocad 初始化
        time.sleep(0.1)

        st_time = time.time()
        while time.time() - st_time < 30:
            if "LeftThumbstick_Y" in shufflecad.joystick_values:
                raw = shufflecad.joystick_values["LeftThumbstick_Y"]
                angle = abs(raw) / 200
                robot.set_angle_servo(angle, 1)
            time.sleep(0.1)

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // 使用手柄控制伺服
        import io.github.softv.RobotAlgaritm;
        import io.github.softv.shufflecad.CameraVariable;
        import io.github.softv.shufflecad.Shufflecad;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                // 等待 robocad 初始化
                Thread.sleep(100);

                long stTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - stTime < 30000) {
                    if (shufflecad.joystickValues.containsKey("LeftThumbstick_Y")) {
                        float raw = shufflecad.joystickValues.get("LeftThumbstick_Y");
                        float angle = Math.abs(raw) / 200;
                        robot.setAngleServo(angle, 1);
                    }
                    Thread.sleep(100);
                }

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
可用的手柄值键：  
- *A*;  
- *X*;  
- *Y*;  
- *B*;  
- *RightShoulder*;  
- *LeftShoulder*;  
- *DPad_Up*;  
- *DPad_Down*;  
- *DPad_Left*;  
- *DPad_Right*;  
- *LeftTrigger*;  
- *RightTrigger*;  
- *LeftThumbstick_X*;  
- *LeftThumbstick_Y*;  
- *RightThumbstick_X*;  
- *RightThumbstick_Y*;  
:::
