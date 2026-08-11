---
id: connecting-encoders
title: 编码器的连接
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 编码器的连接

驱动板上的每个电机通道都配备了一个编码器端口。连接数字编码器后，您可以实时监测电机的旋转情况。这实现了对速度和位移的精确控制，这对于需要高精度运动的应用（如巡线、里程计或机械臂定位）至关重要。

使用套件中附带的 4 芯标准电缆连接数字编码器。请务必遵循正确的引脚排列。

<img src="/docshome/img/studica-kit/titan/titan-connecting-encoder.png"/>

下面的代码片段读取连接到端口 2（如上面示例所示）的数字编码器值，并将其发送到 shufflecad。这样可以快速轻松地验证编码器是否工作正常以及连接是否正确。

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
        from robocad.studica import RobotVmxTitan
        from robocad.shufflecad import Shufflecad, ShuffleVariable
        import time

        robot: RobotVmxTitan = RobotVmxTitan(True)
        shufflecad = Shufflecad(robot)
        time.sleep(1)

        enc2: ShuffleVariable = shufflecad.add_var(ShuffleVariable("enc2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR))

        robot.motor_speed_1 = 50

        start_time = time.time()
        while time.time() - start_time < 60:
            enc2.set_float(robot.motor_enc_2)
            time.sleep(0.02)

        shufflecad.stop()
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        import io.github.softv.RobotVmxTitan;
        import io.github.softv.shufflecad.ShuffleVariable;
        import io.github.softv.shufflecad.Shufflecad;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.sleep(1000);

                ShuffleVariable enc2 = (ShuffleVariable)shufflecad.addVar(new ShuffleVariable("enc2", ShuffleVariable.FLOAT_TYPE, ShuffleVariable.OUT_VAR));

                robot.setMotorSpeed1(50);

                long startTime = System.currentTimeMillis();
                while(System.currentTimeMillis() - startTime < 60_000) {
                    enc2.setFloat(robot.getMotorEnc2());
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
        #include "studica.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            RobotVmxTitan robot(true);
            Shufflecad shufflecad(&robot);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));

            ShuffleVariable* enc2 = shufflecad.add_var(new ShuffleVariable("enc2", ShuffleVariable::FLOAT_TYPE, ShuffleVariable::OUT_VAR));

            robot.set_motor_speed_1(50);

            auto start_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - start_time < std::chrono::seconds(60)) {
                enc2->set_float(robot.get_motor_enc_2());
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
                RobotVMXTitan robot = new RobotVMXTitan(true);
                Shufflecad shufflecad = new Shufflecad(robot);
                Thread.Sleep(1000);

                var enc2 = shufflecad.AddVar(new ShuffleVariable("enc2", ShuffleVariable.FloatType, ShuffleVariable.OutVar));

                robot.MotorSpeed1 = 50;

                long startTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
                while (DateTimeOffset.Now.ToUnixTimeMilliseconds() - startTime < 60_000)
                {
                    enc2.SetFloat(robot.MotorEnc2);
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
