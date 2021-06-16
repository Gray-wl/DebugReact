import {React, ReactDOM} from "./CONST";
import "./index.css";
import jsx from "./pages/ExamplePage";

// ReactDOM.render(jsx, document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(jsx);
console.log("React", React.version); //sy-log
