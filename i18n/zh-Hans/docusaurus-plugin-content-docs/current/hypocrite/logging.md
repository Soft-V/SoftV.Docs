---
id: logging
title: 日志记录
---

# Logging  

要记录应用程序的工作日志，您可以解析 ```ILoggingService```，它是 ```Log4netLoggingService``` 的适配器，或者使用 ```ViewModelBase``` 类的 ```LoggingService``` 属性。

您可以在正在运行的程序集目录中找到名为 *app.log* 的日志文件（或者您可以设置自己的日志文件，但这需要手动注册服务）。

您还可以创建自己的 ```ILoggingService``` 实现并进行注册。

:::note
如果您实现了自己的 ```ILoggingService```，则应删除 *App.xaml.cs* 文件中的 ```base.RegisterDefaults(containerRegistry);``` 行，并手动注册 ```IViewModelResolverService``` 和 ```IWindowProgressService```，如以下示例所示：
```csharp
containerRegistry.RegisterInstance<ILoggingService>(new YourLoggingService()); // 根据需要使用单例或实例注册
containerRegistry.RegisterSingleton<IViewModelResolverService, ViewModelResolverService>();
containerRegistry.RegisterSingleton<IWindowProgressService, WindowProgressService>();
```
:::
