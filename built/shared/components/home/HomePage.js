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
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.render = function () {
        return (React.createElement("div", { className: "jumbotron" },
            React.createElement("h1", { className: "display-3 text-center" }, "React app"),
            React.createElement("p", { className: "lead text-center" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel augue turpis. Suspendisse malesuada lacus nec metus pharetra sodales. Nunc tellus quam, mollis a dictum et, luctus maximus libero.")));
    };
    return HomePage;
}(React.Component));
export default HomePage;
//# sourceMappingURL=HomePage.js.map