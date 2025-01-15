"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuSuggestionFlow = void 0;
// Import the Genkit core libraries and plugins.
var genkit_1 = require("genkit");
var vertexai_1 = require("@genkit-ai/vertexai");
// Import models from the Vertex AI plugin. The Vertex AI API provides access to
// several generative models. Here, we import Gemini 1.5 Flash.
var vertexai_2 = require("@genkit-ai/vertexai");
// From the Firebase plugin, import the functions needed to deploy flows using
// Cloud Functions.
var auth_1 = require("@genkit-ai/firebase/auth");
var functions_1 = require("@genkit-ai/firebase/functions");
var ai = (0, genkit_1.genkit)({
    plugins: [
        // Load the Vertex AI plugin. You can optionally specify your project ID
        // by passing in a config object; if you don't, the Vertex AI plugin uses
        // the value from the GCLOUD_PROJECT environment variable.
        (0, vertexai_1.vertexAI)({ location: "us-central1" }),
    ],
});
// Define a simple flow that prompts an LLM to generate menu suggestions.
exports.menuSuggestionFlow = (0, functions_1.onFlow)(ai, {
    name: "menuSuggestionFlow",
    inputSchema: genkit_1.z.string(),
    outputSchema: genkit_1.z.string(),
    authPolicy: (0, auth_1.firebaseAuth)(function (user) {
        // By default, the firebaseAuth policy requires that all requests have an
        // `Authorization: Bearer` header containing the user's Firebase
        // Authentication ID token. All other requests are rejected with error
        // 403. If your app client uses the Cloud Functions for Firebase callable
        // functions feature, the library automatically attaches this header to
        // requests.
        // You should also set additional policy requirements as appropriate for
        // your app. For example:
        // if (!user.email_verified) {
        //   throw new Error("Verified email required to run flow");
        // }
    }),
}, function (subject) { return __awaiter(void 0, void 0, void 0, function () {
    var prompt, llmResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prompt = "Suggest an item for the menu of a ".concat(subject, " themed restaurant");
                return [4 /*yield*/, ai.generate({
                        model: vertexai_2.gemini15Flash,
                        prompt: prompt,
                        config: {
                            temperature: 1,
                        },
                    })];
            case 1:
                llmResponse = _a.sent();
                // Handle the response from the model API. In this sample, we just
                // convert it to a string, but more complicated flows might coerce the
                // response into structured output or chain the response into another
                // LLM call, etc.
                return [2 /*return*/, llmResponse.text];
        }
    });
}); });
