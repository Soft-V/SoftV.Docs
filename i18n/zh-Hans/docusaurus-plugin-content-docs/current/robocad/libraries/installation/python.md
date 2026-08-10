---
id: python
title: Python
---


# Python

本指南将向您展示如何在 PyCharm 2025 中配置项目并安装 **robocad-py** 库。  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="PyCharm"
    values={[
        {label: 'PyCharm', value: 'PyCharm'},
        {label: 'Cmd', value: 'cmd'},
    ]}>
    <TabItem value="PyCharm">
        打开 **PyCharm** 并创建一个新项目：
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-home.png" />
        </div>

        创建项目后，从菜单中选择 *File → Settings* 打开设置，或使用快捷键 `Ctrl + Alt + S`。

        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-settings.png" />
        </div>

        然后找到 *Python → Interpreter*，点击 **`+`** 按钮添加 **robocad-py** 库：  
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-download-robocad-py.png" />
        </div>

        搜索 **robocad-py**，选中它并点击 *Install Package* 按钮。建议使用最新版本。
        
        现在，您可以使用 **robocad-py** 库了！
    </TabItem>
    <TabItem value="cmd">
        在 Windows 上，使用快捷键 *Win + R* 打开**运行**对话框，输入 **cmd**。
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycmd.png" />
        </div>

        在命令提示符中粘贴以下命令以安装 **robocad-py** 库。

        ```bash
        pip install robocad-py
        ```

        安装完成后，您可以使用 **robocad-py** 库了！
    </TabItem>
</Tabs>
