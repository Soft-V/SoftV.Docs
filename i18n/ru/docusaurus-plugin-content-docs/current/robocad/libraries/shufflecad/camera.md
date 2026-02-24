---
id: camera
title: Работа с переменными для видеопотоков
---

# Работа с переменными для видеопотоков   

Здесь показаны примеры добавления переменных для видеопотоков в shufflecad и отправка изображений. Для примера будет использован набор Algaritm.  

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
        # поворачиваться и выводить изображение с камеры в shufflecad
        from robocad.algaritm import RobotAlgaritm
        from robocad.shufflecad import Shufflecad, ShuffleVariable, CameraVariable

        import time

        IS_REAL_ROBOT = True
        robot = RobotAlgaritm(IS_REAL_ROBOT)
        shufflecad = Shufflecad(robot)

        # создание переменных
        camera_cv: CameraVariable = shufflecad.add_var(CameraVariable("source"))
        
        # ждем, пока robocad инициализируется
        time.sleep(0.1)
        robot.motor_speed_0 = 30
        robot.motor_speed_1 = 30
        robot.motor_speed_2 = 30

        st_time = time.time()
        while time.time() - st_time < 10:
            img = robot.camera_image
            if img is not None:
                camera_cv.set_mat(img)
            time.sleep(0.1)

        robot.motor_speed_0 = 0
        robot.motor_speed_1 = 0
        robot.motor_speed_2 = 0

        time.sleep(0.1)
        robot.stop()
        ```
    </TabItem>
    <TabItem value="java">
        ```java
        // поворачиваться и выводить изображение с камеры в shufflecad
        import io.github.softv.RobotAlgaritm;
        import io.github.softv.shufflecad.CameraVariable;
        import io.github.softv.shufflecad.Shufflecad;

        import org.opencv.core.Mat;
        import java.io.IOException;

        public class Main {
            final static boolean IS_REAL_ROBOT = true;

            public static void main(String[] args) throws IOException, InterruptedException {
                RobotAlgaritm robot = new RobotAlgaritm(IS_REAL_ROBOT);
                Shufflecad shufflecad = new Shufflecad(robot);

                // создание переменных
                CameraVariable cameraCv = (CameraVariable)shufflecad.addVar(new CameraVariable("source"));

                // ждем, пока robocad инициализируется
                Thread.sleep(100);
                robot.setMotorSpeed0(30);
                robot.setMotorSpeed1(30);
                robot.setMotorSpeed2(30);

                long stTime = System.currentTimeMillis();
                while (System.currentTimeMillis() - stTime < 10000) {
                    Mat img = robot.getCameraImage();
                    if (img != null)
                        cameraCv.setMat(img);
                    Thread.sleep(100);
                }
                
                robot.setMotorSpeed0(0);
                robot.setMotorSpeed1(0);
                robot.setMotorSpeed2(0);

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
*CameraVariable* может использоваться только для отправки видепотока/изображения в shufflecad.  
:::
