import { Color, Style } from "src/types/graphql";

export function parseStyle(style: Style):string {
    const {  bgColor, color, classNames=[]} = style;
    let res: string[] = [];
   
    res.push(...[])
    
    if(bgColor){
     res.push(`bg-[${parseColor(bgColor)}]`)
    }

    if(color){
        res.push(`text-[${parseColor(color)}]`)    
    }
    
    return String(res.join(" "));
}


export function parseColor(color: Color):string{
  const { hex, css, rgba } = color
  return `${hex || css || rgba && "rgba("+ rgba.r + "," + rgba.g + "," + rgba.b + "," + rgba.a +")" }`
} 