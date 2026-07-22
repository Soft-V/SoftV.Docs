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
		- Перейдите в папку **/home/pi/cpp** и удалите **robocad-cpp**.  
		- Клонируйте нужную версию или последнюю, например ```git clone https://github.com/Soft-V/robocad-cpp```.  
		- Создайте каталог **build** внутри **robocad-cpp** и перейдите в него.  
		- Выполните ```cmake ..``` и ```make -j4```.  
	</TabItem>
	<TabItem value="algaritm">
		- Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.  
		- Подключите Repka Pi к сети с доступом в интернет.  
		- Перейдите в папку **/home/pi/cpp** и удалите **robocad-cpp**.  
		- Клонируйте нужную версию или последнюю, например ```git clone https://github.com/Soft-V/robocad-cpp```.  
		- Создайте каталог **build** внутри **robocad-cpp** и перейдите в него.  
		- Выполните ```cmake ..``` и ```make -j4```.  
	</TabItem>
</Tabs>

:::warning
Ручное обновление библиотек может привести к неправильной работе робота.  
Обновляйте версии библиотек, только если вы уверены в их совместимости с версией ОС и прошивкой робота.   
Просим вас обновлять образ целиком, вместо точечного обновления библиотек.  
:::