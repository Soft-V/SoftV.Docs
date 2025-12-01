---
id: java
title: 更新 robocad4J 库
---

# 更新 robocad4J 库

这些说明演示如何更新 **robocad4J** 库。

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
        - 将包含更新依赖版本的 Java 项目上传到 Raspberry Pi，并在项目目录运行 `mvn clean package`。
        - 打开 `/home/pi/java/java_deps.txt` 文件，并在其中更新库版本。
    </TabItem>
    <TabItem value="algaritm">
        - 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
        - 将 Repka Pi 连接到可以访问互联网的网络。
        - 将包含更新依赖版本的 Java 项目上传到 Repka Pi，并在项目目录运行 `mvn clean package`。
        - 打开 `/home/pi/java/java_deps.txt` 文件，并在其中更新库版本。
    </TabItem>
</Tabs>

:::note
额外的 Maven 包以类似方式安装。
:::
