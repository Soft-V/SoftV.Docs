---
id: java
title: Java
---

# Java

这些指南将向您展示如何安装 **robocad4J** 库。  

import Tabs from '@theme/Tabs';  
import TabItem from '@theme/TabItem';  

<Tabs  
    defaultValue="Maven"  
    values={[  
        {label: 'Maven', value: 'Maven'},  
    ]}>  
    <TabItem value="Maven">  
        打开 **IntelliJ** 并打开 *pom.xml* 文件：  
        <div style={{textAlign: 'left'}}>  
            <img src="/docshome/img/robocad/libraries/installation/intellij1.png" />  
        </div>  

        将以下内容粘贴到 *dependencies* 标签中：  
        ```xml  
        <dependency>  
            <groupId>io.github.soft-v</groupId>  
            <artifactId>robocad4J</artifactId>  
            <version>LATEST</version>  
        </dependency>  
        ```  

        您还需要使用 Java SDK 11 以及 Java 11 语言版本（可在以下位置检查：文件 → 项目结构）。 同时，请将目标字节码版本设置为 11。 设置路径如下：文件 → 设置 → 构建、执行、部署 → 编译器 → Java 编译器。
        <div style={{textAlign: 'left'}}>  
            <img src="/docshome/img/robocad/libraries/installation/intellij2.png" />  
        </div>  

        现在，您可以使用 **robocad4J** 库！  
    </TabItem>  
</Tabs>  
