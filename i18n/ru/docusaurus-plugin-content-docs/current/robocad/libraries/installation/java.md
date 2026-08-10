---
id: java
title: Java
---

# Java

Эта инструкция показывает, как настроить проект в IntelliJ IDEA 2025 и установить библиотеку **robocad4J**.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="Maven"
    values={[
        {label: 'Maven', value: 'Maven'},
    ]}>
    <TabItem value="Maven">
        Откройте **IntelliJ IDEA** и создайте новый Maven-проект. Если у вас не установлен JDK, рекомендуется использовать JDK 11, например, Microsoft OpenJDK 11.0.29:
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij-create-project.png" />
        </div>

        После создания проекта нужно настроить файл `pom.xml` в корне проекта. Создайте тег `<dependencies>` в любом месте внутри `<project>` и вставьте туда эту зависимость:  
        ```xml
        <dependency>
            <groupId>io.github.soft-v</groupId>
            <artifactId>robocad4J</artifactId>
            <version>LATEST</version>
        </dependency>
        ```  

        Если вы планируете работать с настоящим роботом, не забудьте вставить это в `<project>`:
        ```xml
        <build>
            <finalName>UserBuiltJar</finalName>
        </build>
        ```  

        Для работы с настоящим роботом после настройки файла `pom.xml` убедитесь, что используется SDK версии 11, а уровень языка установлен на 11. Проверить это можно в Project Structure *(File → Project Structure)* или с помощью сочетания клавиш `Ctrl + Alt + Shift + S`.
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/intellij-sdk.png" />
        </div>
        
        Теперь вы можете использовать библиотеку **robocad4J**!
    </TabItem>
</Tabs>
