---
id: localization
title: Локализация
---

# Локализация

**Hypocrite.Services** также предоставляет отличное решение для локализации в реальном времени. Чтобы использовать его, создайте папку ```Localization``` в вашем проекте и внесите изменения в файл *App.xaml.cs*:

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
        // Инициализация статического сервиса 
        LocalizationManager LocalizationManager.InitializeExternal(Assembly.GetExecutingAssembly(), new ObservableCollection<Language>() 
        { 
            new Language() { Name = "EN" }, 
            new Language() { Name = "RU" }, }); 
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
        // Инициализация статического сервиса 
        LocalizationManager LocalizationManager.InitializeExternal(Assembly.GetExecutingAssembly(), new ObservableCollection<Language>() 
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

Метод ```LocalizationManager.InitializeExternal``` принимает сборку для поиска файлов *.resx* в качестве первого параметра.
А также все доступные языки вашего проекта в качестве второго параметра.

:::note
Языки, инициализируемые методом ```LocalizationManager.InitializeExternal```, могут быть заданы только один раз.
:::

### Создание таблиц *.resx*
В папке ```Localization``` необходимо создать файлы ресурсов с переводами и назвать их следующим образом: "ИмяФайла"."Язык".resx (*Gui.resx* или *Gui.ru.resx*). Основной файл ресурсов не должен содержать часть с "языком".

(Пример содержимого файлов *.resx*: )

Файл *Gui.ru.resx*:
    <div style={{textAlign: 'left'}}> 
        <img src="/docshome/img/hypocrite/localization/exmp1.png" /> 
    </div>

Файл *Gui.resx*:
    <div style={{textAlign: 'left'}}> 
        <img src="/docshome/img/hypocrite/localization/exmp2.png" /> 
    </div>

### Использование в *xaml*

Теперь можно использовать это следующим образом:

```xml
<TextBlock Text="{LocalizedResource MainPage.TestText}"  
           Foreground="{DynamicResource TextForegroundBrush}" />  
```

Или через Bindings в ViewModel:
```xml
<TextBlock Text="{LocalizedResource {Binding TestText}}"  
           Foreground="{DynamicResource TextForegroundBrush}" />  
```           

### Смена текущего языка

Чтобы изменить текущую локализацию, используйте свойство ```LocalizationManager.CurrentLanguage``` следующим образом:
```csharp
LocalizationManager.CurrentLanguage = CultureInfo.GetCultureInfo(lang.Name.ToLower());
```  
В этом примере *lang* — это экземпляр класса ```Language```.

:::warning
Изменение LocalizationManager.CurrentLanguage также изменяет Thread.CurrentThread.CurrentUICulture
:::

### Работа с локализацией из кода

Для получения перевода в коде можно использовать метод ```GetValue```:
```csharp
string translated = LocalizationManager.GetValue("TestKey");  
```
По умолчанию метод ```GetValue``` ищет переводы в файлах *Gui._.resx*.
Вы можете указать таблицу (*.resx* файл), где нужно искать перевод:
```csharp
string translated = LocalizationManager.GetValue("SimulatorTranslations", "TestKey");  
```

### Пользовательские провайдеры локализации
Если вы хотите добавить собственный провайдер локализации (например, не используя *.resx* файлы), вы можете реализовать интерфейс ```ILocalizationProvider```.
Пример реализации:
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

И зарегистрируйте его следующим образом:

```csharp
LocalizationManager.AddScopedProvider("Gui", new AdditionalLocalizationProvider(translations));  
```
:::note
Можно зарегистрировать несколько реализаций ILocalizationProvider под одним и тем же именем
:::