---
id: cs
title: C#
---

# C#

Эта инструкция показывает, как настроить проект в Rider 2026 и установить библиотеку **RobocadCs**.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="NuGet"
    values={[
        {label: 'NuGet', value: 'NuGet'},
    ]}>
    <TabItem value="NuGet">
        Откройте **Rider** и создайте новый проект:

        <div style={{ textAlign: 'center' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-create-project.png"/>
        </div>

        После создания проекта нажмите правой кнопкой мыши на файле решения и выберите пункт меню *Manage NuGet Packages*. Найдите **RobocadCs** и установите библиотеку.

        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-nuget.png"/>
        </div>

        Для работы с изображением с камеры из симулятора или на реальном роботе нужно отредактировать файл `.csproj`. Для этого нажмите правой кнопкой мыши на файле в дереве проекта и выберите *Edit → Edit .csproj*:

        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-edit-csproj.png"/>
        </div>

        Вставьте этот блок кода в любое место внутри тега `<Project>`:

        ```xml
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('OSX')) And '$([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture)' == 'Arm64'">
            <PackageReference Include="OpenCvSharp4.runtime.osx_arm64" Version="4.8.1-rc" />
        </ItemGroup>
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('OSX')) And '$([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture)' == 'X64'">
            <PackageReference Include="OpenCvSharp4.runtime.osx.10.15-x64" Version="4.6.0.20230105" />
        </ItemGroup>
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('Windows'))">
            <PackageReference Include="OpenCvSharp4.runtime.win" Version="4.13.0.20260526" />
        </ItemGroup>
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('Linux')) And '$([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture)' == 'X64'">
            <PackageReference Include="OpenCvSharp4.official.runtime.linux-x64" Version="4.13.0.20260526" />
        </ItemGroup>
        <ItemGroup Condition="$([MSBuild]::IsOSPlatform('Linux')) And '$([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture)' == 'Arm64'">
            <PackageReference Include="OpenCvSharp4.runtime.linux-arm64" Version="4.13.0.20260526" />
        </ItemGroup>
        ```

        Теперь вы можете использовать библиотеку **RobocadCs**!
    </TabItem>
</Tabs>

