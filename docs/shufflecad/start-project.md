---
id: start-project
title: Start Project
---

# Start Project

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Here is a quick guide on how to launch a project on both actual robot and simulator using shufflecad.

<Tabs defaultValue="robot"
    values={[
        {label: 'Actual Robot', value: 'robot'},
        {label: 'Simulator', value: 'sim'}
    ]}>
    <TabItem value="robot">
        Open the program launch page and fill in the required fields to run the project on the robot:
        1. Select the programming language your project is written in.
        2. Select the kit you plan to work with.
        3. Enter the operating system username (usually **pi**).
        4. Enter the operating system password (usually for *Studica* — `raspberry`, for *Algaritm* — `repka`).
        5. The device IP address. Usually `10.42.0.1`.
        6. The next few steps depend on the selected language:

        <Tabs queryString="language"
            defaultValue="python"
            values={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
                {label: 'C++', value: 'cpp'},
                {label: 'C#', value: 'cs'}
            ]}>
            <TabItem value="python">
                - **Path to folder**: the path to the folder containing files to upload.
                - **Entry file**: the filename (with extension) to run.

                Example:
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_py.png"/>
                </div>
            </TabItem>
            <TabItem value="java">
                - **Path to folder**: the path to the folder containing files to upload.
                - **Full class name to run**: the class name that contains the `main()` function.

                Example:
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_java.png"/>
                </div>
            </TabItem>
            <TabItem value="cpp">
                - **Path to folder**: the path to the folder containing `CMakeLists.txt`
                - **Executable name**: this your project name set on the second line of `CMakeLists.txt`. If you use the default file, the name will be **RobotCpp**. 
                
                Example:
                <div>
                    <img src="/docshome/img/shufflecad/shufflecad_1_cpp.png"/>
                </div>
            </TabItem>
            <TabItem value="cs">
                - **Path to folder**: the path to the folder containing files to upload.
                - **Relative path to .csproj**: search for `.csproj` location inside selected folder.
                
                Example:
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_csharp.png"/>
                </div>
            </TabItem>
        </Tabs>

        7. Click **Run** to execute your program.

        :::note
        You must be connected to the robot to launch the project.
        :::
    </TabItem>

    <TabItem value="sim">
        There is no required fields to fill to use simulator with shufflecad, however, there are a few steps to perform.

        - Make sure the IP-address is set to `127.0.0.1` (localhost).
        - Start your project in IDE or the console.
        - Press **Connect** button.
        <img src="/docshome/img/shufflecad/shufflecad_simulator.png"/>
    </TabItem>


</Tabs>
