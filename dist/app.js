var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig;
var init_httpExtensionConfiguration = __esm({
  "node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
    getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
      return {
        setHttpHandler(handler) {
          runtimeConfig.httpHandler = handler;
        },
        httpHandler() {
          return runtimeConfig.httpHandler;
        },
        updateHttpClientConfig(key, value) {
          runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return runtimeConfig.httpHandler.httpHandlerConfigs();
        }
      };
    };
    resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/extensions/index.js
var init_extensions = __esm({
  "node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
    init_httpExtensionConfiguration();
  }
});

// node_modules/@smithy/types/dist-es/abort.js
var init_abort = __esm({
  "node_modules/@smithy/types/dist-es/abort.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
var init_auth = __esm({
  "node_modules/@smithy/types/dist-es/auth/auth.js"() {
    (function(HttpAuthLocation2) {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
    })(HttpAuthLocation || (HttpAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
var init_HttpApiKeyAuth = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
    (function(HttpApiKeyAuthLocation2) {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
    })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner = __esm({
  "node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig = __esm({
  "node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
  }
});

// node_modules/@smithy/types/dist-es/auth/index.js
var init_auth2 = __esm({
  "node_modules/@smithy/types/dist-es/auth/index.js"() {
    init_auth();
    init_HttpApiKeyAuth();
    init_HttpAuthScheme();
    init_HttpAuthSchemeProvider();
    init_HttpSigner();
    init_IdentityProviderConfig();
  }
});

// node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types = __esm({
  "node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/checksum.js
var init_checksum = __esm({
  "node_modules/@smithy/types/dist-es/checksum.js"() {
  }
});

// node_modules/@smithy/types/dist-es/client.js
var init_client = __esm({
  "node_modules/@smithy/types/dist-es/client.js"() {
  }
});

// node_modules/@smithy/types/dist-es/command.js
var init_command = __esm({
  "node_modules/@smithy/types/dist-es/command.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/config.js
var init_config = __esm({
  "node_modules/@smithy/types/dist-es/connection/config.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager = __esm({
  "node_modules/@smithy/types/dist-es/connection/manager.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool = __esm({
  "node_modules/@smithy/types/dist-es/connection/pool.js"() {
  }
});

// node_modules/@smithy/types/dist-es/connection/index.js
var init_connection = __esm({
  "node_modules/@smithy/types/dist-es/connection/index.js"() {
    init_config();
    init_manager();
    init_pool();
  }
});

// node_modules/@smithy/types/dist-es/crypto.js
var init_crypto = __esm({
  "node_modules/@smithy/types/dist-es/crypto.js"() {
  }
});

// node_modules/@smithy/types/dist-es/encode.js
var init_encode = __esm({
  "node_modules/@smithy/types/dist-es/encode.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
var init_endpoint = __esm({
  "node_modules/@smithy/types/dist-es/endpoint.js"() {
    (function(EndpointURLScheme2) {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
    })(EndpointURLScheme || (EndpointURLScheme = {}));
  }
});

// node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
  }
});

// node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints = __esm({
  "node_modules/@smithy/types/dist-es/endpoints/index.js"() {
    init_EndpointRuleObject();
    init_ErrorRuleObject();
    init_RuleSetObject();
    init_shared();
    init_TreeRuleObject();
  }
});

// node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream = __esm({
  "node_modules/@smithy/types/dist-es/eventStream.js"() {
  }
});

// node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
var init_checksum2 = __esm({
  "node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
    (function(AlgorithmId2) {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
    })(AlgorithmId || (AlgorithmId = {}));
  }
});

// node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration = __esm({
  "node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
    init_checksum2();
  }
});

// node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration = __esm({
  "node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
  }
});

// node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions2 = __esm({
  "node_modules/@smithy/types/dist-es/extensions/index.js"() {
    init_defaultClientConfiguration();
    init_defaultExtensionConfiguration();
    init_checksum2();
  }
});

// node_modules/@smithy/types/dist-es/feature-ids.js
var init_feature_ids = __esm({
  "node_modules/@smithy/types/dist-es/feature-ids.js"() {
  }
});

// node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
var init_http = __esm({
  "node_modules/@smithy/types/dist-es/http.js"() {
    (function(FieldPosition2) {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
    })(FieldPosition || (FieldPosition = {}));
  }
});

// node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization = __esm({
  "node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity = __esm({
  "node_modules/@smithy/types/dist-es/identity/identity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity = __esm({
  "node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
  }
});

// node_modules/@smithy/types/dist-es/identity/index.js
var init_identity2 = __esm({
  "node_modules/@smithy/types/dist-es/identity/index.js"() {
    init_apiKeyIdentity();
    init_awsCredentialIdentity();
    init_identity();
    init_tokenIdentity();
  }
});

// node_modules/@smithy/types/dist-es/logger.js
var init_logger = __esm({
  "node_modules/@smithy/types/dist-es/logger.js"() {
  }
});

// node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY;
var init_middleware = __esm({
  "node_modules/@smithy/types/dist-es/middleware.js"() {
    SMITHY_CONTEXT_KEY = "__smithy_context";
  }
});

// node_modules/@smithy/types/dist-es/pagination.js
var init_pagination = __esm({
  "node_modules/@smithy/types/dist-es/pagination.js"() {
  }
});

// node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
var init_profile = __esm({
  "node_modules/@smithy/types/dist-es/profile.js"() {
    (function(IniSectionType2) {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
    })(IniSectionType || (IniSectionType = {}));
  }
});

// node_modules/@smithy/types/dist-es/response.js
var init_response = __esm({
  "node_modules/@smithy/types/dist-es/response.js"() {
  }
});

// node_modules/@smithy/types/dist-es/retry.js
var init_retry = __esm({
  "node_modules/@smithy/types/dist-es/retry.js"() {
  }
});

// node_modules/@smithy/types/dist-es/schema/schema.js
var init_schema = __esm({
  "node_modules/@smithy/types/dist-es/schema/schema.js"() {
  }
});

// node_modules/@smithy/types/dist-es/schema/sentinels.js
var init_sentinels = __esm({
  "node_modules/@smithy/types/dist-es/schema/sentinels.js"() {
  }
});

// node_modules/@smithy/types/dist-es/serde.js
var init_serde = __esm({
  "node_modules/@smithy/types/dist-es/serde.js"() {
  }
});

// node_modules/@smithy/types/dist-es/shapes.js
var init_shapes = __esm({
  "node_modules/@smithy/types/dist-es/shapes.js"() {
  }
});

// node_modules/@smithy/types/dist-es/signature.js
var init_signature = __esm({
  "node_modules/@smithy/types/dist-es/signature.js"() {
  }
});

// node_modules/@smithy/types/dist-es/stream.js
var init_stream = __esm({
  "node_modules/@smithy/types/dist-es/stream.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types = __esm({
  "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
var init_transfer = __esm({
  "node_modules/@smithy/types/dist-es/transfer.js"() {
    (function(RequestHandlerProtocol2) {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
    })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
  }
});

// node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow = __esm({
  "node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transform/mutable.js
var init_mutable = __esm({
  "node_modules/@smithy/types/dist-es/transform/mutable.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined = __esm({
  "node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
  }
});

// node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform = __esm({
  "node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
  }
});

// node_modules/@smithy/types/dist-es/uri.js
var init_uri = __esm({
  "node_modules/@smithy/types/dist-es/uri.js"() {
  }
});

// node_modules/@smithy/types/dist-es/util.js
var init_util = __esm({
  "node_modules/@smithy/types/dist-es/util.js"() {
  }
});

// node_modules/@smithy/types/dist-es/waiter.js
var init_waiter = __esm({
  "node_modules/@smithy/types/dist-es/waiter.js"() {
  }
});

// node_modules/@smithy/types/dist-es/index.js
var init_dist_es = __esm({
  "node_modules/@smithy/types/dist-es/index.js"() {
    init_abort();
    init_auth2();
    init_blob_payload_input_types();
    init_checksum();
    init_client();
    init_command();
    init_connection();
    init_crypto();
    init_encode();
    init_endpoint();
    init_endpoints();
    init_eventStream();
    init_extensions2();
    init_feature_ids();
    init_http();
    init_httpHandlerInitialization();
    init_identity2();
    init_logger();
    init_middleware();
    init_pagination();
    init_profile();
    init_response();
    init_retry();
    init_schema();
    init_sentinels();
    init_serde();
    init_shapes();
    init_signature();
    init_stream();
    init_streaming_blob_common_types();
    init_streaming_blob_payload_input_types();
    init_streaming_blob_payload_output_types();
    init_transfer();
    init_client_payload_blob_type_narrow();
    init_mutable();
    init_no_undefined();
    init_type_transform();
    init_uri();
    init_util();
    init_waiter();
  }
});

// node_modules/@smithy/protocol-http/dist-es/Field.js
var init_Field = __esm({
  "node_modules/@smithy/protocol-http/dist-es/Field.js"() {
    init_dist_es();
  }
});

// node_modules/@smithy/protocol-http/dist-es/Fields.js
var init_Fields = __esm({
  "node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpHandler.js
var init_httpHandler = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
var HttpRequest;
var init_httpRequest = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
    HttpRequest = class _HttpRequest {
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static clone(request2) {
        const cloned = new _HttpRequest({
          ...request2,
          headers: { ...request2.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      static isInstance(request2) {
        if (!request2) {
          return false;
        }
        const req = request2;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        return _HttpRequest.clone(this);
      }
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse;
var init_httpResponse = __esm({
  "node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
    HttpResponse = class {
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
  }
});

// node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
var init_isValidHostname = __esm({
  "node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/types.js
var init_types = __esm({
  "node_modules/@smithy/protocol-http/dist-es/types.js"() {
  }
});

// node_modules/@smithy/protocol-http/dist-es/index.js
var init_dist_es2 = __esm({
  "node_modules/@smithy/protocol-http/dist-es/index.js"() {
    init_extensions();
    init_Field();
    init_Fields();
    init_httpHandler();
    init_httpRequest();
    init_httpResponse();
    init_isValidHostname();
    init_types();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var state, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    state = {
      warningEmitted: false
    };
    emitWarningIfUnsupportedVersion = (version) => {
      if (version && !state.warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 18) {
        state.warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
var init_setCredentialFeature = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {}
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value;
}
var init_setFeature = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js"() {
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var init_client2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion();
    init_setCredentialFeature();
    init_setFeature();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var getDateHeader;
var init_getDateHeader = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js"() {
    init_dist_es2();
    getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate;
var init_getSkewCorrectedDate = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
    getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed;
var init_isClockSkewed = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js"() {
    init_getSkewCorrectedDate();
    isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset;
var init_getUpdatedSystemClockOffset = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
    init_isClockSkewed();
    getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
var init_utils = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js"() {
    init_getDateHeader();
    init_getSkewCorrectedDate();
    init_getUpdatedSystemClockOffset();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer;
var init_AwsSdkSigV4Signer = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
    init_dist_es2();
    init_utils();
    throwSigningPropertyError = (name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    };
    validateSigningProperties = async (signingProperties) => {
      const context = throwSigningPropertyError("context", signingProperties.context);
      const config = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const signerFunction = throwSigningPropertyError("signer", config.signer);
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties?.signingRegion;
      const signingRegionSet = signingProperties?.signingRegionSet;
      const signingName = signingProperties?.signingName;
      return {
        config,
        signer,
        signingRegion,
        signingRegionSet,
        signingName
      };
    };
    AwsSdkSigV4Signer = class {
      async sign(httpRequest2, identity, signingProperties) {
        if (!HttpRequest.isInstance(httpRequest2)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = await validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
          const [first, second] = handlerExecutionContext.authSchemes;
          if (first?.name === "sigv4a" && second?.name === "sigv4") {
            signingRegion = second?.signingRegion ?? signingRegion;
            signingName = second?.signingName ?? signingName;
          }
        }
        const signedRequest = await signer.sign(httpRequest2, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error) => {
          const serverTime = error.ServerTime ?? getDateHeader(error.$response);
          if (serverTime) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config.systemClockOffset;
            config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error.$metadata) {
              error.$metadata.clockSkewCorrected = true;
            }
          }
          throw error;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
var AwsSdkSigV4ASigner;
var init_AwsSdkSigV4ASigner = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js"() {
    init_dist_es2();
    init_utils();
    init_AwsSdkSigV4Signer();
    AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
      async sign(httpRequest2, identity, signingProperties) {
        if (!HttpRequest.isInstance(httpRequest2)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
        const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
        const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
        const signedRequest = await signer.sign(httpRequest2, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion: multiRegionOverride,
          signingService: signingName
        });
        return signedRequest;
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js
var getArrayForCommaSeparatedString;
var init_getArrayForCommaSeparatedString = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js"() {
    getArrayForCommaSeparatedString = (str) => typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [];
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js
var getBearerTokenEnvKey;
var init_getBearerTokenEnvKey = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js"() {
    getBearerTokenEnvKey = (signingName) => `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`;
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js
var NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY, NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY, NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
var init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js"() {
    init_getArrayForCommaSeparatedString();
    init_getBearerTokenEnvKey();
    NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
    NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";
    NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = {
      environmentVariableSelector: (env2, options) => {
        if (options?.signingName) {
          const bearerTokenKey = getBearerTokenEnvKey(options.signingName);
          if (bearerTokenKey in env2)
            return ["httpBearerAuth"];
        }
        if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env2))
          return void 0;
        return getArrayForCommaSeparatedString(env2[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY]);
      },
      configFileSelector: (profile) => {
        if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile))
          return void 0;
        return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY]);
      },
      default: []
    };
  }
});

// node_modules/@smithy/core/dist-es/getSmithyContext.js
var init_getSmithyContext = __esm({
  "node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    init_dist_es();
  }
});

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var getSmithyContext;
var init_getSmithyContext2 = __esm({
  "node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js"() {
    init_dist_es();
    getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});
  }
});

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js"() {
    normalizeProvider = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  }
});

// node_modules/@smithy/util-middleware/dist-es/index.js
var init_dist_es3 = __esm({
  "node_modules/@smithy/util-middleware/dist-es/index.js"() {
    init_getSmithyContext2();
    init_normalizeProvider();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions;
var init_resolveAuthOptions = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js"() {
    resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
      if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
      }
      const preferredAuthOptions = [];
      for (const preferredSchemeName of authSchemePreference) {
        for (const candidateAuthOption of candidateAuthOptions) {
          const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
          if (candidateAuthSchemeName === preferredSchemeName) {
            preferredAuthOptions.push(candidateAuthOption);
          }
        }
      }
      for (const candidateAuthOption of candidateAuthOptions) {
        if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
      return preferredAuthOptions;
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map2 = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map2.set(scheme.schemeId, scheme);
  }
  return map2;
}
var httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    init_dist_es();
    init_dist_es3();
    init_resolveAuthOptions();
    httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
      const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
      const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
      const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = getSmithyContext(context);
      const failureReasons = [];
      for (const option of resolvedOptions) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: "endpointV2Middleware"
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
var deserializerMiddleware, findHeader;
var init_deserializerMiddleware = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js"() {
    init_dist_es2();
    deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error) {
        Object.defineProperty(error, "$response", {
          value: response
        });
        if (!("$metadata" in error)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error.message += "\n  " + hint;
          } catch (e5) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error.$responseBodyText !== "undefined") {
            if (error.$response) {
              error.$response.body = error.$responseBodyText;
            }
          }
          try {
            if (HttpResponse.isInstance(response)) {
              const { headers = {} } = response;
              const headerEntries = Object.entries(headers);
              error.$metadata = {
                httpStatusCode: response.statusCode,
                requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (e5) {
          }
        }
        throw error;
      }
    };
    findHeader = (pattern, headers) => {
      return (headers.find(([k5]) => {
        return k5.match(pattern);
      }) || [void 0, void 0])[1];
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
var serializerMiddleware;
var init_serializerMiddleware = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js"() {
    serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
      const endpointConfig = options;
      const endpoint = context.endpointV2?.url && endpointConfig.urlParser ? async () => endpointConfig.urlParser(context.endpointV2.url) : endpointConfig.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request2 = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request: request2
      });
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    }
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption;
var init_serdePlugin = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js"() {
    init_deserializerMiddleware();
    init_serializerMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
  }
});

// node_modules/@smithy/middleware-serde/dist-es/index.js
var init_dist_es4 = __esm({
  "node_modules/@smithy/middleware-serde/dist-es/index.js"() {
    init_deserializerMiddleware();
    init_serdePlugin();
    init_serializerMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions;
var init_getHttpAuthSchemePlugin = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    init_dist_es4();
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption.name
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    init_dist_es2();
    init_dist_es();
    init_dist_es3();
    defaultErrorHandler = (signingProperties) => (error) => {
      throw error;
    };
    defaultSuccessHandler = (httpResponse, signingProperties) => {
    };
    httpSigningMiddleware = (config) => (next, context) => async (args) => {
      if (!HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = getSmithyContext(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    };
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: "retryMiddleware"
    };
    getHttpSigningPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider2;
var init_normalizeProvider2 = __esm({
  "node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider2 = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  }
});

// node_modules/@smithy/core/dist-es/pagination/createPaginator.js
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return async function* paginateOperation(config, input, ...additionalArguments) {
    const _input = input;
    let token = config.startingToken ?? _input[inputTokenName];
    let hasNext = true;
    let page;
    while (hasNext) {
      _input[inputTokenName] = token;
      if (pageSizeTokenName) {
        _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config.client, input, config.withCommand, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  };
}
var makePagedClientRequest, get;
var init_createPaginator = __esm({
  "node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    makePagedClientRequest = async (CommandCtor, client, input, withCommand = (_2) => _2, ...args) => {
      let command = new CommandCtor(input);
      command = withCommand(command) ?? command;
      return await client.send(command, ...args);
    };
    get = (fromObject, path) => {
      let cursor = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
          return void 0;
        }
        cursor = cursor[step];
      }
      return cursor;
    };
  }
});

// node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer;
var init_dist_es5 = __esm({
  "node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
    isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
  }
});

// node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromArrayBuffer, fromString;
var init_dist_es6 = __esm({
  "node_modules/@smithy/util-buffer-from/dist-es/index.js"() {
    init_dist_es5();
    fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return Buffer2.from(input, offset, length);
    };
    fromString = (input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
    };
  }
});

// node_modules/@smithy/util-base64/dist-es/fromBase64.js
var BASE64_REGEX, fromBase64;
var init_fromBase64 = __esm({
  "node_modules/@smithy/util-base64/dist-es/fromBase64.js"() {
    init_dist_es6();
    BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    fromBase64 = (input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = fromString(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf8;
var init_fromUtf8 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/fromUtf8.js"() {
    init_dist_es6();
    fromUtf8 = (input) => {
      const buf = fromString(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array;
var init_toUint8Array = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
    init_fromUtf8();
    toUint8Array = (data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var toUtf8;
var init_toUtf8 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUtf8.js"() {
    init_dist_es6();
    toUtf8 = (input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    };
  }
});

// node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es7 = __esm({
  "node_modules/@smithy/util-utf8/dist-es/index.js"() {
    init_fromUtf8();
    init_toUint8Array();
    init_toUtf8();
  }
});

// node_modules/@smithy/util-base64/dist-es/toBase64.js
var toBase64;
var init_toBase64 = __esm({
  "node_modules/@smithy/util-base64/dist-es/toBase64.js"() {
    init_dist_es6();
    init_dist_es7();
    toBase64 = (_input) => {
      let input;
      if (typeof _input === "string") {
        input = fromUtf8(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    };
  }
});

// node_modules/@smithy/util-base64/dist-es/index.js
var init_dist_es8 = __esm({
  "node_modules/@smithy/util-base64/dist-es/index.js"() {
    init_fromBase64();
    init_toBase64();
  }
});

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
var init_transforms = __esm({
  "node_modules/@smithy/util-stream/dist-es/blob/transforms.js"() {
    init_dist_es8();
    init_dist_es7();
    init_Uint8ArrayBlobAdapter();
  }
});

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter;
var init_Uint8ArrayBlobAdapter = __esm({
  "node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js"() {
    init_transforms();
    Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
      static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
          case "string":
            return transformFromString(source, encoding);
          default:
            throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
      }
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
      }
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.js
import { Duplex } from "stream";
var ChecksumStream;
var init_ChecksumStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.js"() {
    init_dist_es8();
    ChecksumStream = class extends Duplex {
      constructor({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) {
        super();
        if (typeof source.pipe === "function") {
          this.source = source;
        } else {
          throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
        }
        this.base64Encoder = base64Encoder ?? toBase64;
        this.expectedChecksum = expectedChecksum;
        this.checksum = checksum;
        this.checksumSourceLocation = checksumSourceLocation;
        this.source.pipe(this);
      }
      _read(size) {
      }
      _write(chunk, encoding, callback) {
        try {
          this.checksum.update(chunk);
          this.push(chunk);
        } catch (e5) {
          return callback(e5);
        }
        return callback();
      }
      async _final(callback) {
        try {
          const digest = await this.checksum.digest();
          const received = this.base64Encoder(digest);
          if (this.expectedChecksum !== received) {
            return callback(new Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${received}" in response header "${this.checksumSourceLocation}".`));
          }
        } catch (e5) {
          return callback(e5);
        }
        this.push(null);
        return callback();
      }
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/stream-type-check.js
var isReadableStream, isBlob;
var init_stream_type_check = __esm({
  "node_modules/@smithy/util-stream/dist-es/stream-type-check.js"() {
    isReadableStream = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);
    isBlob = (blob) => {
      return typeof Blob === "function" && (blob?.constructor?.name === Blob.name || blob instanceof Blob);
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
var ReadableStreamRef, ChecksumStream2;
var init_ChecksumStream_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js"() {
    ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {
    };
    ChecksumStream2 = class extends ReadableStreamRef {
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
var createChecksumStream;
var init_createChecksumStream_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js"() {
    init_dist_es8();
    init_stream_type_check();
    init_ChecksumStream_browser();
    createChecksumStream = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
      if (!isReadableStream(source)) {
        throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
      }
      const encoder = base64Encoder ?? toBase64;
      if (typeof TransformStream !== "function") {
        throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
      }
      const transform = new TransformStream({
        start() {
        },
        async transform(chunk, controller) {
          checksum.update(chunk);
          controller.enqueue(chunk);
        },
        async flush(controller) {
          const digest = await checksum.digest();
          const received = encoder(digest);
          if (expectedChecksum !== received) {
            const error = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}" in response header "${checksumSourceLocation}".`);
            controller.error(error);
          } else {
            controller.terminate();
          }
        }
      });
      source.pipeThrough(transform);
      const readable = transform.readable;
      Object.setPrototypeOf(readable, ChecksumStream2.prototype);
      return readable;
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.js
function createChecksumStream2(init) {
  if (typeof ReadableStream === "function" && isReadableStream(init.source)) {
    return createChecksumStream(init);
  }
  return new ChecksumStream(init);
}
var init_createChecksumStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.js"() {
    init_stream_type_check();
    init_ChecksumStream();
    init_createChecksumStream_browser();
  }
});

// node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js
var ByteArrayCollector;
var init_ByteArrayCollector = __esm({
  "node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js"() {
    ByteArrayCollector = class {
      constructor(allocByteArray) {
        this.allocByteArray = allocByteArray;
        this.byteLength = 0;
        this.byteArrays = [];
      }
      push(byteArray) {
        this.byteArrays.push(byteArray);
        this.byteLength += byteArray.byteLength;
      }
      flush() {
        if (this.byteArrays.length === 1) {
          const bytes = this.byteArrays[0];
          this.reset();
          return bytes;
        }
        const aggregation = this.allocByteArray(this.byteLength);
        let cursor = 0;
        for (let i5 = 0; i5 < this.byteArrays.length; ++i5) {
          const bytes = this.byteArrays[i5];
          aggregation.set(bytes, cursor);
          cursor += bytes.byteLength;
        }
        this.reset();
        return aggregation;
      }
      reset() {
        this.byteArrays = [];
        this.byteLength = 0;
      }
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js
function createBufferedReadableStream(upstream, size, logger2) {
  const reader = upstream.getReader();
  let streamBufferingLoggedWarning = false;
  let bytesSeen = 0;
  const buffers = ["", new ByteArrayCollector((size2) => new Uint8Array(size2))];
  let mode = -1;
  const pull = async (controller) => {
    const { value, done } = await reader.read();
    const chunk = value;
    if (done) {
      if (mode !== -1) {
        const remainder = flush(buffers, mode);
        if (sizeOf(remainder) > 0) {
          controller.enqueue(remainder);
        }
      }
      controller.close();
    } else {
      const chunkMode = modeOf(chunk, false);
      if (mode !== chunkMode) {
        if (mode >= 0) {
          controller.enqueue(flush(buffers, mode));
        }
        mode = chunkMode;
      }
      if (mode === -1) {
        controller.enqueue(chunk);
        return;
      }
      const chunkSize = sizeOf(chunk);
      bytesSeen += chunkSize;
      const bufferSize = sizeOf(buffers[mode]);
      if (chunkSize >= size && bufferSize === 0) {
        controller.enqueue(chunk);
      } else {
        const newSize = merge(buffers, mode, chunk);
        if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
          streamBufferingLoggedWarning = true;
          logger2?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
        }
        if (newSize >= size) {
          controller.enqueue(flush(buffers, mode));
        } else {
          await pull(controller);
        }
      }
    }
  };
  return new ReadableStream({
    pull
  });
}
function merge(buffers, mode, chunk) {
  switch (mode) {
    case 0:
      buffers[0] += chunk;
      return sizeOf(buffers[0]);
    case 1:
    case 2:
      buffers[mode].push(chunk);
      return sizeOf(buffers[mode]);
  }
}
function flush(buffers, mode) {
  switch (mode) {
    case 0:
      const s5 = buffers[0];
      buffers[0] = "";
      return s5;
    case 1:
    case 2:
      return buffers[mode].flush();
  }
  throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
}
function sizeOf(chunk) {
  return chunk?.byteLength ?? chunk?.length ?? 0;
}
function modeOf(chunk, allowBuffer = true) {
  if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) {
    return 2;
  }
  if (chunk instanceof Uint8Array) {
    return 1;
  }
  if (typeof chunk === "string") {
    return 0;
  }
  return -1;
}
var init_createBufferedReadableStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js"() {
    init_ByteArrayCollector();
  }
});

// node_modules/@smithy/util-stream/dist-es/createBufferedReadable.js
import { Readable } from "stream";
function createBufferedReadable(upstream, size, logger2) {
  if (isReadableStream(upstream)) {
    return createBufferedReadableStream(upstream, size, logger2);
  }
  const downstream = new Readable({ read() {
  } });
  let streamBufferingLoggedWarning = false;
  let bytesSeen = 0;
  const buffers = [
    "",
    new ByteArrayCollector((size2) => new Uint8Array(size2)),
    new ByteArrayCollector((size2) => Buffer.from(new Uint8Array(size2)))
  ];
  let mode = -1;
  upstream.on("data", (chunk) => {
    const chunkMode = modeOf(chunk, true);
    if (mode !== chunkMode) {
      if (mode >= 0) {
        downstream.push(flush(buffers, mode));
      }
      mode = chunkMode;
    }
    if (mode === -1) {
      downstream.push(chunk);
      return;
    }
    const chunkSize = sizeOf(chunk);
    bytesSeen += chunkSize;
    const bufferSize = sizeOf(buffers[mode]);
    if (chunkSize >= size && bufferSize === 0) {
      downstream.push(chunk);
    } else {
      const newSize = merge(buffers, mode, chunk);
      if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
        streamBufferingLoggedWarning = true;
        logger2?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
      }
      if (newSize >= size) {
        downstream.push(flush(buffers, mode));
      }
    }
  });
  upstream.on("end", () => {
    if (mode !== -1) {
      const remainder = flush(buffers, mode);
      if (sizeOf(remainder) > 0) {
        downstream.push(remainder);
      }
    }
    downstream.push(null);
  });
  return downstream;
}
var init_createBufferedReadable = __esm({
  "node_modules/@smithy/util-stream/dist-es/createBufferedReadable.js"() {
    init_ByteArrayCollector();
    init_createBufferedReadableStream();
    init_stream_type_check();
  }
});

// node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js
import { Readable as Readable2 } from "stream";
var getAwsChunkedEncodingStream;
var init_getAwsChunkedEncodingStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js"() {
    getAwsChunkedEncodingStream = (readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const awsChunkedEncodingStream = new Readable2({ read: () => {
      } });
      readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
      });
      readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
          awsChunkedEncodingStream.push(`\r
`);
        }
        awsChunkedEncodingStream.push(null);
      });
      return awsChunkedEncodingStream;
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/headStream.browser.js
async function headStream(stream, bytes) {
  let byteLengthCounter = 0;
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      byteLengthCounter += value?.byteLength ?? 0;
    }
    if (byteLengthCounter >= bytes) {
      break;
    }
    isDone = done;
  }
  reader.releaseLock();
  const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
  let offset = 0;
  for (const chunk of chunks) {
    if (chunk.byteLength > collected.byteLength - offset) {
      collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
      break;
    } else {
      collected.set(chunk, offset);
    }
    offset += chunk.length;
  }
  return collected;
}
var init_headStream_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/headStream.browser.js"() {
  }
});

// node_modules/@smithy/util-stream/dist-es/headStream.js
import { Writable } from "stream";
var headStream2, Collector;
var init_headStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/headStream.js"() {
    init_headStream_browser();
    init_stream_type_check();
    headStream2 = (stream, bytes) => {
      if (isReadableStream(stream)) {
        return headStream(stream, bytes);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        collector.limit = bytes;
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes2 = new Uint8Array(Buffer.concat(this.buffers));
          resolve(bytes2);
        });
      });
    };
    Collector = class extends Writable {
      constructor() {
        super(...arguments);
        this.buffers = [];
        this.limit = Infinity;
        this.bytesBuffered = 0;
      }
      _write(chunk, encoding, callback) {
        this.buffers.push(chunk);
        this.bytesBuffered += chunk.byteLength ?? 0;
        if (this.bytesBuffered >= this.limit) {
          const excess = this.bytesBuffered - this.limit;
          const tailBuffer = this.buffers[this.buffers.length - 1];
          this.buffers[this.buffers.length - 1] = tailBuffer.subarray(0, tailBuffer.byteLength - excess);
          this.emit("finish");
        }
        callback();
      }
    };
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri, hexEncode;
var init_escape_uri = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
    escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
    hexEncode = (c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`;
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
    init_escape_uri();
  }
});

// node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es9 = __esm({
  "node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
    init_escape_uri();
    init_escape_uri_path();
  }
});

// node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i5 = 0, iLen = value.length; i5 < iLen; i5++) {
        parts.push(`${key}=${escapeUri(value[i5])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
var init_dist_es10 = __esm({
  "node_modules/@smithy/querystring-builder/dist-es/index.js"() {
    init_dist_es9();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/constants.js
var NODEJS_TIMEOUT_ERROR_CODES;
var init_constants = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/constants.js"() {
    NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
var getTransformedHeaders;
var init_get_transformed_headers = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js"() {
    getTransformedHeaders = (headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/timing.js
var timing;
var init_timing = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/timing.js"() {
    timing = {
      setTimeout: (cb2, ms) => setTimeout(cb2, ms),
      clearTimeout: (timeoutId) => clearTimeout(timeoutId)
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
var DEFER_EVENT_LISTENER_TIME, setConnectionTimeout;
var init_set_connection_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js"() {
    init_timing();
    DEFER_EVENT_LISTENER_TIME = 1e3;
    setConnectionTimeout = (request2, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return -1;
      }
      const registerTimeout = (offset) => {
        const timeoutId = timing.setTimeout(() => {
          request2.destroy();
          reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError"
          }));
        }, timeoutInMs - offset);
        const doWithSocket = (socket) => {
          if (socket?.connecting) {
            socket.on("connect", () => {
              timing.clearTimeout(timeoutId);
            });
          } else {
            timing.clearTimeout(timeoutId);
          }
        };
        if (request2.socket) {
          doWithSocket(request2.socket);
        } else {
          request2.on("socket", doWithSocket);
        }
      };
      if (timeoutInMs < 2e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, DEFER_EVENT_LISTENER_TIME), DEFER_EVENT_LISTENER_TIME);
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
var DEFER_EVENT_LISTENER_TIME2, setSocketKeepAlive;
var init_set_socket_keep_alive = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js"() {
    init_timing();
    DEFER_EVENT_LISTENER_TIME2 = 3e3;
    setSocketKeepAlive = (request2, { keepAlive, keepAliveMsecs }, deferTimeMs = DEFER_EVENT_LISTENER_TIME2) => {
      if (keepAlive !== true) {
        return -1;
      }
      const registerListener = () => {
        if (request2.socket) {
          request2.socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
        } else {
          request2.on("socket", (socket) => {
            socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
          });
        }
      };
      if (deferTimeMs === 0) {
        registerListener();
        return 0;
      }
      return timing.setTimeout(registerListener, deferTimeMs);
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
var DEFER_EVENT_LISTENER_TIME3, setSocketTimeout;
var init_set_socket_timeout = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js"() {
    init_node_http_handler();
    init_timing();
    DEFER_EVENT_LISTENER_TIME3 = 3e3;
    setSocketTimeout = (request2, reject, timeoutInMs = DEFAULT_REQUEST_TIMEOUT) => {
      const registerTimeout = (offset) => {
        const timeout = timeoutInMs - offset;
        const onTimeout = () => {
          request2.destroy();
          reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
        };
        if (request2.socket) {
          request2.socket.setTimeout(timeout, onTimeout);
          request2.on("close", () => request2.socket?.removeListener("timeout", onTimeout));
        } else {
          request2.setTimeout(timeout, onTimeout);
        }
      };
      if (0 < timeoutInMs && timeoutInMs < 6e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, timeoutInMs === 0 ? 0 : DEFER_EVENT_LISTENER_TIME3), DEFER_EVENT_LISTENER_TIME3);
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/write-request-body.js
import { Readable as Readable3 } from "stream";
async function writeRequestBody(httpRequest2, request2, maxContinueTimeoutMs = MIN_WAIT_TIME) {
  const headers = request2.headers ?? {};
  const expect = headers["Expect"] || headers["expect"];
  let timeoutId = -1;
  let sendBody = true;
  if (expect === "100-continue") {
    sendBody = await Promise.race([
      new Promise((resolve) => {
        timeoutId = Number(timing.setTimeout(() => resolve(true), Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
      }),
      new Promise((resolve) => {
        httpRequest2.on("continue", () => {
          timing.clearTimeout(timeoutId);
          resolve(true);
        });
        httpRequest2.on("response", () => {
          timing.clearTimeout(timeoutId);
          resolve(false);
        });
        httpRequest2.on("error", () => {
          timing.clearTimeout(timeoutId);
          resolve(false);
        });
      })
    ]);
  }
  if (sendBody) {
    writeBody(httpRequest2, request2.body);
  }
}
function writeBody(httpRequest2, body) {
  if (body instanceof Readable3) {
    body.pipe(httpRequest2);
    return;
  }
  if (body) {
    if (Buffer.isBuffer(body) || typeof body === "string") {
      httpRequest2.end(body);
      return;
    }
    const uint8 = body;
    if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
      httpRequest2.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
      return;
    }
    httpRequest2.end(Buffer.from(body));
    return;
  }
  httpRequest2.end();
}
var MIN_WAIT_TIME;
var init_write_request_body = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/write-request-body.js"() {
    init_timing();
    MIN_WAIT_TIME = 6e3;
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
import { Agent as hAgent, request as hRequest } from "http";
import { Agent as hsAgent, request as hsRequest } from "https";
var DEFAULT_REQUEST_TIMEOUT, NodeHttpHandler;
var init_node_http_handler = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js"() {
    init_dist_es2();
    init_dist_es10();
    init_constants();
    init_get_transformed_headers();
    init_set_connection_timeout();
    init_set_socket_keep_alive();
    init_set_socket_timeout();
    init_timing();
    init_write_request_body();
    DEFAULT_REQUEST_TIMEOUT = 0;
    NodeHttpHandler = class _NodeHttpHandler {
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler(instanceOrOptions);
      }
      static checkSocketUsage(agent, socketWarningTimestamp, logger2 = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = sockets[origin]?.length ?? 0;
            const requestsEnqueued = requests[origin]?.length ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              logger2?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      resolveDefaultConfig(options) {
        const { requestTimeout: requestTimeout2, connectionTimeout, socketTimeout, socketAcquisitionWarningTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout2 ?? socketTimeout,
          socketAcquisitionWarningTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof hAgent || typeof httpAgent?.destroy === "function") {
              return httpAgent;
            }
            return new hAgent({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof hsAgent || typeof httpsAgent?.destroy === "function") {
              return httpsAgent;
            }
            return new hsAgent({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger: console
        };
      }
      destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
      }
      async handle(request2, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const timeouts = [];
          const resolve = async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _resolve(arg);
          };
          const reject = async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _reject(arg);
          };
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request2.protocol === "https:";
          const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
          timeouts.push(timing.setTimeout(() => {
            this.socketWarningTimestamp = _NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, this.config.logger);
          }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3)));
          const queryString = buildQueryString(request2.query || {});
          let auth = void 0;
          if (request2.username != null || request2.password != null) {
            const username = request2.username ?? "";
            const password = request2.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request2.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request2.fragment) {
            path += `#${request2.fragment}`;
          }
          let hostname = request2.hostname ?? "";
          if (hostname[0] === "[" && hostname.endsWith("]")) {
            hostname = request2.hostname.slice(1, -1);
          } else {
            hostname = request2.hostname;
          }
          const nodeHttpsOptions = {
            headers: request2.headers,
            host: hostname,
            method: request2.method,
            path,
            port: request2.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? hsRequest : hRequest;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          if (abortSignal) {
            const onAbort = () => {
              req.destroy();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          timeouts.push(setConnectionTimeout(req, reject, this.config.connectionTimeout));
          timeouts.push(setSocketTimeout(req, reject, this.config.requestTimeout));
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            timeouts.push(setSocketKeepAlive(req, {
              keepAlive: httpAgent.keepAlive,
              keepAliveMsecs: httpAgent.keepAliveMsecs
            }));
          }
          writeRequestBodyPromise = writeRequestBody(req, request2, this.config.requestTimeout).catch((e5) => {
            timeouts.forEach(timing.clearTimeout);
            return _reject(e5);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
var init_node_http2_connection_pool = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js"() {
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js
var init_node_http2_connection_manager = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js"() {
    init_node_http2_connection_pool();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js
var init_node_http2_handler = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js"() {
    init_dist_es2();
    init_dist_es10();
    init_get_transformed_headers();
    init_node_http2_connection_manager();
    init_write_request_body();
  }
});

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js
import { Writable as Writable2 } from "stream";
var Collector2;
var init_collector = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js"() {
    Collector2 = class extends Writable2 {
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
  }
});

// node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js
async function collectReadableStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
var streamCollector, isReadableStreamInstance;
var init_stream_collector = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js"() {
    init_collector();
    streamCollector = (stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector2();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    };
    isReadableStreamInstance = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;
  }
});

// node_modules/@smithy/node-http-handler/dist-es/index.js
var init_dist_es11 = __esm({
  "node_modules/@smithy/node-http-handler/dist-es/index.js"() {
    init_node_http_handler();
    init_node_http2_handler();
    init_stream_collector();
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
var init_create_request = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/create-request.js"() {
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
var init_request_timeout = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js"() {
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var init_fetch_http_handler = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js"() {
    init_dist_es2();
    init_dist_es10();
    init_create_request();
    init_request_timeout();
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
var streamCollector2;
var init_stream_collector2 = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js"() {
    init_dist_es8();
    streamCollector2 = async (stream) => {
      if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
        if (Blob.prototype.arrayBuffer !== void 0) {
          return new Uint8Array(await stream.arrayBuffer());
        }
        return collectBlob(stream);
      }
      return collectStream(stream);
    };
  }
});

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
var init_dist_es12 = __esm({
  "node_modules/@smithy/fetch-http-handler/dist-es/index.js"() {
    init_fetch_http_handler();
    init_stream_collector2();
  }
});

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i5 = 0; i5 < encoded.length; i5 += 2) {
    const encodedByte = encoded.slice(i5, i5 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i5 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i5 = 0; i5 < bytes.byteLength; i5++) {
    out += SHORT_TO_HEX[bytes[i5]];
  }
  return out;
}
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_dist_es13 = __esm({
  "node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
    SHORT_TO_HEX = {};
    HEX_TO_SHORT = {};
    for (let i5 = 0; i5 < 256; i5++) {
      let encodedByte = i5.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i5] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i5;
    }
  }
});

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED, sdkStreamMixin, isBlobInstance;
var init_sdk_stream_mixin_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js"() {
    init_dist_es12();
    init_dist_es8();
    init_dist_es13();
    init_dist_es7();
    init_stream_type_check();
    ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    sdkStreamMixin = (stream) => {
      if (!isBlobInstance(stream) && !isReadableStream(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await streamCollector2(stream);
      };
      const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return toBase64(buf);
          } else if (encoding === "hex") {
            return toHex(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return toUtf8(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if (isReadableStream(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        }
      });
    };
    isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
  }
});

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js
import { Readable as Readable4 } from "stream";
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2, sdkStreamMixin2;
var init_sdk_stream_mixin = __esm({
  "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js"() {
    init_dist_es11();
    init_dist_es6();
    init_sdk_stream_mixin_browser();
    ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2 = "The stream has already been transformed.";
    sdkStreamMixin2 = (stream) => {
      if (!(stream instanceof Readable4)) {
        try {
          return sdkStreamMixin(stream);
        } catch (e5) {
          const name = stream?.__proto__?.constructor?.name || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2);
        }
        transformed = true;
        return await streamCollector(stream);
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return fromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new TextDecoder(encoding);
            return decoder.decode(buf);
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED2);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof Readable4.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
          }
          transformed = true;
          return Readable4.toWeb(stream);
        }
      });
    };
  }
});

// node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
async function splitStream(stream) {
  if (typeof stream.stream === "function") {
    stream = stream.stream();
  }
  const readableStream = stream;
  return readableStream.tee();
}
var init_splitStream_browser = __esm({
  "node_modules/@smithy/util-stream/dist-es/splitStream.browser.js"() {
  }
});

// node_modules/@smithy/util-stream/dist-es/splitStream.js
import { PassThrough } from "stream";
async function splitStream2(stream) {
  if (isReadableStream(stream) || isBlob(stream)) {
    return splitStream(stream);
  }
  const stream1 = new PassThrough();
  const stream2 = new PassThrough();
  stream.pipe(stream1);
  stream.pipe(stream2);
  return [stream1, stream2];
}
var init_splitStream = __esm({
  "node_modules/@smithy/util-stream/dist-es/splitStream.js"() {
    init_splitStream_browser();
    init_stream_type_check();
  }
});

// node_modules/@smithy/util-stream/dist-es/index.js
var init_dist_es14 = __esm({
  "node_modules/@smithy/util-stream/dist-es/index.js"() {
    init_Uint8ArrayBlobAdapter();
    init_ChecksumStream();
    init_createChecksumStream();
    init_createBufferedReadable();
    init_getAwsChunkedEncodingStream();
    init_headStream();
    init_sdk_stream_mixin();
    init_splitStream();
    init_stream_type_check();
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var collectBody;
var init_collect_stream_body = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js"() {
    init_dist_es14();
    collectBody = async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return Uint8ArrayBlobAdapter.mutate(await fromContext);
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c5) {
    return "%" + c5.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
var resolvedPath;
var init_resolve_path = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js"() {
    init_extended_encode_uri_component();
    resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var RequestBuilder;
var init_requestBuilder = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js"() {
    init_dist_es2();
    init_resolve_path();
    RequestBuilder = class {
      constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new HttpRequest({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers
        });
      }
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      h(headers) {
        this.headers = headers;
        return this;
      }
      q(query) {
        this.query = query;
        return this;
      }
      b(body) {
        this.body = body;
        return this;
      }
      m(method) {
        this.method = method;
        return this;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
var init_protocols = __esm({
  "node_modules/@smithy/core/dist-es/submodules/protocols/index.js"() {
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_requestBuilder();
    init_resolve_path();
  }
});

// node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
var init_requestBuilder2 = __esm({
  "node_modules/@smithy/core/dist-es/protocols/requestBuilder.js"() {
    init_protocols();
  }
});

// node_modules/@smithy/core/dist-es/setFeature.js
function setFeature2(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
var init_setFeature2 = __esm({
  "node_modules/@smithy/core/dist-es/setFeature.js"() {
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      constructor(config) {
        this.authSchemes = /* @__PURE__ */ new Map();
        for (const [key, value] of Object.entries(config)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var init_httpApiKeyAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    init_dist_es2();
    init_dist_es();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var init_httpBearerAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    init_dist_es2();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      async sign(httpRequest2, identity, signingProperties) {
        return httpRequest2;
      }
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
    memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    };
  }
});

// node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// node_modules/@smithy/core/dist-es/index.js
var init_dist_es15 = __esm({
  "node_modules/@smithy/core/dist-es/index.js"() {
    init_getSmithyContext();
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_normalizeProvider2();
    init_createPaginator();
    init_requestBuilder2();
    init_setFeature2();
    init_util_identity_and_auth();
  }
});

// node_modules/@smithy/property-provider/dist-es/ProviderError.js
var ProviderError;
var init_ProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/ProviderError.js"() {
    ProviderError = class _ProviderError extends Error {
      constructor(message, options = true) {
        let logger2;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger2 = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger2 = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.name = "ProviderError";
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger2?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
var CredentialsProviderError;
var init_CredentialsProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js"() {
    init_ProviderError();
    CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
      constructor(message, options = true) {
        super(message, options);
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
var TokenProviderError;
var init_TokenProviderError = __esm({
  "node_modules/@smithy/property-provider/dist-es/TokenProviderError.js"() {
    init_ProviderError();
    TokenProviderError = class _TokenProviderError extends ProviderError {
      constructor(message, options = true) {
        super(message, options);
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, _TokenProviderError.prototype);
      }
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/chain.js
var chain;
var init_chain = __esm({
  "node_modules/@smithy/property-provider/dist-es/chain.js"() {
    init_ProviderError();
    chain = (...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/fromStatic.js
var fromStatic;
var init_fromStatic = __esm({
  "node_modules/@smithy/property-provider/dist-es/fromStatic.js"() {
    fromStatic = (staticValue) => () => Promise.resolve(staticValue);
  }
});

// node_modules/@smithy/property-provider/dist-es/memoize.js
var memoize;
var init_memoize = __esm({
  "node_modules/@smithy/property-provider/dist-es/memoize.js"() {
    memoize = (provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    };
  }
});

// node_modules/@smithy/property-provider/dist-es/index.js
var init_dist_es16 = __esm({
  "node_modules/@smithy/property-provider/dist-es/index.js"() {
    init_CredentialsProviderError();
    init_ProviderError();
    init_TokenProviderError();
    init_chain();
    init_fromStatic();
    init_memoize();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
var resolveAwsSdkSigV4AConfig, NODE_SIGV4A_CONFIG_OPTIONS;
var init_resolveAwsSdkSigV4AConfig = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js"() {
    init_dist_es15();
    init_dist_es16();
    resolveAwsSdkSigV4AConfig = (config) => {
      config.sigv4aSigningRegionSet = normalizeProvider2(config.sigv4aSigningRegionSet);
      return config;
    };
    NODE_SIGV4A_CONFIG_OPTIONS = {
      environmentVariableSelector(env2) {
        if (env2.AWS_SIGV4A_SIGNING_REGION_SET) {
          return env2.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_2) => _2.trim());
        }
        throw new ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
          tryNextLink: true
        });
      },
      configFileSelector(profile) {
        if (profile.sigv4a_signing_region_set) {
          return (profile.sigv4a_signing_region_set ?? "").split(",").map((_2) => _2.trim());
        }
        throw new ProviderError("sigv4a_signing_region_set not set in profile.", {
          tryNextLink: true
        });
      },
      default: void 0
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, EXPIRES_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER, GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER, TOKEN_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, ALGORITHM_IDENTIFIER, EVENT_ALGORITHM_IDENTIFIER, UNSIGNED_PAYLOAD, MAX_CACHE_SIZE, KEY_TYPE_IDENTIFIER, MAX_PRESIGNED_TTL;
var init_constants2 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/constants.js"() {
    ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    AUTH_HEADER = "authorization";
    AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    DATE_HEADER = "date";
    GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    SHA256_HEADER = "x-amz-content-sha256";
    TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    PROXY_HEADER_PATTERN = /^proxy-/;
    SEC_HEADER_PATTERN = /^sec-/;
    ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    MAX_CACHE_SIZE = 50;
    KEY_TYPE_IDENTIFIER = "aws4_request";
    MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  }
});

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache, cacheQueue, createScope, getSigningKey, hmac;
var init_credentialDerivation = __esm({
  "node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js"() {
    init_dist_es13();
    init_dist_es7();
    init_constants2();
    signingKeyCache = {};
    cacheQueue = [];
    createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
    getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    };
    hmac = (ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update(toUint8Array(data));
      return hash.digest();
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders;
var init_getCanonicalHeaders = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js"() {
    init_constants2();
    getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash;
var init_getPayloadHash = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js"() {
    init_dist_es5();
    init_dist_es13();
    init_dist_es7();
    init_constants2();
    getPayloadHash = async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
function negate(bytes) {
  for (let i5 = 0; i5 < 8; i5++) {
    bytes[i5] ^= 255;
  }
  for (let i5 = 7; i5 > -1; i5--) {
    bytes[i5]++;
    if (bytes[i5] !== 0)
      break;
  }
}
var HeaderFormatter, HEADER_VALUE_TYPE, UUID_PATTERN, Int64;
var init_HeaderFormatter = __esm({
  "node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js"() {
    init_dist_es13();
    init_dist_es7();
    HeaderFormatter = class {
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    (function(HEADER_VALUE_TYPE3) {
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
    UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    Int64 = class _Int64 {
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i5 = 7, remaining = Math.abs(Math.round(number)); i5 > -1 && remaining > 0; i5--, remaining /= 256) {
          bytes[i5] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader;
var init_headerUtil = __esm({
  "node_modules/@smithy/signature-v4/dist-es/headerUtil.js"() {
    hasHeader = (soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery;
var init_moveHeadersToQuery = __esm({
  "node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js"() {
    init_dist_es2();
    moveHeadersToQuery = (request2, options = {}) => {
      const { headers, query = {} } = HttpRequest.clone(request2);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request2,
        headers,
        query
      };
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest;
var init_prepareRequest = __esm({
  "node_modules/@smithy/signature-v4/dist-es/prepareRequest.js"() {
    init_dist_es2();
    init_constants2();
    prepareRequest = (request2) => {
      request2 = HttpRequest.clone(request2);
      for (const headerName of Object.keys(request2.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request2.headers[headerName];
        }
      }
      return request2;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery;
var init_getCanonicalQuery = __esm({
  "node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js"() {
    init_dist_es9();
    init_constants2();
    getCanonicalQuery = ({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        const encodedKey = escapeUri(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
          serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
        } else if (Array.isArray(value)) {
          serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
        }
      }
      return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601, toDate;
var init_utilDate = __esm({
  "node_modules/@smithy/signature-v4/dist-es/utilDate.js"() {
    iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
    toDate = (time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
var SignatureV4Base;
var init_SignatureV4Base = __esm({
  "node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js"() {
    init_dist_es13();
    init_dist_es3();
    init_dist_es9();
    init_dist_es7();
    init_getCanonicalQuery();
    init_utilDate();
    SignatureV4Base = class {
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider(region);
        this.credentialProvider = normalizeProvider(credentials);
      }
      createCanonicalRequest(request2, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request2.method}
${this.getCanonicalPath(request2)}
${getCanonicalQuery(request2)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
          const doubleEncoded = escapeUri(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
      formatDate(now) {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
          longDate,
          shortDate: longDate.slice(0, 8)
        };
      }
      getCanonicalHeaderList(headers) {
        return Object.keys(headers).sort().join(";");
      }
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4;
var init_SignatureV4 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/SignatureV4.js"() {
    init_dist_es13();
    init_dist_es7();
    init_constants2();
    init_credentialDerivation();
    init_getCanonicalHeaders();
    init_getPayloadHash();
    init_HeaderFormatter();
    init_headerUtil();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_SignatureV4Base();
    SignatureV4 = class extends SignatureV4Base {
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        super({
          applyChecksum,
          credentials,
          region,
          service,
          sha256,
          uriEscapePath
        });
        this.headerFormatter = new HeaderFormatter();
      }
      async presign(originalRequest, options = {}) {
        const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request2 = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
          request2.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request2.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request2.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request2.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request2.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        request2.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
        request2.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request2;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
          headers: this.headerFormatter.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request2 = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request2.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request2.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request2, this.sha256);
        if (!hasHeader(SHA256_HEADER, request2.headers) && this.applyChecksum) {
          request2.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, payloadHash));
        request2.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request2;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js
var signatureV4aContainer;
var init_signature_v4a_container = __esm({
  "node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js"() {
    signatureV4aContainer = {
      SignatureV4a: null
    };
  }
});

// node_modules/@smithy/signature-v4/dist-es/index.js
var init_dist_es17 = __esm({
  "node_modules/@smithy/signature-v4/dist-es/index.js"() {
    init_SignatureV4();
    init_constants2();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_credentialDerivation();
    init_SignatureV4Base();
    init_headerUtil();
    init_signature_v4a_container();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config, {
        parentClientConfig: config
      })));
    } else {
      credentialsProvider = async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      };
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
function bindCallerConfig(config, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
var resolveAwsSdkSigV4Config;
var init_resolveAwsSdkSigV4Config = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    init_client2();
    init_dist_es15();
    init_dist_es17();
    resolveAwsSdkSigV4Config = (config) => {
      let inputCredentials = config.credentials;
      let isUserSupplied = !!config.credentials;
      let resolvedCredentials = void 0;
      Object.defineProperty(config, "credentials", {
        set(credentials) {
          if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
            isUserSupplied = true;
          }
          inputCredentials = credentials;
          const memoizedProvider = normalizeCredentialProvider(config, {
            credentials: inputCredentials,
            credentialDefaultProvider: config.credentialDefaultProvider
          });
          const boundProvider = bindCallerConfig(config, memoizedProvider);
          if (isUserSupplied && !boundProvider.attributed) {
            resolvedCredentials = async (options) => boundProvider(options).then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e"));
            resolvedCredentials.memoized = boundProvider.memoized;
            resolvedCredentials.configBound = boundProvider.configBound;
            resolvedCredentials.attributed = true;
          } else {
            resolvedCredentials = boundProvider;
          }
        },
        get() {
          return resolvedCredentials;
        },
        enumerable: true,
        configurable: true
      });
      config.credentials = inputCredentials;
      const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
      let signer;
      if (config.signer) {
        signer = normalizeProvider2(config.signer);
      } else if (config.regionInfoProvider) {
        signer = () => normalizeProvider2(config.region)().then(async (region) => [
          await config.regionInfoProvider(region, {
            useFipsEndpoint: await config.useFipsEndpoint(),
            useDualstackEndpoint: await config.useDualstackEndpoint()
          }) || {},
          region
        ]).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          config.signingRegion = config.signingRegion || signingRegion || region;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        });
      } else {
        signer = async (authScheme) => {
          authScheme = Object.assign({}, {
            name: "sigv4",
            signingName: config.signingName || config.defaultSigningName,
            signingRegion: await normalizeProvider2(config.region)(),
            properties: {}
          }, authScheme);
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config.signingRegion = config.signingRegion || signingRegion;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        };
      }
      const resolvedConfig = Object.assign(config, {
        systemClockOffset,
        signingEscapePath,
        signer
      });
      return resolvedConfig;
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    init_AwsSdkSigV4Signer();
    init_AwsSdkSigV4ASigner();
    init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS();
    init_resolveAwsSdkSigV4AConfig();
    init_resolveAwsSdkSigV4Config();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var init_httpAuthSchemes2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    init_aws_sdk();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var init_coercing_serializers = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
  }
});

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var getAllAliases, getMiddlewareNameWithAliases, constructStack, stepWeights, priorityWeights;
var init_MiddlewareStack = __esm({
  "node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js"() {
    getAllAliases = (name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    };
    getMiddlewareNameWithAliases = (name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    };
    constructStack = () => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = (entries) => entries.sort((a5, b5) => stepWeights[b5.step] - stepWeights[a5.step] || priorityWeights[b5.priority || "normal"] - priorityWeights[a5.priority || "normal"]);
      const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      };
      const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      };
      const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      };
      const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      };
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        }
      };
      return stack;
    };
    stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// node_modules/@smithy/middleware-stack/dist-es/index.js
var init_dist_es18 = __esm({
  "node_modules/@smithy/middleware-stack/dist-es/index.js"() {
    init_MiddlewareStack();
  }
});

// node_modules/@smithy/smithy-client/dist-es/client.js
var Client;
var init_client3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/client.js"() {
    init_dist_es18();
    Client = class {
      constructor(config) {
        this.config = config;
        this.middlewareStack = constructStack();
      }
      send(command, optionsOrCb, cb2) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb2;
        const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
        let handler;
        if (useHandlerCache) {
          if (!this.handlers) {
            this.handlers = /* @__PURE__ */ new WeakMap();
          }
          const handlers = this.handlers;
          if (handlers.has(command.constructor)) {
            handler = handlers.get(command.constructor);
          } else {
            handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
            handlers.set(command.constructor, handler);
          }
        } else {
          delete this.handlers;
          handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        }
        if (callback) {
          handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
          });
        } else {
          return handler(command).then((result) => result.output);
        }
      }
      destroy() {
        this.config?.requestHandler?.destroy?.();
        delete this.handlers;
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var init_collect_stream_body2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js"() {
    init_protocols();
  }
});

// node_modules/@smithy/smithy-client/dist-es/command.js
var Command, ClassBuilder;
var init_command2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/command.js"() {
    init_dist_es18();
    init_dist_es();
    Command = class {
      constructor() {
        this.middlewareStack = constructStack();
      }
      static classBuilder() {
        return new ClassBuilder();
      }
      resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger2 } = configuration;
        const handlerExecutionContext = {
          logger: logger2,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [SMITHY_CONTEXT_KEY]: {
            commandInstance: this,
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
      }
    };
    ClassBuilder = class {
      constructor() {
        this._init = () => {
        };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_2) => _2;
        this._outputFilterSensitiveLog = (_2) => _2;
        this._serializer = null;
        this._deserializer = null;
      }
      init(cb2) {
        this._init = cb2;
      }
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      s(service, operation, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation,
          ...smithyContext
        };
        return this;
      }
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      f(inputFilter = (_2) => _2, outputFilter = (_2) => _2) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          constructor(...[input]) {
            super();
            this.serialize = closure._serializer;
            this.deserialize = closure._deserializer;
            this.input = input ?? {};
            closure._init(this);
          }
          resolveMiddleware(stack, configuration, options) {
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
        };
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/constants.js
var SENSITIVE_STRING;
var init_constants3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/constants.js"() {
    SENSITIVE_STRING = "***SensitiveInformation***";
  }
});

// node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
var createAggregatedClient;
var init_create_aggregated_client = __esm({
  "node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js"() {
    createAggregatedClient = (commands4, Client2) => {
      for (const command of Object.keys(commands4)) {
        const CommandCtor = commands4[command];
        const methodImpl = async function(args, optionsOrCb, cb2) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb2 === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb2);
          } else {
            return this.send(command2, optionsOrCb);
          }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException, decorateServiceException;
var init_exceptions = __esm({
  "node_modules/@smithy/smithy-client/dist-es/exceptions.js"() {
    ServiceException = class _ServiceException extends Error {
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
      static isInstance(value) {
        if (!value)
          return false;
        const candidate = value;
        return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
      }
      static [Symbol.hasInstance](instance) {
        if (!instance)
          return false;
        const candidate = instance;
        if (this === _ServiceException) {
          return _ServiceException.isInstance(instance);
        }
        if (_ServiceException.isInstance(instance)) {
          if (candidate.name && this.name) {
            return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
          }
          return this.prototype.isPrototypeOf(instance);
        }
        return false;
      }
    };
    decorateServiceException = (exception, additions = {}) => {
      Object.entries(additions).filter(([, v6]) => v6 !== void 0).forEach(([k5, v6]) => {
        if (exception[k5] == void 0 || exception[k5] === "") {
          exception[k5] = v6;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError, withBaseException, deserializeMetadata;
var init_default_error_handler = __esm({
  "node_modules/@smithy/smithy-client/dist-es/default-error-handler.js"() {
    init_exceptions();
    throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException(response, parsedBody);
    };
    withBaseException = (ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    };
    deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
  }
});

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var loadConfigsForDefaultMode;
var init_defaults_mode = __esm({
  "node_modules/@smithy/smithy-client/dist-es/defaults-mode.js"() {
    loadConfigsForDefaultMode = (mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var warningEmitted, emitWarningIfUnsupportedVersion2;
var init_emitWarningIfUnsupportedVersion2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js"() {
    warningEmitted = false;
    emitWarningIfUnsupportedVersion2 = (version) => {
      if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
var init_extended_encode_uri_component2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js"() {
    init_protocols();
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var getChecksumConfiguration2, resolveChecksumRuntimeConfig2;
var init_checksum3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js"() {
    init_dist_es();
    getChecksumConfiguration2 = (runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in AlgorithmId) {
        const algorithmId = AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: () => algorithmId,
          checksumConstructor: () => runtimeConfig[algorithmId]
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        }
      };
    };
    resolveChecksumRuntimeConfig2 = (clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var getRetryConfiguration, resolveRetryRuntimeConfig;
var init_retry2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/retry.js"() {
    getRetryConfiguration = (runtimeConfig) => {
      return {
        setRetryStrategy(retryStrategy) {
          runtimeConfig.retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return runtimeConfig.retryStrategy;
        }
      };
    };
    resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig;
var init_defaultExtensionConfiguration2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js"() {
    init_checksum3();
    init_retry2();
    getDefaultExtensionConfiguration = (runtimeConfig) => {
      return Object.assign(getChecksumConfiguration2(runtimeConfig), getRetryConfiguration(runtimeConfig));
    };
    resolveDefaultRuntimeConfig = (config) => {
      return Object.assign(resolveChecksumRuntimeConfig2(config), resolveRetryRuntimeConfig(config));
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/extensions/index.js
var init_extensions3 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/extensions/index.js"() {
    init_defaultExtensionConfiguration2();
  }
});

// node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
var init_get_array_if_single_item = __esm({
  "node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js"() {
  }
});

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var getValueFromTextNode;
var init_get_value_from_text_node = __esm({
  "node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js"() {
    getValueFromTextNode = (obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode(obj[key]);
        }
      }
      return obj;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js
var isSerializableHeaderValue;
var init_is_serializable_header_value = __esm({
  "node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js"() {
    isSerializableHeaderValue = (value) => {
      return value != null;
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger;
var init_NoOpLogger = __esm({
  "node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js"() {
    NoOpLogger = class {
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
  }
});

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
var take, mapWithFilter, applyInstruction, nonNullish, pass;
var init_object_mapping = __esm({
  "node_modules/@smithy/smithy-client/dist-es/object-mapping.js"() {
    take = (source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    };
    mapWithFilter = (target, filter, instructions) => {
      return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
          _instructions[key] = value;
        } else {
          if (typeof value === "function") {
            _instructions[key] = [filter, value()];
          } else {
            _instructions[key] = [filter, value];
          }
        }
        return _instructions;
      }, {}));
    };
    applyInstruction = (target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    };
    nonNullish = (_2) => _2 != null;
    pass = (_2) => _2;
  }
});

// node_modules/@smithy/smithy-client/dist-es/resolve-path.js
var init_resolve_path2 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/resolve-path.js"() {
    init_protocols();
  }
});

// node_modules/@smithy/smithy-client/dist-es/ser-utils.js
var serializeDateTime;
var init_ser_utils = __esm({
  "node_modules/@smithy/smithy-client/dist-es/ser-utils.js"() {
    serializeDateTime = (date) => date.toISOString().replace(".000Z", "Z");
  }
});

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
var _json;
var init_serde_json = __esm({
  "node_modules/@smithy/smithy-client/dist-es/serde-json.js"() {
    _json = (obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_2) => _2 != null).map(_json);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json(obj[key]);
        }
        return target;
      }
      return obj;
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var parseBoolean, expectNumber, MAX_FLOAT, expectFloat32, expectLong, expectInt32, expectShort, expectByte, expectSizedInt, castInt, expectNonNull, expectObject, expectString, strictParseFloat32, NUMBER_REGEX, parseNumber, strictParseLong, strictParseInt32, strictParseShort, strictParseByte, stackTraceWarning, logger;
var init_parse_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js"() {
    parseBoolean = (value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    };
    expectNumber = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    };
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat32 = (value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    };
    expectLong = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    };
    expectInt32 = (value) => expectSizedInt(value, 32);
    expectShort = (value) => expectSizedInt(value, 16);
    expectByte = (value) => expectSizedInt(value, 8);
    expectSizedInt = (value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    };
    castInt = (value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    };
    expectNonNull = (value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    };
    expectObject = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    };
    expectString = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    };
    strictParseFloat32 = (value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    };
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = (value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    };
    strictParseLong = (value) => {
      if (typeof value === "string") {
        return expectLong(parseNumber(value));
      }
      return expectLong(value);
    };
    strictParseInt32 = (value) => {
      if (typeof value === "string") {
        return expectInt32(parseNumber(value));
      }
      return expectInt32(value);
    };
    strictParseShort = (value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    };
    strictParseByte = (value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    };
    stackTraceWarning = (message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s5) => !s5.includes("stackTraceWarning")).join("\n");
    };
    logger = {
      warn: console.warn
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
function dateToUtcString(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var DAYS, MONTHS, RFC3339, parseRfc3339DateTime, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseRfc7231DateTime, buildDate, parseTwoDigitYear, FIFTY_YEARS_IN_MILLIS, adjustRfc850Year, parseMonthByShortName, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
var init_date_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js"() {
    init_parse_utils();
    DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    parseRfc3339DateTime = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_2, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    };
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    parseRfc3339DateTimeWithOffset = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_2, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    };
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    parseRfc7231DateTime = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_2, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_2, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
          hours,
          minutes,
          seconds,
          fractionalMilliseconds
        }));
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_2, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    };
    buildDate = (year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
    };
    parseTwoDigitYear = (value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    };
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    adjustRfc850Year = (input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
      }
      return input;
    };
    parseMonthByShortName = (value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    };
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = (year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    };
    isLeapYear = (year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };
    parseDateValue = (value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    };
    parseMilliseconds = (value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    };
    parseOffsetToMilliseconds = (value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    };
    stripLeadingZeroes = (value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
var init_quote_header = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
var init_split_header = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/split-header.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
var init_NumericValue = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
var LazyJsonString;
var init_lazy_json = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js"() {
    LazyJsonString = function LazyJsonString2(val2) {
      const str = Object.assign(new String(val2), {
        deserializeJSON() {
          return JSON.parse(String(val2));
        },
        toString() {
          return String(val2);
        },
        toJSON() {
          return String(val2);
        }
      });
      return str;
    };
    LazyJsonString.from = (object) => {
      if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
        return object;
      } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString(String(object));
      }
      return LazyJsonString(JSON.stringify(object));
    };
    LazyJsonString.fromObject = LazyJsonString.from;
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
var init_split_every = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/split-every.js"() {
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/index.js
var init_serde2 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/index.js"() {
    init_parse_utils();
    init_date_utils();
    init_quote_header();
    init_split_header();
    init_NumericValue();
    init_lazy_json();
    init_split_every();
  }
});

// node_modules/@smithy/smithy-client/dist-es/index.js
var init_dist_es19 = __esm({
  "node_modules/@smithy/smithy-client/dist-es/index.js"() {
    init_client3();
    init_collect_stream_body2();
    init_command2();
    init_constants3();
    init_create_aggregated_client();
    init_default_error_handler();
    init_defaults_mode();
    init_emitWarningIfUnsupportedVersion2();
    init_exceptions();
    init_extended_encode_uri_component2();
    init_extensions3();
    init_get_array_if_single_item();
    init_get_value_from_text_node();
    init_is_serializable_header_value();
    init_NoOpLogger();
    init_object_mapping();
    init_resolve_path2();
    init_ser_utils();
    init_serde_json();
    init_serde2();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var init_awsExpectUnion = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
    init_dist_es19();
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var collectBodyString;
var init_common = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    init_dist_es19();
    collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
var init_parseJsonBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    init_common();
    parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e5) {
          if (e5?.name === "SyntaxError") {
            Object.defineProperty(e5, "$responseBodyText", {
              value: encoded
            });
          }
          throw e5;
        }
      }
      return {};
    });
    parseJsonErrorBody = async (errorBody, context) => {
      const value = await parseJsonBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    };
    loadRestJsonErrorCode = (output, data) => {
      const findKey = (object, key) => Object.keys(object).find((k5) => k5.toLowerCase() === key.toLowerCase());
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data && typeof data === "object") {
        const codeKey = findKey(data, "code");
        if (codeKey && data[codeKey] !== void 0) {
          return sanitizeErrorCode(data[codeKey]);
        }
        if (data["__type"] !== void 0) {
          return sanitizeErrorCode(data["__type"]);
        }
      }
    };
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };
    var isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    };
    exports.isExist = function(v6) {
      return typeof v6 !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a5, arrayMode) {
      if (a5) {
        const keys = Object.keys(a5);
        const len = keys.length;
        for (let i5 = 0; i5 < len; i5++) {
          if (arrayMode === "strict") {
            target[keys[i5]] = [a5[keys[i5]]];
          } else {
            target[keys[i5]] = a5[keys[i5]];
          }
        }
      }
    };
    exports.getValue = function(v6) {
      if (exports.isExist(v6)) {
        return v6;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i5 = 0; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === "<" && xmlData[i5 + 1] === "?") {
          i5 += 2;
          i5 = readPI(xmlData, i5);
          if (i5.err) return i5;
        } else if (xmlData[i5] === "<") {
          let tagStartPos = i5;
          i5++;
          if (xmlData[i5] === "!") {
            i5 = readCommentAndCDATA(xmlData, i5);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i5] === "/") {
              closingTag = true;
              i5++;
            }
            let tagName = "";
            for (; i5 < xmlData.length && xmlData[i5] !== ">" && xmlData[i5] !== " " && xmlData[i5] !== "	" && xmlData[i5] !== "\n" && xmlData[i5] !== "\r"; i5++) {
              tagName += xmlData[i5];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i5--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i5));
            }
            const result = readAttributeStr(xmlData, i5);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i5));
            }
            let attrStr = result.value;
            i5 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i5 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i5));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else if (tags.length === 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i5 - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i5));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i5++; i5 < xmlData.length; i5++) {
              if (xmlData[i5] === "<") {
                if (xmlData[i5 + 1] === "!") {
                  i5++;
                  i5 = readCommentAndCDATA(xmlData, i5);
                  continue;
                } else if (xmlData[i5 + 1] === "?") {
                  i5 = readPI(xmlData, ++i5);
                  if (i5.err) return i5;
                } else {
                  break;
                }
              } else if (xmlData[i5] === "&") {
                const afterAmp = validateAmpersand(xmlData, i5);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i5));
                i5 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i5])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i5));
                }
              }
            }
            if (xmlData[i5] === "<") {
              i5--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i5])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i5] + "' is not expected.", getLineNumberForPosition(xmlData, i5));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t5) => t5.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    function readPI(xmlData, i5) {
      const start = i5;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] == "?" || xmlData[i5] == " ") {
          const tagname = xmlData.substr(start, i5 - start);
          if (i5 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i5));
          } else if (xmlData[i5] == "?" && xmlData[i5 + 1] == ">") {
            i5++;
            break;
          } else {
            continue;
          }
        }
      }
      return i5;
    }
    function readCommentAndCDATA(xmlData, i5) {
      if (xmlData.length > i5 + 5 && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === "-") {
        for (i5 += 3; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "-" && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === ">") {
            i5 += 2;
            break;
          }
        }
      } else if (xmlData.length > i5 + 8 && xmlData[i5 + 1] === "D" && xmlData[i5 + 2] === "O" && xmlData[i5 + 3] === "C" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "Y" && xmlData[i5 + 6] === "P" && xmlData[i5 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i5 += 8; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i5] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i5 + 9 && xmlData[i5 + 1] === "[" && xmlData[i5 + 2] === "C" && xmlData[i5 + 3] === "D" && xmlData[i5 + 4] === "A" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "A" && xmlData[i5 + 7] === "[") {
        for (i5 += 8; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "]" && xmlData[i5 + 1] === "]" && xmlData[i5 + 2] === ">") {
            i5 += 2;
            break;
          }
        }
      }
      return i5;
    }
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i5) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === doubleQuote || xmlData[i5] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i5];
          } else if (startChar !== xmlData[i5]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i5] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i5];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i5,
        tagClosed
      };
    }
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i5 = 0; i5 < matches.length; i5++) {
        if (matches[i5][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' has no space in starting.", getPositionFromMatch(matches[i5]));
        } else if (matches[i5][3] !== void 0 && matches[i5][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' is without value.", getPositionFromMatch(matches[i5]));
        } else if (matches[i5][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i5][2] + "' is not allowed.", getPositionFromMatch(matches[i5]));
        }
        const attrName = matches[i5][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i5]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i5]));
        }
      }
      return true;
    }
    function validateNumberAmpersand(xmlData, i5) {
      let re = /\d/;
      if (xmlData[i5] === "x") {
        i5++;
        re = /[\da-fA-F]/;
      }
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === ";")
          return i5;
        if (!xmlData[i5].match(re))
          break;
      }
      return -1;
    }
    function validateAmpersand(xmlData, i5) {
      i5++;
      if (xmlData[i5] === ";")
        return -1;
      if (xmlData[i5] === "#") {
        i5++;
        return validateNumberAmpersand(xmlData, i5);
      }
      let count = 0;
      for (; i5 < xmlData.length; i5++, count++) {
        if (xmlData[i5].match(/\w/) && count < 20)
          continue;
        if (xmlData[i5] === ";")
          break;
        return -1;
      }
      return i5;
    }
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
      // skipEmptyListItem: false
    };
    var buildOptions = function(options) {
      return Object.assign({}, defaultOptions, options);
    };
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
    "use strict";
    var XmlNode2 = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module.exports = XmlNode2;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
    var util = require_util();
    function readDocType(xmlData, i5) {
      const entities = {};
      if (xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "C" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "Y" && xmlData[i5 + 7] === "P" && xmlData[i5 + 8] === "E") {
        i5 = i5 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i5)) {
              i5 += 7;
              [entityName, val, i5] = readEntityExp(xmlData, i5 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i5)) i5 += 8;
            else if (hasBody && isAttlist(xmlData, i5)) i5 += 8;
            else if (hasBody && isNotation(xmlData, i5)) i5 += 9;
            else if (isComment) comment = true;
            else throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i5] === ">") {
            if (comment) {
              if (xmlData[i5 - 1] === "-" && xmlData[i5 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i5] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i5];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i5 };
    }
    function readEntityExp(xmlData, i5) {
      let entityName2 = "";
      for (; i5 < xmlData.length && (xmlData[i5] !== "'" && xmlData[i5] !== '"'); i5++) {
        entityName2 += xmlData[i5];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1) throw new Error("External entites are not supported");
      const startChar = xmlData[i5++];
      let val2 = "";
      for (; i5 < xmlData.length && xmlData[i5] !== startChar; i5++) {
        val2 += xmlData[i5];
      }
      return [entityName2, val2, i5];
    }
    function isComment(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "-" && xmlData[i5 + 3] === "-") return true;
      return false;
    }
    function isEntity(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "N" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "I" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "Y") return true;
      return false;
    }
    function isElement(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "L" && xmlData[i5 + 4] === "E" && xmlData[i5 + 5] === "M" && xmlData[i5 + 6] === "E" && xmlData[i5 + 7] === "N" && xmlData[i5 + 8] === "T") return true;
      return false;
    }
    function isAttlist(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "A" && xmlData[i5 + 3] === "T" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "L" && xmlData[i5 + 6] === "I" && xmlData[i5 + 7] === "S" && xmlData[i5 + 8] === "T") return true;
      return false;
    }
    function isNotation(xmlData, i5) {
      if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "N" && xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "A" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "I" && xmlData[i5 + 8] === "O" && xmlData[i5 + 9] === "N") return true;
      return false;
    }
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    module.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
    var consider = {
      hex: true,
      // oct: false,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string") return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
      else if (str === "0") return 0;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
      } else if (trimmedStr.search(/[eE]/) !== -1) {
        const notation = trimmedStr.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
        if (notation) {
          if (options.leadingZeros) {
            trimmedStr = (notation[1] || "") + notation[3];
          } else {
            if (notation[2] === "0" && notation[3][0] === ".") {
            } else {
              return str;
            }
          }
          return options.eNotation ? Number(trimmedStr) : str;
        } else {
          return str;
        }
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
          else if (options.leadingZeros && leadingZeros === str) return 0;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation) return num;
              else return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "") return num;
              else if (numStr === numTrimmedByZeros) return num;
              else if (sign && numStr === "-" + numTrimmedByZeros) return num;
              else return str;
            }
            if (leadingZeros) {
              return numTrimmedByZeros === numStr || sign + numTrimmedByZeros === numStr ? num : str;
            } else {
              return trimmedStr === numStr || trimmedStr === sign + numStr ? num : str;
            }
          }
        } else {
          return str;
        }
      }
    }
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    function parse_int(numStr, base) {
      if (parseInt) return parseInt(numStr, base);
      else if (Number.parseInt) return Number.parseInt(numStr, base);
      else if (window && window.parseInt) return window.parseInt(numStr, base);
      else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
    }
    module.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
    "use strict";
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" },
          "num_dec": { regex: /&#([0-9]{1,7});/g, val: (_2, str) => String.fromCharCode(Number.parseInt(str, 10)) },
          "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (_2, str) => String.fromCharCode(Number.parseInt(str, 16)) }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i5 = 0; i5 < entKeys.length; i5++) {
        const ent = entKeys[i5];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities) val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i5 = 0; i5 < len; i5++) {
          const attrName = this.resolveNameSpace(matches[i5][1]);
          let oldVal = matches[i5][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__") aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    var parseXml = function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i5 = 0; i5 < xmlData.length; i5++) {
        const ch2 = xmlData[i5];
        if (ch2 === "<") {
          if (xmlData[i5 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i5, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i5 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i5 = closeIndex;
          } else if (xmlData[i5 + 1] === "?") {
            let tagData = readTagExp(xmlData, i5, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i5 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i5 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i5 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i5 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i5 = endIndex;
          } else if (xmlData.substr(i5 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i5);
            this.docTypeEntities = result.entities;
            i5 = result.i;
          } else if (xmlData.substr(i5 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i5, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i5 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
            if (val2 == void 0) val2 = "";
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              currentNode.add(this.options.textNodeName, val2);
            }
            i5 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i5, this.options.removeNSPrefix);
            let tagName = result.tagName;
            const rawTagName = result.rawTagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                i5 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i5 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
                i5 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i5 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i5];
        }
      }
      return xmlObj.child;
    };
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    var replaceEntitiesValue = function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    };
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0) isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
      }
      return false;
    }
    function tagExpWithClosingIndex(xmlData, i5, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i5; index < xmlData.length; index++) {
        let ch2 = xmlData[index];
        if (attrBoundary) {
          if (ch2 === attrBoundary) attrBoundary = "";
        } else if (ch2 === '"' || ch2 === "'") {
          attrBoundary = ch2;
        } else if (ch2 === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch2 === "	") {
          ch2 = " ";
        }
        tagExp += ch2;
      }
    }
    function findClosingIndex(xmlData, str, i5, errMsg) {
      const closingIndex = xmlData.indexOf(str, i5);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    function readTagExp(xmlData, i5, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i5 + 1, closingChar);
      if (!result) return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
      }
      const rawTagName = tagName;
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent,
        rawTagName
      };
    }
    function readStopNodeData(xmlData, tagName, i5) {
      const startIndex = i5;
      let openTagCount = 1;
      for (; i5 < xmlData.length; i5++) {
        if (xmlData[i5] === "<") {
          if (xmlData[i5 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i5, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i5 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i5),
                  i: closeIndex
                };
              }
            }
            i5 = closeIndex;
          } else if (xmlData[i5 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i5 + 1, "StopNode is not closed.");
            i5 = closeIndex;
          } else if (xmlData.substr(i5 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i5 + 3, "StopNode is not closed.");
            i5 = closeIndex;
          } else if (xmlData.substr(i5 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i5, "StopNode is not closed.") - 2;
            i5 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i5, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i5 = tagData.closeIndex;
            }
          }
        }
      }
    }
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true") return true;
        else if (newval === "false") return false;
        else return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    module.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i5 = 0; i5 < arr.length; i5++) {
        const tagObj = arr[i5];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0) text = tagObj[property];
          else text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode) val2[options.textNodeName] = "";
            else val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
      } else if (text !== void 0) compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const key = keys[i5];
        if (key !== ":@") return key;
      }
    }
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i5 = 0; i5 < len; i5++) {
          const atrrName = keys[i5];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i5 = 0; i5 < arr.length; i5++) {
        const tagObj = arr[i5];
        const tagName = propName(tagObj);
        if (tagName === void 0) continue;
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
          else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i5 = 0; i5 < keys.length; i5++) {
        const key = keys[i5];
        if (!obj.hasOwnProperty(key)) continue;
        if (key !== ":@") return key;
      }
    }
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          if (!attrMap.hasOwnProperty(attr)) continue;
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
      }
      return false;
    }
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i5 = 0; i5 < options.entities.length; i5++) {
          const entity = options.entities[i5];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    module.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a5) {
        return a5;
      },
      attributeValueProcessor: function(attrName, a5) {
        return a5;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
        if (typeof jObj[key] === "undefined") {
          if (this.isAttribute(key)) {
            val2 += "";
          }
        } else if (jObj[key] === null) {
          if (this.isAttribute(key)) {
            val2 += "";
          } else if (key[0] === "?") {
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          } else {
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          }
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          let listTagAttr = "";
          for (let j5 = 0; j5 < arrLen; j5++) {
            const item = jObj[key][j5];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                const result = this.j2x(item, level + 1);
                listTagVal += result.val;
                if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
                  listTagAttr += result.attrStr;
                }
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              if (this.options.oneListGroup) {
                let textValue = this.options.tagValueProcessor(key, item);
                textValue = this.replaceEntitiesValue(textValue);
                listTagVal += textValue;
              } else {
                listTagVal += this.buildTextValNode(item, key, "", level);
              }
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L2 = Ks.length;
            for (let j5 = 0; j5 < L2; j5++) {
              attrStr += this.buildAttrPairStr(Ks[j5], "" + jObj[key][Ks[j5]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i5 = 0; i5 < this.options.entities.length; i5++) {
          const entity = this.options.entities[i5];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    module.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
    "use strict";
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_fast_xml_parser, parseXmlBody, parseXmlErrorBody, loadRestXmlErrorCode;
var init_parseXmlBody = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
    init_dist_es19();
    import_fast_xml_parser = __toESM(require_fxp());
    init_common();
    parseXmlBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        const parser = new import_fast_xml_parser.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: true,
          ignoreAttributes: false,
          ignoreDeclaration: true,
          parseTagValue: false,
          trimValues: false,
          tagValueProcessor: (_2, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
          parsedObj = parser.parse(encoded, true);
        } catch (e5) {
          if (e5 && typeof e5 === "object") {
            Object.defineProperty(e5, "$responseBodyText", {
              value: encoded
            });
          }
          throw e5;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return getValueFromTextNode(parsedObjToReturn);
      }
      return {};
    });
    parseXmlErrorBody = async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    };
    loadRestXmlErrorCode = (output, data) => {
      if (data?.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (data?.Code !== void 0) {
        return data.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols2 = __esm({
  "node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    init_coercing_serializers();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_parseXmlBody();
  }
});

// node_modules/@aws-sdk/core/dist-es/index.js
var init_dist_es20 = __esm({
  "node_modules/@aws-sdk/core/dist-es/index.js"() {
    init_client2();
    init_httpAuthSchemes2();
    init_protocols2();
  }
});

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
var hostHeaderMiddleware, hostHeaderMiddlewareOptions, getHostHeaderPlugin;
var init_dist_es21 = __esm({
  "node_modules/@aws-sdk/middleware-host-header/dist-es/index.js"() {
    init_dist_es2();
    hostHeaderMiddleware = (options) => (next) => async (args) => {
      if (!HttpRequest.isInstance(args.request))
        return next(args);
      const { request: request2 } = args;
      const { handlerProtocol = "" } = options.requestHandler.metadata || {};
      if (handlerProtocol.indexOf("h2") >= 0 && !request2.headers[":authority"]) {
        delete request2.headers["host"];
        request2.headers[":authority"] = request2.hostname + (request2.port ? ":" + request2.port : "");
      } else if (!request2.headers["host"]) {
        let host = request2.hostname;
        if (request2.port != null)
          host += `:${request2.port}`;
        request2.headers["host"] = host;
      }
      return next(args);
    };
    hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true
    };
    getHostHeaderPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
      }
    });
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin;
var init_loggerMiddleware = __esm({
  "node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js"() {
    loggerMiddleware = () => (next, context) => async (args) => {
      try {
        const response = await next(args);
        const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger2?.info?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          output: outputFilterSensitiveLog(outputWithoutMetadata),
          metadata: $metadata
        });
        return response;
      } catch (error) {
        const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger2?.error?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          error,
          metadata: error.$metadata
        });
        throw error;
      }
    };
    loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true
    };
    getLoggerPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
      }
    });
  }
});

// node_modules/@aws-sdk/middleware-logger/dist-es/index.js
var init_dist_es22 = __esm({
  "node_modules/@aws-sdk/middleware-logger/dist-es/index.js"() {
    init_loggerMiddleware();
  }
});

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var TRACE_ID_HEADER_NAME, ENV_LAMBDA_FUNCTION_NAME, ENV_TRACE_ID, recursionDetectionMiddleware, addRecursionDetectionMiddlewareOptions, getRecursionDetectionPlugin;
var init_dist_es23 = __esm({
  "node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js"() {
    init_dist_es2();
    TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    recursionDetectionMiddleware = (options) => (next) => async (args) => {
      const { request: request2 } = args;
      if (!HttpRequest.isInstance(request2) || options.runtime !== "node") {
        return next(args);
      }
      const traceIdHeader = Object.keys(request2.headers ?? {}).find((h5) => h5.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ?? TRACE_ID_HEADER_NAME;
      if (request2.headers.hasOwnProperty(traceIdHeader)) {
        return next(args);
      }
      const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
      const traceId = process.env[ENV_TRACE_ID];
      const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
      if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request2.headers[TRACE_ID_HEADER_NAME] = traceId;
      }
      return next({
        ...args,
        request: request2
      });
    };
    addRecursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low"
    };
    getRecursionDetectionPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
var booleanSelector;
var init_booleanSelector = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js"() {
    booleanSelector = (obj, key, type) => {
      if (!(key in obj))
        return void 0;
      if (obj[key] === "true")
        return true;
      if (obj[key] === "false")
        return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    };
  }
});

// node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
var init_numberSelector = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/numberSelector.js"() {
  }
});

// node_modules/@smithy/util-config-provider/dist-es/types.js
var SelectorType2;
var init_types2 = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/types.js"() {
    (function(SelectorType3) {
      SelectorType3["ENV"] = "env";
      SelectorType3["CONFIG"] = "shared config entry";
    })(SelectorType2 || (SelectorType2 = {}));
  }
});

// node_modules/@smithy/util-config-provider/dist-es/index.js
var init_dist_es24 = __esm({
  "node_modules/@smithy/util-config-provider/dist-es/index.js"() {
    init_booleanSelector();
    init_numberSelector();
    init_types2();
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function isValidUserAgentAppId(appId) {
  if (appId === void 0) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}
function resolveUserAgentConfig(input) {
  const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  const { customUserAgent } = input;
  return Object.assign(input, {
    customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
    userAgentAppId: async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger2?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    }
  });
}
var DEFAULT_UA_APP_ID;
var init_configurations = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js"() {
    init_dist_es15();
    DEFAULT_UA_APP_ID = void 0;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
var EndpointCache;
var init_EndpointCache = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js"() {
    EndpointCache = class {
      constructor({ size, params }) {
        this.data = /* @__PURE__ */ new Map();
        this.parameters = [];
        this.capacity = size ?? 50;
        if (params) {
          this.parameters = params;
        }
      }
      get(endpointParams, resolver) {
        const key = this.hash(endpointParams);
        if (key === false) {
          return resolver();
        }
        if (!this.data.has(key)) {
          if (this.data.size > this.capacity + 10) {
            const keys = this.data.keys();
            let i5 = 0;
            while (true) {
              const { value, done } = keys.next();
              this.data.delete(value);
              if (done || ++i5 > 10) {
                break;
              }
            }
          }
          this.data.set(key, resolver());
        }
        return this.data.get(key);
      }
      size() {
        return this.data.size;
      }
      hash(endpointParams) {
        let buffer = "";
        const { parameters } = this;
        if (parameters.length === 0) {
          return false;
        }
        for (const param of parameters) {
          const val2 = String(endpointParams[param] ?? "");
          if (val2.includes("|;")) {
            return false;
          }
          buffer += val2 + "|;";
        }
        return buffer;
      }
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
var IP_V4_REGEX, isIpAddress;
var init_isIpAddress = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js"() {
    IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
    isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX, isValidHostLabel;
var init_isValidHostLabel = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js"() {
    VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    isValidHostLabel = (value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
var customEndpointFunctions;
var init_customEndpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js"() {
    customEndpointFunctions = {};
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
var debugId;
var init_debugId = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js"() {
    debugId = "endpoints";
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
var init_toDebugString = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/debug/index.js
var init_debug = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/debug/index.js"() {
    init_debugId();
    init_toDebugString();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
var EndpointError;
var init_EndpointError = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js"() {
    EndpointError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
var init_EndpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
var init_EndpointRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
var init_ErrorRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
var init_RuleSetObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
var init_TreeRuleObject2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/shared.js
var init_shared2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/shared.js"() {
  }
});

// node_modules/@smithy/util-endpoints/dist-es/types/index.js
var init_types3 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/types/index.js"() {
    init_EndpointError();
    init_EndpointFunctions();
    init_EndpointRuleObject2();
    init_ErrorRuleObject2();
    init_RuleSetObject2();
    init_TreeRuleObject2();
    init_shared2();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
var booleanEquals;
var init_booleanEquals = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js"() {
    booleanEquals = (value1, value2) => value1 === value2;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
var getAttrPathList;
var init_getAttrPathList = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js"() {
    init_types3();
    getAttrPathList = (path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr;
var init_getAttr = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js"() {
    init_types3();
    init_getAttrPathList();
    getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
      }
      return acc[index];
    }, value);
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
var isSet;
var init_isSet = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js"() {
    isSet = (value) => value != null;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/not.js
var not;
var init_not = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/not.js"() {
    not = (value) => !value;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
var DEFAULT_PORTS, parseURL;
var init_parseURL = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js"() {
    init_dist_es();
    init_isIpAddress();
    DEFAULT_PORTS = {
      [EndpointURLScheme.HTTP]: 80,
      [EndpointURLScheme.HTTPS]: 443
    };
    parseURL = (value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k5, v6]) => `${k5}=${v6}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
var stringEquals;
var init_stringEquals = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js"() {
    stringEquals = (value1, value2) => value1 === value2;
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
var substring;
var init_substring = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/substring.js"() {
    substring = (input, start, stop, reverse) => {
      if (start >= stop || input.length < stop) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
var uriEncode;
var init_uriEncode = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js"() {
    uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`);
  }
});

// node_modules/@smithy/util-endpoints/dist-es/lib/index.js
var init_lib = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/lib/index.js"() {
    init_booleanEquals();
    init_getAttr();
    init_isSet();
    init_isValidHostLabel();
    init_not();
    init_parseURL();
    init_stringEquals();
    init_substring();
    init_uriEncode();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
var endpointFunctions;
var init_endpointFunctions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js"() {
    init_lib();
    endpointFunctions = {
      booleanEquals,
      getAttr,
      isSet,
      isValidHostLabel,
      not,
      parseURL,
      stringEquals,
      substring,
      uriEncode
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
var evaluateTemplate;
var init_evaluateTemplate = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js"() {
    init_lib();
    evaluateTemplate = (template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
var getReferenceValue;
var init_getReferenceValue = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js"() {
    getReferenceValue = ({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      return referenceRecord[ref];
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression;
var init_evaluateExpression = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js"() {
    init_types3();
    init_callFunction();
    init_evaluateTemplate();
    init_getReferenceValue();
    evaluateExpression = (obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
var callFunction;
var init_callFunction = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js"() {
    init_customEndpointFunctions();
    init_endpointFunctions();
    init_evaluateExpression();
    callFunction = ({ fn, argv }, options) => {
      const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions[fn](...evaluatedArgs);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition;
var init_evaluateCondition = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js"() {
    init_debug();
    init_types3();
    init_callFunction();
    evaluateCondition = ({ assign, ...fnArgs }, options) => {
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(fnArgs, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...assign != null && { toAssign: { name: assign, value } }
      };
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions;
var init_evaluateConditions = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js"() {
    init_debug();
    init_evaluateCondition();
    evaluateConditions = (conditions = [], options) => {
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord
          }
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
var getEndpointHeaders;
var init_getEndpointHeaders = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js"() {
    init_types3();
    init_evaluateExpression();
    getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
      ...acc,
      [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      })
    }), {});
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
var getEndpointProperty;
var init_getEndpointProperty = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js"() {
    init_types3();
    init_evaluateTemplate();
    init_getEndpointProperties();
    getEndpointProperty = (property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError(`Unexpected endpoint property: ${property}`);
          }
          return getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
      }
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties;
var init_getEndpointProperties = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js"() {
    init_getEndpointProperty();
    getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
      ...acc,
      [propertyKey]: getEndpointProperty(propertyVal, options)
    }), {});
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
var getEndpointUrl;
var init_getEndpointUrl = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js"() {
    init_types3();
    init_evaluateExpression();
    getEndpointUrl = (endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error) {
          console.error(`Failed to construct URL with ${expression}`, error);
          throw error;
        }
      }
      throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule;
var init_evaluateEndpointRule = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js"() {
    init_debug();
    init_evaluateConditions();
    init_getEndpointHeaders();
    init_getEndpointProperties();
    init_getEndpointUrl();
    evaluateEndpointRule = (endpointRule, options) => {
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      };
      const { url, properties, headers } = endpoint;
      options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
      return {
        ...headers != void 0 && {
          headers: getEndpointHeaders(headers, endpointRuleOptions)
        },
        ...properties != void 0 && {
          properties: getEndpointProperties(properties, endpointRuleOptions)
        },
        url: getEndpointUrl(url, endpointRuleOptions)
      };
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
var evaluateErrorRule;
var init_evaluateErrorRule = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js"() {
    init_types3();
    init_evaluateConditions();
    init_evaluateExpression();
    evaluateErrorRule = (errorRule, options) => {
      const { conditions, error } = errorRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      }));
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
var evaluateTreeRule;
var init_evaluateTreeRule = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js"() {
    init_evaluateConditions();
    init_evaluateRules();
    evaluateTreeRule = (treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      });
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules;
var init_evaluateRules = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js"() {
    init_types3();
    init_evaluateEndpointRule();
    init_evaluateErrorRule();
    init_evaluateTreeRule();
    evaluateRules = (rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = evaluateEndpointRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          evaluateErrorRule(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = evaluateTreeRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new EndpointError(`Rules evaluation failed`);
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/utils/index.js
var init_utils2 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/utils/index.js"() {
    init_customEndpointFunctions();
    init_evaluateRules();
  }
});

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint;
var init_resolveEndpoint = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js"() {
    init_debug();
    init_types3();
    init_utils2();
    resolveEndpoint = (ruleSetObject, options) => {
      const { endpointParams, logger: logger2 } = options;
      const { parameters, rules } = ruleSetObject;
      options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters).filter(([, v6]) => v6.default != null).map(([k5, v6]) => [k5, v6.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters).filter(([, v6]) => v6.required).map(([k5]) => k5);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
      options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
      return endpoint;
    };
  }
});

// node_modules/@smithy/util-endpoints/dist-es/index.js
var init_dist_es25 = __esm({
  "node_modules/@smithy/util-endpoints/dist-es/index.js"() {
    init_EndpointCache();
    init_isIpAddress();
    init_isValidHostLabel();
    init_customEndpointFunctions();
    init_resolveEndpoint();
    init_types3();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
var init_isIpAddress2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js"() {
    init_dist_es25();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket;
var init_isVirtualHostableS3Bucket = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js"() {
    init_dist_es25();
    init_isIpAddress2();
    isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!isValidHostLabel(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if (isIpAddress(value)) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var ARN_DELIMITER, RESOURCE_DELIMITER, parseArn;
var init_parseArn = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js"() {
    ARN_DELIMITER = ":";
    RESOURCE_DELIMITER = "/";
    parseArn = (value) => {
      const segments = value.split(ARN_DELIMITER);
      if (segments.length < 6)
        return null;
      const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
        return null;
      const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId
      };
    };
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default;
var init_partitions = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json"() {
    partitions_default = {
      partitions: [{
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "ap-southeast-5": {
            description: "Asia Pacific (Malaysia)"
          },
          "ap-southeast-7": {
            description: "Asia Pacific (Thailand)"
          },
          "aws-global": {
            description: "AWS Standard global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "ca-west-1": {
            description: "Canada West (Calgary)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "mx-central-1": {
            description: "Mexico (Central)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      }, {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "AWS China global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      }, {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "AWS GovCloud (US) global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }, {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "c2s.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "AWS ISO (US) global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      }, {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "sc2s.sgov.gov",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "AWS ISOB (US) global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          }
        }
      }, {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "cloud.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-e-global": {
            description: "AWS ISOE (Europe) global region"
          },
          "eu-isoe-west-1": {
            description: "EU ISOE West"
          }
        }
      }, {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "csp.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-f-global": {
            description: "AWS ISOF global region"
          },
          "us-isof-east-1": {
            description: "US ISOF EAST"
          },
          "us-isof-south-1": {
            description: "US ISOF SOUTH"
          }
        }
      }, {
        id: "aws-eusc",
        outputs: {
          dnsSuffix: "amazonaws.eu",
          dualStackDnsSuffix: "amazonaws.eu",
          implicitGlobalRegion: "eusc-de-east-1",
          name: "aws-eusc",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
        regions: {
          "eusc-de-east-1": {
            description: "EU (Germany)"
          }
        }
      }],
      version: "1.1"
    };
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo, selectedUserAgentPrefix, partition, getUserAgentPrefix;
var init_partition = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js"() {
    init_partitions();
    selectedPartitionsInfo = partitions_default;
    selectedUserAgentPrefix = "";
    partition = (value) => {
      const { partitions } = selectedPartitionsInfo;
      for (const partition2 of partitions) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    };
    getUserAgentPrefix = () => selectedUserAgentPrefix;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions;
var init_aws = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/aws.js"() {
    init_dist_es25();
    init_isVirtualHostableS3Bucket();
    init_parseArn();
    init_partition();
    awsEndpointFunctions = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
var init_resolveEndpoint2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js"() {
    init_dist_es25();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
var init_EndpointError2 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js"() {
    init_dist_es25();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
var init_EndpointRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
var init_ErrorRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
var init_RuleSetObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
var init_TreeRuleObject3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
var init_shared3 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js"() {
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
var init_types4 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js"() {
    init_EndpointError2();
    init_EndpointRuleObject3();
    init_ErrorRuleObject3();
    init_RuleSetObject3();
    init_TreeRuleObject3();
    init_shared3();
  }
});

// node_modules/@aws-sdk/util-endpoints/dist-es/index.js
var init_dist_es26 = __esm({
  "node_modules/@aws-sdk/util-endpoints/dist-es/index.js"() {
    init_aws();
    init_partition();
    init_isIpAddress2();
    init_resolveEndpoint2();
    init_types4();
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
async function checkFeatures(context, config, args) {
  const request2 = args.request;
  if (request2?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature(context, "PROTOCOL_RPC_V2_CBOR", "M");
  }
  if (typeof config.retryStrategy === "function") {
    const retryStrategy = await config.retryStrategy();
    if (typeof retryStrategy.acquireInitialRetryToken === "function") {
      if (retryStrategy.constructor?.name?.includes("Adaptive")) {
        setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
      } else {
        setFeature(context, "RETRY_MODE_STANDARD", "E");
      }
    } else {
      setFeature(context, "RETRY_MODE_LEGACY", "D");
    }
  }
  if (typeof config.accountIdEndpointMode === "function") {
    const endpointV2 = context.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
    }
    switch (await config.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (identity?.$source) {
    const credentials = identity;
    if (credentials.accountId) {
      setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature(context, key, value);
    }
  }
}
var ACCOUNT_ID_ENDPOINT_REGEX;
var init_check_features = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js"() {
    init_dist_es20();
    ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT, X_AMZ_USER_AGENT, SPACE, UA_NAME_SEPARATOR, UA_NAME_ESCAPE_REGEX, UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR;
var init_constants4 = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js"() {
    USER_AGENT = "user-agent";
    X_AMZ_USER_AGENT = "x-amz-user-agent";
    SPACE = " ";
    UA_NAME_SEPARATOR = "/";
    UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
    UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
    UA_ESCAPE_CHAR = "-";
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
function encodeFeatures(features) {
  let buffer = "";
  for (const key in features) {
    const val2 = features[key];
    if (buffer.length + val2.length + 1 <= BYTE_LIMIT) {
      if (buffer.length) {
        buffer += "," + val2;
      } else {
        buffer += val2;
      }
      continue;
    }
    break;
  }
  return buffer;
}
var BYTE_LIMIT;
var init_encode_features = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js"() {
    BYTE_LIMIT = 1024;
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware, escapeUserAgent, getUserAgentMiddlewareOptions, getUserAgentPlugin;
var init_user_agent_middleware = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js"() {
    init_dist_es26();
    init_dist_es2();
    init_check_features();
    init_constants4();
    init_encode_features();
    userAgentMiddleware = (options) => (next, context) => async (args) => {
      const { request: request2 } = args;
      if (!HttpRequest.isInstance(request2)) {
        return next(args);
      }
      const { headers } = request2;
      const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
      const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      await checkFeatures(context, options, args);
      const awsContext = context;
      defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
      const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
      const appId = await options.userAgentAppId();
      if (appId) {
        defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
      }
      const prefix = getUserAgentPrefix();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
      const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request: request2
      });
    };
    escapeUserAgent = (userAgentPair) => {
      const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
      const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    };
    getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    getUserAgentPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
      }
    });
  }
});

// node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
var init_dist_es27 = __esm({
  "node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js"() {
    init_configurations();
    init_user_agent_middleware();
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var ENV_USE_DUALSTACK_ENDPOINT, CONFIG_USE_DUALSTACK_ENDPOINT, NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS;
var init_NodeUseDualstackEndpointConfigOptions = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js"() {
    init_dist_es24();
    ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => booleanSelector(env2, ENV_USE_DUALSTACK_ENDPOINT, SelectorType2.ENV),
      configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType2.CONFIG),
      default: false
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
var ENV_USE_FIPS_ENDPOINT, CONFIG_USE_FIPS_ENDPOINT, NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
var init_NodeUseFipsEndpointConfigOptions = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js"() {
    init_dist_es24();
    ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => booleanSelector(env2, ENV_USE_FIPS_ENDPOINT, SelectorType2.ENV),
      configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType2.CONFIG),
      default: false
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
var init_resolveCustomEndpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js"() {
    init_dist_es3();
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js
var init_getEndpointFromRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
var init_resolveEndpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js"() {
    init_dist_es3();
    init_getEndpointFromRegion();
  }
});

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
var init_endpointsConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js"() {
    init_NodeUseDualstackEndpointConfigOptions();
    init_NodeUseFipsEndpointConfigOptions();
    init_resolveCustomEndpointsConfig();
    init_resolveEndpointsConfig();
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
var REGION_ENV_NAME, REGION_INI_NAME, NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS;
var init_config2 = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js"() {
    REGION_ENV_NAME = "AWS_REGION";
    REGION_INI_NAME = "region";
    NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => env2[REGION_ENV_NAME],
      configFileSelector: (profile) => profile[REGION_INI_NAME],
      default: () => {
        throw new Error("Region is missing");
      }
    };
    NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
var isFipsRegion;
var init_isFipsRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
    isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion;
var init_getRealRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js"() {
    init_isFipsRegion();
    getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig;
var init_resolveRegionConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
    init_getRealRegion();
    init_isFipsRegion();
    resolveRegionConfig = (input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return Object.assign(input, {
        region: async () => {
          if (typeof region === "string") {
            return getRealRegion(region);
          }
          const providedRegion = await region();
          return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }
      });
    };
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
var init_regionConfig = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js"() {
    init_config2();
    init_resolveRegionConfig();
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
var init_PartitionHash = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
var init_RegionHash = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js
var init_getHostnameFromVariants = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js
var init_getResolvedHostname = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js
var init_getResolvedPartition = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js
var init_getResolvedSigningRegion = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js"() {
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
var init_getRegionInfo = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js"() {
    init_getHostnameFromVariants();
    init_getResolvedHostname();
    init_getResolvedPartition();
    init_getResolvedSigningRegion();
  }
});

// node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
var init_regionInfo = __esm({
  "node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js"() {
    init_PartitionHash();
    init_RegionHash();
    init_getRegionInfo();
  }
});

// node_modules/@smithy/config-resolver/dist-es/index.js
var init_dist_es28 = __esm({
  "node_modules/@smithy/config-resolver/dist-es/index.js"() {
    init_endpointsConfig();
    init_regionConfig();
    init_regionInfo();
  }
});

// node_modules/@smithy/middleware-content-length/dist-es/index.js
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request2 = args.request;
    if (HttpRequest.isInstance(request2)) {
      const { body, headers } = request2;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER2) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request2.headers = {
            ...request2.headers,
            [CONTENT_LENGTH_HEADER2]: String(length)
          };
        } catch (error) {
        }
      }
    }
    return next({
      ...args,
      request: request2
    });
  };
}
var CONTENT_LENGTH_HEADER2, contentLengthMiddlewareOptions, getContentLengthPlugin;
var init_dist_es29 = __esm({
  "node_modules/@smithy/middleware-content-length/dist-es/index.js"() {
    init_dist_es2();
    CONTENT_LENGTH_HEADER2 = "content-length";
    contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true
    };
    getContentLengthPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
var init_s3 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js"() {
    resolveParamsForS3 = async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    };
    DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    DOTS_PATTERN = /\.\./;
    isDnsCompatibleBucketName = (bucketName2) => DOMAIN_PATTERN.test(bucketName2) && !IP_ADDRESS_PATTERN.test(bucketName2) && !DOTS_PATTERN.test(bucketName2);
    isArnBucketName = (bucketName2) => {
      const [arn, partition2, service, , , bucket] = bucketName2.split(":");
      const isArn = arn === "arn" && bucketName2.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition2 && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName2} was an invalid ARN.`);
      }
      return isValidArn;
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
var init_service_customizations = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js"() {
    init_s3();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider;
var init_createConfigValueProvider = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js"() {
    createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
      const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      };
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.accountId ?? credentials?.AccountId;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    };
  }
});

// node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js
function getSelectorName(functionString) {
  try {
    const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
    constants.delete("CONFIG");
    constants.delete("CONFIG_PREFIX_SEPARATOR");
    constants.delete("ENV");
    return [...constants].join(", ");
  } catch (e5) {
    return functionString;
  }
}
var init_getSelectorName = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/getSelectorName.js"() {
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromEnv.js
var fromEnv;
var init_fromEnv = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromEnv.js"() {
    init_dist_es16();
    init_getSelectorName();
    fromEnv = (envVarSelector, options) => async () => {
      try {
        const config = envVarSelector(process.env, options);
        if (config === void 0) {
          throw new Error();
        }
        return config;
      } catch (e5) {
        throw new CredentialsProviderError(e5.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: options?.logger });
      }
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js
import { homedir } from "os";
import { sep } from "path";
var homeDirCache, getHomeDirCacheKey, getHomeDir;
var init_getHomeDir = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js"() {
    homeDirCache = {};
    getHomeDirCacheKey = () => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    };
    getHomeDir = () => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = homedir();
      return homeDirCache[homeDirCacheKey];
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js
var ENV_PROFILE, DEFAULT_PROFILE, getProfileName;
var init_getProfileName = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js"() {
    ENV_PROFILE = "AWS_PROFILE";
    DEFAULT_PROFILE = "default";
    getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js
import { createHash } from "crypto";
import { join } from "path";
var getSSOTokenFilepath;
var init_getSSOTokenFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js"() {
    init_getHomeDir();
    getSSOTokenFilepath = (id) => {
      const hasher = createHash("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js
import { promises as fsPromises } from "fs";
var readFile, getSSOTokenFromFile;
var init_getSSOTokenFromFile = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js"() {
    init_getSSOTokenFilepath();
    ({ readFile } = fsPromises);
    getSSOTokenFromFile = async (id) => {
      const ssoTokenFilepath = getSSOTokenFilepath(id);
      const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js
var getConfigData;
var init_getConfigData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    getConfigData = (data) => Object.entries(data).filter(([key]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      if (indexOfSeparator === -1) {
        return false;
      }
      return Object.values(IniSectionType).includes(key.substring(0, indexOfSeparator));
    }).reduce((acc, [key, value]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      const updatedKey = key.substring(0, indexOfSeparator) === IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
      acc[updatedKey] = value;
      return acc;
    }, {
      ...data.default && { default: data.default }
    });
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js
import { join as join2 } from "path";
var ENV_CONFIG_PATH, getConfigFilepath;
var init_getConfigFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js"() {
    init_getHomeDir();
    ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || join2(getHomeDir(), ".aws", "config");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js
import { join as join3 } from "path";
var ENV_CREDENTIALS_PATH, getCredentialsFilepath;
var init_getCredentialsFilepath = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js"() {
    init_getHomeDir();
    ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || join3(getHomeDir(), ".aws", "credentials");
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js
var prefixKeyRegex, profileNameBlockList, parseIni;
var init_parseIni = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    profileNameBlockList = ["__proto__", "profile __proto__"];
    parseIni = (iniData) => {
      const map2 = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map2[currentSection] = map2[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map2[currentSection][key] = value;
            }
          }
        }
      }
      return map2;
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js
import { promises as fsPromises2 } from "fs";
var readFile2, filePromisesHash, slurpFile;
var init_slurpFile = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js"() {
    ({ readFile: readFile2 } = fsPromises2);
    filePromisesHash = {};
    slurpFile = (path, options) => {
      if (!filePromisesHash[path] || options?.ignoreCache) {
        filePromisesHash[path] = readFile2(path, "utf8");
      }
      return filePromisesHash[path];
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js
import { join as join4 } from "path";
var swallowError, CONFIG_PREFIX_SEPARATOR, loadSharedConfigFiles;
var init_loadSharedConfigFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js"() {
    init_getConfigData();
    init_getConfigFilepath();
    init_getCredentialsFilepath();
    init_getHomeDir();
    init_parseIni();
    init_slurpFile();
    swallowError = () => ({});
    CONFIG_PREFIX_SEPARATOR = ".";
    loadSharedConfigFiles = async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const homeDir = getHomeDir();
      const relativeHomeDirPrefix = "~/";
      let resolvedFilepath = filepath;
      if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = join4(homeDir, filepath.slice(2));
      }
      let resolvedConfigFilepath = configFilepath;
      if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = join4(homeDir, configFilepath.slice(2));
      }
      const parsedFiles = await Promise.all([
        slurpFile(resolvedConfigFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).then(getConfigData).catch(swallowError),
        slurpFile(resolvedFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).catch(swallowError)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js
var getSsoSessionData;
var init_getSsoSessionData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js"() {
    init_dist_es();
    init_loadSharedConfigFiles();
    getSsoSessionData = (data) => Object.entries(data).filter(([key]) => key.startsWith(IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {});
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js
var swallowError2, loadSsoSessionData;
var init_loadSsoSessionData = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js"() {
    init_getConfigFilepath();
    init_getSsoSessionData();
    init_parseIni();
    init_slurpFile();
    swallowError2 = () => ({});
    loadSsoSessionData = async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2);
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js
var mergeConfigFiles;
var init_mergeConfigFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js"() {
    mergeConfigFiles = (...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js
var parseKnownFiles;
var init_parseKnownFiles = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js"() {
    init_loadSharedConfigFiles();
    init_mergeConfigFiles();
    parseKnownFiles = async (init) => {
      const parsedFiles = await loadSharedConfigFiles(init);
      return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
    };
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/types.js
var init_types5 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/types.js"() {
  }
});

// node_modules/@smithy/shared-ini-file-loader/dist-es/index.js
var init_dist_es30 = __esm({
  "node_modules/@smithy/shared-ini-file-loader/dist-es/index.js"() {
    init_getHomeDir();
    init_getProfileName();
    init_getSSOTokenFilepath();
    init_getSSOTokenFromFile();
    init_loadSharedConfigFiles();
    init_loadSsoSessionData();
    init_parseKnownFiles();
    init_types5();
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js
var fromSharedConfigFiles;
var init_fromSharedConfigFiles = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js"() {
    init_dist_es16();
    init_dist_es30();
    init_getSelectorName();
    fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = getProfileName(init);
      const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e5) {
        throw new CredentialsProviderError(e5.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
      }
    };
  }
});

// node_modules/@smithy/node-config-provider/dist-es/fromStatic.js
var isFunction, fromStatic2;
var init_fromStatic2 = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/fromStatic.js"() {
    init_dist_es16();
    isFunction = (func) => typeof func === "function";
    fromStatic2 = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue);
  }
});

// node_modules/@smithy/node-config-provider/dist-es/configLoader.js
var loadConfig;
var init_configLoader = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/configLoader.js"() {
    init_dist_es16();
    init_fromEnv();
    init_fromSharedConfigFiles();
    init_fromStatic2();
    loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => {
      const { signingName, logger: logger2 } = configuration;
      const envOptions = { signingName, logger: logger2 };
      return memoize(chain(fromEnv(environmentVariableSelector, envOptions), fromSharedConfigFiles(configFileSelector, configuration), fromStatic2(defaultValue)));
    };
  }
});

// node_modules/@smithy/node-config-provider/dist-es/index.js
var init_dist_es31 = __esm({
  "node_modules/@smithy/node-config-provider/dist-es/index.js"() {
    init_configLoader();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js
var ENV_ENDPOINT_URL, CONFIG_ENDPOINT_URL, getEndpointUrlConfig;
var init_getEndpointUrlConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js"() {
    init_dist_es30();
    ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    CONFIG_ENDPOINT_URL = "endpoint_url";
    getEndpointUrlConfig = (serviceId) => ({
      environmentVariableSelector: (env2) => {
        const serviceSuffixParts = serviceId.split(" ").map((w5) => w5.toUpperCase());
        const serviceEndpointUrl = env2[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env2[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      configFileSelector: (profile, config) => {
        if (config && profile.services) {
          const servicesSection = config[["services", profile.services].join(CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w5) => w5.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      default: void 0
    });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js
var getEndpointFromConfig;
var init_getEndpointFromConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js"() {
    init_dist_es31();
    init_getEndpointUrlConfig();
    getEndpointFromConfig = async (serviceId) => loadConfig(getEndpointUrlConfig(serviceId ?? ""))();
  }
});

// node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
var init_dist_es32 = __esm({
  "node_modules/@smithy/querystring-parser/dist-es/index.js"() {
  }
});

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl;
var init_dist_es33 = __esm({
  "node_modules/@smithy/url-parser/dist-es/index.js"() {
    init_dist_es32();
    parseUrl = (url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1;
var init_toEndpointV1 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js"() {
    init_dist_es33();
    toEndpointV1 = (endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return parseUrl(endpoint.url);
        }
        return endpoint;
      }
      return parseUrl(endpoint);
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions, resolveParams;
var init_getEndpointFromInstructions = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js"() {
    init_service_customizations();
    init_createConfigValueProvider();
    init_getEndpointFromConfig();
    init_toEndpointV1();
    getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.endpoint) {
        let endpointFromConfig;
        if (clientConfig.serviceConfiguredEndpoint) {
          endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
        } else {
          endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
        }
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      return endpoint;
    };
    resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
            break;
          case "operationContextParams":
            endpointParams[name] = instruction.get(commandInput);
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
var init_adaptors = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js"() {
    init_getEndpointFromInstructions();
    init_toEndpointV1();
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware;
var init_endpointMiddleware = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js"() {
    init_dist_es15();
    init_dist_es3();
    init_getEndpointFromInstructions();
    endpointMiddleware = ({ config, instructions }) => {
      return (next, context) => async (args) => {
        if (config.endpoint) {
          setFeature2(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await getEndpointFromInstructions(args.input, {
          getEndpointParameterInstructions() {
            return instructions;
          }
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = getSmithyContext(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
              signing_region: authScheme.signingRegion,
              signingRegion: authScheme.signingRegion,
              signing_service: authScheme.signingName,
              signingName: authScheme.signingName,
              signingRegionSet: authScheme.signingRegionSet
            }, authScheme.properties);
          }
        }
        return next({
          ...args
        });
      };
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions, getEndpointPlugin;
var init_getEndpointPlugin = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js"() {
    init_dist_es4();
    init_endpointMiddleware();
    endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption.name
    };
    getEndpointPlugin = (config, instructions) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
          config,
          instructions
        }), endpointMiddlewareOptions);
      }
    });
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
var resolveEndpointConfig;
var init_resolveEndpointConfig = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js"() {
    init_dist_es3();
    init_getEndpointFromConfig();
    init_toEndpointV1();
    resolveEndpointConfig = (input) => {
      const tls = input.tls ?? true;
      const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      const resolvedConfig = Object.assign(input, {
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
        useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false)
      });
      let configuredEndpointPromise = void 0;
      resolvedConfig.serviceConfiguredEndpoint = async () => {
        if (input.serviceId && !configuredEndpointPromise) {
          configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
        }
        return configuredEndpointPromise;
      };
      return resolvedConfig;
    };
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/types.js
var init_types6 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/types.js"() {
  }
});

// node_modules/@smithy/middleware-endpoint/dist-es/index.js
var init_dist_es34 = __esm({
  "node_modules/@smithy/middleware-endpoint/dist-es/index.js"() {
    init_adaptors();
    init_endpointMiddleware();
    init_getEndpointPlugin();
    init_resolveEndpointConfig();
    init_types6();
  }
});

// node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE;
var init_config3 = __esm({
  "node_modules/@smithy/util-retry/dist-es/config.js"() {
    (function(RETRY_MODES2) {
      RETRY_MODES2["STANDARD"] = "standard";
      RETRY_MODES2["ADAPTIVE"] = "adaptive";
    })(RETRY_MODES || (RETRY_MODES = {}));
    DEFAULT_MAX_ATTEMPTS = 3;
    DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;
  }
});

// node_modules/@smithy/service-error-classification/dist-es/constants.js
var THROTTLING_ERROR_CODES, TRANSIENT_ERROR_CODES, TRANSIENT_ERROR_STATUS_CODES, NODEJS_TIMEOUT_ERROR_CODES2;
var init_constants5 = __esm({
  "node_modules/@smithy/service-error-classification/dist-es/constants.js"() {
    THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
    ];
    TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    NODEJS_TIMEOUT_ERROR_CODES2 = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
  }
});

// node_modules/@smithy/service-error-classification/dist-es/index.js
var isClockSkewCorrectedError, isBrowserNetworkError, isThrottlingError, isTransientError, isServerError;
var init_dist_es35 = __esm({
  "node_modules/@smithy/service-error-classification/dist-es/index.js"() {
    init_constants5();
    isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
    isBrowserNetworkError = (error) => {
      const errorMessages = /* @__PURE__ */ new Set([
        "Failed to fetch",
        "NetworkError when attempting to fetch resource",
        "The Internet connection appears to be offline",
        "Load failed",
        "Network request failed"
      ]);
      const isValid = error && error instanceof TypeError;
      if (!isValid) {
        return false;
      }
      return errorMessages.has(error.message);
    };
    isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
    isTransientError = (error, depth = 0) => isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES2.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1);
    isServerError = (error) => {
      if (error.$metadata?.httpStatusCode !== void 0) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
          return true;
        }
        return false;
      }
      return false;
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter;
var init_DefaultRateLimiter = __esm({
  "node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js"() {
    init_dist_es35();
    DefaultRateLimiter = class _DefaultRateLimiter {
      constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
          const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (isThrottlingError(response)) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t5 = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t5 * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
    DefaultRateLimiter.setTimeoutFn = setTimeout;
  }
});

// node_modules/@smithy/util-retry/dist-es/constants.js
var DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY, THROTTLING_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS, RETRY_COST, TIMEOUT_RETRY_COST, NO_RETRY_INCREMENT, INVOCATION_ID_HEADER, REQUEST_HEADER;
var init_constants6 = __esm({
  "node_modules/@smithy/util-retry/dist-es/constants.js"() {
    DEFAULT_RETRY_DELAY_BASE = 100;
    MAXIMUM_RETRY_DELAY = 20 * 1e3;
    THROTTLING_RETRY_DELAY_BASE = 500;
    INITIAL_RETRY_TOKENS = 500;
    RETRY_COST = 5;
    TIMEOUT_RETRY_COST = 10;
    NO_RETRY_INCREMENT = 1;
    INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    REQUEST_HEADER = "amz-sdk-request";
  }
});

// node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
var getDefaultRetryBackoffStrategy;
var init_defaultRetryBackoffStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js"() {
    init_constants6();
    getDefaultRetryBackoffStrategy = () => {
      let delayBase = DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      };
      const setDelayBase = (delay) => {
        delayBase = delay;
      };
      return {
        computeNextBackoffDelay,
        setDelayBase
      };
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
var createDefaultRetryToken;
var init_defaultRetryToken = __esm({
  "node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js"() {
    init_constants6();
    createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
      const getRetryCount = () => retryCount;
      const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
      const getRetryCost = () => retryCost;
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost
      };
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy;
var init_StandardRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js"() {
    init_config3();
    init_constants6();
    init_defaultRetryBackoffStrategy();
    init_defaultRetryToken();
    StandardRetryStrategy = class {
      constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = RETRY_MODES.STANDARD;
        this.capacity = INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
      }
      async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0
        });
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return createDefaultRetryToken({
            retryDelay,
            retryCount: token.getRetryCount() + 1,
            retryCost: capacityCost
          });
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy;
var init_AdaptiveRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js"() {
    init_config3();
    init_DefaultRateLimiter();
    init_StandardRetryStrategy();
    AdaptiveRetryStrategy = class {
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
    };
  }
});

// node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
var init_ConfiguredRetryStrategy = __esm({
  "node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js"() {
    init_constants6();
    init_StandardRetryStrategy();
  }
});

// node_modules/@smithy/util-retry/dist-es/types.js
var init_types7 = __esm({
  "node_modules/@smithy/util-retry/dist-es/types.js"() {
  }
});

// node_modules/@smithy/util-retry/dist-es/index.js
var init_dist_es36 = __esm({
  "node_modules/@smithy/util-retry/dist-es/index.js"() {
    init_AdaptiveRetryStrategy();
    init_ConfiguredRetryStrategy();
    init_DefaultRateLimiter();
    init_StandardRetryStrategy();
    init_config3();
    init_constants6();
    init_types7();
  }
});

// node_modules/uuid/dist/esm-node/rng.js
import crypto from "crypto";
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
var rnds8Pool, poolPtr;
var init_rng = __esm({
  "node_modules/uuid/dist/esm-node/rng.js"() {
    rnds8Pool = new Uint8Array(256);
    poolPtr = rnds8Pool.length;
  }
});

// node_modules/uuid/dist/esm-node/stringify.js
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
var byteToHex;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-node/stringify.js"() {
    byteToHex = [];
    for (let i5 = 0; i5 < 256; ++i5) {
      byteToHex.push((i5 + 256).toString(16).slice(1));
    }
  }
});

// node_modules/uuid/dist/esm-node/native.js
import crypto2 from "crypto";
var native_default;
var init_native = __esm({
  "node_modules/uuid/dist/esm-node/native.js"() {
    native_default = {
      randomUUID: crypto2.randomUUID
    };
  }
});

// node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i5 = 0; i5 < 16; ++i5) {
      buf[offset + i5] = rnds[i5];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default;
var init_v4 = __esm({
  "node_modules/uuid/dist/esm-node/v4.js"() {
    init_native();
    init_rng();
    init_stringify();
    v4_default = v4;
  }
});

// node_modules/uuid/dist/esm-node/index.js
var init_esm_node = __esm({
  "node_modules/uuid/dist/esm-node/index.js"() {
    init_v4();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js
var init_defaultRetryQuota = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js"() {
    init_dist_es36();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/delayDecider.js
var init_delayDecider = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/delayDecider.js"() {
    init_dist_es36();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retryDecider.js
var init_retryDecider = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retryDecider.js"() {
    init_dist_es35();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/util.js
var asSdkError;
var init_util2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/util.js"() {
    asSdkError = (error) => {
      if (error instanceof Error)
        return error;
      if (error instanceof Object)
        return Object.assign(new Error(), error);
      if (typeof error === "string")
        return new Error(error);
      return new Error(`AWS SDK error wrapper for ${error}`);
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js
var init_StandardRetryStrategy2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js"() {
    init_dist_es2();
    init_dist_es35();
    init_dist_es36();
    init_defaultRetryQuota();
    init_delayDecider();
    init_retryDecider();
    init_util2();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js
var init_AdaptiveRetryStrategy2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js"() {
    init_dist_es36();
    init_StandardRetryStrategy2();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/configurations.js
var ENV_MAX_ATTEMPTS, CONFIG_MAX_ATTEMPTS, NODE_MAX_ATTEMPT_CONFIG_OPTIONS, resolveRetryConfig, ENV_RETRY_MODE, CONFIG_RETRY_MODE, NODE_RETRY_MODE_CONFIG_OPTIONS;
var init_configurations2 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/configurations.js"() {
    init_dist_es3();
    init_dist_es36();
    ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    CONFIG_MAX_ATTEMPTS = "max_attempts";
    NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => {
        const value = env2[ENV_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      default: DEFAULT_MAX_ATTEMPTS
    };
    resolveRetryConfig = (input) => {
      const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
      const maxAttempts = normalizeProvider(_maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
      return Object.assign(input, {
        maxAttempts,
        retryStrategy: async () => {
          if (retryStrategy) {
            return retryStrategy;
          }
          const retryMode = await normalizeProvider(_retryMode)();
          if (retryMode === RETRY_MODES.ADAPTIVE) {
            return new AdaptiveRetryStrategy(maxAttempts);
          }
          return new StandardRetryStrategy(maxAttempts);
        }
      });
    };
    ENV_RETRY_MODE = "AWS_RETRY_MODE";
    CONFIG_RETRY_MODE = "retry_mode";
    NODE_RETRY_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => env2[ENV_RETRY_MODE],
      configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
      default: DEFAULT_RETRY_MODE
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
var init_omitRetryHeadersMiddleware = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js"() {
    init_dist_es2();
    init_dist_es36();
  }
});

// node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js
import { Readable as Readable5 } from "stream";
var isStreamingPayload;
var init_isStreamingPayload = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js"() {
    isStreamingPayload = (request2) => request2?.body instanceof Readable5 || typeof ReadableStream !== "undefined" && request2?.body instanceof ReadableStream;
  }
});

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware, isRetryStrategyV2, getRetryErrorInfo, getRetryErrorType, retryMiddlewareOptions, getRetryPlugin, getRetryAfterHint;
var init_retryMiddleware = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js"() {
    init_dist_es2();
    init_dist_es35();
    init_dist_es19();
    init_dist_es36();
    init_esm_node();
    init_isStreamingPayload();
    init_util2();
    retryMiddleware = (options) => (next, context) => async (args) => {
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request: request2 } = args;
        const isRequest = HttpRequest.isInstance(request2);
        if (isRequest) {
          request2.headers[INVOCATION_ID_HEADER] = v4_default();
        }
        while (true) {
          try {
            if (isRequest) {
              request2.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e5) {
            const retryErrorInfo = getRetryErrorInfo(e5);
            lastError = asSdkError(e5);
            if (isRequest && isStreamingPayload(request2)) {
              (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
              throw lastError;
            }
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += delay;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
      }
    };
    isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
    getRetryErrorInfo = (error) => {
      const errorInfo = {
        error,
        errorType: getRetryErrorType(error)
      };
      const retryAfterHint = getRetryAfterHint(error.$response);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    };
    getRetryErrorType = (error) => {
      if (isThrottlingError(error))
        return "THROTTLING";
      if (isTransientError(error))
        return "TRANSIENT";
      if (isServerError(error))
        return "SERVER_ERROR";
      return "CLIENT_ERROR";
    };
    retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true
    };
    getRetryPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
      }
    });
    getRetryAfterHint = (response) => {
      if (!HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1e3);
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate;
    };
  }
});

// node_modules/@smithy/middleware-retry/dist-es/index.js
var init_dist_es37 = __esm({
  "node_modules/@smithy/middleware-retry/dist-es/index.js"() {
    init_AdaptiveRetryStrategy2();
    init_StandardRetryStrategy2();
    init_configurations2();
    init_delayDecider();
    init_omitRetryHeadersMiddleware();
    init_retryDecider();
    init_retryMiddleware();
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js
var ENV_KEY, ENV_SECRET, ENV_SESSION, ENV_EXPIRATION, ENV_CREDENTIAL_SCOPE, ENV_ACCOUNT_ID, fromEnv2;
var init_fromEnv2 = __esm({
  "node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js"() {
    init_client2();
    init_dist_es16();
    ENV_KEY = "AWS_ACCESS_KEY_ID";
    ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
    ENV_SESSION = "AWS_SESSION_TOKEN";
    ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
    ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
    ENV_ACCOUNT_ID = "AWS_ACCOUNT_ID";
    fromEnv2 = (init) => async () => {
      init?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      const accessKeyId2 = process.env[ENV_KEY];
      const secretAccessKey2 = process.env[ENV_SECRET];
      const sessionToken = process.env[ENV_SESSION];
      const expiry = process.env[ENV_EXPIRATION];
      const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
      const accountId = process.env[ENV_ACCOUNT_ID];
      if (accessKeyId2 && secretAccessKey2) {
        const credentials = {
          accessKeyId: accessKeyId2,
          secretAccessKey: secretAccessKey2,
          ...sessionToken && { sessionToken },
          ...expiry && { expiration: new Date(expiry) },
          ...credentialScope && { credentialScope },
          ...accountId && { accountId }
        };
        setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS", "g");
        return credentials;
      }
      throw new CredentialsProviderError("Unable to find environment variable credentials.", { logger: init?.logger });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-env/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  ENV_ACCOUNT_ID: () => ENV_ACCOUNT_ID,
  ENV_CREDENTIAL_SCOPE: () => ENV_CREDENTIAL_SCOPE,
  ENV_EXPIRATION: () => ENV_EXPIRATION,
  ENV_KEY: () => ENV_KEY,
  ENV_SECRET: () => ENV_SECRET,
  ENV_SESSION: () => ENV_SESSION,
  fromEnv: () => fromEnv2
});
var init_dist_es38 = __esm({
  "node_modules/@aws-sdk/credential-provider-env/dist-es/index.js"() {
    init_fromEnv2();
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js
import { Buffer as Buffer4 } from "buffer";
import { request } from "http";
function httpRequest(options) {
  return new Promise((resolve, reject) => {
    const req = request({
      method: "GET",
      ...options,
      hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1")
    });
    req.on("error", (err) => {
      reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
      req.destroy();
    });
    req.on("timeout", () => {
      reject(new ProviderError("TimeoutError from instance metadata service"));
      req.destroy();
    });
    req.on("response", (res) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
        req.destroy();
      }
      const chunks = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        resolve(Buffer4.concat(chunks));
        req.destroy();
      });
    });
    req.end();
  });
}
var init_httpRequest2 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js"() {
    init_dist_es16();
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
var isImdsCredentials, fromImdsCredentials;
var init_ImdsCredentials = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js"() {
    isImdsCredentials = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string";
    fromImdsCredentials = (creds) => ({
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.Token,
      expiration: new Date(creds.Expiration),
      ...creds.AccountId && { accountId: creds.AccountId }
    });
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
var DEFAULT_TIMEOUT, DEFAULT_MAX_RETRIES, providerConfigFromInit;
var init_RemoteProviderInit = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js"() {
    DEFAULT_TIMEOUT = 1e3;
    DEFAULT_MAX_RETRIES = 0;
    providerConfigFromInit = ({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT }) => ({ maxRetries, timeout });
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js
var retry;
var init_retry3 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js"() {
    retry = (toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i5 = 0; i5 < maxRetries; i5++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js
import { parse } from "url";
var ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, ENV_CMDS_AUTH_TOKEN, fromContainerMetadata, requestFromEcsImds, CMDS_IP, GREENGRASS_HOSTS, GREENGRASS_PROTOCOLS, getCmdsUri;
var init_fromContainerMetadata = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js"() {
    init_dist_es16();
    init_httpRequest2();
    init_ImdsCredentials();
    init_RemoteProviderInit();
    init_retry3();
    ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    fromContainerMetadata = (init = {}) => {
      const { timeout, maxRetries } = providerConfigFromInit(init);
      return () => retry(async () => {
        const requestOptions = await getCmdsUri({ logger: init.logger });
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
          throw new CredentialsProviderError("Invalid response received from instance metadata service.", {
            logger: init.logger
          });
        }
        return fromImdsCredentials(credsResponse);
      }, maxRetries);
    };
    requestFromEcsImds = async (timeout, options) => {
      if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
        };
      }
      const buffer = await httpRequest({
        ...options,
        timeout
      });
      return buffer.toString();
    };
    CMDS_IP = "169.254.170.2";
    GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true
    };
    GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true
    };
    getCmdsUri = async ({ logger: logger2 }) => {
      if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[ENV_CMDS_RELATIVE_URI]
        };
      }
      if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = parse(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, {
            tryNextLink: false,
            logger: logger2
          });
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, {
            tryNextLink: false,
            logger: logger2
          });
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0
        };
      }
      throw new CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`, {
        tryNextLink: false,
        logger: logger2
      });
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js
var InstanceMetadataV1FallbackError;
var init_InstanceMetadataV1FallbackError = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js"() {
    init_dist_es16();
    InstanceMetadataV1FallbackError = class _InstanceMetadataV1FallbackError extends CredentialsProviderError {
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, _InstanceMetadataV1FallbackError.prototype);
      }
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
var init_Endpoint = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js"() {
    (function(Endpoint2) {
      Endpoint2["IPv4"] = "http://169.254.169.254";
      Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
    })(Endpoint || (Endpoint = {}));
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
var ENV_ENDPOINT_NAME, CONFIG_ENDPOINT_NAME, ENDPOINT_CONFIG_OPTIONS;
var init_EndpointConfigOptions = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js"() {
    ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => env2[ENV_ENDPOINT_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
      default: void 0
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
var init_EndpointMode = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js"() {
    (function(EndpointMode2) {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
    })(EndpointMode || (EndpointMode = {}));
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js
var ENV_ENDPOINT_MODE_NAME, CONFIG_ENDPOINT_MODE_NAME, ENDPOINT_MODE_CONFIG_OPTIONS;
var init_EndpointModeConfigOptions = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js"() {
    init_EndpointMode();
    ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => env2[ENV_ENDPOINT_MODE_NAME],
      configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
      default: EndpointMode.IPv4
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js
var getInstanceMetadataEndpoint, getFromEndpointConfig, getFromEndpointModeConfig;
var init_getInstanceMetadataEndpoint = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js"() {
    init_dist_es31();
    init_dist_es33();
    init_Endpoint();
    init_EndpointConfigOptions();
    init_EndpointMode();
    init_EndpointModeConfigOptions();
    getInstanceMetadataEndpoint = async () => parseUrl(await getFromEndpointConfig() || await getFromEndpointModeConfig());
    getFromEndpointConfig = async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)();
    getFromEndpointModeConfig = async () => {
      const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case EndpointMode.IPv4:
          return Endpoint.IPv4;
        case EndpointMode.IPv6:
          return Endpoint.IPv6;
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
      }
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS, STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS, STATIC_STABILITY_DOC_URL, getExtendedInstanceMetadataCredentials;
var init_getExtendedInstanceMetadataCredentials = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js"() {
    STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    getExtendedInstanceMetadataCredentials = (credentials, logger2) => {
      const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger2.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL);
      const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
      return {
        ...credentials,
        ...originalExpiration ? { originalExpiration } : {},
        expiration: newExpiration
      };
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js
var staticStabilityProvider;
var init_staticStabilityProvider = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js"() {
    init_getExtendedInstanceMetadataCredentials();
    staticStabilityProvider = (provider, options = {}) => {
      const logger2 = options?.logger || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = getExtendedInstanceMetadataCredentials(credentials, logger2);
          }
        } catch (e5) {
          if (pastCredentials) {
            logger2.warn("Credential renew failed: ", e5);
            credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger2);
          } else {
            throw e5;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js
var IMDS_PATH, IMDS_TOKEN_PATH, AWS_EC2_METADATA_V1_DISABLED, PROFILE_AWS_EC2_METADATA_V1_DISABLED, X_AWS_EC2_METADATA_TOKEN, fromInstanceMetadata, getInstanceMetadataProvider, getMetadataToken, getProfile, getCredentialsFromProfile;
var init_fromInstanceMetadata = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js"() {
    init_dist_es31();
    init_dist_es16();
    init_InstanceMetadataV1FallbackError();
    init_httpRequest2();
    init_ImdsCredentials();
    init_RemoteProviderInit();
    init_retry3();
    init_getInstanceMetadataEndpoint();
    init_staticStabilityProvider();
    IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    IMDS_TOKEN_PATH = "/latest/api/token";
    AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    fromInstanceMetadata = (init = {}) => staticStabilityProvider(getInstanceMetadataProvider(init), { logger: init.logger });
    getInstanceMetadataProvider = (init = {}) => {
      let disableFetchToken = false;
      const { logger: logger2, profile } = init;
      const { timeout, maxRetries } = providerConfigFromInit(init);
      const getCredentials2 = async (maxRetries2, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await loadConfig({
            environmentVariableSelector: (env2) => {
              const envValue = env2[AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
              if (envValue === void 0) {
                throw new CredentialsProviderError(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`, { logger: init.logger });
              }
              return fallbackBlockedFromProcessEnv;
            },
            configFileSelector: (profile2) => {
              const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
              fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
              return fallbackBlockedFromProfile;
            },
            default: false
          }, {
            profile
          })();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
          }
        }
        const imdsProfile = (await retry(async () => {
          let profile2;
          try {
            profile2 = await getProfile(options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return profile2;
        }, maxRetries2)).trim();
        return retry(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options, init);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      };
      return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
          logger2?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials2(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error) {
            if (error?.statusCode === 400) {
              throw Object.assign(error, {
                message: "EC2 Metadata token request returned error"
              });
            } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
              disableFetchToken = true;
            }
            logger2?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials2(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials2(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token
            },
            timeout
          });
        }
      };
    };
    getMetadataToken = async (options) => httpRequest({
      ...options,
      path: IMDS_TOKEN_PATH,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    });
    getProfile = async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString();
    getCredentialsFromProfile = async (profile, options, init) => {
      const credentialsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile
      })).toString());
      if (!isImdsCredentials(credentialsResponse)) {
        throw new CredentialsProviderError("Invalid response received from instance metadata service.", {
          logger: init.logger
        });
      }
      return fromImdsCredentials(credentialsResponse);
    };
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/types.js
var init_types8 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/types.js"() {
  }
});

// node_modules/@smithy/credential-provider-imds/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  DEFAULT_MAX_RETRIES: () => DEFAULT_MAX_RETRIES,
  DEFAULT_TIMEOUT: () => DEFAULT_TIMEOUT,
  ENV_CMDS_AUTH_TOKEN: () => ENV_CMDS_AUTH_TOKEN,
  ENV_CMDS_FULL_URI: () => ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI: () => ENV_CMDS_RELATIVE_URI,
  Endpoint: () => Endpoint,
  fromContainerMetadata: () => fromContainerMetadata,
  fromInstanceMetadata: () => fromInstanceMetadata,
  getInstanceMetadataEndpoint: () => getInstanceMetadataEndpoint,
  httpRequest: () => httpRequest,
  providerConfigFromInit: () => providerConfigFromInit
});
var init_dist_es39 = __esm({
  "node_modules/@smithy/credential-provider-imds/dist-es/index.js"() {
    init_fromContainerMetadata();
    init_fromInstanceMetadata();
    init_RemoteProviderInit();
    init_types8();
    init_httpRequest2();
    init_getInstanceMetadataEndpoint();
    init_Endpoint();
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js
var ECS_CONTAINER_HOST, EKS_CONTAINER_HOST_IPv4, EKS_CONTAINER_HOST_IPv6, checkUrl;
var init_checkUrl = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js"() {
    init_dist_es16();
    ECS_CONTAINER_HOST = "169.254.170.2";
    EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
    EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
    checkUrl = (url, logger2) => {
      if (url.protocol === "https:") {
        return;
      }
      if (url.hostname === ECS_CONTAINER_HOST || url.hostname === EKS_CONTAINER_HOST_IPv4 || url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
      }
      if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
          return;
        }
      } else {
        if (url.hostname === "localhost") {
          return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = (component) => {
          const num = parseInt(component, 10);
          return 0 <= num && num <= 255;
        };
        if (ipComponents[0] === "127" && inRange(ipComponents[1]) && inRange(ipComponents[2]) && inRange(ipComponents[3]) && ipComponents.length === 4) {
          return;
        }
      }
      throw new CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger: logger2 });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js
function createGetRequest(url) {
  return new HttpRequest({
    protocol: url.protocol,
    hostname: url.hostname,
    port: Number(url.port),
    path: url.pathname,
    query: Array.from(url.searchParams.entries()).reduce((acc, [k5, v6]) => {
      acc[k5] = v6;
      return acc;
    }, {}),
    fragment: url.hash
  });
}
async function getCredentials(response, logger2) {
  const stream = sdkStreamMixin2(response.body);
  const str = await stream.transformToString();
  if (response.statusCode === 200) {
    const parsed = JSON.parse(str);
    if (typeof parsed.AccessKeyId !== "string" || typeof parsed.SecretAccessKey !== "string" || typeof parsed.Token !== "string" || typeof parsed.Expiration !== "string") {
      throw new CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger: logger2 });
    }
    return {
      accessKeyId: parsed.AccessKeyId,
      secretAccessKey: parsed.SecretAccessKey,
      sessionToken: parsed.Token,
      expiration: parseRfc3339DateTime(parsed.Expiration)
    };
  }
  if (response.statusCode >= 400 && response.statusCode < 500) {
    let parsedBody = {};
    try {
      parsedBody = JSON.parse(str);
    } catch (e5) {
    }
    throw Object.assign(new CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger: logger2 }), {
      Code: parsedBody.Code,
      Message: parsedBody.Message
    });
  }
  throw new CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger: logger2 });
}
var init_requestHelpers = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js"() {
    init_dist_es16();
    init_dist_es2();
    init_dist_es19();
    init_dist_es14();
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js
var retryWrapper;
var init_retry_wrapper = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js"() {
    retryWrapper = (toRetry, maxRetries, delayMs) => {
      return async () => {
        for (let i5 = 0; i5 < maxRetries; ++i5) {
          try {
            return await toRetry();
          } catch (e5) {
            await new Promise((resolve) => setTimeout(resolve, delayMs));
          }
        }
        return await toRetry();
      };
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js
import fs from "fs/promises";
var AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, DEFAULT_LINK_LOCAL_HOST, AWS_CONTAINER_CREDENTIALS_FULL_URI, AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE, AWS_CONTAINER_AUTHORIZATION_TOKEN, fromHttp;
var init_fromHttp = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js"() {
    init_client2();
    init_dist_es11();
    init_dist_es16();
    init_checkUrl();
    init_requestHelpers();
    init_retry_wrapper();
    AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
    AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
    AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    fromHttp = (options = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
      let host;
      const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
      const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
      const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
      const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
      const warn = options.logger?.constructor?.name === "NoOpLogger" || !options.logger ? console.warn : options.logger.warn;
      if (relative && full) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        warn("awsContainerCredentialsFullUri will take precedence.");
      }
      if (token && tokenFile) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        warn("awsContainerAuthorizationToken will take precedence.");
      }
      if (full) {
        host = full;
      } else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
      } else {
        throw new CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });
      }
      const url = new URL(host);
      checkUrl(url, options.logger);
      const requestHandler = new NodeHttpHandler({
        requestTimeout: options.timeout ?? 1e3,
        connectionTimeout: options.timeout ?? 1e3
      });
      return retryWrapper(async () => {
        const request2 = createGetRequest(url);
        if (token) {
          request2.headers.Authorization = token;
        } else if (tokenFile) {
          request2.headers.Authorization = (await fs.readFile(tokenFile)).toString();
        }
        try {
          const result = await requestHandler.handle(request2);
          return getCredentials(result.response).then((creds) => setCredentialFeature(creds, "CREDENTIALS_HTTP", "z"));
        } catch (e5) {
          throw new CredentialsProviderError(String(e5), { logger: options.logger });
        }
      }, options.maxRetries ?? 3, options.timeout ?? 1e3);
    };
  }
});

// node_modules/@aws-sdk/credential-provider-http/dist-es/index.js
var dist_es_exports3 = {};
__export(dist_es_exports3, {
  fromHttp: () => fromHttp
});
var init_dist_es40 = __esm({
  "node_modules/@aws-sdk/credential-provider-http/dist-es/index.js"() {
    init_fromHttp();
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
var isSsoProfile;
var init_isSsoProfile = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js"() {
    isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/constants.js
var EXPIRE_WINDOW_MS, REFRESH_MESSAGE;
var init_constants7 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/constants.js"() {
    EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption2(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sso-oauth",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSSOOIDCHttpAuthSchemeParametersProvider, defaultSSOOIDCHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig2;
var init_httpAuthSchemeProvider = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js"() {
    init_dist_es20();
    init_dist_es3();
    defaultSSOOIDCHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSSOOIDCHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateToken": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
        }
      }
      return options;
    };
    resolveHttpAuthSchemeConfig2 = (config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return Object.assign(config_0, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
      });
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js
var resolveClientEndpointParameters2, commonParams2;
var init_EndpointParameters = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters2 = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth"
      });
    };
    commonParams2 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/package.json
var package_default2;
var init_package = __esm({
  "node_modules/@aws-sdk/nested-clients/package.json"() {
    package_default2 = {
      name: "@aws-sdk/nested-clients",
      version: "3.812.0",
      description: "Nested clients for AWS SDK packages.",
      main: "./dist-cjs/index.js",
      module: "./dist-es/index.js",
      types: "./dist-types/index.d.ts",
      scripts: {
        build: "yarn lint && concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline nested-clients",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        lint: "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
        test: "yarn g:vitest run",
        "test:watch": "yarn g:vitest watch"
      },
      engines: {
        node: ">=18.0.0"
      },
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.812.0",
        "@aws-sdk/middleware-host-header": "3.804.0",
        "@aws-sdk/middleware-logger": "3.804.0",
        "@aws-sdk/middleware-recursion-detection": "3.804.0",
        "@aws-sdk/middleware-user-agent": "3.812.0",
        "@aws-sdk/region-config-resolver": "3.808.0",
        "@aws-sdk/types": "3.804.0",
        "@aws-sdk/util-endpoints": "3.808.0",
        "@aws-sdk/util-user-agent-browser": "3.804.0",
        "@aws-sdk/util-user-agent-node": "3.812.0",
        "@smithy/config-resolver": "^4.1.2",
        "@smithy/core": "^3.3.3",
        "@smithy/fetch-http-handler": "^5.0.2",
        "@smithy/hash-node": "^4.0.2",
        "@smithy/invalid-dependency": "^4.0.2",
        "@smithy/middleware-content-length": "^4.0.2",
        "@smithy/middleware-endpoint": "^4.1.6",
        "@smithy/middleware-retry": "^4.1.7",
        "@smithy/middleware-serde": "^4.0.5",
        "@smithy/middleware-stack": "^4.0.2",
        "@smithy/node-config-provider": "^4.1.1",
        "@smithy/node-http-handler": "^4.0.4",
        "@smithy/protocol-http": "^5.1.0",
        "@smithy/smithy-client": "^4.2.6",
        "@smithy/types": "^4.2.0",
        "@smithy/url-parser": "^4.0.2",
        "@smithy/util-base64": "^4.0.0",
        "@smithy/util-body-length-browser": "^4.0.0",
        "@smithy/util-body-length-node": "^4.0.0",
        "@smithy/util-defaults-mode-browser": "^4.0.14",
        "@smithy/util-defaults-mode-node": "^4.0.14",
        "@smithy/util-endpoints": "^3.0.4",
        "@smithy/util-middleware": "^4.0.2",
        "@smithy/util-retry": "^4.0.3",
        "@smithy/util-utf8": "^4.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "./sso-oidc.d.ts",
        "./sso-oidc.js",
        "./sts.d.ts",
        "./sts.js",
        "dist-*/**"
      ],
      browser: {
        "./dist-es/submodules/sso-oidc/runtimeConfig": "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
        "./dist-es/submodules/sts/runtimeConfig": "./dist-es/submodules/sts/runtimeConfig.browser"
      },
      "react-native": {},
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "packages/nested-clients"
      },
      exports: {
        "./sso-oidc": {
          types: "./dist-types/submodules/sso-oidc/index.d.ts",
          module: "./dist-es/submodules/sso-oidc/index.js",
          node: "./dist-cjs/submodules/sso-oidc/index.js",
          import: "./dist-es/submodules/sso-oidc/index.js",
          require: "./dist-cjs/submodules/sso-oidc/index.js"
        },
        "./sts": {
          types: "./dist-types/submodules/sts/index.d.ts",
          module: "./dist-es/submodules/sts/index.js",
          node: "./dist-cjs/submodules/sts/index.js",
          import: "./dist-es/submodules/sts/index.js",
          require: "./dist-cjs/submodules/sts/index.js"
        }
      }
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js
var crtAvailability;
var init_crt_availability = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js"() {
    crtAvailability = {
      isCrtAvailable: false
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js
var isCrtAvailable;
var init_is_crt_available = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js"() {
    init_crt_availability();
    isCrtAvailable = () => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js
import { platform, release } from "os";
import { env, versions } from "process";
var createDefaultUserAgentProvider;
var init_defaultUserAgent = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js"() {
    init_is_crt_available();
    init_crt_availability();
    createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => {
      return async (config) => {
        const sections = [
          ["aws-sdk-js", clientVersion],
          ["ua", "2.1"],
          [`os/${platform()}`, release()],
          ["lang/js"],
          ["md/nodejs", `${versions.node}`]
        ];
        const crtAvailable = isCrtAvailable();
        if (crtAvailable) {
          sections.push(crtAvailable);
        }
        if (serviceId) {
          sections.push([`api/${serviceId}`, clientVersion]);
        }
        if (env.AWS_EXECUTION_ENV) {
          sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
      };
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/nodeAppIdConfigOptions.js
var UA_APP_ID_ENV_NAME, UA_APP_ID_INI_NAME, UA_APP_ID_INI_NAME_DEPRECATED, NODE_APP_ID_CONFIG_OPTIONS;
var init_nodeAppIdConfigOptions = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/nodeAppIdConfigOptions.js"() {
    init_dist_es27();
    UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    UA_APP_ID_INI_NAME = "sdk_ua_app_id";
    UA_APP_ID_INI_NAME_DEPRECATED = "sdk-ua-app-id";
    NODE_APP_ID_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => env2[UA_APP_ID_ENV_NAME],
      configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME] ?? profile[UA_APP_ID_INI_NAME_DEPRECATED],
      default: DEFAULT_UA_APP_ID
    };
  }
});

// node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js
var init_dist_es41 = __esm({
  "node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js"() {
    init_defaultUserAgent();
    init_nodeAppIdConfigOptions();
  }
});

// node_modules/@smithy/hash-node/dist-es/index.js
import { Buffer as Buffer5 } from "buffer";
import { createHash as createHash2, createHmac } from "crypto";
function castSourceData(toCast, encoding) {
  if (Buffer5.isBuffer(toCast)) {
    return toCast;
  }
  if (typeof toCast === "string") {
    return fromString(toCast, encoding);
  }
  if (ArrayBuffer.isView(toCast)) {
    return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }
  return fromArrayBuffer(toCast);
}
var Hash;
var init_dist_es42 = __esm({
  "node_modules/@smithy/hash-node/dist-es/index.js"() {
    init_dist_es6();
    init_dist_es7();
    Hash = class {
      constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
      }
      update(toHash, encoding) {
        this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? createHmac(this.algorithmIdentifier, castSourceData(this.secret)) : createHash2(this.algorithmIdentifier);
      }
    };
  }
});

// node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js
import { fstatSync, lstatSync } from "fs";
var calculateBodyLength;
var init_calculateBodyLength = __esm({
  "node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js"() {
    calculateBodyLength = (body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.byteLength(body);
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return lstatSync(body.path).size;
      } else if (typeof body.fd === "number") {
        return fstatSync(body.fd).size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    };
  }
});

// node_modules/@smithy/util-body-length-node/dist-es/index.js
var init_dist_es43 = __esm({
  "node_modules/@smithy/util-body-length-node/dist-es/index.js"() {
    init_calculateBodyLength();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/ruleset.js
var u2, v2, w2, x2, a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, _data2, ruleSet2;
var init_ruleset = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/ruleset.js"() {
    u2 = "required";
    v2 = "fn";
    w2 = "argv";
    x2 = "ref";
    a2 = true;
    b2 = "isSet";
    c2 = "booleanEquals";
    d2 = "error";
    e2 = "endpoint";
    f2 = "tree";
    g2 = "PartitionResult";
    h2 = "getAttr";
    i2 = { [u2]: false, "type": "String" };
    j2 = { [u2]: true, "default": false, "type": "Boolean" };
    k2 = { [x2]: "Endpoint" };
    l2 = { [v2]: c2, [w2]: [{ [x2]: "UseFIPS" }, true] };
    m2 = { [v2]: c2, [w2]: [{ [x2]: "UseDualStack" }, true] };
    n2 = {};
    o2 = { [v2]: h2, [w2]: [{ [x2]: g2 }, "supportsFIPS"] };
    p2 = { [x2]: g2 };
    q2 = { [v2]: c2, [w2]: [true, { [v2]: h2, [w2]: [p2, "supportsDualStack"] }] };
    r2 = [l2];
    s2 = [m2];
    t2 = [{ [x2]: "Region" }];
    _data2 = { version: "1.0", parameters: { Region: i2, UseDualStack: j2, UseFIPS: j2, Endpoint: i2 }, rules: [{ conditions: [{ [v2]: b2, [w2]: [k2] }], rules: [{ conditions: r2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d2 }, { conditions: s2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d2 }, { endpoint: { url: k2, properties: n2, headers: n2 }, type: e2 }], type: f2 }, { conditions: [{ [v2]: b2, [w2]: t2 }], rules: [{ conditions: [{ [v2]: "aws.partition", [w2]: t2, assign: g2 }], rules: [{ conditions: [l2, m2], rules: [{ conditions: [{ [v2]: c2, [w2]: [a2, o2] }, q2], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d2 }], type: f2 }, { conditions: r2, rules: [{ conditions: [{ [v2]: c2, [w2]: [o2, a2] }], rules: [{ conditions: [{ [v2]: "stringEquals", [w2]: [{ [v2]: h2, [w2]: [p2, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n2, headers: n2 }, type: e2 }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d2 }], type: f2 }, { conditions: s2, rules: [{ conditions: [q2], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d2 }], type: f2 }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }], type: f2 }, { error: "Invalid Configuration: Missing Region", type: d2 }] };
    ruleSet2 = _data2;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js
var cache2, defaultEndpointResolver2;
var init_endpointResolver = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js"() {
    init_dist_es26();
    init_dist_es25();
    init_ruleset();
    cache2 = new EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    defaultEndpointResolver2 = (endpointParams, context = {}) => {
      return cache2.get(endpointParams, () => resolveEndpoint(ruleSet2, {
        endpointParams,
        logger: context.logger
      }));
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js
var getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js"() {
    init_dist_es20();
    init_dist_es15();
    init_dist_es19();
    init_dist_es33();
    init_dist_es8();
    init_dist_es7();
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    getRuntimeConfig = (config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js
var AWS_EXECUTION_ENV, AWS_REGION_ENV, AWS_DEFAULT_REGION_ENV, ENV_IMDS_DISABLED2, DEFAULTS_MODE_OPTIONS, IMDS_REGION_PATH;
var init_constants8 = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js"() {
    AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    AWS_REGION_ENV = "AWS_REGION";
    AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    ENV_IMDS_DISABLED2 = "AWS_EC2_METADATA_DISABLED";
    DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    IMDS_REGION_PATH = "/latest/meta-data/placement/region";
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js
var AWS_DEFAULTS_MODE_ENV, AWS_DEFAULTS_MODE_CONFIG, NODE_DEFAULTS_MODE_CONFIG_OPTIONS;
var init_defaultsModeConfig = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js"() {
    AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env2) => {
        return env2[AWS_DEFAULTS_MODE_ENV];
      },
      configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      },
      default: "legacy"
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig, resolveNodeDefaultsModeAuto, inferPhysicalRegion;
var init_resolveDefaultsModeConfig = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js"() {
    init_dist_es28();
    init_dist_es31();
    init_dist_es16();
    init_constants8();
    init_defaultsModeConfig();
    resolveDefaultsModeConfig = ({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => memoize(async () => {
      const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
      switch (mode?.toLowerCase()) {
        case "auto":
          return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(mode?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
      }
    });
    resolveNodeDefaultsModeAuto = async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    };
    inferPhysicalRegion = async () => {
      if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[ENV_IMDS_DISABLED2]) {
        try {
          const { getInstanceMetadataEndpoint: getInstanceMetadataEndpoint2, httpRequest: httpRequest2 } = await Promise.resolve().then(() => (init_dist_es39(), dist_es_exports2));
          const endpoint = await getInstanceMetadataEndpoint2();
          return (await httpRequest2({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        } catch (e5) {
        }
      }
    };
  }
});

// node_modules/@smithy/util-defaults-mode-node/dist-es/index.js
var init_dist_es44 = __esm({
  "node_modules/@smithy/util-defaults-mode-node/dist-es/index.js"() {
    init_resolveDefaultsModeConfig();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js
var getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js"() {
    init_package();
    init_dist_es20();
    init_dist_es41();
    init_dist_es28();
    init_dist_es42();
    init_dist_es37();
    init_dist_es31();
    init_dist_es11();
    init_dist_es43();
    init_dist_es36();
    init_runtimeConfig_shared();
    init_dist_es19();
    init_dist_es44();
    init_dist_es19();
    getRuntimeConfig2 = (config) => {
      emitWarningIfUnsupportedVersion2(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = { profile: config?.profile, logger: clientSharedValues.logger };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
        }, config),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    };
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
var getAwsRegionExtensionConfiguration, resolveAwsRegionExtensionConfiguration;
var init_extensions4 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js"() {
    getAwsRegionExtensionConfiguration = (runtimeConfig) => {
      return {
        setRegion(region) {
          runtimeConfig.region = region;
        },
        region() {
          return runtimeConfig.region;
        }
      };
    };
    resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
      return {
        region: awsRegionExtensionConfiguration.region()
      };
    };
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
var init_config4 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js"() {
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js
var init_isFipsRegion2 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js
var init_getRealRegion2 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js"() {
    init_isFipsRegion2();
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var init_resolveRegionConfig2 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
    init_getRealRegion2();
    init_isFipsRegion2();
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js
var init_regionConfig2 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js"() {
    init_config4();
    init_resolveRegionConfig2();
  }
});

// node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
var init_dist_es45 = __esm({
  "node_modules/@aws-sdk/region-config-resolver/dist-es/index.js"() {
    init_extensions4();
    init_regionConfig2();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    resolveHttpAuthRuntimeConfig = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js
var resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js"() {
    init_dist_es45();
    init_dist_es2();
    init_dist_es19();
    init_httpAuthExtensionConfiguration();
    resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js
var SSOOIDCClient;
var init_SSOOIDCClient = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js"() {
    init_dist_es21();
    init_dist_es22();
    init_dist_es23();
    init_dist_es27();
    init_dist_es28();
    init_dist_es15();
    init_dist_es29();
    init_dist_es34();
    init_dist_es37();
    init_dist_es19();
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    SSOOIDCClient = class extends Client {
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters2(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveRegionConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveEndpointConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig2(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSSOOIDCHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          })
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js
var SSOOIDCServiceException;
var init_SSOOIDCServiceException = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js"() {
    init_dist_es19();
    SSOOIDCServiceException = class _SSOOIDCServiceException extends ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js
var AccessDeniedException, AuthorizationPendingException, CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException;
var init_models_0 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js"() {
    init_dist_es19();
    init_SSOOIDCServiceException();
    AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
      name = "AuthorizationPendingException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    CreateTokenRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: SENSITIVE_STRING }
    });
    CreateTokenResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: SENSITIVE_STRING },
      ...obj.idToken && { idToken: SENSITIVE_STRING }
    });
    ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
      name = "ExpiredTokenException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
      name = "InternalServerException";
      $fault = "server";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
      name = "InvalidClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
      name = "InvalidGrantException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
      name = "InvalidRequestException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
      name = "InvalidScopeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
      name = "SlowDownException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
      name = "UnauthorizedClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
      name = "UnsupportedGrantTypeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/protocols/Aws_restJson1.js
var se_CreateTokenCommand, de_CreateTokenCommand, de_CommandError2, throwDefaultError3, de_AccessDeniedExceptionRes, de_AuthorizationPendingExceptionRes, de_ExpiredTokenExceptionRes, de_InternalServerExceptionRes, de_InvalidClientExceptionRes, de_InvalidGrantExceptionRes, de_InvalidRequestExceptionRes, de_InvalidScopeExceptionRes, de_SlowDownExceptionRes, de_UnauthorizedClientExceptionRes, de_UnsupportedGrantTypeExceptionRes, deserializeMetadata3;
var init_Aws_restJson1 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/protocols/Aws_restJson1.js"() {
    init_dist_es20();
    init_dist_es15();
    init_dist_es19();
    init_models_0();
    init_SSOOIDCServiceException();
    se_CreateTokenCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b5.bp("/token");
      let body;
      body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        codeVerifier: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_2) => _json(_2)
      }));
      b5.m("POST").h(headers).b(body);
      return b5.build();
    };
    de_CreateTokenCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata3(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        accessToken: expectString,
        expiresIn: expectInt32,
        idToken: expectString,
        refreshToken: expectString,
        tokenType: expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_CommandError2 = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseJsonErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
          throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
          throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
          throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
          throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError3({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    throwDefaultError3 = withBaseException(SSOOIDCServiceException);
    de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new AccessDeniedException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InternalServerExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InternalServerException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidClientExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidGrantException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidScopeException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_SlowDownExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new SlowDownException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        error: expectString,
        error_description: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    deserializeMetadata3 = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js
var CreateTokenCommand;
var init_CreateTokenCommand = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js"() {
    init_dist_es34();
    init_dist_es4();
    init_dist_es19();
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    CreateTokenCommand = class extends Command.classBuilder().ep(commonParams2).m(function(Command2, cs2, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog).ser(se_CreateTokenCommand).de(de_CreateTokenCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js
var commands, SSOOIDC;
var init_SSOOIDC = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js"() {
    init_dist_es19();
    init_CreateTokenCommand();
    init_SSOOIDCClient();
    commands = {
      CreateTokenCommand
    };
    SSOOIDC = class extends SSOOIDCClient {
    };
    createAggregatedClient(commands, SSOOIDC);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js
var init_commands = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js"() {
    init_CreateTokenCommand();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/index.js
var init_models = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/index.js"() {
    init_models_0();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js
var sso_oidc_exports = {};
__export(sso_oidc_exports, {
  $Command: () => Command,
  AccessDeniedException: () => AccessDeniedException,
  AuthorizationPendingException: () => AuthorizationPendingException,
  CreateTokenCommand: () => CreateTokenCommand,
  CreateTokenRequestFilterSensitiveLog: () => CreateTokenRequestFilterSensitiveLog,
  CreateTokenResponseFilterSensitiveLog: () => CreateTokenResponseFilterSensitiveLog,
  ExpiredTokenException: () => ExpiredTokenException,
  InternalServerException: () => InternalServerException,
  InvalidClientException: () => InvalidClientException,
  InvalidGrantException: () => InvalidGrantException,
  InvalidRequestException: () => InvalidRequestException,
  InvalidScopeException: () => InvalidScopeException,
  SSOOIDC: () => SSOOIDC,
  SSOOIDCClient: () => SSOOIDCClient,
  SSOOIDCServiceException: () => SSOOIDCServiceException,
  SlowDownException: () => SlowDownException,
  UnauthorizedClientException: () => UnauthorizedClientException,
  UnsupportedGrantTypeException: () => UnsupportedGrantTypeException,
  __Client: () => Client
});
var init_sso_oidc = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js"() {
    init_SSOOIDCClient();
    init_SSOOIDC();
    init_commands();
    init_models();
    init_SSOOIDCServiceException();
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
var getSsoOidcClient;
var init_getSsoOidcClient = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js"() {
    getSsoOidcClient = async (ssoRegion, init = {}) => {
      const { SSOOIDCClient: SSOOIDCClient2 } = await Promise.resolve().then(() => (init_sso_oidc(), sso_oidc_exports));
      const ssoOidcClient = new SSOOIDCClient2(Object.assign({}, init.clientConfig ?? {}, {
        region: ssoRegion ?? init.clientConfig?.region,
        logger: init.clientConfig?.logger ?? init.parentClientConfig?.logger
      }));
      return ssoOidcClient;
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js
var getNewSsoOidcToken;
var init_getNewSsoOidcToken = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js"() {
    init_getSsoOidcClient();
    getNewSsoOidcToken = async (ssoToken, ssoRegion, init = {}) => {
      const { CreateTokenCommand: CreateTokenCommand2 } = await Promise.resolve().then(() => (init_sso_oidc(), sso_oidc_exports));
      const ssoOidcClient = await getSsoOidcClient(ssoRegion, init);
      return ssoOidcClient.send(new CreateTokenCommand2({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token"
      }));
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js
var validateTokenExpiry;
var init_validateTokenExpiry = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js"() {
    init_dist_es16();
    init_constants7();
    validateTokenExpiry = (token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
      }
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js
var validateTokenKey;
var init_validateTokenKey = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js"() {
    init_dist_es16();
    init_constants7();
    validateTokenKey = (key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
      }
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js
import { promises as fsPromises3 } from "fs";
var writeFile, writeSSOTokenToFile;
var init_writeSSOTokenToFile = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js"() {
    init_dist_es30();
    ({ writeFile } = fsPromises3);
    writeSSOTokenToFile = (id, ssoToken) => {
      const tokenFilepath = getSSOTokenFilepath(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/fromSso.js
var lastRefreshAttemptTime, fromSso;
var init_fromSso = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/fromSso.js"() {
    init_dist_es16();
    init_dist_es30();
    init_constants7();
    init_getNewSsoOidcToken();
    init_validateTokenExpiry();
    init_validateTokenKey();
    init_writeSSOTokenToFile();
    lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    fromSso = (_init = {}) => async ({ callerClientConfig } = {}) => {
      const init = {
        ..._init,
        parentClientConfig: {
          ...callerClientConfig,
          ..._init.parentClientConfig
        }
      };
      init.logger?.debug("@aws-sdk/token-providers - fromSso");
      const profiles = await parseKnownFiles(init);
      const profileName = getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      });
      const profile = profiles[profileName];
      if (!profile) {
        throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await loadSsoSessionData(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
      }
      const ssoStartUrl = ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await getSSOTokenFromFile(ssoSessionName);
      } catch (e5) {
        throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
      }
      validateTokenKey("accessToken", ssoToken.accessToken);
      validateTokenKey("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
      validateTokenKey("clientId", ssoToken.clientId, true);
      validateTokenKey("clientSecret", ssoToken.clientSecret, true);
      validateTokenKey("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion, init);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await writeSSOTokenToFile(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
    };
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js
var init_fromStatic3 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js"() {
    init_dist_es16();
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js
var init_nodeProvider = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js"() {
    init_dist_es16();
  }
});

// node_modules/@aws-sdk/token-providers/dist-es/index.js
var init_dist_es46 = __esm({
  "node_modules/@aws-sdk/token-providers/dist-es/index.js"() {
    init_fromSso();
    init_fromStatic3();
    init_nodeProvider();
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption3(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "awsssoportal",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
function createSmithyApiNoAuthHttpAuthOption2(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSSOHttpAuthSchemeParametersProvider, defaultSSOHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig3;
var init_httpAuthSchemeProvider2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthSchemeProvider.js"() {
    init_dist_es20();
    init_dist_es3();
    defaultSSOHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSSOHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetRoleCredentials": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "ListAccountRoles": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "ListAccounts": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        case "Logout": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption3(authParameters));
        }
      }
      return options;
    };
    resolveHttpAuthSchemeConfig3 = (config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return Object.assign(config_0, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
      });
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters3, commonParams3;
var init_EndpointParameters2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters3 = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
      });
    };
    commonParams3 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/client-sso/package.json
var package_default3;
var init_package2 = __esm({
  "node_modules/@aws-sdk/client-sso/package.json"() {
    package_default3 = {
      name: "@aws-sdk/client-sso",
      description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
      version: "3.812.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.812.0",
        "@aws-sdk/middleware-host-header": "3.804.0",
        "@aws-sdk/middleware-logger": "3.804.0",
        "@aws-sdk/middleware-recursion-detection": "3.804.0",
        "@aws-sdk/middleware-user-agent": "3.812.0",
        "@aws-sdk/region-config-resolver": "3.808.0",
        "@aws-sdk/types": "3.804.0",
        "@aws-sdk/util-endpoints": "3.808.0",
        "@aws-sdk/util-user-agent-browser": "3.804.0",
        "@aws-sdk/util-user-agent-node": "3.812.0",
        "@smithy/config-resolver": "^4.1.2",
        "@smithy/core": "^3.3.3",
        "@smithy/fetch-http-handler": "^5.0.2",
        "@smithy/hash-node": "^4.0.2",
        "@smithy/invalid-dependency": "^4.0.2",
        "@smithy/middleware-content-length": "^4.0.2",
        "@smithy/middleware-endpoint": "^4.1.6",
        "@smithy/middleware-retry": "^4.1.7",
        "@smithy/middleware-serde": "^4.0.5",
        "@smithy/middleware-stack": "^4.0.2",
        "@smithy/node-config-provider": "^4.1.1",
        "@smithy/node-http-handler": "^4.0.4",
        "@smithy/protocol-http": "^5.1.0",
        "@smithy/smithy-client": "^4.2.6",
        "@smithy/types": "^4.2.0",
        "@smithy/url-parser": "^4.0.2",
        "@smithy/util-base64": "^4.0.0",
        "@smithy/util-body-length-browser": "^4.0.0",
        "@smithy/util-body-length-node": "^4.0.0",
        "@smithy/util-defaults-mode-browser": "^4.0.14",
        "@smithy/util-defaults-mode-node": "^4.0.14",
        "@smithy/util-endpoints": "^3.0.4",
        "@smithy/util-middleware": "^4.0.2",
        "@smithy/util-retry": "^4.0.3",
        "@smithy/util-utf8": "^4.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node18": "18.2.4",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
      },
      engines: {
        node: ">=18.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso"
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js
var u3, v3, w3, x3, a3, b3, c3, d3, e3, f3, g3, h3, i3, j3, k3, l3, m3, n3, o3, p3, q3, r3, s3, t3, _data3, ruleSet3;
var init_ruleset2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js"() {
    u3 = "required";
    v3 = "fn";
    w3 = "argv";
    x3 = "ref";
    a3 = true;
    b3 = "isSet";
    c3 = "booleanEquals";
    d3 = "error";
    e3 = "endpoint";
    f3 = "tree";
    g3 = "PartitionResult";
    h3 = "getAttr";
    i3 = { [u3]: false, "type": "String" };
    j3 = { [u3]: true, "default": false, "type": "Boolean" };
    k3 = { [x3]: "Endpoint" };
    l3 = { [v3]: c3, [w3]: [{ [x3]: "UseFIPS" }, true] };
    m3 = { [v3]: c3, [w3]: [{ [x3]: "UseDualStack" }, true] };
    n3 = {};
    o3 = { [v3]: h3, [w3]: [{ [x3]: g3 }, "supportsFIPS"] };
    p3 = { [x3]: g3 };
    q3 = { [v3]: c3, [w3]: [true, { [v3]: h3, [w3]: [p3, "supportsDualStack"] }] };
    r3 = [l3];
    s3 = [m3];
    t3 = [{ [x3]: "Region" }];
    _data3 = { version: "1.0", parameters: { Region: i3, UseDualStack: j3, UseFIPS: j3, Endpoint: i3 }, rules: [{ conditions: [{ [v3]: b3, [w3]: [k3] }], rules: [{ conditions: r3, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d3 }, { conditions: s3, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d3 }, { endpoint: { url: k3, properties: n3, headers: n3 }, type: e3 }], type: f3 }, { conditions: [{ [v3]: b3, [w3]: t3 }], rules: [{ conditions: [{ [v3]: "aws.partition", [w3]: t3, assign: g3 }], rules: [{ conditions: [l3, m3], rules: [{ conditions: [{ [v3]: c3, [w3]: [a3, o3] }, q3], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d3 }], type: f3 }, { conditions: r3, rules: [{ conditions: [{ [v3]: c3, [w3]: [o3, a3] }], rules: [{ conditions: [{ [v3]: "stringEquals", [w3]: [{ [v3]: h3, [w3]: [p3, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n3, headers: n3 }, type: e3 }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d3 }], type: f3 }, { conditions: s3, rules: [{ conditions: [q3], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d3 }], type: f3 }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }], type: f3 }, { error: "Invalid Configuration: Missing Region", type: d3 }] };
    ruleSet3 = _data3;
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js
var cache3, defaultEndpointResolver3;
var init_endpointResolver2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js"() {
    init_dist_es26();
    init_dist_es25();
    init_ruleset2();
    cache3 = new EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    defaultEndpointResolver3 = (endpointParams, context = {}) => {
      return cache3.get(endpointParams, () => resolveEndpoint(ruleSet3, {
        endpointParams,
        logger: context.logger
      }));
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js
var getRuntimeConfig3;
var init_runtimeConfig_shared2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js"() {
    init_dist_es20();
    init_dist_es15();
    init_dist_es19();
    init_dist_es33();
    init_dist_es8();
    init_dist_es7();
    init_httpAuthSchemeProvider2();
    init_endpointResolver2();
    getRuntimeConfig3 = (config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver3,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js
var getRuntimeConfig4;
var init_runtimeConfig2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js"() {
    init_package2();
    init_dist_es20();
    init_dist_es41();
    init_dist_es28();
    init_dist_es42();
    init_dist_es37();
    init_dist_es31();
    init_dist_es11();
    init_dist_es43();
    init_dist_es36();
    init_runtimeConfig_shared2();
    init_dist_es19();
    init_dist_es44();
    init_dist_es19();
    getRuntimeConfig4 = (config) => {
      emitWarningIfUnsupportedVersion2(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig3(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = { profile: config?.profile, logger: clientSharedValues.logger };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default3.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
        }, config),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration2, resolveHttpAuthRuntimeConfig2;
var init_httpAuthExtensionConfiguration2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration2 = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    resolveHttpAuthRuntimeConfig2 = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions2;
var init_runtimeExtensions2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/runtimeExtensions.js"() {
    init_dist_es45();
    init_dist_es2();
    init_dist_es19();
    init_httpAuthExtensionConfiguration2();
    resolveRuntimeExtensions2 = (runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration2(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig2(extensionConfiguration));
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js
var SSOClient;
var init_SSOClient = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js"() {
    init_dist_es21();
    init_dist_es22();
    init_dist_es23();
    init_dist_es27();
    init_dist_es28();
    init_dist_es15();
    init_dist_es29();
    init_dist_es34();
    init_dist_es37();
    init_dist_es19();
    init_httpAuthSchemeProvider2();
    init_EndpointParameters2();
    init_runtimeConfig2();
    init_runtimeExtensions2();
    SSOClient = class extends Client {
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig4(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters3(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveRegionConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveEndpointConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig3(_config_6);
        const _config_8 = resolveRuntimeExtensions2(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSSOHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          })
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js
var SSOServiceException;
var init_SSOServiceException = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js"() {
    init_dist_es19();
    SSOServiceException = class _SSOServiceException extends ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js
var InvalidRequestException2, ResourceNotFoundException, TooManyRequestsException, UnauthorizedException, GetRoleCredentialsRequestFilterSensitiveLog, RoleCredentialsFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog, ListAccountRolesRequestFilterSensitiveLog, ListAccountsRequestFilterSensitiveLog, LogoutRequestFilterSensitiveLog;
var init_models_02 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js"() {
    init_dist_es19();
    init_SSOServiceException();
    InvalidRequestException2 = class _InvalidRequestException extends SSOServiceException {
      name = "InvalidRequestException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
      }
    };
    ResourceNotFoundException = class _ResourceNotFoundException extends SSOServiceException {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    TooManyRequestsException = class _TooManyRequestsException extends SSOServiceException {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
      }
    };
    UnauthorizedException = class _UnauthorizedException extends SSOServiceException {
      name = "UnauthorizedException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedException.prototype);
      }
    };
    GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    });
    RoleCredentialsFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING },
      ...obj.sessionToken && { sessionToken: SENSITIVE_STRING }
    });
    GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
    });
    ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    });
    ListAccountsRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    });
    LogoutRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: SENSITIVE_STRING }
    });
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js
var se_GetRoleCredentialsCommand, se_ListAccountRolesCommand, se_ListAccountsCommand, se_LogoutCommand, de_GetRoleCredentialsCommand, de_ListAccountRolesCommand, de_ListAccountsCommand, de_LogoutCommand, de_CommandError3, throwDefaultError4, de_InvalidRequestExceptionRes2, de_ResourceNotFoundExceptionRes, de_TooManyRequestsExceptionRes, de_UnauthorizedExceptionRes, deserializeMetadata4, _aI, _aT, _ai, _mR, _mr, _nT, _nt, _rN, _rn, _xasbt;
var init_Aws_restJson12 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js"() {
    init_dist_es20();
    init_dist_es15();
    init_dist_es19();
    init_models_02();
    init_SSOServiceException();
    se_GetRoleCredentialsCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/federation/credentials");
      const query = map({
        [_rn]: [, expectNonNull(input[_rN], `roleName`)],
        [_ai]: [, expectNonNull(input[_aI], `accountId`)]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    };
    se_ListAccountRolesCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/assignment/roles");
      const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai]: [, expectNonNull(input[_aI], `accountId`)]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    };
    se_ListAccountsCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/assignment/accounts");
      const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()]
      });
      let body;
      b5.m("GET").h(headers).q(query).b(body);
      return b5.build();
    };
    se_LogoutCommand = async (input, context) => {
      const b5 = requestBuilder(input, context);
      const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b5.bp("/logout");
      let body;
      b5.m("POST").h(headers).b(body);
      return b5.build();
    };
    de_GetRoleCredentialsCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        roleCredentials: _json
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_ListAccountRolesCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        nextToken: expectString,
        roleList: _json
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_ListAccountsCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      const data = expectNonNull(expectObject(await parseJsonBody(output.body, context)), "body");
      const doc = take(data, {
        accountList: _json,
        nextToken: expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_LogoutCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = map({
        $metadata: deserializeMetadata4(output)
      });
      await collectBody(output.body, context);
      return contents;
    };
    de_CommandError3 = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseJsonErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes2(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError4({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    throwDefaultError4 = withBaseException(SSOServiceException);
    de_InvalidRequestExceptionRes2 = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException2({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
      const contents = map({});
      const data = parsedOutput.body;
      const doc = take(data, {
        message: expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedException({
        $metadata: deserializeMetadata4(parsedOutput),
        ...contents
      });
      return decorateServiceException(exception, parsedOutput.body);
    };
    deserializeMetadata4 = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    _aI = "accountId";
    _aT = "accessToken";
    _ai = "account_id";
    _mR = "maxResults";
    _mr = "max_result";
    _nT = "nextToken";
    _nt = "next_token";
    _rN = "roleName";
    _rn = "role_name";
    _xasbt = "x-amz-sso_bearer_token";
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js
var GetRoleCredentialsCommand;
var init_GetRoleCredentialsCommand = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js"() {
    init_dist_es34();
    init_dist_es4();
    init_dist_es19();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    GetRoleCredentialsCommand = class extends Command.classBuilder().ep(commonParams3).m(function(Command2, cs2, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog).ser(se_GetRoleCredentialsCommand).de(de_GetRoleCredentialsCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountRolesCommand.js
var ListAccountRolesCommand;
var init_ListAccountRolesCommand = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountRolesCommand.js"() {
    init_dist_es34();
    init_dist_es4();
    init_dist_es19();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    ListAccountRolesCommand = class extends Command.classBuilder().ep(commonParams3).m(function(Command2, cs2, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(ListAccountRolesRequestFilterSensitiveLog, void 0).ser(se_ListAccountRolesCommand).de(de_ListAccountRolesCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountsCommand.js
var ListAccountsCommand;
var init_ListAccountsCommand = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/ListAccountsCommand.js"() {
    init_dist_es34();
    init_dist_es4();
    init_dist_es19();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    ListAccountsCommand = class extends Command.classBuilder().ep(commonParams3).m(function(Command2, cs2, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(ListAccountsRequestFilterSensitiveLog, void 0).ser(se_ListAccountsCommand).de(de_ListAccountsCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/LogoutCommand.js
var LogoutCommand;
var init_LogoutCommand = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/LogoutCommand.js"() {
    init_dist_es34();
    init_dist_es4();
    init_dist_es19();
    init_EndpointParameters2();
    init_models_02();
    init_Aws_restJson12();
    LogoutCommand = class extends Command.classBuilder().ep(commonParams3).m(function(Command2, cs2, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(LogoutRequestFilterSensitiveLog, void 0).ser(se_LogoutCommand).de(de_LogoutCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/SSO.js
var commands2, SSO;
var init_SSO = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/SSO.js"() {
    init_dist_es19();
    init_GetRoleCredentialsCommand();
    init_ListAccountRolesCommand();
    init_ListAccountsCommand();
    init_LogoutCommand();
    init_SSOClient();
    commands2 = {
      GetRoleCredentialsCommand,
      ListAccountRolesCommand,
      ListAccountsCommand,
      LogoutCommand
    };
    SSO = class extends SSOClient {
    };
    createAggregatedClient(commands2, SSO);
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/commands/index.js
var init_commands2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/commands/index.js"() {
    init_GetRoleCredentialsCommand();
    init_ListAccountRolesCommand();
    init_ListAccountsCommand();
    init_LogoutCommand();
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/pagination/Interfaces.js
var init_Interfaces = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/pagination/Interfaces.js"() {
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountRolesPaginator.js
var paginateListAccountRoles;
var init_ListAccountRolesPaginator = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountRolesPaginator.js"() {
    init_dist_es15();
    init_ListAccountRolesCommand();
    init_SSOClient();
    paginateListAccountRoles = createPaginator(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountsPaginator.js
var paginateListAccounts;
var init_ListAccountsPaginator = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/pagination/ListAccountsPaginator.js"() {
    init_dist_es15();
    init_ListAccountsCommand();
    init_SSOClient();
    paginateListAccounts = createPaginator(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/pagination/index.js
var init_pagination2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/pagination/index.js"() {
    init_Interfaces();
    init_ListAccountRolesPaginator();
    init_ListAccountsPaginator();
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/models/index.js
var init_models2 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/models/index.js"() {
    init_models_02();
  }
});

// node_modules/@aws-sdk/client-sso/dist-es/index.js
var init_dist_es47 = __esm({
  "node_modules/@aws-sdk/client-sso/dist-es/index.js"() {
    init_SSOClient();
    init_SSO();
    init_commands2();
    init_pagination2();
    init_models2();
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js
var loadSso_exports = {};
__export(loadSso_exports, {
  GetRoleCredentialsCommand: () => GetRoleCredentialsCommand,
  SSOClient: () => SSOClient
});
var init_loadSso = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js"() {
    init_dist_es47();
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js
var SHOULD_FAIL_CREDENTIAL_CHAIN, resolveSSOCredentials;
var init_resolveSSOCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js"() {
    init_client2();
    init_dist_es46();
    init_dist_es16();
    init_dist_es30();
    SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, parentClientConfig, profile, logger: logger2 }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await fromSso({ profile })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e5) {
          throw new CredentialsProviderError(e5.message, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger2
          });
        }
      } else {
        try {
          token = await getSSOTokenFromFile(ssoStartUrl);
        } catch (e5) {
          throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger2
          });
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger2
        });
      }
      const { accessToken } = token;
      const { SSOClient: SSOClient2, GetRoleCredentialsCommand: GetRoleCredentialsCommand2 } = await Promise.resolve().then(() => (init_loadSso(), loadSso_exports));
      const sso = ssoClient || new SSOClient2(Object.assign({}, clientConfig ?? {}, {
        logger: clientConfig?.logger ?? parentClientConfig?.logger,
        region: clientConfig?.region ?? ssoRegion
      }));
      let ssoResp;
      try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand2({
          accountId: ssoAccountId,
          roleName: ssoRoleName,
          accessToken
        }));
      } catch (e5) {
        throw new CredentialsProviderError(e5, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger2
        });
      }
      const { roleCredentials: { accessKeyId: accessKeyId2, secretAccessKey: secretAccessKey2, sessionToken, expiration, credentialScope, accountId } = {} } = ssoResp;
      if (!accessKeyId2 || !secretAccessKey2 || !sessionToken || !expiration) {
        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger2
        });
      }
      const credentials = {
        accessKeyId: accessKeyId2,
        secretAccessKey: secretAccessKey2,
        sessionToken,
        expiration: new Date(expiration),
        ...credentialScope && { credentialScope },
        ...accountId && { accountId }
      };
      if (ssoSession) {
        setCredentialFeature(credentials, "CREDENTIALS_SSO", "s");
      } else {
        setCredentialFeature(credentials, "CREDENTIALS_SSO_LEGACY", "u");
      }
      return credentials;
    };
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js
var validateSsoProfile;
var init_validateSsoProfile = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js"() {
    init_dist_es16();
    validateSsoProfile = (profile, logger2) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger: logger2 });
      }
      return profile;
    };
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js
var fromSSO;
var init_fromSSO = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js"() {
    init_dist_es16();
    init_dist_es30();
    init_isSsoProfile();
    init_resolveSSOCredentials();
    init_validateSsoProfile();
    fromSSO = (init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      const { ssoClient } = init;
      const profileName = getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      });
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
        }
        if (!isSsoProfile(profile)) {
          throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
            logger: init.logger
          });
        }
        if (profile?.sso_session) {
          const ssoSessions = await loadSsoSessionData(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile, init.logger);
        return resolveSSOCredentials({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          profile: profileName
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: init.logger });
      } else {
        return resolveSSOCredentials({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          profile: profileName
        });
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js
var init_types9 = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js"() {
  }
});

// node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js
var dist_es_exports4 = {};
__export(dist_es_exports4, {
  fromSSO: () => fromSSO,
  isSsoProfile: () => isSsoProfile,
  validateSsoProfile: () => validateSsoProfile
});
var init_dist_es48 = __esm({
  "node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js"() {
    init_fromSSO();
    init_isSsoProfile();
    init_types9();
    init_validateSsoProfile();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js
var resolveCredentialSource, setNamedProvider;
var init_resolveCredentialSource = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js"() {
    init_client2();
    init_dist_es16();
    resolveCredentialSource = (credentialSource, profileName, logger2) => {
      const sourceProvidersMap = {
        EcsContainer: async (options) => {
          const { fromHttp: fromHttp2 } = await Promise.resolve().then(() => (init_dist_es40(), dist_es_exports3));
          const { fromContainerMetadata: fromContainerMetadata2 } = await Promise.resolve().then(() => (init_dist_es39(), dist_es_exports2));
          logger2?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
          return async () => chain(fromHttp2(options ?? {}), fromContainerMetadata2(options))().then(setNamedProvider);
        },
        Ec2InstanceMetadata: async (options) => {
          logger2?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          const { fromInstanceMetadata: fromInstanceMetadata2 } = await Promise.resolve().then(() => (init_dist_es39(), dist_es_exports2));
          return async () => fromInstanceMetadata2(options)().then(setNamedProvider);
        },
        Environment: async (options) => {
          logger2?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          const { fromEnv: fromEnv3 } = await Promise.resolve().then(() => (init_dist_es38(), dist_es_exports));
          return async () => fromEnv3(options)().then(setNamedProvider);
        }
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
      } else {
        throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger: logger2 });
      }
    };
    setNamedProvider = (creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption4(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
function createSmithyApiNoAuthHttpAuthOption3(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var defaultSTSHttpAuthSchemeParametersProvider, defaultSTSHttpAuthSchemeProvider, resolveStsAuthConfig, resolveHttpAuthSchemeConfig4;
var init_httpAuthSchemeProvider3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js"() {
    init_dist_es20();
    init_dist_es3();
    init_STSClient();
    defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: getSmithyContext(context).operation,
        region: await normalizeProvider(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSTSHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithWebIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption4(authParameters));
        }
      }
      return options;
    };
    resolveStsAuthConfig = (input) => Object.assign(input, {
      stsClientCtor: STSClient
    });
    resolveHttpAuthSchemeConfig4 = (config) => {
      const config_0 = resolveStsAuthConfig(config);
      const config_1 = resolveAwsSdkSigV4Config(config_0);
      return Object.assign(config_1, {
        authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
      });
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js
var resolveClientEndpointParameters4, commonParams4;
var init_EndpointParameters3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters4 = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      });
    };
    commonParams4 = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/ruleset.js
var F2, G2, H2, I2, J2, a4, b4, c4, d4, e4, f4, g4, h4, i4, j4, k4, l4, m4, n4, o4, p4, q4, r4, s4, t4, u4, v5, w4, x4, y2, z2, A2, B2, C2, D2, E2, _data4, ruleSet4;
var init_ruleset3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/ruleset.js"() {
    F2 = "required";
    G2 = "type";
    H2 = "fn";
    I2 = "argv";
    J2 = "ref";
    a4 = false;
    b4 = true;
    c4 = "booleanEquals";
    d4 = "stringEquals";
    e4 = "sigv4";
    f4 = "sts";
    g4 = "us-east-1";
    h4 = "endpoint";
    i4 = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    j4 = "tree";
    k4 = "error";
    l4 = "getAttr";
    m4 = { [F2]: false, [G2]: "String" };
    n4 = { [F2]: true, "default": false, [G2]: "Boolean" };
    o4 = { [J2]: "Endpoint" };
    p4 = { [H2]: "isSet", [I2]: [{ [J2]: "Region" }] };
    q4 = { [J2]: "Region" };
    r4 = { [H2]: "aws.partition", [I2]: [q4], "assign": "PartitionResult" };
    s4 = { [J2]: "UseFIPS" };
    t4 = { [J2]: "UseDualStack" };
    u4 = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e4, "signingName": f4, "signingRegion": g4 }] }, "headers": {} };
    v5 = {};
    w4 = { "conditions": [{ [H2]: d4, [I2]: [q4, "aws-global"] }], [h4]: u4, [G2]: h4 };
    x4 = { [H2]: c4, [I2]: [s4, true] };
    y2 = { [H2]: c4, [I2]: [t4, true] };
    z2 = { [H2]: l4, [I2]: [{ [J2]: "PartitionResult" }, "supportsFIPS"] };
    A2 = { [J2]: "PartitionResult" };
    B2 = { [H2]: c4, [I2]: [true, { [H2]: l4, [I2]: [A2, "supportsDualStack"] }] };
    C2 = [{ [H2]: "isSet", [I2]: [o4] }];
    D2 = [x4];
    E2 = [y2];
    _data4 = { version: "1.0", parameters: { Region: m4, UseDualStack: n4, UseFIPS: n4, Endpoint: m4, UseGlobalEndpoint: n4 }, rules: [{ conditions: [{ [H2]: c4, [I2]: [{ [J2]: "UseGlobalEndpoint" }, b4] }, { [H2]: "not", [I2]: C2 }, p4, r4, { [H2]: c4, [I2]: [s4, a4] }, { [H2]: c4, [I2]: [t4, a4] }], rules: [{ conditions: [{ [H2]: d4, [I2]: [q4, "ap-northeast-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "ap-south-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "ap-southeast-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "ap-southeast-2"] }], endpoint: u4, [G2]: h4 }, w4, { conditions: [{ [H2]: d4, [I2]: [q4, "ca-central-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "eu-central-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "eu-north-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "eu-west-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "eu-west-2"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "eu-west-3"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "sa-east-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, g4] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "us-east-2"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "us-west-1"] }], endpoint: u4, [G2]: h4 }, { conditions: [{ [H2]: d4, [I2]: [q4, "us-west-2"] }], endpoint: u4, [G2]: h4 }, { endpoint: { url: i4, properties: { authSchemes: [{ name: e4, signingName: f4, signingRegion: "{Region}" }] }, headers: v5 }, [G2]: h4 }], [G2]: j4 }, { conditions: C2, rules: [{ conditions: D2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G2]: k4 }, { conditions: E2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G2]: k4 }, { endpoint: { url: o4, properties: v5, headers: v5 }, [G2]: h4 }], [G2]: j4 }, { conditions: [p4], rules: [{ conditions: [r4], rules: [{ conditions: [x4, y2], rules: [{ conditions: [{ [H2]: c4, [I2]: [b4, z2] }, B2], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v5, headers: v5 }, [G2]: h4 }], [G2]: j4 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G2]: k4 }], [G2]: j4 }, { conditions: D2, rules: [{ conditions: [{ [H2]: c4, [I2]: [z2, b4] }], rules: [{ conditions: [{ [H2]: d4, [I2]: [{ [H2]: l4, [I2]: [A2, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v5, headers: v5 }, [G2]: h4 }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v5, headers: v5 }, [G2]: h4 }], [G2]: j4 }, { error: "FIPS is enabled but this partition does not support FIPS", [G2]: k4 }], [G2]: j4 }, { conditions: E2, rules: [{ conditions: [B2], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v5, headers: v5 }, [G2]: h4 }], [G2]: j4 }, { error: "DualStack is enabled but this partition does not support DualStack", [G2]: k4 }], [G2]: j4 }, w4, { endpoint: { url: i4, properties: v5, headers: v5 }, [G2]: h4 }], [G2]: j4 }], [G2]: j4 }, { error: "Invalid Configuration: Missing Region", [G2]: k4 }] };
    ruleSet4 = _data4;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js
var cache4, defaultEndpointResolver4;
var init_endpointResolver3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js"() {
    init_dist_es26();
    init_dist_es25();
    init_ruleset3();
    cache4 = new EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
    });
    defaultEndpointResolver4 = (endpointParams, context = {}) => {
      return cache4.get(endpointParams, () => resolveEndpoint(ruleSet4, {
        endpointParams,
        logger: context.logger
      }));
    };
    customEndpointFunctions.aws = awsEndpointFunctions;
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js
var getRuntimeConfig5;
var init_runtimeConfig_shared3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js"() {
    init_dist_es20();
    init_dist_es15();
    init_dist_es19();
    init_dist_es33();
    init_dist_es8();
    init_dist_es7();
    init_httpAuthSchemeProvider3();
    init_endpointResolver3();
    getRuntimeConfig5 = (config) => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver4,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8
      };
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js
var getRuntimeConfig6;
var init_runtimeConfig3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js"() {
    init_package();
    init_dist_es20();
    init_dist_es41();
    init_dist_es28();
    init_dist_es15();
    init_dist_es42();
    init_dist_es37();
    init_dist_es31();
    init_dist_es11();
    init_dist_es43();
    init_dist_es36();
    init_runtimeConfig_shared3();
    init_dist_es19();
    init_dist_es44();
    init_dist_es19();
    getRuntimeConfig6 = (config) => {
      emitWarningIfUnsupportedVersion2(process.version);
      const defaultsMode = resolveDefaultsModeConfig(config);
      const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig5(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = { profile: config?.profile, logger: clientSharedValues.logger };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await config.credentialDefaultProvider(idProps?.__config || {})()),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? loadConfig({
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
        }, config),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration3, resolveHttpAuthRuntimeConfig3;
var init_httpAuthExtensionConfiguration3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration3 = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    resolveHttpAuthRuntimeConfig3 = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js
var resolveRuntimeExtensions3;
var init_runtimeExtensions3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js"() {
    init_dist_es45();
    init_dist_es2();
    init_dist_es19();
    init_httpAuthExtensionConfiguration3();
    resolveRuntimeExtensions3 = (runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration3(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig3(extensionConfiguration));
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js
var STSClient;
var init_STSClient = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js"() {
    init_dist_es21();
    init_dist_es22();
    init_dist_es23();
    init_dist_es27();
    init_dist_es28();
    init_dist_es15();
    init_dist_es29();
    init_dist_es34();
    init_dist_es37();
    init_dist_es19();
    init_httpAuthSchemeProvider3();
    init_EndpointParameters3();
    init_runtimeConfig3();
    init_runtimeExtensions3();
    STSClient = class extends Client {
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig6(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters4(_config_0);
        const _config_2 = resolveUserAgentConfig(_config_1);
        const _config_3 = resolveRetryConfig(_config_2);
        const _config_4 = resolveRegionConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveEndpointConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig4(_config_6);
        const _config_8 = resolveRuntimeExtensions3(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSTSHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          })
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js
var STSServiceException;
var init_STSServiceException = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js"() {
    init_dist_es19();
    STSServiceException = class _STSServiceException extends ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js
var CredentialsFilterSensitiveLog, AssumeRoleResponseFilterSensitiveLog, ExpiredTokenException2, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, IDPRejectedClaimException, InvalidIdentityTokenException, AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog, IDPCommunicationErrorException;
var init_models_03 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js"() {
    init_dist_es19();
    init_STSServiceException();
    CredentialsFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }
    });
    AssumeRoleResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
    ExpiredTokenException2 = class _ExpiredTokenException extends STSServiceException {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
      }
    };
    MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException {
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _MalformedPolicyDocumentException.prototype);
      }
    };
    PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException {
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _PackedPolicyTooLargeException.prototype);
      }
    };
    RegionDisabledException = class _RegionDisabledException extends STSServiceException {
      name = "RegionDisabledException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _RegionDisabledException.prototype);
      }
    };
    IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException {
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPRejectedClaimException.prototype);
      }
    };
    InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException {
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidIdentityTokenException.prototype);
      }
    };
    AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.WebIdentityToken && { WebIdentityToken: SENSITIVE_STRING }
    });
    AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
    IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException {
      name = "IDPCommunicationErrorException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPCommunicationErrorException.prototype);
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/protocols/Aws_query.js
var se_AssumeRoleCommand, se_AssumeRoleWithWebIdentityCommand, de_AssumeRoleCommand, de_AssumeRoleWithWebIdentityCommand, de_CommandError4, de_ExpiredTokenExceptionRes2, de_IDPCommunicationErrorExceptionRes, de_IDPRejectedClaimExceptionRes, de_InvalidIdentityTokenExceptionRes, de_MalformedPolicyDocumentExceptionRes, de_PackedPolicyTooLargeExceptionRes, de_RegionDisabledExceptionRes, se_AssumeRoleRequest, se_AssumeRoleWithWebIdentityRequest, se_policyDescriptorListType, se_PolicyDescriptorType, se_ProvidedContext, se_ProvidedContextsListType, se_Tag, se_tagKeyListType, se_tagListType, de_AssumedRoleUser, de_AssumeRoleResponse, de_AssumeRoleWithWebIdentityResponse, de_Credentials, de_ExpiredTokenException, de_IDPCommunicationErrorException, de_IDPRejectedClaimException, de_InvalidIdentityTokenException, de_MalformedPolicyDocumentException, de_PackedPolicyTooLargeException, de_RegionDisabledException, deserializeMetadata5, throwDefaultError5, buildHttpRpcRequest, SHARED_HEADERS, _, _A, _AKI2, _AR2, _ARI, _ARU, _ARWWI, _Ar, _Au, _C2, _CA2, _DS, _E2, _EI, _K, _P, _PA, _PAr, _PC2, _PI, _PPS, _Pr, _RA, _RSN, _SAK2, _SFWIT, _SI, _SN, _ST2, _T2, _TC2, _TTK, _V, _Va, _WIT, _a, _m, buildFormUrlencodedString, loadQueryErrorCode;
var init_Aws_query = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/protocols/Aws_query.js"() {
    init_dist_es20();
    init_dist_es2();
    init_dist_es19();
    init_models_03();
    init_STSServiceException();
    se_AssumeRoleCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        [_A]: _AR2,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_AssumeRoleWithWebIdentityCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        [_A]: _ARWWI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    de_AssumeRoleCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_AssumeRoleWithWebIdentityCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError4(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata5(output),
        ...contents
      };
      return response;
    };
    de_CommandError4 = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseXmlErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes2(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
          throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
          throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
          throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError5({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    de_ExpiredTokenExceptionRes2 = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ExpiredTokenException(body.Error, context);
      const exception = new ExpiredTokenException2({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_IDPCommunicationErrorExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPCommunicationErrorException(body.Error, context);
      const exception = new IDPCommunicationErrorException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_IDPRejectedClaimExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPRejectedClaimException(body.Error, context);
      const exception = new IDPRejectedClaimException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_InvalidIdentityTokenExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidIdentityTokenException(body.Error, context);
      const exception = new InvalidIdentityTokenException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
      const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_PackedPolicyTooLargeExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
      const exception = new PackedPolicyTooLargeException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    de_RegionDisabledExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_RegionDisabledException(body.Error, context);
      const exception = new RegionDisabledException({
        $metadata: deserializeMetadata5(parsedOutput),
        ...deserialized
      });
      return decorateServiceException(exception, body);
    };
    se_AssumeRoleRequest = (input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T2] != null) {
        const memberEntries = se_tagListType(input[_T2], context);
        if (input[_T2]?.length === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK], context);
        if (input[_TTK]?.length === 0) {
          entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `TransitiveTagKeys.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_EI] != null) {
        entries[_EI] = input[_EI];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC2] != null) {
        entries[_TC2] = input[_TC2];
      }
      if (input[_SI] != null) {
        entries[_SI] = input[_SI];
      }
      if (input[_PC2] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC2], context);
        if (input[_PC2]?.length === 0) {
          entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ProvidedContexts.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    };
    se_AssumeRoleWithWebIdentityRequest = (input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
      }
      if (input[_PI] != null) {
        entries[_PI] = input[_PI];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    };
    se_policyDescriptorListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    se_PolicyDescriptorType = (input, context) => {
      const entries = {};
      if (input[_a] != null) {
        entries[_a] = input[_a];
      }
      return entries;
    };
    se_ProvidedContext = (input, context) => {
      const entries = {};
      if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
      }
      if (input[_CA2] != null) {
        entries[_CA2] = input[_CA2];
      }
      return entries;
    };
    se_ProvidedContextsListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    se_Tag = (input, context) => {
      const entries = {};
      if (input[_K] != null) {
        entries[_K] = input[_K];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    };
    se_tagKeyListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    };
    se_tagListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    de_AssumedRoleUser = (output, context) => {
      const contents = {};
      if (output[_ARI] != null) {
        contents[_ARI] = expectString(output[_ARI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
      }
      return contents;
    };
    de_AssumeRoleResponse = (output, context) => {
      const contents = {};
      if (output[_C2] != null) {
        contents[_C2] = de_Credentials(output[_C2], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
      }
      return contents;
    };
    de_AssumeRoleWithWebIdentityResponse = (output, context) => {
      const contents = {};
      if (output[_C2] != null) {
        contents[_C2] = de_Credentials(output[_C2], context);
      }
      if (output[_SFWIT] != null) {
        contents[_SFWIT] = expectString(output[_SFWIT]);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
      }
      if (output[_Pr] != null) {
        contents[_Pr] = expectString(output[_Pr]);
      }
      if (output[_Au] != null) {
        contents[_Au] = expectString(output[_Au]);
      }
      if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
      }
      return contents;
    };
    de_Credentials = (output, context) => {
      const contents = {};
      if (output[_AKI2] != null) {
        contents[_AKI2] = expectString(output[_AKI2]);
      }
      if (output[_SAK2] != null) {
        contents[_SAK2] = expectString(output[_SAK2]);
      }
      if (output[_ST2] != null) {
        contents[_ST2] = expectString(output[_ST2]);
      }
      if (output[_E2] != null) {
        contents[_E2] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_E2]));
      }
      return contents;
    };
    de_ExpiredTokenException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_IDPCommunicationErrorException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_IDPRejectedClaimException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_InvalidIdentityTokenException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_MalformedPolicyDocumentException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_PackedPolicyTooLargeException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    de_RegionDisabledException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
      }
      return contents;
    };
    deserializeMetadata5 = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    throwDefaultError5 = withBaseException(STSServiceException);
    buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new HttpRequest(contents);
    };
    SHARED_HEADERS = {
      "content-type": "application/x-www-form-urlencoded"
    };
    _ = "2011-06-15";
    _A = "Action";
    _AKI2 = "AccessKeyId";
    _AR2 = "AssumeRole";
    _ARI = "AssumedRoleId";
    _ARU = "AssumedRoleUser";
    _ARWWI = "AssumeRoleWithWebIdentity";
    _Ar = "Arn";
    _Au = "Audience";
    _C2 = "Credentials";
    _CA2 = "ContextAssertion";
    _DS = "DurationSeconds";
    _E2 = "Expiration";
    _EI = "ExternalId";
    _K = "Key";
    _P = "Policy";
    _PA = "PolicyArns";
    _PAr = "ProviderArn";
    _PC2 = "ProvidedContexts";
    _PI = "ProviderId";
    _PPS = "PackedPolicySize";
    _Pr = "Provider";
    _RA = "RoleArn";
    _RSN = "RoleSessionName";
    _SAK2 = "SecretAccessKey";
    _SFWIT = "SubjectFromWebIdentityToken";
    _SI = "SourceIdentity";
    _SN = "SerialNumber";
    _ST2 = "SessionToken";
    _T2 = "Tags";
    _TC2 = "TokenCode";
    _TTK = "TransitiveTagKeys";
    _V = "Version";
    _Va = "Value";
    _WIT = "WebIdentityToken";
    _a = "arn";
    _m = "message";
    buildFormUrlencodedString = (formEntries) => Object.entries(formEntries).map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value)).join("&");
    loadQueryErrorCode = (output, data) => {
      if (data.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js
var AssumeRoleCommand;
var init_AssumeRoleCommand = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js"() {
    init_dist_es34();
    init_dist_es4();
    init_dist_es19();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    AssumeRoleCommand = class extends Command.classBuilder().ep(commonParams4).m(function(Command2, cs2, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, AssumeRoleResponseFilterSensitiveLog).ser(se_AssumeRoleCommand).de(de_AssumeRoleCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js
var AssumeRoleWithWebIdentityCommand;
var init_AssumeRoleWithWebIdentityCommand = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js"() {
    init_dist_es34();
    init_dist_es4();
    init_dist_es19();
    init_EndpointParameters3();
    init_models_03();
    init_Aws_query();
    AssumeRoleWithWebIdentityCommand = class extends Command.classBuilder().ep(commonParams4).m(function(Command2, cs2, config, o5) {
      return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog).ser(se_AssumeRoleWithWebIdentityCommand).de(de_AssumeRoleWithWebIdentityCommand).build() {
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js
var commands3, STS;
var init_STS = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js"() {
    init_dist_es19();
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_STSClient();
    commands3 = {
      AssumeRoleCommand,
      AssumeRoleWithWebIdentityCommand
    };
    STS = class extends STSClient {
    };
    createAggregatedClient(commands3, STS);
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js
var init_commands3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/index.js
var init_models3 = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/index.js"() {
    init_models_03();
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js
var ASSUME_ROLE_DEFAULT_REGION, getAccountIdFromAssumedRoleUser, resolveRegion, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity, isH2;
var init_defaultStsRoleAssumers = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js"() {
    init_client2();
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
    getAccountIdFromAssumedRoleUser = (assumedRoleUser) => {
      if (typeof assumedRoleUser?.Arn === "string") {
        const arnComponents = assumedRoleUser.Arn.split(":");
        if (arnComponents.length > 4 && arnComponents[4] !== "") {
          return arnComponents[4];
        }
      }
      return void 0;
    };
    resolveRegion = async (_region, _parentRegion, credentialProviderLogger) => {
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (provider)`, `${parentRegion} (parent client)`, `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`);
      return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
    };
    getDefaultRoleAssumer = (stsOptions, STSClient2) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const { logger: logger2 = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            profile: stsOptions?.parentClientConfig?.profile,
            credentialDefaultProvider: () => async () => closureSourceCreds,
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger: logger2
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
        return credentials;
      };
    };
    getDefaultRoleAssumerWithWebIdentity = (stsOptions, STSClient2) => {
      let stsClient;
      return async (params) => {
        if (!stsClient) {
          const { logger: logger2 = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            profile: stsOptions?.parentClientConfig?.profile,
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger: logger2
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        if (accountId) {
          setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
        }
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
        return credentials;
      };
    };
    isH2 = (requestHandler) => {
      return requestHandler?.metadata?.handlerProtocol === "h2";
    };
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js
var getCustomizableStsClientCtor, getDefaultRoleAssumer2, getDefaultRoleAssumerWithWebIdentity2, decorateDefaultCredentialProvider;
var init_defaultRoleAssumers = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js"() {
    init_defaultStsRoleAssumers();
    init_STSClient();
    getCustomizableStsClientCtor = (baseCtor, customizations) => {
      if (!customizations)
        return baseCtor;
      else
        return class CustomizableSTSClient extends baseCtor {
          constructor(config) {
            super(config);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        };
    };
    getDefaultRoleAssumer2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
    getDefaultRoleAssumerWithWebIdentity2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
    decorateDefaultCredentialProvider = (provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer2(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
      ...input
    });
  }
});

// node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js
var sts_exports = {};
__export(sts_exports, {
  $Command: () => Command,
  AssumeRoleCommand: () => AssumeRoleCommand,
  AssumeRoleResponseFilterSensitiveLog: () => AssumeRoleResponseFilterSensitiveLog,
  AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  CredentialsFilterSensitiveLog: () => CredentialsFilterSensitiveLog,
  ExpiredTokenException: () => ExpiredTokenException2,
  IDPCommunicationErrorException: () => IDPCommunicationErrorException,
  IDPRejectedClaimException: () => IDPRejectedClaimException,
  InvalidIdentityTokenException: () => InvalidIdentityTokenException,
  MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
  PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
  RegionDisabledException: () => RegionDisabledException,
  STS: () => STS,
  STSClient: () => STSClient,
  STSServiceException: () => STSServiceException,
  __Client: () => Client,
  decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider,
  getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
  getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
});
var init_sts = __esm({
  "node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js"() {
    init_STSClient();
    init_STS();
    init_commands3();
    init_models3();
    init_defaultRoleAssumers();
    init_STSServiceException();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js
var isAssumeRoleProfile, isAssumeRoleWithSourceProfile, isCredentialSourceProfile, resolveAssumeRoleCredentials, isCredentialSourceWithoutRoleArn;
var init_resolveAssumeRoleCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js"() {
    init_client2();
    init_dist_es16();
    init_dist_es30();
    init_resolveCredentialSource();
    init_resolveProfileData();
    isAssumeRoleProfile = (arg, { profile = "default", logger: logger2 } = {}) => {
      return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg, { profile, logger: logger2 }) || isCredentialSourceProfile(arg, { profile, logger: logger2 }));
    };
    isAssumeRoleWithSourceProfile = (arg, { profile, logger: logger2 }) => {
      const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
      if (withSourceProfile) {
        logger2?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
      }
      return withSourceProfile;
    };
    isCredentialSourceProfile = (arg, { profile, logger: logger2 }) => {
      const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
      if (withProviderProfile) {
        logger2?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
      }
      return withProviderProfile;
    };
    resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      const profileData = profiles[profileName];
      const { source_profile, region } = profileData;
      if (!options.roleAssumer) {
        const { getDefaultRoleAssumer: getDefaultRoleAssumer3 } = await Promise.resolve().then(() => (init_sts(), sts_exports));
        options.roleAssumer = getDefaultRoleAssumer3({
          ...options.clientConfig,
          credentialProviderLogger: options.logger,
          parentClientConfig: {
            ...options?.parentClientConfig,
            region: region ?? options?.parentClientConfig?.region
          }
        }, options.clientPlugins);
      }
      if (source_profile && source_profile in visitedProfiles) {
        throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), { logger: options.logger });
      }
      options.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`);
      const sourceCredsProvider = source_profile ? resolveProfileData(source_profile, profiles, options, {
        ...visitedProfiles,
        [source_profile]: true
      }, isCredentialSourceWithoutRoleArn(profiles[source_profile] ?? {})) : (await resolveCredentialSource(profileData.credential_source, profileName, options.logger)(options))();
      if (isCredentialSourceWithoutRoleArn(profileData)) {
        return sourceCredsProvider.then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      } else {
        const params = {
          RoleArn: profileData.role_arn,
          RoleSessionName: profileData.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: profileData.external_id,
          DurationSeconds: parseInt(profileData.duration_seconds || "3600", 10)
        };
        const { mfa_serial } = profileData;
        if (mfa_serial) {
          if (!options.mfaCodeProvider) {
            throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: options.logger, tryNextLink: false });
          }
          params.SerialNumber = mfa_serial;
          params.TokenCode = await options.mfaCodeProvider(mfa_serial);
        }
        const sourceCreds = await sourceCredsProvider;
        return options.roleAssumer(sourceCreds, params).then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      }
    };
    isCredentialSourceWithoutRoleArn = (section) => {
      return !section.role_arn && !!section.credential_source;
    };
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
var getValidatedProcessCredentials;
var init_getValidatedProcessCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js"() {
    init_client2();
    getValidatedProcessCredentials = (profileName, data, profiles) => {
      if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
      }
      if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
      }
      if (data.Expiration) {
        const currentTime = /* @__PURE__ */ new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
          throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
      }
      let accountId = data.AccountId;
      if (!accountId && profiles?.[profileName]?.aws_account_id) {
        accountId = profiles[profileName].aws_account_id;
      }
      const credentials = {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && { sessionToken: data.SessionToken },
        ...data.Expiration && { expiration: new Date(data.Expiration) },
        ...data.CredentialScope && { credentialScope: data.CredentialScope },
        ...accountId && { accountId }
      };
      setCredentialFeature(credentials, "CREDENTIALS_PROCESS", "w");
      return credentials;
    };
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
import { exec } from "child_process";
import { promisify } from "util";
var resolveProcessCredentials;
var init_resolveProcessCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js"() {
    init_dist_es16();
    init_getValidatedProcessCredentials();
    resolveProcessCredentials = async (profileName, profiles, logger2) => {
      const profile = profiles[profileName];
      if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== void 0) {
          const execPromise = promisify(exec);
          try {
            const { stdout } = await execPromise(credentialProcess);
            let data;
            try {
              data = JSON.parse(stdout.trim());
            } catch {
              throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
            }
            return getValidatedProcessCredentials(profileName, data, profiles);
          } catch (error) {
            throw new CredentialsProviderError(error.message, { logger: logger2 });
          }
        } else {
          throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`, { logger: logger2 });
        }
      } else {
        throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`, {
          logger: logger2
        });
      }
    };
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js
var fromProcess;
var init_fromProcess = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js"() {
    init_dist_es30();
    init_resolveProcessCredentials();
    fromProcess = (init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
      const profiles = await parseKnownFiles(init);
      return resolveProcessCredentials(getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      }), profiles, init.logger);
    };
  }
});

// node_modules/@aws-sdk/credential-provider-process/dist-es/index.js
var dist_es_exports5 = {};
__export(dist_es_exports5, {
  fromProcess: () => fromProcess
});
var init_dist_es49 = __esm({
  "node_modules/@aws-sdk/credential-provider-process/dist-es/index.js"() {
    init_fromProcess();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js
var isProcessProfile, resolveProcessCredentials2;
var init_resolveProcessCredentials2 = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js"() {
    init_client2();
    isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
    resolveProcessCredentials2 = async (options, profile) => Promise.resolve().then(() => (init_dist_es49(), dist_es_exports5)).then(({ fromProcess: fromProcess2 }) => fromProcess2({
      ...options,
      profile
    })().then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_PROCESS", "v")));
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js
var resolveSsoCredentials, isSsoProfile2;
var init_resolveSsoCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js"() {
    init_client2();
    resolveSsoCredentials = async (profile, profileData, options = {}) => {
      const { fromSSO: fromSSO2 } = await Promise.resolve().then(() => (init_dist_es48(), dist_es_exports4));
      return fromSSO2({
        profile,
        logger: options.logger,
        parentClientConfig: options.parentClientConfig,
        clientConfig: options.clientConfig
      })().then((creds) => {
        if (profileData.sso_session) {
          return setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO", "r");
        } else {
          return setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
        }
      });
    };
    isSsoProfile2 = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
var isStaticCredsProfile, resolveStaticCredentials;
var init_resolveStaticCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js"() {
    init_client2();
    isStaticCredsProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof arg.aws_account_id) > -1;
    resolveStaticCredentials = async (profile, options) => {
      options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      const credentials = {
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        ...profile.aws_credential_scope && { credentialScope: profile.aws_credential_scope },
        ...profile.aws_account_id && { accountId: profile.aws_account_id }
      };
      return setCredentialFeature(credentials, "CREDENTIALS_PROFILE", "n");
    };
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js
var fromWebToken;
var init_fromWebToken = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js"() {
    fromWebToken = (init) => async (awsIdentityProperties) => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
      const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
      let { roleAssumerWithWebIdentity } = init;
      if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity3 } = await Promise.resolve().then(() => (init_sts(), sts_exports));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity3({
          ...init.clientConfig,
          credentialProviderLogger: init.logger,
          parentClientConfig: {
            ...awsIdentityProperties?.callerClientConfig,
            ...init.parentClientConfig
          }
        }, init.clientPlugins);
      }
      return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds
      });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
import { readFileSync } from "fs";
var ENV_TOKEN_FILE, ENV_ROLE_ARN, ENV_ROLE_SESSION_NAME, fromTokenFile;
var init_fromTokenFile = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js"() {
    init_client2();
    init_dist_es16();
    init_fromWebToken();
    ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
    ENV_ROLE_ARN = "AWS_ROLE_ARN";
    ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
    fromTokenFile = (init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
      const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
      const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
      const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
      if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified", {
          logger: init.logger
        });
      }
      const credentials = await fromWebToken({
        ...init,
        webIdentityToken: readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName
      })();
      if (webIdentityTokenFile === process.env[ENV_TOKEN_FILE]) {
        setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
      }
      return credentials;
    };
  }
});

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js
var dist_es_exports6 = {};
__export(dist_es_exports6, {
  fromTokenFile: () => fromTokenFile,
  fromWebToken: () => fromWebToken
});
var init_dist_es50 = __esm({
  "node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js"() {
    init_fromTokenFile();
    init_fromWebToken();
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js
var isWebIdentityProfile, resolveWebIdentityCredentials;
var init_resolveWebIdentityCredentials = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js"() {
    init_client2();
    isWebIdentityProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
    resolveWebIdentityCredentials = async (profile, options) => Promise.resolve().then(() => (init_dist_es50(), dist_es_exports6)).then(({ fromTokenFile: fromTokenFile2 }) => fromTokenFile2({
      webIdentityTokenFile: profile.web_identity_token_file,
      roleArn: profile.role_arn,
      roleSessionName: profile.role_session_name,
      roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
      logger: options.logger,
      parentClientConfig: options.parentClientConfig
    })().then((creds) => setCredentialFeature(creds, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q")));
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js
var resolveProfileData;
var init_resolveProfileData = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js"() {
    init_dist_es16();
    init_resolveAssumeRoleCredentials();
    init_resolveProcessCredentials2();
    init_resolveSsoCredentials();
    init_resolveStaticCredentials();
    init_resolveWebIdentityCredentials();
    resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}, isAssumeRoleRecursiveCall = false) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isAssumeRoleRecursiveCall || isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
      }
      if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
      }
      if (isProcessProfile(data)) {
        return resolveProcessCredentials2(options, profileName);
      }
      if (isSsoProfile2(data)) {
        return await resolveSsoCredentials(profileName, data, options);
      }
      throw new CredentialsProviderError(`Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`, { logger: options.logger });
    };
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js
var fromIni;
var init_fromIni = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js"() {
    init_dist_es30();
    init_resolveProfileData();
    fromIni = (_init = {}) => async ({ callerClientConfig } = {}) => {
      const init = {
        ..._init,
        parentClientConfig: {
          ...callerClientConfig,
          ..._init.parentClientConfig
        }
      };
      init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      const profiles = await parseKnownFiles(init);
      return resolveProfileData(getProfileName({
        profile: _init.profile ?? callerClientConfig?.profile
      }), profiles, init);
    };
  }
});

// node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js
var dist_es_exports7 = {};
__export(dist_es_exports7, {
  fromIni: () => fromIni
});
var init_dist_es51 = __esm({
  "node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js"() {
    init_fromIni();
  }
});

// src/app.ts
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv2 from "dotenv";
import express2 from "express";

// src/routes/acussedRouter.ts
import { Router } from "express";

// src/config/configDb.ts
import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
var connection = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME
});

// src/utils/appError.ts
var AppError = class extends Error {
  code;
  statusCode;
  constructor(message, code = "APP_ERROR", statusCode = 500) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
};

// src/models/accusedModel.ts
var AccusedModel = class {
  static async getAll() {
    try {
      const { rows } = await connection.query(`
                SELECT id, name, document, type_of_doc 
                FROM accused
            `);
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in getAll:", error.message);
        throw new Error("Failed to get accused: " + error.message);
      }
      console.error("Unknown error occurred in getAll");
      throw new Error("Unknown error occurred in getAll");
    }
  }
  static async getByCc(cc2) {
    try {
      const { rows } = await connection.query(`
                SELECT * FROM accused WHERE document = $1`, [cc2]);
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in getByCc:", error.message);
        throw new Error("Failed to get accused by CC: " + error.message);
      }
      console.error("Unknown error occurred in getByCc");
      throw new Error("Unknown error occurred in getByCc");
    }
  }
  static async findByCcAndCreate(a5) {
    try {
      const { rows } = await connection.query(`
                SELECT * FROM accused WHERE document = $1`, [a5.document]);
      if (rows.length === 0) {
        const { rows: rows2 } = await connection.query(`
                    INSERT INTO accused (name, document, type_of_doc) VALUES ($1, $2, $3) RETURNING *`, [a5.name, a5.document, a5.type_of_doc]);
        return rows2[0].id;
      }
      return rows[0].id;
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(
          error.message,
          "UNKNOWN_ERROR",
          500
        );
      }
      throw new Error("Unknown error occurred in getByCc");
    }
  }
  static async create(accused) {
    try {
      const { rows } = await connection.query(`
                INSERT INTO accused (name, document, type_of_doc) VALUES ($1, $2, $3) RETURNING *
            `, [accused.name, accused.document, accused.type_of_doc]);
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in create:", error.message);
        throw new Error("Failed to create accused: " + error.message);
      }
      console.error("Unknown error occurred in create");
      throw new Error("Unknown error occurred in create");
    }
  }
};

// src/services/accusedService.ts
var AccusedService = class {
  static async getAllAccused() {
    try {
      return await AccusedModel.getAll();
    } catch (error) {
      console.error("Service Error in getAllAccused:", error);
      throw error;
    }
  }
  static async getAccusedByCc(cc2) {
    try {
      return await AccusedModel.getByCc(cc2);
    } catch (error) {
      console.error("Service Error in getAccusedByCc:", error);
      throw error;
    }
  }
  static async createAccused(accused) {
    try {
      return await AccusedModel.create(accused);
    } catch (error) {
      console.error("Service Error in createAccused:", error);
      throw error;
    }
  }
};

// src/controllers/accusedController.ts
var AccusedController = class {
  static async getAllAccused(req, res) {
    const accused = await AccusedService.getAllAccused();
    res.status(200).json(accused);
  }
  static async getAccusedByCc(req, res) {
    const cc2 = req.params.cc;
    const accused = await AccusedService.getAccusedByCc(cc2);
    if (accused) res.status(200).json(accused);
    else res.status(404).json({ message: "Accused not found" });
  }
  static async createAccused(req, res) {
    const accused = req.body;
    const result = await AccusedService.createAccused(accused);
    res.status(201).json(result);
  }
};

// src/routes/acussedRouter.ts
var accusedRouter = Router();
accusedRouter.get("/", AccusedController.getAllAccused);
accusedRouter.get("/:cc", AccusedController.getAccusedByCc);
accusedRouter.post("/", AccusedController.createAccused);

// src/routes/contractRouter.ts
import { Router as Router2 } from "express";

// src/models/contractModel.ts
var ContractModel = class {
  static async getAll() {
    try {
      const { rows } = await connection.query(`
          SELECT id, id_info_contract, id_employee, num_contract, observation, path, created_at, updated_at
          FROM contract
        `);
      return rows;
    } catch (error) {
      console.error("Error al obtener todos los contratos:", error);
      throw error;
    }
  }
  static async getById(id) {
    try {
      const { rows } = await connection.query(
        `SELECT * FROM contract WHERE id = $1`,
        [id]
      );
      if (rows.length === 0) {
        throw new AppError(
          `
            EL contrato no existe`,
          "NOT_FOUND",
          400
        );
      }
      ;
      if (rows[0].asigned === true) {
        throw new AppError(
          `No puedes firmar un contrato Mas de 1 vez`,
          "EXISTING_RESOURCE",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        console.error(`Error al obtener el empleado con id ${id}:`, error.message);
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        console.error(`Error desconocido al obtener el empleado con id ${id}`);
      }
      throw new Error(`No se pudo obtener el empleado con id ${id}`);
    }
  }
  static async create(contract) {
    const {
      id_info_contract,
      id_employee,
      num_contract,
      observation,
      path
    } = contract;
    try {
      const result = await connection.query(
        `
          INSERT INTO contract (
            id, id_info_contract, id_employee, num_contract, observation, path
          )
          VALUES (
            uuid_generate_v4(), $1, $2, $3, $4, $5
          )
          RETURNING *
          `,
        [id_info_contract, id_employee || null, num_contract, observation || null, path || null]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error al crear contrato:", error);
      throw error;
    }
  }
  static async ifExist(id) {
    try {
      const { rows } = await connection.query(
        "SELECT * FROM contract WHERE num_contract = $1",
        [id]
      );
      if (rows.length !== 0) {
        throw new AppError(
          `Ya existe un contrato con el n\xFAmero ${id}`,
          "ID_DUPLICATE",
          400
        );
      }
      return { message: "No existe un contrato con este n\xFAmero, puedes continuar" };
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError("Error al verificar el contrato", "CHECK_ERROR", 500);
    }
  }
  static async update(id, data) {
    const {
      id_info_contract,
      id_employee,
      num_contract,
      observation,
      path
    } = data;
    try {
      const result = await connection.query(
        `
          UPDATE contract SET
            id_info_contract = COALESCE($1, id_info_contract),
            id_employee = COALESCE($2, id_employee),
            num_contract = COALESCE($3, num_contract),
            observation = COALESCE($4, observation),
            path = COALESCE($5, path),
            updated_at = CURRENT_TIMESTAMP
          WHERE id = $6
          RETURNING *
          `,
        [id_info_contract, id_employee, num_contract, observation, path, id]
      );
      if (result.rows.length === 0) throw new Error("Contract not found");
      return result.rows[0];
    } catch (error) {
      console.error(`Error al actualizar contrato con id ${id}:`, error);
      throw error;
    }
  }
  static async delete(id) {
    try {
      const { rowCount } = await connection.query(
        `DELETE FROM contract WHERE id = $1 RETURNING *`,
        [id]
      );
      return rowCount != null && rowCount > 0 ? true : false;
    } catch (error) {
      console.error(`Error al eliminar contrato con id ${id}:`, error);
      throw error;
    }
  }
  static async getByRadicado(radicado) {
    try {
      const { rows } = await connection.query(
        `
            SELECT 
                  co.id AS contract_id,
                  co.num_contract,
                  co.observation AS contract_observation,
                  co.asigned AS contract_asigned,
                  co.path AS contract_path,
                  co.created_at AS contract_created_at,
                  co.updated_at AS contract_updated_at,
                  
                  ic.id AS info_contract_id,
                  ic.num_radicado,
                  ic.total_payment,
                  ic.created_at AS info_contract_created_at,
                  ic.updated_at AS info_contract_updated_at,
                  
                  e.id AS employee_id,
                  e.name AS employee_name,
                  e.document AS employee_document,
                  e.phone AS employee_phone,
                  
                  c.id AS customer_id,
                  c.name AS customer_name,
                  c.document AS customer_document,
                  c.type_of_doc AS customer_type_of_doc,
                  c.phone AS customer_phone,
                  c.email AS customer_email,
                  
                  a.id AS accused_id,
                  a.name AS accused_name,
                  a.document AS accused_document,
                  a.type_of_doc AS accused_type_of_doc,
                  
                  tp.type_pay AS type_of_payment,
                  ct.contract_type AS contract_type
                  
              FROM info_contract ic
              JOIN contract co ON co.id_info_contract = ic.id
              LEFT JOIN employee e ON co.id_employee = e.id
              LEFT JOIN customer c ON ic.id_customer = c.id
              LEFT JOIN accused a ON ic.id_accused = a.id
              LEFT JOIN type_payment tp ON ic.id_type_pay = tp.type_pay
              LEFT JOIN contract_type ct ON ic.id_type_contract = ct.contract_type
              WHERE ic.num_radicado = $1
              `,
        [radicado]
      );
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro nigun contrato con el id ${radicado}`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Error desconocido en getByRadicado");
      }
    }
  }
  static async getByNumContract(numContract) {
    try {
      const { rows } = await connection.query(
        `
        SELECT 
                  c.id AS contract_id,
                  c.num_contract,
                  c.observation AS contract_observation,
                  c.asigned,
                  c.path AS contract_path,
                  c.created_at AS contract_created_at,
                  c.updated_at AS contract_updated_at,
                  
                  ic.id AS info_contract_id,
                  ic.num_radicado,
                  ic.total_payment,
                  ic.created_at AS info_contract_created_at,
                  ic.updated_at AS info_contract_updated_at,
                  
                  e.id AS employee_id,
                  e.name AS employee_name,
                  e.document AS employee_document,
                  e.phone AS employee_phone,
                  
                  cu.id AS customer_id,
                  cu.name AS customer_name,
                  cu.document AS customer_document,
                  cu.type_of_doc AS customer_doc_type,
                  cu.phone AS customer_phone,
                  cu.email AS customer_email,
                  
                  ac.id AS accused_id,
                  ac.name AS accused_name,
                  ac.document AS accused_document,
                  ac.type_of_doc AS accused_doc_type,
                  
                  ct.contract_type,
                  tp.type_pay
                  
              FROM contract c
              JOIN info_contract ic ON c.id_info_contract = ic.id
              JOIN employee e ON c.id_employee = e.id
              JOIN customer cu ON ic.id_customer = cu.id
              JOIN accused ac ON ic.id_accused = ac.id
              LEFT JOIN contract_type ct ON ic.id_type_contract = ct.contract_type
              LEFT JOIN type_payment tp ON ic.id_type_pay = tp.type_pay
              WHERE c.num_contract = $1
              `,
        [numContract]
      );
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro nigun contrato con el id ${numContract}`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Error desconocido en getByRadicado");
      }
    }
  }
  static async getByName(name) {
    try {
      const { rows } = await connection.query(
        `
          SELECT c.*
          FROM contract c
          LEFT JOIN info_contract ic ON c.id_info_contract = ic.id
          LEFT JOIN customer cu ON ic.id_customer = cu.id
          WHERE cu.name = $1
          `,
        [name]
      );
      if (rows.length === 0) {
        throw new Error(`No se encontr\xF3 contrato para el cliente con nombre: ${name}`);
      }
      return rows[0];
    } catch (error) {
      console.error(`Error en getByName(${name}):`, error);
      throw error;
    }
  }
  static async countContracts() {
    try {
      const { rows } = await connection.query("select count(*) from contract");
      return rows[0];
    } catch (err) {
      throw new Error("Ourrio un error en la los contratos");
    }
  }
  static async countContAsigned() {
    try {
      const { rows } = await connection.query(`
            SELECT COUNT(*) FILTER (WHERE asigned = true) as total_asigned ,
                  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 DAYS' ) 
                  AS recentAsigned
            FROM contract; `);
      if (rows.length === 0) {
        throw new AppError("Sin registros contratos");
      }
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async countContWithoutAsigned() {
    try {
      const { rows } = await connection.query(`
          SELECT COUNT(*) FILTER (WHERE asigned = false) as total_asigned ,
                COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 DAYS' )
                AS recentAsigned
          FROM contract;`);
      if (rows.length === 0) {
        throw new AppError("Sin registros de contratos");
      }
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getNewsContracts() {
    try {
      const { rows } = await connection.query(`
            SELECT 
                COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '5 days') AS recent_count,
                COUNT(*) AS total_count
                  FROM 
                    contract;;
          ;`);
      if (rows.length === 0) {
        throw new AppError("Sin registros de contratos");
      }
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getRecentContracts() {
    try {
      const { rows } = await connection.query(`
            SELECT 
              *, 
            CURRENT_DATE - DATE(created_at) AS dias_desde_creacion
              FROM 
              contract
              WHERE 
              created_at >= CURRENT_DATE - INTERVAL '5 days'
          ;`);
      if (rows.length === 0) {
        throw new AppError("Sin registros de contratos");
      }
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getContractsByDateRange(startDate, endDate) {
    try {
      const query = `
      SELECT 
        c.id,
        c.num_contract,
        c.observation,
        c.asigned,
        c.path,
        c.created_at,
        ic.total_payment,
        ic.num_radicado,
        ic.porcentage_honorario,
        e.name as employee_name,
        cu.name as customer_name,
        tp.type_pay,
        ct.contract_type
      FROM contract c
      LEFT JOIN info_contract ic ON c.id_info_contract = ic.id
      LEFT JOIN employee e ON c.id_employee = e.id
      LEFT JOIN customer cu ON ic.id_customer = cu.id
      LEFT JOIN type_payment tp ON ic.id_type_pay = tp.type_pay
      LEFT JOIN contract_type ct ON ic.id_type_contract = ct.contract_type
      WHERE c.created_at BETWEEN $1 AND $2
      ORDER BY c.created_at DESC;
    `;
      const values = [startDate, endDate];
      const result = await connection.query(query, values);
      if (result.rows.length === 0) {
        throw new AppError(
          `No se encontro nigun registro de este recurso`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return result.rows;
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      }
    }
  }
};

// src/services/contractService.ts
var ContractService = class {
  static async getAll() {
    return await ContractModel.getAll();
  }
  static async create(contract) {
    return await ContractModel.create(contract);
  }
  static async getByRadicado(numContract) {
    return await ContractModel.getByRadicado(numContract);
  }
  static async getByName(name) {
    return await ContractModel.getByName(name);
  }
  static async countContWithoutAsigned() {
    try {
      return await ContractModel.countContWithoutAsigned();
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, "UKNOWN_ERROR", 500);
      }
      throw new Error("Unknown error occurred in updatePartialCustomer");
    }
  }
  static async countContAsigned() {
    try {
      const response = await ContractModel.countContAsigned();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getNewsContracts() {
    try {
      const response = await ContractModel.getNewsContracts();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
  static async getRecentContracts() {
    try {
      const response = await ContractModel.getRecentContracts();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al crear info_contract:`, error.message);
        throw new AppError(error.message, "UNKNOWN_ERROR", 500);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
};

// src/models/customerModel.ts
var CustomerModel = class {
  static async getAll() {
    try {
      const { rows } = await connection.query(`
                SELECT id, name, phone, email, document, type_of_doc 
                FROM customer
            `);
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in getAll:", error.message);
        throw new Error("Failed to get customers: " + error.message);
      }
      console.error("Unknown error occurred in getAll");
      throw new Error("Unknown error occurred in getAll");
    }
  }
  static async getByCc(cc2) {
    try {
      const { rows } = await connection.query(`
                SELECT * FROM customer WHERE document = $1
            `, [cc2]);
      if (rows.length === 0) return null;
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in getByCc:", error.message);
        throw new Error("Failed to get customer by CC: " + error.message);
      }
      console.error("Unknown error occurred in getByCc");
      throw new Error("Unknown error occurred in getByCc");
    }
  }
  static async findByCcAndCreate(customer) {
    const id = customer.document;
    try {
      const { rows } = await connection.query(`
                SELECT * FROM customer WHERE document = $1
            `, [customer.document]);
      if (rows.length === 0) {
        const response = await connection.query(`
                    INSERT INTO customer (name, document, email, phone, type_of_doc)
                    VALUES ($1, $2, $3, $4, $5) RETURNING id
                    `, [customer.name, customer.document, customer.email, null, customer.type_of_doc ? customer.type_of_doc : null]);
        return response.rows[0].id;
      }
      return rows[0].id;
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(
          error.message,
          "UNKNOWN_ERROR",
          500
        );
      }
      throw new Error("Unknown error occurred in getByCc");
    }
  }
  static async create(customer) {
    try {
      const { name, document, email, phone, type_of_doc } = customer;
      const result = await connection.query(`
                INSERT INTO customer (name, document, email, phone, type_of_doc)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING id, name, phone, email, document, type_of_doc
            `, [name, document, email, phone, type_of_doc]);
      return result.rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in create:", error.message);
        throw new Error("Failed to create customer: " + error.message);
      }
      console.error("Unknown error occurred in create");
      throw new Error("Unknown error occurred in create");
    }
  }
  static async updatePartialCustomer(data) {
    try {
      const keys = Object.keys(data).filter((k5) => k5 !== "id");
      const values = keys.map((k5) => data[k5]);
      const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(", ");
      const query = `
                UPDATE customer
                SET ${setClause}
                WHERE id = $${keys.length + 1}
            `;
      const result = await connection.query(query, [...values, data.id]);
      return result.rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in updatePartialCustomer:", error.message);
        throw new Error("Failed to update customer: " + error.message);
      }
      console.error("Unknown error occurred in updatePartialCustomer");
      throw new Error("Unknown error occurred in updatePartialCustomer");
    }
  }
  static async getByName(name) {
    const result = await connection.query(`
            SELECT * FROM customer WHERE name = $1
        `, [name]);
    return result.rows[0];
  }
  static async countCustomer() {
    try {
      const { rows } = await connection.query(`
                SELECT COUNT(*) AS count_customer,
                   COUNT(*) FILTER(WHERE created_at >= NOW() - INTERVAL '5 DAYS' ) AS news_customers
                FROM customer;`);
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(
          error.message,
          "UNKNOWN_ERROR",
          500
        );
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
};

// src/services/customerService.ts
var CustomerService = class {
  static async getAll() {
    try {
      return await CustomerModel.getAll();
    } catch (err) {
      console.error("Error in customerService.getAll:", err);
      throw err;
    }
  }
  static async getByCc(cc2) {
    try {
      return await CustomerModel.getByCc(cc2);
    } catch (err) {
      console.error("Error in customerService.getByCc:", err);
      throw err;
    }
  }
  static async create(data) {
    try {
      return await CustomerModel.create(data);
    } catch (err) {
      console.error("Error in customerService.create:", err);
      throw err;
    }
  }
  static async getByName(name) {
    try {
      return await CustomerModel.getByName(name);
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, "UKNOWN_ERROR", 500);
      }
      throw new Error("Unknown error occurred in updatePartialCustomer");
    }
  }
  static async countCustomer() {
    try {
      return await CustomerModel.countCustomer();
    } catch (error) {
      if (error instanceof Error) {
        throw new AppError(error.message, "UKNOWN_ERROR", 500);
      }
      throw new Error("Unknown error occurred in updatePartialCustomer");
    }
  }
  // static async updatePartialCustomer(id: number, data: Partial<Customer>): Promise<Customer> {
  //   return await CustomerModel.updatePartialCustomer(id, data);
  // }
};

// src/controllers/contractController.ts
var ContractController = class {
  static async getAll(req, res) {
    const contracts = await ContractService.getAll();
    res.json(contracts);
  }
  static async create(req, res) {
    const data = req.body;
    const contract = await ContractService.create(data);
    res.status(201).json(contract);
  }
  static async getByRadicado(req, res) {
    const { contract } = req.params;
    const result = await ContractService.getByRadicado(contract);
    res.status(200).json(result);
  }
  static async getGeneralInfo(req, res) {
    const countContAsigned = await ContractService.countContAsigned();
    const countContWithoutAsigned = await ContractService.countContWithoutAsigned();
    const newsContracts = await ContractService.getNewsContracts();
    const getRecentContracts = await ContractService.getRecentContracts();
    const countCustomer = await CustomerService.countCustomer();
    res.status(200).json({
      countContAsigned,
      countContWithoutAsigned,
      countCustomer,
      newsContracts,
      getRecentContracts
    });
  }
  static async getContractsByDates(req, res) {
    const { start_date, end_date } = req.query;
    if (!start_date || !end_date) {
      throw new AppError(
        "Error del Navegador, El archivo no se cargo correctamente",
        "NO_CHARGE _RESOURCE",
        400
      );
    }
    try {
      const contracts = await ContractModel.getContractsByDateRange(start_date, end_date);
      res.json(contracts);
    } catch (error) {
      const status = error instanceof AppError ? error.statusCode : 500;
      const code = error instanceof AppError ? error.code : "INTERNAL_ERROR";
      const message = error instanceof AppError ? error.message : "Error interno al verificar contrato";
      res.status(status).json({
        error: {
          message,
          code,
          statusCode: status
        }
      });
      return;
    }
  }
  static async getContract(req, res) {
    const data = req.body;
    const contract = await ContractService.create(data);
    res.status(201).json(contract);
  }
  static async getAnyContract(req, res) {
    try {
      let contrato;
      let contractData;
      const { num_radicado, num_contract } = req.body;
      if (!num_radicado && !num_contract) {
        throw new AppError(
          "Informaciono insuficiente",
          "BAD_REQUEST",
          400
        );
      }
      if (num_radicado) {
        contrato = num_radicado;
        const contracts = await ContractModel.getByRadicado(contrato);
        contractData = contracts;
      } else {
        contrato = num_contract;
        const contracts = await ContractModel.getByNumContract(contrato);
        contractData = contracts;
      }
      res.status(200).json(contractData);
      return;
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message });
        return;
      } else if (error instanceof Error) {
        res.json({ message: error.message });
        return;
      } else {
        throw new Error("Error desconocido en getByRadicado");
      }
    }
  }
};

// src/routes/contractRouter.ts
var contractRouter = Router2();
contractRouter.get("/", ContractController.getAll);
contractRouter.post("/", ContractController.create);
contractRouter.get("/contracts-by-date", ContractController.getContractsByDates);
contractRouter.get("/get-general-info", ContractController.getGeneralInfo);
contractRouter.post("/get-any-contract", ContractController.getAnyContract);
contractRouter.get("/:contract", ContractController.getByRadicado);

// src/routes/controlFileRouter.ts
import { Router as Router3 } from "express";

// node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
init_dist_es2();
function addExpectContinueMiddleware(options) {
  return (next) => async (args) => {
    const { request: request2 } = args;
    if (HttpRequest.isInstance(request2) && request2.body && options.runtime === "node") {
      if (options.requestHandler?.constructor?.name !== "FetchHttpHandler") {
        request2.headers = {
          ...request2.headers,
          Expect: "100-continue"
        };
      }
    }
    return next({
      ...args,
      request: request2
    });
  };
}
var addExpectContinueMiddlewareOptions = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware",
  override: true
};
var getAddExpectContinuePlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/constants.js
var RequestChecksumCalculation = {
  WHEN_SUPPORTED: "WHEN_SUPPORTED",
  WHEN_REQUIRED: "WHEN_REQUIRED"
};
var DEFAULT_REQUEST_CHECKSUM_CALCULATION = RequestChecksumCalculation.WHEN_SUPPORTED;
var ResponseChecksumValidation = {
  WHEN_SUPPORTED: "WHEN_SUPPORTED",
  WHEN_REQUIRED: "WHEN_REQUIRED"
};
var DEFAULT_RESPONSE_CHECKSUM_VALIDATION = RequestChecksumCalculation.WHEN_SUPPORTED;
var ChecksumAlgorithm;
(function(ChecksumAlgorithm2) {
  ChecksumAlgorithm2["MD5"] = "MD5";
  ChecksumAlgorithm2["CRC32"] = "CRC32";
  ChecksumAlgorithm2["CRC32C"] = "CRC32C";
  ChecksumAlgorithm2["CRC64NVME"] = "CRC64NVME";
  ChecksumAlgorithm2["SHA1"] = "SHA1";
  ChecksumAlgorithm2["SHA256"] = "SHA256";
})(ChecksumAlgorithm || (ChecksumAlgorithm = {}));
var ChecksumLocation;
(function(ChecksumLocation2) {
  ChecksumLocation2["HEADER"] = "header";
  ChecksumLocation2["TRAILER"] = "trailer";
})(ChecksumLocation || (ChecksumLocation = {}));
var DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.CRC32;

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringUnionSelector.js
var SelectorType;
(function(SelectorType3) {
  SelectorType3["ENV"] = "env";
  SelectorType3["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));
var stringUnionSelector = (obj, key, union, type) => {
  if (!(key in obj))
    return void 0;
  const value = obj[key].toUpperCase();
  if (!Object.values(union).includes(value)) {
    throw new TypeError(`Cannot load ${type} '${key}'. Expected one of ${Object.values(union)}, got '${obj[key]}'.`);
  }
  return value;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS.js
var ENV_REQUEST_CHECKSUM_CALCULATION = "AWS_REQUEST_CHECKSUM_CALCULATION";
var CONFIG_REQUEST_CHECKSUM_CALCULATION = "request_checksum_calculation";
var NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => stringUnionSelector(env2, ENV_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType.ENV),
  configFileSelector: (profile) => stringUnionSelector(profile, CONFIG_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType.CONFIG),
  default: DEFAULT_REQUEST_CHECKSUM_CALCULATION
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS.js
var ENV_RESPONSE_CHECKSUM_VALIDATION = "AWS_RESPONSE_CHECKSUM_VALIDATION";
var CONFIG_RESPONSE_CHECKSUM_VALIDATION = "response_checksum_validation";
var NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => stringUnionSelector(env2, ENV_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation, SelectorType.ENV),
  configFileSelector: (profile) => stringUnionSelector(profile, CONFIG_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation, SelectorType.CONFIG),
  default: DEFAULT_RESPONSE_CHECKSUM_VALIDATION
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/crc64-nvme-crt-container.js
var crc64NvmeCrtContainer = {
  CrtCrc64Nvme: null
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
init_dist_es20();
init_dist_es2();
init_dist_es14();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/types.js
var CLIENT_SUPPORTED_ALGORITHMS = [
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.CRC64NVME,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.SHA256
];
var PRIORITY_ORDER_ALGORITHMS = [
  ChecksumAlgorithm.SHA256,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.CRC64NVME
];

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmForRequest.js
var getChecksumAlgorithmForRequest = (input, { requestChecksumRequired, requestAlgorithmMember, requestChecksumCalculation }) => {
  if (!requestAlgorithmMember) {
    return requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired ? DEFAULT_CHECKSUM_ALGORITHM : void 0;
  }
  if (!input[requestAlgorithmMember]) {
    return void 0;
  }
  const checksumAlgorithm = input[requestAlgorithmMember];
  if (!CLIENT_SUPPORTED_ALGORITHMS.includes(checksumAlgorithm)) {
    throw new Error(`The checksum algorithm "${checksumAlgorithm}" is not supported by the client. Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`);
  }
  return checksumAlgorithm;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumLocationName.js
var getChecksumLocationName = (algorithm) => algorithm === ChecksumAlgorithm.MD5 ? "content-md5" : `x-amz-checksum-${algorithm.toLowerCase()}`;

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeader.js
var hasHeader2 = (header, headers) => {
  const soughtHeader = header.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeaderWithPrefix.js
var hasHeaderWithPrefix = (headerPrefix, headers) => {
  const soughtHeaderPrefix = headerPrefix.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase().startsWith(soughtHeaderPrefix)) {
      return true;
    }
  }
  return false;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isStreaming.js
init_dist_es5();
var isStreaming = (body) => body !== void 0 && typeof body !== "string" && !ArrayBuffer.isView(body) && !isArrayBuffer(body);

// node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e5) {
        reject(e5);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e5) {
        reject(e5);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t5[0] & 1) throw t5[1];
    return t5[1];
  }, trys: [], ops: [] }, f5, y3, t5, g5 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g5.next = verb(0), g5["throw"] = verb(1), g5["return"] = verb(2), typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n5) {
    return function(v6) {
      return step([n5, v6]);
    };
  }
  function step(op) {
    if (f5) throw new TypeError("Generator is already executing.");
    while (g5 && (g5 = 0, op[0] && (_2 = 0)), _2) try {
      if (f5 = 1, y3 && (t5 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t5 = y3["return"]) && t5.call(y3), 0) : y3.next) && !(t5 = t5.call(y3, op[1])).done) return t5;
      if (y3 = 0, t5) op = [op[0] & 2, t5.value];
      switch (op[0]) {
        case 0:
        case 1:
          t5 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y3 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t5 = _2.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t5[1]) {
            _2.label = t5[1];
            t5 = op;
            break;
          }
          if (t5 && _2.label < t5[2]) {
            _2.label = t5[2];
            _2.ops.push(op);
            break;
          }
          if (t5[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e5) {
      op = [6, e5];
      y3 = 0;
    } finally {
      f5 = t5 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o5) {
  var s5 = typeof Symbol === "function" && Symbol.iterator, m5 = s5 && o5[s5], i5 = 0;
  if (m5) return m5.call(o5);
  if (o5 && typeof o5.length === "number") return {
    next: function() {
      if (o5 && i5 >= o5.length) o5 = void 0;
      return { value: o5 && o5[i5++], done: !o5 };
    }
  };
  throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

// node_modules/@aws-crypto/util/node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer3 } from "buffer";
var fromString2 = (input, encoding) => {
  if (typeof input !== "string") {
    throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
  }
  return encoding ? Buffer3.from(input, encoding) : Buffer3.from(input);
};

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf82 = (input) => {
  const buf = fromString2(input, "utf8");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

// node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
  return Buffer.from(input, "utf8");
} : fromUtf82;
function convertToBuffer(data) {
  if (data instanceof Uint8Array)
    return data;
  if (typeof data === "string") {
    return fromUtf83(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}

// node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}

// node_modules/@aws-crypto/util/build/module/numToUint8.js
function numToUint8(num) {
  return new Uint8Array([
    (num & 4278190080) >> 24,
    (num & 16711680) >> 16,
    (num & 65280) >> 8,
    num & 255
  ]);
}

// node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
function uint32ArrayFrom(a_lookUpTable2) {
  if (!Uint32Array.from) {
    var return_array = new Uint32Array(a_lookUpTable2.length);
    var a_index = 0;
    while (a_index < a_lookUpTable2.length) {
      return_array[a_index] = a_lookUpTable2[a_index];
      a_index += 1;
    }
    return return_array;
  }
  return Uint32Array.from(a_lookUpTable2);
}

// node_modules/@aws-crypto/crc32c/build/module/aws_crc32c.js
var AwsCrc32c = (
  /** @class */
  function() {
    function AwsCrc32c2() {
      this.crc32c = new Crc32c();
    }
    AwsCrc32c2.prototype.update = function(toHash) {
      if (isEmptyData(toHash))
        return;
      this.crc32c.update(convertToBuffer(toHash));
    };
    AwsCrc32c2.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          return [2, numToUint8(this.crc32c.digest())];
        });
      });
    };
    AwsCrc32c2.prototype.reset = function() {
      this.crc32c = new Crc32c();
    };
    return AwsCrc32c2;
  }()
);

// node_modules/@aws-crypto/crc32c/build/module/index.js
var Crc32c = (
  /** @class */
  function() {
    function Crc32c2() {
      this.checksum = 4294967295;
    }
    Crc32c2.prototype.update = function(data) {
      var e_1, _a2;
      try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
          var byte = data_1_1.value;
          this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (data_1_1 && !data_1_1.done && (_a2 = data_1.return)) _a2.call(data_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return this;
    };
    Crc32c2.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    };
    return Crc32c2;
  }()
);
var a_lookupTable = [
  0,
  4067132163,
  3778769143,
  324072436,
  3348797215,
  904991772,
  648144872,
  3570033899,
  2329499855,
  2024987596,
  1809983544,
  2575936315,
  1296289744,
  3207089363,
  2893594407,
  1578318884,
  274646895,
  3795141740,
  4049975192,
  51262619,
  3619967088,
  632279923,
  922689671,
  3298075524,
  2592579488,
  1760304291,
  2075979607,
  2312596564,
  1562183871,
  2943781820,
  3156637768,
  1313733451,
  549293790,
  3537243613,
  3246849577,
  871202090,
  3878099393,
  357341890,
  102525238,
  4101499445,
  2858735121,
  1477399826,
  1264559846,
  3107202533,
  1845379342,
  2677391885,
  2361733625,
  2125378298,
  820201905,
  3263744690,
  3520608582,
  598981189,
  4151959214,
  85089709,
  373468761,
  3827903834,
  3124367742,
  1213305469,
  1526817161,
  2842354314,
  2107672161,
  2412447074,
  2627466902,
  1861252501,
  1098587580,
  3004210879,
  2688576843,
  1378610760,
  2262928035,
  1955203488,
  1742404180,
  2511436119,
  3416409459,
  969524848,
  714683780,
  3639785095,
  205050476,
  4266873199,
  3976438427,
  526918040,
  1361435347,
  2739821008,
  2954799652,
  1114974503,
  2529119692,
  1691668175,
  2005155131,
  2247081528,
  3690758684,
  697762079,
  986182379,
  3366744552,
  476452099,
  3993867776,
  4250756596,
  255256311,
  1640403810,
  2477592673,
  2164122517,
  1922457750,
  2791048317,
  1412925310,
  1197962378,
  3037525897,
  3944729517,
  427051182,
  170179418,
  4165941337,
  746937522,
  3740196785,
  3451792453,
  1070968646,
  1905808397,
  2213795598,
  2426610938,
  1657317369,
  3053634322,
  1147748369,
  1463399397,
  2773627110,
  4215344322,
  153784257,
  444234805,
  3893493558,
  1021025245,
  3467647198,
  3722505002,
  797665321,
  2197175160,
  1889384571,
  1674398607,
  2443626636,
  1164749927,
  3070701412,
  2757221520,
  1446797203,
  137323447,
  4198817972,
  3910406976,
  461344835,
  3484808360,
  1037989803,
  781091935,
  3705997148,
  2460548119,
  1623424788,
  1939049696,
  2180517859,
  1429367560,
  2807687179,
  3020495871,
  1180866812,
  410100952,
  3927582683,
  4182430767,
  186734380,
  3756733383,
  763408580,
  1053836080,
  3434856499,
  2722870694,
  1344288421,
  1131464017,
  2971354706,
  1708204729,
  2545590714,
  2229949006,
  1988219213,
  680717673,
  3673779818,
  3383336350,
  1002577565,
  4010310262,
  493091189,
  238226049,
  4233660802,
  2987750089,
  1082061258,
  1395524158,
  2705686845,
  1972364758,
  2279892693,
  2494862625,
  1725896226,
  952904198,
  3399985413,
  3656866545,
  731699698,
  4283874585,
  222117402,
  510512622,
  3959836397,
  3280807620,
  837199303,
  582374963,
  3504198960,
  68661723,
  4135334616,
  3844915500,
  390545967,
  1230274059,
  3141532936,
  2825850620,
  1510247935,
  2395924756,
  2091215383,
  1878366691,
  2644384480,
  3553878443,
  565732008,
  854102364,
  3229815391,
  340358836,
  3861050807,
  4117890627,
  119113024,
  1493875044,
  2875275879,
  3090270611,
  1247431312,
  2660249211,
  1828433272,
  2141937292,
  2378227087,
  3811616794,
  291187481,
  34330861,
  4032846830,
  615137029,
  3603020806,
  3314634738,
  939183345,
  1776939221,
  2609017814,
  2295496738,
  2058945313,
  2926798794,
  1545135305,
  1330124605,
  3173225534,
  4084100981,
  17165430,
  307568514,
  3762199681,
  888469610,
  3332340585,
  3587147933,
  665062302,
  2042050490,
  2346497209,
  2559330125,
  1793573966,
  3190661285,
  1279665062,
  1595330642,
  2910671697
];
var lookupTable = uint32ArrayFrom(a_lookupTable);

// node_modules/@aws-crypto/crc32/build/module/aws_crc32.js
var AwsCrc32 = (
  /** @class */
  function() {
    function AwsCrc322() {
      this.crc32 = new Crc32();
    }
    AwsCrc322.prototype.update = function(toHash) {
      if (isEmptyData(toHash))
        return;
      this.crc32.update(convertToBuffer(toHash));
    };
    AwsCrc322.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          return [2, numToUint8(this.crc32.digest())];
        });
      });
    };
    AwsCrc322.prototype.reset = function() {
      this.crc32 = new Crc32();
    };
    return AwsCrc322;
  }()
);

// node_modules/@aws-crypto/crc32/build/module/index.js
var Crc32 = (
  /** @class */
  function() {
    function Crc322() {
      this.checksum = 4294967295;
    }
    Crc322.prototype.update = function(data) {
      var e_1, _a2;
      try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
          var byte = data_1_1.value;
          this.checksum = this.checksum >>> 8 ^ lookupTable2[(this.checksum ^ byte) & 255];
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (data_1_1 && !data_1_1.done && (_a2 = data_1.return)) _a2.call(data_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return this;
    };
    Crc322.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    };
    return Crc322;
  }()
);
var a_lookUpTable = [
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
];
var lookupTable2 = uint32ArrayFrom(a_lookUpTable);

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getCrc32ChecksumAlgorithmFunction.js
import * as zlib from "zlib";
var NodeCrc32 = class {
  checksum = 0;
  update(data) {
    this.checksum = zlib.crc32(data, this.checksum);
  }
  async digest() {
    return numToUint8(this.checksum);
  }
  reset() {
    this.checksum = 0;
  }
};
var getCrc32ChecksumAlgorithmFunction = () => {
  if (typeof zlib.crc32 === "undefined") {
    return AwsCrc32;
  }
  return NodeCrc32;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/selectChecksumAlgorithmFunction.js
var selectChecksumAlgorithmFunction = (checksumAlgorithm, config) => {
  switch (checksumAlgorithm) {
    case ChecksumAlgorithm.MD5:
      return config.md5;
    case ChecksumAlgorithm.CRC32:
      return getCrc32ChecksumAlgorithmFunction();
    case ChecksumAlgorithm.CRC32C:
      return AwsCrc32c;
    case ChecksumAlgorithm.CRC64NVME:
      if (typeof crc64NvmeCrtContainer.CrtCrc64Nvme !== "function") {
        throw new Error(`Please check whether you have installed the "@aws-sdk/crc64-nvme-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/crc64-nvme-crt");] or an ESM equivalent such as [import "@aws-sdk/crc64-nvme-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
      return crc64NvmeCrtContainer.CrtCrc64Nvme;
    case ChecksumAlgorithm.SHA1:
      return config.sha1;
    case ChecksumAlgorithm.SHA256:
      return config.sha256;
    default:
      throw new Error(`Unsupported checksum algorithm: ${checksumAlgorithm}`);
  }
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringHasher.js
init_dist_es7();
var stringHasher = (checksumAlgorithmFn, body) => {
  const hash = new checksumAlgorithmFn();
  hash.update(toUint8Array(body || ""));
  return hash.digest();
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
var flexibleChecksumsMiddlewareOptions = {
  name: "flexibleChecksumsMiddleware",
  step: "build",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  if (hasHeaderWithPrefix("x-amz-checksum-", args.request.headers)) {
    return next(args);
  }
  const { request: request2, input } = args;
  const { body: requestBody, headers } = request2;
  const { base64Encoder, streamHasher } = config;
  const { requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;
  const requestChecksumCalculation = await config.requestChecksumCalculation();
  const requestAlgorithmMemberName = requestAlgorithmMember?.name;
  const requestAlgorithmMemberHttpHeader = requestAlgorithmMember?.httpHeader;
  if (requestAlgorithmMemberName && !input[requestAlgorithmMemberName]) {
    if (requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired) {
      input[requestAlgorithmMemberName] = DEFAULT_CHECKSUM_ALGORITHM;
      if (requestAlgorithmMemberHttpHeader) {
        headers[requestAlgorithmMemberHttpHeader] = DEFAULT_CHECKSUM_ALGORITHM;
      }
    }
  }
  const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
    requestChecksumRequired,
    requestAlgorithmMember: requestAlgorithmMember?.name,
    requestChecksumCalculation
  });
  let updatedBody = requestBody;
  let updatedHeaders = headers;
  if (checksumAlgorithm) {
    switch (checksumAlgorithm) {
      case ChecksumAlgorithm.CRC32:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
        break;
      case ChecksumAlgorithm.CRC32C:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
        break;
      case ChecksumAlgorithm.CRC64NVME:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC64", "W");
        break;
      case ChecksumAlgorithm.SHA1:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
        break;
      case ChecksumAlgorithm.SHA256:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
        break;
    }
    const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
    const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config);
    if (isStreaming(requestBody)) {
      const { getAwsChunkedEncodingStream: getAwsChunkedEncodingStream2, bodyLengthChecker } = config;
      updatedBody = getAwsChunkedEncodingStream2(typeof config.requestStreamBufferSize === "number" && config.requestStreamBufferSize >= 8 * 1024 ? createBufferedReadable(requestBody, config.requestStreamBufferSize, context.logger) : requestBody, {
        base64Encoder,
        bodyLengthChecker,
        checksumLocationName,
        checksumAlgorithmFn,
        streamHasher
      });
      updatedHeaders = {
        ...headers,
        "content-encoding": headers["content-encoding"] ? `${headers["content-encoding"]},aws-chunked` : "aws-chunked",
        "transfer-encoding": "chunked",
        "x-amz-decoded-content-length": headers["content-length"],
        "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
        "x-amz-trailer": checksumLocationName
      };
      delete updatedHeaders["content-length"];
    } else if (!hasHeader2(checksumLocationName, headers)) {
      const rawChecksum = await stringHasher(checksumAlgorithmFn, requestBody);
      updatedHeaders = {
        ...headers,
        [checksumLocationName]: base64Encoder(rawChecksum)
      };
    }
  }
  const result = await next({
    ...args,
    request: {
      ...request2,
      headers: updatedHeaders,
      body: updatedBody
    }
  });
  return result;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsInputMiddleware.js
init_dist_es20();
var flexibleChecksumsInputMiddlewareOptions = {
  name: "flexibleChecksumsInputMiddleware",
  toMiddleware: "serializerMiddleware",
  relation: "before",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsInputMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
  const input = args.input;
  const { requestValidationModeMember } = middlewareConfig;
  const requestChecksumCalculation = await config.requestChecksumCalculation();
  const responseChecksumValidation = await config.responseChecksumValidation();
  switch (requestChecksumCalculation) {
    case RequestChecksumCalculation.WHEN_REQUIRED:
      setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
      break;
    case RequestChecksumCalculation.WHEN_SUPPORTED:
      setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
      break;
  }
  switch (responseChecksumValidation) {
    case ResponseChecksumValidation.WHEN_REQUIRED:
      setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
      break;
    case ResponseChecksumValidation.WHEN_SUPPORTED:
      setFeature(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
      break;
  }
  if (requestValidationModeMember && !input[requestValidationModeMember]) {
    if (responseChecksumValidation === ResponseChecksumValidation.WHEN_SUPPORTED) {
      input[requestValidationModeMember] = "ENABLED";
    }
  }
  return next(args);
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
init_dist_es2();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmListForResponse.js
var getChecksumAlgorithmListForResponse = (responseAlgorithms = []) => {
  const validChecksumAlgorithms = [];
  for (const algorithm of PRIORITY_ORDER_ALGORITHMS) {
    if (!responseAlgorithms.includes(algorithm) || !CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm)) {
      continue;
    }
    validChecksumAlgorithms.push(algorithm);
  }
  return validChecksumAlgorithms;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isChecksumWithPartNumber.js
var isChecksumWithPartNumber = (checksum) => {
  const lastHyphenIndex = checksum.lastIndexOf("-");
  if (lastHyphenIndex !== -1) {
    const numberPart = checksum.slice(lastHyphenIndex + 1);
    if (!numberPart.startsWith("0")) {
      const number = parseInt(numberPart, 10);
      if (!isNaN(number) && number >= 1 && number <= 1e4) {
        return true;
      }
    }
  }
  return false;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
init_dist_es14();

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksum.js
var getChecksum = async (body, { checksumAlgorithmFn, base64Encoder }) => base64Encoder(await stringHasher(checksumAlgorithmFn, body));

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
var validateChecksumFromResponse = async (response, { config, responseAlgorithms, logger: logger2 }) => {
  const checksumAlgorithms = getChecksumAlgorithmListForResponse(responseAlgorithms);
  const { body: responseBody, headers: responseHeaders } = response;
  for (const algorithm of checksumAlgorithms) {
    const responseHeader = getChecksumLocationName(algorithm);
    const checksumFromResponse = responseHeaders[responseHeader];
    if (checksumFromResponse) {
      let checksumAlgorithmFn;
      try {
        checksumAlgorithmFn = selectChecksumAlgorithmFunction(algorithm, config);
      } catch (error) {
        if (algorithm === ChecksumAlgorithm.CRC64NVME) {
          logger2?.warn(`Skipping ${ChecksumAlgorithm.CRC64NVME} checksum validation: ${error.message}`);
          continue;
        }
        throw error;
      }
      const { base64Encoder } = config;
      if (isStreaming(responseBody)) {
        response.body = createChecksumStream2({
          expectedChecksum: checksumFromResponse,
          checksumSourceLocation: responseHeader,
          checksum: new checksumAlgorithmFn(),
          source: responseBody,
          base64Encoder
        });
        return;
      }
      const checksum = await getChecksum(responseBody, { checksumAlgorithmFn, base64Encoder });
      if (checksum === checksumFromResponse) {
        break;
      }
      throw new Error(`Checksum mismatch: expected "${checksum}" but received "${checksumFromResponse}" in response header "${responseHeader}".`);
    }
  }
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
var flexibleChecksumsResponseMiddlewareOptions = {
  name: "flexibleChecksumsResponseMiddleware",
  toMiddleware: "deserializerMiddleware",
  relation: "after",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsResponseMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const input = args.input;
  const result = await next(args);
  const response = result.response;
  const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
  if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
    const { clientName, commandName } = context;
    const isS3WholeObjectMultipartGetResponseChecksum = clientName === "S3Client" && commandName === "GetObjectCommand" && getChecksumAlgorithmListForResponse(responseAlgorithms).every((algorithm) => {
      const responseHeader = getChecksumLocationName(algorithm);
      const checksumFromResponse = response.headers[responseHeader];
      return !checksumFromResponse || isChecksumWithPartNumber(checksumFromResponse);
    });
    if (isS3WholeObjectMultipartGetResponseChecksum) {
      return result;
    }
    await validateChecksumFromResponse(response, {
      config,
      responseAlgorithms,
      logger: context.logger
    });
  }
  return result;
};

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getFlexibleChecksumsPlugin.js
var getFlexibleChecksumsPlugin = (config, middlewareConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.add(flexibleChecksumsMiddleware(config, middlewareConfig), flexibleChecksumsMiddlewareOptions);
    clientStack.addRelativeTo(flexibleChecksumsInputMiddleware(config, middlewareConfig), flexibleChecksumsInputMiddlewareOptions);
    clientStack.addRelativeTo(flexibleChecksumsResponseMiddleware(config, middlewareConfig), flexibleChecksumsResponseMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/resolveFlexibleChecksumsConfig.js
init_dist_es3();
var resolveFlexibleChecksumsConfig = (input) => {
  const { requestChecksumCalculation, responseChecksumValidation, requestStreamBufferSize } = input;
  return Object.assign(input, {
    requestChecksumCalculation: normalizeProvider(requestChecksumCalculation ?? DEFAULT_REQUEST_CHECKSUM_CALCULATION),
    responseChecksumValidation: normalizeProvider(responseChecksumValidation ?? DEFAULT_RESPONSE_CHECKSUM_VALIDATION),
    requestStreamBufferSize: Number(requestStreamBufferSize ?? 0)
  });
};

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
init_dist_es21();
init_dist_es22();
init_dist_es23();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
init_dist_es2();
init_dist_es19();
var CONTENT_LENGTH_HEADER = "content-length";
var DECODED_CONTENT_LENGTH_HEADER = "x-amz-decoded-content-length";
function checkContentLengthHeader() {
  return (next, context) => async (args) => {
    const { request: request2 } = args;
    if (HttpRequest.isInstance(request2)) {
      if (!(CONTENT_LENGTH_HEADER in request2.headers) && !(DECODED_CONTENT_LENGTH_HEADER in request2.headers)) {
        const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
        if (typeof context?.logger?.warn === "function" && !(context.logger instanceof NoOpLogger)) {
          context.logger.warn(message);
        } else {
          console.warn(message);
        }
      }
    }
    return next({ ...args });
  };
}
var checkContentLengthHeaderMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["CHECK_CONTENT_LENGTH_HEADER"],
  name: "getCheckContentLengthHeaderPlugin",
  override: true
};
var getCheckContentLengthHeaderPlugin = (unused) => ({
  applyToStack: (clientStack) => {
    clientStack.add(checkContentLengthHeader(), checkContentLengthHeaderMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
var regionRedirectEndpointMiddleware = (config) => {
  return (next, context) => async (args) => {
    const originalRegion = await config.region();
    const regionProviderRef = config.region;
    let unlock = () => {
    };
    if (context.__s3RegionRedirect) {
      Object.defineProperty(config, "region", {
        writable: false,
        value: async () => {
          return context.__s3RegionRedirect;
        }
      });
      unlock = () => Object.defineProperty(config, "region", {
        writable: true,
        value: regionProviderRef
      });
    }
    try {
      const result = await next(args);
      if (context.__s3RegionRedirect) {
        unlock();
        const region = await config.region();
        if (originalRegion !== region) {
          throw new Error("Region was not restored following S3 region redirect.");
        }
      }
      return result;
    } catch (e5) {
      unlock();
      throw e5;
    }
  };
};
var regionRedirectEndpointMiddlewareOptions = {
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectEndpointMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
function regionRedirectMiddleware(clientConfig) {
  return (next, context) => async (args) => {
    try {
      return await next(args);
    } catch (err) {
      if (clientConfig.followRegionRedirects) {
        if (err?.$metadata?.httpStatusCode === 301 || err?.$metadata?.httpStatusCode === 400 && err?.name === "IllegalLocationConstraintException") {
          try {
            const actualRegion = err.$response.headers["x-amz-bucket-region"];
            context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
            context.__s3RegionRedirect = actualRegion;
          } catch (e5) {
            throw new Error("Region redirect failed: " + e5);
          }
          return next(args);
        }
      }
      throw err;
    }
  };
}
var regionRedirectMiddlewareOptions = {
  step: "initialize",
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectMiddleware",
  override: true
};
var getRegionRedirectMiddlewarePlugin = (clientConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
    clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
init_dist_es2();
init_dist_es19();
var s3ExpiresMiddleware = (config) => {
  return (next, context) => async (args) => {
    const result = await next(args);
    const { response } = result;
    if (HttpResponse.isInstance(response)) {
      if (response.headers.expires) {
        response.headers.expiresstring = response.headers.expires;
        try {
          parseRfc7231DateTime(response.headers.expires);
        } catch (e5) {
          context.logger?.warn(`AWS SDK Warning for ${context.clientName}::${context.commandName} response parsing (${response.headers.expires}): ${e5}`);
          delete response.headers.expires;
        }
      }
    }
    return result;
  };
};
var s3ExpiresMiddlewareOptions = {
  tags: ["S3"],
  name: "s3ExpiresMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "deserializerMiddleware"
};
var getS3ExpiresMiddlewarePlugin = (clientConfig) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(s3ExpiresMiddleware(clientConfig), s3ExpiresMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
var S3ExpressIdentityCache = class _S3ExpressIdentityCache {
  data;
  lastPurgeTime = Date.now();
  static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
  constructor(data = {}) {
    this.data = data;
  }
  get(key) {
    const entry = this.data[key];
    if (!entry) {
      return;
    }
    return entry;
  }
  set(key, entry) {
    this.data[key] = entry;
    return entry;
  }
  delete(key) {
    delete this.data[key];
  }
  async purgeExpired() {
    const now = Date.now();
    if (this.lastPurgeTime + _S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
      return;
    }
    for (const key in this.data) {
      const entry = this.data[key];
      if (!entry.isRefreshing) {
        const credential = await entry.identity;
        if (credential.expiration) {
          if (credential.expiration.getTime() < now) {
            delete this.data[key];
          }
        }
      }
    }
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
var S3ExpressIdentityCacheEntry = class {
  _identity;
  isRefreshing;
  accessed;
  constructor(_identity, isRefreshing = false, accessed = Date.now()) {
    this._identity = _identity;
    this.isRefreshing = isRefreshing;
    this.accessed = accessed;
  }
  get identity() {
    this.accessed = Date.now();
    return this._identity;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
var S3ExpressIdentityProviderImpl = class _S3ExpressIdentityProviderImpl {
  createSessionFn;
  cache;
  static REFRESH_WINDOW_MS = 6e4;
  constructor(createSessionFn, cache5 = new S3ExpressIdentityCache()) {
    this.createSessionFn = createSessionFn;
    this.cache = cache5;
  }
  async getS3ExpressIdentity(awsIdentity, identityProperties) {
    const key = identityProperties.Bucket;
    const { cache: cache5 } = this;
    const entry = cache5.get(key);
    if (entry) {
      return entry.identity.then((identity) => {
        const isExpired = (identity.expiration?.getTime() ?? 0) < Date.now();
        if (isExpired) {
          return cache5.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
        }
        const isExpiringSoon = (identity.expiration?.getTime() ?? 0) < Date.now() + _S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
        if (isExpiringSoon && !entry.isRefreshing) {
          entry.isRefreshing = true;
          this.getIdentity(key).then((id) => {
            cache5.set(key, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
          });
        }
        return identity;
      });
    }
    return cache5.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
  }
  async getIdentity(key) {
    await this.cache.purgeExpired().catch((error) => {
      console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
    });
    const session = await this.createSessionFn(key);
    if (!session.Credentials?.AccessKeyId || !session.Credentials?.SecretAccessKey) {
      throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
    }
    const identity = {
      accessKeyId: session.Credentials.AccessKeyId,
      secretAccessKey: session.Credentials.SecretAccessKey,
      sessionToken: session.Credentials.SessionToken,
      expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : void 0
    };
    return identity;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
init_dist_es17();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
init_dist_es24();
var S3_EXPRESS_BUCKET_TYPE = "Directory";
var S3_EXPRESS_BACKEND = "S3Express";
var S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME = "AWS_S3_DISABLE_EXPRESS_SESSION_AUTH";
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME = "s3_disable_express_session_auth";
var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = {
  environmentVariableSelector: (env2) => booleanSelector(env2, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME, SelectorType2.ENV),
  configFileSelector: (profile) => booleanSelector(profile, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME, SelectorType2.CONFIG),
  default: false
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
var SignatureV4S3Express = class extends SignatureV4 {
  async signWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return privateAccess.signRequest(requestToSign, options ?? {});
  }
  async presignWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    delete requestToSign.headers[SESSION_TOKEN_HEADER];
    requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    requestToSign.query = requestToSign.query ?? {};
    requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return this.presign(requestToSign, options);
  }
};
function getCredentialsWithoutSessionToken(credentials) {
  const credentialsWithoutSessionToken = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration
  };
  return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
  const id = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10);
  const currentCredentialProvider = privateAccess.credentialProvider;
  const overrideCredentialsProviderOnce = () => {
    clearTimeout(id);
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  };
  privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
init_dist_es20();
init_dist_es2();
var s3ExpressMiddleware = (options) => {
  return (next, context) => async (args) => {
    if (context.endpointV2) {
      const endpoint = context.endpointV2;
      const isS3ExpressAuth = endpoint.properties?.authSchemes?.[0]?.name === S3_EXPRESS_AUTH_SCHEME;
      const isS3ExpressBucket = endpoint.properties?.backend === S3_EXPRESS_BACKEND || endpoint.properties?.bucketType === S3_EXPRESS_BUCKET_TYPE;
      if (isS3ExpressBucket) {
        setFeature(context, "S3_EXPRESS_BUCKET", "J");
        context.isS3ExpressBucket = true;
      }
      if (isS3ExpressAuth) {
        const requestBucket = args.input.Bucket;
        if (requestBucket) {
          const s3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(await options.credentials(), {
            Bucket: requestBucket
          });
          context.s3ExpressIdentity = s3ExpressIdentity;
          if (HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
            args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
          }
        }
      }
    }
    return next(args);
  };
};
var s3ExpressMiddlewareOptions = {
  name: "s3ExpressMiddleware",
  step: "build",
  tags: ["S3", "S3_EXPRESS"],
  override: true
};
var getS3ExpressPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
init_dist_es15();
init_dist_es2();
init_dist_es();
init_dist_es3();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/signS3Express.js
var signS3Express = async (s3ExpressIdentity, signingOptions, request2, sigV4MultiRegionSigner) => {
  const signedRequest = await sigV4MultiRegionSigner.signWithCredentials(request2, s3ExpressIdentity, {});
  if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
    throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
  }
  return signedRequest;
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
var defaultErrorHandler2 = (signingProperties) => (error) => {
  throw error;
};
var defaultSuccessHandler2 = (httpResponse, signingProperties) => {
};
var s3ExpressHttpSigningMiddleware = (config) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  let request2;
  if (context.s3ExpressIdentity) {
    request2 = await signS3Express(context.s3ExpressIdentity, signingProperties, args.request, await config.signer());
  } else {
    request2 = await signer.sign(args.request, identity, signingProperties);
  }
  const output = await next({
    ...args,
    request: request2
  }).catch((signer.errorHandler || defaultErrorHandler2)(signingProperties));
  (signer.successHandler || defaultSuccessHandler2)(output.response, signingProperties);
  return output;
};
var getS3ExpressHttpSigningPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(s3ExpressHttpSigningMiddleware(config), httpSigningMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
var resolveS3Config = (input, { session }) => {
  const [s3ClientProvider, CreateSessionCommandCtor] = session;
  const { forcePathStyle, useAccelerateEndpoint, disableMultiregionAccessPoints, followRegionRedirects, s3ExpressIdentityProvider, bucketEndpoint } = input;
  return Object.assign(input, {
    forcePathStyle: forcePathStyle ?? false,
    useAccelerateEndpoint: useAccelerateEndpoint ?? false,
    disableMultiregionAccessPoints: disableMultiregionAccessPoints ?? false,
    followRegionRedirects: followRegionRedirects ?? false,
    s3ExpressIdentityProvider: s3ExpressIdentityProvider ?? new S3ExpressIdentityProviderImpl(async (key) => s3ClientProvider().send(new CreateSessionCommandCtor({
      Bucket: key
    }))),
    bucketEndpoint: bucketEndpoint ?? false
  });
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
init_dist_es2();
init_dist_es14();
var THROW_IF_EMPTY_BODY = {
  CopyObjectCommand: true,
  UploadPartCopyCommand: true,
  CompleteMultipartUploadCommand: true
};
var MAX_BYTES_TO_INSPECT = 3e3;
var throw200ExceptionsMiddleware = (config) => (next, context) => async (args) => {
  const result = await next(args);
  const { response } = result;
  if (!HttpResponse.isInstance(response)) {
    return result;
  }
  const { statusCode, body: sourceBody } = response;
  if (statusCode < 200 || statusCode >= 300) {
    return result;
  }
  const isSplittableStream = typeof sourceBody?.stream === "function" || typeof sourceBody?.pipe === "function" || typeof sourceBody?.tee === "function";
  if (!isSplittableStream) {
    return result;
  }
  let bodyCopy = sourceBody;
  let body = sourceBody;
  if (sourceBody && typeof sourceBody === "object" && !(sourceBody instanceof Uint8Array)) {
    [bodyCopy, body] = await splitStream2(sourceBody);
  }
  response.body = body;
  const bodyBytes = await collectBody2(bodyCopy, {
    streamCollector: async (stream) => {
      return headStream2(stream, MAX_BYTES_TO_INSPECT);
    }
  });
  if (typeof bodyCopy?.destroy === "function") {
    bodyCopy.destroy();
  }
  const bodyStringTail = config.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));
  if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName]) {
    const err = new Error("S3 aborted request");
    err.name = "InternalError";
    throw err;
  }
  if (bodyStringTail && bodyStringTail.endsWith("</Error>")) {
    response.statusCode = 400;
  }
  return result;
};
var collectBody2 = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var throw200ExceptionsMiddlewareOptions = {
  relation: "after",
  toMiddleware: "deserializerMiddleware",
  tags: ["THROW_200_EXCEPTIONS", "S3"],
  name: "throw200ExceptionsMiddleware",
  override: true
};
var getThrow200ExceptionsPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(throw200ExceptionsMiddleware(config), throw200ExceptionsMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/util-arn-parser/dist-es/index.js
var validate = (str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
function bucketEndpointMiddleware(options) {
  return (next, context) => async (args) => {
    if (options.bucketEndpoint) {
      const endpoint = context.endpointV2;
      if (endpoint) {
        const bucket = args.input.Bucket;
        if (typeof bucket === "string") {
          try {
            const bucketEndpointUrl = new URL(bucket);
            context.endpointV2 = {
              ...endpoint,
              url: bucketEndpointUrl
            };
          } catch (e5) {
            const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
            if (context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(warning);
            } else {
              context.logger?.warn?.(warning);
            }
            throw e5;
          }
        }
      }
    }
    return next(args);
  };
}
var bucketEndpointMiddlewareOptions = {
  name: "bucketEndpointMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
function validateBucketNameMiddleware({ bucketEndpoint }) {
  return (next) => async (args) => {
    const { input: { Bucket } } = args;
    if (!bucketEndpoint && typeof Bucket === "string" && !validate(Bucket) && Bucket.indexOf("/") >= 0) {
      const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
      err.name = "InvalidBucketName";
      throw err;
    }
    return next({ ...args });
  };
}
var validateBucketNameMiddlewareOptions = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware",
  override: true
};
var getValidateBucketNamePlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
    clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
  }
});

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
init_dist_es27();
init_dist_es28();
init_dist_es15();

// node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
var resolveEventStreamSerdeConfig = (input) => Object.assign(input, {
  eventStreamMarshaller: input.eventStreamSerdeProvider(input)
});

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
init_dist_es29();
init_dist_es34();
init_dist_es37();
init_dist_es19();

// node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthSchemeProvider.js
init_dist_es20();

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
init_dist_es17();

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
var signatureV4CrtContainer = {
  CrtSignerV4: null
};

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion = class {
  sigv4aSigner;
  sigv4Signer;
  signerOptions;
  constructor(options) {
    this.sigv4Signer = new SignatureV4S3Express(options);
    this.signerOptions = options;
  }
  async sign(requestToSign, options = {}) {
    if (options.signingRegion === "*") {
      return this.getSigv4aSigner().sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }
  async signWithCredentials(requestToSign, credentials, options = {}) {
    if (options.signingRegion === "*") {
      const signer = this.getSigv4aSigner();
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      if (CrtSignerV4 && signer instanceof CrtSignerV4) {
        return signer.signWithCredentials(requestToSign, credentials, options);
      } else {
        throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
    }
    return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
  }
  async presign(originalRequest, options = {}) {
    if (options.signingRegion === "*") {
      const signer = this.getSigv4aSigner();
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      if (CrtSignerV4 && signer instanceof CrtSignerV4) {
        return signer.presign(originalRequest, options);
      } else {
        throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
  async presignWithCredentials(originalRequest, credentials, options = {}) {
    if (options.signingRegion === "*") {
      throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
    }
    return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner) {
      const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
      const JsSigV4aSigner = signatureV4aContainer.SignatureV4a;
      if (this.signerOptions.runtime === "node") {
        if (!CrtSignerV4 && !JsSigV4aSigner) {
          throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
        }
        if (CrtSignerV4 && typeof CrtSignerV4 === "function") {
          this.sigv4aSigner = new CrtSignerV4({
            ...this.signerOptions,
            signingAlgorithm: 1
          });
        } else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") {
          this.sigv4aSigner = new JsSigV4aSigner({
            ...this.signerOptions
          });
        } else {
          throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
        }
      } else {
        if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") {
          throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
        }
        this.sigv4aSigner = new JsSigV4aSigner({
          ...this.signerOptions
        });
      }
    }
    return this.sigv4aSigner;
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthSchemeProvider.js
init_dist_es34();
init_dist_es3();

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
init_dist_es26();
init_dist_es25();

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/ruleset.js
var cp = "required";
var cq = "type";
var cr = "rules";
var cs = "conditions";
var ct = "fn";
var cu = "argv";
var cv = "ref";
var cw = "assign";
var cx = "url";
var cy = "properties";
var cz = "backend";
var cA = "authSchemes";
var cB = "disableDoubleEncoding";
var cC = "signingName";
var cD = "signingRegion";
var cE = "headers";
var cF = "signingRegionSet";
var a = 6;
var b = false;
var c = true;
var d = "isSet";
var e = "booleanEquals";
var f = "error";
var g = "aws.partition";
var h = "stringEquals";
var i = "getAttr";
var j = "name";
var k = "substring";
var l = "bucketSuffix";
var m = "parseURL";
var n = "endpoint";
var o = "tree";
var p = "aws.isVirtualHostableS3Bucket";
var q = "{url#scheme}://{Bucket}.{url#authority}{url#path}";
var r = "not";
var s = "accessPointSuffix";
var t = "{url#scheme}://{url#authority}{url#path}";
var u = "hardwareType";
var v = "regionPrefix";
var w = "bucketAliasSuffix";
var x = "outpostId";
var y = "isValidHostLabel";
var z = "sigv4a";
var A = "s3-outposts";
var B = "s3";
var C = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}";
var D = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}";
var E = "https://{Bucket}.s3.{partitionResult#dnsSuffix}";
var F = "aws.parseArn";
var G = "bucketArn";
var H = "arnType";
var I = "";
var J = "s3-object-lambda";
var K = "accesspoint";
var L = "accessPointName";
var M = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}";
var N = "mrapPartition";
var O = "outpostType";
var P = "arnPrefix";
var Q = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}";
var R = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}";
var S = "https://s3.{partitionResult#dnsSuffix}";
var T = { [cp]: false, [cq]: "String" };
var U = { [cp]: true, "default": false, [cq]: "Boolean" };
var V = { [cp]: false, [cq]: "Boolean" };
var W = { [ct]: e, [cu]: [{ [cv]: "Accelerate" }, true] };
var X = { [ct]: e, [cu]: [{ [cv]: "UseFIPS" }, true] };
var Y = { [ct]: e, [cu]: [{ [cv]: "UseDualStack" }, true] };
var Z = { [ct]: d, [cu]: [{ [cv]: "Endpoint" }] };
var aa = { [ct]: g, [cu]: [{ [cv]: "Region" }], [cw]: "partitionResult" };
var ab = { [ct]: h, [cu]: [{ [ct]: i, [cu]: [{ [cv]: "partitionResult" }, j] }, "aws-cn"] };
var ac = { [ct]: d, [cu]: [{ [cv]: "Bucket" }] };
var ad = { [cv]: "Bucket" };
var ae = { [cs]: [Y], [f]: "S3Express does not support Dual-stack.", [cq]: f };
var af = { [cs]: [W], [f]: "S3Express does not support S3 Accelerate.", [cq]: f };
var ag = { [cs]: [Z, { [ct]: m, [cu]: [{ [cv]: "Endpoint" }], [cw]: "url" }], [cr]: [{ [cs]: [{ [ct]: d, [cu]: [{ [cv]: "DisableS3ExpressSessionAuth" }] }, { [ct]: e, [cu]: [{ [cv]: "DisableS3ExpressSessionAuth" }, true] }], [cr]: [{ [cs]: [{ [ct]: e, [cu]: [{ [ct]: i, [cu]: [{ [cv]: "url" }, "isIp"] }, true] }], [cr]: [{ [cs]: [{ [ct]: "uriEncode", [cu]: [ad], [cw]: "uri_encoded_bucket" }], [cr]: [{ [n]: { [cx]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }], [cq]: o }], [cq]: o }, { [cs]: [{ [ct]: p, [cu]: [ad, false] }], [cr]: [{ [n]: { [cx]: q, [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }], [cq]: o }, { [f]: "S3Express bucket name is not a valid virtual hostable name.", [cq]: f }], [cq]: o }, { [cs]: [{ [ct]: e, [cu]: [{ [ct]: i, [cu]: [{ [cv]: "url" }, "isIp"] }, true] }], [cr]: [{ [cs]: [{ [ct]: "uriEncode", [cu]: [ad], [cw]: "uri_encoded_bucket" }], [cr]: [{ [n]: { [cx]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4-s3express", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }], [cq]: o }], [cq]: o }, { [cs]: [{ [ct]: p, [cu]: [ad, false] }], [cr]: [{ [n]: { [cx]: q, [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4-s3express", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }], [cq]: o }, { [f]: "S3Express bucket name is not a valid virtual hostable name.", [cq]: f }], [cq]: o };
var ah = { [ct]: m, [cu]: [{ [cv]: "Endpoint" }], [cw]: "url" };
var ai = { [ct]: e, [cu]: [{ [ct]: i, [cu]: [{ [cv]: "url" }, "isIp"] }, true] };
var aj = { [cv]: "url" };
var ak = { [ct]: "uriEncode", [cu]: [ad], [cw]: "uri_encoded_bucket" };
var al = { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: "s3express", [cD]: "{Region}" }] };
var am = {};
var an = { [ct]: p, [cu]: [ad, false] };
var ao = { [f]: "S3Express bucket name is not a valid virtual hostable name.", [cq]: f };
var ap = { [ct]: d, [cu]: [{ [cv]: "UseS3ExpressControlEndpoint" }] };
var aq = { [ct]: e, [cu]: [{ [cv]: "UseS3ExpressControlEndpoint" }, true] };
var ar = { [ct]: r, [cu]: [Z] };
var as = { [f]: "Unrecognized S3Express bucket name format.", [cq]: f };
var at = { [ct]: r, [cu]: [ac] };
var au = { [cv]: u };
var av = { [cs]: [ar], [f]: "Expected a endpoint to be specified but no endpoint was found", [cq]: f };
var aw = { [cA]: [{ [cB]: true, [j]: z, [cC]: A, [cF]: ["*"] }, { [cB]: true, [j]: "sigv4", [cC]: A, [cD]: "{Region}" }] };
var ax = { [ct]: e, [cu]: [{ [cv]: "ForcePathStyle" }, false] };
var ay = { [cv]: "ForcePathStyle" };
var az = { [ct]: e, [cu]: [{ [cv]: "Accelerate" }, false] };
var aA = { [ct]: h, [cu]: [{ [cv]: "Region" }, "aws-global"] };
var aB = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: B, [cD]: "us-east-1" }] };
var aC = { [ct]: r, [cu]: [aA] };
var aD = { [ct]: e, [cu]: [{ [cv]: "UseGlobalEndpoint" }, true] };
var aE = { [cx]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cy]: { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: B, [cD]: "{Region}" }] }, [cE]: {} };
var aF = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: B, [cD]: "{Region}" }] };
var aG = { [ct]: e, [cu]: [{ [cv]: "UseGlobalEndpoint" }, false] };
var aH = { [ct]: e, [cu]: [{ [cv]: "UseDualStack" }, false] };
var aI = { [cx]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var aJ = { [ct]: e, [cu]: [{ [cv]: "UseFIPS" }, false] };
var aK = { [cx]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var aL = { [cx]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var aM = { [ct]: e, [cu]: [{ [ct]: i, [cu]: [aj, "isIp"] }, false] };
var aN = { [cx]: C, [cy]: aF, [cE]: {} };
var aO = { [cx]: q, [cy]: aF, [cE]: {} };
var aP = { [n]: aO, [cq]: n };
var aQ = { [cx]: D, [cy]: aF, [cE]: {} };
var aR = { [cx]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var aS = { [f]: "Invalid region: region was not a valid DNS name.", [cq]: f };
var aT = { [cv]: G };
var aU = { [cv]: H };
var aV = { [ct]: i, [cu]: [aT, "service"] };
var aW = { [cv]: L };
var aX = { [cs]: [Y], [f]: "S3 Object Lambda does not support Dual-stack", [cq]: f };
var aY = { [cs]: [W], [f]: "S3 Object Lambda does not support S3 Accelerate", [cq]: f };
var aZ = { [cs]: [{ [ct]: d, [cu]: [{ [cv]: "DisableAccessPoints" }] }, { [ct]: e, [cu]: [{ [cv]: "DisableAccessPoints" }, true] }], [f]: "Access points are not supported for this operation", [cq]: f };
var ba = { [cs]: [{ [ct]: d, [cu]: [{ [cv]: "UseArnRegion" }] }, { [ct]: e, [cu]: [{ [cv]: "UseArnRegion" }, false] }, { [ct]: r, [cu]: [{ [ct]: h, [cu]: [{ [ct]: i, [cu]: [aT, "region"] }, "{Region}"] }] }], [f]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`", [cq]: f };
var bb = { [ct]: i, [cu]: [{ [cv]: "bucketPartition" }, j] };
var bc = { [ct]: i, [cu]: [aT, "accountId"] };
var bd = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: J, [cD]: "{bucketArn#region}" }] };
var be = { [f]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`", [cq]: f };
var bf = { [f]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`", [cq]: f };
var bg = { [f]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [cq]: f };
var bh = { [f]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`", [cq]: f };
var bi = { [f]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [cq]: f };
var bj = { [f]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided", [cq]: f };
var bk = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: B, [cD]: "{bucketArn#region}" }] };
var bl = { [cA]: [{ [cB]: true, [j]: z, [cC]: A, [cF]: ["*"] }, { [cB]: true, [j]: "sigv4", [cC]: A, [cD]: "{bucketArn#region}" }] };
var bm = { [ct]: F, [cu]: [ad] };
var bn = { [cx]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aF, [cE]: {} };
var bo = { [cx]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aF, [cE]: {} };
var bp = { [cx]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aF, [cE]: {} };
var bq = { [cx]: Q, [cy]: aF, [cE]: {} };
var br = { [cx]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aF, [cE]: {} };
var bs = { [cv]: "UseObjectLambdaEndpoint" };
var bt = { [cA]: [{ [cB]: true, [j]: "sigv4", [cC]: J, [cD]: "{Region}" }] };
var bu = { [cx]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var bv = { [cx]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var bw = { [cx]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var bx = { [cx]: t, [cy]: aF, [cE]: {} };
var by = { [cx]: "https://s3.{Region}.{partitionResult#dnsSuffix}", [cy]: aF, [cE]: {} };
var bz = [{ [cv]: "Region" }];
var bA = [{ [cv]: "Endpoint" }];
var bB = [ad];
var bC = [Y];
var bD = [W];
var bE = [Z, ah];
var bF = [{ [ct]: d, [cu]: [{ [cv]: "DisableS3ExpressSessionAuth" }] }, { [ct]: e, [cu]: [{ [cv]: "DisableS3ExpressSessionAuth" }, true] }];
var bG = [ak];
var bH = [an];
var bI = [aa];
var bJ = [X];
var bK = [{ [ct]: k, [cu]: [ad, 6, 14, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 14, 16, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bL = [{ [cs]: [X], [n]: { [cx]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [cy]: al, [cE]: {} }, [cq]: n }, { [n]: { [cx]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [cy]: al, [cE]: {} }, [cq]: n }];
var bM = [{ [ct]: k, [cu]: [ad, 6, 15, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 15, 17, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bN = [{ [ct]: k, [cu]: [ad, 6, 19, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 19, 21, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bO = [{ [ct]: k, [cu]: [ad, 6, 20, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 20, 22, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bP = [{ [ct]: k, [cu]: [ad, 6, 26, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 26, 28, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bQ = [{ [cs]: [X], [n]: { [cx]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4-s3express", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }, { [n]: { [cx]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [cy]: { [cz]: "S3Express", [cA]: [{ [cB]: true, [j]: "sigv4-s3express", [cC]: "s3express", [cD]: "{Region}" }] }, [cE]: {} }, [cq]: n }];
var bR = [ad, 0, 7, true];
var bS = [{ [ct]: k, [cu]: [ad, 7, 15, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 15, 17, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bT = [{ [ct]: k, [cu]: [ad, 7, 16, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 16, 18, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bU = [{ [ct]: k, [cu]: [ad, 7, 20, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 20, 22, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bV = [{ [ct]: k, [cu]: [ad, 7, 21, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 21, 23, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bW = [{ [ct]: k, [cu]: [ad, 7, 27, true], [cw]: "s3expressAvailabilityZoneId" }, { [ct]: k, [cu]: [ad, 27, 29, true], [cw]: "s3expressAvailabilityZoneDelim" }, { [ct]: h, [cu]: [{ [cv]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bX = [ac];
var bY = [{ [ct]: y, [cu]: [{ [cv]: x }, false] }];
var bZ = [{ [ct]: h, [cu]: [{ [cv]: v }, "beta"] }];
var ca = ["*"];
var cb = [{ [ct]: y, [cu]: [{ [cv]: "Region" }, false] }];
var cc = [{ [ct]: h, [cu]: [{ [cv]: "Region" }, "us-east-1"] }];
var cd = [{ [ct]: h, [cu]: [aU, K] }];
var ce = [{ [ct]: i, [cu]: [aT, "resourceId[1]"], [cw]: L }, { [ct]: r, [cu]: [{ [ct]: h, [cu]: [aW, I] }] }];
var cf = [aT, "resourceId[1]"];
var cg = [{ [ct]: r, [cu]: [{ [ct]: h, [cu]: [{ [ct]: i, [cu]: [aT, "region"] }, I] }] }];
var ch = [{ [ct]: r, [cu]: [{ [ct]: d, [cu]: [{ [ct]: i, [cu]: [aT, "resourceId[2]"] }] }] }];
var ci = [aT, "resourceId[2]"];
var cj = [{ [ct]: g, [cu]: [{ [ct]: i, [cu]: [aT, "region"] }], [cw]: "bucketPartition" }];
var ck = [{ [ct]: h, [cu]: [bb, { [ct]: i, [cu]: [{ [cv]: "partitionResult" }, j] }] }];
var cl = [{ [ct]: y, [cu]: [{ [ct]: i, [cu]: [aT, "region"] }, true] }];
var cm = [{ [ct]: y, [cu]: [bc, false] }];
var cn = [{ [ct]: y, [cu]: [aW, false] }];
var co = [{ [ct]: y, [cu]: [{ [cv]: "Region" }, true] }];
var _data = { version: "1.0", parameters: { Bucket: T, Region: T, UseFIPS: U, UseDualStack: U, Endpoint: T, ForcePathStyle: U, Accelerate: U, UseGlobalEndpoint: U, UseObjectLambdaEndpoint: V, Key: T, Prefix: T, CopySource: T, DisableAccessPoints: V, DisableMultiRegionAccessPoints: U, UseArnRegion: V, UseS3ExpressControlEndpoint: V, DisableS3ExpressSessionAuth: V }, [cr]: [{ [cs]: [{ [ct]: d, [cu]: bz }], [cr]: [{ [cs]: [W, X], error: "Accelerate cannot be used with FIPS", [cq]: f }, { [cs]: [Y, Z], error: "Cannot set dual-stack in combination with a custom endpoint.", [cq]: f }, { [cs]: [Z, X], error: "A custom endpoint cannot be combined with FIPS", [cq]: f }, { [cs]: [Z, W], error: "A custom endpoint cannot be combined with S3 Accelerate", [cq]: f }, { [cs]: [X, aa, ab], error: "Partition does not support FIPS", [cq]: f }, { [cs]: [ac, { [ct]: k, [cu]: [ad, 0, a, c], [cw]: l }, { [ct]: h, [cu]: [{ [cv]: l }, "--x-s3"] }], [cr]: [ae, af, ag, { [cs]: [ap, aq], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: [ak, ar], [cr]: [{ [cs]: bJ, endpoint: { [cx]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: al, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: al, [cE]: am }, [cq]: n }], [cq]: o }], [cq]: o }], [cq]: o }, { [cs]: bH, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: bF, [cr]: [{ [cs]: bK, [cr]: bL, [cq]: o }, { [cs]: bM, [cr]: bL, [cq]: o }, { [cs]: bN, [cr]: bL, [cq]: o }, { [cs]: bO, [cr]: bL, [cq]: o }, { [cs]: bP, [cr]: bL, [cq]: o }, as], [cq]: o }, { [cs]: bK, [cr]: bQ, [cq]: o }, { [cs]: bM, [cr]: bQ, [cq]: o }, { [cs]: bN, [cr]: bQ, [cq]: o }, { [cs]: bO, [cr]: bQ, [cq]: o }, { [cs]: bP, [cr]: bQ, [cq]: o }, as], [cq]: o }], [cq]: o }, ao], [cq]: o }, { [cs]: [ac, { [ct]: k, [cu]: bR, [cw]: s }, { [ct]: h, [cu]: [{ [cv]: s }, "--xa-s3"] }], [cr]: [ae, af, ag, { [cs]: bH, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: bF, [cr]: [{ [cs]: bS, [cr]: bL, [cq]: o }, { [cs]: bT, [cr]: bL, [cq]: o }, { [cs]: bU, [cr]: bL, [cq]: o }, { [cs]: bV, [cr]: bL, [cq]: o }, { [cs]: bW, [cr]: bL, [cq]: o }, as], [cq]: o }, { [cs]: bS, [cr]: bQ, [cq]: o }, { [cs]: bT, [cr]: bQ, [cq]: o }, { [cs]: bU, [cr]: bQ, [cq]: o }, { [cs]: bV, [cr]: bQ, [cq]: o }, { [cs]: bW, [cr]: bQ, [cq]: o }, as], [cq]: o }], [cq]: o }, ao], [cq]: o }, { [cs]: [at, ap, aq], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: bE, endpoint: { [cx]: t, [cy]: al, [cE]: am }, [cq]: n }, { [cs]: bJ, endpoint: { [cx]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}", [cy]: al, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}", [cy]: al, [cE]: am }, [cq]: n }], [cq]: o }], [cq]: o }, { [cs]: [ac, { [ct]: k, [cu]: [ad, 49, 50, c], [cw]: u }, { [ct]: k, [cu]: [ad, 8, 12, c], [cw]: v }, { [ct]: k, [cu]: bR, [cw]: w }, { [ct]: k, [cu]: [ad, 32, 49, c], [cw]: x }, { [ct]: g, [cu]: bz, [cw]: "regionPartition" }, { [ct]: h, [cu]: [{ [cv]: w }, "--op-s3"] }], [cr]: [{ [cs]: bY, [cr]: [{ [cs]: [{ [ct]: h, [cu]: [au, "e"] }], [cr]: [{ [cs]: bZ, [cr]: [av, { [cs]: bE, endpoint: { [cx]: "https://{Bucket}.ec2.{url#authority}", [cy]: aw, [cE]: am }, [cq]: n }], [cq]: o }, { endpoint: { [cx]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cy]: aw, [cE]: am }, [cq]: n }], [cq]: o }, { [cs]: [{ [ct]: h, [cu]: [au, "o"] }], [cr]: [{ [cs]: bZ, [cr]: [av, { [cs]: bE, endpoint: { [cx]: "https://{Bucket}.op-{outpostId}.{url#authority}", [cy]: aw, [cE]: am }, [cq]: n }], [cq]: o }, { endpoint: { [cx]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cy]: aw, [cE]: am }, [cq]: n }], [cq]: o }, { error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"', [cq]: f }], [cq]: o }, { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [cq]: f }], [cq]: o }, { [cs]: bX, [cr]: [{ [cs]: [Z, { [ct]: r, [cu]: [{ [ct]: d, [cu]: [{ [ct]: m, [cu]: bA }] }] }], error: "Custom endpoint `{Endpoint}` was not a valid URI", [cq]: f }, { [cs]: [ax, an], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: cb, [cr]: [{ [cs]: [W, ab], error: "S3 Accelerate cannot be used in this region", [cq]: f }, { [cs]: [Y, X, az, ar, aA], endpoint: { [cx]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, X, az, ar, aC, aD], [cr]: [{ endpoint: aE, [cq]: n }], [cq]: o }, { [cs]: [Y, X, az, ar, aC, aG], endpoint: aE, [cq]: n }, { [cs]: [aH, X, az, ar, aA], endpoint: { [cx]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, X, az, ar, aC, aD], [cr]: [{ endpoint: aI, [cq]: n }], [cq]: o }, { [cs]: [aH, X, az, ar, aC, aG], endpoint: aI, [cq]: n }, { [cs]: [Y, aJ, W, ar, aA], endpoint: { [cx]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, aJ, W, ar, aC, aD], [cr]: [{ endpoint: aK, [cq]: n }], [cq]: o }, { [cs]: [Y, aJ, W, ar, aC, aG], endpoint: aK, [cq]: n }, { [cs]: [Y, aJ, az, ar, aA], endpoint: { [cx]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, aJ, az, ar, aC, aD], [cr]: [{ endpoint: aL, [cq]: n }], [cq]: o }, { [cs]: [Y, aJ, az, ar, aC, aG], endpoint: aL, [cq]: n }, { [cs]: [aH, aJ, az, Z, ah, ai, aA], endpoint: { [cx]: C, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, aJ, az, Z, ah, aM, aA], endpoint: { [cx]: q, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, aJ, az, Z, ah, ai, aC, aD], [cr]: [{ [cs]: cc, endpoint: aN, [cq]: n }, { endpoint: aN, [cq]: n }], [cq]: o }, { [cs]: [aH, aJ, az, Z, ah, aM, aC, aD], [cr]: [{ [cs]: cc, endpoint: aO, [cq]: n }, aP], [cq]: o }, { [cs]: [aH, aJ, az, Z, ah, ai, aC, aG], endpoint: aN, [cq]: n }, { [cs]: [aH, aJ, az, Z, ah, aM, aC, aG], endpoint: aO, [cq]: n }, { [cs]: [aH, aJ, W, ar, aA], endpoint: { [cx]: D, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, aJ, W, ar, aC, aD], [cr]: [{ [cs]: cc, endpoint: aQ, [cq]: n }, { endpoint: aQ, [cq]: n }], [cq]: o }, { [cs]: [aH, aJ, W, ar, aC, aG], endpoint: aQ, [cq]: n }, { [cs]: [aH, aJ, az, ar, aA], endpoint: { [cx]: E, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, aJ, az, ar, aC, aD], [cr]: [{ [cs]: cc, endpoint: { [cx]: E, [cy]: aF, [cE]: am }, [cq]: n }, { endpoint: aR, [cq]: n }], [cq]: o }, { [cs]: [aH, aJ, az, ar, aC, aG], endpoint: aR, [cq]: n }], [cq]: o }, aS], [cq]: o }], [cq]: o }, { [cs]: [Z, ah, { [ct]: h, [cu]: [{ [ct]: i, [cu]: [aj, "scheme"] }, "http"] }, { [ct]: p, [cu]: [ad, c] }, ax, aJ, aH, az], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: cb, [cr]: [aP], [cq]: o }, aS], [cq]: o }], [cq]: o }, { [cs]: [ax, { [ct]: F, [cu]: bB, [cw]: G }], [cr]: [{ [cs]: [{ [ct]: i, [cu]: [aT, "resourceId[0]"], [cw]: H }, { [ct]: r, [cu]: [{ [ct]: h, [cu]: [aU, I] }] }], [cr]: [{ [cs]: [{ [ct]: h, [cu]: [aV, J] }], [cr]: [{ [cs]: cd, [cr]: [{ [cs]: ce, [cr]: [aX, aY, { [cs]: cg, [cr]: [aZ, { [cs]: ch, [cr]: [ba, { [cs]: cj, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: ck, [cr]: [{ [cs]: cl, [cr]: [{ [cs]: [{ [ct]: h, [cu]: [bc, I] }], error: "Invalid ARN: Missing account id", [cq]: f }, { [cs]: cm, [cr]: [{ [cs]: cn, [cr]: [{ [cs]: bE, endpoint: { [cx]: M, [cy]: bd, [cE]: am }, [cq]: n }, { [cs]: bJ, endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bd, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bd, [cE]: am }, [cq]: n }], [cq]: o }, be], [cq]: o }, bf], [cq]: o }, bg], [cq]: o }, bh], [cq]: o }], [cq]: o }], [cq]: o }, bi], [cq]: o }, { error: "Invalid ARN: bucket ARN is missing a region", [cq]: f }], [cq]: o }, bj], [cq]: o }, { error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`", [cq]: f }], [cq]: o }, { [cs]: cd, [cr]: [{ [cs]: ce, [cr]: [{ [cs]: cg, [cr]: [{ [cs]: cd, [cr]: [{ [cs]: cg, [cr]: [aZ, { [cs]: ch, [cr]: [ba, { [cs]: cj, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: [{ [ct]: h, [cu]: [bb, "{partitionResult#name}"] }], [cr]: [{ [cs]: cl, [cr]: [{ [cs]: [{ [ct]: h, [cu]: [aV, B] }], [cr]: [{ [cs]: cm, [cr]: [{ [cs]: cn, [cr]: [{ [cs]: bD, error: "Access Points do not support S3 Accelerate", [cq]: f }, { [cs]: [X, Y], endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bk, [cE]: am }, [cq]: n }, { [cs]: [X, aH], endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bk, [cE]: am }, [cq]: n }, { [cs]: [aJ, Y], endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bk, [cE]: am }, [cq]: n }, { [cs]: [aJ, aH, Z, ah], endpoint: { [cx]: M, [cy]: bk, [cE]: am }, [cq]: n }, { [cs]: [aJ, aH], endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bk, [cE]: am }, [cq]: n }], [cq]: o }, be], [cq]: o }, bf], [cq]: o }, { error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}", [cq]: f }], [cq]: o }, bg], [cq]: o }, bh], [cq]: o }], [cq]: o }], [cq]: o }, bi], [cq]: o }], [cq]: o }], [cq]: o }, { [cs]: [{ [ct]: y, [cu]: [aW, c] }], [cr]: [{ [cs]: bC, error: "S3 MRAP does not support dual-stack", [cq]: f }, { [cs]: bJ, error: "S3 MRAP does not support FIPS", [cq]: f }, { [cs]: bD, error: "S3 MRAP does not support S3 Accelerate", [cq]: f }, { [cs]: [{ [ct]: e, [cu]: [{ [cv]: "DisableMultiRegionAccessPoints" }, c] }], error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.", [cq]: f }, { [cs]: [{ [ct]: g, [cu]: bz, [cw]: N }], [cr]: [{ [cs]: [{ [ct]: h, [cu]: [{ [ct]: i, [cu]: [{ [cv]: N }, j] }, { [ct]: i, [cu]: [aT, "partition"] }] }], [cr]: [{ endpoint: { [cx]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}", [cy]: { [cA]: [{ [cB]: c, name: z, [cC]: B, [cF]: ca }] }, [cE]: am }, [cq]: n }], [cq]: o }, { error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`", [cq]: f }], [cq]: o }], [cq]: o }, { error: "Invalid Access Point Name", [cq]: f }], [cq]: o }, bj], [cq]: o }, { [cs]: [{ [ct]: h, [cu]: [aV, A] }], [cr]: [{ [cs]: bC, error: "S3 Outposts does not support Dual-stack", [cq]: f }, { [cs]: bJ, error: "S3 Outposts does not support FIPS", [cq]: f }, { [cs]: bD, error: "S3 Outposts does not support S3 Accelerate", [cq]: f }, { [cs]: [{ [ct]: d, [cu]: [{ [ct]: i, [cu]: [aT, "resourceId[4]"] }] }], error: "Invalid Arn: Outpost Access Point ARN contains sub resources", [cq]: f }, { [cs]: [{ [ct]: i, [cu]: cf, [cw]: x }], [cr]: [{ [cs]: bY, [cr]: [ba, { [cs]: cj, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: ck, [cr]: [{ [cs]: cl, [cr]: [{ [cs]: cm, [cr]: [{ [cs]: [{ [ct]: i, [cu]: ci, [cw]: O }], [cr]: [{ [cs]: [{ [ct]: i, [cu]: [aT, "resourceId[3]"], [cw]: L }], [cr]: [{ [cs]: [{ [ct]: h, [cu]: [{ [cv]: O }, K] }], [cr]: [{ [cs]: bE, endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}", [cy]: bl, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cy]: bl, [cE]: am }, [cq]: n }], [cq]: o }, { error: "Expected an outpost type `accesspoint`, found {outpostType}", [cq]: f }], [cq]: o }, { error: "Invalid ARN: expected an access point name", [cq]: f }], [cq]: o }, { error: "Invalid ARN: Expected a 4-component resource", [cq]: f }], [cq]: o }, bf], [cq]: o }, bg], [cq]: o }, bh], [cq]: o }], [cq]: o }], [cq]: o }, { error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`", [cq]: f }], [cq]: o }, { error: "Invalid ARN: The Outpost Id was not set", [cq]: f }], [cq]: o }, { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [cq]: f }], [cq]: o }, { error: "Invalid ARN: No ARN type specified", [cq]: f }], [cq]: o }, { [cs]: [{ [ct]: k, [cu]: [ad, 0, 4, b], [cw]: P }, { [ct]: h, [cu]: [{ [cv]: P }, "arn:"] }, { [ct]: r, [cu]: [{ [ct]: d, [cu]: [bm] }] }], error: "Invalid ARN: `{Bucket}` was not a valid ARN", [cq]: f }, { [cs]: [{ [ct]: e, [cu]: [ay, c] }, bm], error: "Path-style addressing cannot be used with ARN buckets", [cq]: f }, { [cs]: bG, [cr]: [{ [cs]: bI, [cr]: [{ [cs]: [az], [cr]: [{ [cs]: [Y, ar, X, aA], endpoint: { [cx]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, ar, X, aC, aD], [cr]: [{ endpoint: bn, [cq]: n }], [cq]: o }, { [cs]: [Y, ar, X, aC, aG], endpoint: bn, [cq]: n }, { [cs]: [aH, ar, X, aA], endpoint: { [cx]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, ar, X, aC, aD], [cr]: [{ endpoint: bo, [cq]: n }], [cq]: o }, { [cs]: [aH, ar, X, aC, aG], endpoint: bo, [cq]: n }, { [cs]: [Y, ar, aJ, aA], endpoint: { [cx]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [Y, ar, aJ, aC, aD], [cr]: [{ endpoint: bp, [cq]: n }], [cq]: o }, { [cs]: [Y, ar, aJ, aC, aG], endpoint: bp, [cq]: n }, { [cs]: [aH, Z, ah, aJ, aA], endpoint: { [cx]: Q, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, Z, ah, aJ, aC, aD], [cr]: [{ [cs]: cc, endpoint: bq, [cq]: n }, { endpoint: bq, [cq]: n }], [cq]: o }, { [cs]: [aH, Z, ah, aJ, aC, aG], endpoint: bq, [cq]: n }, { [cs]: [aH, ar, aJ, aA], endpoint: { [cx]: R, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aH, ar, aJ, aC, aD], [cr]: [{ [cs]: cc, endpoint: { [cx]: R, [cy]: aF, [cE]: am }, [cq]: n }, { endpoint: br, [cq]: n }], [cq]: o }, { [cs]: [aH, ar, aJ, aC, aG], endpoint: br, [cq]: n }], [cq]: o }, { error: "Path-style addressing cannot be used with S3 Accelerate", [cq]: f }], [cq]: o }], [cq]: o }], [cq]: o }, { [cs]: [{ [ct]: d, [cu]: [bs] }, { [ct]: e, [cu]: [bs, c] }], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: co, [cr]: [aX, aY, { [cs]: bE, endpoint: { [cx]: t, [cy]: bt, [cE]: am }, [cq]: n }, { [cs]: bJ, endpoint: { [cx]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", [cy]: bt, [cE]: am }, [cq]: n }, { endpoint: { [cx]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", [cy]: bt, [cE]: am }, [cq]: n }], [cq]: o }, aS], [cq]: o }], [cq]: o }, { [cs]: [at], [cr]: [{ [cs]: bI, [cr]: [{ [cs]: co, [cr]: [{ [cs]: [X, Y, ar, aA], endpoint: { [cx]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [X, Y, ar, aC, aD], [cr]: [{ endpoint: bu, [cq]: n }], [cq]: o }, { [cs]: [X, Y, ar, aC, aG], endpoint: bu, [cq]: n }, { [cs]: [X, aH, ar, aA], endpoint: { [cx]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [X, aH, ar, aC, aD], [cr]: [{ endpoint: bv, [cq]: n }], [cq]: o }, { [cs]: [X, aH, ar, aC, aG], endpoint: bv, [cq]: n }, { [cs]: [aJ, Y, ar, aA], endpoint: { [cx]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aJ, Y, ar, aC, aD], [cr]: [{ endpoint: bw, [cq]: n }], [cq]: o }, { [cs]: [aJ, Y, ar, aC, aG], endpoint: bw, [cq]: n }, { [cs]: [aJ, aH, Z, ah, aA], endpoint: { [cx]: t, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aJ, aH, Z, ah, aC, aD], [cr]: [{ [cs]: cc, endpoint: bx, [cq]: n }, { endpoint: bx, [cq]: n }], [cq]: o }, { [cs]: [aJ, aH, Z, ah, aC, aG], endpoint: bx, [cq]: n }, { [cs]: [aJ, aH, ar, aA], endpoint: { [cx]: S, [cy]: aB, [cE]: am }, [cq]: n }, { [cs]: [aJ, aH, ar, aC, aD], [cr]: [{ [cs]: cc, endpoint: { [cx]: S, [cy]: aF, [cE]: am }, [cq]: n }, { endpoint: by, [cq]: n }], [cq]: o }, { [cs]: [aJ, aH, ar, aC, aG], endpoint: by, [cq]: n }], [cq]: o }, aS], [cq]: o }], [cq]: o }], [cq]: o }, { error: "A region must be set when sending requests to S3.", [cq]: f }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
  size: 50,
  params: [
    "Accelerate",
    "Bucket",
    "DisableAccessPoints",
    "DisableMultiRegionAccessPoints",
    "DisableS3ExpressSessionAuth",
    "Endpoint",
    "ForcePathStyle",
    "Region",
    "UseArnRegion",
    "UseDualStack",
    "UseFIPS",
    "UseGlobalEndpoint",
    "UseObjectLambdaEndpoint",
    "UseS3ExpressControlEndpoint"
  ]
});
var defaultEndpointResolver = (endpointParams, context = {}) => {
  return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context.logger
  }));
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthSchemeProvider.js
var createEndpointRuleSetHttpAuthSchemeParametersProvider = (defaultHttpAuthSchemeParametersProvider) => async (config, context, input) => {
  if (!input) {
    throw new Error(`Could not find \`input\` for \`defaultEndpointRuleSetHttpAuthSchemeParametersProvider\``);
  }
  const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
  const instructionsFn = getSmithyContext(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
  if (!instructionsFn) {
    throw new Error(`getEndpointParameterInstructions() is not defined on \`${context.commandName}\``);
  }
  const endpointParameters = await resolveParams(input, { getEndpointParameterInstructions: instructionsFn }, config);
  return Object.assign(defaultParameters, endpointParameters);
};
var _defaultS3HttpAuthSchemeParametersProvider = async (config, context, input) => {
  return {
    operation: getSmithyContext(context).operation,
    region: await normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
};
var defaultS3HttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultS3HttpAuthSchemeParametersProvider);
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "s3",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
function createAwsAuthSigv4aHttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4a",
    signingProperties: {
      name: "s3",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
var createEndpointRuleSetHttpAuthSchemeProvider = (defaultEndpointResolver5, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
  const endpointRuleSetHttpAuthSchemeProvider = (authParameters) => {
    const endpoint = defaultEndpointResolver5(authParameters);
    const authSchemes = endpoint.properties?.authSchemes;
    if (!authSchemes) {
      return defaultHttpAuthSchemeResolver(authParameters);
    }
    const options = [];
    for (const scheme of authSchemes) {
      const { name: resolvedName, properties = {}, ...rest } = scheme;
      const name = resolvedName.toLowerCase();
      if (resolvedName !== name) {
        console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${resolvedName}\` to \`${name}\``);
      }
      let schemeId;
      if (name === "sigv4a") {
        schemeId = "aws.auth#sigv4a";
        const sigv4Present = authSchemes.find((s5) => {
          const name2 = s5.name.toLowerCase();
          return name2 !== "sigv4a" && name2.startsWith("sigv4");
        });
        if (!signatureV4CrtContainer.CrtSignerV4 && sigv4Present) {
          continue;
        }
      } else if (name.startsWith("sigv4")) {
        schemeId = "aws.auth#sigv4";
      } else {
        throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${name}\``);
      }
      const createOption = createHttpAuthOptionFunctions[schemeId];
      if (!createOption) {
        throw new Error(`Could not find HttpAuthOption create function for \`${schemeId}\``);
      }
      const option = createOption(authParameters);
      option.schemeId = schemeId;
      option.signingProperties = { ...option.signingProperties || {}, ...rest, ...properties };
      options.push(option);
    }
    return options;
  };
  return endpointRuleSetHttpAuthSchemeProvider;
};
var _defaultS3HttpAuthSchemeProvider = (authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
    }
  }
  return options;
};
var defaultS3HttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, _defaultS3HttpAuthSchemeProvider, {
  "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
  "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption
});
var resolveHttpAuthSchemeConfig = (config) => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  const config_1 = resolveAwsSdkSigV4AConfig(config_0);
  return Object.assign(config_1, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? [])
  });
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
init_dist_es34();
init_dist_es4();
init_dist_es19();

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = (options) => {
  return Object.assign(options, {
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    forcePathStyle: options.forcePathStyle ?? false,
    useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
    defaultSigningName: "s3"
  });
};
var commonParams = {
  ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
  DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
  Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
  DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
  UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
init_dist_es19();

// node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
init_dist_es19();
var S3ServiceException = class _S3ServiceException extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _S3ServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
var NoSuchUpload = class _NoSuchUpload extends S3ServiceException {
  name = "NoSuchUpload";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchUpload.prototype);
  }
};
var ObjectNotInActiveTierError = class _ObjectNotInActiveTierError extends S3ServiceException {
  name = "ObjectNotInActiveTierError";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ObjectNotInActiveTierError.prototype);
  }
};
var BucketAlreadyExists = class _BucketAlreadyExists extends S3ServiceException {
  name = "BucketAlreadyExists";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BucketAlreadyExists.prototype);
  }
};
var BucketAlreadyOwnedByYou = class _BucketAlreadyOwnedByYou extends S3ServiceException {
  name = "BucketAlreadyOwnedByYou";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BucketAlreadyOwnedByYou.prototype);
  }
};
var NoSuchBucket = class _NoSuchBucket extends S3ServiceException {
  name = "NoSuchBucket";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchBucket.prototype);
  }
};
var AnalyticsFilter;
(function(AnalyticsFilter2) {
  AnalyticsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AnalyticsFilter || (AnalyticsFilter = {}));
var MetricsFilter;
(function(MetricsFilter2) {
  MetricsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.AccessPointArn !== void 0)
      return visitor.AccessPointArn(value.AccessPointArn);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(MetricsFilter || (MetricsFilter = {}));
var InvalidObjectState = class _InvalidObjectState extends S3ServiceException {
  name = "InvalidObjectState";
  $fault = "client";
  StorageClass;
  AccessTier;
  constructor(opts) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidObjectState.prototype);
    this.StorageClass = opts.StorageClass;
    this.AccessTier = opts.AccessTier;
  }
};
var NoSuchKey = class _NoSuchKey extends S3ServiceException {
  name = "NoSuchKey";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchKey.prototype);
  }
};
var NotFound = class _NotFound extends S3ServiceException {
  name = "NotFound";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NotFound",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NotFound.prototype);
  }
};
var SessionCredentialsFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING },
  ...obj.SessionToken && { SessionToken: SENSITIVE_STRING }
});
var CreateSessionOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING },
  ...obj.Credentials && { Credentials: SessionCredentialsFilterSensitiveLog(obj.Credentials) }
});
var CreateSessionRequestFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
var GetObjectOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }
});
var GetObjectRequestFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }
});

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
init_dist_es20();
init_dist_es15();
init_dist_es2();
init_dist_es19();

// node_modules/@aws-sdk/client-s3/dist-es/models/models_1.js
init_dist_es19();
var EncryptionTypeMismatch = class _EncryptionTypeMismatch extends S3ServiceException {
  name = "EncryptionTypeMismatch";
  $fault = "client";
  constructor(opts) {
    super({
      name: "EncryptionTypeMismatch",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _EncryptionTypeMismatch.prototype);
  }
};
var InvalidRequest = class _InvalidRequest extends S3ServiceException {
  name = "InvalidRequest";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidRequest",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidRequest.prototype);
  }
};
var InvalidWriteOffset = class _InvalidWriteOffset extends S3ServiceException {
  name = "InvalidWriteOffset";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidWriteOffset",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidWriteOffset.prototype);
  }
};
var TooManyParts = class _TooManyParts extends S3ServiceException {
  name = "TooManyParts";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TooManyParts",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TooManyParts.prototype);
  }
};
var ObjectAlreadyInActiveTierError = class _ObjectAlreadyInActiveTierError extends S3ServiceException {
  name = "ObjectAlreadyInActiveTierError";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ObjectAlreadyInActiveTierError.prototype);
  }
};
var SelectObjectContentEventStream;
(function(SelectObjectContentEventStream2) {
  SelectObjectContentEventStream2.visit = (value, visitor) => {
    if (value.Records !== void 0)
      return visitor.Records(value.Records);
    if (value.Stats !== void 0)
      return visitor.Stats(value.Stats);
    if (value.Progress !== void 0)
      return visitor.Progress(value.Progress);
    if (value.Cont !== void 0)
      return visitor.Cont(value.Cont);
    if (value.End !== void 0)
      return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));
var PutObjectOutputFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
var PutObjectRequestFilterSensitiveLog = (obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING },
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
var se_CreateSessionCommand = async (input, context) => {
  const b5 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xacsm]: input[_SM],
    [_xasse]: input[_SSE],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()]
  });
  b5.bp("/");
  b5.p("Bucket", () => input.Bucket, "{Bucket}", false);
  const query = map({
    [_s]: [, ""]
  });
  let body;
  b5.m("GET").h(headers).q(query).b(body);
  return b5.build();
};
var se_GetObjectCommand = async (input, context) => {
  const b5 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM],
    [_ims]: [() => isSerializableHeaderValue(input[_IMSf]), () => dateToUtcString(input[_IMSf]).toString()],
    [_inm]: input[_INM],
    [_ius]: [() => isSerializableHeaderValue(input[_IUS]), () => dateToUtcString(input[_IUS]).toString()],
    [_ra]: input[_R],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xarp]: input[_RP],
    [_xaebo]: input[_EBO],
    [_xacm]: input[_CM]
  });
  b5.bp("/{Key+}");
  b5.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b5.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "GetObject"],
    [_rcc]: [, input[_RCC]],
    [_rcd]: [, input[_RCD]],
    [_rce]: [, input[_RCE]],
    [_rcl]: [, input[_RCL]],
    [_rct]: [, input[_RCT]],
    [_re]: [() => input.ResponseExpires !== void 0, () => dateToUtcString(input[_RE]).toString()],
    [_vI]: [, input[_VI]],
    [_pN]: [() => input.PartNumber !== void 0, () => input[_PN].toString()]
  });
  let body;
  b5.m("GET").h(headers).q(query).b(body);
  return b5.build();
};
var se_PutObjectCommand = async (input, context) => {
  const b5 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    ...input.Metadata !== void 0 && Object.keys(input.Metadata).reduce((acc, suffix) => {
      acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
      return acc;
    }, {}),
    [_ct]: input[_CTo] || "application/octet-stream",
    [_xaa]: input[_ACL],
    [_cc]: input[_CC],
    [_cd]: input[_CD],
    [_ce]: input[_CE],
    [_cl]: input[_CL],
    [_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
    [_cm]: input[_CMD],
    [_xasca]: input[_CA],
    [_xacc]: input[_CCRC],
    [_xacc_]: input[_CCRCC],
    [_xacc__]: input[_CCRCNVME],
    [_xacs]: input[_CSHA],
    [_xacs_]: input[_CSHAh],
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => dateToUtcString(input[_E]).toString()],
    [_im]: input[_IM],
    [_inm]: input[_INM],
    [_xagfc]: input[_GFC],
    [_xagr]: input[_GR],
    [_xagra]: input[_GRACP],
    [_xagwa]: input[_GWACP],
    [_xawob]: [() => isSerializableHeaderValue(input[_WOB]), () => input[_WOB].toString()],
    [_xasse]: input[_SSE],
    [_xasc]: input[_SC],
    [_xawrl]: input[_WRL],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
    [_xarp]: input[_RP],
    [_xat]: input[_T],
    [_xaolm]: input[_OLM],
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => serializeDateTime(input[_OLRUD]).toString()],
    [_xaollh]: input[_OLLHS],
    [_xaebo]: input[_EBO]
  });
  b5.bp("/{Key+}");
  b5.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b5.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "PutObject"]
  });
  let body;
  let contents;
  if (input.Body !== void 0) {
    contents = input.Body;
    body = contents;
  }
  b5.m("PUT").h(headers).q(query).b(body);
  return b5.build();
};
var de_CreateSessionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_SSE]: [, output.headers[_xasse]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])]
  });
  const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
  if (data[_C] != null) {
    contents[_C] = de_SessionCredentials(data[_C], context);
  }
  return contents;
};
var de_GetObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => parseBoolean(output.headers[_xadm])],
    [_AR]: [, output.headers[_ar]],
    [_Exp]: [, output.headers[_xae]],
    [_Re]: [, output.headers[_xar]],
    [_LM]: [() => void 0 !== output.headers[_lm], () => expectNonNull(parseRfc7231DateTime(output.headers[_lm]))],
    [_CLo]: [() => void 0 !== output.headers[_cl_], () => strictParseLong(output.headers[_cl_])],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CCRCNVME]: [, output.headers[_xacc__]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_CT]: [, output.headers[_xact]],
    [_MM]: [() => void 0 !== output.headers[_xamm], () => strictParseInt32(output.headers[_xamm])],
    [_VI]: [, output.headers[_xavi]],
    [_CC]: [, output.headers[_cc]],
    [_CD]: [, output.headers[_cd]],
    [_CE]: [, output.headers[_ce]],
    [_CL]: [, output.headers[_cl]],
    [_CR]: [, output.headers[_cr]],
    [_CTo]: [, output.headers[_ct]],
    [_E]: [() => void 0 !== output.headers[_e], () => expectNonNull(parseRfc7231DateTime(output.headers[_e]))],
    [_ES]: [, output.headers[_ex]],
    [_WRL]: [, output.headers[_xawrl]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_SC]: [, output.headers[_xasc]],
    [_RC]: [, output.headers[_xarc]],
    [_RS]: [, output.headers[_xars]],
    [_PC]: [() => void 0 !== output.headers[_xampc], () => strictParseInt32(output.headers[_xampc])],
    [_TC]: [() => void 0 !== output.headers[_xatc], () => strictParseInt32(output.headers[_xatc])],
    [_OLM]: [, output.headers[_xaolm]],
    [_OLRUD]: [
      () => void 0 !== output.headers[_xaolrud],
      () => expectNonNull(parseRfc3339DateTimeWithOffset(output.headers[_xaolrud]))
    ],
    [_OLLHS]: [, output.headers[_xaollh]],
    Metadata: [
      ,
      Object.keys(output.headers).filter((header) => header.startsWith("x-amz-meta-")).reduce((acc, header) => {
        acc[header.substring(11)] = output.headers[header];
        return acc;
      }, {})
    ]
  });
  const data = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  return contents;
};
var de_PutObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_Exp]: [, output.headers[_xae]],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CCRCNVME]: [, output.headers[_xacc__]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_CT]: [, output.headers[_xact]],
    [_SSE]: [, output.headers[_xasse]],
    [_VI]: [, output.headers[_xavi]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_Si]: [() => void 0 !== output.headers[_xaos], () => strictParseLong(output.headers[_xaos])],
    [_RC]: [, output.headers[_xarc]]
  });
  await collectBody(output.body, context);
  return contents;
};
var de_CommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseXmlErrorBody(output.body, context)
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await de_NoSuchUploadRes(parsedOutput, context);
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await de_InvalidObjectStateRes(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    case "EncryptionTypeMismatch":
    case "com.amazonaws.s3#EncryptionTypeMismatch":
      throw await de_EncryptionTypeMismatchRes(parsedOutput, context);
    case "InvalidRequest":
    case "com.amazonaws.s3#InvalidRequest":
      throw await de_InvalidRequestRes(parsedOutput, context);
    case "InvalidWriteOffset":
    case "com.amazonaws.s3#InvalidWriteOffset":
      throw await de_InvalidWriteOffsetRes(parsedOutput, context);
    case "TooManyParts":
    case "com.amazonaws.s3#TooManyParts":
      throw await de_TooManyPartsRes(parsedOutput, context);
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
};
var throwDefaultError2 = withBaseException(S3ServiceException);
var de_BucketAlreadyExistsRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_BucketAlreadyOwnedByYouRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_EncryptionTypeMismatchRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new EncryptionTypeMismatch({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidObjectStateRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  if (data[_AT] != null) {
    contents[_AT] = expectString(data[_AT]);
  }
  if (data[_SC] != null) {
    contents[_SC] = expectString(data[_SC]);
  }
  const exception = new InvalidObjectState({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidRequestRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new InvalidRequest({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidWriteOffsetRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new InvalidWriteOffset({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchBucketRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchKeyRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchKey({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NoSuchUploadRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchUpload({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_NotFoundRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NotFound({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectAlreadyInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectAlreadyInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_ObjectNotInActiveTierErrorRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectNotInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_TooManyPartsRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new TooManyParts({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
};
var de_SessionCredentials = (output, context) => {
  const contents = {};
  if (output[_AKI] != null) {
    contents[_AKI] = expectString(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = expectString(output[_SAK]);
  }
  if (output[_ST] != null) {
    contents[_ST] = expectString(output[_ST]);
  }
  if (output[_Exp] != null) {
    contents[_Exp] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_Exp]));
  }
  return contents;
};
var deserializeMetadata2 = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});
var _ACL = "ACL";
var _AKI = "AccessKeyId";
var _AR = "AcceptRanges";
var _AT = "AccessTier";
var _BKE = "BucketKeyEnabled";
var _C = "Credentials";
var _CA = "ChecksumAlgorithm";
var _CC = "CacheControl";
var _CCRC = "ChecksumCRC32";
var _CCRCC = "ChecksumCRC32C";
var _CCRCNVME = "ChecksumCRC64NVME";
var _CD = "ContentDisposition";
var _CE = "ContentEncoding";
var _CL = "ContentLanguage";
var _CLo = "ContentLength";
var _CM = "ChecksumMode";
var _CMD = "ContentMD5";
var _CR = "ContentRange";
var _CSHA = "ChecksumSHA1";
var _CSHAh = "ChecksumSHA256";
var _CT = "ChecksumType";
var _CTo = "ContentType";
var _DM = "DeleteMarker";
var _E = "Expires";
var _EBO = "ExpectedBucketOwner";
var _ES = "ExpiresString";
var _ETa = "ETag";
var _Exp = "Expiration";
var _GFC = "GrantFullControl";
var _GR = "GrantRead";
var _GRACP = "GrantReadACP";
var _GWACP = "GrantWriteACP";
var _IM = "IfMatch";
var _IMSf = "IfModifiedSince";
var _INM = "IfNoneMatch";
var _IUS = "IfUnmodifiedSince";
var _LM = "LastModified";
var _MM = "MissingMeta";
var _OLLHS = "ObjectLockLegalHoldStatus";
var _OLM = "ObjectLockMode";
var _OLRUD = "ObjectLockRetainUntilDate";
var _PC = "PartsCount";
var _PN = "PartNumber";
var _R = "Range";
var _RC = "RequestCharged";
var _RCC = "ResponseCacheControl";
var _RCD = "ResponseContentDisposition";
var _RCE = "ResponseContentEncoding";
var _RCL = "ResponseContentLanguage";
var _RCT = "ResponseContentType";
var _RE = "ResponseExpires";
var _RP = "RequestPayer";
var _RS = "ReplicationStatus";
var _Re = "Restore";
var _SAK = "SecretAccessKey";
var _SC = "StorageClass";
var _SM = "SessionMode";
var _SSE = "ServerSideEncryption";
var _SSECA = "SSECustomerAlgorithm";
var _SSECK = "SSECustomerKey";
var _SSECKMD = "SSECustomerKeyMD5";
var _SSEKMSEC = "SSEKMSEncryptionContext";
var _SSEKMSKI = "SSEKMSKeyId";
var _ST = "SessionToken";
var _Si = "Size";
var _T = "Tagging";
var _TC = "TagCount";
var _VI = "VersionId";
var _WOB = "WriteOffsetBytes";
var _WRL = "WebsiteRedirectLocation";
var _ar = "accept-ranges";
var _cc = "cache-control";
var _cd = "content-disposition";
var _ce = "content-encoding";
var _cl = "content-language";
var _cl_ = "content-length";
var _cm = "content-md5";
var _cr = "content-range";
var _ct = "content-type";
var _e = "expires";
var _eta = "etag";
var _ex = "expiresstring";
var _im = "if-match";
var _ims = "if-modified-since";
var _inm = "if-none-match";
var _ius = "if-unmodified-since";
var _lm = "last-modified";
var _pN = "partNumber";
var _ra = "range";
var _rcc = "response-cache-control";
var _rcd = "response-content-disposition";
var _rce = "response-content-encoding";
var _rcl = "response-content-language";
var _rct = "response-content-type";
var _re = "response-expires";
var _s = "session";
var _vI = "versionId";
var _xaa = "x-amz-acl";
var _xacc = "x-amz-checksum-crc32";
var _xacc_ = "x-amz-checksum-crc32c";
var _xacc__ = "x-amz-checksum-crc64nvme";
var _xacm = "x-amz-checksum-mode";
var _xacs = "x-amz-checksum-sha1";
var _xacs_ = "x-amz-checksum-sha256";
var _xacsm = "x-amz-create-session-mode";
var _xact = "x-amz-checksum-type";
var _xadm = "x-amz-delete-marker";
var _xae = "x-amz-expiration";
var _xaebo = "x-amz-expected-bucket-owner";
var _xagfc = "x-amz-grant-full-control";
var _xagr = "x-amz-grant-read";
var _xagra = "x-amz-grant-read-acp";
var _xagwa = "x-amz-grant-write-acp";
var _xamm = "x-amz-missing-meta";
var _xampc = "x-amz-mp-parts-count";
var _xaollh = "x-amz-object-lock-legal-hold";
var _xaolm = "x-amz-object-lock-mode";
var _xaolrud = "x-amz-object-lock-retain-until-date";
var _xaos = "x-amz-object-size";
var _xar = "x-amz-restore";
var _xarc = "x-amz-request-charged";
var _xarp = "x-amz-request-payer";
var _xars = "x-amz-replication-status";
var _xasc = "x-amz-storage-class";
var _xasca = "x-amz-sdk-checksum-algorithm";
var _xasse = "x-amz-server-side-encryption";
var _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
var _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
var _xassec = "x-amz-server-side-encryption-context";
var _xasseca = "x-amz-server-side-encryption-customer-algorithm";
var _xasseck = "x-amz-server-side-encryption-customer-key";
var _xasseckm = "x-amz-server-side-encryption-customer-key-md5";
var _xat = "x-amz-tagging";
var _xatc = "x-amz-tagging-count";
var _xavi = "x-amz-version-id";
var _xawob = "x-amz-write-offset-bytes";
var _xawrl = "x-amz-website-redirect-location";
var _xi = "x-id";

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
var CreateSessionCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" }
}).m(function(Command2, cs2, config, o5) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config)
  ];
}).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(CreateSessionRequestFilterSensitiveLog, CreateSessionOutputFilterSensitiveLog).ser(se_CreateSessionCommand).de(de_CreateSessionCommand).build() {
};

// node_modules/@aws-sdk/client-s3/package.json
var package_default = {
  name: "@aws-sdk/client-s3",
  description: "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native",
  version: "3.812.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-s3",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo s3",
    test: "yarn g:vitest run",
    "test:browser": "node ./test/browser-build/esbuild && yarn g:vitest run -c vitest.config.browser.ts",
    "test:browser:watch": "node ./test/browser-build/esbuild && yarn g:vitest watch -c vitest.config.browser.ts",
    "test:e2e": "yarn g:vitest run -c vitest.config.e2e.ts && yarn test:browser",
    "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.ts",
    "test:integration": "yarn g:vitest run -c vitest.config.integ.ts",
    "test:integration:watch": "yarn g:vitest watch -c vitest.config.integ.ts",
    "test:watch": "yarn g:vitest watch"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha1-browser": "5.2.0",
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.812.0",
    "@aws-sdk/credential-provider-node": "3.812.0",
    "@aws-sdk/middleware-bucket-endpoint": "3.808.0",
    "@aws-sdk/middleware-expect-continue": "3.804.0",
    "@aws-sdk/middleware-flexible-checksums": "3.812.0",
    "@aws-sdk/middleware-host-header": "3.804.0",
    "@aws-sdk/middleware-location-constraint": "3.804.0",
    "@aws-sdk/middleware-logger": "3.804.0",
    "@aws-sdk/middleware-recursion-detection": "3.804.0",
    "@aws-sdk/middleware-sdk-s3": "3.812.0",
    "@aws-sdk/middleware-ssec": "3.804.0",
    "@aws-sdk/middleware-user-agent": "3.812.0",
    "@aws-sdk/region-config-resolver": "3.808.0",
    "@aws-sdk/signature-v4-multi-region": "3.812.0",
    "@aws-sdk/types": "3.804.0",
    "@aws-sdk/util-endpoints": "3.808.0",
    "@aws-sdk/util-user-agent-browser": "3.804.0",
    "@aws-sdk/util-user-agent-node": "3.812.0",
    "@aws-sdk/xml-builder": "3.804.0",
    "@smithy/config-resolver": "^4.1.2",
    "@smithy/core": "^3.3.3",
    "@smithy/eventstream-serde-browser": "^4.0.2",
    "@smithy/eventstream-serde-config-resolver": "^4.1.0",
    "@smithy/eventstream-serde-node": "^4.0.2",
    "@smithy/fetch-http-handler": "^5.0.2",
    "@smithy/hash-blob-browser": "^4.0.2",
    "@smithy/hash-node": "^4.0.2",
    "@smithy/hash-stream-node": "^4.0.2",
    "@smithy/invalid-dependency": "^4.0.2",
    "@smithy/md5-js": "^4.0.2",
    "@smithy/middleware-content-length": "^4.0.2",
    "@smithy/middleware-endpoint": "^4.1.6",
    "@smithy/middleware-retry": "^4.1.7",
    "@smithy/middleware-serde": "^4.0.5",
    "@smithy/middleware-stack": "^4.0.2",
    "@smithy/node-config-provider": "^4.1.1",
    "@smithy/node-http-handler": "^4.0.4",
    "@smithy/protocol-http": "^5.1.0",
    "@smithy/smithy-client": "^4.2.6",
    "@smithy/types": "^4.2.0",
    "@smithy/url-parser": "^4.0.2",
    "@smithy/util-base64": "^4.0.0",
    "@smithy/util-body-length-browser": "^4.0.0",
    "@smithy/util-body-length-node": "^4.0.0",
    "@smithy/util-defaults-mode-browser": "^4.0.14",
    "@smithy/util-defaults-mode-node": "^4.0.14",
    "@smithy/util-endpoints": "^3.0.4",
    "@smithy/util-middleware": "^4.0.2",
    "@smithy/util-retry": "^4.0.3",
    "@smithy/util-stream": "^4.2.0",
    "@smithy/util-utf8": "^4.0.0",
    "@smithy/util-waiter": "^4.0.3",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@aws-sdk/signature-v4-crt": "3.812.0",
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-s3"
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es20();

// node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
init_dist_es38();
init_dist_es16();
init_dist_es30();

// node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js
init_dist_es16();
var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
var remoteProvider = async (init) => {
  const { ENV_CMDS_FULL_URI: ENV_CMDS_FULL_URI2, ENV_CMDS_RELATIVE_URI: ENV_CMDS_RELATIVE_URI2, fromContainerMetadata: fromContainerMetadata2, fromInstanceMetadata: fromInstanceMetadata2 } = await Promise.resolve().then(() => (init_dist_es39(), dist_es_exports2));
  if (process.env[ENV_CMDS_RELATIVE_URI2] || process.env[ENV_CMDS_FULL_URI2]) {
    init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
    const { fromHttp: fromHttp2 } = await Promise.resolve().then(() => (init_dist_es40(), dist_es_exports3));
    return chain(fromHttp2(init), fromContainerMetadata2(init));
  }
  if (process.env[ENV_IMDS_DISABLED] && process.env[ENV_IMDS_DISABLED] !== "false") {
    return async () => {
      throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
    };
  }
  init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
  return fromInstanceMetadata2(init);
};

// node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
var multipleCredentialSourceWarningEmitted = false;
var defaultProvider = (init = {}) => memoize(chain(async () => {
  const profile = init.profile ?? process.env[ENV_PROFILE];
  if (profile) {
    const envStaticCredentialsAreSet = process.env[ENV_KEY] && process.env[ENV_SECRET];
    if (envStaticCredentialsAreSet) {
      if (!multipleCredentialSourceWarningEmitted) {
        const warnFn = init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger" ? init.logger.warn : console.warn;
        warnFn(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`);
        multipleCredentialSourceWarningEmitted = true;
      }
    }
    throw new CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
      logger: init.logger,
      tryNextLink: true
    });
  }
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
  return fromEnv2(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
  const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
  if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
    throw new CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: init.logger });
  }
  const { fromSSO: fromSSO2 } = await Promise.resolve().then(() => (init_dist_es48(), dist_es_exports4));
  return fromSSO2(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
  const { fromIni: fromIni2 } = await Promise.resolve().then(() => (init_dist_es51(), dist_es_exports7));
  return fromIni2(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
  const { fromProcess: fromProcess2 } = await Promise.resolve().then(() => (init_dist_es49(), dist_es_exports5));
  return fromProcess2(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
  const { fromTokenFile: fromTokenFile2 } = await Promise.resolve().then(() => (init_dist_es50(), dist_es_exports6));
  return fromTokenFile2(init)();
}, async () => {
  init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
  return (await remoteProvider(init))();
}, async () => {
  throw new CredentialsProviderError("Could not load credentials from any providers", {
    tryNextLink: false,
    logger: init.logger
  });
}), credentialsTreatedAsExpired, credentialsWillNeedRefresh);
var credentialsWillNeedRefresh = (credentials) => credentials?.expiration !== void 0;
var credentialsTreatedAsExpired = (credentials) => credentials?.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5;

// node_modules/@aws-sdk/middleware-bucket-endpoint/dist-es/NodeDisableMultiregionAccessPointConfigOptions.js
init_dist_es24();

// node_modules/@aws-sdk/middleware-bucket-endpoint/dist-es/NodeUseArnRegionConfigOptions.js
init_dist_es24();
var NODE_USE_ARN_REGION_ENV_NAME = "AWS_S3_USE_ARN_REGION";
var NODE_USE_ARN_REGION_INI_NAME = "s3_use_arn_region";
var NODE_USE_ARN_REGION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => booleanSelector(env2, NODE_USE_ARN_REGION_ENV_NAME, SelectorType2.ENV),
  configFileSelector: (profile) => booleanSelector(profile, NODE_USE_ARN_REGION_INI_NAME, SelectorType2.CONFIG),
  default: false
};

// node_modules/@aws-sdk/middleware-bucket-endpoint/dist-es/bucketEndpointMiddleware.js
init_dist_es2();

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es41();
init_dist_es28();

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
init_dist_es13();

// node_modules/@smithy/eventstream-codec/dist-es/Int64.js
init_dist_es13();
var Int642 = class _Int64 {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i5 = 7, remaining = Math.abs(Math.round(number)); i5 > -1 && remaining > 0; i5--, remaining /= 256) {
      bytes[i5] = remaining;
    }
    if (number < 0) {
      negate2(bytes);
    }
    return new _Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate2(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate2(bytes) {
  for (let i5 = 0; i5 < 8; i5++) {
    bytes[i5] ^= 255;
  }
  for (let i5 = 7; i5 > -1; i5--) {
    bytes[i5]++;
    if (bytes[i5] !== 0)
      break;
  }
}

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller = class {
  constructor(toUtf82, fromUtf84) {
    this.toUtf8 = toUtf82;
    this.fromUtf8 = fromUtf84;
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = this.fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = this.fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int642.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN2.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
  parse(headers) {
    const out = {};
    let position = 0;
    while (position < headers.byteLength) {
      const nameLength = headers.getUint8(position++);
      const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name] = {
            type: LONG_TAG,
            value: new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          const binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          const stringLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name] = {
            type: UUID_TAG,
            value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
          };
          break;
        default:
          throw new Error(`Unrecognized header type tag`);
      }
    }
    return out;
  }
};
var HEADER_VALUE_TYPE2;
(function(HEADER_VALUE_TYPE3) {
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE2 || (HEADER_VALUE_TYPE2 = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN2 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

// node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
var PRELUDE_MEMBER_LENGTH = 4;
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
var CHECKSUM_LENGTH = 4;
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
  if (byteLength < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  const view = new DataView(buffer, byteOffset, byteLength);
  const messageLength = view.getUint32(0, false);
  if (byteLength !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
  const checksummer = new Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digest()) {
    throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
  if (expectedMessageChecksum !== checksummer.digest()) {
    throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
  }
  return {
    headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
    body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
  };
}

// node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
var EventStreamCodec = class {
  constructor(toUtf82, fromUtf84) {
    this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf84);
    this.messageBuffer = [];
    this.isEndOfStream = false;
  }
  feed(message) {
    this.messageBuffer.push(this.decode(message));
  }
  endOfStream() {
    this.isEndOfStream = true;
  }
  getMessage() {
    const message = this.messageBuffer.pop();
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessage() {
        return message;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  getAvailableMessages() {
    const messages = this.messageBuffer;
    this.messageBuffer = [];
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessages() {
        return messages;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  encode({ headers: rawHeaders, body }) {
    const headers = this.headerMarshaller.format(rawHeaders);
    const length = headers.byteLength + body.byteLength + 16;
    const out = new Uint8Array(length);
    const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    const checksum = new Crc32();
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);
    view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
    return out;
  }
  decode(message) {
    const { headers, body } = splitMessage(message);
    return { headers: this.headerMarshaller.parse(headers), body };
  }
  formatHeaders(rawHeaders) {
    return this.headerMarshaller.format(rawHeaders);
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const bytes of this.options.inputStream) {
      const decoded = this.options.decoder.decode(bytes);
      yield decoded;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const msg of this.options.messageStream) {
      const encoded = this.options.encoder.encode(msg);
      yield encoded;
    }
    if (this.options.includeEndFrame) {
      yield new Uint8Array(0);
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const message of this.options.messageStream) {
      const deserialized = await this.options.deserializer(message);
      if (deserialized === void 0)
        continue;
      yield deserialized;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream = class {
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const chunk of this.options.inputStream) {
      const payloadBuf = this.options.serializer(chunk);
      yield payloadBuf;
    }
  }
};

// node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
function getChunkedStream(source) {
  let currentMessageTotalLength = 0;
  let currentMessagePendingLength = 0;
  let currentMessage = null;
  let messageLengthBuffer = null;
  const allocateMessage = (size) => {
    if (typeof size !== "number") {
      throw new Error("Attempted to allocate an event message where size was not a number: " + size);
    }
    currentMessageTotalLength = size;
    currentMessagePendingLength = 4;
    currentMessage = new Uint8Array(size);
    const currentMessageView = new DataView(currentMessage.buffer);
    currentMessageView.setUint32(0, size, false);
  };
  const iterator = async function* () {
    const sourceIterator = source[Symbol.asyncIterator]();
    while (true) {
      const { value, done } = await sourceIterator.next();
      if (done) {
        if (!currentMessageTotalLength) {
          return;
        } else if (currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
        } else {
          throw new Error("Truncated event message received.");
        }
        return;
      }
      const chunkLength = value.length;
      let currentOffset = 0;
      while (currentOffset < chunkLength) {
        if (!currentMessage) {
          const bytesRemaining = chunkLength - currentOffset;
          if (!messageLengthBuffer) {
            messageLengthBuffer = new Uint8Array(4);
          }
          const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
          messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
          currentMessagePendingLength += numBytesForTotal;
          currentOffset += numBytesForTotal;
          if (currentMessagePendingLength < 4) {
            break;
          }
          allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
          messageLengthBuffer = null;
        }
        const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
        currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
        currentMessagePendingLength += numBytesToWrite;
        currentOffset += numBytesToWrite;
        if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
          currentMessage = null;
          currentMessageTotalLength = 0;
          currentMessagePendingLength = 0;
        }
      }
    }
  };
  return {
    [Symbol.asyncIterator]: iterator
  };
}

// node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
function getMessageUnmarshaller(deserializer, toUtf82) {
  return async function(message) {
    const { value: messageType } = message.headers[":message-type"];
    if (messageType === "error") {
      const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
      unmodeledError.name = message.headers[":error-code"].value;
      throw unmodeledError;
    } else if (messageType === "exception") {
      const code = message.headers[":exception-type"].value;
      const exception = { [code]: message };
      const deserializedException = await deserializer(exception);
      if (deserializedException.$unknown) {
        const error = new Error(toUtf82(message.body));
        error.name = code;
        throw error;
      }
      throw deserializedException[code];
    } else if (messageType === "event") {
      const event = {
        [message.headers[":event-type"].value]: message
      };
      const deserialized = await deserializer(event);
      if (deserialized.$unknown)
        return;
      return deserialized;
    } else {
      throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
    }
  };
}

// node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller = class {
  constructor({ utf8Encoder, utf8Decoder }) {
    this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
    this.utfEncoder = utf8Encoder;
  }
  deserialize(body, deserializer) {
    const inputStream = getChunkedStream(body);
    return new SmithyMessageDecoderStream({
      messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
      deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
    });
  }
  serialize(inputStream, serializer) {
    return new MessageEncoderStream({
      messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
      encoder: this.eventStreamCodec,
      includeEndFrame: true
    });
  }
};

// node_modules/@smithy/eventstream-serde-node/dist-es/EventStreamMarshaller.js
import { Readable as Readable6 } from "stream";

// node_modules/@smithy/eventstream-serde-node/dist-es/utils.js
async function* readabletoIterable(readStream) {
  let streamEnded = false;
  let generationEnded = false;
  const records = new Array();
  readStream.on("error", (err) => {
    if (!streamEnded) {
      streamEnded = true;
    }
    if (err) {
      throw err;
    }
  });
  readStream.on("data", (data) => {
    records.push(data);
  });
  readStream.on("end", () => {
    streamEnded = true;
  });
  while (!generationEnded) {
    const value = await new Promise((resolve) => setTimeout(() => resolve(records.shift()), 0));
    if (value) {
      yield value;
    }
    generationEnded = streamEnded && records.length === 0;
  }
}

// node_modules/@smithy/eventstream-serde-node/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller2 = class {
  constructor({ utf8Encoder, utf8Decoder }) {
    this.universalMarshaller = new EventStreamMarshaller({
      utf8Decoder,
      utf8Encoder
    });
  }
  deserialize(body, deserializer) {
    const bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : readabletoIterable(body);
    return this.universalMarshaller.deserialize(bodyIterable, deserializer);
  }
  serialize(input, serializer) {
    return Readable6.from(this.universalMarshaller.serialize(input, serializer));
  }
};

// node_modules/@smithy/eventstream-serde-node/dist-es/provider.js
var eventStreamSerdeProvider = (options) => new EventStreamMarshaller2(options);

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es42();

// node_modules/@smithy/hash-stream-node/dist-es/HashCalculator.js
init_dist_es7();
import { Writable as Writable3 } from "stream";
var HashCalculator = class extends Writable3 {
  constructor(hash, options) {
    super(options);
    this.hash = hash;
  }
  _write(chunk, encoding, callback) {
    try {
      this.hash.update(toUint8Array(chunk));
    } catch (err) {
      return callback(err);
    }
    callback();
  }
};

// node_modules/@smithy/hash-stream-node/dist-es/readableStreamHasher.js
var readableStreamHasher = (hashCtor, readableStream) => {
  if (readableStream.readableFlowing !== null) {
    throw new Error("Unable to calculate hash for flowing readable stream");
  }
  const hash = new hashCtor();
  const hashCalculator = new HashCalculator(hash);
  readableStream.pipe(hashCalculator);
  return new Promise((resolve, reject) => {
    readableStream.on("error", (err) => {
      hashCalculator.end();
      reject(err);
    });
    hashCalculator.on("error", reject);
    hashCalculator.on("finish", () => {
      hash.digest().then(resolve).catch(reject);
    });
  });
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es37();
init_dist_es31();
init_dist_es11();
init_dist_es43();
init_dist_es36();

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
init_dist_es20();
init_dist_es19();
init_dist_es33();
init_dist_es8();
init_dist_es14();
init_dist_es7();
var getRuntimeConfig7 = (config) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    getAwsChunkedEncodingStream: config?.getAwsChunkedEncodingStream ?? getAwsChunkedEncodingStream,
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultS3HttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer()
      },
      {
        schemeId: "aws.auth#sigv4a",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"),
        signer: new AwsSdkSigV4ASigner()
      }
    ],
    logger: config?.logger ?? new NoOpLogger(),
    sdkStreamMixin: config?.sdkStreamMixin ?? sdkStreamMixin2,
    serviceId: config?.serviceId ?? "S3",
    signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
    signingEscapePath: config?.signingEscapePath ?? false,
    urlParser: config?.urlParser ?? parseUrl,
    useArnRegion: config?.useArnRegion ?? false,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.js
init_dist_es19();
init_dist_es44();
init_dist_es19();
var getRuntimeConfig8 = (config) => {
  emitWarningIfUnsupportedVersion2(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig7(config);
  emitWarningIfUnsupportedVersion(process.version);
  const loaderConfig = { profile: config?.profile, logger: clientSharedValues.logger };
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    authSchemePreference: config?.authSchemePreference ?? loadConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    disableS3ExpressSessionAuth: config?.disableS3ExpressSessionAuth ?? loadConfig(NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS, loaderConfig),
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
    md5: config?.md5 ?? Hash.bind(null, "md5"),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
    requestChecksumCalculation: config?.requestChecksumCalculation ?? loadConfig(NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS, loaderConfig),
    requestHandler: NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    responseChecksumValidation: config?.responseChecksumValidation ?? loadConfig(NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS, loaderConfig),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }, config),
    sha1: config?.sha1 ?? Hash.bind(null, "sha1"),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    sigv4aSigningRegionSet: config?.sigv4aSigningRegionSet ?? loadConfig(NODE_SIGV4A_CONFIG_OPTIONS, loaderConfig),
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? readableStreamHasher,
    useArnRegion: config?.useArnRegion ?? loadConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS, loaderConfig),
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    userAgentAppId: config?.userAgentAppId ?? loadConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
init_dist_es45();
init_dist_es2();
init_dist_es19();

// node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration4 = (runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
};
var resolveHttpAuthRuntimeConfig4 = (config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
};

// node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions4 = (runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration4(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig4(extensionConfiguration));
};

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
var S3Client = class extends Client {
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig8(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveFlexibleChecksumsConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveRegionConfig(_config_4);
    const _config_6 = resolveHostHeaderConfig(_config_5);
    const _config_7 = resolveEndpointConfig(_config_6);
    const _config_8 = resolveEventStreamSerdeConfig(_config_7);
    const _config_9 = resolveHttpAuthSchemeConfig(_config_8);
    const _config_10 = resolveS3Config(_config_9, { session: [() => this, CreateSessionCommand] });
    const _config_11 = resolveRuntimeExtensions4(_config_10, configuration?.extensions || []);
    this.config = _config_11;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultS3HttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
        "aws.auth#sigv4a": config.credentials
      })
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
    this.middlewareStack.use(getRegionRedirectMiddlewarePlugin(this.config));
    this.middlewareStack.use(getS3ExpressPlugin(this.config));
    this.middlewareStack.use(getS3ExpressHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/middleware-ssec/dist-es/index.js
function ssecMiddleware(options) {
  return (next) => async (args) => {
    const input = { ...args.input };
    const properties = [
      {
        target: "SSECustomerKey",
        hash: "SSECustomerKeyMD5"
      },
      {
        target: "CopySourceSSECustomerKey",
        hash: "CopySourceSSECustomerKeyMD5"
      }
    ];
    for (const prop of properties) {
      const value = input[prop.target];
      if (value) {
        let valueForHash;
        if (typeof value === "string") {
          if (isValidBase64EncodedSSECustomerKey(value, options)) {
            valueForHash = options.base64Decoder(value);
          } else {
            valueForHash = options.utf8Decoder(value);
            input[prop.target] = options.base64Encoder(valueForHash);
          }
        } else {
          valueForHash = ArrayBuffer.isView(value) ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength) : new Uint8Array(value);
          input[prop.target] = options.base64Encoder(valueForHash);
        }
        const hash = new options.md5();
        hash.update(valueForHash);
        input[prop.hash] = options.base64Encoder(await hash.digest());
      }
    }
    return next({
      ...args,
      input
    });
  };
}
var ssecMiddlewareOptions = {
  name: "ssecMiddleware",
  step: "initialize",
  tags: ["SSE"],
  override: true
};
var getSsecPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.add(ssecMiddleware(config), ssecMiddlewareOptions);
  }
});
function isValidBase64EncodedSSECustomerKey(str, options) {
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  if (!base64Regex.test(str))
    return false;
  try {
    const decodedBytes = options.base64Decoder(str);
    return decodedBytes.length === 32;
  } catch {
    return false;
  }
}

// node_modules/@aws-sdk/client-s3/dist-es/commands/GetObjectCommand.js
init_dist_es34();
init_dist_es4();
init_dist_es19();
var GetObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o5) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getFlexibleChecksumsPlugin(config, {
      requestChecksumRequired: false,
      requestValidationModeMember: "ChecksumMode",
      responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1"]
    }),
    getSsecPlugin(config),
    getS3ExpiresMiddlewarePlugin(config)
  ];
}).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").f(GetObjectRequestFilterSensitiveLog, GetObjectOutputFilterSensitiveLog).ser(se_GetObjectCommand).de(de_GetObjectCommand).build() {
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectCommand.js
init_dist_es34();
init_dist_es4();
init_dist_es19();
var PutObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o5) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getFlexibleChecksumsPlugin(config, {
      requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
      requestChecksumRequired: false
    }),
    getCheckContentLengthHeaderPlugin(config),
    getThrow200ExceptionsPlugin(config),
    getSsecPlugin(config)
  ];
}).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").f(PutObjectRequestFilterSensitiveLog, PutObjectOutputFilterSensitiveLog).ser(se_PutObjectCommand).de(de_PutObjectCommand).build() {
};

// src/config/s3Config.ts
var miRegion = "us-east-2";
var bucketName = "trujillo-y-asociadospdf";
var accessKeyId = process.env.AWS_ACCESS_KEY_ID;
var secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
if (!accessKeyId || !secretAccessKey) {
  throw new Error("Las credenciales AWS no est\xE1n definidas.");
}
var s3Client = new S3Client({
  region: miRegion,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
});
var paramsS3 = {
  Bucket: bucketName,
  // ACL: 'public-read' as const ,
  Key: String,
  ContentType: String,
  Body: null
};
var createUrl = (fileName, folder) => {
  return "https://" + bucketName + ".s3." + miRegion + ".amazonaws.com/" + folder + "/" + fileName;
};

// src/models/controlFileModel.ts
var ControlFileModel = class {
  static async uploadPdf(file, archiveName, folder) {
    const params = {
      ...paramsS3,
      Key: `${folder}/${archiveName}`,
      Body: file.buffer,
      ContentType: "application/pdf"
    };
    try {
      const response = await s3Client.send(new PutObjectCommand(params));
      const url = createUrl(archiveName, folder ?? "");
      return { response, url };
    } catch (error) {
      console.error("Error uploading PDF:", error);
      throw new Error("Failed to upload PDF");
    }
  }
  static async getById(id) {
    const result = await connection.query("SELECT * FROM contract WHERE id = $1", [id]);
    return result.rows[0] || null;
  }
  static async updateSignedStatus(id, signed) {
    await connection.query("UPDATE contract SET asigned = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2", [signed, id]);
  }
};

// src/models/emailLlinkModel.ts
import brevo from "@getbrevo/brevo";
var EmailLinkModel = class {
  static async sendEmail(emails, pdfBuffer, fileName, linkFirma) {
    try {
      const apiInstance = new brevo.TransactionalEmailsApi();
      const apiKey = process.env.BREVO_EMAIL_KEY;
      if (!apiKey) throw new Error("Falta la variable de entorno BREVO_EMAIL_KEY");
      apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
      const sendSmtpEmail = new brevo.SendSmtpEmail();
      sendSmtpEmail.subject = "Notificaci\xF3n de contrato";
      sendSmtpEmail.to = emails;
      sendSmtpEmail.htmlContent = `
        <h1>Cordial saludo, ${emails[0].name}</h1>
        <p>Muy buen dia, en el presente correo se envia el documento de autorizacion con el cual a partir del momento nuestra compa\xF1ia se encargara de su todo su tramite </p>
        <p>Adjuntamos el Link de la firma</p>
        <a href="${linkFirma}">${linkFirma}</a>
        <h3>Si tiene alguna duda, no dude en contactarnos.</h3>
        <p>Atentamente,<br>Grupo Trujillo y Asociados</p>
      `;
      sendSmtpEmail.sender = {
        name: "Trujillo y Asociados",
        email: "Asesorias@grupotrujilloyasociados.com"
      };
      const base64PDF = pdfBuffer.toString("base64");
      sendSmtpEmail.attachment = [
        {
          content: base64PDF,
          name: fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`
        }
      ];
      const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
      return result;
    } catch (error) {
      console.error("Error en EmailModel:", error);
      throw error;
    }
  }
};

// src/models/employeeModel.ts
var EmployeeModel = class {
  // Obtener todos los empleados
  static async getAllEmployees() {
    try {
      const { rows } = await connection.query("SELECT * FROM employee");
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error al obtener empleados:", error.message);
      } else {
        console.error("Error desconocido al obtener empleados.");
      }
      throw new Error("No se pudieron obtener los empleados");
    }
  }
  // Obtener un empleado por su ID
  static async getEmployeeById(id) {
    try {
      const { rows } = await connection.query("SELECT * FROM employee WHERE id = $1", [id]);
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro el empleado`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error al obtener el empleado con id ${id}:`, error.message);
        throw new AppError(
          error.message,
          "UNKNOWN_ERROR",
          500
        );
      } else {
        console.error(`Error desconocido al obtener el empleado con id ${id}`);
      }
      throw new Error(`No se pudo obtener el empleado con id ${id}`);
    }
  }
  // Crear un nuevo empleado
  static async createEmployee(name, document, phone) {
    try {
      const thereIsEmployee = await connection.query("SELECT * FROM employee WHERE document = $1", [document]);
      if (thereIsEmployee.rows.length > 0) {
        throw new AppError(
          `Este empleado ya existe`,
          "ID_FOUND",
          404
        );
      }
      const { rows } = await connection.query(
        "INSERT INTO employee (name, document, phone) VALUES ($1, $2, $3) RETURNING *",
        [name, document, phone]
      );
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(
          ` ${error.message}`,
          "UKNOWN_ERROR",
          500
        );
      } else {
        throw new AppError(
          "Ocurri\xF3 un error desconocido al actualizar el empleado",
          "UNKNOWN_ERROR",
          500
        );
      }
    }
  }
  static async updateEmployee(id, name, document, phone) {
    try {
      const query = `
        UPDATE employee
        SET name = COALESCE($1, name),
            document = COALESCE($2, document),
            phone = COALESCE($3, phone),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING *;
      `;
      const { rows } = await connection.query(query, [name, document, phone, id]);
      if (rows.length === 0) {
        throw new AppError(
          `No se encontr\xF3 ning\xFAn empleado para actualizar`,
          "ID_NOT_FOUND",
          404
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(
          `Error al actualizar el empleado: ${error.message}`,
          "UPDATE_EMPLOYEE_ERROR",
          500
        );
      } else {
        throw new AppError(
          "Ocurri\xF3 un error desconocido al actualizar el empleado",
          "UNKNOWN_ERROR",
          500
        );
      }
    }
  }
  // Eliminar un empleado
  static async deleteEmployee(id) {
    try {
      const { rowCount } = await connection.query(
        "DELETE FROM employee WHERE id = $1 RETURNING *",
        [id]
      );
      if (!rowCount || rowCount === 0) {
        throw new AppError(
          `No se encontr\xF3 ning\xFAn empleado`,
          "ID_NOT_FOUND",
          404
        );
      }
      return true;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(
          error.message,
          "DELETE_EMPLOYEE_ERROR",
          500
        );
      } else {
        throw new AppError(
          "Ocurri\xF3 un error desconocido al eliminar el empleado",
          "UNKNOWN_ERROR",
          500
        );
      }
    }
  }
  static async getByDocument(document) {
    try {
      const { rows } = await connection.query(
        `select * from employee where document = $1`,
        [document]
      );
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro un empleado con la cedula ${document}`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }
};

// src/models/infoContractModel.ts
var InfoContractModel = class {
  static async getAllInfoContracts() {
    try {
      const { rows } = await connection.query("SELECT * FROM info_contract");
      return rows;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error al obtener los contratos:", error.message);
      } else {
        console.error("Error desconocido al obtener los contratos.");
      }
      throw new Error("No se pudieron obtener los contratos");
    }
  }
  static async getInfoContractById(id) {
    try {
      const { rows } = await connection.query("SELECT * FROM info_contract WHERE id = $1", [id]);
      if (rows.length === 0) {
        throw new AppError(
          `No se encontro nigun registro de este recurso`,
          "ID_NOT_REGISTRED",
          400
        );
      }
      return rows[0] || null;
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        console.error(`Error desconocido al obtener el contrato con id ${id}`);
      }
      throw new Error(`No se pudo obtener el contrato con id ${id}`);
    }
  }
  static async createInfoContract(infoContract) {
    const {
      id_type_pay,
      id_type_contract,
      num_radicado,
      total_payment,
      porcentage_honorario,
      id_customer,
      id_accused
    } = infoContract;
    try {
      const check = await connection.query(
        "SELECT 1 FROM info_contract WHERE num_radicado = $1",
        [num_radicado]
      );
      if ((check.rowCount ?? 0) > 0) {
        throw new AppError(
          `el Numero de radicado ${num_radicado} ya esta registrado`,
          "DUPLICATE_RADICADO",
          400
        );
      }
      const { rows } = await connection.query(
        `INSERT INTO info_contract (id_customer, id_accused, id_type_pay, id_type_contract, num_radicado, total_payment, porcentage_honorario)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [id_customer, id_accused, id_type_pay, id_type_contract, num_radicado, total_payment, porcentage_honorario]
      );
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      } else {
        throw new Error(error.message);
      }
    }
  }
};

// src/services/PdfSignerService.ts
import { PDFDocument } from "pdf-lib";
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}
var PdfSignerService = class {
  static async signPdf({ key, signatureBase64 }) {
    const getCmd = new GetObjectCommand({
      Bucket: bucketName,
      Key: key
    });
    const pdfStream = await s3Client.send(getCmd);
    const pdfBuffer = await streamToBuffer(pdfStream.Body);
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const signatureImage = await pdfDoc.embedPng(signatureBase64);
    const pngDims = signatureImage.scale(0.3);
    const pages = pdfDoc.getPages();
    if (pages.length > 2) {
      pages[2].drawImage(signatureImage, {
        x: 10,
        y: 170,
        width: 150,
        height: 50
      });
    }
    if (pages.length > 3) {
      pages[3].drawImage(signatureImage, {
        x: 10,
        y: 130,
        width: 150,
        height: 50
      });
    }
    const signedPdf = await pdfDoc.save();
    const putCmd = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: signedPdf,
      ContentType: "application/pdf"
    });
    await s3Client.send(putCmd);
    return { ok: true };
  }
};

// src/controllers/controlFileController.ts
var ControlFileController = class {
  static async uploadFile(req, res) {
    try {
      const file = req.file;
      if (!file) {
        throw new AppError(
          "Error del Navegador, El archivo no se cargo correctamente",
          "NO_CHARGE _RESOURCE",
          400
        );
      }
      const {
        folderSave,
        data,
        customer,
        accused,
        info_contract,
        contract
      } = req.body;
      let idAccused = null;
      const dataParsed = JSON.parse(data);
      const folder = JSON.parse(folderSave);
      const customerParsed = JSON.parse(customer);
      const infoConParse = JSON.parse(info_contract);
      const contractParse = JSON.parse(contract);
      const accusedParsed = JSON.parse(accused);
      try {
        await ContractModel.ifExist(dataParsed.num_contract);
      } catch (error) {
        const status = error instanceof AppError ? error.statusCode : 500;
        const code = error instanceof AppError ? error.code : "INTERNAL_ERROR";
        const message = error instanceof AppError ? error.message : "Error interno al verificar contrato";
        res.status(status).json({
          error: {
            message,
            code,
            statusCode: status
          }
        });
        return;
      }
      const idCustomer = await CustomerModel.findByCcAndCreate(customerParsed);
      if (accusedParsed.name != null) {
        idAccused = await AccusedModel.findByCcAndCreate(accusedParsed);
      }
      const employee = await EmployeeModel.getByDocument(dataParsed.executive);
      const infoContractFinal = {
        ...infoConParse,
        id_customer: idCustomer,
        id_accused: idAccused
      };
      const resContract = await InfoContractModel.createInfoContract(infoContractFinal);
      console.log(resContract);
      if (!resContract) {
        res.status(500).json({ message: "No se pudo crear el contrato (resContract es null)" });
        return;
      }
      const { url } = await ControlFileModel.uploadPdf(file, dataParsed.fileName, folder);
      const createContract = {
        id_info_contract: resContract.id,
        id_employee: employee.id,
        ...contractParse,
        path: url
      };
      const contractCreated = await ContractModel.create(createContract);
      const linkToSigned = `http://localhost:5173/contratos/signed/${contractCreated.id || "error"}`;
      const email = [{
        link: url,
        name: dataParsed.client_name ? dataParsed.client_name : dataParsed.demandados[0].name,
        email: dataParsed.email
      }];
      const { response, body } = await EmailLinkModel.sendEmail(
        email,
        file.buffer,
        file.originalname,
        linkToSigned
      );
      res.json({
        success: true,
        email: "Email enviado correctamente",
        file: "archivo generado correctamente",
        status: response.statusCode,
        body,
        url,
        contractCreated,
        linkToSigned
      });
    } catch (error) {
      console.error(error);
      if (error instanceof AppError) {
        res.status(400).json({
          error: {
            message: error.message || "Error En el servidor",
            statusCode: error.statusCode,
            code: error.code || 500
          }
        });
        return;
      }
      res.status(400).json({
        error: {
          code: error.code || 500,
          message: error.message || "Error En el servidor"
        }
      });
    }
  }
  static async upLoadFileWithoutEmail(req, res) {
    try {
      const file = req.file;
      if (!file) {
        res.status(400).json({ message: "No file uploaded" });
        return;
      }
      const {
        folderSave,
        data,
        customer,
        accused,
        info_contract,
        contract
      } = req.body;
      let idAccused = null;
      const dataParsed = JSON.parse(data);
      const folder = JSON.parse(folderSave);
      const customerParsed = JSON.parse(customer);
      const infoConParse = JSON.parse(info_contract);
      const contractParse = JSON.parse(contract);
      const accusedParsed = JSON.parse(accused);
      if (dataParsed.num_contract) {
        try {
          await ContractModel.ifExist(dataParsed.num_contract);
        } catch (error) {
          const status = error instanceof AppError ? error.statusCode : 500;
          const code = error instanceof AppError ? error.code : "INTERNAL_ERROR";
          const message = error instanceof AppError ? error.message : "Error interno al verificar contrato";
          res.status(status).json({
            error: {
              message,
              code,
              statusCode: status
            }
          });
          return;
        }
      }
      const idCustomer = await CustomerModel.findByCcAndCreate(customerParsed);
      if (accusedParsed.name != null) {
        idAccused = await AccusedModel.findByCcAndCreate(accusedParsed);
      }
      const employee = await EmployeeModel.getByDocument(dataParsed.executive);
      const infoContractFinal = {
        ...infoConParse,
        id_customer: idCustomer,
        id_accused: idAccused
      };
      const resContract = await InfoContractModel.createInfoContract(infoContractFinal);
      if (!resContract) {
        res.status(500).json({ message: "No se pudo crear el contrato (resContract es null)" });
        return;
      }
      const { url } = await ControlFileModel.uploadPdf(file, dataParsed.fileName, folder);
      const createContract = {
        id_info_contract: resContract.id,
        id_employee: employee.id,
        ...contractParse,
        path: url
      };
      const contractCreated = await ContractModel.create(createContract);
      const linkToSigned = `http://localhost:5173/contratos/signed/${contractCreated.id || "error"}`;
      res.json({
        success: true,
        file: "archivo generado correctamente",
        url,
        contractCreated,
        linkToSigned
      });
    } catch (error) {
      console.error(error);
      if (error instanceof AppError) {
        res.status(error.statusCode).json({
          error: {
            message: error.message || "Error En el servidor",
            statusCode: error.statusCode,
            code: error.code || 500
          }
        });
        return;
      }
    }
  }
  static async signContract(req, res) {
    try {
      const { id } = req.params;
      const { signature } = req.body;
      if (!signature) {
        throw new AppError(
          `Error al mandar la firma`,
          "EXISTING_RESOURCE",
          400
        );
      }
      const contract = await ContractModel.getById(id);
      if (!contract) {
        throw new AppError(
          `Contrato no encontrado`,
          "EXISTING_RESOURCE",
          400
        );
      }
      const path = contract.path;
      if (!path) {
        throw new AppError(
          `El contrato no cuenta con un archivo gaurdado, revisa la base de datos`,
          "EXISTING_RESOURCE",
          400
        );
      }
      const key = path.split(".com/")[1];
      if (!key) {
        throw new AppError(
          `No se encontro la ubicacion del archivo`,
          "EXISTING_RESOURCE",
          400
        );
      }
      await PdfSignerService.signPdf({ key, signatureBase64: signature });
      await ControlFileModel.updateSignedStatus(id, true);
      res.json({ message: "Contrato firmado con \xE9xito" });
    } catch (error) {
      if (error instanceof AppError) {
        console.error("AppError:", error.message);
        res.status(error.statusCode).json({ message: error.message, code: error.code });
        return;
      }
      res.status(500).json({ message: "Error interno al firmar contrato" });
      return;
    }
  }
};

// src/middleware/uploadMemory.ts
import multer from "multer";
var storage = multer.memoryStorage();
var upload = multer({ storage });

// src/routes/controlFileRouter.ts
var controlFileRouter = Router3();
controlFileRouter.post("/upload", upload.single("file"), ControlFileController.uploadFile);
controlFileRouter.post("/upload-without-email", upload.single("file"), ControlFileController.upLoadFileWithoutEmail);
controlFileRouter.post("/send-sings/:id", ControlFileController.signContract);

// src/routes/customerRouter.ts
import { Router as Router4 } from "express";

// src/controllers/customerController.ts
var CustomerController = class {
  static async getAll(req, res) {
    const customers = await CustomerService.getAll();
    res.status(200).json(customers);
  }
  static async getByName(req, res) {
    const customer = await CustomerService.getByName(req.params.name);
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  }
  static async getByCc(req, res) {
    const customer = await CustomerService.getByCc(req.params.cc);
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  }
  static async create(req, res) {
    const customer = req.body;
    const id = await CustomerService.create(customer);
    res.status(201).json({ message: "Customer created", data: id });
  }
  //     static async updatePartialCustomer(req:Request, res:Response) {
  //             const data = req.body;
  //             data.id = parseInt(req.params.id);
  //             const affectedRows = await CustomerService.updatePartialCustomer(data);
  //             if (affectedRows === 0) {
  //                  res.status(404).json({ message: 'Customer not found' });
  //             }
  //              res.status(200).json({ message: 'Customer updated', id: data.id });
  //     }
};

// src/routes/customerRouter.ts
var customerRouter = Router4();
customerRouter.get("/", CustomerController.getAll);
customerRouter.get("/by-cc/:cc", CustomerController.getByCc);
customerRouter.get("/by-name/:name", CustomerController.getByName);
customerRouter.post("/", CustomerController.create);

// src/routes/emailLinkRoute.ts
import express from "express";
var EmailLinkRoute = express.Router();

// src/routes/employeeRouter.ts
import { Router as Router5 } from "express";

// src/services/employeeService.ts
var EmployeeService = class {
  static async getAllEmployees() {
    try {
      return await EmployeeModel.getAllEmployees();
    } catch (error) {
      console.error("Service Error in getAllEmployees:", error);
      throw error;
    }
  }
  static async getEmployeeById(id) {
    try {
      return await EmployeeModel.getEmployeeById(id);
    } catch (error) {
      console.error("Service Error in getEmployeeById:", error);
      throw error;
    }
  }
  static async createEmployee(name, document, phone) {
    try {
      return await EmployeeModel.createEmployee(name, document, phone);
    } catch (error) {
      console.error("Service Error in createEmployee:", error);
      throw error;
    }
  }
  static async updateEmployee(id, name, document, phone) {
    try {
      return await EmployeeModel.updateEmployee(id, name, document, phone);
    } catch (error) {
      throw error;
    }
  }
  static async deleteEmployee(id) {
    try {
      return await EmployeeModel.deleteEmployee(id);
    } catch (error) {
      console.error("Service Error in deleteEmployee:", error);
      throw error;
    }
  }
};

// src/controllers/employeeController.ts
var EmployeeController = class {
  static async getAllEmployees(req, res) {
    const employees = await EmployeeService.getAllEmployees();
    res.status(200).json(employees);
  }
  static async getEmployeeById(req, res) {
    const { id } = req.params;
    const employee = await EmployeeService.getEmployeeById(id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "Empleado no encontrado" });
    }
  }
  static async createEmployee(req, res) {
    try {
      const { name, document, phone } = req.body;
      const newEmployee = await EmployeeService.createEmployee(name, document, phone);
      res.status(201).json({ message: "Empleado Creado" });
    } catch (error) {
      const status = error instanceof AppError ? error.statusCode : 500;
      const message = error instanceof AppError ? error.message : error instanceof Error ? `Error al actualizar el empleado: ${error.message}` : "Error desconocido al actualizar el empleado";
      res.status(status).json({ message });
    }
  }
  static async updateEmployee(req, res) {
    const { id } = req.params;
    const { name, document, phone } = req.body;
    if (!id || !name || !document || !phone) {
      throw new AppError("Faltan datos necesarios para actualizar el empleado.", "MISSING_FIELDS", 400);
    }
    try {
      const updatedEmployee = await EmployeeService.updateEmployee(id, name, document, phone);
      if (!updatedEmployee) {
        throw new AppError(`Empleado con id ${id} no encontrado.`, "EMPLOYEE_NOT_FOUND", 404);
      }
      res.status(200).json({
        data: updatedEmployee,
        message: "Actualizaci\xF3n lograda con \xE9xito"
      });
    } catch (error) {
      const status = error instanceof AppError ? error.statusCode : 500;
      const message = error instanceof AppError ? error.message : error instanceof Error ? `Error al actualizar el empleado: ${error.message}` : "Error desconocido al actualizar el empleado";
      res.status(status).json({ message });
    }
  }
  static async deleteEmployee(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await EmployeeService.deleteEmployee(id);
      if (!isDeleted) {
        throw new AppError(`Empleado no encontrado.`, "EMPLOYEE_NOT_FOUND", 404);
      }
      res.status(200).json({ message: "Empleado eliminado correctamente" });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message, code: error.code });
      } else if (error instanceof Error) {
        res.status(500).json({ message: `Error al eliminar el empleado: ${error.message}` });
      } else {
        res.status(500).json({ message: "Error desconocido al eliminar el empleado" });
      }
    }
  }
};

// src/routes/employeeRouter.ts
var employeeRouter = Router5();
employeeRouter.get("/", EmployeeController.getAllEmployees);
employeeRouter.get("/:id", EmployeeController.getEmployeeById);
employeeRouter.post("/create", EmployeeController.createEmployee);
employeeRouter.delete("/:id", EmployeeController.deleteEmployee);
employeeRouter.put("/update/:id", EmployeeController.updateEmployee);

// src/routes/infoContractRouter.ts
import { Router as Router6 } from "express";

// src/services/infoContractService.ts
var InfoContractService = class {
  static async getAllInfoContracts() {
    try {
      return InfoContractModel.getAllInfoContracts();
    } catch (error) {
      console.error("Service Error in getAllEmployees:", error);
      throw error;
    }
  }
  static async getInfoContractById(id) {
    try {
    } catch (error) {
      console.error("Service Error in getAllEmployees:", error);
      throw error;
    }
    return InfoContractModel.getInfoContractById(id);
  }
  static async createInfoContract(infoContract) {
    try {
      return InfoContractModel.createInfoContract(infoContract);
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.code, error.statusCode);
      } else {
        throw new Error("Error desconocido al crear info_contract");
      }
    }
  }
};

// src/controllers/infoContractController.ts
var InfoContractController = class {
  static async getAllInfoContracts(req, res) {
    const contracts = await InfoContractService.getAllInfoContracts();
    res.json(contracts);
  }
  static async getInfoContractById(req, res) {
    const { id } = req.params;
    const contract = await InfoContractService.getInfoContractById(id);
    res.json(contract);
  }
  static async createInfoContract(req, res) {
    const { InfoContract } = req.body;
    const contract = await InfoContractService.createInfoContract(InfoContract);
    res.status(201).json(contract);
  }
};

// src/routes/infoContractRouter.ts
var InfoContractRouter = Router6();
InfoContractRouter.get("/", InfoContractController.getAllInfoContracts);
InfoContractRouter.get("/:id", InfoContractController.getInfoContractById);
InfoContractRouter.post("/", InfoContractController.createInfoContract);

// src/routes/userRouter.ts
import { Router as Router7 } from "express";

// src/config/jwt.ts
import jwt from "jsonwebtoken";
var SECRET_KEY = process.env.SECRET_KEY_JWT || "mi_clave_secreta";
function createAccesToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_KEY,
      { expiresIn: "1d" },
      (err, token) => {
        if (err || !token) {
          reject(err || new Error("Token no generado"));
        } else {
          resolve(token);
        }
      }
    );
  });
}

// src/models/userModel.ts
import bcrypt from "bcrypt";
var UserModel = class {
  static async create(user) {
    try {
      const { rows } = await connection.query(
        `
                select * from users where email = $1 `,
        [user.email]
      );
      if (rows.length != 0) {
        throw new AppError(
          "El email ya existe",
          "DUPLICATE_KEY",
          400
        );
      }
      const hashedPassword = await bcrypt.hash(
        user.password_hash,
        10
      );
      const userCreeated = await connection.query(
        `INSERT INTO users (email,password_hash,roles)
                    VALUES ($1, $2, $3)
                RETURNING *`,
        [user.email, hashedPassword, user.roles]
      );
      return userCreeated.rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        throw new AppError(error.message);
      }
    }
  }
  static async login(user) {
    try {
      const { rows } = await connection.query(
        `
                select * from users where email = $1 `,
        [user.email]
      );
      if (rows.length === 0) {
        throw new AppError(
          "El Email no existe",
          "NOT_FOUND",
          400
        );
      }
      const hashedPassword = rows[0].password_hash;
      const texPlaiPassword = user.password_hash;
      const isvalid = bcrypt.compareSync(texPlaiPassword, hashedPassword);
      if (!isvalid) {
        throw new AppError(
          "Contrase\xF1a incorrecta",
          "INCORRECT_PASSWORD",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        throw new AppError(error.message);
      }
    }
  }
  static async findByEmail(email) {
    try {
      const { rows } = await connection.query(
        `
                select * from users where email = $1 `,
        [email]
      );
      if (rows.length === 0) {
        throw new AppError(
          "El Email no existe",
          "NOT_FOUND",
          400
        );
      }
      return rows[0];
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        throw new AppError(error.message);
      }
    }
  }
};

// src/controllers/userController.ts
import jwt2 from "jsonwebtoken";
var UserController = class {
  static async create(req, res) {
    try {
      const user = req.body;
      const createdUser = await UserModel.create(user);
      res.status(200).json(
        { message: "Usuario creado", email: createdUser.email }
      );
      return;
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message, code: error.code });
        return;
      }
      res.status(500).json({ message: "Error interno al firmar contrato" });
      return;
    }
  }
  static async login(req, res) {
    try {
      const user = req.body;
      const userLogin = await UserModel.login(user);
      const { password_hash: _2, ...userToken } = userLogin;
      const token = await createAccesToken(userToken);
      res.cookie("token", token, {
        httpOnly: false,
        sameSite: "none",
        maxAge: 60 * 60 * 1e3,
        secure: true
        // 1 hora
      });
      res.status(200).json(userToken);
      return;
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({
          message: error.message,
          code: error.code,
          statusCode: error.statusCode
        });
        return;
      }
      res.status(500).json({ message: "Error interno al firmar contrato" });
      return;
    }
  }
  static async logout(req, res) {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict"
    });
    res.status(200).json({ message: "Sesi\xF3n cerrada" });
  }
  static async verifyToken(req, res) {
    try {
      const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT;
      if (!SECRET_KEY_JWT) {
        throw new Error("La variable de entorno SECRET_KEY_JWT no est\xE1 definida");
      }
      const { token } = req.cookies;
      if (!token) {
        res.status(400).json({ message: "Unautorized" });
        return;
      }
      jwt2.verify(
        token,
        SECRET_KEY_JWT,
        async (err, user) => {
          if (err) {
            res.status(400).json({ message: "Unautorized" });
            return;
          }
          const userFoud = await UserModel.findByEmail(user.email);
          if (!userFoud) {
            res.status(400).json({ message: "Unautorized" });
            return;
          }
          res.status(200).json({
            email: userFoud.email,
            roles: userFoud.roles
          });
          return;
        }
      );
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(
          error.message,
          error.code,
          error.statusCode
        );
      } else {
        throw new AppError(error.message);
      }
    }
  }
};

// src/routes/userRouter.ts
var UserRouter = Router7();
UserRouter.post("/", UserController.create);
UserRouter.post("/login", UserController.login);
UserRouter.post("/logout", UserController.logout);
UserRouter.get("/verify-token", UserController.verifyToken);

// src/app.ts
var corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
};
dotenv2.config();
var app = express2();
app.disable("x-powered-by");
app.use(express2.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/customer", customerRouter);
app.use("/accused", accusedRouter);
app.use("/employee", employeeRouter);
app.use("/infoContract", InfoContractRouter);
app.use("/contract", contractRouter);
app.use("/send-email", EmailLinkRoute);
app.use("/control-files", controlFileRouter);
app.use("/user", UserRouter);
var PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map