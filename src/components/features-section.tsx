import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Видеонаблюдение 24/7",
    description: "Камеры с ночным видением и защитой IP66 — всегда видите, что происходит на участке, даже в темноте.",
    icon: "Camera",
    badge: "Безопасность",
  },
  {
    title: "Уличный Wi-Fi",
    description: "Беспроводная сеть охватывает весь участок: дом, баня, мангальная зона, гараж. Без мёртвых зон.",
    icon: "Wifi",
    badge: "Покрытие",
  },
  {
    title: "Монтаж под ключ",
    description: "Приезжаем, устанавливаем, настраиваем. Вам не нужно разбираться в технике — всё работает сразу.",
    icon: "Wrench",
    badge: "Под ключ",
  },
  {
    title: "Удалённый просмотр",
    description: "Наблюдайте за дачей со смартфона из любой точки мира. Уведомления при движении на участке.",
    icon: "Smartphone",
    badge: "Онлайн",
  },
  {
    title: "Защита от непогоды",
    description: "Всё оборудование рассчитано на уличную эксплуатацию: морозы, дожди, ветер, перепады температур.",
    icon: "Shield",
    badge: "Надёжность",
  },
  {
    title: "Масштабируемость",
    description: "Легко добавить новые камеры или точки доступа при расширении участка. Система растёт вместе с вами.",
    icon: "Network",
    badge: "Гибкость",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Профессиональное оснащение вашего загородного объекта — от мангальной зоны до большой усадьбы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up border-orange-100 hover:border-orange-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-orange-500" />
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
