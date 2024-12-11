---
id: observer
title: 观察者模式
---

# Observer pattern  

**Hypocrite.Services** 提供了一些方法来观察可绑定类中属性的变化。例如：

```csharp
this.WhenPropertyChanged(x => x.BindableBrush).Subscribe((b) =>
{
    Debug.WriteLine($"当前的画刷是: {b}");
});
其中 ```BindableBrush``` 被声明为：
```csharp
[Notify] // 仅在使用 Hypocrite.Fody 时有效
public SolidColorBrush BindableBrush { get; set; }
```

:::note
您应使用 [DynamicData](https://github.com/reactivemarbles/DynamicData) 或 [ReactiveUI](https://github.com/reactiveui/ReactiveUI)，它们提供了更强大的 Observer 模式的工作功能。
:::