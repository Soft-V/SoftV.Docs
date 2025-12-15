---
id: vmx-hcdio
title: Порты VMX HCDIO
---

# Порты VMX HCDIO

Порты VMX HCDIO используются для установки значений pwm для компонентов.

#### Пример:

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
        # двигать сервомоторами и включать/выключать светодиод
        from robocad.studica import RobotVmxTitan

        import time

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        
        # немного подождать, чтобы robocad инициализировался
        time.sleep(0.1)
        robot.set_angle_hcdio(0, 1) # установка угла 0 для порта 1
        robot.set_pwm_hcdio(0.05, 2) # установка pwm 0.05 для порта 2
        robot.set_bool_hcdio(True, 3) # установка true для порта 3

        # подождать 3 секунды
        time.sleep(3)
        robot.set_angle_hcdio(300, 1) # установка угла 300 для порта 1
        robot.set_pwm_hcdio(0.25, 2) # установка pwm 0.25 для порта 2
        robot.set_bool_hcdio(False, 3) # установка false для порта 3

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // двигать сервомоторами и включать/выключать светодиод
        import io.github.softv.RobotVmxTitan;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // немного подождать, чтобы robocad инициализировался
                Thread.sleep(100);
                robot.setAngleHCDIO(0, 1); // установка угла 0 для порта 1
                robot.setPwmHCDIO(0.05f, 2); // установка pwm 0.05 для порта 2
                robot.setBoolHCDIO(true, 3); // установка true для порта 3

                // подождать 3 секунды
                Thread.sleep(3000);
                robot.setAngleHCDIO(300, 1); // установка угла 300 для порта 1
                robot.setPwmHCDIO(0.25f, 2); // установка pwm 0.25 для порта 2
                robot.setBoolHCDIO(false, 3); // установка false для порта 3

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
Порты VMX HCDIO только для записи!  
Обычно используются для сервомоторов и светодиодов.  
Есть 10 портов HCDIO. Нумерация начинается с 1.
:::
