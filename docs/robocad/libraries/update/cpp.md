---
id: cpp
title: Updating robocad-cpp library
---

# Updating robocad-cpp library

These instructions show how to update the **robocad-cpp** library.

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
		- Go to **/home/pi/cpp** folder and remove **robocad-cpp**.
		- Clone required version or the latest like ```git clone https://github.com/Soft-V/robocad-cpp```.
		- Create **build** directory inside **robocad-cpp** and ```cd``` into.
		- Run ```cmake ..``` and ```make -j4```.
	</TabItem>
	<TabItem value="algaritm">
		- Connect to the Repka Pi via SSH or attach a monitor and peripherals.
		- Connect the Repka Pi to a network with internet access.
		- Go to **/home/pi/cpp** folder and remove **robocad-cpp**.
		- Clone required version or the latest like ```git clone https://github.com/Soft-V/robocad-cpp```.
		- Create **build** directory inside **robocad-cpp** and ```cd``` into.
		- Run ```cmake ..``` and ```make -j4```.
	</TabItem>
</Tabs>

:::warning
Manual library updates can cause the robot to malfunction.
Only update library versions if you are sure they are compatible with the OS version and robot firmware.
Please update the entire image instead of updating libraries piecemeal.
:::
