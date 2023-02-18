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
        <CustomButton>
            {children}
        </CustomButton>
    )
}

export default memo(Button);