type Variants="primary"|"secounry";

interface ButtonPropes{
    variant:Variants;
    size:"md"|"lg"|"sm";
    text:string;
    startIcon?:any;
    endIcon?:any;
    onClick:()=>void;
}

const varientStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-400 text-purple-600"
}
const sizeStyles={
    "sm":"px-1 py-2",
    "md":"px-3 py-4",
    "lg":"px-5 py-6"
}
const defaultStyle="rounded m-4 p-2 flex";

export const Button=(props:ButtonPropes)=>{
    return <button className={`${varientStyles[props.variant]} ${defaultStyle} ${sizeStyles[props.variant]}`}> {props.startIcon?<div className="pr-2">{props.startIcon}</div>:null} {props.text} {props.endIcon}</button>
}
<Button variant="primary" size="md" text={"abcd"} onClick={()=>{}} />