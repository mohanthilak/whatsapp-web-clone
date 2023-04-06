import React from "react";
import Icon from "components/Icon";
import { Link } from "react-router-dom";
import formatTime from "utils/formatTime";
import { useUsersContext } from "context/usersContext";

const Contact = ({ contact }) => {
	const { setUserAsUnread } = useUsersContext();
	const getLastMessage = () => {
		const messageDates = Object.keys(contact.messages);
		const recentMessageDate = messageDates[messageDates.length - 1];
		const messages = [...contact.messages[recentMessageDate]];
		const lastMessage = messages.pop();
		return lastMessage;
	};
	// console.log(contact)

	// const lastMessage = getLastMessage(contact);
	const lastMessage={}

	return (
		<Link
			className="sidebar-contact"
			state={{ contact }}
			
			to={{pathname: `/chat/${contact.user_id._id}`, state: {contact}}}
			// onClick={() => setUserAsUnread(contact.user_id._id)}
		>
			<div className="sidebar-contact__avatar-wrapper">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
					alt="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
					className="avatar"
				/>
			</div>
			<div className="sidebar-contact__content">
				<div className="sidebar-contact__top-content">
					<h2 className="sidebar-contact__name"> {contact.user_id.mobile_no}</h2>
					<span className="sidebar-contact__time">
						{/* {formatTime(lastMessage.time)} */}
					</span>
				</div>
				<div className="sidebar-contact__bottom-content">
					<p className="sidebar-contact__message-wrapper">
						{lastMessage.status && (
							<Icon
								id={
									lastMessage?.status === "sent" ? "singleTick" : "doubleTick"
								}
								aria-label={lastMessage?.status}
								className={`sidebar-contact__message-icon ${
									lastMessage?.status === "read"
										? "sidebar-contact__message-icon--blue"
										: ""
								}`}
							/>
						)}
						<span
							className={`sidebar-contact__message ${
								!!contact.unread ? "sidebar-contact__message--unread" : ""
							}`}
						>
							{contact.typing ? <i> typing...</i> : lastMessage?.content}
						</span>
					</p>
					<div className="sidebar-contact__icons">
						{contact.pinned && (
							<Icon id="pinned" className="sidebar-contact__icon" />
						)}
						{!!contact.unread && (
							<span className="sidebar-contact__unread">{contact.unread}</span>
						)}
						<button aria-label="sidebar-contact__btn">
							<Icon
								id="downArrow"
								className="sidebar-contact__icon sidebar-contact__icon--dropdown"
							/>
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Contact;
