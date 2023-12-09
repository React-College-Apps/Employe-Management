interface IInputProps{
    label:string,
    labelClassName?:string,
    type:string,
    value?:string | number
    className?:string
    onChange?:(e:any)=> any;
}

export default IInputProps