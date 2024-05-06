export const scrollDown = () => {
	setTimeout(() => {
		const chatContainer = document.getElementById('chat-messages')
		chatContainer.scrollTo({
			top: chatContainer.scrollHeight,
			behavior: 'smooth',
		})
	}, 1)
}
