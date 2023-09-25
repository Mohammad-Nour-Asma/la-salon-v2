import React from 'react'
import { Box, Typography } from "@mui/material";
import { useAppSelector } from '../../../redux/store';

const Landing = () => {
    const { language } = useAppSelector((state) => state.language)

    return (
        <>
            <Box sx={{
                backgroundImage: `url(../../assets/home.jpg)`,
                backgroundPosition: 'center',
                height: '60vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '2rem',
                position: 'relative',
                borderRadius: '5px'

            }}>
                <Box sx={{
                    color: 'white',
                    position: 'absolute',
                    bottom: '2rem',
                    right: language === 'ar' ? '2.5rem' : 'calc(100% - 11rem)',


                }}>
                    <Typography fontSize={'1.5rem'}>{language === 'ar' ? 'اهلا بكم في' : 'Welcome To'}</Typography>
                    <Typography fontWeight={'bold'} fontSize={'2rem'}>{language === 'ar' ? "لو صالون" : 'Le Salon'}</Typography>
                </Box>
            </Box>
            <Box textAlign={language === 'ar' ? 'right' : 'left'} color={'#333'} my={'1rem'}>
                <Typography fontSize={'1.5rem'}>{language === 'ar' ? "ماذا ترغب" : 'What would you like'}</Typography>
                <Typography mt={'0'} fontWeight={'bold'} fontSize={'2rem'}>{language === 'ar' ? "ان تطلب" : 'to order ?'}</Typography>
            </Box>
        </>
    )
}

export default Landing