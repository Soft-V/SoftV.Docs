---
id: java
title: Java
---

# Java

Эти инструкции показывают, как установить библиотеку **robocad4J**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="Maven"
    values={[
        {label: 'Maven', value: 'Maven'},
    ]}>
    <TabItem value="Maven">
        Откройте **IntelliJ** и откройте файл *pom.xml*:
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij1.png" />
        </div>

        Вставьте это в тег *dependencies*:  

        ```xml
        <dependency>
            <groupId>io.github.soft-v</groupId>
            <artifactId>robocad4J</artifactId>
            <version>LATEST</version>
        </dependency>
        ```

        Вы также должны использовать *Java SDK* версии 11 и указать язык версии 11 (вы можете проверить это здесь: *File → Project Structure*). Кроме того, необходимо указать целевую версию байт-кода как 11. Это можно сделать здесь: *File → Settings… → Build, Execution, Deployment → Compiler → Java Compiler*:
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij2.png" />
        </div>
        
        Теперь вы можете использовать библиотеку **robocad4J**!
    </TabItem>
</Tabs>
