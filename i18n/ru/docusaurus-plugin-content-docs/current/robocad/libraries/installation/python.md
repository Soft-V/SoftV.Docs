---
id: python
title: Python
---

# Python

Эта инструкция показывает, как установить библиотеку **robocad-py**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="PyCharm"
    values={[
        {label: 'PyCharm', value: 'PyCharm'},
        {label: 'Cmd', value: 'cmd'},
    ]}>
    <TabItem value="PyCharm">
        Откройте **PyCharm** и выберите *File → Settings*:
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm1.png" />
        </div>

        Затем перейдите в *Project: Python → Project Interpreter → Install (кнопка с иконкой 'плюс')*:
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm2.png" />
        </div>

        Найдите **robocad-py**, выберите его и нажмите кнопку *Install Package*.

        Теперь вы можете использовать библиотеку **robocad-py**!
    </TabItem>
    <TabItem value="cmd">
        *Win + R → введите 'cmd' → Enter*:
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycmd1.png" />
        </div>

        Введите команду *pip install robocad-py* и нажмите *Enter*.
        <div style={{textAlign: 'left'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycmd2.png" />
        </div>

        После установки вы можете использовать библиотеку **robocad-py**!
    </TabItem>
</Tabs>
