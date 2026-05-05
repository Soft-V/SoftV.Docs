---
id: create-project
title: Создание начального проекта
---

# Создание начального проекта  

:::note
В этих примерах будут использованы VS Code и IntelliJ.
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
        - Создайте папку в проводнике и откройте ее в VS Code;  
        - Создайте файл *main.py* (название файлов и вложенных папок можете выбирать сами);  
        - Напишите [начальную программу для работы с набором](../robocad/libraries/studica/setup).
    </TabItem>
    <TabItem value="java">
        - Откройте IntelliJ и нажмите создание нового проекта;  
        - Выберите название, путь и укажите систему сборки Maven;  
        - Настройте [*pom.xml* файл](../robocad/libraries/installation/java);
        - Напишите [начальную программу для работы с набором](../robocad/libraries/studica/setup).
    </TabItem>
    <TabItem value="labview">
        **TODO:** 😇
    </TabItem>
</Tabs>   