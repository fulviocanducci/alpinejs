import Alpine from "alpinejs";
import axios from "axios";

import counter from "../alpinejs/components/counter.js";
import form from "../alpinejs/components/form.js";
import mask from "@alpinejs/mask";

Alpine.plugin(mask);

window.Alpine = Alpine;
window.axios = axios;

Alpine.data("counter", counter);
Alpine.data("form", form);

Alpine.start();
