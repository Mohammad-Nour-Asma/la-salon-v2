import React, { useEffect } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import CategoryButton from './CategoryButton';
import { Box } from '@mui/material';

// Default theme
import '@splidejs/react-splide/css';



import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { fetchCategories } from '../../../redux/Slices/CategoriesSlice';
import Heading from '../../../components/Heading';
import { useSelector } from 'react-redux';
const CategorySlider = () => {
    const { categories } = useAppSelector(state => state.categories)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }

        return () => {

        }
    }, [])

    const { language } = useAppSelector(state => state.language)
    return (
        <Box sx={{

        }}>
            <Splide options={{
                live: true,
                perPage: 4,
                gap: 2,
                breakpoints: {
                    500: {
                        perPage: 2
                    }
                },
                arrows: false,
                pagination: false,

                rewind: true,
            }} aria-label="My Favorite Images">
                {categories.map((item, index) => {
                    let name;
                    if (language === 'ar') name = item.ar_name;
                    else name = item.name
                    return <SplideSlide key={index} >
                        <CategoryButton id={item.id} name={name} />
                    </SplideSlide>

                })}
            </Splide>
            <Heading name={''} />

        </Box>
    )
}

export default CategorySlider