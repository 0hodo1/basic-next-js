import styles from "../../styles/Home.module.css";

const Detail = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <h1 className={styles.title}>Blogs Detail</h1>
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
    </div>
  );
};
export default Detail;

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: { blog: data },
  };
};
