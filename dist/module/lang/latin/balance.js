import FlexSearch from"../../flexsearch.js";export const rtl=!1;export const tokenize="";export default{encode:encode,rtl:!1};const regex_whitespace=/[\W_]+/g,regex_strip=/[^a-z0-9 ]/g,pairs=[regex_whitespace," ",regex_strip,""];export function encode(a){return this.pipeline(a.toLowerCase(),pairs," ",!1)}