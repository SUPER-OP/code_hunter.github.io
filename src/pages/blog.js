import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'


export const Blog = (props) => {

  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2)

  const fetchData = async () => {
    let d = await fetch(`https://remarkable-tapioca-396922.netlify.app/api/blogs/?count=${count + 4}`)
    setCount(count + 2);
    let data = await d.json()
    setBlogs(data)

  };

  return (
    <>

      <main className={styles.main}>


        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<p styles={{fontFamily:'monospace'}}>Loading...</p>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }

        >
          <div className={styles.blogItem}>
            {blogs.map((blogItem) => {
              return <div key={blogItem.slug}>
                <Link href={`blogpost/${blogItem.slug}`}><h3>{blogItem.title}</h3>
                <p className={styles.blogItemP}>{blogItem.metadesc.substr(0, 150)}...<b className={styles.blogItemb}>Read More</b></p></Link>
              </div>
            })}
          </div>
        </InfiniteScroll>



        <div className={styles.blogItem}>
          {/* {blogs.map((blogItem) => {
            return <div key={blogItem.slug}>
              <Link href={`blogpost/${blogItem.slug}`}><h3>{blogItem.title}</h3
              <p className={styles.blogItemP}>{blogItem.metadesc.substr(0, 150)}...<b className={styles.blogItemb}>Read More</b></p>></Link>
            </div>
          })} */}
          <div className={styles.blogs}>
          </div>
        </div>
      </main>
    </>
  )
}
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let allCount = data.length
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))

  }
  return {
    props: { allBlogs, allCount },
  }
}

export default Blog;

