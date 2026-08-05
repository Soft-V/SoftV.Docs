---
id: cpp
title: C++
---

# C++

This guide shows you how to configure a project with CLion 2026 and install **robocad-cpp** library.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="cmake"
    values={[
        {label: 'CMake', value: 'cmake'},
    ]}>
    **robocad-cpp** is distributed as source (CMake project), there is no package manager yet. After your project is created, find `CMakeLists.txt` file and paste the following code instead.

    Since robots (Raspberry Pi / Repka Pi) usually have no internet access, a single `CMakeLists.txt` can support two modes, switched with a `REAL_ROBOT` option:
    - **Simulator** (`REAL_ROBOT=OFF`, default) — CMake fetches and builds **robocad-cpp** from GitHub via `FetchContent`. Requires internet at configure time.
    - **Real robot** (`REAL_ROBOT=ON`) — links against a **robocad-cpp** that already built on the robot. No network access needed.

    ```cmake
    cmake_minimum_required(VERSION 3.14)
    project(YourProject CXX)

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
    
    You need to have [OpenCV](https://opencv.org/releases/) installed and added to [PATH](https://learn.microsoft.com/ru-ru/previous-versions/office/developer/sharepoint-2010/ee537574(v=office.14)).

    Open **CLion** and create a new project. Make sure the language standart is set to C++20:

    <div style={{ textAlign: 'center', marginBottom: "10px" }}>
        <img src="/docshome/img/robocad/libraries/installation/clion-create-project.png"/>
    </div>


    To build a project, you need to create a `src` folder and place a `main.cpp` file inside it. Don't forget to add `main()` function.

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-add-main.png"/>
    </div>

    Reload the CMake project by right-clicking the `CMakeLists.txt` file and selecting *Reload CMake Project*.

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-reload-cmake.png"/>
    </div>

    After reloading the CMake project, you are ready to compile your code. Expand the toolbar at the top of the window, navigate to the *Build* tab, and click on *Build Project* to start the build process.

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-build-project.png"/>
    </div>
</Tabs>

        
[Click here](/docs/shufflecad/start-project?language=cpp) for a complete guide on how to run a program on an **actual robot**.

Now you can use **robocad-cpp** library!