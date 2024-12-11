---  
id: observer  
title: Паттерн Observer (Наблюдатель)  
---  

# Паттерн Observer (Наблюдатель)  

**Hypocrite.Services** предоставляет методы для отслеживания изменений свойств в привязываемом классе. Пример:  
```csharp  
this.WhenPropertyChanged(x => x.BindableBrush).Subscribe((b) =>  
{  
    Debug.WriteLine($"Текущая кисть: {b}");  
});  
```

Где ```BindableBrush``` объявлено как:
```csharp
[Notify] // работает только с Hypocrite.Fody  
public SolidColorBrush BindableBrush { get; set; }  
```

:::note
Рекомендуется использовать [DynamicData](https://github.com/reactivemarbles/DynamicData) или [ReactiveUI](https://github.com/reactiveui/ReactiveUI), которые предоставляют более мощные возможности для работы с паттерном *Observer*.
:::