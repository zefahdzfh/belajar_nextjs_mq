interface LabelProps {
    htmlFor: string;
    isRequired?: boolean;
    title:string
}

const Label: React.FC<LabelProps> = ({htmlFor, isRequired, title}) => {
    return (
        <label className="flex flex-row" htmlFor={htmlFor}>
            <p>{title}</p>
           {isRequired === true ?(
            <p className="text-sm text-red-500">*</p>
           ):(
            <></>
           )}
        </label>
        
        
    )
}



export default Label
