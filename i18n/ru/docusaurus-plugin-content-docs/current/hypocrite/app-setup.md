---
id: app-setup
title: Настройка приложения
---

# Настройка приложения
Прежде чем приступить к использованию функций **Hypocrite.Services**, необходимо выполнить некоторые действия с файлами вашего **App**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="wpf"
    values={[
        {label: 'WPF', value: 'wpf'},
        {label: 'Avalonia', value: 'avalonia'},
    ]}>
    <TabItem value="wpf">
        Первым шагом добавьте PackageReference в ваш проект:
        ```xml 
        <ItemGroup>
            ... 
            <PackageReference Include="Hypocrite.Services" Version="SpecifyVersionHere" />
             ... 
        </ItemGroup>
        ```

    Затем измените ваш файл **App.xaml**, как показано ниже. Где ```YourNamespace``` — это пространство имен, в котором расположен **App.xaml**.  
    ```xml  
    <mvvm:ApplicationBase x:Class="YourNamespace.App"  
                          xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"  
                          xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"  
                          xmlns:local="clr-namespace:YourNamespace"  
                          xmlns:mvvm="clr-namespace:Hypocrite.Mvvm;assembly=Hypocrite.Wpf">  
    </mvvm:ApplicationBase>  
    ```  
    Затем измените ваш файл **App.xaml.cs**, чтобы класс ```App``` наследовался от ```ApplicationBase```. Сборка вашего проекта должна быть зарегистрирована в ```IViewModelResolverService```, для этого нужно переопределить метод ```CreateShell```.  
    ```csharp  
    public partial class App : ApplicationBase  
    {  
        protected override Window CreateShell()  
        {  
            var viewModelService = Container.Resolve<IViewModelResolverService>();  
            viewModelService.RegisterViewModelAssembly(Assembly.GetExecutingAssembly());  
            // ...  

            return base.CreateShell();  
        }  

        protected override void RegisterTypes(IContainerRegistry containerRegistry)  
        {  
            base.RegisterTypes(containerRegistry);  
            base.RegisterDefaults(containerRegistry);  

            containerRegistry.RegisterSingleton<IBaseWindow, MainWindow>();  

            // ...  
        }  
    }  
    ```  
    Также необходимо зарегистрировать окно, которое будет главным окном приложения, и это окно должно реализовывать интерфейс ```IBaseWindow```.  
</TabItem>  
<TabItem value="avalonia">  
    Первым шагом добавьте *PackageReference* в ваш проект:  
    ```xml  
    <ItemGroup>  
        ...  
        <PackageReference Include="Hypocrite.Services.Avalonia" Version="SpecifyVersionHere" />  
        ...  
    </ItemGroup>  
    ```  

    Измените ваш файл **App.xaml.cs**, чтобы класс ```App``` наследовался от ```ApplicationBase```. Сборка вашего проекта должна быть зарегистрирована в ```IViewModelResolverService```, для этого нужно переопределить метод ```CreateShell```.  
    ```csharp  
    public partial class App : ApplicationBase  
    {  
        protected override AvaloniaObject CreateShell()  
        {  
            var viewModelService = Container.Resolve<IViewModelResolverService>();  
            viewModelService.RegisterViewModelAssembly(Assembly.GetExecutingAssembly());  
            // ...  

            return base.CreateShell();  
        }  

        protected override void RegisterTypes(IContainerRegistry containerRegistry)  
        {  
            base.RegisterTypes(containerRegistry);  
            base.RegisterDefaults(containerRegistry);  

            containerRegistry.RegisterSingleton<IBaseWindow, MainWindow>();  

            // ...  
        }  
    }  
    ```  
    Также необходимо зарегистрировать окно, которое будет главным окном приложения, и это окно должно реализовывать интерфейс ```IBaseWindow```.  
</TabItem>  
</Tabs>