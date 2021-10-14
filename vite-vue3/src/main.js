import { createApp } from "vue";
import App from "./App";
// 引入worker
import Worker from "./worker?worker";

// 引入json
import pkg, { version } from "../package.json";

// const worker = new Worker();

// worker.onmessage = function (e) {
//   console.log(e);
// };

console.log(pkg, version);

createApp(App).mount("#app");
