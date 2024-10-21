"use client";
import { books } from "@/constant/mockData";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./book.module.css";
import { Editor,useDomValue } from "reactjs-editor";
import Link from "next/link";
import { useEffect } from "react";

const Page = () => {
  const { id } = useParams();
  const { dom, setDom } = useDomValue();

  const bookData = books.filter((book, i) => {
    return id === String(book.id);
  });

  const handleSave= ()=>{
    const updatedDomValue  = {
        key: dom?.key,
        props: dom?.props,
        ref: dom?.ref,
        type: dom?.type,
      }

      localStorage.setItem(`dom${bookData[0].id}`,JSON.stringify(updatedDomValue))
    
   }

   useEffect(()=>{
    const savedDom = localStorage.getItem(`dom${bookData[0].id}`) 
    if(savedDom){
        setDom(JSON.parse(savedDom))
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
  return (
    <motion.div
      transition={{ type: "spring", damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.section
        transition={{ type: "spring", damping: 44, mass: 0.75 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.appBar}
      >
        <div className={styles.leftIcon}>
          <Link href='/'>
          <i
            style={{ fontSize: "20px", cursor: "pointer" }}
            className="fas fa-chevron-left"
            ></i>
            </Link>
        </div>
        <div className={styles.title}>
          <h2 className={styles.titleStyles}>{bookData[0]?.title}</h2>
        </div>
        <div className={styles.icons}>
          <button className={styles.saveButton} onClick={handleSave}>Save</button>
          <i style={iconStyle} className="fas fa-cog"></i>
          <i style={iconStyle} className="fas fa-share"></i>
          <i style={iconStyle} className="fas fa-search"></i>
        </div>
      </motion.section>

      <Editor
      
        /** htmlContent accepts only one element. Just wrap everything on one element **/
        htmlContent={`
        <main className="bookContainer">
    <aside>
    <h1 className="center">${bookData[0].title} </h1>
    <span className="center small"> By ${bookData[0].author} </span>
    ${bookData[0].content}
    </aside>
        </main>
        `
              }
      />
    </motion.div>
  );
};

export default Page;

const iconStyle = { marginRight: "20px", fontSize: "20px" };
