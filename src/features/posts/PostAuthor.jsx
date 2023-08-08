import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectAllUsers } from "../users/usersSlice";

// eslint-disable-next-line react/prop-types
const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "unkown"}</span>;
};

export default PostAuthor;
