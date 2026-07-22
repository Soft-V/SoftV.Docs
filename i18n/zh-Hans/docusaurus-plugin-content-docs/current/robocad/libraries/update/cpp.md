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
		- 将 `CMakeLists.txt` 中已更新 `GIT_TAG`/版本号的 C++ 项目上传到 Raspberry Pi。
		- 在项目目录中运行：
		```bash
		cmake -S . -B build
		cmake --build build
		```
	</TabItem>
	<TabItem value="algaritm">
		- 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
		- 将 Repka Pi 连接到可以访问互联网的网络。
		- 将 `CMakeLists.txt` 中已更新 `GIT_TAG`/版本号的 C++ 项目上传到 Repka Pi。
		- 在项目目录中运行：
		```bash
		cmake -S . -B build
		cmake --build build
		```
	</TabItem>
</Tabs>

:::note
如果您是直接克隆仓库而不是使用 `FetchContent`，请先运行 `git pull`（或切换到新标签）再重新构建。
:::
