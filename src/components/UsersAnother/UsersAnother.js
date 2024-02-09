import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import UserItem from "../UserItem/UserItem";

import { Link } from "react-router-dom";

function UsersAnother({
    loading,
    users,
    onUserClick,
    onDeleteUser
}) {
    const [showUser, setShowUser] = useState(2);
  
    const handleUserAdd = () => {
      setShowUser((prev) => prev + 2);
    };
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="small-page">
        <div className="small-page__container">
          <h1 className="small-page__title">User List</h1>
          <div className="small-page__mb-2">
            <Button className="small-page__btn" variant="primary" size="lg">
              <Link className="articles__btn-link" to="/users">
                Make small cards
              </Link>
            </Button>
          </div>
        </div>
        <div className="places">
          <ul className="small-page__cards">
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
        <div className="small-page__btn_more">
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
  

export default UsersAnother