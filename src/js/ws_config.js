var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'WalletShell';
config.appDescription = 'RhodiumCoin Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'lol.rhodiumcoin.walletshell';
config.appGitRepo = 'https://github.com/rhodiumcoin/rhodium-wallet-electron';

// default port number for your daemon (e.g. RhodiumCoind)
config.daemonDefaultRpcPort = 8004;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'twl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'rhodium-service';

// version on the bundled service (rhodiumcoin-service)
config.walletServiceBinaryVersion = "v0.1.1";

// config file format supported by wallet service, possible values:
// ini -->  for rhodium service (or its forks) version <= v0.8.3
// json --> for rhodium service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. rhodium-service)
config.walletServiceRpcPort = 8015;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = null;

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'rhodiumnode.co';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = null;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  '138.68.135.44:8010',
  '139.59.174.79:8010',
  '68.183.148.243:8010',
];

// your currency name
config.assetName = 'RhodiumCoin';
// your currency ticker
config.assetTicker = 'RHOX';
// your currency address prefix, for address validation
config.addressPrefix = 'Rhod';
// standard wallet address length, for address validation
config.addressLength = 98;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 186;

// minimum fee for sending transaction
config.minimumFee = 14.1;
// minimum amount for sending transaction
config.mininumSend = 1;
// default mixin/anonimity for transaction
config.defaultMixin = 0;
// to convert from atomic unit
config.decimalDivisor = 100000000;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'WalletShell Donation',
    address: 'RhodaLzk3r89PAUnB7NUTAEDfzY5ApiMRaL531j9SWqf3wMpGWiHckSMHHo5tNAoBB7cU9KTjxjRQG5ezFsf6CQY33fGtgWNEj',
  }
];

module.exports = config;
