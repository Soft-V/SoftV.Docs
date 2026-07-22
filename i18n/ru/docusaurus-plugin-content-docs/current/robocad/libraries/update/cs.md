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
		- Перейдите в каталог **/home/pi/csharp** и откройте файл **Downloader.csproj**.  
		- Установите здесь требуемую версию **RobocadCs** или добавьте другие необходимые пакеты.  
		- Выполните ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64``` в этом каталоге.
	</TabItem>
	<TabItem value="algaritm">
		- Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.  
		- Подключите Repka Pi к сети с доступом в интернет.  
		- Перейдите в каталог **/home/pi/csharp** и откройте файл **Downloader.csproj**.  
		- Установите здесь требуемую версию **RobocadCs** или добавьте другие необходимые пакеты.  
		- Выполните ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64``` в этом каталоге.
	</TabItem>
</Tabs>

:::warning
Ручное обновление библиотек может привести к неправильной работе робота.  
Обновляйте версии библиотек, только если вы уверены в их совместимости с версией ОС и прошивкой робота.   
Просим вас обновлять образ целиком, вместо точечного обновления библиотек.  
:::