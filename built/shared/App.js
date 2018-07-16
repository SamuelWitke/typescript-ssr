import * as React from 'react';
import Hello from './scenes/Home';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { className: "App-header" },
            React.createElement("h2", null, "Something")),
        React.createElement("p", { className: "App-intro" },
            "To get started, edit ",
            React.createElement("code", null, "src/App.tsx"),
            " and save to reload."),
        React.createElement(Hello, null)));
}
export default App;
//# sourceMappingURL=App.js.map