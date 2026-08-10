---
id: start-project
title: Запуск проекта
---

# Запуск проекта

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Краткая инструкция о том, как запустить проект как на настоящем роботе, так и в симуляторе с помощью shufflecad.

<Tabs defaultValue="robot"
    values={[
        {label: 'Настоящий робот', value: 'robot'},
        {label: 'Симулятор', value: 'sim'}
    ]}>
    <TabItem value="robot">
        Откройте страницу запуска программы и заполните необходимые поля для запуска проекта на роботе:
        1. Выберите язык программирования, на котором написан ваш проект.
        2. Выберите комплект, с которым вы планируете работать.
        3. Введите имя пользователя от операционной системы (обычно **pi**).
        4. Введите пароль от пользователя операционной системы (обычно для *Studica* — `raspberry`, для *Algaritm* — `repka`).
        5. IP-адрес устройства. Обычно `10.42.0.1`.
        6. Следующие шаги зависят от выбранного языка:

        <Tabs queryString="language"
            defaultValue="python"
            values={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
                {label: 'C++', value: 'cpp'},
                {label: 'C#', value: 'cs'}
            ]}>
            <TabItem value="python">
                - **Путь до папки**: путь до папки с файлами для отправки.
                - **Файл запуска**: название файла (с расширением), который будет запущен.

                Пример заполнения:
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_py.png"/>
                </div>
            </TabItem>
            <TabItem value="java">
                - **Путь до папки**: путь до папки с файлами для отправки.
                - **Полное название класса для запуска**: название класса, который содержит функцию `main()`.

                Пример заполнения:
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_java.png"/>
                </div>
            </TabItem>
            <TabItem value="cpp">
                - **Путь до папки**: путь до папки, содержащей `CMakeLists.txt`.
                - **Имя исполняемого файла**: имя вашего проекта, указанное во второй строке `CMakeLists.txt`. Если используется файл по умолчанию, имя будет **RobotCpp**. 
                
                Пример заполнения:
                <div>
                    <img src="/docshome/img/shufflecad/shufflecad_1_cpp.png"/>
                </div>
            </TabItem>
            <TabItem value="cs">
                - **Путь до папки**: путь до папки с файлами для отправки.
                - **Относительный путь до .csproj**: поиск расположения `.csproj` внутри выбранной папки.
                
                Пример заполнения:
                <div style={{textAlign: 'center'}}>
                    <img src="/docshome/img/shufflecad/shufflecad_1_csharp.png"/>
                </div>
            </TabItem>
        </Tabs>

        7. Нажмите **Запустить**, чтобы выполнить свою программу.

        :::note
        Для запуска проекта необходимо быть подключённым к роботу.
        :::
    </TabItem>

    <TabItem value="sim">
        Для работы с симулятором в shufflecad никакие поля заполнять не нужно, однако требуется выполнить несколько шагов.

        - Убедитесь, что установлен IP-адрес `127.0.0.1` (localhost).
        - Запустите свой проект в IDE или консоли.
        - Нажмите кнопку **Подключиться**.
        <img src="/docshome/img/shufflecad/shufflecad_simulator.png"/>
    </TabItem>


</Tabs>
