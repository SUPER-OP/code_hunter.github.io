import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import * as fs from 'fs'
// Step 1 : find the file corresponding to the slug
// Step 2 : Populate them
export const Slug = (props) => {
    function createMarkup(c) {
        return { __html: c };
    }

    const [blog, setBlog] = useState(props.myBlog);

    return <main className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.containterH1}>
                {blog && blog.title}
            </h1>
            {blog && <div className={styles.content} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        </div>
    </main>
}

export async function getStaticPaths() {
    let allB = await fs.promises.readdir('blogdata')
    allB = allB.map((item) => {
        return { params: { slug: item.split(".")[0] } }
    })
    return {
        paths: allB,
        fallback: true
    };
}



export async function getStaticProps(context) {
    // console.log(context.query)
    // const router = useRouter();
    const { slug } = context.params;

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
    return {
        props: { myBlog: JSON.parse(myBlog) },
    }
}

export default Slug;
