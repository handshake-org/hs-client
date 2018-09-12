# hs-client

REST and RPC clients for handshake.

## Usage

``` js
const {NodeClient, WalletClient} = require('hs-client');
```

### CLI 

`npm install -g hs-client`

This provides you with 4 executable CLI tools for interacting with the hsd node.

`hsw-rpc` and `hsd-rpc` for the JSON-RPC interface 

`hsw-cli` and `hsd-cli` for the REST API ***LACKING SUPPORT FOR NAMES*** see https://github.com/handshake-org/hsd/issues/12

Complete docs here https://handshake-org.github.io/api-docs/#introduction

## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your code
to be distributed under the MIT license. You are also implicitly verifying that
all code is your original work. `</legalese>`

## License

- Copyright (c) 2017, Christopher Jeffrey (MIT License).

See LICENSE for more info.
