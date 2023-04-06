import Icon from "components/Icon";
import React from "react";
import media from "assets/images/women.jpeg";
import formatTime from "utils/formatTime";

const Convo = ({ lastMsgRef, messages: allMessages }) => {
	console.log(allMessages, "1")
	// const dates = Object.keys(allMessages);
	return (
		
		<>
		{allMessages.length>0 && allMessages.map((message, msgIndex) =>  (
			<div key={msgIndex}>
				{msgIndex === 0 && (
					<p className="chat__encryp-tion-msg">
						<Icon id="lock" className="chat__encryption-icon" />
						Messages are end-to-end encrypted. No one outside of this chat, not
						even WhatsApp, can read or listen to them. Click to learn more.
					</p>
				)}
				<div className="chat__msg-group">
							
					{message.image ? (
						<div
							className={`chat__msg chat__img-wrapper ${
								message.msg_source ==="user" ? "chat__msg--rxd" : "chat__msg--sent"
							}`}
							// ref={assignRef()}
						>
							<img src={media} alt="" className="chat__img" />
							<span className="chat__msg-footer">
								<span>{message.created_at}</span>
								{!message.sender && (
									<Icon
										id={
											message?.status === "sent"
												? "singleTick"
												: "doubleTick"
										}
										aria-label={message?.status}
										className={`chat__msg-status-icon ${
											message?.status === "read"
												? "chat__msg-status-icon--blue"
												: ""
										}`}
									/>
								)}
							</span>

							<button
								aria-label="Message options"
								className="chat__msg-options"
							>
								<Icon id="downArrow" className="chat__msg-options-icon" />
							</button>
						</div>
					) : message.msg_source === "user" ? (
						<>
							<div className="chat__msg chat__msg--rxd" >
								<p>{message.msg}</p>
								<span className="chat__msg-filler"> </span>
								<p className="chat__msg-footer" >
									{message.created_at}
								</p>
								<button
									aria-label="Message options"
									className="chat__msg-options"
								>
									<Icon id="downArrow" className="chat__msg-options-icon" />
								</button>
							</div>
							<div className="chat__msg chat__msg--rxd" >
								<p>{message.msg}</p>
								<span className="chat__msg-filler"> </span>
								<p className="chat__msg-footer" >
									{message.created_at}
								</p>
								<button
									aria-label="Message options"
									className="chat__msg-options"
								>
									<Icon id="downArrow" className="chat__msg-options-icon" />
								</button>
							</div>
							<div className="chat__msg chat__msg--rxd" >
								<p>{message.msg}</p>
								<span className="chat__msg-filler"> </span>
								<p className="chat__msg-footer" >
									{message.created_at}
								</p>
								<button
									aria-label="Message options"
									className="chat__msg-options"
								>
									<Icon id="downArrow" className="chat__msg-options-icon" />
								</button>
							</div>
							<div className="chat__msg chat__msg--rxd" >
								<p>{message.msg}</p>
								<span className="chat__msg-filler"> </span>
								<p className="chat__msg-footer" >
									{message.created_at}
								</p>
								<button
									aria-label="Message options"
									className="chat__msg-options"
								>
									<Icon id="downArrow" className="chat__msg-options-icon" />
								</button>
							</div>
							<div className="chat__msg chat__msg--rxd" >
								<p>{message.msg}</p>
								<span className="chat__msg-filler"> </span>
								<p className="chat__msg-footer" >
									{message.created_at}
								</p>
								<button
									aria-label="Message options"
									className="chat__msg-options"
								>
									<Icon id="downArrow" className="chat__msg-options-icon" />
								</button>
							</div>
							<div className="chat__msg chat__msg--rxd" >
								<p>{message.msg}</p>
								<span className="chat__msg-filler"> </span>
								<p className="chat__msg-footer" >
									{message.created_at}
								</p>
								<button
									aria-label="Message options"
									className="chat__msg-options"
								>
									<Icon id="downArrow" className="chat__msg-options-icon" />
								</button>
							</div>
							<div className="chat__msg chat__msg--rxd" >
								<p>{message.msg}</p>
								<span className="chat__msg-filler"> </span>
								<p className="chat__msg-footer" >
									{message.created_at}
								</p>
								<button
									aria-label="Message options"
									className="chat__msg-options"
								>
									<Icon id="downArrow" className="chat__msg-options-icon" />
								</button>
							</div>
						</>
					) : (
						<p className="chat__msg chat__msg--sent" >
							<span>{message.msg}</span>
							<span className="chat__msg-filler"> </span>
							<span className="chat__msg-footer">
								<span> {message.created_at} </span>
								<Icon
									id={
										message?.status === "sent"
											? "singleTick"
											: "doubleTick"
									}
									aria-label={message?.status}
									className={`chat__msg-status-icon ${
										message?.status === "read"
											? "chat__msg-status-icon--blue"
											: ""
									}`}
								/>
							</span>
							<button
								aria-label="Message options"
								className="chat__msg-options"
							>
								<Icon id="downArrow" className="chat__msg-options-icon" />
							</button>
						</p>
					)}
				
				
				</div>
			</div>
		))}
		</>
	)

	// return allMessages.map((message, msgIndex) => {
	// 	// const messages = allMessages[date];
	// 	// return (
	// 	// 	<div>
	// 	// 		<h1>Hi there</h1>
	// 	// 	</div>
	// 	// )
		
	// 	return (
			
	// 	);
	// });
};

export default Convo;
