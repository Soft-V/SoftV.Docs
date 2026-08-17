---
id: cs
title: C#
---


# C#

This guide shows you how to configure a project with Rider 2026 and install **RobocadCs** library.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="NuGet"
    values={[
        {label: 'NuGet', value: 'NuGet'},
    ]}>
    <TabItem value="NuGet">
        Open **Rider** and create a new project:

        <div style={{ textAlign: 'center' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-create-project.png"/>
        </div>

        After the project is created, right click the solution file and click *Manage NuGet Packages* menu. Search for **RobocadCs** and install it.

        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-nuget.png"/>
        </div>

        To work with the camera image from the simulator or on the actual robot, you need to edit the `.csproj` file. To do so, right click on the file in the project tree and find *Edit → Edit .csproj*:

        <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
            <img src="/docshome/img/robocad/libraries/installation/rider-edit-csproj.png"/>
        </div>

        Paste this block of code anywhere inside the `<Project>` tag:

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
        Now you can use **RobocadCs** library!
    </TabItem>
</Tabs>

