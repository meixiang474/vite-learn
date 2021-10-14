import { defineComponent } from "@vue/runtime-core";
import "@styles/index.css";
import "@styles/test.less";
import styles from "@styles/test.module.css";
import test from "./test?url";
import testRaw from "./test?raw";
import { a } from "./test";

// /src/test.ts
console.log(test);

// 文件内容
console.log(testRaw);

import logo from "./assets/logo.png";

export default defineComponent({
  name: "App",
  setup() {
    return () => {
      return (
        <>
          <div class="root">Hello Vue3 with Jsx</div>
          <div class={styles["module-class"]}>test css module</div>
          <div class="less">test less</div>
          <div style={{ color: "red" }}>Hello {a.name}</div>
          <img src={logo} />
        </>
      );
    };
  },
});
