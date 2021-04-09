import React from "react";
import './ContactList.css';
import Contact from "./Contact";

const users = [
    {
        name: "Stephen Herrera",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        online: true
    },
    {
        name: "Alfredo Ramirez",
        avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
        name: "Leah Moreno",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        online: true
    },
    {
        name: "Martin Wallace",
        avatar: "https://randomuser.me/api/portraits/men/18.jpg",
        online: true
    },
    {
        name: "Mabel Clark",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    }
];

const ContactList = () => (
    <div>
        {users.map(
            item => (
                <Contact key={item.name} name={item.name} avatar={item.avatar} online={item.online} />
            )
        )}
    </div>
);

export default ContactList;
