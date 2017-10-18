/**
 * all structure of ms3 should be described in this interface
 */
interface baseUri {

}

interface MS3v1Settings {
    baseUri: baseUri,
    name: string,

}

interface MS3v1 {
    settings: MS3v1Settings
}

export {MS3v1 as MS3v1};