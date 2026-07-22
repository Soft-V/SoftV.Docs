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
        打开 *.csproj* 文件（请使用您需要的版本，而不是 1.4.0）：
        ```xml
        <ItemGroup>
            <PackageReference Include="RobocadCs" Version="1.4.0" />
        </ItemGroup>
        ```  
        若要在模拟器或真实机器人中使用摄像头图像，应将以下代码块粘贴到 *.csproj* 文件中：
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

