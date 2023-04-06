import React from 'react'
import { Container, Menu } from './style'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
    return (
        <Container>
          <Container.Title>
            S31 Admin Panel
          </Container.Title>
          <Menu>
          <Menu.Item>
            <NavLink to="/home" ><i className="bi bi-caret-right-fill me-4"></i>HOME</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/about" ><i className="bi bi-caret-right-fill me-4"></i>TEACHER</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/blog" ><i className="bi bi-caret-right-fill me-4"></i>COURSE</NavLink>
          </Menu.Item>
          <Menu.Item>
           <NavLink to="/comment" ><i className="bi bi-caret-right-fill me-4"></i>COMMENT</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/servise" ><i className="bi bi-caret-right-fill me-4"></i>SERVICE</NavLink>
          </Menu.Item>
          </Menu>
        </Container>
    )
}
