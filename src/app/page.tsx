'use client';

import { useState } from 'react';
import { ChevronDown, Star, Check, Plus, Minus } from 'lucide-react';

export default function AutoPrimeLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
              <span className="text-2xl font-bold">
                <span className="text-black">AUTO</span>
                <span className="text-[#FF7F00] ml-1">PRIME</span>
              </span>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-[#FF7F00] transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-700 hover:text-[#FF7F00] transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-[#FF7F00] transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('preco')}
              className="text-gray-700 hover:text-[#FF7F00] transition-colors"
            >
              Preço
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-[#FF7F00] transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Botão Comprar */}
          <a
            href="https://payment.ticto.app/O73A32B9B"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF7F00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e6720a] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Comprar Agora
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/7cc980c1-9a9c-4de3-ad61-e5d65f6cf602.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Título Principal */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Seu carro limpo e protegido{' '}
              <span className="text-[#FF7F00]">em minutos</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Sem gastar em lava-rápido!
            </p>

            {/* Caixa de Informação */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg text-gray-200">
                <strong className="text-[#FF7F00]">Você sabia?</strong> A maioria das lavagens rápidas e produtos caseiros arranham e desgastam a pintura do seu carro sem perceber...
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://payment.ticto.app/O73A32B9B"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF7F00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e6720a] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                Quero meu kit agora →
              </a>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="border-2 border-[#FF7F00] text-[#FF7F00] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FF7F00] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ver como funciona
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kit AutoPrime Completo */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conheça o Kit <span className="text-[#FF7F00]">AutoPrime</span> Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para limpar, proteger e manter o brilho do seu carro em um único kit profissional
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Imagem do Kit */}
            <div className="text-center mb-12">
              <img
                src="https://www.autoprimebr.com/cdn/shop/files/undefined_Melhore_a_imagem_de.png?v=1759421010"
                alt="Kit AutoPrime Completo"
                className="mx-auto max-w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Caixa de Destaque */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                O Kit AutoPrime vem completo com <strong className="text-[#FF7F00]">4 produtos líquidos profissionais</strong>, mais <strong className="text-[#FF7F00]">Pano Microfibra e Pincel</strong>, proporcionando limpeza segura, proteção e brilho duradouro para seu veículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Individuais */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que vem no kit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada produto foi cuidadosamente selecionado para oferecer resultado profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* VFLOC */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <img
                  src="https://www.autoprimebr.com/cdn/shop/files/br-11134207-7r98o-lsu8dxtxr7zv37_resize_w450_nl_1.jpg?v=1759421143"
                  alt="VFLOC"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-3">
                  <span className="bg-[#FF7F00] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    pH Neutro
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">VFLOC</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Limpa profundamente sem arranhar ou remover a proteção da pintura. Ideal para detalhes delicados.
                </p>
                <a
                  href="https://payment.ticto.app/O73A32B9B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF7F00] text-white py-3 rounded-lg font-semibold hover:bg-[#e6720a] transition-colors duration-300 block text-center"
                >
                  Comprar Kit
                </a>
              </div>
            </div>

            {/* BLEND */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <img
                  src="https://www.autoprimebr.com/cdn/shop/files/br-11134207-7r98o-lqxv2rlkt83f7f_121ecaf9-9f7b-4a6f-b0eb-f8c3caebf5c5.webp?v=1759421211"
                  alt="BLEND"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-3">
                  <span className="bg-[#FF7F00] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Carnaúba
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">BLEND</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Proporciona brilho intenso e proteção duradoura, com acabamento sedoso e fácil aplicação.
                </p>
                <a
                  href="https://payment.ticto.app/O73A32B9B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF7F00] text-white py-3 rounded-lg font-semibold hover:bg-[#e6720a] transition-colors duration-300 block text-center"
                >
                  Comprar Kit
                </a>
              </div>
            </div>

            {/* SINTRA */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <img
                  src="https://www.autoprimebr.com/cdn/shop/files/br-11134207-7r98o-ln1m8l0jnjd0c2_resize_w450_nl_36b0813b-1865-40dd-9522-27dadd89da86.webp?v=1759421193"
                  alt="SINTRA"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-3">
                  <span className="bg-[#FF7F00] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Multiuso
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">SINTRA</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Limpeza segura e eficiente de painéis, estofados e detalhes internos do veículo.
                </p>
                <a
                  href="https://payment.ticto.app/O73A32B9B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF7F00] text-white py-3 rounded-lg font-semibold hover:bg-[#e6720a] transition-colors duration-300 block text-center"
                >
                  Comprar Kit
                </a>
              </div>
            </div>

            {/* INTENSE */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <img
                  src="https://www.autoprimebr.com/cdn/shop/files/sg-11134201-7rdx1-lygnihth08tzbf_19ef6d8c-a34f-4f40-91c6-d8bc9c19ce37.webp?v=1759421244"
                  alt="INTENSE"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-3">
                  <span className="bg-[#FF7F00] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Premium
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">INTENSE</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Revitalizador de pintura: realça o brilho, protege contra micro-riscos e desgaste, garantindo resultado profissional.
                </p>
                <a
                  href="https://payment.ticto.app/O73A32B9B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF7F00] text-white py-3 rounded-lg font-semibold hover:bg-[#e6720a] transition-colors duration-300 block text-center"
                >
                  Comprar Kit
                </a>
              </div>
            </div>

            {/* PANO MICROFIBRA + PINCEL */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <img
                  src="https://www.autoprimebr.com/cdn/shop/files/Imagem_do_WhatsApp_de_2025-10-02_a_s_13.17.34_e8fc2386.jpg?v=1759592014"
                  alt="Pano Microfibra + Pincel"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-3">
                  <span className="bg-[#FF7F00] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Inclusos
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">PANO + PINCEL</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Pano de microfibra premium para acabamento perfeito, acompanhado de pincel profissional para aplicação uniforme.
                </p>
                <a
                  href="https://payment.ticto.app/O73A32B9B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FF7F00] text-white py-3 rounded-lg font-semibold hover:bg-[#e6720a] transition-colors duration-300 block text-center"
                >
                  Comprar Kit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section id="preco" className="py-20 bg-black relative overflow-hidden">
        {/* Elementos decorativos laranja */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF7F00] rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FF7F00] rounded-full opacity-10 translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FF7F00] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FF7F00] rounded-full animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="mb-8">
            <span className="bg-[#FF7F00] text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider inline-block mb-4 animate-bounce">
              🔥 OFERTA LIMITADA 🔥
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">OFERTA</span>{' '}
              <span className="text-[#FF7F00] drop-shadow-lg">ESPECIAL</span>
            </h2>
            <p className="text-xl text-gray-300">Por Tempo Limitado!</p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-black border-2 border-[#FF7F00] rounded-3xl p-10 mb-10 shadow-2xl relative">
            {/* Brilho laranja nas bordas */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F00]/20 to-transparent rounded-3xl blur-xl"></div>
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-6 text-[#FF7F00]">
                    Kit AutoPrime Completo
                  </h3>
                  <div className="mb-6">
                    <div className="text-2xl text-gray-400 line-through mb-2">
                      De R$ 299,90
                    </div>
                    <div className="text-7xl font-black text-[#FF7F00] mb-2 drop-shadow-lg">
                      R$ 189
                      <span className="text-3xl">,00</span>
                    </div>
                    <div className="bg-[#FF7F00] text-black px-4 py-2 rounded-lg font-bold text-lg inline-block">
                      Economia de R$ 110,90
                    </div>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-[#FF7F00]/30">
                    <div className="w-8 h-8 bg-[#FF7F00] rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-black font-bold" />
                    </div>
                    <span className="text-lg font-semibold">4 Produtos Profissionais</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-[#FF7F00]/30">
                    <div className="w-8 h-8 bg-[#FF7F00] rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-black font-bold" />
                    </div>
                    <span className="text-lg font-semibold">Pano Microfibra Premium</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-[#FF7F00]/30">
                    <div className="w-8 h-8 bg-[#FF7F00] rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-black font-bold" />
                    </div>
                    <span className="text-lg font-semibold">Pincel Profissional</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-[#FF7F00]/30">
                    <div className="w-8 h-8 bg-[#FF7F00] rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-black font-bold" />
                    </div>
                    <span className="text-lg font-semibold">Frete Grátis para Todo Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <a
              href="https://payment.ticto.app/O73A32B9B"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF7F00] to-[#e6720a] text-black px-16 py-6 rounded-2xl font-black text-2xl hover:from-[#e6720a] hover:to-[#FF7F00] transition-all duration-300 shadow-2xl hover:shadow-[#FF7F00]/50 hover:scale-105 inline-block border-2 border-[#FF7F00] relative overflow-hidden group"
            >
              <span className="relative z-10">🚀 GARANTIR MINHA OFERTA AGORA!</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <p className="text-gray-400 text-sm">
              ⏰ Oferta válida por tempo limitado ou até esgotar o estoque
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Incrível! Meu carro ficou com brilho de concessionária. O kit é muito completo e fácil de usar."
              </p>
              <div className="font-semibold text-gray-800">
                Carlos Silva
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Economizei muito dinheiro que gastava no lava-rápido. Resultado profissional em casa!"
              </p>
              <div className="font-semibold text-gray-800">
                Marina Santos
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Produtos de qualidade excepcional. Meu carro nunca esteve tão protegido e brilhante."
              </p>
              <div className="font-semibold text-gray-800">
                Roberto Lima
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "O produto é original?",
                answer: "Sim! Todos os produtos AutoPrime são 100% originais e fabricados com os mais altos padrões de qualidade."
              },
              {
                question: "Qual o prazo de entrega?",
                answer: "O prazo de entrega varia de 5 a 10 dias úteis para todo o Brasil, com frete grátis incluso na oferta."
              },
              {
                question: "Posso usar em qualquer tipo de veículo?",
                answer: "Sim! O Kit AutoPrime é seguro para todos os tipos de veículos: carros, motos, caminhões e até mesmo barcos."
              },
              {
                question: "Tem garantia?",
                answer: "Oferecemos garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-[#FF7F00]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#FF7F00]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#FF7F00]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Garanta agora o seu Kit AutoPrime com desconto especial!
          </h2>
          <a
            href="https://payment.ticto.app/O73A32B9B"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#FF7F00] px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block"
          >
            Comprar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="bg-white px-3 py-2 rounded-lg inline-block mb-4">
                <span className="text-2xl font-bold">
                  <span className="text-black">AUTO</span>
                  <span className="text-[#FF7F00] ml-1">PRIME</span>
                </span>
              </div>
              <p className="text-gray-400">
                Produtos profissionais para cuidar do seu veículo com qualidade e praticidade.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoPrime. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}