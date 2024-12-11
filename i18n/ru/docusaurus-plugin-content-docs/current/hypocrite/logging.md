---  
id: logging  
title: Логирование  
---  

# Логирование  

Для логирования работы вашего приложения вы можете использовать ```ILoggingService```, который является адаптером для ```Log4netLoggingService```, или свойство ```LoggingService``` из ```ViewModelBase```.  

Файл логов можно найти в директории вашей запущенной сборки под именем *app.log* (или задать свой собственный файл, но для этого потребуется ручная регистрация сервиса).  

Вы можете создать собственную реализацию ```ILoggingService``` и зарегистрировать её.  

:::note  
Если вы реализуете собственный ```ILoggingService```, вам нужно удалить строку ```base.RegisterDefaults(containerRegistry);``` в файле *App._xaml.cs* и зарегистрировать ```IViewModelResolverService``` и ```IWindowProgressService``` вручную следующим образом:  
```csharp  
containerRegistry.RegisterInstance<ILoggingService>(new YourLoggingService()); // используйте singleton или instance-регистрацию, если это необходимо  
containerRegistry.RegisterSingleton<IViewModelResolverService, ViewModelResolverService>();  
containerRegistry.RegisterSingleton<IWindowProgressService, WindowProgressService>();  
```
:::