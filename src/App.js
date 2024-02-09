import { useEffect, useRef, useState } from "react";
import "./App.css";
import SmallPage from "./components/SmallPage/SmallPage";
import Header from "./components/Header/Header";
import axios from "axios";
import BigPage from "./components/BigPage/BigPage";
import PostPopup from "./components/PostPopup/PostPopup";
import { Route, Routes } from "react-router-dom";
import AddArticlePopup from "./components/AddArticlePopup/AddArticlePopup";
import ConfirmPopup from "./components/ConfirmPopup/ConfirmPopup";
import Users from "./components/Users/Users";
import Photos from "./components/Photos/Photos";
import UserPopup from "./UserPopup/UserPopup";
import UsersAnother from "./components/UsersAnother/UsersAnother";
import ConfirmPopupUser from "./components/ConfirmPopupUser/ConfirmPopupUser";
import AddUserPopup from "./components/AddUserPopup/AddUserPopup";
import PhotosAnother from "./components/PhotosAnother/PhotosAnother";
import ConfirmPopupPhotos from "./ConfirmPopupPhotos/ConfirmPopupPhotos";
import PhotoPopup from "./components/PhotoPopup/PhotoPopup";
import AddPhotoPopup from "./components/AddPhotoPopup/AddPhotoPopup";


function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddArticlePopupOpen, setIsAddArticlePopupOpen] = useState(false);
  const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false);
  const [isAddPhotoPopupOpen, setIsAddPhotoPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isConfirmUserPopupOpen, setIsConfirmUserPopupOpen] = useState(false);
  const [isConfirmPhotoPopupOpen, setIsConfirmPhotoPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedPost, setSelectedPost] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const idPostRef = useRef();
  const idUserRef = useRef();
  const idPhotoRef = useRef();


  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/?_limit=15 "
      );
      setPosts(res.data);
      setLoading(false);
    };
    getPost();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/?_limit=15 "
      );
      setUsers(res.data);
      setLoading(false);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos/?_limit=15"
      );
      console.log(res.data);
      setPhotos(res.data);
      setLoading(false);
    };
    getPhotos();
  }, []);

  const handleUserClick = (selectedUser) => {
    setSelectedUser(selectedUser);
  };

  const handlePhotoClick = (selectedPhoto) => {
    setSelectedPhoto(selectedPhoto);
  };

  const handlePostClick = (selectedPost) => {
    setSelectedPost(selectedPost);
  };

  const handleAddPostClick = () => {
    setIsAddArticlePopupOpen(!isAddArticlePopupOpen);
  };

  const handleAddUserClick = () => {
    setIsAddUserPopupOpen(!isAddUserPopupOpen);
  };

  const handleAddPhotoClick = () => {
    setIsAddPhotoPopupOpen(!isAddPhotoPopupOpen);
  };

  const handleAddPostSubmit = (data) => {
    const newPost = data;
     setPosts([newPost, ...posts]);
    closeAllPopups();
  };

  const handleAddUserSubmit = (data) => {
    const newUser = data;
    setUsers([newUser, ...users]);
    closeAllPopups();
  };

  const handleAddPhotoSubmit = (data) => {
    const newPhoto = data;
    setPhotos([newPhoto, ...photos])
    closeAllPopups();
    console.log(newPhoto)
  }

  const handleDeleteClick = (id) => {
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
    idPostRef.current = id;
  };

  const handleCardDelete = (choose) => {
    if (choose) {
      const newPost = [...posts].filter((p) => p.id !== idPostRef.current);
      setPosts(newPost);
      console.log(newPost);
      console.log(idPostRef.current);
      setIsConfirmPopupOpen(false);
    } else {
      setIsConfirmPopupOpen(false);
    }
  };

  const handlePhotoDeleteClick = (id) => {
    setIsConfirmPhotoPopupOpen(!isConfirmPhotoPopupOpen)
    idPhotoRef.current = id;
  };

  const handlePhotoDelete = (choose) => {
    if (choose) {
      const newPhoto = [...photos].filter((photo) => photo.id !== idPhotoRef.current);
      setPhotos(newPhoto)
      setIsConfirmPhotoPopupOpen(false);
    } else {
      setIsConfirmPhotoPopupOpen(false);
    }
  };

  const handleUserDeleteClick = (id) => {
    setIsConfirmUserPopupOpen(!isConfirmUserPopupOpen);
    idUserRef.current = id;
  };

  const handleUserDelete = (choose) => {
    if (choose) {
      const newUser = [...users].filter((u) => u.id !== idUserRef.current);
      setUsers(newUser);
      setIsConfirmUserPopupOpen(false);
    } else {
      setIsConfirmUserPopupOpen(false);
    }
  };


  const closeAllPopups = () => {
    setIsAddArticlePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsConfirmUserPopupOpen(false);
    setIsConfirmPhotoPopupOpen(false)
    setIsAddUserPopupOpen(false);
    setIsAddPhotoPopupOpen(false)
    setSelectedPost({});
    setSelectedUser({});
    setSelectedPhoto({})
  };

  return (
  <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <SmallPage
              posts={posts}
              loading={loading}
              onAddPost={handleAddPostClick}
              onPostClick={handlePostClick}
              onDeleteCard={handleDeleteClick}
            />
          }
        />
        <Route
          path="/second"
          element={
            <BigPage
              posts={posts}
              loading={loading}
              onPostClick={handlePostClick}
              onDeleteCard={handleDeleteClick}
            />
          }
        />
        <Route
          path="/users"
          element={
            <Users
              users={users}
              loading={loading}
              onUserClick={handleUserClick}
              onDeleteUser={handleUserDeleteClick}
              onAddUser={handleAddUserClick}
            />
          }
        />
        <Route
          path="/another-user"
          element={
            <UsersAnother
              users={users}
              loading={loading}
              onUserClick={handleUserClick}
              onDeleteUser={handleUserDeleteClick}
            />
          }
        />
        <Route
          path="/photos"
          element={
            <Photos
              photos={photos}
              loading={loading}
              onPhotoClick={handlePhotoClick}
              onDeletePhoto={handlePhotoDeleteClick}
              onAddPhoto={handleAddPhotoClick}
            />
          }
        />
        <Route
          path="/another-photos"
          element={
            <PhotosAnother
              photos={photos}
              loading={loading}
              onPhotoClick={handlePhotoClick}
              onDeletePhoto={handlePhotoDeleteClick}
            />
          }
        />
      </Routes>
      <UserPopup onClose={closeAllPopups} user={selectedUser} />
      <PostPopup onClose={closeAllPopups} post={selectedPost} />
      <PhotoPopup onClose={closeAllPopups} photo={selectedPhoto} />
      <AddArticlePopup                  
        isOpen={isAddArticlePopupOpen}
        onClose={closeAllPopups}
        onAddPost={handleAddPostSubmit}
      />
      <AddUserPopup
        isOpen={isAddUserPopupOpen}
        onClose={closeAllPopups}
        onAddUser={handleAddUserSubmit}
      />
       <AddPhotoPopup
        isOpen={isAddPhotoPopupOpen}
        onClose={closeAllPopups}
        onAddPhoto={handleAddPhotoSubmit}
      />
      <ConfirmPopup
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        onConfirm={handleCardDelete}
      />
      <ConfirmPopupUser
        isOpen={isConfirmUserPopupOpen}
        onClose={closeAllPopups}
        onConfirm={handleUserDelete}
      />
      <ConfirmPopupPhotos 
       isOpen={isConfirmPhotoPopupOpen}
       onClose={closeAllPopups}
       onConfirm={handlePhotoDelete}
      />
    </div>
  );
}

export default App;
