---
id: java
title: Updating robocad4J library
---

# Updating robocad4J library

These instructions show how to update the **robocad4J** library.

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
		- Upload your Java project with the updated dependency version in `pom.xml` to the Raspberry Pi and run `mvn clean package` in the project folder.
		- Open the file `/home/pi/java/java_deps.txt` and update the library version there.
	</TabItem>
	<TabItem value="algaritm">
		- Connect to the Repka Pi via SSH or attach a monitor and peripherals.
		- Connect the Repka Pi to a network with internet access.
		- Upload your Java project with the updated dependency version in `pom.xml` to the Repka Pi and run `mvn clean package` in the project folder.
		- Open the file `/home/pi/java/java_deps.txt` and update the library version there.
	</TabItem>
</Tabs>

:::note
Installing additional Maven packages is done in a similar way.
:::
