import { Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import PublicIcon from '@mui/icons-material/Public';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setLanguage } from '../../redux/Slices/LanguageSlice';


const Language = () => {

    const dispatch = useAppDispatch()
    const { language } = useAppSelector(state => state.language)
    const [open, setOpen] = useState(false)



    return (
        <Box onClick={() => { setOpen(!open); }} sx={{ position: 'relative', cursor: 'pointer' }}>
            <Tooltip sx={{ width: '50%' }} title="Language">

                <PublicIcon sx={{ fontSize: '1.8rem' }} />

            </Tooltip>
            <Box sx={{

                background: '#eee',
                position: 'absolute',
                top: '120%',
                zIndex: '1000',
                borderRadius: '10px',
                transition: '0.3s',
                visibility: open ? 'visible' : 'hidden',
                opacity: open ? '1' : '0',
                transform: open ? 'translateX(8px)' : 'translateX(2px)',
                right: '1.0rem',
                padding: '0.5rem 0.1rem'


            }} >
                <Box onClick={() => {
                    dispatch(setLanguage('ar'));
                }} sx={{
                    marginBottom: '0.8rem', cursor: 'pointer', background: language === 'ar' ? '#ddd' : '', fontWeight: language === 'ar' ? 'bold' : 'none', borderRadius: '5px', padding: '0.2rem 0.8rem', transition: '0.3s', '&:hover': {
                        transform: 'translateX(2px)',
                    }
                }}>Arabic</Box>
                <Box onClick={() => {
                    dispatch(setLanguage('en'));

                }} sx={{
                    cursor: 'pointer', transition: '0.3s', background: language === 'en' ? '#ddd' : '', fontWeight: language === 'en' ? 'bold' : 'none', padding: '0.2rem 0.8rem', borderRadius: '5px', '&:hover': {
                        transform: 'translateX(2px)',
                    }
                }}>English</Box>
            </Box>
        </Box >
    )
}

export default Language