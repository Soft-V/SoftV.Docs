---
id: infrared
title: 红外距离传感器
---

# 红外距离传感器   

红外距离传感器用于测量与障碍物之间的距离。

#### 示例：

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
        # 向前移动，直到红外传感器的电压达到2000 mv
        from robocad.studica import RobotVmxTitan

        import time

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        
        # 等待一会儿，初始化 robocad
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = -30

        # 等待距离变化
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
        // 向前移动，直到红外传感器的电压达到2000 mv
        import io.github.softv.RobotVmxTitan;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // 等待一会儿，初始化 robocad
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(-30);

                // 等待距离变化
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
    <TabItem value="cpp">
        ```cpp
        // 向前移动，直到红外传感器的电压达到2000 mv
        #include "studica.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = false;
            RobotVmxTitan robot(IS_REAL_ROBOT);

            // 等待一会儿，初始化 robocad
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_motor_speed_0(30);
            robot.set_motor_speed_1(-30);

            // 等待距离变化
            while (robot.get_analog_1() < 2000) {
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            robot.set_motor_speed_0(0);
            robot.set_motor_speed_1(0);

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // 向前移动，直到红外传感器的电压达到2000 mv
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = false;

            static void Main(string[] args)
            {
                var robot = new RobotVMXTitan(IsRealRobot);

                // 等待一会儿，初始化 robocad
                System.Threading.Thread.Sleep(100);
                robot.MotorSpeed0 = 30;
                robot.MotorSpeed1 = -30;

                // 等待距离变化
                while (robot.Analog1 < 2000)
                {
                    System.Threading.Thread.Sleep(100);
                }

                robot.MotorSpeed0 = 0;
                robot.MotorSpeed1 = 0;

                System.Threading.Thread.Sleep(100);
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
红外传感器的电压值范围约为```570```到```2700```。
要从电压值获取IR距离，您可以编写一个转换函数。例如，C#代码如下：
```csharp
public static float VoltageToDist(ushort voltage)
{
    // 除零检查
    if (voltage == 0)
        return 0;
    return (float)Math.Pow((13673.9f / voltage), 1 / 0.83022f);
}
:::