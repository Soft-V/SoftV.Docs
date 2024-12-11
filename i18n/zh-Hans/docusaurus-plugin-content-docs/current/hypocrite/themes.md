---
id: themes
title: 主题管理
---

# 主题管理  

**Hypocrite.Services** 支持实时主题更改和灵活的对象注册。以下是将 ```ThemeSwitcherService``` 注册到您的应用中的示例（如果您不想在项目中使用主题更改服务，您可以跳过此注册）：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

```ThemeSwitcherService``` 获取您项目的启动/默认主题。关于其他参数，我们稍后再谈。

在我的应用程序中，```ThemeType``` 是一个主题枚举：
```csharp
public enum ThemeType
{
    Dark,
    Light
}
```
### 创建资源字典
为了使 *ThemeSwitcherService* 正常工作，您需要为每个主题创建 *ResourceDictionaries*，以及一个包含所有主题变化的 *ResourceDictionary*。在我的项目中，我创建了 *DarkTheme.xaml*、*LightTheme.xaml* 和 *ThemeHolder.xaml*。

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
    *ThemeHolder.xaml* (您应在此处设置默认主题):
    ```xml
    <ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
        <ResourceDictionary.MergedDictionaries>
            <ResourceDictionary Source="/Hypocrite.DemoWpf;component/Resources/Themes/DarkTheme.xaml"/>
        </ResourceDictionary.MergedDictionaries>
    </ResourceDictionary>
    ```

    *.xaml* 主题文件的持有者 (*ThemeHolder.xaml* 为示例) 应该像这样合并到您的应用资源中：
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
    *ThemeHolder.xaml* (您应在此处设置默认主题):
    ```xml
    <ResourceDictionary xmlns="https://github.com/avaloniaui"
                        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
        <ResourceDictionary.MergedDictionaries>
                <ResourceInclude Source="/Resources/Themes/DarkTheme.axaml"/>
        </ResourceDictionary.MergedDictionaries>
    </ResourceDictionary>
    ```

    *.xaml* 主题文件的持有者 (*ThemeHolder.xaml* 为示例) 应该像这样合并到您的应用资源中：
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
№№№ 在 *xaml* 中使用
注册的颜色和画刷可以像这样用作 *DynamicResource*：
```xml
<Rectangle Fill="{DynamicResource TestBrush}"/>
```

### 更改和处理当前主题

使用 ```ThemeSwitcherService```，您可以通过 ```ChangeTheme(theme)``` 方法实时更改应用程序的主题，并通过 ```GetCurrentTheme()``` 方法获取当前主题。

此外，还有一个 ```ThemeChangedEvent``` 事件，通过 ```IEventAggregator``` 调用，携带 ```ThemeChangedEventArgs```。您可以像这样订阅它 （```IEventAggregator``` 已在 ```ViewModelBase``` 中解析）：
```csharp
EventAggregator.GetEvent<ThemeChangedEvent>().Subscribe(YourHandler);
```