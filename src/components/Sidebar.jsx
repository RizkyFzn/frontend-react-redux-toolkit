import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Logout, reset } from '../features/authSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to="/dashboard">
              <IoHome />
              &nbsp; Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <IoPricetag />
              &nbsp; Products
            </NavLink>
          </li>
        </ul>
        {user && user.role === 'admin' && (
          <>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to="/users">
                  <IoPerson />
                  &nbsp; Users
                </NavLink>
              </li>
            </ul>
          </>
        )}

        <p className="menu-label">Setting</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut />
              &nbsp; Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
