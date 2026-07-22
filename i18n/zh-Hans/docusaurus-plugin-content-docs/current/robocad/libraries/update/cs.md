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
		- 将 *.csproj* 文件中已更新 `RobocadCs` 包版本的 C# 项目上传到 Raspberry Pi，并在项目目录中运行 `dotnet build`。
	</TabItem>
	<TabItem value="algaritm">
		- 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
		- 将 Repka Pi 连接到可以访问互联网的网络。
		- 将 *.csproj* 文件中已更新 `RobocadCs` 包版本的 C# 项目上传到 Repka Pi，并在项目目录中运行 `dotnet build`。
	</TabItem>
</Tabs>

:::note
也可以在项目目录中直接运行以下命令更新到指定版本：
```bash
dotnet add package RobocadCs --version <new-version>
```
:::
