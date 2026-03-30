# Lanchonete Pedido 🍔

[English](#english) | [Português](#português)

---

## English

A modern, responsive web application for ordering food from a Brazilian fast-food restaurant. Built with React, TypeScript, Vite, and Tailwind CSS.

## 📋 Features

- **Dynamic Menu System**: Browse an organized menu with multiple categories
  - Artesanal Burgers (150g)
  - Combo Meals
  - Family Orders
  - Pastas
  - Blended Drinks (Batidas)
  - Beverages

- **Shopping Cart**: Add, update, and manage items in your order with real-time total calculation
- **Order Management**: React Context API for seamless state management across the application
- **WhatsApp Integration**: Direct contact button to send orders via WhatsApp
- **Toast Notifications**: User-friendly feedback for order actions
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean, intuitive interface using Tailwind CSS

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lanchonete-pedido
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🛠️ Build

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📝 Lint

To check code quality:
```bash
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── pedido/
│   │   ├── PedidoContext.tsx # Order management context
│   │   └── Carrinho.tsx    # Shopping cart component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       └── Cardapio.tsx    # Menu section
├── hooks/
│   └── useToast.tsx        # Toast notification hook
├── style/
│   └── global.css          # Global styles
├── App.tsx                 # Main application component
└── main.tsx                # Entry point
```

## 🎨 Technologies

- **React 19.2**: Modern UI library
- **TypeScript 5.9**: Type-safe JavaScript
- **Vite 8**: Fast build tool and dev server
- **Tailwind CSS 4.2**: Utility-first CSS framework
- **React Context API**: State management

## 🔗 WhatsApp Integration

The application includes a fixed WhatsApp button that allows customers to send their orders directly. Update the phone number in [App.tsx](src/App.tsx) to link to your restaurant's WhatsApp:

```tsx
href="https://wa.me/558798210401"
```

## 📱 Features Breakdown

### PedidoContext
Manages the shopping cart state with the following operations:
- Add items to cart
- Increase/decrease item quantity
- Calculate total price
- Remove items

### Cardapio Component
Displays the menu with collapsible sections for each product category, allowing users to easily browse and add items to their cart.

### Carrinho Component
Shows the current shopping cart with:
- Item details (name, price, quantity)
- Quantity controls
- Total price calculation
- Option to proceed with order via WhatsApp

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support**

---

## Português

Um aplicativo web moderno e responsivo para fazer pedidos em uma lanchonete brasileira. Construído com React, TypeScript, Vite e Tailwind CSS.

### 📋 Funcionalidades

- **Sistema de Cardápio Dinâmico**: Navegue por um cardápio organizado com várias categorias
  - Lanches Artesanais (150g)
  - Combos
  - Pedidos Familiares
  - Massas
  - Bebidas Batidas
  - Bebidas

- **Carrinho de Compras**: Adicione, atualize e gerencie itens do seu pedido com cálculo de total em tempo real
- **Gerenciamento de Pedidos**: Context API do React para gerenciamento de estado perfeito em toda a aplicação
- **Integração com WhatsApp**: Botão de contato direto para enviar pedidos via WhatsApp
- **Notificações Toast**: Feedback amigável para as ações do cliente
- **Design Responsivo**: Otimizado para dispositivos móveis, tablets e desktops
- **Interface Moderna**: Interface limpa e intuitiva usando Tailwind CSS

### 🚀 Começando

#### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

#### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd lanchonete-pedido
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação abrirá em `http://localhost:5173`

### 🛠️ Build

Para fazer o build para produção:
```bash
npm run build
```

Para visualizar o build de produção:
```bash
npm run preview
```

### 📝 Lint

Para verificar a qualidade do código:
```bash
npm run lint
```

### 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Barra de navegação
│   │   └── Footer.tsx      # Componente de rodapé
│   ├── pedido/
│   │   ├── PedidoContext.tsx # Context para gerenciar pedidos
│   │   └── Carrinho.tsx    # Componente do carrinho de compras
│   └── sections/
│       ├── Hero.tsx        # Seção hero
│       └── Cardapio.tsx    # Seção de cardápio
├── hooks/
│   └── useToast.tsx        # Hook para notificações toast
├── style/
│   └── global.css          # Estilos globais
├── App.tsx                 # Componente principal da aplicação
└── main.tsx                # Ponto de entrada
```

### 🎨 Tecnologias

- **React 19.2**: Biblioteca de UI moderna
- **TypeScript 5.9**: JavaScript com segurança de tipos
- **Vite 8**: Ferramenta de build rápida e servidor de desenvolvimento
- **Tailwind CSS 4.2**: Framework CSS utilitário
- **React Context API**: Gerenciamento de estado

### 🔗 Integração com WhatsApp

A aplicação inclui um botão fixo do WhatsApp que permite aos clientes enviar seus pedidos diretamente. Atualize o número de telefone em [App.tsx](src/App.tsx) para vincular ao WhatsApp do seu restaurante:

```tsx
href="https://wa.me/558798210401"
```

### 📱 Detalhamento das Funcionalidades

#### PedidoContext
Gerencia o estado do carrinho de compras com as seguintes operações:
- Adicionar itens ao carrinho
- Aumentar/diminuir quantidade de itens
- Calcular preço total
- Remover itens

#### Componente Cardapio
Exibe o cardápio com seções recolhíveis para cada categoria de produto, permitindo que os usuários naveguem facilmente e adicionem itens ao carrinho.

#### Componente Carrinho
Mostra o carrinho de compras atual com:
- Detalhes dos itens (nome, preço, quantidade)
- Controles de quantidade
- Cálculo do preço total
- Opção de prosseguir com o pedido via WhatsApp

### 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/MinhaFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Adicione MinhaFeature'`)
4. Faça push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

### 📞 Suporte

Para suporte, entre em contato via WhatsApp ou crie uma issue no repositório.

---

**Feito com ❤️ para amantes de comida**

For support, contact via WhatsApp or create an issue in the repository.

---

**Made with ❤️ for food lovers**
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
