"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTypenameFromMutation = exports.removeTypenameFromMutationLink = void 0;
var client_1 = require("@apollo/client");
var omit_deep_lodash_1 = __importDefault(require("omit-deep-lodash"));
var removeTypenameFromMutation = function (operation, forward) {
    var _a, _b;
    var definition = (_b = (_a = operation === null || operation === void 0 ? void 0 : operation.query) === null || _a === void 0 ? void 0 : _a.definitions.filter(function (def) { return def.kind === 'OperationDefinition'; })) === null || _b === void 0 ? void 0 : _b[0];
    var mutation = 'mutation';
    if ((definition === null || definition === void 0 ? void 0 : definition.kind) == 'OperationDefinition' && (definition === null || definition === void 0 ? void 0 : definition.operation) === mutation) {
        operation.variables = omit_deep_lodash_1.default(operation.variables, '__typename');
        return forward(operation);
    }
    return forward(operation);
};
exports.removeTypenameFromMutation = removeTypenameFromMutation;
var removeTypenameFromMutationLink = new client_1.ApolloLink(removeTypenameFromMutation);
exports.removeTypenameFromMutationLink = removeTypenameFromMutationLink;
