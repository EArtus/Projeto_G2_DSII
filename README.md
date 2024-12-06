# Projeto Frontend Mobile em React Native TS com EXPO

Este é um modelo de projeto mobile desenvolvido em React Native utilizando TypeScript e Expo. O projeto inclui diversas funcionalidades prontas, como navegação, componentes customizáveis e integração com backend.

## 🚀 Funcionalidades Implementadas

### Navegação
- **Navegação por Stack**:
  - Gerencia a transição entre telas como Home, AddUser, MapScreen e RecyclingInfoScreen.
  - Fácil expansão para outros tipos de navegação (Drawer, Tab) conforme necessário.

---

### Telas Implementadas
- **HomeScreen**:
  - Exibe uma lista de usuários recuperados do backend.
  - Integrada com botões de navegação no Header e Footer.
  
- **AddUserScreen**:
  - Permite a criação de novos usuários via requisições POST ao backend.

- **MapScreen**:
  - Mostra pontos de descarte de recicláveis em um mapa interativo.
  - Usando `react-native-maps` com marcadores detalhados.

- **RecyclingInfoScreen**:
  - Apresenta informações detalhadas sobre tipos de lixo e como descartá-los corretamente.
  - Layout visualmente agradável.
 
- **ScheduleColletcionScreen**:
  - Permite agendar reservas de coleta indicando tipo de resíduo, quantidade, endereço, data e horário.
 
- **UserDetailsScreen**:
  - Permite o usuário ver todo o histórico de coletadas.

- **Header e Footer**:
  - **Header**: Com botões para Mapa (à esquerda) e Criar Usuário (à direita).
  - **Footer**: Botões para Painel do Usuário (à esquerda) e Informações de Reciclagem (à direita), estilizados para melhor usabilidade.

---

### Backend Integrado
- **API RESTful com Node.js e Express**:
  - **Rota GET /users**: Retorna uma lista de usuários.
  - **Rota POST /users**: Cria novos usuários.
  - **Rota DELETE /users/:id**: Planejado para exclusão de usuários.
  
- **Middleware**:
  - `express.json()` para processamento de requisições com JSON.

- **CORS Configurado**:
  - Permite acesso a partir de dispositivos móveis.

---

### Funcionalidades Extras
- **Integração com Axios**:
  - Utilizado para comunicação com o backend.

- **Configuração de Variáveis de Ambiente**:
  - Endereço do servidor backend configurável (`http://192.168.x.x:3000`).

- **Suporte a ScrollView**:
  - Implementado em telas com muito conteúdo (RecyclingInfoScreen).

---

### Componentes Customizáveis
- **Header**:
  - Personalizável com botões dinâmicos.

- **Footer**:
  - Estilizado para facilitar a navegação.

- **UserCard (planejado)**:
  - Exibição de informações detalhadas de usuários.

---

### Banco de Dados e Armazenamento
- **AsyncStorage**:
  - Utilizado como fallback em caso de falha na comunicação com o backend.
  - Garante que a aplicação funcione offline para certas operações.


---

## ⚙️ Configuração do Ambiente

### Requisitos
- **Node.js**: versão 14+.
- **Expo CLI**: instalada globalmente via `npm install -g expo-cli`.
- **Axios**: para requisições HTTP (`npm install axios`).

---

### Instruções de Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
