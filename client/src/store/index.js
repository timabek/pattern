import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#0d034d',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/threejs.svg',
    fullDecal: '/threejs.svg',

})

export default state