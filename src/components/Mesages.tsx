'use client'
import { FC, useRef, useState } from "react";

interface MessagesProps {
  initialMessages: Message[]
  sessionId: string
}

const Messages: FC<MessagesProps> = ({
  initialMessages , sessionId
}) => {
  const scrollDownRef = useRef<HTMLDivElement | null>(null)

  const [messages , setMessages] = useState<Message[]>(initialMessages)
  return <div id='messages' className="flex h-full flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-lighter scrollbar-w-2 scrolling-touch">
    <div ref={scrollDownRef} />

    {messages.map((message , index) => {
      const isCurrentUser = message.senderId === sessionId
      const hasNextMessageFromSameUser = messages[index - 1]?.senderId === messages[index].senderId

      return (
        <div className="chat-message" key={`${message.id}-${message.timestamp}`}></div>
      )
    })}
    </div>

}

export default Messages