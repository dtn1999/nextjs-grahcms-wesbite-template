import React from 'react'; 
import cn from 'classnames';

interface Props {
       value: string;
}
const Text:React.FC<Props> = React.memo(({value}) => {
     return <p className={cn('')}> {value}</p>
})
export default Text