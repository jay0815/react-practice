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

* 在`src/`下创建`reducer folder`
  * `src/reducer`创建`third.js`
    * 声明变量 `initialState`, 其值为`{ reason: 'no reason',nameList[] }`
    * 声明变量 `thirdState`, 其中要能支持对 `action.type === UPDATE_REASON` 的响应，其功能为改变state中reason的值
    * 对外导出 thirdState
  * `src/reducer`创建`index.js`
    * 导入 `thirdState`
    * 使用`combineReducers` 辅助函数处理 `thirdState`
  * 在`src/index.js` 中 为react应用绑定redux

#### 第4步 (Redux): -> Third Folder(Part two)

* 优化 reducer 结构
  *
* 在子组件中使用 history 对象
  * 使用 withRouter 对 子组件进行包装，与 router 的 store 进行绑定
  * 从父组件传值（history）给子组件

#### 第4步 (React-router): Fourth

* 在src/Reducer zhon
* 在Fourth/index.js 中使用
* 在子组件中路由跳转功能
  * ![`a`, `Link`, `NavLink`].includes(canUseTag) === true

#### 第5步 (Redux-logger)

* 接入`Redux-logger`
  *
  * 从父组件传值（history）给子组件

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
