import { FC, memo } from "react";
import { Props } from "./props";
import { CustomButton } from "./styles";


const Button: FC<Props> = ({
    variant,
    children,
    onClick,
    type
}) => {
    return (
        <CustomButton onClick={onClick}>
            {
                variant === 'normal'?' SEE ROVER' :
                variant === 'delete'? 'DELETE' : 
                variant === 'update'? 'UPDATE' : 
                variant === 'create'? 'CREATE' : 'UPDATE'
            }
        </CustomButton>
    )
}

export default memo(Button);