---
id: container
title: LightContainer
---

# LightContainer   

### 为什么要使用 LightContainer？  

*Hypocrite.Services* 为您提供了一个轻量快速的 DI 容器，称为 *LightContainer*。以下是它的一些特点：

#### 属性注入：  

所有注册的内容都可以通过 *Injection* 属性解析（该属性仅用于属性和字段），例如：  
```csharp
private class NormalClass
{
    [Injection]
    InjectedClass TestClass { get; set; }
    [Injection]
    AnotherInjectedClass _anotherTestClass;
}
```

#### 构造函数注入：
也可以使用带参数的构造函数（此功能未被 *UnityContainer* 完全支持）。例如，在注册和解析类之后：
```csharp
private class NormalClass
{
    private InjectedClass _testClass;
    private int _a;
    private string _b;

    public NormalClass(InjectedClass testClass, int a, string b = "awd")
    {
        _testClass = testClass;
        _a = a;
        _b = b;
    }
}
```
参数 *testClass* 将像往常一样被解析（如果它没有在容器中注册，则会创建一个实例）；参数 a 将具有默认类型的值（对于 Int32 是 0）；参数 b 将具有其默认参数值（在此例中为 "awd"）。

#### 继承注入：
您的类所继承的类也将被准备好进行注入：
```csharp
private class InjectedClass
{
    internal int A { get; set; }
}

private class BaseClass
{
    [Injection]
    protected InjectedClass TestClass { get; set; }
}

private class NormalClass : BaseClass
{
}
```

因此，在 *NormalClass* 注册和解析之后，*TestClass* 属性也将被注入。

#### 递归注入：

可能存在两个类需要彼此注入（此功能未被 *UnityContainer* 支持）：

```csharp
private class FirstClass
{
    [Injection]
    SecondClass InjectedClass { get; set; }
}

private class SecondClass
{
    [Injection]
    FirstClass InjectedClass { get; set; }
}
```
这将按预期工作！

### 关于速度如何？

在我的破旧笔记本电脑上进行了一些基准测试（我不知道也不关心它的参数），结果如下：

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt1.png" /> 
</div>

Singleton 解析：

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt2.png" /> 
</div>

类型解析：

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt3.png" /> 
</div>

但是……由于 LightContainer 中的注入功能非常强大，因此有一个细节：

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt4.png" /> 
</div>

带构造函数注入的类型解析：

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt5.png" /> 
</div>

带字段和属性注入的类型解析：

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt6.png" /> 
</div>