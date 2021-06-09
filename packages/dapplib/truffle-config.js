require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth oil puppy grace credit equal gauge'; 
let testAccounts = [
"0x104b49c9ddf319adc8fa12e83f96ff14ce89b159eb5b3cd94f07bdcc49be7e9e",
"0x62a5d001ad6114c36fdd6724c71479904c9318e12a9244d7bb476698166e2e36",
"0xbe19534f664372fe0bc5b86cba89bbde42c089a70ab75a8c9cbb6328eda1f984",
"0x2d82b515dd4f60ebaa7bb2baf6de4168d451db2bd25cea6792dd79d3621545ea",
"0xee89db6955b004d9b3e13f79201757257133017b280b076955cf65e5e8b76d81",
"0x8cc62ef6dd3bef3e3bf8f646d0a09f19404fc63119a0f13d84d68479d7363012",
"0x2276d967dbc8306d4ecfa235aa35b3b4e956aa5e110714bdf37b0f3deb66145b",
"0x559d8e06feba24d978e3750926b6b586614592149287aa53512a23b8fdab16e5",
"0x691012c59775bde13fc5643c7432a7f1dfdcf7a2b400bc311f8e9e3f8d23f8ca",
"0x3e3d71182dfb9e7e1b3762f1623350047b43c472d9a11dce276df08a29ebbf12"
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
            version: '^0.8.0'
        }
    }
};

