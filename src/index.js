import "./styles.scss";

import Alpine from "alpinejs";
import mask from "@alpinejs/mask";
import axios from "axios";
import * as bootstrap from "bootstrap";

import counter from "../alpinejs/components/counter.js";
import form from "../alpinejs/components/form.js";
import load from "../alpinejs/components/load.js";

Alpine.plugin(mask);

window.Alpine = Alpine;
window.axios = axios;
window.bootstrap = bootstrap;

Alpine.data("counter", counter);
Alpine.data("form", form);
Alpine.data("load", load);

Alpine.start();
