import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="Wifi" size={18} className="text-white" />
              </div>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Сигнал<span className="text-orange-500">Про</span>
              </h2>
            </div>
            <p className="font-space-mono text-gray-400 mb-6 max-w-md">
              Профессиональная установка видеонаблюдения и беспроводного интернета на дачах, усадьбах и мангальных зонах.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Видеонаблюдение
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Уличный Wi-Fi
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Объекты
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Заказать звонок
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  О компании
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 СигналПро. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200">
                Условия
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
