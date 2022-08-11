export function camelToWords(text:string):string[]{
  if(!text || !text.trim()){
    throw new Error(`argument has to be defined`)
  }
  return text
  // 
  .replace(/([A-Z]+)/g, " $1")
  //
  .replace(/([A-Z][a-z])/g, " $1")
  // remove white spaces in the beginning and the end of the string
  .trim()
  .split(" ")
  ;
}
