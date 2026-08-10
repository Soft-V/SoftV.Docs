---
id: cpp
title: C++
---

# C++

Эта инструкция показывает, как настроить проект в CLion 2026 и установить библиотеку **robocad-cpp**.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="cmake"
    values={[
        {label: 'CMake', value: 'cmake'},
    ]}>
    **robocad-cpp** распространяется в виде исходного кода (CMake-проект), пакетного менеджера пока нет. После создания проекта найдите файл `CMakeLists.txt` и вставьте в него следующий код.

    Поскольку роботы (Raspberry Pi / Repka Pi) обычно не имеют доступа в интернет, один `CMakeLists.txt` может поддерживать два режима, переключаемых опцией `REAL_ROBOT`:
    - **Симулятор** (`REAL_ROBOT=OFF`, по умолчанию) — CMake сам скачивает и собирает **robocad-cpp** с GitHub через `FetchContent`. Требует интернет при конфигурации.
    - **Реальный робот** (`REAL_ROBOT=ON`) — линкуется с уже собранной на роботе копией **robocad-cpp**. Доступ в сеть не требуется.

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
    
    Вам понадобится установленный [OpenCV](https://opencv.org/releases/), добавленный в [PATH](https://learn.microsoft.com/ru-ru/previous-versions/office/developer/sharepoint-2010/ee537574(v=office.14)).

    Откройте **CLion** и создайте новый проект. Убедитесь, что в качестве стандарта языка выбран C++20:

    <div style={{ textAlign: 'center', marginBottom: "10px" }}>
        <img src="/docshome/img/robocad/libraries/installation/clion-create-project.png"/>
    </div>


    Для сборки проекта создайте папку `src` и поместите в неё файл `main.cpp`. Не забудьте добавить функцию `main()`.

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-add-main.png"/>
    </div>

    Перезагрузите CMake-проект, кликнув правой кнопкой мыши по файлу `CMakeLists.txt` и выбрав *Reload CMake Project*.

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-reload-cmake.png"/>
    </div>

    После перезагрузки CMake-проекта можно приступать к компиляции кода. Разверните панель инструментов в верхней части окна, перейдите на вкладку *Build* и нажмите *Build Project*, чтобы запустить сборку.

    <div style={{ textAlign: "center"}}>
        <img src="/docshome/img/robocad/libraries/installation/clion-build-project.png"/>
    </div>
</Tabs>

        
[Нажмите здесь](/docs/shufflecad/start-project?language=cpp), чтобы посмотреть полное руководство по запуску программы на **настоящем роботе**.

Теперь вы можете использовать библиотеку **robocad-cpp**!