---
id: cs
title: C#
---


# C#

本指南将向您展示如何在 Rider 2026 中配置项目并安装 **RobocadCs** 库。  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="NuGet"
    values={[
        {label: 'NuGet', value: 'NuGet'},
    ]}>
    <TabItem value="NuGet">
        打开 **Rider** 并创建一个新项目：

        <div style={{ textAlign: 'center' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-create-project.png"/>
        </div>

        项目创建完成后，右键点击解决方案文件，选择 *Manage NuGet Packages* 菜单。搜索 **RobocadCs** 并安装。

        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-nuget.png"/>
        </div>

        若要在模拟器或真实机器人中使用摄像头图像，需要编辑 `.csproj` 文件。为此，请在项目树中右键点击该文件，选择 *Edit → Edit .csproj*：

        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-edit-csproj.png"/>
        </div>

        将以下代码块粘贴到 `<Project>` 标签内的任意位置：

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

        现在，您可以使用 **RobocadCs** 库！
    </TabItem>
</Tabs>

