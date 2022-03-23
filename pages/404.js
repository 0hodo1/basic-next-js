import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      router.back();
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooooopss...</h1>
      <h2>Sayfa bulunamadı</h2>
      <p>
        Lütfen
        <Link href="/">
          <a> buraya </a>
        </Link>
        tıklayarak ana sayfaya dönün.
      </p>
    </div>
  );
};
export default NotFound;
