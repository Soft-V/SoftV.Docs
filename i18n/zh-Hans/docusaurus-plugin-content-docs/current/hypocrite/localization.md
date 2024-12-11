---
id: localization
title: Localization
---

# Localization  

**Hypocrite.Services** 还为您提供了一个很棒的实时本地化解决方案。要使用它，您应该在项目中创建一个名为 ```Localization``` 的文件夹，并在 *App.xaml.cs* 文件中进行一些更改：

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
        public partial class App : ApplicationBase
        {
            protected override void OnStartup(StartupEventArgs e)
            {
                // 初始化 LocalizationManager 静态服务
                LocalizationManager.InitializeExternal(Assembly.GetExecutingAssembly(), new ObservableCollection<Language>()
                {
                    new Language() { Name = "EN" },
                    new Language() { Name = "RU" },
                });  
                // ...
                base.OnStartup(e);
            }
        }
        ```
    </TabItem>
    <TabItem value="avalonia">
        ```csharp
        public partial class App : ApplicationBase
        {
            public override void Initialize()
            {
                // 初始化 LocalizationManager 静态服务
                LocalizationManager.InitializeExternal(Assembly.GetExecutingAssembly(), new ObservableCollection<Language>()
                {
                    new Language() { Name = "EN" },
                    new Language() { Name = "RU" },
                });  
                // ...
                base.OnStartup(e);
            }
        }
        ```
    </TabItem>
</Tabs>  

`LocalizationManager.InitializeExternal` 方法将程序集作为第一个参数，用于搜索 *.resx* 文件，第二个参数则是您项目中所有可用的语言。

:::note
使用 `LocalizationManager.InitializeExternal` 方法初始化语言只能执行一次。
:::

### 创建 *.resx* 文件

在 ```Localization``` 文件夹中，您应该创建翻译的资源文件，命名格式为 "文件名"."语言".resx（例如 *Gui.resx* 或 *Gui.ru.resx*）。默认的资源文件不需要包含语言部分。

（以下是 *.resx* 文件的示例内容：）

*Gui.ru.resx* 文件：
  <div style={{textAlign: 'left'}}>
    <img src="/docshome/img/hypocrite/localization/exmp1.png" />
  </div>

*Gui.resx* 文件：
  <div style={{textAlign: 'left'}}>
    <img src="/docshome/img/hypocrite/localization/exmp2.png" />
  </div>  

### 在 *xaml* 中使用

现在您可以像这样使用本地化资源：

```xml
<TextBlock Text="{LocalizedResource MainPage.TestText}"
           Foreground="{DynamicResource TextForegroundBrush}" />
或者通过 Bindings 绑定到 ViewModel：

```xml
<TextBlock Text="{LocalizedResource {Binding TestText}}"
           Foreground="{DynamicResource TextForegroundBrush}" />
```

### 更改当前语言
要更改当前的本地化语言，请使用 ```LocalizationManager.CurrentLanguage``` 属性，如下所示：
```csharp
LocalizationManager.CurrentLanguage = CultureInfo.GetCultureInfo(lang.Name.ToLower());
```

在此示例中，*lang* 是 ```Language``` 类的一个实例。

:::warning
更改 ```LocalizationManager.CurrentLanguage``` 也会更改 ```Thread.CurrentThread.CurrentUICulture```
:::

### 从代码中工作

要从代码中获取翻译，可以使用 ```GetValue``` 方法：
```csharp
string translated = LocalizationManager.GetValue("TestKey");
```
默认情况下，```GetValue``` 方法会在 *Gui._.resx* 文件中查找翻译。
您可以指定要搜索翻译的表（*.resx* 文件）：
```csharp
string translated = LocalizationManager.GetValue("SimulatorTranslations", "TestKey");
```

### 自定义本地化提供者

如果您想添加自定义的本地化提供者（不仅仅使用 .resx 文件），可以实现 ```ILocalizationProvider``` 接口。
以下是如何实现的示例：
```csharp
public class AdditionalLocalizationProvider : ILocalizationProvider
{
    public AdditionalLocalizationProvider(IList<AdditionalTranslation> additionalTranslations) 
    {
        Dictionary<string, object> enDic = new Dictionary<string, object>();
        Dictionary<string, object> ruDic = new Dictionary<string, object>();
        Dictionary<string, object> zhDic = new Dictionary<string, object>();
        Dictionary<string, object> jaDic = new Dictionary<string, object>();
        foreach (var translation in additionalTranslations)
        {
            enDic.Add(translation.Tag, translation.En);
            ruDic.Add(translation.Tag, translation.Ru);
            zhDic.Add(translation.Tag, translation.Zh);
            jaDic.Add(translation.Tag, translation.Ja);
        }
        allResources.Add("en", enDic);
        allResources.Add("ru", ruDic);
        allResources.Add("zh", zhDic);
        allResources.Add("ja", jaDic);
    }

    public object GetValue(string key, CultureInfo culture = null)
    {
        if (key is null)
        {
            return null;
        }

        var dictionary = GetValues(culture);
        if (dictionary.TryGetValue(key, out var value))
        {
            return value;
        }

        return null;
    }

    public Dictionary<string, object> GetValues(CultureInfo culture = null)
    {
        if (culture == null)
        {
            culture = NeutralCulture;
        }

        if (allResources.TryGetValue(culture.IetfLanguageTag, out var dictionary))
        {
            return dictionary;
        }

        return new Dictionary<string, object>();
    }

    public static CultureInfo NeutralCulture { get; } = CultureInfo.GetCultureInfoByIetfLanguageTag("en");

    private readonly Dictionary<string, Dictionary<string, object>> allResources = new Dictionary<string, Dictionary<string, object>>();
}
```

并像这样注册它：
```csharp
LocalizationManager.AddScopedProvider("Gui", new AdditionalLocalizationProvider(translations));
```

:::note
您可以为同一个名称注册多个 ILocalizationProvider 实现。
:::