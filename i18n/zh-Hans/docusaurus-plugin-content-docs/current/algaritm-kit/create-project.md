---
id: create-project
title: 创建初始项目
---

# 创建初始项目  

:::note
在这些示例中将使用 VS Code 和 IntelliJ。
:::  

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
        - 在资源管理器中创建一个文件夹并在 VS Code 中打开；  
        - 创建 `main.py`（文件名和子文件夹可自定义）；  
        - 编写[用于套件的初始程序](../robocad/libraries/algaritm/setup)。
    </TabItem>
    <TabItem value="java">
        - 打开 IntelliJ 并创建新项目；  
        - 选择名称、路径并选择 Maven 作为构建系统；  
        - 配置 [pom.xml 文件](../robocad/libraries/installation/java)；
        - 编写[用于套件的初始程序](../robocad/libraries/algaritm/setup)。
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   
