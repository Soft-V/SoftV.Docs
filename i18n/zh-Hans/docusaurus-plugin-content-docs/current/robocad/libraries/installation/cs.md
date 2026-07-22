---
id: cs
title: C#
---


# C#

这些指南将向您展示如何安装 **RobocadCs** 库。  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="NuGet"
    values={[
        {label: 'NuGet', value: 'NuGet'},
    ]}>
    <TabItem value="NuGet">
        打开 **Visual Studio**（或 **Rider**）并打开您的项目。

        打开 **NuGet 包管理器控制台** 并运行：
        ```powershell
        Install-Package RobocadCs -Version 1.4.0
        ```

        或者，如果您使用 **dotnet CLI**：
        ```bash
        dotnet add package RobocadCs --version 1.4.0
        ```

        您也可以直接将其添加到 *.csproj* 文件中：
        ```xml
        <ItemGroup>
            <PackageReference Include="RobocadCs" Version="1.4.0" />
        </ItemGroup>
        ```  

        现在，您可以使用 **RobocadCs** 库！
    </TabItem>
</Tabs>

