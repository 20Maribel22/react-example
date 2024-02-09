import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import UserItem from "../UserItem/UserItem";


function Users({
    loading,
    users,
    onUserClick,
    onDeleteUser,
    onAddUser
}) {
    const [showUser, setShowUser] = useState(3);
    
  
    const handleUserAdd = () => {
      setShowUser((prev) => prev + 3);
    };
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="articles">
        <div className="articles__container">
          <h1 className="articles__title">User List</h1>
          <div className="mb-2">
            <Button className="articles__btn" variant="primary" size="lg">
              <Link className="articles__btn-link" to="/another-user">
                Make big cards
              </Link>
            </Button>
            <Button
              onClick={onAddUser}
              className="articles__btn"
              variant="primary"
              size="lg"
            >
              Add User
            </Button>
          </div>
        </div>
        <div className="places">
          <ul className="cards">
            {users.slice(0, showUser).map((user) => (
              <UserItem
                user={user}
                key={user.id}
                onUserClick={onUserClick}
                onDeleteUser={onDeleteUser}
              />
            ))}
          </ul>
        </div>
        <div className="articles__btn_more">
            <Button
              onClick={handleUserAdd}
              className="btn-more"
              variant="primary"
              size="lg"
              style={{display: showUser >= users.length ? 'none' : 'block'}}
            >
              Show more
            </Button>
        </div>
      </div>
    );
  }

export default Users