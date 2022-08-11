import nextConfig from "../../next.config"
// meta types 
// locales
const locales = nextConfig.i18n?.locales as string[]

export type LocalesEnum = typeof locales[number]

export interface Locale {
    value: LocalesEnum,
    label: string,
    isDefault: boolean
}

interface ID {
    id?:string;
}
export interface SiteLink extends ID{
    label: string; 
    href: string;
    isExternal: boolean
}

export interface TImage extends ID{
    url: string;
    width: number;
    height: number
}

export interface Project extends ID {
    id: string;
    slug: string;
    name:string;
    image: TImage,
    details: string;
}

export interface Slide extends ID {
    id: string;
    title: string;
    description: string;
    ctas: SiteLink | any;
    image: TImage;
}

export interface Hero extends ID {
    title:string;
    description: string;
    image: TImage
}

export interface SEO extends ID {
    title: string;
    description: string;
    image: TImage
}

export interface MemberProfile extends ID {
    id: string;
    name: string;
    position: string;
    photo: TImage
    email?: string;
    phoneNumber?: string;
    address?: string;
    roleDescription?: string;
}

export interface Fact extends ID {
    title: string;
    description: string;
}

export interface AssociationProfile extends ID {
    slogan: string;
    facts: Fact[]
    backgroundImage: TImage
}

export interface Sponsor extends ID{
    name: string;
    description: string;
    link: string;
    logo: TImage
}

export interface GridSection extends ID{
    title: string;
    description?: string;
    bgColor: {css: any}
    children: any
}

export interface SectionWithImage extends ID{
    title: string;
    description: string;
    image: TImage
}

// TODO: Change this once Dynamic loading of icons will be solved
export interface Service extends ID{
    title: string;
    description: string;
    icon: "FaHome"
    | "FaUsers"
    | "MdWork"
    | "MdSchool"
    | "GiTeacher"
    | "RiParentFill"
}


export interface Event extends ID{
   title: string;
   summary: string;
   description?: any;
   startDate: Date
   endDate: Date
   image: TImage
   gallery?: TImage[] 
}