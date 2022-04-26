export const DetailGroup = (props) => {
    const {pName,pLabel,pPlaceHolder, pOValues, pOSetOvalues} = props 
    const mOnChange = (event) => {
        const {name ,value} = event.target;
        pOSetOvalues(
            {...pOValues,
                [name]: value}
        );
    }
    return (
        <div>
            <label
                htmlFor={"i"+pName}  
            >{pLabel}</label>
            <textarea
                id={"i"+pName}
                name={pName}
                placeholder={pPlaceHolder}
                value={pOValues[pName]}
                onChange={mOnChange}
            />
        </div>
    )
}