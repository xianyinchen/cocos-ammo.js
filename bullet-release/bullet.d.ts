// tslint:disable
declare function instantiate(env: any, buffer: ArrayBuffer): Bullet.instance;

declare namespace Bullet {
    type ptr = number;
    interface instance {
    }
}

declare module '@cocos/bullet' {
    export = instantiate;
}
