export const restaurant = {
  name: 'Restaurante Novo Arpoador',
  instagram: 'https://www.instagram.com/novoarpoador/',
  menu: 'https://novoarpoador.vercel.app/',
  maps: 'https://maps.app.goo.gl/dEDWwHMvymygYcHv7',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=Av.+Ant%C3%B4nio+Borges+dos+Santos,+717,+Arma%C3%A7%C3%A3o+do+P%C3%A2ntano+do+Sul,+Florian%C3%B3polis+-+SC,+88066-400',
  address: 'Av. Antônio Borges dos Santos, 717',
  neighborhood: 'Armação do Pântano do Sul · Florianópolis/SC',
  postalCode: '88066-400',
  phone: '(48) 99122-8857',
  phoneHref: 'tel:+5548991228857',
  whatsapp:
    'https://wa.me/5548991228857?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.',
  rating: '5,0',
  reviewCount: 5,
  hours: [
    { day: 'Segunda-feira', value: 'Fechado', closed: true },
    { day: 'Terça-feira', value: '08h às 00h', closed: false },
    { day: 'Quarta-feira', value: '08h às 00h', closed: false },
    { day: 'Quinta-feira', value: '08h às 00h', closed: false },
    { day: 'Sexta-feira', value: '08h às 00h', closed: false },
    { day: 'Sábado', value: '08h às 00h', closed: false },
    { day: 'Domingo', value: '08h às 00h', closed: false }
  ],
  reviews: [
    {
      name: 'Desire Oliveira',
      text: 'Que lugar incrível! O ambiente é super familiar e acolhedor. A comida tem uma qualidade excelente, tudo fresquinho e delicioso — até meus filhos limparam o prato!',
      when: 'Avaliação no Google'
    },
    {
      name: 'Taiany Marques Teles',
      text: 'Comida deliciosa, muito bem servida. Ótimo atendimento e ambiente, adorei.',
      when: 'Avaliação no Google'
    },
    {
      name: 'Victor Oliveira',
      text: 'Muito top comida peixe fresquinho bom atendimento. A Armação precisava de um lugar como vocês.',
      when: 'Avaliação no Google'
    },
    {
      name: 'Camila Mansur',
      text: 'Comida caseira maravilhosa! Atendimento nota 10! Ambiente aconchegante!',
      when: 'Avaliação no Google'
    },
    {
      name: 'tábata lemos pinto',
      text: 'Pedi o almoço com bife acebolado e estava uma delícia! Um dos melhores bifes que já comi. Atendimento também é ótimo.',
      when: 'Avaliação no Google'
    }
  ]
} as const;
