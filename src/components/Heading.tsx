import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { type } from 'os';
import { useAppSelector } from '../redux/store';

type HeadingProps = {
    name: string
}
const Heading = ({ name }: HeadingProps) => {

    const { language } = useAppSelector(state => state.language)

    return (
        <Box
            color={"#333"}

        >
            <Typography textAlign={name === 'note to kitchen' || name === 'ملاحظة الى المطبخ' ? 'center' : language === 'ar' ? 'right' : 'left'} textTransform={'capitalize'} fontSize={"1.3rem"} fontWeight={"600"}>
                {name}
            </Typography>

        </Box>
    )
}

export default Heading