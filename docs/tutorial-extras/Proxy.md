---
sidebar_position: 2
---
## Proxy 代理对象

Proxy 对象主要是用来对一个对象进行代理

### 用法

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
const data = {
  a:1,
  b:2
}
const proxy = new Proxy(data,{
  get(target,property){
    console.log(property);
    return Reflect.get(target,property)
  }
});
```

### Reflect

Reflect 内部封装了一系列对对象的底层操作
Reflect成员方法就是Proxy处理对象的默认实现

#### 作用
统一提供一套用于操作对象的API




:::caution

In development, you can only use one locale at a same time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](/img/tutorial/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```
