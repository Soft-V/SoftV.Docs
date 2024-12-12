---
id: python
title: Python
---

# Python

这些指南将向您展示如何安装 **robocad-py** 库。  

import Tabs from '@theme/Tabs';  
import TabItem from '@theme/TabItem';  

<Tabs  
    defaultValue="PyCharm"  
    values={[  
        {label: 'PyCharm', value: 'PyCharm'},  
        {label: 'Cmd', value: 'cmd'},  
    ]}>  
    <TabItem value="PyCharm">  
        打开 **PyCharm** 并选择 *File → Settings*：  
        <div style={{textAlign: 'left'}}>  
            <img src="/docshome/img/robocad/libraries/installation/pycharm1.png" />  
        </div>  

        然后 *Project: Python → Project Interpreter → Install (按钮带有 '加号' 图标)*：  
        <div style={{textAlign: 'left'}}>  
            <img src="/docshome/img/robocad/libraries/installation/pycharm2.png" />  
        </div>  

        搜索 **robocad-py**，选择它并点击 *Install Package* 按钮。  

        现在，您可以使用 **robocad-py** 库！  
    </TabItem>  
    <TabItem value="cmd">  
        *Win + R → 输入 'cmd' → 按 Enter*：  
        <div style={{textAlign: 'left'}}>  
            <img src="/docshome/img/robocad/libraries/installation/pycmd1.png" />  
        </div>  

        输入 *pip install robocad-py* 然后按 *Enter*。  
        <div style={{textAlign: 'left'}}>  
            <img src="/docshome/img/robocad/libraries/installation/pycmd2.png" />  
        </div>  

        安装完成后，您可以使用 **robocad-py** 库！  
    </TabItem>  
</Tabs>  
