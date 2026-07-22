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
        **robocad-cpp** is distributed as source (CMake project), there is no package manager yet. Add it to your project with `FetchContent`:  
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

        You can also just clone the repository and use `add_subdirectory`:
        ```cmake
        add_subdirectory(robocad-cpp)
        target_link_libraries(YourTarget PRIVATE robocad-cpp)
        ```  

        **robocad-cpp** requires a **C++20** compiler and **OpenCV** (used for the camera stream). Make sure OpenCV is discoverable by CMake (`find_package(OpenCV REQUIRED)`) and that the OpenCV runtime is available next to your built executable.

        Now you can use **robocad-cpp** library!
    </TabItem>
</Tabs>

