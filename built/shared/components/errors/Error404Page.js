var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
var Error404Page = /** @class */ (function (_super) {
    __extends(Error404Page, _super);
    function Error404Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Error404Page.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("h1", null, "404 - Page not found")))));
    };
    return Error404Page;
}(React.Component));
export default Error404Page;
//# sourceMappingURL=Error404Page.js.map