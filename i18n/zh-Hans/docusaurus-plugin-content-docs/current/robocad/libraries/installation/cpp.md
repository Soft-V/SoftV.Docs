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
        **robocad-cpp** 以源代码形式分发（CMake 项目），目前还没有包管理器。**robocad-cpp** 需要 **C++20** 编译器和 **OpenCV**（用于摄像头视频流）。

        由于机器人（Raspberry Pi / Repka Pi）通常没有网络连接，单个 `CMakeLists.txt` 可以通过 `REAL_ROBOT` 选项支持两种模式：
        - **模拟器**（`REAL_ROBOT=OFF`，默认）— CMake 通过 `FetchContent` 从 GitHub 拉取并构建 **robocad-cpp**。配置时需要联网。
        - **真实机器人**（`REAL_ROBOT=ON`）— 链接到已经在机器人上构建好的 **robocad-cpp**。无需联网。

        ```cmake
        cmake_minimum_required(VERSION 3.14)
        project(YourProject CXX)

        set(CMAKE_CXX_STANDARD 20)
        set(CMAKE_CXX_STANDARD_REQUIRED ON)

        option(REAL_ROBOT "Link against an already-built local robocad-cpp instead of fetching it from GitHub" OFF)

        find_package(Threads REQUIRED)
        find_package(OpenCV REQUIRED)

        add_executable(YourTarget src/main.cpp)
        target_link_libraries(YourTarget PRIVATE Threads::Threads ${OpenCV_LIBS})
        target_include_directories(YourTarget PRIVATE ${OpenCV_INCLUDE_DIRS})

        if(REAL_ROBOT)
            # robocad-cpp 已在其他地方构建好，并被复制到了这台机器上
            set(ROBOCAD_CPP_INCLUDE_DIR "" CACHE PATH "Path to robocad-cpp's include/ directory")
            set(ROBOCAD_CPP_LIBRARY "" CACHE FILEPATH "Path to the prebuilt librobocad-cpp.so")

            if(NOT ROBOCAD_CPP_INCLUDE_DIR OR NOT ROBOCAD_CPP_LIBRARY)
                message(FATAL_ERROR "REAL_ROBOT=ON requires -DROBOCAD_CPP_INCLUDE_DIR=... and -DROBOCAD_CPP_LIBRARY=...")
            endif()

            target_include_directories(YourTarget PRIVATE ${ROBOCAD_CPP_INCLUDE_DIR})
            target_link_libraries(YourTarget PRIVATE ${ROBOCAD_CPP_LIBRARY})
        else()
            include(FetchContent)
            FetchContent_Declare(
                robocad-cpp
                GIT_REPOSITORY https://github.com/Soft-V/robocad-cpp.git
                GIT_TAG 1.4.0
            )
            # 使用您需要的版本，而不是 1.4.0
            FetchContent_MakeAvailable(robocad-cpp)

            target_link_libraries(YourTarget PRIVATE robocad-cpp)
        endif()
        ```  

        **模拟器构建**：
        ```bash
        cmake -S . -B build
        cmake --build build
        ```  

        **真实机器人构建**：通过 Shufflecad 完成。

        现在，您可以使用 **robocad-cpp** 库！
    </TabItem>
</Tabs>

