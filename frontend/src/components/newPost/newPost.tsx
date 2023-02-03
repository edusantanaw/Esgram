import { BsFillImageFill } from "react-icons/bs";
import { NewPostContainer } from "./styles";
import defaultImage from '../../assets/games.jpg'

const NewPost = ({ handleModal }: { handleModal: () => void }) => {
const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
  return (
    <NewPostContainer onClick={handleModal}>
      <div className="top">
      <object
          data={`http://localhost:5001/users/${user?.perfilPhoto}`}
          type="image/png"
        >
          <img src={defaultImage} />
        </object>
        <input
          type="text"
          id="post"
          placeholder="Create a new post..."
          readOnly
        />
      </div>
      <div className="bottom">
        <BsFillImageFill />
        <span>Image</span>
      </div>
    </NewPostContainer>
  );
};

export default NewPost;
