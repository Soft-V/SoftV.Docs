---
id: cs
title: Updating RobocadCs library
---

# Updating RobocadCs library

These instructions show how to update the **RobocadCs** library.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
	defaultValue="studica"
	values={[
		{label: 'Studica', value: 'studica'},
		{label: 'Algaritm', value: 'algaritm'},
	]}>
	<TabItem value="studica">
		- Connect to the Raspberry Pi via SSH or attach a monitor and peripherals.
		- Connect the Raspberry Pi to a network with internet access.
		- Go to **/home/pi/csharp** directory and open **Downloader.csproj** file.
		- Set here required version of **RobocadCs** or add other required packages.
		- Run ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64``` in the directory.
	</TabItem>
	<TabItem value="algaritm">
		- Connect to the Repka Pi via SSH or attach a monitor and peripherals.
		- Connect the Repka Pi to a network with internet access.
		- Go to **/home/pi/csharp** directory and open **Downloader.csproj** file.
		- Set here required version of **RobocadCs** or add other required packages.
		- Run ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64``` in the directory.
	</TabItem>
</Tabs>

:::warning
Manual library updates can cause the robot to malfunction.
Only update library versions if you are sure they are compatible with the OS version and robot firmware.
Please update the entire image instead of updating libraries piecemeal.
:::

