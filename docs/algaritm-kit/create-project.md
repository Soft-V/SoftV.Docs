---
id: create-project
title: Create initial project
---

# Create initial project  

:::note
In these examples VS Code and IntelliJ will be used.
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
        - Create a folder in File Explorer and open it in VS Code;  
        - Create `main.py` (you can choose filenames and nested folders yourself);  
        - Write an [initial program to work with the kit](../robocad/libraries/algaritm/setup).
    </TabItem>
    <TabItem value="java">
        - Open IntelliJ and create a new project;  
        - Choose a name, path and select Maven as build system;  
        - Configure the [pom.xml file](../robocad/libraries/installation/java);
        - Write an [initial program to work with the kit](../robocad/libraries/algaritm/setup).
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   
