import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import TechRadar from "./TechRadar.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("TechRadar", TechRadar);
  },
} satisfies Theme;
