SystemJS.config({
  baseURL: "/",
  devConfig: {
    "map": {
      "babel": "npm:babel-core@5.8.38",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {
          "process": "github:jspm/nodelibs-process@0.1.2"
        }
      },
      "npm:core-js@1.2.7": {
        "map": {
          "fs": "github:jspm/nodelibs-fs@0.1.2",
          "path": "github:jspm/nodelibs-path@0.1.0",
          "process": "github:jspm/nodelibs-process@0.1.2",
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "ack-aws-s3-playground/": "src/"
  },
  map: {
    "aws/aws-sdk-js": "github:aws/aws-sdk-js@2.4.11",
    "crypto-js": "npm:crypto-js@3.1.6",
    "node-s3-encryption-client": "npm:node-s3-encryption-client@0.0.2",
    "aws-sdk": "github:aws/aws-sdk-js@2.6.4"
  },
  packages: {
    "ack-aws-s3-playground": {
      "main": "ack-aws-s3-playground.js"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:aws-sdk@2.4.11": {
      "map": {
        "jmespath": "npm:jmespath@0.15.0",
        "sax": "npm:sax@1.1.5",
        "xml2js": "npm:xml2js@0.4.15",
        "xmlbuilder": "npm:xmlbuilder@2.6.2"
      }
    },
    "npm:crypto-js@3.1.6": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:jmespath@0.15.0": {
      "map": {
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:lodash@3.5.0": {
      "map": {
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:node-s3-encryption-client@0.0.2": {
      "map": {
        "aws-sdk": "npm:aws-sdk@2.4.11",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0"
      }
    },
    "npm:sax@1.1.5": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "process": "github:jspm/nodelibs-process@0.1.2",
        "stream": "github:jspm/nodelibs-stream@0.1.0",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.6"
      }
    },
    "npm:xml2js@0.4.15": {
      "map": {
        "events": "github:jspm/nodelibs-events@0.1.1",
        "process": "github:jspm/nodelibs-process@0.1.2",
        "sax": "npm:sax@1.1.5",
        "timers": "github:jspm/nodelibs-timers@0.1.0",
        "xmlbuilder": "npm:xmlbuilder@2.6.2"
      }
    },
    "npm:xmlbuilder@2.6.2": {
      "map": {
        "lodash": "npm:lodash@3.5.0",
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "aws-sdk-js": "github:aws/aws-sdk-js@2.6.4",
    "child_process": "github:jspm/nodelibs-child_process@0.1.0",
    "constants": "github:jspm/nodelibs-constants@0.1.0",
    "events": "github:jspm/nodelibs-events@0.1.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "ack-aws-s3-universal": "github:ackerapple/ack-aws-s3-universal@master",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.1.0",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.1.0",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.1.0",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  },
  packages: {
    "github:ackerapple/ack-aws-s3-universal@master": {
      "map": {
        "aws-sdk-js": "github:aws/aws-sdk-js@2.6.4",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0"
      }
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "map": {
        "assert": "npm:assert@1.4.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "map": {
        "buffer": "npm:buffer@3.6.0"
      }
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "map": {
        "constants-browserify": "npm:constants-browserify@0.0.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "map": {
        "events": "npm:events@1.0.2"
      }
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "map": {
        "process": "npm:process@0.11.6"
      }
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "map": {
        "util": "npm:util@0.10.3"
      }
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "map": {
        "vm-browserify": "npm:vm-browserify@0.0.4"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "assert": "github:jspm/nodelibs-assert@0.1.0",
        "bn.js": "npm:bn.js@4.11.5",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "vm": "github:jspm/nodelibs-vm@0.1.0"
      }
    },
    "npm:assert@1.4.1": {
      "map": {
        "assert": "github:jspm/nodelibs-assert@0.1.0",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "process": "github:jspm/nodelibs-process@0.1.2",
        "util": "npm:util@0.10.3"
      }
    },
    "npm:bn.js@4.11.5": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "cipher-base": "npm:cipher-base@1.0.2",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "constants": "github:jspm/nodelibs-constants@0.1.0",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "elliptic": "npm:elliptic@6.3.1",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "stream": "github:jspm/nodelibs-stream@0.1.0"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:buffer@3.6.0": {
      "map": {
        "base64-js": "npm:base64-js@0.0.8",
        "child_process": "github:jspm/nodelibs-child_process@0.1.0",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0",
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "inherits": "npm:inherits@2.0.1",
        "stream": "github:jspm/nodelibs-stream@0.1.0",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
      }
    },
    "npm:constants-browserify@0.0.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "cipher-base": "npm:cipher-base@1.0.2",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "create-hash": "npm:create-hash@1.1.2",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "inherits": "npm:inherits@2.0.1",
        "stream": "github:jspm/nodelibs-stream@0.1.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.8",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "create-hash": "npm:create-hash@1.1.2",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {
        "util": "github:jspm/nodelibs-util@0.1.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.8.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:path-browserify@0.0.0": {
      "map": {
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "child_process": "github:jspm/nodelibs-child_process@0.1.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "path": "github:jspm/nodelibs-path@0.1.0",
        "process": "github:jspm/nodelibs-process@0.1.2",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:process@0.11.6": {
      "map": {
        "assert": "github:jspm/nodelibs-assert@0.1.0",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "vm": "github:jspm/nodelibs-vm@0.1.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "create-hash": "npm:create-hash@1.1.2",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:randombytes@2.0.3": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "crypto": "github:jspm/nodelibs-crypto@0.1.0",
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "events": "github:jspm/nodelibs-events@0.1.1",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "process": "github:jspm/nodelibs-process@0.1.2",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:ripemd160@1.0.1": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0",
        "fs": "github:jspm/nodelibs-fs@0.1.2",
        "inherits": "npm:inherits@2.0.1",
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "events": "github:jspm/nodelibs-events@0.1.1",
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {
        "buffer": "github:jspm/nodelibs-buffer@0.1.0"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "process": "github:jspm/nodelibs-process@0.1.2"
      }
    },
    "npm:vm-browserify@0.0.4": {
      "map": {
        "indexof": "npm:indexof@0.0.1"
      }
    },
    "npm:pbkdf2@3.0.8": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.0"
      }
    },
    "npm:stream-http@2.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    }
  }
});
