import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import PostDetailsPage from "./PostDetailsPage";
import CreatePostPage from "./CreatePostPage";
import EditPostPage from "./EditPostPage";
import BlogPage from "./BlogPage";
import ProfilePage from './ProfilePage';
import { UserContextProvider } from "../Context/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
