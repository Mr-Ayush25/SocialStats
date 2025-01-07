import { Button } from "@/components/ui/button"
import { BarChart3, Info } from 'lucide-react'

export function Sidebar() {
    return (
        <div className="w-64 bg-white h-full p-4 hidden md:block">
            <div className="flex items-center mb-8">
                <BarChart3 className="h-8 w-8 text-blue-500 mr-2" />
                <h1 className="text-xl font-bold">SocialPerform AI</h1>
            </div>
            <div className="space-y-4">
                <Button variant="ghost" className="w-full justify-start">
                    <Info className="mr-2 h-4 w-4" />
                    About
                </Button>
                <div className="text-sm text-gray-600">
                    <p className="mb-2">Analyze social media engagement data with AI.</p>
                    <p>Tip: Try asking about performance of different post types!</p>
                </div>
            </div>
        </div>
    )
}

