---
id: cs
title: C#
---


# C#

This guide shows you how to install **RobocadCs** library.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="NuGet"
    values={[
        {label: 'NuGet', value: 'NuGet'},
    ]}>
    <TabItem value="NuGet">
        Open up **Visual Studio** (or **Rider**) and open your project.

        Open the **NuGet Package Manager Console** and run:
        ```powershell
        Install-Package RobocadCs -Version 1.4.0
        ```

        Or, if you use the **dotnet CLI**:
        ```bash
        dotnet add package RobocadCs --version 1.4.0
        ```

        You can also add it directly to your *.csproj* file:
        ```xml
        <ItemGroup>
            <PackageReference Include="RobocadCs" Version="1.4.0" />
        </ItemGroup>
        ```  

        Now you can use **RobocadCs** library!
    </TabItem>
</Tabs>

