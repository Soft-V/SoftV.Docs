---
id: fody
title: Fody
---

# Fody
Пакет, который позволяет использовать атрибут ```[Notify]``` в вашем коде с библиотекой **Hypocrite.Services**.

Вы можете применять атрибут ```[Notify]``` к любому свойству в вашем классе, но сам класс должен наследоваться от ```BindableObject```.
Чтобы начать использовать эту библиотеку, добавьте ссылку на пакет в ваш проект следующим образом:

```xml
<PackageReference Include="Hypocrite.Fody" Version="SpecifyVersionHere">  
    <PrivateAssets>all</PrivateAssets>  
    <IncludeAssets>runtime; build; compile; native; contentfiles; analyzers; buildtransitive</IncludeAssets>  
</PackageReference>  
```
Создайте файл FodyWeavers.xml в корневом каталоге вашего проекта со следующей конфигурацией (если файл уже существует, можно просто добавить ```<Hypocrite />```) :

```xml
<Weavers xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="FodyWeavers.xsd">  
  <Hypocrite />  
</Weavers>  
```