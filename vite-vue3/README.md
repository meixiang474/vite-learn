1. 创建项目
   npm init @vitejs/app

2. 使用 yarn 安装依赖 npm 会报错
   yarn add

3. 适配 jsx
   yarn add @vitejs/plugin-vue-jsx -D
4. vite 自动适配 ts, 但是不会在编译的时候进行校验，所以需要手动 tsc 如果使用.vue 中的 ts 需要借助 vue-tsc 这个库进行手动校验
5. - vite 对 ts 的编译是单文件编译，不允许 reexport interface type、declare const enum, ts 开启 isolatedModules 后 reexport interface type 会报错，isolatedModules 同时可能会引起 node_modules 下的文件报错，所以需要在 tsconfig 中加上 skipLibCheck: true 跳过 node_modules 的检查；
   - 加上 allowJs: true 允许 js
   - tsconfg 中 types 添加 vite/client1 以识别 import.meta
