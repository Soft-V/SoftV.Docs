---
id: cpp
title: 更新 robocad-cpp 库
---

# 更新 robocad-cpp 库

这些说明演示如何更新 **robocad-cpp** 库。

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
		- 进入 **/home/pi/cpp** 文件夹并删除 **robocad-cpp**。
		- 克隆所需版本或最新版本，例如 ```git clone https://github.com/Soft-V/robocad-cpp```。
		- 在 **robocad-cpp** 中创建 **build** 目录并进入该目录。
		- 运行 ```cmake ..``` 和 ```make -j4```。
	</TabItem>
	<TabItem value="algaritm">
		- 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
		- 将 Repka Pi 连接到可以访问互联网的网络。
		- 进入 **/home/pi/cpp** 文件夹并删除 **robocad-cpp**。
		- 克隆所需版本或最新版本，例如 ```git clone https://github.com/Soft-V/robocad-cpp```。
		- 在 **robocad-cpp** 中创建 **build** 目录并进入该目录。
		- 运行 ```cmake ..``` 和 ```make -j4```。
	</TabItem>
</Tabs>
