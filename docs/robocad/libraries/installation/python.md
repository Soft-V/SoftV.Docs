---
id: python
title: Python
---


# Python

This guide shows you how to configure a project with PyCharm 2025 and install **robocad-py** library.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="PyCharm"
    values={[
        {label: 'PyCharm', value: 'PyCharm'},
        {label: 'Cmd', value: 'cmd'},
    ]}>
    <TabItem value="PyCharm">
        Open **PyCharm** and create a new project:
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-home.png" />
        </div>

        After your project is created go to Settings by selecting *File → Settings* from the menu, or use the shortcut `Ctrl + Alt + S`.

        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-settings.png" />
        </div>

        Then find *Python → Interpreter* and press the **`+`** button to add **robocad-py** library:  
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycharm-download-robocad-py.png" />
        </div>

        Search for **robocad-py**, select it and click *Install Package* button. It is recommended to use the latest version.
        
        Now you can use **robocad-py** library!
    </TabItem>
    <TabItem value="cmd">
        On Windows use the shortcut *Win + R* to open **Run** dialog and type **cmd**.
        <div style={{textAlign: 'center'}}>
            <img src="/docshome/img/robocad/libraries/installation/pycmd.png" />
        </div>

        Paste the following command into command prompt to install **robocad-py** library.

        ```bash
        pip install robocad-py
        ```

        After installation you can use **robocad-py** library!
    </TabItem>
</Tabs>

