import React from 'react'
import { MessageSquare } from 'lucide-react'
import type MessageButtonProps from '../types/message-button'


const MessageButton: React.FC<MessageButtonProps> = ({
    onClick,
    disabled = false
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-2.5 text-xs font-semibold capitalize tracking-wide border transition-all duration-200 cursor-pointer">
            <MessageSquare className="h-3.5 w-3.5 text-zinc-400 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:text-zinc-500 dark:group-hover:text-zinc-300" />
            send message
        </button>
    )
}


export default MessageButton
