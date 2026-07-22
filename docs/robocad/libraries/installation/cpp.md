---
id: cpp
title: C++
---


# C++

This guide shows you how to install **robocad-cpp** library.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="CMake"
    values={[
        {label: 'CMake', value: 'CMake'},
    ]}>
    <TabItem value="CMake">
        **robocad-cpp** is distributed as source (CMake project), there is no package manager yet. **robocad-cpp** requires a **C++20** compiler and **OpenCV** (used for the camera stream).

        Since robots (Raspberry Pi / Repka Pi) usually have no internet access, a single `CMakeLists.txt` can support two modes, switched with a `REAL_ROBOT` option:
        - **Simulator** (`REAL_ROBOT=OFF`, default) — CMake fetches and builds **robocad-cpp** from GitHub via `FetchContent`. Requires internet at configure time.
        - **Real robot** (`REAL_ROBOT=ON`) — links against a **robocad-cpp** you already built and copied onto the robot. No network access needed.

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
            # robocad-cpp was already built elsewhere and copied onto this machine
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
            FetchContent_MakeAvailable(robocad-cpp)

            target_link_libraries(YourTarget PRIVATE robocad-cpp)
        endif()
        ```  

        **Simulator build** (has internet, default):
        ```bash
        cmake -S . -B build
        cmake --build build
        ```  

        **Real robot build** (offline): first clone and build **robocad-cpp** on a machine with internet access:
        ```bash
        git clone --branch 1.4.0 https://github.com/Soft-V/robocad-cpp.git
        cmake -S robocad-cpp -B robocad-cpp/build
        cmake --build robocad-cpp/build
        ```  
        Copy the `robocad-cpp/include` and the built `robocad-cpp/build/librobocad-cpp.so` onto the robot, then build your project there against that copy:
        ```bash
        cmake -S . -B build -DREAL_ROBOT=ON \
            -DROBOCAD_CPP_INCLUDE_DIR=/home/pi/robocad-cpp/include \
            -DROBOCAD_CPP_LIBRARY=/home/pi/robocad-cpp/build/librobocad-cpp.so
        cmake --build build
        ```  
        No network access is needed on this step — CMake just links your executable against the already-built `.so` and includes the headers from the given path. To update the library version on the robot, repeat the clone/build step with a new tag and replace the copied files.

        Now you can use **robocad-cpp** library!
    </TabItem>
</Tabs>

