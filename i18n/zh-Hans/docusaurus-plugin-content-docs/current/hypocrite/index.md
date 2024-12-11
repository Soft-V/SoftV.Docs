---
id: index
title: Hypocrite
keywords:
  - hypocrite
  - avalonia
  - wpf
---

# Hypocrite

**Hypocrite.Services** 和 **Hypocrite.Fody** 提供了强大的服务，让您的应用程序更加酷炫 :)  
这些库兼容 [Avalonia](https://www.avaloniaui.net/) 和 [WPF](https://learn.microsoft.com/en-US/dotnet/desktop/wpf/introduction-to-wpf?view=netframeworkdesktop-4.8)。几乎所有功能在这两个库中都是通用的，但仍然存在一些服务上的小差异。因此，对于特定框架的信息，请访问相应的标签页。

在开始之前，您需要知道 **Hypocrite.Services** 完全**依赖**于 [Prism libraries](https://github.com/PrismLibrary/Prism) 和 [MVVM](https://learn.microsoft.com/en-us/dotnet/architecture/maui/mvvm) 模式。

import {DocsCardList} from '../../src/components/DocsCard';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocsCardList list={useCurrentSidebarCategory().items} />
