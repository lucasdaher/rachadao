![/og-image.png](./public/og-image.png)

# **Rachadão**

O **Rachadão** é um SaaS projetado para facilitar o compartilhamento e divisão de despesas entre usuários. Ele oferece uma experiência intuitiva para gerenciar finanças em grupo, focando em simplicidade, agilidade e segurança. O sistema inclui um plano de assinatura e é desenvolvido com tecnologias modernas como **Next.js**, **Prisma**, **TypeScript**, **TailwindCSS** e **Shadcn/ui**.

## **Sumário**
1. [Funcionalidades Principais](#funcionalidades-principais)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Configuração e Instalação](#configuração-e-instalação)
5. [Uso do Sistema](#uso-do-sistema)
6. [Contribuições e Licença](#contribuições-e-licença)

## **Funcionalidades Principais**
- Cadastro e autenticação de usuários.
- Criação de grupos de despesas.
- Cálculo automático de divisão de custos.
- Notificações e lembretes de divisões agendadas.
- Plano de assinatura com funcionalidades avançadas.

## **Estrutura do Projeto**

### **Diretório Raiz**
- **README.md**: Arquivo de documentação principal.
- **auth.ts**: Configurações de autenticação.
- **components.json**: Registro de componentes do shadcn/ui.
- **middleware.ts**: Middleware de segurança.
- **next.config.ts**: Configurações do Next.js.
- **package.json**: Dependências e scripts.
- **pnpm-lock.yaml**: Lockfile do gerenciador de pacotes PNPM.
- **postcss.config.mjs**: Configuração do PostCSS.
- **tailwind.config.ts**: Configurações do TailwindCSS.
- **tsconfig.json**: Configuração do TypeScript.

### **Pasta `prisma/`**
- **schema.prisma**: Esquema do banco de dados utilizando Prisma ORM.

### **Pasta `public/`**
Arquivos estáticos como imagens e fontes públicas.

### **Pasta `src/`**
Contém o núcleo do projeto:
- **app/**: Configurações e páginas do sistema.
- **assets/**: Recursos visuais.
- **components/**: Componentes reutilizáveis.
- **lib/**: Bibliotecas e utilitários personalizados.

## **Tecnologias Utilizadas**
- **Next.js**: Framework React para renderização híbrida.
- **Prisma**: ORM para banco de dados.
- **TypeScript**: Superset de JavaScript tipado.
- **TailwindCSS**: Framework CSS utilitário.
- **Shadcn/ui**: Biblioteca de componentes UI.

## **Configuração e Instalação**

### **Requisitos**
- Node.js 20+
- PNPM (gerenciador de pacotes)

### **Passos de Instalação**
1. Clone o repositório:
   ```bash
   git clone https://github.com/lucasdaher/rachadao.git
   cd rachadao
   ```
2. Instale as dependências:
   ```bash
   pnpm install
   ```
3. Configure o arquivo `.env` com suas variáveis de ambiente:
   ```
   DATABASE_URL="sua_conexao_com_banco_de_dados"
   ```
4. Execute as migrações do banco:
   ```bash
   pnpm prisma migrate dev
   ```
5. Inicie o servidor:
   ```bash
   pnpm next dev
   ```

## **Uso do Sistema**

### **Autenticação**
Os endpoints para autenticação estão em:
- **/api/auth/**: Configuração do NextAuth.

### **Dashboard**
Acessível após o login, permite:
- Criar e gerenciar grupos.
- Adicionar despesas e visualizar divisão.

### **Checkout**
Gerencia o pagamento do plano de assinatura:
- **/checkout**: Endpoint para iniciar pagamentos utilizando a integração com a Stripe.

## **Contribuições e Licença**

### **Contribuições**
Em breve...

### **Licença**
Este projeto está licenciado sob a **MIT License**.
