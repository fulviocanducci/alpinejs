import Alpine from "alpinejs";
import counter from "../alpinejs/components/counter.js";

window.Alpine = Alpine;

Alpine.data("counter", counter);

Alpine.start();
