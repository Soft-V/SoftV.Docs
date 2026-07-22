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
        To work with camera image from the simulator you must paste this block of code into your *.csproj* file:
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
        Now you can use **RobocadCs** library!
    </TabItem>
</Tabs>

