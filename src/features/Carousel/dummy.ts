import {TText} from "@app/components/Headline"


const arr = [
    {
      url: "https://images.pexels.com/photos/977539/pexels-photo-977539.jpeg",
      title: "Love will tear us apart again",
      description:
        "The world without photography will be meaningless to us if there is no light.",
    },
    {
      url: "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg",
      title: "My name is Alex Novo, I’m a Photographer.",
      description: "The world without photography will be",
    },
    {
      url: "https://images.pexels.com/photos/908310/pexels-photo-908310.jpeg",
      title: "Men from the north country",
      description:
        "My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!",
    },
    {
    url: "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg",
    title: "City of stars",
      description:
        "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. My photos are inspired by light, color, creative perspective, techniques & personalities.",
    },
  
    {
      url: "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg",
      title: "NOVO",
      description:
        "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.",
    },
  ];

interface Title {
    id: string;
    underline?: boolean;
    underlineAlign?: "left" | "center";
    value: TText[];
}

let ids = 0;

export interface TCarouselSlide {
    id: string;
    url: string;
    title: Title,
    description: string
}


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
        description: "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. my photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people i photograph!",
    },
]