---
id: preview-window
title: Окно предварительного просмотра
---

# Окно предварительного просмотра  

Вы можете создать собственное окно предварительного просмотра, используя **Hypocrite.Services**. Ваше окно предварительного просмотра должно реализовывать интерфейс ```IPreviewWindow```. Вот пример окна предварительного просмотра, которое отображается в течение 4 секунд:  
```csharp  
public partial class PreviewWindowView : Window, IPreviewWindow  
{  
    private DispatcherTimer timer;  
    public PreviewWindowView()  
    {  
        InitializeComponent();  

        timer = new DispatcherTimer()  
        {  
            Interval = TimeSpan.FromSeconds(4),  
        };  
        timer.Tick += (s, a) => { CallPreviewDoneEvent(); };  
        timer.Start();  
    }  

    public void CallPreviewDoneEvent()  
    {  
        timer.Stop();  
        EventAggregator.GetEvent<PreviewDoneEvent>().Publish();  
        this.Close();  
    }  

    [Injection]  
    IEventAggregator EventAggregator { get; set; }  
}  
```

Зарегистрированное окно под интерфейсом ```IBaseWindow``` будет отображено после вызова события ```PreviewDoneEvent```.
