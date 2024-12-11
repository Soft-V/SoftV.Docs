---
id: app-setup
title: 应用程序设置
---

# 应用程序设置  

在开始使用 **Hypocrite.Services** 的功能之前，您需要对 **App** 文件进行一些设置。

<Tabs
    defaultValue="wpf"
    values={[
        {label: 'WPF', value: 'wpf'},
        {label: 'Avalonia', value: 'avalonia'},
    ]}>
    <TabItem value="wpf">
        第一步是在项目中添加 *PackageReference*：
        ```xml
        <ItemGroup>
            ...
            <PackageReference Include="Hypocrite.Services" Version="SpecifyVersionHere" />
            ...
        </ItemGroup>
        ```

        然后修改您的 **App.xaml** 文件，如下所示。其中 ```YourNamespace``` 是 **App.xaml** 所在的命名空间。
        ```xml
        <mvvm:ApplicationBase x:Class="YourNamespace.App"
                              xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                              xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                              xmlns:local="clr-namespace:YourNamespace"
                              xmlns:mvvm="clr-namespace:Hypocrite.Mvvm;assembly=Hypocrite.Wpf">
        </mvvm:ApplicationBase>
        ```

        接着修改您的 **App.xaml.cs** 文件，使 ```App``` 类继承自 ```ApplicationBase```。您的项目程序集需要在 ```IViewModelResolverService``` 中注册，因此您需要重写 ```CreateShell``` 方法。
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

        您还需要注册一个窗口作为应用程序的主窗口，该窗口必须实现 ```IBaseWindow``` 接口。
    </TabItem>
    <TabItem value="avalonia">
        第一步是在项目中添加 *PackageReference*：
        ```xml
        <ItemGroup>
            ...
            <PackageReference Include="Hypocrite.Services.Avalonia" Version="SpecifyVersionHere" />
            ...
        </ItemGroup>
        ```

        修改您的 **App.xaml.cs** 文件，使 ```App``` 类继承自 ```ApplicationBase```。您的项目程序集需要在 ```IViewModelResolverService``` 中注册，因此您需要重写 ```CreateShell``` 方法。
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

        您还需要注册一个窗口作为应用程序的主窗口，该窗口必须实现 ```IBaseWindow``` 接口。
    </TabItem>
</Tabs>
