import {TText} from "@app/components/Headline"
import { SocialHandle, TCarouselSlide } from "@app/types";



let ids = 0;



export const socialHandles: SocialHandle[] = [{
    id: "facebook",
    url: "https://www.facebook.com/",
    name: "facebook"
},
{
    id: "instagram",
    url: "https://www.instagram.com/",
    name: "instagram"
},
{
    id: "twitter",
    url: "https://www.twitter.com/",
    name: "twitter"
}
]

export const carouselSlides: TCarouselSlide[] = [
    {
        id: `${++ids}`,
        title: {
            id: `${++ids}`,
            value: [{
                id: `${++ids}`,
                value: "Love will tear us apart again",
            }]
        },
        url: "https://images.pexels.com/photos/977539/pexels-photo-977539.jpeg",
        cta: {
            url: "https://www.google.com",
            label: "Read more"
        },
        description: "The world without photography will be meaningless to us if there is no light.",
    },
    {
        id: `${++ids}`,
        title: {
            id: `${++ids}`,
            value: [{
                id: `${++ids}`,
                value: "My name is Alex Novo,",
            },
            {
                id: `${++ids}`,
                value: "I’m a Photographer.",
                color: "primary",
            }
        ]
        },
        url: "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg",
        cta: {
            url: "https://www.google.com",
            label: "Read more"
        },
        description: "My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. my photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people i photograph!",
    },
    {
        id: `${++ids}`,
        title: {
            id: `${++ids}`,
            value: [{
                id: `${++ids}`,
                value: "Men from the north country",
            }
        ]
        },
        url: "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg",
        cta: {
            url: "",
            label: "Apply for the position"
        },
        description: "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. my photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people i photograph!",
    },
    {
        id: `${++ids}`,
        title: {
            id: `${++ids}`,
            value: [{
                id: `${++ids}`,
                value: "Men from the north country",
            }
        ]
        },
        url: "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg",
        cta: {
            url: "",
            label: "become a member"
        },
        description: "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. my photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people i photograph!",
    },
    {
        id: `${++ids}`,
        title: {
            id: `${++ids}`,
            value: [{
                id: `${++ids}`,
                value: "This is another title with a long text",
            }
            ,
            {
                id: `${++ids}`,
                value: "And a highlight",
                color: "primary",
            }
        ]
        },
        url: "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg",
        cta: {
            url: "",
            label: "participate now"
        },
        description: "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. my photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people i photograph!",
    },
    {
        id: `${++ids}`,
        title: {
            id: `${++ids}`,
            value: [{
                id: `${++ids}`,
                value: "This is an underlined tile",
            }
            ,
            {
                id: `${++ids}`,
                value: "with a highlight",
                color: "primary",
            }
        ],
        underline: true,
        underlineAlign: "left",
        },
        url: "https://images.pexels.com/photos/12548883/pexels-photo-12548883.jpeg",
        cta: {
            url: "",
            label: "donate now"
        },
        description: "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. my photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people i photograph!",
    },
]