import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как долго занимает установка?",
      answer:
        "Стандартная установка на даче занимает 1 рабочий день. Для больших усадеб — от 2 до 3 дней. Приезжаем в удобное для вас время.",
    },
    {
      question: "Нужно ли прокладывать кабели по всему участку?",
      answer:
        "Нет, мы специализируемся на беспроводных решениях. Кабель прокладывается только там, где это необходимо — например, к основной точке питания. Всё остальное — беспроводное.",
    },
    {
      question: "Будет ли работать в мороз?",
      answer:
        "Да, всё оборудование имеет класс защиты IP66 и рассчитано на работу при температурах от -40°C до +60°C. Камеры и точки доступа без проблем переносят наши зимы.",
    },
    {
      question: "Можно ли смотреть камеры с телефона?",
      answer:
        "Да, настраиваем удалённый доступ на ваш смартфон. Вы видите все камеры в режиме реального времени из любой точки мира. Также настраиваем уведомления при обнаружении движения.",
    },
    {
      question: "Что нужно для установки интернета на даче?",
      answer:
        "Нам нужна точка входа интернета (кабель провайдера или 4G-роутер). Если интернета нет совсем — поможем подобрать оператора и организовать подключение.",
    },
    {
      question: "Даёте ли гарантию на оборудование и монтаж?",
      answer:
        "Да, гарантия на монтажные работы — 1 год, на оборудование — согласно гарантии производителя (обычно 1-2 года). При поломке приедем и отремонтируем бесплатно.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы об установке видеонаблюдения и беспроводного интернета.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-orange-200 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-500 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
