---
id: java
title: Java
---


# Java

These guides show you how to install **robocad4J** library.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="Maven"
    values={[
        {label: 'Maven', value: 'Maven'},
    ]}>
    <TabItem value="Maven">
        Open up **IntelliJ** and open *pom.xml* file:
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij1.png" />
        </div>

        Paste this into *dependencies* tag:  
        ```xml
        <dependency>
            <groupId>io.github.soft-v</groupId>
            <artifactId>robocad4J</artifactId>
            <version>LATEST</version>
        </dependency>
        ```  

        You should also use *Java SDK* of version 11 and lang version 11 (you can check it here: *File → Project Structure*). You should also have target bytecode version of 11. You can do this here: *File → Settings… → Build, Execution, Deployment → Compiler → Java Compiler*:
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij2.png" />
        </div>
        
        Now you can use **robocad4J** library!
    </TabItem>
</Tabs>

