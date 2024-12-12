---
id: camera
title: Камера
---

# Камера   

Камера используется для получения изображения в реальном времени с робота.

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
        # поворачиваться в течение 5 секунд и отправлять изображение с камеры в shufflecad
        from robocad.shufflecad.shufflecad import Shufflecad
        from robocad.shufflecad.shufflecad_holder import ShuffleVariable, CameraVariable
        from robocad.studica import RobotVmxTitan

        IS_REAL_ROBOT = False
        robot = RobotVmxTitan(IS_REAL_ROBOT)

        # работа с shufflecad
        cv_default_camera: CameraVariable = Shufflecad.add_var(CameraVariable("default"))
        Shufflecad.start()
        
        # ждем, пока robocad инициализируется
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        st_time = time.time()
        while time.time() - st_time < 5:
            cv_default_camera.set_mat(robot.camera_image)
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        time.sleep(0.1)
        robot.stop()
        Shufflecad.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // поворачиваться в течение 5 секунд и отправлять изображение с камеры в shufflecad
        import io.github.softv.shufflecad.Shufflecad;
        import io.github.softv.studica.RobotVmxTitan;

        public class Main {
            const boolean IS_REAL_ROBOT = false;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotVmxTitan robot = new RobotVmxTitan(IS_REAL_ROBOT);

                // работа с shufflecad
                CameraVariable cvDefaultCamera = (CameraVariable)Shufflecad.addVar(new CameraVariable("default"));
                Shufflecad.start();

                // ждем, пока robocad инициализируется
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                long stTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - stTime < 5000) {
                    cvDefaultCamera.setMat(robot.getCameraImage());
                    Thread.sleep(100);
                }

                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

                Thread.sleep(100);
                robot.stop();
                Shufflecad.stop();
            }
        }
        ```
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   

:::note
Для использования изображения с камеры требуется библиотека OpenCV.
:::
