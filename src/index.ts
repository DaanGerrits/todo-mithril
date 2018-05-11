import * as m from "mithril";
import Todos from "./components/Todos/controller";

const root: HTMLElement = document.getElementById('app');
console.log(root, Todos);

const App = {
    view: function() {
        return m("div", { class: "component" }, "Hello");
    }
}

m.mount(root, App);
