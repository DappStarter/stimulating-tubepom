require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin photo flat slab'; 
let testAccounts = [
"0x78199ca0e5bad8d8ce99f46b4439ee37b87c5e9d5b07994819e377379ca1f5e2",
"0x85acfabbf2760c4979c2d15125f8b4ca908ab593a68cb8c2ec5fe41683f44ba6",
"0x5634a1effc316264bb2d019abb08a75299fe1acd93a572767ef57909d945dc5e",
"0xc0f7214a29bd79869ec325a84f6f32ca8c79876d18e347d204f09ea07d361cbb",
"0xee006b30d0202283befb79c050c13ef7eb1fd9f95b3a7ae44d4b0f016c283636",
"0x085ad0f98c1ac8585da8b99a7653debbd96cf3c2d6f32ef3c9fbdb116368fbc7",
"0x9d3530c492d4b5c8769b153efc3b647d87b7c5ea37a004715db8415b4332efb5",
"0xe1d2e7578d79a84b8736d3f103fac8709ad45d056e0c08a1f9c6b0c998f38986",
"0x53b84faebf1d79541c5e94ae78149cbf66c9712308cd2b73ce4519190ad5b28a",
"0x3ad05ff07cf37fa7585ad8f5e9abe020c6cd91430ede4d2cf33395aff8d68e20"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
