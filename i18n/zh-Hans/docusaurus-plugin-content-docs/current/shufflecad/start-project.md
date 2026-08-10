---
id: start-project
title: 启动项目
---

# 启动项目

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

以下是使用 shufflecad 在真实机器人和仿真器上启动项目的快速指南。

<Tabs defaultValue="robot"
    values={[
        {label: '真实机器人', value: 'robot'},
        {label: '仿真器', value: 'sim'}
    ]}>
    <TabItem value="robot">
        打开程序启动页面，并填写在机器人上运行项目所需的字段：
        1. 选择项目所使用的编程语言。
        2. 选择您打算使用的套件。
        3. 输入操作系统用户名（通常为 **pi**）。
        4. 输入操作系统密码（通常 *Studica* 为 `raspberry`，*Algaritm* 为 `repka`）。
        5. 设备的 IP 地址。通常为 `10.42.0.1`。
        6. 接下来的步骤取决于所选语言：

        <Tabs queryString="language"
            defaultValue="python"
            values={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
                {label: 'C++', value: 'cpp'},
                {label: 'C#', value: 'cs'}
            ]}>
            <TabItem value="python">
                - **文件夹路径**：要上传的文件所在文件夹的路径。
                - **启动文件**：要运行的文件名（含扩展名）。

                示例：
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_py.png"/>
                </div>
            </TabItem>
            <TabItem value="java">
                - **文件夹路径**：要上传的文件所在文件夹的路径。
                - **要运行的完整类名**：包含 `main()` 函数的类名。

                示例：
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_java.png"/>
                </div>
            </TabItem>
            <TabItem value="cpp">
                - **文件夹路径**：包含 `CMakeLists.txt` 的文件夹路径。
                - **可执行文件名称**：即 `CMakeLists.txt` 第二行中设置的项目名称。如果使用默认文件，名称将为 **RobotCpp**。 
                
                示例：
                <div>
                    <img src="/docshome/img/shufflecad/shufflecad_1_cpp.png"/>
                </div>
            </TabItem>
            <TabItem value="cs">
                - **文件夹路径**：要上传的文件所在文件夹的路径。
                - **.csproj 的相对路径**：在所选文件夹内查找 `.csproj` 的位置。
                
                示例：
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_csharp.png"/>
                </div>
            </TabItem>
        </Tabs>

        7. 点击 **运行** 以执行您的程序。

        :::note
        必须先连接到机器人才能启动项目。
        :::
    </TabItem>

    <TabItem value="sim">
        在 shufflecad 中使用仿真器无需填写必填字段，但需要执行以下几个步骤。

        - 确保 IP 地址设置为 `127.0.0.1`（本机地址）。
        - 在 IDE 或控制台中启动您的项目。
        - 点击 **连接** 按钮。
        <img src="/docshome/img/shufflecad/shufflecad_simulator.png"/>
    </TabItem>


</Tabs>
