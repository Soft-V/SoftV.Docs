---
id: cpp
title: Обновление библиотеки robocad-cpp
---

# Обновление библиотеки robocad-cpp

Эта инструкция показывает, как обновить библиотеку **robocad-cpp**.

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
		- Загрузите на Raspberry Pi свой проект C++ с обновлённым `GIT_TAG`/версией в `CMakeLists.txt`.  
		- В папке проекта выполните:
		```bash
		cmake -S . -B build
		cmake --build build
		```
	</TabItem>
	<TabItem value="algaritm">
		- Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.  
		- Подключите Repka Pi к сети с доступом в интернет.  
		- Загрузите на Repka Pi свой проект C++ с обновлённым `GIT_TAG`/версией в `CMakeLists.txt`.  
		- В папке проекта выполните:
		```bash
		cmake -S . -B build
		cmake --build build
		```
	</TabItem>
</Tabs>

:::note
Если вы клонировали репозиторий напрямую, а не через `FetchContent`, перед пересборкой выполните `git pull` (или переключитесь на новый тег).
:::
