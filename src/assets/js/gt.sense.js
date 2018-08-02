!(function(global, factory) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = global.document
        ? factory(global, !0)
        : function(w) {
            if (!w.document)
              throw new Error("Geetest requires a window with a document");
            return factory(w);
          })
    : factory(global);
})("undefined" != typeof window ? window : this, function(window, noGlobal) {
  "use strict";
  function _Object(obj) {
    this._obj = obj;
  }
  function Config(config) {
    var self = this;
    new _Object(config)._each(function(key, value) {
      self[key] = value;
    });
  }
  if (void 0 === window)
    throw new Error("Geetest requires browser environment");
  var document = window.document,
    head = (window.Math, document.getElementsByTagName("head")[0]);
  (_Object.prototype = {
    _each: function(process) {
      var _obj = this._obj;
      for (var k in _obj) _obj.hasOwnProperty(k) && process(k, _obj[k]);
      return this;
    }
  }),
    (Config.prototype = {
      protocol: "http://",
      static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
      sense_path: "/static/js/sense.js",
      type: "sense",
      _extend: function(obj) {
        var self = this;
        new _Object(obj)._each(function(key, value) {
          self[key] = value;
        });
      }
    });
  var isNumber = function(value) {
      return "number" == typeof value;
    },
    isString = function(value) {
      return "string" == typeof value;
    },
    isBoolean = function(value) {
      return "boolean" == typeof value;
    },
    isFunction = function(value) {
      return "function" == typeof value;
    },
    loadScript = function(url, cb) {
      var script = document.createElement("script");
      (script.charset = "UTF-8"),
        (script.async = !0),
        (script.onerror = function() {
          cb(!0);
        });
      var loaded = !1;
      (script.onload = script.onreadystatechange = function() {
        loaded ||
          (script.readyState &&
            "loaded" !== script.readyState &&
            "complete" !== script.readyState) ||
          ((loaded = !0),
          setTimeout(function() {
            cb(!1);
          }, 0));
      }),
        (script.src = url),
        head.appendChild(script);
    },
    normalizeDomain = function(domain) {
      return domain.replace(/^https?:\/\/|\/$/g, "");
    },
    normalizePath = function(path) {
      return (
        (path = path.replace(/\/+/g, "/")),
        0 !== path.indexOf("/") && (path = "/" + path),
        path
      );
    },
    normalizeQuery = function(query) {
      if (!query) return "";
      var q = "?";
      return (
        new _Object(query)._each(function(key, value) {
          (isString(value) || isNumber(value) || isBoolean(value)) &&
            (q =
              q +
              encodeURIComponent(key) +
              "=" +
              encodeURIComponent(value) +
              "&");
        }),
        "?" === q && (q = ""),
        q.replace(/&$/, "")
      );
    },
    makeURL = function(protocol, domain, path, query) {
      domain = normalizeDomain(domain);
      var url = normalizePath(path) + normalizeQuery(query);
      return domain && (url = protocol + domain + url), url;
    },
    load = function(protocol, domains, path, query, cb) {
      var tryRequest = function(at) {
        var url = makeURL(protocol, domains[at], path, query);
        loadScript(url, function(err) {
          err
            ? at >= domains.length - 1
              ? cb(!0)
              : tryRequest(at + 1)
            : cb(!1);
        });
      };
      tryRequest(0);
    },
    throwError = function(errorType, config) {
      var errors = {
        networkError: "网络错误",
        idNotExist: "参数id必填",
        cbIlegal: "callback必须是function",
        geetestNotExist: "Geetest不存在"
      };
      if ("function" != typeof config.onError)
        throw new Error(errors[errorType]);
      config.onError(errors[errorType]);
    },
    detect = function() {
      return !!window.Geetest;
    },
    initSense = function(userConfig, callback) {
      var config = new Config(userConfig);
      return (
        userConfig.https
          ? (config.protocol = "https://")
          : "http:" !== window.location.protocol &&
            "https:" !== window.location.protocol
            ? (config.protocol = "https://")
            : (config.protocol = window.location.protocol + "//"),
        userConfig && userConfig.id
          ? callback && !isFunction(callback)
            ? void throwError("cbIlegal", config)
            : detect()
              ? void (callback && callback(new window.Geetest(config)))
              : void load(
                  config.protocol,
                  config.static_servers,
                  config.sense_path,
                  { v: new Date().getTime() },
                  function(err) {
                    if (err) throwError("networkError", config);
                    else {
                      if ("undefined" == typeof window.Geetest)
                        return void throwError("geetestNotExist", config);
                      callback && callback(new window.Geetest(config));
                    }
                  }
                )
          : void throwError("idNotExist", config)
      );
    };
  return (window.initSense = initSense), initSense;
});
