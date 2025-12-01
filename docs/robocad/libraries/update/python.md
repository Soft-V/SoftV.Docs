---
id: python
title: Updating robocad-py library
---

# Updating robocad-py library

These instructions show how to update the **robocad-py** library.

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
		- Open a terminal and run the commands:
		```bash
		umask 022
		sudo /usr/local/bin/pip3 install robocad-py --upgrade
		```
	</TabItem>
	<TabItem value="algaritm">
		- Connect to the Repka Pi via SSH or attach a monitor and peripherals.
		- Connect the Repka Pi to a network with internet access.
		- Open a terminal and run the commands:
		```bash
		umask 022
		sudo pip3 install robocad-py --upgrade
		```
	</TabItem>
</Tabs>
