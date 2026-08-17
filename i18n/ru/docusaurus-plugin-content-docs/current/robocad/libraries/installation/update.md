---
id: update-libraries
title: Обновление библиотек
---

# Обновление образа и библиотек

Эти руководства показывают, как обновить образ и библиотеки **robocadV** на реальных роботах.

<h2>Обновление образа</h2>

В таблицах ниже вы можете выбрать нужную версию образа для вашего устройства.

:::note
Каждая версия образа определяет версии библиотек и поддерживаемые языки программирования.
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
                    <th width="10%">Версия образа</th>
                    <th width="40%">Доступные модули и версии</th>
                    <th width="20%">Ссылка для скачивания</th>
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
                    <td><Link to="https://cloud.mail.ru/public/GmiP/7rVndbk9X"><b>Скачать</b></Link></td>
                </tr>
            </tbody>
        </table>
    </TabItem>
    <TabItem value="algaritm">
        <table>
            <thead>
                <tr>
                    <th width="10%">Версия образа</th>
                    <th width="40%">Доступные модули и версии</th>
                    <th width="20%">Ссылка для скачивания</th>
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
                    <td><Link to="https://cloud.mail.ru/public/yoL1/vkmrng7JH"><b>Скачать</b></Link></td>
                </tr>
            </tbody>
        </table>
    </TabItem>
</Tabs>

После скачивания образа установите его на SD-карту устройства удобным для вас способом.

<h2>Обновление библиотеки</h2>

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
                - Подключитесь к Raspberry Pi по SSH или подключите к ней монитор с периферией.
                - Подключите Raspberry Pi к сети с доступом в интернет.
                - Откройте терминал и выполните команды:
                ```bash
                umask 022
                sudo /usr/bin/pip3 install robocad-py --upgrade
                ```
            </TabItem>
            <TabItem value="java">
                - Подключитесь к Raspberry Pi по SSH или подключите к ней монитор с периферией.
                - Подключите Raspberry Pi к сети с доступом в интернет.
                - Загрузите на Raspberry Pi свой Java-проект с обновлённой версией зависимости в `pom.xml` и выполните `mvn clean package` в папке проекта.
                - Откройте файл `/home/pi/java/java_deps.txt` и обновите там версию библиотеки.
            </TabItem>
            <TabItem value="cpp">
                - Подключитесь к Raspberry Pi по SSH или подключите к ней монитор с периферией.
                - Подключите Raspberry Pi к сети с доступом в интернет.
                - Перейдите в папку **/home/pi/cpp** и удалите **robocad-cpp**.
                - Склонируйте нужную версию или последнюю, например ```git clone https://github.com/Soft-V/robocad-cpp```.
                - Создайте директорию **build** внутри **robocad-cpp** и перейдите в неё через ```cd```.
                - Выполните ```cmake ..``` и ```make -j4```.
            </TabItem>
            <TabItem value="csharp">
                - Подключитесь к Raspberry Pi по SSH или подключите к ней монитор с периферией.
                - Подключите Raspberry Pi к сети с доступом в интернет.
                - Перейдите в директорию **/home/pi/csharp** и откройте файл **Downloader.csproj**.
                - Укажите там нужную версию **RobocadCs** или добавьте другие необходимые пакеты.
                - Выполните в этой директории ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64```.
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
                - Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.
                - Подключите Repka Pi к сети с доступом в интернет.
                - Откройте терминал и выполните команды:
                ```bash
                umask 022
                sudo pip3 install robocad-py --upgrade
                ```
            </TabItem>
            <TabItem value="java">
                - Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.
                - Подключите Repka Pi к сети с доступом в интернет.
                - Загрузите на Repka Pi свой Java-проект с обновлённой версией зависимости в `pom.xml` и выполните `mvn clean package` в папке проекта.
                - Откройте файл `/home/pi/java/java_deps.txt` и обновите там версию библиотеки.
            </TabItem>
            <TabItem value="cpp">
                - Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.
                - Подключите Repka Pi к сети с доступом в интернет.
                - Перейдите в папку **/home/pi/cpp** и удалите **robocad-cpp**.
                - Склонируйте нужную версию или последнюю, например ```git clone https://github.com/Soft-V/robocad-cpp```.
                - Создайте директорию **build** внутри **robocad-cpp** и перейдите в неё через ```cd```.
                - Выполните ```cmake ..``` и ```make -j4```.
            </TabItem>
            <TabItem value="csharp">
                - Подключитесь к Repka Pi по SSH или подключите к ней монитор с периферией.
                - Подключите Repka Pi к сети с доступом в интернет.
                - Перейдите в директорию **/home/pi/csharp** и откройте файл **Downloader.csproj**.
                - Укажите там нужную версию **RobocadCs** или добавьте другие необходимые пакеты.
                - Выполните в этой директории ```dotnet restore Downloader.csproj --packages ./offline-packages/ -r linux-arm64```.
            </TabItem>
        </Tabs>
	</TabItem>
</Tabs>