import React from 'react';
import { TextField } from '@mui/material';

export default function TextInput(props) {

    return (<TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label={props.label}
    />)
}