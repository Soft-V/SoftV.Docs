---
id: create-project
title: 创建初始项目
---

# 创建初始项目  

:::note
在这些示例中，将使用 VS Code 和 IntelliJ。
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
        - 在文件浏览器中创建文件夹并在 VS Code 中打开；  
        - 创建 *main.py* 文件（您可以自己选择文件和子文件夹的名称）；  
        - 编写 [用于使用套件的初始程序](../robocad/libraries/studica/setup)。
    </TabItem>
    <TabItem value="java">
        - 打开 IntelliJ 并点击创建新项目；  
        - 选择名称、路径并指定 Maven 作为构建系统；  
        - 配置 [*pom.xml* 文件](../robocad/libraries/installation/java)；
        - 编写 [用于使用套件的初始程序](../robocad/libraries/studica/setup)。
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>
