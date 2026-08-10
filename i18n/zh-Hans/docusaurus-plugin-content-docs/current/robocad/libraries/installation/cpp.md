---
id: cpp
title: C++
---

# C++

本指南将向您展示如何在 CLion 2026 中配置项目并安装 **robocad-cpp** 库。  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="cmake"
    values={[
        {label: 'CMake', value: 'cmake'},
    ]}>
    **robocad-cpp** 以源代码形式分发（CMake 项目），目前还没有包管理器。创建项目后，找到 `CMakeLists.txt` 文件，并用以下代码替换其内容。

    由于机器人（Raspberry Pi / Repka Pi）通常没有网络连接，单个 `CMakeLists.txt` 可以通过 `REAL_ROBOT` 选项支持两种模式：
    - **模拟器**（`REAL_ROBOT=OFF`，默认）— CMake 通过 `FetchContent` 从 GitHub 拉取并构建 **robocad-cpp**。配置时需要联网。
    - **真实机器人**（`REAL_ROBOT=ON`）— 链接到已经在机器人上构建好的 **robocad-cpp**。无需联网。

    ```cmake
    cmake_minimum_required(VERSION 3.14)
    project(RobotCpp CXX)

    set(CMAKE_CXX_STANDARD 20)
    set(CMAKE_CXX_STANDARD_REQUIRED ON)

    option(REAL_ROBOT "Link against an already-built local robocad-cpp instead of fetching it from GitHub" OFF)

    find_package(Threads REQUIRED)
    find_package(OpenCV REQUIRED)

    add_executable(RobotCpp src/main.cpp)
    target_link_libraries(RobotCpp PRIVATE Threads::Threads ${OpenCV_LIBS})
    target_include_directories(RobotCpp PRIVATE ${OpenCV_INCLUDE_DIRS})

    if(REAL_ROBOT)
        # robocad-cpp was already built elsewhere and copied onto this machine
        set(ROBOCAD_CPP_INCLUDE_DIR "" CACHE PATH "Path to robocad-cpp's include/ directory")
        set(ROBOCAD_CPP_LIBRARY "" CACHE FILEPATH "Path to the prebuilt librobocad-cpp.so")

        if(NOT ROBOCAD_CPP_INCLUDE_DIR OR NOT ROBOCAD_CPP_LIBRARY)
            message(FATAL_ERROR "REAL_ROBOT=ON requires -DROBOCAD_CPP_INCLUDE_DIR=... and -DROBOCAD_CPP_LIBRARY=...")
        endif()

        target_include_directories(RobotCpp PRIVATE ${ROBOCAD_CPP_INCLUDE_DIR})
        target_link_libraries(RobotCpp PRIVATE ${ROBOCAD_CPP_LIBRARY})
    else()
        include(FetchContent)
        FetchContent_Declare(
                robocad-cpp
                GIT_REPOSITORY https://github.com/Soft-V/robocad-cpp.git
                GIT_TAG 1.4.2
        )
        # use any version you like instead of 1.4.2
        FetchContent_MakeAvailable(robocad-cpp)

        target_link_libraries(RobotCpp PRIVATE robocad-cpp)

        add_custom_command(TARGET RobotCpp POST_BUILD
                COMMAND ${CMAKE_COMMAND} -E copy_if_different
                $<TARGET_FILE:robocad-cpp>
                $<TARGET_FILE_DIR:RobotCpp>
        )
        
        target_include_directories(RobotCpp PRIVATE ${robocad-cpp_SOURCE_DIR}/include)
    endif()
    ```  
    
    您需要安装 [OpenCV](https://opencv.org/releases/) 并将其添加到 [PATH](https://learn.microsoft.com/ru-ru/previous-versions/office/developer/sharepoint-2010/ee537574(v=office.14))。

    打开 **CLion** 并创建一个新项目。确保语言标准设置为 C++20：

    <div style={{ textAlign: 'center', marginBottom: "10px" }}>
        <img src="/docshome/img/robocad/libraries/installation/clion-create-project.png"/>
    </div>


    要构建项目，需要创建一个 `src` 文件夹，并在其中放置一个 `main.cpp` 文件。别忘了添加 `main()` 函数。

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-add-main.png"/>
    </div>

    右键点击 `CMakeLists.txt` 文件并选择 *Reload CMake Project*，重新加载 CMake 项目。

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-reload-cmake.png"/>
    </div>

    重新加载 CMake 项目后，即可开始编译代码。展开窗口顶部的工具栏，切换到 *Build* 选项卡，点击 *Build Project* 开始构建。

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-build-project.png"/>
    </div>
</Tabs>

        
[点击此处](/docs/shufflecad/start-project?language=cpp)查看在**真实机器人**上运行程序的完整指南。

现在，您可以使用 **robocad-cpp** 库了！