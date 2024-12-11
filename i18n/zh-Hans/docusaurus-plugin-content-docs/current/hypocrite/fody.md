---
id: fody
title: Fody
---

# Fody  

这是一个允许您在代码中使用 ```[Notify]``` 属性的包，与 **Hypocrite.Services** 库配合使用。

您可以在类中的任何属性上使用 ```[Notify]``` 属性，但该类必须继承自 ```BindableObject```。  
要开始使用此库，您需要在项目中添加如下的库引用：
```xml
<PackageReference Include="Hypocrite.Fody" Version="SpecifyVersionHere">
    <PrivateAssets>all</PrivateAssets>
    <IncludeAssets>runtime; build; compile; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
</PackageReference>
```
然后在项目根目录创建一个 *FodyWeavers.xml* 文件，配置如下（如果您已有此文件，只需添加 ```<Hypocrite/>``` 节点即可）：
```xml
<Weavers xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="FodyWeavers.xsd">
  <Hypocrite />
</Weavers>
```