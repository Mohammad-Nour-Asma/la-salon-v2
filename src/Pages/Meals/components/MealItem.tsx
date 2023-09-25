import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import mealImage from '../../../assets/meal.jpg'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import { Meal } from '../../../redux/Slices/MealsSlice'
import { ImageURL } from '../../../API/BaseURL';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { addToCart } from '../../../redux/Slices/CartSlice';

type MealItemProps = {
    meal: Meal
}

const MealItem = ({ meal }: MealItemProps) => {

    const { language } = useAppSelector(state => state.language)

    return (

        <Stack mt={4} sx={{
            background: '#eee',
            padding: '0 0 0 0.2rem',

            borderRadius: '10px'
        }} direction={language === 'ar' ? 'row-reverse' : 'row'} gap={'1rem'} alignItems={'center'} >
            <Box sx={{
                flexBasis: '40%',


            }} >
                <Box sx={{
                    transform: 'translate(5px , -15%)'
                }}>
                    <img style={{ borderRadius: '10px', maxWidth: '100%', minWidth: '140px' }} loading='lazy' src={`${ImageURL}${meal.image}`} />
                </Box>
            </Box>
            <Box sx={{
                flex: '1',
                flexBasis: '60%',
                padding: '0.5rem'
            }}>
                <Stack justifyContent={'space-between'} direction={language === 'ar' ? 'row-reverse' : 'row'}>
                    <Link to={`/meal/${meal.id}`}>
                        <Typography color={'#333'} fontWeight={'600'} fontSize={'1rem'}>{language === 'ar' ? meal.ar_name : meal.name}</Typography>
                    </Link >
                    <Link to={`/meal/${meal.id}`} className='bump' style={{ color: '#5998c7' }}><AddCircleOutlineIcon /></Link>
                </Stack>

                <Typography textAlign={language === 'ar' ? 'right' : 'left'}>
                    <span style={{ color: "#428bc1", fontWeight: '600' }}>{language === 'ar' ? ': الوصف' : 'Description:'}</span> {language === 'ar' ? meal.ar_description : meal.description}
                </Typography> <Typography textAlign={language === 'ar' ? 'right' : 'left'} color={'#333'} fontWeight={'600'} fontSize={'0.9rem'}> <span style={{ color: "#428bc1", fontWeight: '600' }}>{language === 'ar' ? "السعر :" : 'Price:'}</span> {meal.price} {language === 'ar' ? "ريال" : 'SR'}</Typography>

            </Box>
        </Stack>

    )
}

export default MealItem