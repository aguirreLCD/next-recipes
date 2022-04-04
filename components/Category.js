import React from "react";
import styles from "../styles/Category.module.css";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";

import { GiNoodles, GiChopsticks } from "react-icons/gi";

import Link from "next/link";

import { Container, Stack } from "react-bootstrap";

function Category() {
  return (
    <>
      <Container fluid="md">
        <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto">
          <div className="bg-light border">
            <Link
              href={{
                pathname: "/[slug]",
                query: { slug: "Italian" },
              }}
              passHref
            >
              <div className={styles.card}>
                <FaPizzaSlice />
                <a>Italian</a>
              </div>
            </Link>
          </div>

          <div className="bg-light border">
            <Link
              href={{
                pathname: "/[slug]",
                query: { slug: "American" },
              }}
              passHref
            >
              <div className={styles.card}>
                <FaHamburger />
                <a>American</a>
              </div>
            </Link>
          </div>

          <div className="bg-light border">
            <Link
              href={{
                pathname: "/[slug]",
                query: { slug: "Thai" },
              }}
              passHref
            >
              <div className={styles.card}>
                <GiNoodles />
                <a>Thai</a>
              </div>
            </Link>
          </div>

          <div className="bg-light border">
            <Link
              href={{
                pathname: "/[slug]",
                query: { slug: "Japanese" },
              }}
              passHref
            >
              <div className={styles.card}>
                <GiChopsticks />
                <a>Japanese</a>
              </div>
            </Link>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default Category;
