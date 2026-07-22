---
id: cpp
title: C++
---


# C++

这些指南将向您展示如何安装 **robocad-cpp** 库。  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="CMake"
    values={[
        {label: 'CMake', value: 'CMake'},
    ]}>
    <TabItem value="CMake">
        **robocad-cpp** 以源代码形式分发（CMake 项目），目前还没有包管理器。可以通过 `FetchContent` 将其添加到您的项目中：  
        ```cmake
        include(FetchContent)
        FetchContent_Declare(
            robocad-cpp
            GIT_REPOSITORY https://github.com/Soft-V/robocad-cpp.git
            GIT_TAG 1.4.0
        )
        FetchContent_MakeAvailable(robocad-cpp)

        target_link_libraries(YourTarget PRIVATE robocad-cpp)
        ```  

        您也可以直接克隆仓库，然后使用 `add_subdirectory`：
        ```cmake
        add_subdirectory(robocad-cpp)
        target_link_libraries(YourTarget PRIVATE robocad-cpp)
        ```  

        **robocad-cpp** 需要 **C++20** 编译器和 **OpenCV**（用于摄像头视频流）。请确保 CMake 能够找到 OpenCV（`find_package(OpenCV REQUIRED)`），并且构建出的可执行文件在运行时能够找到 OpenCV 运行库。

        现在，您可以使用 **robocad-cpp** 库！
    </TabItem>
</Tabs>

