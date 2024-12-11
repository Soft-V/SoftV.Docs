---
id: preview-window
title: 预览窗口
---

# 预览窗口  

您可以使用 **Hypocrite.Services** 创建自己的预览窗口。您的预览窗口需要实现 ```IPreviewWindow``` 接口。以下是一个示例预览窗口，它将在 4 秒后关闭：

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

注册为 ```IBaseWindow``` 接口的窗口将在 ```PreviewDoneEvent``` 事件触发后显示出来。
