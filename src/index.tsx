import { Button } from '@mui/material'

interface CustomButtomProps {
    title: string
    isDisabled: boolean

}

const CustomButtom = ({title, isDisabled}: CustomButtomProps) =>{
    return(
        <Button disabled={isDisabled}>{title}</Button>
    )
}

export default CustomButtom