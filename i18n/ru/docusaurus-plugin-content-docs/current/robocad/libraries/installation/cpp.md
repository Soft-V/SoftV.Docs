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
        **robocad-cpp** распространяется в виде исходного кода (CMake-проект), пакетного менеджера пока нет. Подключить её к своему проекту можно через `FetchContent`:  
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

        Также можно просто клонировать репозиторий и использовать `add_subdirectory`:
        ```cmake
        add_subdirectory(robocad-cpp)
        target_link_libraries(YourTarget PRIVATE robocad-cpp)
        ```  

        Для **robocad-cpp** требуется компилятор с поддержкой **C++20** и библиотека **OpenCV** (используется для видеопотока с камеры). Убедитесь, что CMake может найти OpenCV (`find_package(OpenCV REQUIRED)`), и что рантайм OpenCV доступен рядом со скомпилированным исполняемым файлом.

        Теперь вы можете использовать библиотеку **robocad-cpp**!
    </TabItem>
</Tabs>

