---
id: vmx-hcdio
title: VMX HCDIO ports
---

# VMX HCDIO ports

VMX HCDIO ports are used to set pwm values to components.

#### Example:

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
        # move servo motors and turn on/off a LED
        from robocad.studica import RobotVmxTitan

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)
        
        # wait a bit so robocad inites
        time.sleep(0.1)
        robot.set_angle_hcdio(0, 1) # setting angle 0 to port 1
        robot.set_pwm_hcdio(0.05, 2) # setting pwm 0.05 to port 2
        robot.set_bool_hcdio(True, 3) # setting true to port 3

        # wait 3 secs
        time.sleep(3)
        robot.set_angle_hcdio(300, 1) # setting angle 300 to port 1
        robot.set_pwm_hcdio(0.25, 2) # setting pwm 0.25 to port 2
        robot.set_bool_hcdio(False, 3) # setting false to port 3

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // move servo motors and turn on/off a LED
        import io.github.softv.RobotVmxTitan;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // wait a bit so robocad inites
                Thread.sleep(100);
                robot.setAngleHCDIO(0, 1); // setting angle 0 to port 1
                robot.setPwmHCDIO(0.05f, 2); // setting pwm 0.05 to port 2
                robot.setBoolHCDIO(true, 3); // setting true to port 3

                // wait 3 secs
                Thread.sleep(3000);
                robot.setAngleHCDIO(300, 1); // setting angle 300 to port 1
                robot.setPwmHCDIO(0.25f, 2); // setting pwm 0.25 to port 2
                robot.setBoolHCDIO(false, 3); // setting false to port 3

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // move servo motors and turn on/off a LED
        #include "studica.hpp"

        #include <thread>
        #include <chrono>

        int main() {
            const bool IS_REAL_ROBOT = false;
            RobotVmxTitan robot(IS_REAL_ROBOT);

            // wait a bit so robocad inites
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.set_servo_angle(0, 1);   // setting angle 0 to port 1
            robot.set_servo_pwm(0.05f, 2); // setting pwm 0.05 to port 2
            robot.set_led_state(true, 3);  // setting true to port 3

            // wait 3 secs
            std::this_thread::sleep_for(std::chrono::seconds(3));
            robot.set_servo_angle(300, 1);  // setting angle 300 to port 1
            robot.set_servo_pwm(0.25f, 2);  // setting pwm 0.25 to port 2
            robot.set_led_state(false, 3);  // setting false to port 3

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```  

        The **robocad-cpp** header exposes these as `set_servo_angle`/`set_servo_pwm`/`set_led_state`, unlike the `*_hcdio` naming used by the other languages.
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // move servo motors and turn on/off a LED
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = false;

            static void Main(string[] args)
            {
                var robot = new RobotVMXTitan(IsRealRobot);

                // wait a bit so robocad inites
                System.Threading.Thread.Sleep(100);
                robot.SetAngleHcdio(0, 1);    // setting angle 0 to port 1
                robot.SetPwmHcdio(0.05f, 2);  // setting pwm 0.05 to port 2
                robot.SetBoolHcdio(true, 3);  // setting true to port 3

                // wait 3 secs
                System.Threading.Thread.Sleep(3000);
                robot.SetAngleHcdio(300, 1);  // setting angle 300 to port 1
                robot.SetPwmHcdio(0.25f, 2);  // setting pwm 0.25 to port 2
                robot.SetBoolHcdio(false, 3); // setting false to port 3

                System.Threading.Thread.Sleep(100);
                robot.Stop();
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
VMX HCDIO ports are write-only!  
Usually used for servo motors and LEDs.  
There are 10 HCDIO ports. Numeration starts from 1.
:::
