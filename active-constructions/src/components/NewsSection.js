import { useEffect, useState } from "react";

function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Latest Construction News</h2>
      {news.map(n => (
        <div key={n.id} className="p-2 border-b">
          <h3 className="font-semibold">{n.title}</h3>
          <p>{n.body}</p>
        </div>
      ))}
    </section>
  );
}
export default NewsSection;
