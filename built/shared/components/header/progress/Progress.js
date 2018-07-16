import * as React from "react";
import "./Progress.css";
function Progress(props) {
    var progress = null;
    if (props.isBusy) {
        progress = (React.createElement("div", { className: "progress" },
            React.createElement("div", { className: "progress-bar progress-bar-striped progress-bar-animated", role: "progressbar" })));
    }
    return progress;
}
export default Progress;
//# sourceMappingURL=Progress.js.map