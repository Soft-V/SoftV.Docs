---
id: connecting-encoders
title: 连接编码器
---

# 连接编码器

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

驱动板上的每个电机通道都配有一个编码器输入端口。通过连接数字编码器，可以实时跟踪电机的转动情况，从而实现对速度和位移的精确监测，这对于需要精准运动的应用（如循线、里程计或机械臂定位）至关重要。

使用套件附带的标准 4 针线缆连接数字编码器。请务必注意正确的引脚定义。
<div style={{ marginBottom: "10px" }}>
    <img src="/docshome/img/algaritm-kit/driver/driver-encoder-connection.png"/>
</div>
下面的代码片段读取连接到端口 2（如上例所示）的数字编码器的数值，并将其发送到 shufflecad。这提供了一种快速简便的方法，用于验证编码器工作是否正常以及连接是否正确。

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
        from robocad.algaritm import RobotAlgaritm
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        enc2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("enc2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        robot.motor_speed_1 = 50

        start_time = time.time()
        while time.time() - start_time < 60:
            enc2.set_float(robot.motor_enc_1)
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotAlgaritm;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.shufflecad.Shufflecad;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);

                ShuffleVariable enc2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("enc2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                robot.setMotorSpeed1(50);
                
                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    enc2.setFloat(robot.getMotorEnc1());
                    Thread.sleep(20);
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

            ShuffleVariable* enc2 = shufflecad.add_var(new ShuffleVariable("enc2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            robot.set_motor_speed_1(50);

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                enc2->set_float(robot.get_motor_enc_1());
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

                var enc2 = shufflecad.AddVar(new ShuffleVariable("enc2", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                robot.MotorSpeed1 = 50;

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    enc2.SetFloat(robot.MotorEnc1);
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

:::note
为补充硬件能力，**robocad** 库提供了自有的 PID 控制器，可帮助您实现更平滑的加速、更小的超调以及更精确的定位。请注意，如果编码器未正确连接，PID 控制器将无法工作。请参阅使用 PID 及调整其系数的示例。
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
        from robocad.algaritm import RobotAlgaritm
        import time

        robot: RobotAlgaritm = RobotAlgaritm(True)
        robot.set_pid_settings(True, 0.14, 0.1, 0)
        time.sleep(1)

        # 在此处放置你的代码

        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotAlgaritm;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(true);
                robot.setPidSettings(true, 0.14f, 0.1f, 0.0f);
                Thread.sleep(1000);

                // 在此处放置你的代码
                
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        #include "algaritm.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotAlgaritm robot(true);
            robot.set_pid_settings(true, 0.14f, 0.1f, 0.0f);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            // 在此处放置你的代码

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
                robot.SetPidSettings(true, 0.14f, 0.1f, 0.0f);
                Thread.Sleep(1000);

                robot.Stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="labview">
        **待完成：** 😇
    </TabItem>
</Tabs>
:::
