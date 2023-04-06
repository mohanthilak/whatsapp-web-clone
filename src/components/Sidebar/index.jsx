import React, {useState, useEffect} from "react";
import "./styles/main.css";
import avatar from "assets/images/profile-picture-girl-1.jpeg";
import Icon from "components/Icon";
import Alert from "./Alert";
import Contact from "./Contact";
import OptionsBtn from "components/OptionsButton";
import {Link} from "react-router-dom"
// import { useUsersContext } from "context/usersContext";
import {AiOutlineDown} from 'react-icons/ai'
import axios from "axios";

const Sidebar = () => {
	const [activeSeller, setActiveSeller] = useState({})
	const [listContacts, setListContacts] = useState([]);


	useEffect(()=>{
		axios.get("http://localhost:3500/whatsapp/accounts/100247787422").then(res=> {
			console.log(res);
			if(res.data.status === "success"){
				console.log("success")
				setListContacts(res.data.data.accounts)
			}
		}).catch(e => console.log(e));
	}, [])	

	// const { users: contacts } = useUsersContext();
	return (
		<aside className="sidebar">
			<header className="header">
				<div className="seller-div">
					<div className="sidebar__avatar-wrapper">
						<img src={avatar} alt="Karen Okonkwo" className="avatar" />
					</div>
					<div className="seller-name-div">
						<p>default</p>
					</div>
					<div>
						<AiOutlineDown size={12} />
					</div>
				</div>
				<div className="sidebar__actions">
					{/* <button className="sidebar__action" aria-label="Status">
						<Icon
							id="status"
							className="sidebar__action-icon sidebar__action-icon--status"
						/>
					</button> */}
					<Link className="sidebar__action" to="send-bulk">
						<Icon id="chat" className="sidebar__action-icon" />
					</Link>
					<OptionsBtn
						className="sidebar__action"
						ariaLabel="Menu"
						iconId="menu"
						iconClassName="sidebar__action-icon"
						options={[
							"New group",
							"Create a room",
							"Profile",
							"Archived",
							"Starred",
							"Settings",
							"Log out",
						]}
					/>
				</div>
			</header>
			{/* <Alert /> */}
			<div className="search-wrapper">
				<div className="search-icons">
					<Icon id="search" className="search-icon" />
					<button className="search__back-btn">
						<Icon id="back" />
					</button>
				</div>
				<input className="search" placeholder="Search or start a new chat" />
			</div>
			<div className="sidebar__contacts">
				{listContacts &&  listContacts.map((contact, index) => (
					<Contact key={index} contact={contact} />
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
