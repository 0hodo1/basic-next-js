import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Blogs = ({ blogs }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blogs</h1>
      {blogs.map((b) => (
        <Link href={`/blogs/${b.id}`} key={b.id} passHref>
          <div key={b.id}>
            <a className={styles.single}>
              <h2>{b.title}</h2>
            </a>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Blogs;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { blogs: data.slice(0, 10) },
  };
};
