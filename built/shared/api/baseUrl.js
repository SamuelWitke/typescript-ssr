import baseUrlDev from "./baseUrl.dev";
import baseUrlProd from "./baseUrl.prod";
var baseUrl = process.env.NODE_ENV === "production" ? baseUrlProd : baseUrlDev;
export default baseUrl;
//# sourceMappingURL=baseUrl.js.map