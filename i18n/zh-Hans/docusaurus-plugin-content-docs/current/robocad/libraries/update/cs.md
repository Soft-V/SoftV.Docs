---
id: cs
title: 更新 RobocadCs 库
---

# 更新 RobocadCs 库

这些说明演示如何更新 **RobocadCs** 库。

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
		- 进入 **/home/pi/csharp** 目录并打开 **Downloader.csproj** 文件。
		- 在这里设置所需的 **RobocadCs** 版本，或添加其他所需包。
		- 在该目录中运行 ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64```。
	</TabItem>
	<TabItem value="algaritm">
		- 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
		- 将 Repka Pi 连接到可以访问互联网的网络。
		- 进入 **/home/pi/csharp** 目录并打开 **Downloader.csproj** 文件。
		- 在这里设置所需的 **RobocadCs** 版本，或添加其他所需包。
		- 在该目录中运行 ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64```。
	</TabItem>
</Tabs>

:::warning
手动更新库可能会导致机器人异常运行。
只有在确认库版本与操作系统版本和机器人固件兼容时，才更新库版本。
请整体更新镜像，而不是单独更新库。
:::