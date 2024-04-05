"use client"
import React from 'react';
import styles from "./pagination.module.css"
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface PaginationProps {
  count: number;
}

const Pagination: React.FC<PaginationProps> = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const params = new URLSearchParams(searchParams);

  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    const nextPage = type === "prev" ? page - 1 : page + 1;
    params.set("page", nextPage.toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Previous</button>
      <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>Next</button>
    </div>
  )
}

export default Pagination;
