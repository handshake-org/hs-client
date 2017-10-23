/*!
 * bclient.js - http clients for bcoin
 * Copyright (c) 2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

const NodeClient = require('./node');
const WalletClient = require('./wallet');

exports.NodeClient = NodeClient;
exports.nodeClient = options => new NodeClient(options);

exports.WalletClient = WalletClient;
exports.walletClient = options => new WalletClient(options);
