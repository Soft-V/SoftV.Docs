---
id: java
title: Обновление библиотеки robocad4J
---

# Обновление библиотеки robocad4J

Эта инструкция показывает, как обновить библиотеку **robocad4J**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="studica"
    values={[
        {label: 'Studica', value: 'studica'},
        {label: 'Algaritm', value: 'algaritm'},
    ]}>
    <TabItem value="studica">
        - Подключитесь к Raspberry Pi по SSH или подключите к ней монитор с периферией.  
        - Подключите Raspberry Pi к сети с доступом в интернет.  
        - Загрузите свой проект Java с обновленной версией зависимости в pom.xml на Raspberry Pi и запустите *mvn clean package* в папке проекта.  
        - Откройте файл */home/pi/java/java_deps.txt* и обновите там версию библиотеки.
    </TabItem>
    <TabItem value="algaritm">
        - Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.  
        - Подключите Repka Pi к сети с доступом в интернет.  
        - Загрузите свой проект Java с обновленной версией зависимости в pom.xml на Repka Pi и запустите *mvn clean package* в папке проекта.  
        - Откройте файл */home/pi/java/java_deps.txt* и обновите там версию библиотеки.
    </TabItem>
</Tabs>

:::note
Установка дополнительных пакетов maven выполняется похожим способом.
:::
