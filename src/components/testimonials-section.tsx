import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Андрей Петров",
    role: "Владелец дачи, Подмосковье",
    initials: "АП",
    content:
      "Поставили камеры и Wi-Fi на даче за один день. Теперь смотрю за участком прямо с телефона, когда нахожусь в городе. Очень удобно!",
  },
  {
    name: "Сергей Морозов",
    role: "Хозяин усадьбы, Ленобласть",
    initials: "СМ",
    content:
      "Большая территория — 2 гектара. Ребята грамотно спроектировали сеть, всё покрыто сигналом. Камеры пишут круглосуточно, архив за месяц.",
  },
  {
    name: "Наталья Орлова",
    role: "Владелица базы отдыха",
    initials: "НО",
    content:
      "На базе отдыха гости теперь пользуются хорошим интернетом. Камеры помогли один раз поймать нарушителей. Работа мастеров — на пятёрку!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Отзывы клиентов</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Что говорят владельцы дач и усадеб после установки нашего оборудования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="slide-up border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-blue-400 fill-blue-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-blue-600">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}