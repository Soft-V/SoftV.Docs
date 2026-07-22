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
        Также для работы с камерой из симулятора вам необходимо вставить следующий блок в файл *.csproj*:
        ```xml
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('OSX')) And '$([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture)' == 'Arm64'">
            <PackageReference Include="OpenCvSharp4.runtime.osx_arm64" Version="4.8.1-rc" />
        </ItemGroup>
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('OSX')) And '$([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture)' == 'X64'">
            <PackageReference Include="OpenCvSharp4.runtime.osx.10.15-x64" Version="4.6.0.20230105" />
        </ItemGroup>
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('Windows'))">
            <PackageReference Include="OpenCvSharp4.runtime.win" Version="4.9.0.20240103" />
        </ItemGroup>
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('Linux')) And '$([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture)' == 'X64'">
            <PackageReference Include="OpenCvSharp4.official.runtime.linux-x64" Version="4.9.0.20240103" />
        </ItemGroup>
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('Linux')) And '$([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture)' == 'Arm64'">
            <PackageReference Include="OpenCvSharp4.runtime.linux-arm64" Version="4.13.0.20260526" />
        </ItemGroup>
        ```

        Теперь вы можете использовать библиотеку **RobocadCs**!


    </TabItem>
</Tabs>

