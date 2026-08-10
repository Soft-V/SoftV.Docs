---
id: java
title: Java
---

# Java

This guide shows you how to configure a project with IntelliJ IDEA 2025 and install **robocad4J** library.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="Maven"
    values={[
        {label: 'Maven', value: 'Maven'},
    ]}>
    <TabItem value="Maven">
        Open **IntelliJ IDEA** and create a new Maven project. If you don't have JDK installed, it is recommended to use JDK 11, e.g., Microsoft OpenJDK 11.0.29:
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij-create-project.png" />
        </div>

        After creating a project, you have to configure `pom.xml` file in the project's root. Create `<dependencies>` anywhere inside `<project>` and paste this dependency:  
        ```xml
        <dependency>
            <groupId>io.github.soft-v</groupId>
            <artifactId>robocad4J</artifactId>
            <version>LATEST</version>
        </dependency>
        ```  

        If you wish to work with the actual robot, don't forget to paste this into the `<project>`:
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```  

        To work with the actual robot, after configuring the `pom.xml` file, make sure you use SDK version 11 and the language level is set to 11. You can check this by going to Project Structure *(File → Project Stricture)* or by using the shortcut `Ctrl + Alt + Shift + S`.
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij-sdk.png" />
        </div>
        
        Now you can use **robocad4J** library!
    </TabItem>
</Tabs>

