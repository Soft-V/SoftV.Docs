---
id: update-libraries
title: 更新库
---

# 更新镜像和库

这些指南展示了如何在真实机器人上更新 **robocadV** 镜像和库。

<h2>更新镜像</h2>

在下方的表格中，您可以为您的设备选择所需的镜像版本。

:::note
每个镜像版本都指定了库版本以及所支持的编程语言。
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
                    <th width="10%">镜像版本</th>
                    <th width="40%">可用模块及版本</th>
                    <th width="20%">下载链接</th>
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
                    <td><Link to="https://cloud.mail.ru/public/GmiP/7rVndbk9X"><b>下载</b></Link></td>
                </tr>
            </tbody>
        </table>
    </TabItem>
    <TabItem value="algaritm">
        <table>
            <thead>
                <tr>
                    <th width="10%">镜像版本</th>
                    <th width="40%">可用模块及版本</th>
                    <th width="20%">下载链接</th>
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
                    <td><Link to="https://cloud.mail.ru/public/yoL1/vkmrng7JH"><b>下载</b></Link></td>
                </tr>
            </tbody>
        </table>
    </TabItem>
</Tabs>

下载镜像后，请以您方便的方式将其安装到设备的 SD 卡上。

<h2>更新库</h2>

<Tabs
	defaultValue="studica"git 
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
                - 通过 SSH 连接到 Raspberry Pi，或连接显示器和外设。
                - 将 Raspberry Pi 连接到可以访问互联网的网络。
                - 打开终端并运行以下命令：
                ```bash
                umask 022
                sudo /usr/bin/pip3 install robocad-py --upgrade
                ```
            </TabItem>
            <TabItem value="java">
                - 通过 SSH 连接到 Raspberry Pi，或连接显示器和外设。
                - 将 Raspberry Pi 连接到可以访问互联网的网络。
                - 将更新了 `pom.xml` 中依赖版本的 Java 项目上传到 Raspberry Pi，并在项目文件夹中运行 `mvn clean package`。
                - 打开文件 `/home/pi/java/java_deps.txt` 并在其中更新库版本。
            </TabItem>
            <TabItem value="cpp">
                - 通过 SSH 连接到 Raspberry Pi，或连接显示器和外设。
                - 将 Raspberry Pi 连接到可以访问互联网的网络。
                - 进入 **/home/pi/cpp** 文件夹并删除 **robocad-cpp**。
                - 克隆所需版本或最新版本，例如 ```git clone https://github.com/Soft-V/robocad-cpp```。
                - 在 **robocad-cpp** 内创建 **build** 目录，并 ```cd``` 进入该目录。
                - 运行 ```cmake ..``` 和 ```make -j4```。
            </TabItem>
            <TabItem value="csharp">
                - 通过 SSH 连接到 Raspberry Pi，或连接显示器和外设。
                - 将 Raspberry Pi 连接到可以访问互联网的网络。
                - 进入 **/home/pi/csharp** 目录并打开 **Downloader.csproj** 文件。
                - 在其中设置所需的 **RobocadCs** 版本，或添加其他所需的包。
                - 在该目录中运行 ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64```。
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
                - 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
                - 将 Repka Pi 连接到可以访问互联网的网络。
                - 打开终端并运行以下命令：
                ```bash
                umask 022
                sudo pip3 install robocad-py --upgrade
                ```
            </TabItem>
            <TabItem value="java">
                - 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
                - 将 Repka Pi 连接到可以访问互联网的网络。
                - 将更新了 `pom.xml` 中依赖版本的 Java 项目上传到 Repka Pi，并在项目文件夹中运行 `mvn clean package`。
                - 打开文件 `/home/pi/java/java_deps.txt` 并在其中更新库版本。
            </TabItem>
            <TabItem value="cpp">
                - 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
                - 将 Repka Pi 连接到可以访问互联网的网络。
                - 进入 **/home/pi/cpp** 文件夹并删除 **robocad-cpp**。
                - 克隆所需版本或最新版本，例如 ```git clone https://github.com/Soft-V/robocad-cpp```。
                - 在 **robocad-cpp** 内创建 **build** 目录，并 ```cd``` 进入该目录。
                - 运行 ```cmake ..``` 和 ```make -j4```。
            </TabItem>
            <TabItem value="csharp">
                - 通过 SSH 连接到 Repka Pi，或连接显示器和外设。
                - 将 Repka Pi 连接到可以访问互联网的网络。
                - 进入 **/home/pi/csharp** 目录并打开 **Downloader.csproj** 文件。
                - 在其中设置所需的 **RobocadCs** 版本，或添加其他所需的包。
                - 在该目录中运行 ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64```。
            </TabItem>
        </Tabs>
	</TabItem>
</Tabs>