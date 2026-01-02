import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const products = [
    { id: 1, name: 'Классический крафт', weight: '100г', price: '350₽', image: 'https://cdn.poehali.dev/projects/3139e22b-5058-428b-a1ba-122561112885/files/b9ede4af-0678-4659-be75-98a9d35a9732.jpg' },
    { id: 2, name: 'Натуральный микс', weight: '250г', price: '750₽', image: 'https://cdn.poehali.dev/projects/3139e22b-5058-428b-a1ba-122561112885/files/82188406-e3c4-4940-95da-cee8b002f0b5.jpg' },
    { id: 3, name: 'Премиум набор', weight: '500г', price: '1200₽', image: 'https://cdn.poehali.dev/projects/3139e22b-5058-428b-a1ba-122561112885/files/a125f95c-5285-4fb7-9579-dcb9373bd050.jpg' },
  ];

  const usageIdeas = [
    { title: 'Упаковка хрупких предметов', description: 'Надежная защита посуды, стекла и других деликатных изделий при транспортировке' },
    { title: 'Оформление подарков', description: 'Создание эстетичной и экологичной подарочной композиции для любого повода' },
    { title: 'Декор интерьера', description: 'Использование в флористике, оформлении витрин и создании эко-композиций' },
    { title: 'Детское творчество', description: 'Безопасный материал для поделок, аппликаций и развивающих игр' },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/3139e22b-5058-428b-a1ba-122561112885/files/b9ede4af-0678-4659-be75-98a9d35a9732.jpg',
    'https://cdn.poehali.dev/projects/3139e22b-5058-428b-a1ba-122561112885/files/82188406-e3c4-4940-95da-cee8b002f0b5.jpg',
    'https://cdn.poehali.dev/projects/3139e22b-5058-428b-a1ba-122561112885/files/a125f95c-5285-4fb7-9579-dcb9373bd050.jpg',
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/3139e22b-5058-428b-a1ba-122561112885/files/43a69dfe-13bd-4f1a-80cd-0ff80617a015.jpg" 
              alt="PaperPac Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <h1 className="text-2xl font-bold font-serif text-primary">PaperPac</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
            <a href="#catalog" className="text-foreground hover:text-accent transition-colors">Каталог</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">О продукте</a>
            <a href="#gallery" className="text-foreground hover:text-accent transition-colors">Галерея</a>
            <a href="#delivery" className="text-foreground hover:text-accent transition-colors">Доставка</a>
            <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section id="home" className="py-20 md:py-32 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary leading-tight">
              Экологичная упаковка для ваших подарков
            </h2>
            <p className="text-lg text-muted-foreground">
              Натуральный бумажный наполнитель из переработанного крафта. Безопасно для природы, красиво для подарков.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Подробнее
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/3139e22b-5058-428b-a1ba-122561112885/files/b9ede4af-0678-4659-be75-98a9d35a9732.jpg" 
              alt="Эко наполнитель"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl">
              <p className="text-sm font-semibold">100% экологично</p>
              <p className="text-2xl font-serif font-bold">♻️ Биоразлагаемо</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Каталог продукции</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий объем наполнителя для ваших задач
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-serif font-semibold text-primary">{product.name}</h3>
                  <p className="text-muted-foreground">{product.weight}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-accent">{product.price}</span>
                    <Button className="rounded-full">
                      <Icon name="Plus" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center animate-fade-in">
            О продукте
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 animate-fade-in">
              <Icon name="Leaf" size={48} className="text-accent mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">Экологичность</h3>
              <p className="text-muted-foreground">
                Изготовлен из переработанной бумаги без химических отбеливателей. Полностью биоразлагаемый материал.
              </p>
            </Card>
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Sparkles" size={48} className="text-accent mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">Универсальность</h3>
              <p className="text-muted-foreground">
                Подходит для упаковки подарков, защиты хрупких предметов, декора и творчества.
              </p>
            </Card>
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Shield" size={48} className="text-accent mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">Безопасность</h3>
              <p className="text-muted-foreground">
                Не содержит токсичных веществ. Безопасен для детей, животных и окружающей среды.
              </p>
            </Card>
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Icon name="Heart" size={48} className="text-accent mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">Эстетика</h3>
              <p className="text-muted-foreground">
                Натуральные оттенки крафт-бумаги придают подаркам теплый и стильный вид.
              </p>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
              Способы использования
            </h3>
            <div className="space-y-6">
              {usageIdeas.map((idea, index) => (
                <div key={index} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-primary mb-2">{idea.title}</h4>
                    <p className="text-muted-foreground">{idea.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center animate-fade-in">
            Галерея применения
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={image} alt={`Пример использования ${index + 1}`} className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center animate-fade-in">
            Доставка
          </h2>
          <div className="space-y-6">
            <Card className="p-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <Icon name="Truck" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">По Москве</h3>
                  <p className="text-muted-foreground">Курьерская доставка 1-2 дня. Бесплатно от 2000₽</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <Icon name="Package" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">По России</h3>
                  <p className="text-muted-foreground">Почта России и ТК. Срок доставки 3-7 дней</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">Самовывоз</h3>
                  <p className="text-muted-foreground">Из нашего офиса в Москве. Бесплатно в любое время</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center animate-fade-in">
              Свяжитесь с нами
            </h2>
            <Card className="p-8 animate-scale-in">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.'); }}>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Ваш вопрос или комментарий"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="rounded-xl"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span className="text-muted-foreground">info@paperpac.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <span className="text-muted-foreground">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-accent" />
                  <span className="text-muted-foreground">г. Москва, ул. Экологическая, д. 1</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">PaperPac</h3>
          <p className="text-primary-foreground/80 mb-6">Экологичная упаковка для заботливых людей</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-8">
            © 2024 PaperPac. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;