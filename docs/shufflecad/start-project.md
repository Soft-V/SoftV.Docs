---
id: start-project
title: Start Project
---

# Start Project

Open the program launch page and fill in the required fields to run the project on the robot:
1. Select the kit you plan to work with.
2. Select the programming language your project is written in.
3. Enter the operating system username (usually **pi**).
4. Enter the operating system password (usually for *Studica* — **raspberry**, for *Algaritm* — **repka**).
5. The device IP address. To connect to the simulator, use **127.0.0.1**.
6. The next steps depend on the selected language:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="python"
    values={[
        {label: 'Python', value: 'python'},
        {label: 'Java', value: 'java'},
    ]}>
    <TabItem value="python">
        - **Path to folder**: the path to the folder containing files to upload.
        - **Entry file**: the filename (with extension) to run.

        Example:
        <div style={{textAlign: 'left'}}>
        <img src="/docshome/img/shufflecad/shufflecad_1_py.png"/>
        </div>
    </TabItem>
    <TabItem value="java">
        - **Path to folder**: the path to the folder containing files to upload.
        - **Full class name to run**: the class name that contains the *main* function.

        Example:
        <div style={{textAlign: 'left'}}>
        <img src="/docshome/img/shufflecad/shufflecad_1_java.png"/>
        </div>
    </TabItem>
</Tabs>

7. Select whether shufflecad should run against a real robot or the simulator.
8. Click the **Run** or **Connect** button, respectively.

:::note
You must be connected to the robot to launch the project.
:::
