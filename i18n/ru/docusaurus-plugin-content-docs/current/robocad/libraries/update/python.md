---
id: python
title: Обновление библиотеки robocad-py
---

# Обновление библиотеки robocad-py

Эта инструкция показывает, как обновить библиотеку **robocad-py**.

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
        - Откройте командную строку и напишите команды:
        ```bash
        umask 022
        sudo /usr/bin/pip3 install robocad-py --upgrade
        ```
    </TabItem>
    <TabItem value="algaritm">
        - Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.  
        - Подключите Repka Pi к сети с доступом в интернет.  
        - Откройте командную строку и напишите команды:
        ```bash
        umask 022
        sudo pip3 install robocad-py --upgrade
        ```
    </TabItem>
</Tabs>
