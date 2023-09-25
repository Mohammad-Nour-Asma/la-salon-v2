import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Landing from "./components/Landing";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Categories from "./components/Categories";
import Heading from "../../components/Heading";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCategories } from "../../redux/Slices/CategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Loader from "../../components/loader/loader";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const table = searchParams.get("table_id");

    console.log(table)
    localStorage.setItem('table', `${table}`)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategories());
    }, [])

    const { language } = useAppSelector(state => state.language)


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Landing />
            <Heading name={language === 'ar' ? 'الاصناف' : "categories"} />
            <Categories />
        </motion.div>
    );
};

export default Home;
