<!-- dev/formats -->

# Wiki 格式

!> 本条目下的内容只能保证在本 Wiki 上有效

## Markdowm 语法

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

**粗体** _斜体_ **_粗斜体_**

`代码块`
<mark>强调标记</mark>

~~删除线~~
<u>下划线</u>

<kbd>键盘</kbd>
<small>小字符</small>

> 引用块

?> 提示块

!> 警告块

> [!NOTE]
> An alert of type 'note' using global style 'callout'.

> [!TIP]
> An alert of type 'tip' using global style 'callout'.

> [!WARNING]
> An alert of type 'warning' using global style 'callout'.

> [!ATTENTION]
> An alert of type 'attention' using global style 'callout'.

> [!TIP|style:flat]
> An alert of type 'tip' using global style 'flat'.

> [!NOTE|label:引言]
> An alert of type 'note' using global style 'callout'.

> [!TIP|style:flat|label:引言]
> An alert of type 'tip' using alert specific style 'flat' which overrides global style 'callout'.
> In addition, this alert uses an own heading and hides specific icon.

|       Key       |                      Allowed value                      |
| :-------------: | :-----------------------------------------------------: |
|      style      |         One of follwowing values: callout, flat         |
|      label      |                        Any text                         |
|      icon       |    A valid Font Awesome icon, e.g. 'fas fa-comment'     |
|    className    | A name of a CSS class which specifies the look and feel |
| labelVisibility |   One of follwowing values: visible (default), hidden   |
| iconVisibility  |   One of follwowing values: visible (default), hidden   |

<https://maraudern.github.io/dgowiki/#/>

[文本超链接](http://www.example.com/)

![图片](../images/DGOGroup_1.jpeg)

<figure class="align-center">
    <img draggable='false' src='../images/DGOGroup_1.webp'/>
    <figcaption>图片注释</figcaption>
</figure>

| 表头 1 | 表头 2 | 表头 3 |
| :----: | :----: | :----: |
|  表体  |  表体  |  表体  |
|  表体  |  表体  |  表体  |
|  表体  |  表体  |  表体  |

<details>
<summary>隐藏</summary>
aaaaaaaaa
</details>

<!-- panels:start -->
<!-- div:title-panel -->

(...) - Awesome title

<!-- div:left-panel -->

(...) - Awesome explanation

<!-- div:right-panel -->

(...) - Awesome example

<!-- panels:end -->

## Flexible Alerts 语法

![Build Status](https://api.travis-ci.org/zanfab/docsify-plugin-flexible-alerts.svg)
[![npm Version](https://img.shields.io/npm/v/docsify-plugin-flexible-alerts/latest.svg)](https://www.npmjs.com/package/docsify-plugin-flexible-alerts)
[![npm Downloads](https://img.shields.io/npm/dt/docsify-plugin-flexible-alerts.svg)](https://www.npmjs.com/package/docsify-plugin-flexible-alerts)

This docsify plugin converts blockquotes into beautiful alerts. Look and feel can be configured on a global as well as on a alert specific level so output does fit your needs (some examples are shown below). In addition, you can provide own alert types.

![Sample alerts created with plugin 'flexible-alerts'](https://user-images.githubusercontent.com/44210522/93708131-10fb5780-fb34-11ea-85ae-e18b3e239f83.jpg)

### Installation and Usage

#### Step #1 - Update `index.html` file

Assuming you have a working [docsify](https://docsify.js.org) app set up, it is easy to use this plugin.

1. Add the following script tag to your `index.html`

    ```html
    <!-- Latest -->
    <script src="https://unpkg.com/docsify-plugin-flexible-alerts"></script>
    ```

2. In docsify setup configure the plugin so it does fit your needs. A custom setup is not mandatory. By default styles `flat` and `callout` (Default: `callout`) and types `NOTE`, `TIP`, `WARNING` and `ATTENTION` are supported.

    You can change it using plugin configuration via `index.html` or for a single alert in your markdown files. (please see section `Customizations` for further details)

    **Sample `index.html` file using style `flat` instead of `callout`**

    ```javascript
    <script>
      window.$docsify = {
        'flexible-alerts': {
          style: 'flat'
        }
      };
    </script>
    ```

    **Sample `index.html` using custom headings**

    ```javascript
    <script>
      window.$docsify = {
        'flexible-alerts': {
          note: {
            label: "Hinweis"
          },
          tip: {
            label: "Tipp"
          },
          warning: {
            label: "Warnung"
          },
          attention: {
            label: "Achtung"
          }
        }
      };
    </script>
    ```

    **Sample `index.html` using multilingual headings**

    ```javascript
    <script>
      window.$docsify = {
        'flexible-alerts': {
          note: {
            label: {
              '/de-DE/': 'Hinweis',
              '/': 'Note'
            }
          },
          tip: {
            label: {
              '/de-DE/': 'Tipp',
              '/': 'Tip'
            }
          },
          warning: {
            label: {
              '/de-DE/': 'Warnung',
              '/': 'Warning'
            }
          },
          attention: {
            label: {
              '/de-DE/': 'Achtung',
              '/': 'Attention'
            }
          }
        }
      };
    </script>
    ```

#### Step #2 - Prepare documentation

Modify or add a new blockquote so it matches required syntax like shown in following examples:

-   Sample alert using type `NOTE`

    ```markdown
    > [!NOTE]
    > An alert of type 'note' using global style 'callout'.
    ```

-   Sample alert using type `TIP`

    ```markdown
    > [!TIP]
    > An alert of type 'tip' using global style 'callout'.
    ```

-   Sample alert using type `WARNING`

    ```markdown
    > [!WARNING]
    > An alert of type 'warning' using global style 'callout'.
    ```

-   Sample alert using type `ATTENTION`

    ```markdown
    > [!ATTENTION]
    > An alert of type 'attention' using global style 'callout'.
    ```

#### Step #3 - docsify commands

Serve your documentation (`docsify serve`) as usual.

### Customizations

To use the plugin just modify an existing blockquote and prepend a line matching pattern `[!type]`. By default types `NOTE`, `TIP`, `WARNING` and `ATTENTION` are supported. You can extend the available types by providing a valid configuration (see below for an example).

```markdown
> [!NOTE]
> An alert of type 'note' using global style 'callout'.
```

```markdown
> [!NOTE|style:flat]
> An alert of type 'note' using alert specific style 'flat' which overrides global style 'callout'.
```

As you can see in the second snippet, output can be configured on alert level also. Supported options are listed in following table:

| Key             | Allowed value                                           |
| --------------- | ------------------------------------------------------- |
| style           | One of follwowing values: callout, flat                 |
| label           | Any text                                                |
| icon            | A valid Font Awesome icon, e.g. 'fas fa-comment'        |
| className       | A name of a CSS class which specifies the look and feel |
| labelVisibility | One of follwowing values: visible (default), hidden     |
| iconVisibility  | One of follwowing values: visible (default), hidden     |

Multiple options can be used for single alerts as shown below:

```markdown
> [!TIP|style:flat|label:My own heading|iconVisibility:hidden]
> An alert of type 'tip' using alert specific style 'flat' which overrides global style 'callout'.
> In addition, this alert uses an own heading and hides specific icon.
```

![Custom alert](https://user-images.githubusercontent.com/44210522/50689970-04676080-102c-11e9-9cbc-8af129cb988c.png)

As mentioned above you can provide your own alert types. Therefore, you have to provide the type configuration via `index.html`. Following example shows an additional type `COMMENT`.

```javascript
<script>
  window.$docsify = {
    'flexible-alerts': {
      comment: {
        label: 'Comment',

        // localization
        label: {
          '/en-GB/': 'Comment',
          '/': 'Kommentar'
        },

        // Assuming that we use Font Awesome
        icon: 'fas fa-comment',
        className: 'note'
      }
    }
  };
</script>
```

**Since we are using FontAwesome in previous example we have to include the library via `index.html`, e.g. using a CDN.**

In Markdown just use the alert according to the types provided by default.

```markdown
> [!COMMENT]
> An alert of type 'comment' using style 'callout' with default settings.
```

![Custom alert type 'comment'](https://user-images.githubusercontent.com/44210522/50722960-6f21a600-10d7-11e9-87e7-d40d87045afe.png)

Instead of configuring this plugin using key `flexible-alerts` you can use camel case notation `flexibleAlerts` as well.

```javascript
<script>
  window.$docsify = {
    'flexibleAlerts': {
      style: 'flat'
    }
  };
</script>
```
