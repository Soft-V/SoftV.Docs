---
id: python
title: 更新 robocad-py 库
---

# 更新 robocad-py 库

这些说明演示如何更新 **robocad-py** 库。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="studica"
    values={[
        {label: 'Studica', value: 'studica'},
        {label: 'Algaritm', value: 'algaritm'},
    ]}>
    <TabItem value="studica">
        - 通过 SSH 连接到 Raspberry Pi，或连接显示器和外设。
        - 将 Raspberry Pi 连接到可以访问互联网的网络。
        - 打开终端并运行以下命令：
        ```bash
        umask 022
        sudo /usr/local/bin/pip3 install robocad-py --upgrade
        ```
    </TabItem>
    <TabItem value="algaritm">
        - 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
        - 将 Repka Pi 连接到可以访问互联网的网络。
        - 打开终端并运行以下命令：
        ```bash
        umask 022
        sudo pip3 install robocad-py --upgrade
        ```
    </TabItem>
</Tabs>
