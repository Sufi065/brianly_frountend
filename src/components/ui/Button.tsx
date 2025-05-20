export interface ButtonPropes{
    varient:"primary"|"secounry";
    size:"md"|"lg"|"sm";
    text:string;
    startIcon?:any;
    endIcon?:any;
    onClick:()=>void;
}

export const Button=(props:ButtonPropes)=>{
    return <button></button>
}
<Button varient="primary" size="md" text={"abcd"} onClick={()=>{}} />