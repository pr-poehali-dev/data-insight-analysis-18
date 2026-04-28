import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"
import func2url from "../../backend/func2url.json"

interface LeadFormModalProps {
  open: boolean
  onClose: () => void
}

type Status = "idle" | "loading" | "success" | "error"

export function LeadFormModal({ open, onClose }: LeadFormModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [objectType, setObjectType] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(func2url["submit-lead"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, object_type: objectType, message }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setPhone("")
        setObjectType("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const handleClose = () => {
    setStatus("idle")
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 font-orbitron">
            Вызвать мастера
          </DialogTitle>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка принята!</h3>
            <p className="text-gray-500 mb-6">Наш мастер свяжется с вами в течение 15 минут.</p>
            <Button onClick={handleClose} className="bg-orange-500 hover:bg-orange-600 text-white">
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">Ваше имя *</Label>
              <Input
                id="name"
                placeholder="Иван Иванов"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-700 font-medium">Телефон *</Label>
              <Input
                id="phone"
                placeholder="+7 (900) 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="tel"
                className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Тип объекта</Label>
              <Select value={objectType} onValueChange={setObjectType}>
                <SelectTrigger className="mt-1 border-orange-200">
                  <SelectValue placeholder="Выберите объект" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Дача">Дача</SelectItem>
                  <SelectItem value="Усадьба">Усадьба</SelectItem>
                  <SelectItem value="Мангальная зона">Мангальная зона</SelectItem>
                  <SelectItem value="База отдыха">База отдыха</SelectItem>
                  <SelectItem value="Другое">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700 font-medium">Комментарий</Label>
              <Textarea
                id="message"
                placeholder="Опишите кратко: что нужно установить, размер участка..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400 resize-none"
                rows={3}
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 text-base"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <Icon name="Loader2" size={18} className="animate-spin" />
                  Отправляем...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </span>
              )}
            </Button>

            <p className="text-xs text-gray-400 text-center">
              Выезд и замер — бесплатно. Перезвоним в течение 15 минут.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
