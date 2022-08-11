/**
 * This file contents meta data information about the site such as locales and other aspect
 */
 import nextConfig from "../../next.config"
 import {LocalesEnum, Locale} from "../types/common"
/**************************************************************
 * Locales
/*************************************************************/
let locales:any = {}

for(const locale of (nextConfig.i18n?.locales as string[])){
    const isDefault = nextConfig.i18n?.defaultLocale === locale;
    let label = ""
    switch(locale){
        case "en":
            label = "EN"
            break;
        case "de":
            label = "DE"
            break;
        case "fr":
            label = "French"
            break;
    }
    locales[locale] = {
        label,
        isDefault
    }
}


function getLocaleInfo(locale: LocalesEnum):Locale{
  return {...locales[locale], value:locale}
}

function getLocalesArray(): Locale[]{
    return Object.keys(locales).map((locale)=>({
        value: locale,
        ...locales[locale]
    }))
}

export  {
    locales,
    getLocaleInfo,
    getLocalesArray
}
