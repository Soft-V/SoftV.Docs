---
id: container
title: LightContainer
---

# LightContainer   

### Зачем использовать LightContainer?  

*Hypocrite.Services* предоставляет вам лёгкий и быстрый DI-контейнер под названием *LightContainer*. Вот некоторые его особенности:

#### Атрибутные инъекции:  

Всё зарегистрированное может быть разрешено с помощью атрибута *Injection* (атрибут применяется только к свойствам и полям), например:  
```csharp
private class NormalClass
{
    [Injection]
    InjectedClass TestClass { get; set; }
    [Injection]
    AnotherInjectedClass _anotherTestClass;
}
```

#### Инъекции через конструктор:

Можно использовать параметры конструктора (эта возможность не полностью поддерживается в UnityContainer). Например, после регистрации и разрешения класса:
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
параметр *testClass* будет разрешён как обычно (если он не зарегистрирован в контейнере, будет создан его экземпляр); параметр a получит значение по **умолчанию для своего типа** (для Int32 это 0); параметр b примет значение **параметра по умолчанию** (в данном случае "awd").

#### Инъекции через наследование:
Классы, от которых наследуется ваш класс, также будут подготовлены для инъекций:
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
Таким образом, после регистрации и разрешения *NormalClass* свойство *TestClass* также будет инъецировано.

#### Рекурсивные инъекции:
Могут быть два класса, которые требуют инъекцию друг друга (эта возможность не поддерживается в UnityContainer):
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
И это будет работать, как ожидалось!

### А как насчёт скорости?

После некоторых тестов на моём старом ноутбуке (не знаю и не интересуюсь его характеристиками) я получил следующие результаты:

<div style={{textAlign: 'left'}}>
    <img src="/docshome/img/hypocrite/container/cnt1.png" /> 
</div>

Разрешение Singleton:

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt2.png" /> 
</div>

Разрешение типа:

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt3.png" /> 
</div>

Но... есть нюанс с инъекциями, так как они достаточно мощные в *LightContainer*:

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt4.png" /> 
</div>

Разрешение типа с инъекцией через конструктор:

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt5.png" /> 
</div>

Разрешение типа с инъекцией через поля и свойства:

<div style={{textAlign: 'left'}}> 
    <img src="/docshome/img/hypocrite/container/cnt6.png" /> 
</div>