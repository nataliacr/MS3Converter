// Type definitions for mkdirp 0.5.1
// Project: https://github.com/substack/node-mkdirp
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
declare function mkdirp2(dir: string, cb: (err: NodeJS.ErrnoException, made: string) => void): void;
declare function mkdirp2(dir: string, opts: any, cb: (err: NodeJS.ErrnoException, made: string) => void): void;

declare namespace mkdirp2 {
    function sync(dir: string, opts?: any): string;
    function promise(dir: string, opts?: any): Promise<any>;
}
export = mkdirp2;