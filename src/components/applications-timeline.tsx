import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Дачный участок",
      content: (
        <div>
          <p className="text-gray-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Полное оснащение дачи: камеры по периметру, видеодомофон на калитке и стабильный Wi-Fi
            во всех зонах отдыха. Приезжаете — всё под контролем.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Камеры у ворот, входа и по периметру
            </div>
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Wi-Fi в доме, на террасе и в зоне барбекю
            </div>
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Уведомления при появлении чужих на участке
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Мангальная зона",
      content: (
        <div>
          <p className="text-gray-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Оснащаем зоны отдыха с мангалами, беседками и барбекю: уличный Wi-Fi для гостей,
            фоновая музыка, камеры для безопасности гулянок и охраны имущества.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Уличные точки доступа Wi-Fi для гостей
            </div>
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Камеры с широким углом обзора
            </div>
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Архив записей до 30 дней
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Усадьба / большой объект",
      content: (
        <div>
          <p className="text-gray-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Масштабные решения для больших территорий: многоточечный Wi-Fi, десятки камер,
            централизованное управление. Охраняем дом, хозпостройки и всю территорию.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Mesh Wi-Fi — единая сеть по всей усадьбе
            </div>
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              IP-камеры с распознаванием движения
            </div>
            <div className="flex items-center gap-3 text-orange-600 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              Центральный видеорегистратор с облачным бэкапом
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">Объекты под ключ</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Устанавливаем видеонаблюдение и беспроводной интернет на любых загородных объектах —
            от скромной дачи до большой усадьбы.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
