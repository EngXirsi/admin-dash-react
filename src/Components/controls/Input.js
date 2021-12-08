
import { TextField ,makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    input: {
        // height:"70px !important"

    }
})

export default function Input(props) {
    const classes = useStyles()

    const { name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            className={classes.input}
            size = "small"
            // onChange={onChange}
            // {...(error && {error:true,helperText:error})}
        />
    )
}