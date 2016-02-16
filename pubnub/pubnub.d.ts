// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/ringcentral/ringcentral-js/master/typings-custom/pubnub/pubnub.d.ts
interface PUBNUB {

    init(options:PUBNUBInitOptions):PUBNUBInstance;
    crypto_obj:PUBNUBCryptoObj;

}

interface PUBNUBInstance {

    crypto_obj:PUBNUBCryptoObj;

    ready():void;

    subscribe(options:PUBNUBSubscribeOptions);

    unsubscribe(options:PUBNUBUnsubscribeOptions);

    history(options:PUBNUBHistoryOptions);

    receiveMessage(message:string, channel:string); //TODO Remove

}

interface PUBNUBSubscribeOptions {
    channel:string;
    message?:(message, env, channel) => any;
    callback?:(...args)=>void
}

interface PUBNUBUnsubscribeOptions {
    channel:string;
}

interface PUBNUBHistoryOptions {
    channel:string;
    count?:number;
    reverse?:boolean;
    callback?:(...args)=>void;
}

interface PUBNUBInitOptions {
    ssl?:boolean;
    subscribe_key?:string
}

interface PUBNUBCryptoObj {
    encrypt:(message:string, key:string, options:PUBNUBCryptoOptions)=>string;
    decrypt:(message:string, key:string, options:PUBNUBCryptoOptions)=>any;
}

interface PUBNUBCryptoOptions {
    encryptKey?:boolean;
    keyEncoding?:string;
    keyLength?:number|string;
    mode?:string
}

declare module 'pubnub' {
    var PUBNUB:PUBNUB;
}

declare var PUBNUB:PUBNUB;