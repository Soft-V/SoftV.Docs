---
id: joystick
title: Working with the joystick
---

# Working with the joystick

This page shows examples of controlling a servo using joystick from the shufflecad. The Algaritm robot kit is used in examples.

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
        # control a servo using the joystick
        from robocad.algaritm import RobotAlgaritm
        from robocad.shufflecad import Shufflecad

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)

        # wait for robocad to initialize
        time.sleep(0.1)

        st_time = time.time()
        while time.time() - st_time < 30:
            raw = shufflecad.joystick_data.left_stick_y
            angle = abs(raw) / 200
            robot.set_angle_servo(angle, 1)
            time.sleep(0.1)

        time.sleep(0.1)
        robot.stop()
        ```

        :::note
        Available joystick values:  
        - *btn_a*;  
        - *btn_b*;  
        - *btn_x*;  
        - *btn_y*;  
        - *right_shoulder*;  
        - *left_shoulder*;  
        - *dpud_up*;  
        - *dpud_down*;  
        - *dpud_left*;  
        - *dpud_right*;  
        - *left_trigger*;  
        - *right_trigger*;  
        - *left_stick_x*;  
        - *right_stick_y*;  
        - *right_stick_x*;  
        - *left_stick_y*;  
        :::
    </TabItem>
    <TabItem value="java">
        ```java
        // control a servo using the joystick
        import io.github.softv.RobotAlgaritm;
        import io.github.softv.shufflecad.Shufflecad;

        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                // wait for robocad to initialize
                Thread.sleep(100);

                long stTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - stTime < 30000) {
                    float raw = shufflecad.joystickData.LeftStickY;
                    float angle = Math.abs(raw) / 200;
                    robot.setAngleServo(angle, 1);
                
                    Thread.sleep(100);
                }

                Thread.sleep(100);
                robot.stop();
            }
        }
        ```

        :::note
        Available joystick values:  
        - *BtnA*;  
        - *BtnB*;  
        - *BtnX*;  
        - *BtnY*;  
        - *RightShoulder*;  
        - *LeftShoulder*;  
        - *DpudUp*;
        - *DpudDown*; 
        - *DpudRight*; 
        - *DpudLeft*;  
        - *RightTrigger*;
        - *LeftTrigger*; 
        - *LeftStickX*;  
        - *RightStickY*;  
        - *RightStickX*;  
        - *LeftStickY*;  
        :::
    </TabItem>
    <TabItem value="cpp">
        ```cpp
        // control a servo using the joystick
        #include "algaritm.hpp"
        #include "shufflecad.hpp"

        #include <thread>
        #include <chrono>
        #include <cmath>

        int main() {
            const bool IS_REAL_ROBOT = true;
            RobotAlgaritm robot(IS_REAL_ROBOT);
            Shufflecad shufflecad(&robot);

            // wait for robocad to initialize
            std::this_thread::sleep_for(std::chrono::milliseconds(100));

            auto st_time = std::chrono::steady_clock::now();
            while (std::chrono::steady_clock::now() - st_time < std::chrono::seconds(30)) {
                int raw = shufflecad.joystick_data.left_stick_y;
                float angle = std::abs(raw) / 200.0f;
                robot.set_servo_angle(angle, 1);
                std::this_thread::sleep_for(std::chrono::milliseconds(100));
            }

            std::this_thread::sleep_for(std::chrono::milliseconds(100));
            robot.stop();
        }
        ```  
        :::note
        Available joystick values:  
        - *btn_a*;  
        - *btn_b*;  
        - *btn_x*;  
        - *btn_y*;  
        - *right_shoulder*;  
        - *left_shoulder*;
        - *dpad_up*;
        - *dpad_down*; 
        - *dpad_left*;
        - *dpad_right*; 
        - *right_trigger*;  
        - *left_trigger*;  
        - *left_stick_x*;  
        - *right_stick_x*;  
        - *right_stick_y*;  
        - *left_stick_y*;  
        :::
        
    </TabItem>
    <TabItem value="cs">
        ```csharp
        // control a servo using the joystick
        using RobocadCs;

        class Program
        {
            const bool IsRealRobot = true;

            static void Main(string[] args)
            {
                var robot = new RobotAlgaritm(IsRealRobot);
                var shufflecad = new Shufflecad(robot);

                // wait for robocad to initialize
                System.Threading.Thread.Sleep(100);

                var stTime = System.DateTime.UtcNow;
                while ((System.DateTime.UtcNow - stTime).TotalSeconds < 30)
                {
                    int raw = shufflecad.JoystickData.LeftStickY;
                    float angle = System.Math.Abs(raw) / 200f;
                    robot.SetAngleServo(angle, 1);
                    System.Threading.Thread.Sleep(100);
                }

                System.Threading.Thread.Sleep(100);
                robot.Stop();
            }
        }
        ```
        :::note
        Available joystick values:  
        - *BtnA*;  
        - *BtnB*;  
        - *BtnX*;  
        - *BtnY*;  
        - *RightShoulder*;  
        - *LeftShoulder*;  
        - *DpudUp*;
        - *DpudDown*; 
        - *DpudRight*; 
        - *DpudLeft*;  
        - *RightTrigger*;
        - *LeftTrigger*; 
        - *LeftStickX*;  
        - *RightStickY*;  
        - *RightStickX*;  
        - *LeftStickY*;  
        :::
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   


