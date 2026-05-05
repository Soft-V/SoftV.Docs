---
id: create-project
title: Creating an Initial Project
---

# Creating an Initial Project  

:::note
In these examples, VS Code and IntelliJ will be used.
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
        - Create a folder in the file explorer and open it in VS Code;  
        - Create a file *main.py* (you can choose the names of files and subfolders yourself);  
        - Write [an initial program for working with the kit](../robocad/libraries/studica/setup).
    </TabItem>
    <TabItem value="java">
        - Open IntelliJ and click on creating a new project;  
        - Select the name, path and specify Maven as the build system;  
        - Configure the [*pom.xml* file](../robocad/libraries/installation/java);
        - Write [an initial program for working with the kit](../robocad/libraries/studica/setup).
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>
