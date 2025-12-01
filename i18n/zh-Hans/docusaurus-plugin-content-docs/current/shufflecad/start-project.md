---
id: start-project
title: 启动项目
---

# 启动项目

打开程序启动页面，并填写运行项目到机器人所需的字段：
1. 选择您打算使用的套件。
2. 选择项目所使用的编程语言。
3. 输入操作系统用户名（通常为 **pi**）。
4. 输入操作系统密码（通常 Studica 为 **raspberry**，Algaritm 为 **repka**）。
5. 设备的 IP 地址。连接到仿真器时，请使用 **127.0.0.1**。
6. 接下来的步骤取决于所选语言：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="python"
    values={[
        {label: 'Python', value: 'python'},
        {label: 'Java', value: 'java'},
    ]}>
    <TabItem value="python">
        - **路径到文件夹**：要上传的文件所在文件夹的路径。
        - **启动文件**：要运行的文件名（含扩展名）。

        示例：
        <div style={{textAlign: 'left'}}>
        <img src="/docshome/img/shufflecad/shufflecad_1_py.png"/>
        </div>
    </TabItem>
    <TabItem value="java">
        - **路径到文件夹**：要上传的文件所在文件夹的路径。
        - **要运行的完整类名**：包含 *main* 方法的类名。

        示例：
        <div style={{textAlign: 'left'}}>
        <img src="/docshome/img/shufflecad/shufflecad_1_java.png"/>
        </div>
    </TabItem>
</Tabs>

7. 选择 shufflecad 的工作模式 — 与真实机器人还是仿真器。
8. 分别点击 **运行** 或 **连接** 按钮。

:::note
要运行项目，必须先连接到机器人。
:::
