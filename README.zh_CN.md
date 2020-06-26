# egg-pop-core

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-pop-core.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-pop-core
[travis-image]: https://img.shields.io/travis/eggjs/egg-pop-core.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-pop-core
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-pop-core.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-pop-core?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-pop-core.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-pop-core
[snyk-image]: https://snyk.io/test/npm/egg-pop-core/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-pop-core
[download-image]: https://img.shields.io/npm/dm/egg-pop-core.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-pop-core

<!--
Description here.
-->

## 详细配置

```js
// {app_root}/config/config.default.js
exports.popCore = {
  client: {
    accessKeyId: "accessKeyId",
    accessKeySecret: "accessKeySecret",
    apiVersion: "2017-05-25",
    endpoint: "https://dysmsapi.aliyuncs.com",
  },
};
// 多实例
// exports.popCore = {
//   clients: {
//     client1: {
//       accessKeyId: "accessKeyId",
//       accessKeySecret: "accessKeySecret",
//       apiVersion: "2017-05-25",
//       endpoint: "https://dysmsapi.aliyuncs.com",
//     },
//     client2: {
//       accessKeyId: "accessKeyId",
//       accessKeySecret: "accessKeySecret",
//       apiVersion: "2017-05-25",
//       endpoint: "https://dysmsapi.aliyuncs.com",
//     },
//     // ...
//   },
// };
```

## 开启插件

```js
// config/plugin.js
exports.popCore = {
  enable: true,
  package: "egg-pop-core",
};
```

## 使用

```js
const param = {
  SignName: "name",
  TemplateCode: "SMS_11111111",
  TemplateParam: JSON.stringify({ code }),
  PhoneNumbers: "156xxxxxxxx",
};
const res = await app.popCore.request("SendSms", param, { method: "POST" });
console.log(res);
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
