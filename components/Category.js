import React from "react";
import styles from "../styles/Category.module.css";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";

import { GiNoodles, GiChopsticks } from "react-icons/gi";

import Link from "next/link";

function Category() {
    return (
        <div className={styles.grid}>

            <Link 
                href={{
                    pathname: '/[slug]',
                    query: { slug: 'Italian' }
                }}
                passHref>
            <div className={styles.card}>
                <FaPizzaSlice />
                <a>Italian</a>

            </div>
            </Link>


            <Link 
               href={{
                    pathname: '/[slug]',
                    query: { slug: 'American' }
                }}
                passHref
            >
            
            <div className={styles.card}>
                <FaHamburger />
                <h4>American</h4>
            </div>
            </Link>

            
            <Link   
                href={{
                    pathname: '/[slug]',
                    query: { slug: 'Thai' }
                }}
                passHref>
            <div className={styles.card}>
                <GiNoodles />
                <h4>Thai</h4>
            </div>
            </Link>


            <Link 
               href={{
                    pathname: '/[slug]',
                    query: { slug: 'Japanese' }
                }}
                passHref>
            <div className={styles.card}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </div>
            </Link>

        </div>
    )
    
}

export default Category;