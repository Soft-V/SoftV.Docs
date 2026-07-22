---
id: cpp
title: C++
---

# C++

Эта инструкция показывает, как установить библиотеку **robocad-cpp**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="CMake"
    values={[
        {label: 'CMake', value: 'CMake'},
    ]}>
    <TabItem value="CMake">
        **robocad-cpp** распространяется в виде исходного кода (CMake-проект), пакетного менеджера пока нет. Для **robocad-cpp** требуется компилятор с поддержкой **C++20** и библиотека **OpenCV** (используется для видеопотока с камеры).

        Поскольку роботы (Raspberry Pi / Repka Pi) обычно не имеют доступа в интернет, один `CMakeLists.txt` может поддерживать два режима, переключаемых опцией `REAL_ROBOT`:
        - **Симулятор** (`REAL_ROBOT=OFF`, по умолчанию) — CMake сам скачивает и собирает **robocad-cpp** с GitHub через `FetchContent`. Требует интернет при конфигурации.
        - **Реальный робот** (`REAL_ROBOT=ON`) — линкуется с уже собранной вами и перенесённой на робота копией **robocad-cpp**. Доступ в сеть не требуется.

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
            # robocad-cpp уже собран в другом месте и перенесён на эту машину
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

        **Сборка под симулятор** (есть интернет, по умолчанию):
        ```bash
        cmake -S . -B build
        cmake --build build
        ```  

        **Сборка под реального робота** (offline): сначала склонируйте и соберите **robocad-cpp** на машине с доступом в интернет:
        ```bash
        git clone --branch 1.4.0 https://github.com/Soft-V/robocad-cpp.git
        cmake -S robocad-cpp -B robocad-cpp/build
        cmake --build robocad-cpp/build
        ```  
        Перенесите `robocad-cpp/include` и собранный `robocad-cpp/build/librobocad-cpp.so` на робота, затем соберите там свой проект против этой копии:
        ```bash
        cmake -S . -B build -DREAL_ROBOT=ON \
            -DROBOCAD_CPP_INCLUDE_DIR=/home/pi/robocad-cpp/include \
            -DROBOCAD_CPP_LIBRARY=/home/pi/robocad-cpp/build/librobocad-cpp.so
        cmake --build build
        ```  
        На этом шаге доступ в сеть не требуется — CMake просто линкует ваш исполняемый файл с уже собранной `.so` и подключает заголовки по указанному пути. Чтобы обновить версию библиотеки на роботе, повторите шаг клонирования/сборки с новым тегом и замените перенесённые файлы.

        Теперь вы можете использовать библиотеку **robocad-cpp**!
    </TabItem>
</Tabs>

