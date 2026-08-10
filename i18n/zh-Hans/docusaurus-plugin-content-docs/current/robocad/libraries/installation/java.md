---
id: java
title: Java
---

# Java

本指南将向您展示如何在 IntelliJ IDEA 2025 中配置项目并安装 **robocad4J** 库。  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="Maven"
    values={[
        {label: 'Maven', value: 'Maven'},
    ]}>
    <TabItem value="Maven">
        打开 **IntelliJ IDEA** 并创建一个新的 Maven 项目。如果您尚未安装 JDK，建议使用 JDK 11，例如 Microsoft OpenJDK 11.0.29：
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij-create-project.png" />
        </div>

        创建项目后，需要配置项目根目录下的 `pom.xml` 文件。在 `<project>` 内的任意位置创建 `<dependencies>` 标签，并粘贴以下依赖项：  
        ```xml
        <dependency>
            <groupId>io.github.soft-v</groupId>
            <artifactId>robocad4J</artifactId>
            <version>LATEST</version>
        </dependency>
        ```  

        如果您希望在真实机器人上运行，别忘了在 `<project>` 中粘贴以下内容：
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```  

        若要在真实机器人上运行，配置好 `pom.xml` 文件后，请确保使用的 SDK 版本为 11，且语言级别也设置为 11。您可以在 Project Structure 中检查 *(File → Project Structure)*，或使用快捷键 `Ctrl + Alt + Shift + S`。
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij-sdk.png" />
        </div>
        
        现在，您可以使用 **robocad4J** 库了！
    </TabItem>
</Tabs>
