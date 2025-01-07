'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

type Message = {
    role: 'user' | 'assistant'
    content: string
}

export function Chat() {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        const userMessage: Message = { role: 'user', content: input }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            // Call the /api/chat endpoint
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input_value: input }),
            })

            if (!response.ok) {
                throw new Error('Failed to fetch response from the server.')
            }

            const data = await response.json()
            const assistantMessage: Message = { role: 'assistant', content: data.message }

            // Append assistant response to messages
            setMessages(prev => [...prev, assistantMessage])
        } catch (error) {
            console.error('Error:', error)
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Sorry, something went wrong. Please try again later.',
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col h-full">
            {/* Chat Display */}
            <div className="flex-1 overflow-y-auto mb-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                    >
                        <div
                            className={`inline-block p-2 rounded-lg ${message.role === 'user'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                                }`}
                        >
                            {message.role === 'assistant' ? (
                                <ReactMarkdown className="prose prose-sm">{message.content}</ReactMarkdown>
                            ) : (
                                <span>{message.content}</span>
                            )}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="text-left mb-4">
                        <div className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">
                            Typing...
                        </div>
                    </div>
                )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center">
                <Input
                    type="text"
                    placeholder="Ask about social media performance..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 mr-2"
                    disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? '...' : <Send className="h-4 w-4" />}
                </Button>
            </form>
        </div>
    )
}
