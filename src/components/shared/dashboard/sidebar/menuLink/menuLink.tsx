"use client"
import Link from 'next/link';
import React from 'react';
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

export interface ItemType {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const MenuLink: React.FC<{ item: ItemType }> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
