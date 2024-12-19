---
id: vmx-hcdio
title: VMX HCDIO 端口
---

# VMX HCDIO 端口

VMX HCDIO 端口用于为组件设置 pwm 值。

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
        # 移动伺服电机并打开/关闭 LED
        from robocad.studica import RobotVmxTitan

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        
        # 等待一会儿，初始化 robocad
        time.sleep(0.1)
        robot.set_angle_hcdio(0, 1) # 设置角度 0 到端口 1
        robot.set_pwm_hcdio(0.05, 2) # 设置 pwm 0.05 到端口 2
        robot.set_bool_hcdio(True, 3) # 设置 true 到端口 3

        # 等待 3 秒
        time.sleep(3)
        robot.set_angle_hcdio(300, 1) # 设置角度 300 到端口 1
        robot.set_pwm_hcdio(0.25, 2) # 设置 pwm 0.25 到端口 2
        robot.set_bool_hcdio(False, 3) # 设置 false 到端口 3

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // 移动伺服电机并打开/关闭 LED
        import io.github.softv.studica.RobotVmxTitan;

        public class Main {
            const boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // 等待一会儿，初始化 robocad
                Thread.sleep(100);
                robot.setAngleHCDIO(0, 1); // 设置角度 0 到端口 1
                robot.setPwmHCDIO(0.05f, 2); // 设置 pwm 0.05 到端口 2
                robot.setBoolHCDIO(true, 3); // 设置 true 到端口 3

                // 等待 3 秒
                Thread.sleep(3000);
                robot.setAngleHCDIO(300, 1); // 设置角度 300 到端口 1
                robot.setPwmHCDIO(0.25f, 2); // 设置 pwm 0.25 到端口 2
                robot.setBoolHCDIO(false, 3); // 设置 false 到端口 3

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="labview">
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/studica/labview/lv_hcdio.png" />
        </div>
    </TabItem>
</Tabs>   

:::note
VMX HCDIO 端口是只写的！  
通常用于伺服电机和 LED。  
有 10 个 HCDIO 端口，编号从 1 开始。
:::
