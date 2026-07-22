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
		- Upload your C# project with the updated `RobocadCs` package version in the *.csproj* file to the Raspberry Pi and run `dotnet build` in the project folder.
	</TabItem>
	<TabItem value="algaritm">
		- Connect to the Repka Pi via SSH or attach a monitor and peripherals.
		- Connect the Repka Pi to a network with internet access.
		- Upload your C# project with the updated `RobocadCs` package version in the *.csproj* file to the Repka Pi and run `dotnet build` in the project folder.
	</TabItem>
</Tabs>

:::note
Updating to a specific version can also be done from the project folder with:
```bash
dotnet add package RobocadCs --version <new-version>
```
:::
