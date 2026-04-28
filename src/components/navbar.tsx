import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="Wifi" size={18} className="text-white" />
            </div>
            <h1 className="font-orbitron text-xl font-bold text-gray-900">
              Сигнал<span className="text-orange-500">Про</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="font-geist text-gray-700 hover:text-orange-500 transition-colors duration-200">
                Услуги
              </a>
              <a href="#applications" className="font-geist text-gray-700 hover:text-orange-500 transition-colors duration-200">
                Объекты
              </a>
              <a href="#faq" className="font-geist text-gray-700 hover:text-orange-500 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-geist border-0">
              Вызвать мастера
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-100">
              <a
                href="#services"
                className="block px-3 py-2 font-geist text-gray-700 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#applications"
                className="block px-3 py-2 font-geist text-gray-700 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Объекты
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-gray-700 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-geist border-0">
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
