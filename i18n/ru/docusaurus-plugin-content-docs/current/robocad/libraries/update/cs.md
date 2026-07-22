---
id: cs
title: Обновление библиотеки RobocadCs
---

# Обновление библиотеки RobocadCs

Эта инструкция показывает, как обновить библиотеку **RobocadCs**.

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
		- Загрузите на Raspberry Pi свой проект C# с обновлённой версией пакета `RobocadCs` в файле *.csproj* и запустите `dotnet build` в папке проекта.
	</TabItem>
	<TabItem value="algaritm">
		- Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.  
		- Подключите Repka Pi к сети с доступом в интернет.  
		- Загрузите на Repka Pi свой проект C# с обновлённой версией пакета `RobocadCs` в файле *.csproj* и запустите `dotnet build` в папке проекта.
	</TabItem>
</Tabs>

:::note
Обновить до конкретной версии также можно прямо из папки проекта командой:
```bash
dotnet add package RobocadCs --version <new-version>
```
:::
