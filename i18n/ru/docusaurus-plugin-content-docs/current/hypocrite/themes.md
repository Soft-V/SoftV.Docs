---
id: themes
title: Управление темами
---

# Управление темами  

**Hypocrite.Services** поддерживает смену темы в реальном времени и гибкую регистрацию объектов. Вот пример кода для регистрации ```ThemeSwitcherService``` в вашем приложении (если вам не нужен сервис смены тем, можно пропустить эту регистрацию):

<Tabs
    defaultValue="wpf"
    values={[
        {label: 'WPF', value: 'wpf'},
        {label: 'Avalonia', value: 'avalonia'},
    ]}>
    <TabItem value="wpf">  
        ```csharp
        containerRegistry.RegisterInstance(new ThemeSwitcherService<ThemeType>()
        {
            NameOfDictionary = "ThemeHolder",
            ThemeSources = new Dictionary<ThemeType, string>()
            {
                { ThemeType.Dark, "/Hypocrite.DemoWpf;component/Resources/Themes/DarkTheme.xaml" },
                { ThemeType.Light, "/Hypocrite.DemoWpf;component/Resources/Themes/LightTheme.xaml" },
            },
        });
        ```
    </TabItem>
    <TabItem value="avalonia">
        ```csharp
        containerRegistry.RegisterInstance(new ThemeSwitcherService<ThemeType>(ThemeType.Dark)
        {
            NameOfDictionary = "ThemeHolder",
            ThemeSources = new Dictionary<ThemeType, string>()
            {
                { ThemeType.Dark, "avares://Hypocrite.DemoAvalonia/Resources/Themes/DarkTheme.axaml" },
                { ThemeType.Light, "avares://Hypocrite.DemoAvalonia/Resources/Themes/LightTheme.axaml" },
            },
        });
        ```
    </TabItem>
</Tabs>  

```ThemeSwitcherService``` получает стартовую/дефолтную тему вашего приложения. Остальные параметры будут рассмотрены далее.  

В моем приложении ```ThemeType``` - это перечисление тем:
```csharp
public enum ThemeType
{
    Dark,
    Light
}
```

### Создание словарей ресурсов

Для корректной работы *ThemeSwitcherService* необходимо создать *ResourceDictionary* для каждой темы, а также *ResourceDictionary*, который будет содержать все изменения тем. Например, в моем проекте созданы *DarkTheme.xaml*, *LightTheme.xaml* и *ThemeHolder.xaml*.

<Tabs 
    defaultValue="wpf" 
    values={[ 
        {label: 'WPF', value: 'wpf'}, 
        {label: 'Avalonia', value: 'avalonia'}, 
    ]}> 
    <TabItem value="wpf">
*DarkTheme.xaml*: 
```xml <ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" 
                           xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"> 
                    <Color x:Key="TextForegroundBrushColor">AliceBlue</Color> 
                    <SolidColorBrush x:Key="TextForegroundBrush" 
                                    Color="{DynamicResource TextForegroundBrushColor}"/>

        <Color x:Key="WindowBrushColor">#070c13</Color>
        <SolidColorBrush x:Key="WindowBrush"
                        Color="{DynamicResource WindowBrushColor}" />
    </ResourceDictionary>
    ```
    *LightTheme.xaml*:
    ```xml
    <ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
        <Color x:Key="TextForegroundBrushColor">Black</Color>
        <SolidColorBrush x:Key="TextForegroundBrush"
                        Color="{DynamicResource TextForegroundBrushColor}" />
        
        <Color x:Key="WindowBrushColor">#fefefe</Color>
        <SolidColorBrush x:Key="WindowBrush"
                        Color="{DynamicResource WindowBrushColor}" />
    </ResourceDictionary>
    ```
    *ThemeHolder.xaml* (здесь указывается дефолтная тема):
    ```xml
    <ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
        <ResourceDictionary.MergedDictionaries>
            <ResourceDictionary Source="/Hypocrite.DemoWpf;component/Resources/Themes/DarkTheme.xaml"/>
        </ResourceDictionary.MergedDictionaries>
    </ResourceDictionary>
    ```

    Хранитель *.xaml* файлов тем (*ThemeHolder.xaml* в примере) должен быть добавлен в ресурсы приложения:
    ```xml
    <mvvm:ApplicationBase x:Class="YourNamespace.App"
                        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                        xmlns:local="clr-namespace:YourNamespace"
                        xmlns:mvvm="clr-namespace:Hypocrite.Mvvm;assembly=Hypocrite.Wpf">
        <Application.Resources>
            <ResourceDictionary>
                <ResourceDictionary.MergedDictionaries>
                    <ResourceDictionary Source="/Hypocrite.DemoWpf;component/Resources/Themes/ThemeHolder.xaml"/>
                </ResourceDictionary.MergedDictionaries>
            </ResourceDictionary>
        </Application.Resources>
    </mvvm:ApplicationBase>
    ```
</TabItem>
<TabItem value="avalonia">
    *DarkTheme.xaml*:
    ```xml
    <ResourceDictionary xmlns="https://github.com/avaloniaui"
                        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
        <Color x:Key="TextForegroundBrushColor">AliceBlue</Color>
        <SolidColorBrush x:Key="TextForegroundBrush" 
                        Color="{DynamicResource TextForegroundBrushColor}"/>

        <Color x:Key="WindowBrushColor">#070c13</Color>
        <SolidColorBrush x:Key="WindowBrush"
                        Color="{DynamicResource WindowBrushColor}" />
    </ResourceDictionary>
    ```
    *LightTheme.xaml*:
    ```xml
    <ResourceDictionary xmlns="https://github.com/avaloniaui"
                        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
        <Color x:Key="TextForegroundBrushColor">Black</Color>
        <SolidColorBrush x:Key="TextForegroundBrush"
                        Color="{DynamicResource TextForegroundBrushColor}" />
        
        <Color x:Key="WindowBrushColor">#fefefe</Color>
        <SolidColorBrush x:Key="WindowBrush"
                        Color="{DynamicResource WindowBrushColor}" />
    </ResourceDictionary>
    ```
    *ThemeHolder.xaml* (здесь указывается дефолтная тема):
    ```xml
    <ResourceDictionary xmlns="https://github.com/avaloniaui"
                        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
        <ResourceDictionary.MergedDictionaries>
                <ResourceInclude Source="/Resources/Themes/DarkTheme.axaml"/>
        </ResourceDictionary.MergedDictionaries>
    </ResourceDictionary>
    ```

    Хранитель *.xaml* файлов тем (*ThemeHolder.xaml* в примере) должен быть добавлен в ресурсы приложения:
    ```xml
    <Application xmlns="https://github.com/avaloniaui"
                xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                x:Class="YourNamespace.App">
        <Application.Resources>
            <ResourceDictionary>
                <ResourceDictionary.MergedDictionaries>
                    <ResourceInclude Source="/Resources/Themes/ThemeHolder.axaml"/>
                </ResourceDictionary.MergedDictionaries>
            </ResourceDictionary>
        </Application.Resources>
    </Application>
    ```
</TabItem>
</Tabs>

### Использование в *xaml*

Зарегистрированные цвета и кисти можно использовать как *DynamicResource*:
```xml
<Rectangle Fill="{DynamicResource TestBrush}"/>
```

### Изменение и обработка текущей темы

С помощью ```ThemeSwitcherService``` можно менять тему приложения в реальном времени через метод ```ChangeTheme(theme)``` и получить текущую тему через метод ```GetCurrentTheme()```.

Также существует событие ```ThemeChangedEvent```, которое вызывается через ```IEventAggregator``` с аргументами ```ThemeChangedEventArgs```. Подписаться на него можно так (```IEventAggregator``` уже доступен в ```ViewModelBase```):
```csharp
EventAggregator.GetEvent<ThemeChangedEvent>().Subscribe(YourHandler);
```
