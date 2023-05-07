import Cards from "../cards/component";
import Postagens from "./schema";
import "./style.css";
function Component() {
  return (
    <div className="bodyBlog">
      {Postagens.map((post) => (
        <Cards
          dataPost={post.dataPost}
          titlePost={post.titlePost}
          descPost={post.descPost}
          idPost={post.idPost}
        />
      ))}
    </div>
  );
}

export default Component;
