---
id: cs
title: C#
---

# C#

Эта инструкция показывает, как установить библиотеку **RobocadCs**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="NuGet"
    values={[
        {label: 'NuGet', value: 'NuGet'},
    ]}>
    <TabItem value="NuGet">
        Откройте **Visual Studio** (или **Rider**) и откройте свой проект.

        Откройте **консоль диспетчера пакетов NuGet** и выполните:
        ```powershell
        Install-Package RobocadCs -Version 1.4.0
        ```

        Либо, если вы используете **dotnet CLI**:
        ```bash
        dotnet add package RobocadCs --version 1.4.0
        ```

        Также можно добавить пакет прямо в файл *.csproj*:
        ```xml
        <ItemGroup>
            <PackageReference Include="RobocadCs" Version="1.4.0" />
        </ItemGroup>
        ```  

        Теперь вы можете использовать библиотеку **RobocadCs**!
    </TabItem>
</Tabs>

