#### 初始体验: App

* 修改 App 中的 `Hello React` -> `Practice Start`
* 通过行内样式给 `Practice Start` 增加样式:
  * 字体大小: 20px;
  * 背景色: blue;
  * 字体颜色: red;
* 新增一行,内容如下 `first line`
* 通过less给 `first line` 增加样式:
  * 字体大小: 15px;
  * 首行缩颈: 20px;

#### 第1步（JSX与State): -> First Folder

* 使用JSX语法，创建html模板变量并应用
  * 变量内容 h2 标签, 标签的innerHTML 为 `This is h2`
* 创建一个有状态组件，并实现一个时钟功能：
  * 实时更新当前时间
  * 提供停止和启动按钮
  * 停止按钮的innerHTML 为 `stop`
  * 启动按钮的innerHTML 为 `start`

#### 第2步(Props与Props-Types): -> Second Folder

* 从父组件传值给子组件
  * 创建componet路径, 并新增Child.js, 创建Class Child
  * Child 要求return 一个块级元素, 其innerHTML为 父级传入的属性`childName`
  * 在Third/index.js 引入Child.js
  * 使用Child组件并为childName 传值 `Cchild'`
* 使用Props-Types校验 `props.childName` 是否为空
  * 在Child.js中 导入 `prop-types`
  * 使用PropTypes对在Child的 `props.childName` 进行校验，观察控制台
    * index.js 中去除 `childName`
    * index.js 中恢复 `childName`

#### 第3步 (Redux): -> Third Folder(Part one)

> redux、react-redux已预装完成，无需重新安装

* 在`src/`下创建`Reducers`folder
  * `src/Reducers`创建`third.js`
    * 声明变量 `initialState`, 其值为`{ reason: 'no reason', nameList['mike', 'lily', 'aliga'] }`
    * 声明变量 `thirdState`, 其中要能支持对 `action.type === UPDATE_REASON` 的响应，其功能为改变state中reason的值
    * 对外导出 thirdState
  * `src/Reducers`创建`index.js`
    * 导入 `thirdState`
    * 使用`combineReducers` 辅助函数处理 `thirdState`
  * 在`src/index.js` 中 为react应用绑定redux
  * 为`src/Containers/Third/index.js` 绑定 `reason` `nameList`,并在页面上展示 `reason` 和 `nameList`
* 在`src/`下创建`Actions`folder


#### 第4步 (Redux): -> Third Folder(Part two)

* 优化 reducer 结构
  * 在`src/`下创建`util`folder
  * `src/util`创建`index.js`
  * 使用 [createReducer](https://www.redux.org.cn/docs/recipes/reducers/RefactoringReducersExample.html)优化 reducer组织机构
  * 在`src/reducer/third.js` 中优化 `thirdState`的结构

#### 第4步 (React-router): Fourth

* 在src/Reducer zhon
* 在Fourth/index.js 中使用
* 在子组件中路由跳转功能
  * 要求：`![a, Link, NavLink].includes(canUseTag) === true`

#### 第5步 (Redux-logger)

* 接入`Redux-logger`
  * 为 `createStore` 增加 `redux-logger` middleware
  * 观察 `prev state` `action` `next state` , 体会flux 架构特点
  * 增加逻辑, 当前`process.env.NODE_ENV` 为`production`时不引入该中间件

#### 第7步(Render Callback): Second

* 从父组件传值给子组件
  * 创建componet路径, 并新增Child.js, 创建Class Child
  * Child 要求return 一个块级元素, 其innerHTML为 父级传入的属性`childName`
  * 在Third/index.js 引入Child.js
  * 使用Child组件并为childName 传值 `Cchild'`
* 使用Props-Types校验 `props.childName` 是否为空
  * 在Child.js中 导入 `prop-types`
  * 使用PropTypes对在Child的 `props.childName` 进行校验，观察控制台
    * index.js 中去除 `childName`
    * index.js 中恢复 `childName`
