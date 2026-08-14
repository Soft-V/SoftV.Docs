---
id: update-libraries
title: Updating the libraries
---

# Updating Image and Libraries

These guides show how to update the **robocadV** image and libraries on actual robots.

<h2>Updating the Image</h2>

In the tables below, you can select the required image version for your device.

:::note
Each image version specifies the library versions and supported programming languages.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

<Tabs
    defaultValue="studica"
    values={[
        {label: 'Studica', value: 'studica'},
        {label: 'Algaritm', value: 'algaritm'},
    ]}>
    <TabItem value="studica">
        <table>
            <thead>
                <tr>
                    <th width="10%">Image Version</th>
                    <th width="40%">Available Modules & Versions</th>
                    <th width="20%">Download Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>1.3</b></td>
                    <td>
                        <pre className="pre-lang"><img className="img-lang" src="https://raw.githubusercontent.com/CADindustries/container/refs/heads/main/langs/opencv.svg" 
                             width="32"/><span className="span-lang">  [OpenCV](https://opencv.org/) 4.9.0</span></pre>
                        <pre className="pre-lang"><img className="img-lang" src="https://raw.githubusercontent.com/CADindustries/container/refs/heads/main/langs/python.svg" 
                             width="32"/><span className="span-lang">  [robocad-py](https://github.com/Soft-V/robocad-py) 1.3.9</span></pre>
                        <pre className="pre-lang"><img className="img-lang" src="https://raw.githubusercontent.com/CADindustries/container/refs/heads/main/langs/java.svg" 
                             width="32"/><span className="span-lang">  [robocad4J](https://github.com/Soft-V/robocad4J) 1.3.7</span></pre>
                    </td>
                    <td><Link to="https://cloud.mail.ru/public/GmiP/7rVndbk9X"><b>Download</b></Link></td>
                </tr>
            </tbody>
        </table>
    </TabItem>
    <TabItem value="algaritm">
        <table>
            <thead>
                <tr>
                    <th width="10%">Image Version</th>
                    <th width="40%">Available Modules & Versions</th>
                    <th width="20%">Download Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>1.3</b></td>
                    <td>
                        <pre className="pre-lang"><img className="img-lang" src="https://raw.githubusercontent.com/CADindustries/container/refs/heads/main/langs/opencv.svg" 
                             width="32"/><span className="span-lang">  [OpenCV](https://opencv.org/) 4.9.0</span></pre>
                        <pre className="pre-lang"><img className="img-lang" src="https://raw.githubusercontent.com/CADindustries/container/refs/heads/main/langs/python.svg" 
                             width="32"/><span className="span-lang">  [robocad-py](https://github.com/Soft-V/robocad-py) 1.3.6</span></pre>
                        <pre className="pre-lang"><img className="img-lang" src="https://raw.githubusercontent.com/CADindustries/container/refs/heads/main/langs/java.svg" 
                             width="32"/><span className="span-lang">  [robocad4J](https://github.com/Soft-V/robocad4J) 1.3.7</span></pre>
                    </td>
                    <td><Link to="https://cloud.mail.ru/public/yoL1/vkmrng7JH"><b>Download</b></Link></td>
                </tr>
            </tbody>
        </table>
    </TabItem>
</Tabs>

After downloading the image, install it on the device's SD card in a convenient way.

<h2>Updating the library</h2>

<Tabs
	defaultValue="studica"
	values={[
		{label: 'Studica', value: 'studica'},
		{label: 'Algaritm', value: 'algaritm'},
	]}>
	<TabItem value="studica">
		<Tabs
            defaultValue="python"
            values={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
                {label: 'C++', value: 'cpp'},
                {label: 'C#', value: 'csharp'}
            ]}>
            <TabItem value="python">
                - Connect to the Raspberry Pi via SSH or attach a monitor and peripherals.
                - Connect the Raspberry Pi to a network with internet access.
                - Open a terminal and run the commands:
                ```bash
                umask 022
                sudo /usr/bin/pip3 install robocad-py --upgrade
                ```
            </TabItem>
            <TabItem value="java">
                - Connect to the Raspberry Pi via SSH or attach a monitor and peripherals.
                - Connect the Raspberry Pi to a network with internet access.
                - Upload your Java project with the updated dependency version in `pom.xml` to the Raspberry Pi and run `mvn clean package` in the project folder.
                - Open the file `/home/pi/java/java_deps.txt` and update the library version there.
            </TabItem>
            <TabItem value="cpp">
                - Connect to the Raspberry Pi via SSH or attach a monitor and peripherals.
                - Connect the Raspberry Pi to a network with internet access.
                - Go to **/home/pi/cpp** folder and remove **robocad-cpp**.
                - Clone required version or the latest like ```git clone https://github.com/Soft-V/robocad-cpp```.
                - Create **build** directory inside **robocad-cpp** and ```cd``` into.
                - Run ```cmake ..``` and ```make -j4```.
            </TabItem>
            <TabItem value="csharp">
                - Connect to the Raspberry Pi via SSH or attach a monitor and peripherals.
                - Connect the Raspberry Pi to a network with internet access.
                - Go to **/home/pi/csharp** directory and open **Downloader.csproj** file.
                - Set here required version of **RobocadCs** or add other required packages.
                - Run ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64``` in the directory.
            </TabItem>
        </Tabs>
	</TabItem>
	<TabItem value="algaritm">
		<Tabs
            defaultValue="python"
            values={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
                {label: 'C++', value: 'cpp'},
                {label: 'C#', value: 'csharp'}
            ]}>
            <TabItem value="python">
                - Connect to the Repka Pi via SSH or attach a monitor and peripherals.
                - Connect the Repka Pi to a network with internet access.
                - Open a terminal and run the commands:
                ```bash
                umask 022
                sudo pip3 install robocad-py --upgrade
                ```
            </TabItem>
            <TabItem value="java">
                - Connect to the Repka Pi via SSH or attach a monitor and peripherals.
                - Connect the Repka Pi to a network with internet access.
                - Upload your Java project with the updated dependency version in `pom.xml` to the Repka Pi and run `mvn clean package` in the project folder.
                - Open the file `/home/pi/java/java_deps.txt` and update the library version there.
            </TabItem>
            <TabItem value="cpp">
                - Connect to the Repka Pi via SSH or attach a monitor and peripherals.
                - Connect the Repka Pi to a network with internet access.
                - Go to **/home/pi/cpp** folder and remove **robocad-cpp**.
                - Clone required version or the latest like ```git clone https://github.com/Soft-V/robocad-cpp```.
                - Create **build** directory inside **robocad-cpp** and ```cd``` into.
                - Run ```cmake ..``` and ```make -j4```.
            </TabItem>
            <TabItem value="csharp">
                - Connect to the Repka Pi via SSH or attach a monitor and peripherals.
                - Connect the Repka Pi to a network with internet access.
                - Go to **/home/pi/csharp** directory and open **Downloader.csproj** file.
                - Set here required version of **RobocadCs** or add other required packages.
                - Run ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64``` in the directory.
            </TabItem>
        </Tabs>
	</TabItem>
</Tabs>