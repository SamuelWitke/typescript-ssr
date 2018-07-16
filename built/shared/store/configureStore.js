import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";
var configure = process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;
export default configure;
//# sourceMappingURL=configureStore.js.map