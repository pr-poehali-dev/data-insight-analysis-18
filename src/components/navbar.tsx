import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface NavbarProps {
  onCallMaster?: () => void
}

export function Navbar({ onCallMaster }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Camera" size={18} className="text-white" />
            </div>
            <h1 className="font-orbitron text-xl font-bold text-gray-900">
              Plexus<span className="text-blue-500">-cam</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="font-geist text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Услуги
              </a>
              <a href="#applications" className="font-geist text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Объекты
              </a>
              <a href="#faq" className="font-geist text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button onClick={onCallMaster} className="bg-blue-500 hover:bg-blue-600 text-white font-geist border-0">
              Вызвать мастера
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-blue-100">
              <a
                href="#services"
                className="block px-3 py-2 font-geist text-gray-700 hover:text-blue-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#applications"
                className="block px-3 py-2 font-geist text-gray-700 hover:text-blue-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Объекты
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-gray-700 hover:text-blue-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button onClick={() => { onCallMaster?.(); setIsOpen(false) }} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-geist border-0">
                  Вызвать мастера
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}