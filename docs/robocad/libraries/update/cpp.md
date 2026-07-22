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
		- Upload your C++ project with the updated `GIT_TAG`/version in `CMakeLists.txt` to the Raspberry Pi.
		- In the project folder run:
		```bash
		cmake -S . -B build
		cmake --build build
		```
	</TabItem>
	<TabItem value="algaritm">
		- Connect to the Repka Pi via SSH or attach a monitor and peripherals.
		- Connect the Repka Pi to a network with internet access.
		- Upload your C++ project with the updated `GIT_TAG`/version in `CMakeLists.txt` to the Repka Pi.
		- In the project folder run:
		```bash
		cmake -S . -B build
		cmake --build build
		```
	</TabItem>
</Tabs>

:::note
If you cloned the repository directly instead of using `FetchContent`, update it with `git pull` (or check out the new tag) before rebuilding.
:::
