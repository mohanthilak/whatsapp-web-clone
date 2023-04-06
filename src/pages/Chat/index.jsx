import React, { useEffect, useRef, useState } from "react";
import "./styles/main.css";
import EmojiTray from "./components/EmojiTray";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";
import ChatSidebar from "./components/ChatSidebar";
import Icon from "components/Icon";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Convo from "./components/Convo";
import { useUsersContext } from "context/usersContext";
import axios from "axios";
import { useLocation } from 'react-router-dom'


const Chat = ({ match, history }) => {
	const [contact, setContact] = useState()
	const location = useLocation()
	

	const [message, setMessage] = useState({})
	let user ={}
	const { users, setUserAsUnread, addNewMessage } = useUsersContext();

	const userId = match.params.id;
	// let user = users.filter((user) => user.id === Number(userId))[0];

	const lastMsgRef = useRef(null);
	const [showAttach, setShowAttach] = useState(false);
	const [showEmojis, setShowEmojis] = useState(false);
	const [showProfileSidebar, setShowProfileSidebar] = useState(false);
	const [showSearchSidebar, setShowSearchSidebar] = useState(false);
	const [newMessage, setNewMessage] = useState("");

	useEffect(() => {
		axios.get(`http://localhost:3500/whatsapp/chats/${userId}`).then(res=> {
			console.log(res);
			if(res.data.status){
				setMessage(res.data.data.msg)
			}
		})
		setContact(location.state?.contact);
		console.log(location.state)

		// if (!user) history.push("/");
		// else {
		// 	scrollToLastMsg();
		// 	setUserAsUnread(userId);
		// }
	}, []);

	// useEffect(() => {
	// 	user && scrollToLastMsg();
	// }, [users]);

	const openSidebar = (cb) => {
		// close any open sidebar first
		setShowProfileSidebar(false);
		setShowSearchSidebar(false);

		// call callback fn
		cb(true);
	};

	const scrollToLastMsg = () => {
		lastMsgRef.current.scrollIntoView();
	};

	const submitNewMessage = () => {
		// addNewMessage(userId, newMessage);
		console.log(contact)
		const payload = {
			"phonenumber_id":"100247787422",
			"message":newMessage,
			"chat_session_start":true,
			"recipientPhone":contact.user_id.mobile_no,
			"pro_seach": ""
		}
		console.log(payload);
		axios.post("https://real-gold-angelfish-boot.cyclic.app/sendcustommsg", payload).then((res=>{
			console.log(res)
		})).catch(e=>{
			console.log(e)
		})
		axios.post(`http://localhost:3500/whatsapp/store-msg`, {
			user_id:userId, session_id:"", msg_detail: {msg_source: "business",  account_type: "", msg_type: "", msg:"", wa_msg_id:"", account_id:"",boni_phone_number:""}
		})
		setNewMessage("");
		// scrollToLastMsg();
	};

	return (
		<div className="chat">
			<div className="chat__body">
				<div className="chat__bg"></div>

				<Header
					user={user}
					openProfileSidebar={() => openSidebar(setShowProfileSidebar)}
					openSearchSidebar={() => openSidebar(setShowSearchSidebar)}
				/>
				<div className="chat__content">
				{
					
				message&&<Convo lastMsgRef={lastMsgRef} messages={message} />
				}
				</div>
				<footer className="chat__footer">
					<button
						className="chat__scroll-btn"
						aria-label="scroll down"
						// onClick={scrollToLastMsg}
					>
						<Icon id="downArrow" />
					</button>
					<EmojiTray
						showEmojis={showEmojis}
						newMessage={newMessage}
						setNewMessage={setNewMessage}
					/>
					<ChatInput
						showEmojis={showEmojis}
						setShowEmojis={setShowEmojis}
						showAttach={showAttach}
						setShowAttach={setShowAttach}
						newMessage={newMessage}
						setNewMessage={setNewMessage}
						submitNewMessage={submitNewMessage}
					/>
				</footer>
			</div>
			<ChatSidebar
				heading="Search Messages"
				active={showSearchSidebar}
				closeSidebar={() => setShowSearchSidebar(false)}
			>
				<Search />
			</ChatSidebar>

			<ChatSidebar
				heading="Contact Info"
				active={showProfileSidebar}
				closeSidebar={() => setShowProfileSidebar(false)}
			>
				<Profile user={user} />
			</ChatSidebar>
		</div>
	);
};

export default Chat;
