"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Feffa%2FDownloads%2Fnestroline-ee%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Feffa%2FDownloads%2Fnestroline-ee&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Feffa%2FDownloads%2Fnestroline-ee%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Feffa%2FDownloads%2Fnestroline-ee&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_effa_Downloads_nestroline_ee_src_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/send-email/route.ts */ \"(rsc)/./src/app/api/send-email/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"/Users/effa/Downloads/nestroline-ee/src/app/api/send-email/route.ts\",\n    nextConfigOutput,\n    userland: _Users_effa_Downloads_nestroline_ee_src_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmVmZmElMkZEb3dubG9hZHMlMkZuZXN0cm9saW5lLWVlJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmVmZmElMkZEb3dubG9hZHMlMkZuZXN0cm9saW5lLWVlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21CO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVzdHJvbGluZS13ZWJzaXRlLz8xYWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9lZmZhL0Rvd25sb2Fkcy9uZXN0cm9saW5lLWVlL3NyYy9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmQtZW1haWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZW5kLWVtYWlsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2VmZmEvRG93bmxvYWRzL25lc3Ryb2xpbmUtZWUvc3JjL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Feffa%2FDownloads%2Fnestroline-ee%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Feffa%2FDownloads%2Fnestroline-ee&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/send-email/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/send-email/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _config_mailjet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/mailjet */ \"(rsc)/./src/config/mailjet.ts\");\n/* harmony import */ var _lib_mailjet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mailjet */ \"(rsc)/./src/lib/mailjet.ts\");\n\n\n\nasync function POST(request) {\n    try {\n        if (!_config_mailjet__WEBPACK_IMPORTED_MODULE_1__.mailjetConfig.apiKey || !_config_mailjet__WEBPACK_IMPORTED_MODULE_1__.mailjetConfig.apiSecret) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: \"Mailjet API credentials are not configured\"\n            }, {\n                status: 500\n            });\n        }\n        const data = await request.json();\n        const result = await (0,_lib_mailjet__WEBPACK_IMPORTED_MODULE_2__.sendEmail)(data);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(result, {\n            status: result.success ? 200 : 500\n        });\n    } catch (error) {\n        console.error(\"Email sending failed:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: \"Failed to send email\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDTTtBQUNQO0FBRW5DLGVBQWVHLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixJQUFJLENBQUNILDBEQUFhQSxDQUFDSSxNQUFNLElBQUksQ0FBQ0osMERBQWFBLENBQUNLLFNBQVMsRUFBRTtZQUNyRCxPQUFPTixxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsU0FBUztnQkFBT0MsU0FBUztZQUE2QyxHQUN4RTtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTUMsT0FBTyxNQUFNUCxRQUFRRyxJQUFJO1FBQy9CLE1BQU1LLFNBQVMsTUFBTVYsdURBQVNBLENBQUNTO1FBRS9CLE9BQU9YLHFEQUFZQSxDQUFDTyxJQUFJLENBQUNLLFFBQVE7WUFDL0JGLFFBQVFFLE9BQU9KLE9BQU8sR0FBRyxNQUFNO1FBQ2pDO0lBQ0YsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU9iLHFEQUFZQSxDQUFDTyxJQUFJLENBQ3RCO1lBQUVDLFNBQVM7WUFBT0MsU0FBUztRQUF1QixHQUNsRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25lc3Ryb2xpbmUtd2Vic2l0ZS8uL3NyYy9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUudHM/NmFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBtYWlsamV0Q29uZmlnIH0gZnJvbSAnQC9jb25maWcvbWFpbGpldCc7XG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tICdAL2xpYi9tYWlsamV0JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGlmICghbWFpbGpldENvbmZpZy5hcGlLZXkgfHwgIW1haWxqZXRDb25maWcuYXBpU2VjcmV0KSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdNYWlsamV0IEFQSSBjcmVkZW50aWFscyBhcmUgbm90IGNvbmZpZ3VyZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZEVtYWlsKGRhdGEpO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXN1bHQsIHtcbiAgICAgIHN0YXR1czogcmVzdWx0LnN1Y2Nlc3MgPyAyMDAgOiA1MDAsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRW1haWwgc2VuZGluZyBmYWlsZWQ6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gc2VuZCBlbWFpbCcgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWFpbGpldENvbmZpZyIsInNlbmRFbWFpbCIsIlBPU1QiLCJyZXF1ZXN0IiwiYXBpS2V5IiwiYXBpU2VjcmV0IiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwiZGF0YSIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/send-email/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/config/mailjet.ts":
/*!*******************************!*\
  !*** ./src/config/mailjet.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mailjetConfig: () => (/* binding */ mailjetConfig)\n/* harmony export */ });\nconst mailjetConfig = {\n    apiKey: process.env.MAILJET_API_KEY || \"\",\n    apiSecret: process.env.MAILJET_API_SECRET || \"\",\n    fromEmail: \"noreply@nestroline.com\",\n    fromName: \"Nestroline\",\n    toEmail: \"work@nestroline.com\",\n    toName: \"Nestroline Team\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvY29uZmlnL21haWxqZXQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdCQUFnQjtJQUMzQkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlLElBQUk7SUFDdkNDLFdBQVdILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCLElBQUk7SUFDN0NDLFdBQVc7SUFDWEMsVUFBVTtJQUNWQyxTQUFTO0lBQ1RDLFFBQVE7QUFDVixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVzdHJvbGluZS13ZWJzaXRlLy4vc3JjL2NvbmZpZy9tYWlsamV0LnRzPzEwNjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1haWxqZXRDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTUFJTEpFVF9BUElfS0VZIHx8ICcnLFxuICBhcGlTZWNyZXQ6IHByb2Nlc3MuZW52Lk1BSUxKRVRfQVBJX1NFQ1JFVCB8fCAnJyxcbiAgZnJvbUVtYWlsOiAnbm9yZXBseUBuZXN0cm9saW5lLmNvbScsXG4gIGZyb21OYW1lOiAnTmVzdHJvbGluZScsXG4gIHRvRW1haWw6ICd3b3JrQG5lc3Ryb2xpbmUuY29tJyxcbiAgdG9OYW1lOiAnTmVzdHJvbGluZSBUZWFtJ1xufTsiXSwibmFtZXMiOlsibWFpbGpldENvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNQUlMSkVUX0FQSV9LRVkiLCJhcGlTZWNyZXQiLCJNQUlMSkVUX0FQSV9TRUNSRVQiLCJmcm9tRW1haWwiLCJmcm9tTmFtZSIsInRvRW1haWwiLCJ0b05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/config/mailjet.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mailjet.ts":
/*!****************************!*\
  !*** ./src/lib/mailjet.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var node_mailjet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-mailjet */ \"(rsc)/./node_modules/node-mailjet/mailjet.node.js\");\n/* harmony import */ var node_mailjet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_mailjet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_mailjet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/mailjet */ \"(rsc)/./src/config/mailjet.ts\");\n\n\nconst mailjet = new (node_mailjet__WEBPACK_IMPORTED_MODULE_0___default())({\n    apiKey: _config_mailjet__WEBPACK_IMPORTED_MODULE_1__.mailjetConfig.apiKey,\n    apiSecret: _config_mailjet__WEBPACK_IMPORTED_MODULE_1__.mailjetConfig.apiSecret\n});\nconst sendEmail = async (data)=>{\n    try {\n        await mailjet.post(\"send\", {\n            version: \"v3.1\"\n        }).request({\n            Messages: [\n                {\n                    From: {\n                        Email: _config_mailjet__WEBPACK_IMPORTED_MODULE_1__.mailjetConfig.fromEmail,\n                        Name: _config_mailjet__WEBPACK_IMPORTED_MODULE_1__.mailjetConfig.fromName\n                    },\n                    To: [\n                        {\n                            Email: _config_mailjet__WEBPACK_IMPORTED_MODULE_1__.mailjetConfig.toEmail,\n                            Name: _config_mailjet__WEBPACK_IMPORTED_MODULE_1__.mailjetConfig.toName\n                        }\n                    ],\n                    Subject: `New Contact Form Submission from ${data.name}`,\n                    TextPart: `\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n          `,\n                    HTMLPart: `\n<h2>New Contact Form Submission</h2>\n<p><strong>Name:</strong> ${data.name}</p>\n<p><strong>Email:</strong> ${data.email}</p>\n<br>\n<p><strong>Message:</strong></p>\n<p>${data.message.replace(/\\n/g, \"<br>\")}</p>\n          `,\n                    ReplyTo: {\n                        Email: data.email,\n                        Name: data.name\n                    }\n                }\n            ]\n        });\n        return {\n            success: true,\n            message: \"Email sent successfully\"\n        };\n    } catch (error) {\n        console.error(\"Failed to send email:\", error);\n        return {\n            success: false,\n            message: \"Failed to send email\"\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21haWxqZXQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQztBQUNjO0FBRWpELE1BQU1FLFVBQVUsSUFBSUYscURBQU9BLENBQUM7SUFDMUJHLFFBQVFGLDBEQUFhQSxDQUFDRSxNQUFNO0lBQzVCQyxXQUFXSCwwREFBYUEsQ0FBQ0csU0FBUztBQUNwQztBQVFPLE1BQU1DLFlBQVksT0FBT0M7SUFDOUIsSUFBSTtRQUNGLE1BQU1KLFFBQVFLLElBQUksQ0FBQyxRQUFRO1lBQUVDLFNBQVM7UUFBTyxHQUFHQyxPQUFPLENBQUM7WUFDdERDLFVBQVU7Z0JBQ1I7b0JBQ0VDLE1BQU07d0JBQ0pDLE9BQU9YLDBEQUFhQSxDQUFDWSxTQUFTO3dCQUM5QkMsTUFBTWIsMERBQWFBLENBQUNjLFFBQVE7b0JBQzlCO29CQUNBQyxJQUFJO3dCQUNGOzRCQUNFSixPQUFPWCwwREFBYUEsQ0FBQ2dCLE9BQU87NEJBQzVCSCxNQUFNYiwwREFBYUEsQ0FBQ2lCLE1BQU07d0JBQzVCO3FCQUNEO29CQUNEQyxTQUFTLENBQUMsaUNBQWlDLEVBQUViLEtBQUtjLElBQUksQ0FBQyxDQUFDO29CQUN4REMsVUFBVSxDQUFDO01BQ2YsRUFBRWYsS0FBS2MsSUFBSSxDQUFDO09BQ1gsRUFBRWQsS0FBS2dCLEtBQUssQ0FBQzs7O0FBR3BCLEVBQUVoQixLQUFLaUIsT0FBTyxDQUFDO1VBQ0wsQ0FBQztvQkFDREMsVUFBVSxDQUFDOzswQkFFSyxFQUFFbEIsS0FBS2MsSUFBSSxDQUFDOzJCQUNYLEVBQUVkLEtBQUtnQixLQUFLLENBQUM7OztHQUdyQyxFQUFFaEIsS0FBS2lCLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLE9BQU8sUUFBUTtVQUMvQixDQUFDO29CQUNEQyxTQUFTO3dCQUNQZCxPQUFPTixLQUFLZ0IsS0FBSzt3QkFDakJSLE1BQU1SLEtBQUtjLElBQUk7b0JBQ2pCO2dCQUNGO2FBQ0Q7UUFDSDtRQUVBLE9BQU87WUFDTE8sU0FBUztZQUNUSixTQUFTO1FBQ1g7SUFDRixFQUFFLE9BQU9LLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBTztZQUNMRCxTQUFTO1lBQ1RKLFNBQVM7UUFDWDtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25lc3Ryb2xpbmUtd2Vic2l0ZS8uL3NyYy9saWIvbWFpbGpldC50cz80OWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWlsamV0IGZyb20gJ25vZGUtbWFpbGpldCc7XG5pbXBvcnQgeyBtYWlsamV0Q29uZmlnIH0gZnJvbSAnQC9jb25maWcvbWFpbGpldCc7XG5cbmNvbnN0IG1haWxqZXQgPSBuZXcgTWFpbGpldCh7XG4gIGFwaUtleTogbWFpbGpldENvbmZpZy5hcGlLZXksXG4gIGFwaVNlY3JldDogbWFpbGpldENvbmZpZy5hcGlTZWNyZXRcbn0pO1xuXG5pbnRlcmZhY2UgRW1haWxEYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzZW5kRW1haWwgPSBhc3luYyAoZGF0YTogRW1haWxEYXRhKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbWFpbGpldC5wb3N0KCdzZW5kJywgeyB2ZXJzaW9uOiAndjMuMScgfSkucmVxdWVzdCh7XG4gICAgICBNZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgRnJvbToge1xuICAgICAgICAgICAgRW1haWw6IG1haWxqZXRDb25maWcuZnJvbUVtYWlsLFxuICAgICAgICAgICAgTmFtZTogbWFpbGpldENvbmZpZy5mcm9tTmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgVG86IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgRW1haWw6IG1haWxqZXRDb25maWcudG9FbWFpbCxcbiAgICAgICAgICAgICAgTmFtZTogbWFpbGpldENvbmZpZy50b05hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFN1YmplY3Q6IGBOZXcgQ29udGFjdCBGb3JtIFN1Ym1pc3Npb24gZnJvbSAke2RhdGEubmFtZX1gLFxuICAgICAgICAgIFRleHRQYXJ0OiBgXG5OYW1lOiAke2RhdGEubmFtZX1cbkVtYWlsOiAke2RhdGEuZW1haWx9XG5cbk1lc3NhZ2U6XG4ke2RhdGEubWVzc2FnZX1cbiAgICAgICAgICBgLFxuICAgICAgICAgIEhUTUxQYXJ0OiBgXG48aDI+TmV3IENvbnRhY3QgRm9ybSBTdWJtaXNzaW9uPC9oMj5cbjxwPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtkYXRhLm5hbWV9PC9wPlxuPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gJHtkYXRhLmVtYWlsfTwvcD5cbjxicj5cbjxwPjxzdHJvbmc+TWVzc2FnZTo8L3N0cm9uZz48L3A+XG48cD4ke2RhdGEubWVzc2FnZS5yZXBsYWNlKC9cXG4vZywgJzxicj4nKX08L3A+XG4gICAgICAgICAgYCxcbiAgICAgICAgICBSZXBseVRvOiB7XG4gICAgICAgICAgICBFbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgICAgIE5hbWU6IGRhdGEubmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAnRW1haWwgc2VudCBzdWNjZXNzZnVsbHknXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCBlbWFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBzZW5kIGVtYWlsJ1xuICAgIH07XG4gIH1cbn07Il0sIm5hbWVzIjpbIk1haWxqZXQiLCJtYWlsamV0Q29uZmlnIiwibWFpbGpldCIsImFwaUtleSIsImFwaVNlY3JldCIsInNlbmRFbWFpbCIsImRhdGEiLCJwb3N0IiwidmVyc2lvbiIsInJlcXVlc3QiLCJNZXNzYWdlcyIsIkZyb20iLCJFbWFpbCIsImZyb21FbWFpbCIsIk5hbWUiLCJmcm9tTmFtZSIsIlRvIiwidG9FbWFpbCIsInRvTmFtZSIsIlN1YmplY3QiLCJuYW1lIiwiVGV4dFBhcnQiLCJlbWFpbCIsIm1lc3NhZ2UiLCJIVE1MUGFydCIsInJlcGxhY2UiLCJSZXBseVRvIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mailjet.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/node-mailjet"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Feffa%2FDownloads%2Fnestroline-ee%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Feffa%2FDownloads%2Fnestroline-ee&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();