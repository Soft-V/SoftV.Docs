---
id: python
title: Python
---


# Python

Эта инструкция показывает, как настроить проект в PyCharm 2025 и установить библиотеку **robocad-py**.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="PyCharm"
    values={[
        {label: 'PyCharm', value: 'PyCharm'},
        {label: 'Cmd', value: 'cmd'},
    ]}>
    <TabItem value="PyCharm">
        Откройте **PyCharm** и создайте новый проект:
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-home.png" />
        </div>

        После создания проекта откройте настройки, выбрав *File → Settings* в меню, или используйте сочетание клавиш `Ctrl + Alt + S`.

        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-settings.png" />
        </div>

        Затем найдите *Python → Interpreter* и нажмите кнопку **`+`**, чтобы добавить библиотеку **robocad-py**:  
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-download-robocad-py.png" />
        </div>

        Найдите **robocad-py**, выберите её и нажмите кнопку *Install Package*. Рекомендуется использовать последнюю версию.
        
        Теперь вы можете использовать библиотеку **robocad-py**!
    </TabItem>
    <TabItem value="cmd">
        В Windows используйте сочетание клавиш *Win + R*, чтобы открыть диалоговое окно **Выполнить**, и введите **cmd**.
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycmd.png" />
        </div>

        Вставьте следующую команду в командную строку, чтобы установить библиотеку **robocad-py**.

        ```bash
        pip install robocad-py
        ```

        После установки вы можете использовать библиотеку **robocad-py**!
    </TabItem>
</Tabs>
