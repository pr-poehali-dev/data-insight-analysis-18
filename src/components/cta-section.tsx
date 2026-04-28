import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Icon name="PhoneCall" size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 font-sans text-balance">
            Готовы обезопасить свой участок?
          </h2>
          <p className="text-xl text-orange-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Оставьте заявку — мастер приедет на замер бесплатно, подберёт оборудование
            и установит всё за один день.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 pulse-button text-lg px-8 py-4 font-bold"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать мастера
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4 bg-transparent"
            >
              Рассчитать стоимость
            </Button>
          </div>
          <p className="text-orange-200 text-sm mt-6">
            Выезд и замер — бесплатно. Работаем в Москве и области.
          </p>
        </div>
      </div>
    </section>
  )
}
