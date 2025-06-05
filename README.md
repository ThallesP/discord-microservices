# Discord Microservices

A microservices architecture for Discord-related functionality, built with TypeScript and managed with Turborepo. This project demonstrates event-driven communication between services using RabbitMQ as the message broker.

## 🏗️ Architecture

This project consists of multiple independent microservices that communicate through RabbitMQ:

- **Chat Service** - Handles chat-related functionality and messaging
- **Subscriptions Service** - Manages user subscriptions and notifications
- **Shared Packages** - Common utilities, contracts, and UI components

### Technology Stack

- **Runtime**: Node.js 18+ with TypeScript
- **Web Framework**: [Elysia](https://elysiajs.com/) - Fast and type-safe web framework
- **Message Broker**: RabbitMQ for service-to-service communication
- **Database**: Prisma ORM (database per service pattern)
- **Monorepo**: Turborepo for efficient builds and development
- **Package Manager**: PNPM
- **Code Quality**: Biome for linting and formatting

## 📁 Project Structure

```
discord-microservices/
├── apps/
│   ├── chat/           # Chat microservice
│   └── subscriptions/  # Subscriptions microservice
├── packages/
│   ├── contracts/      # Shared TypeScript contracts
│   ├── ui/            # Shared UI components
│   ├── eslint-config/ # ESLint configuration
│   └── typescript-config/ # TypeScript configuration
└── docker-compose.yml # RabbitMQ message broker
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- PNPM (recommended) or npm
- Docker and Docker Compose (for RabbitMQ)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd discord-microservices
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the message broker**
   ```bash
   docker-compose up -d
   ```
   This starts RabbitMQ with management interface available at http://localhost:15672 (guest/guest)

4. **Set up environment variables**
   
   Create `.env` files in each service directory (`apps/chat/` and `apps/subscriptions/`) with the necessary environment variables. Refer to `.env.example` files if available.

### Development

To start all services in development mode:

```bash
pnpm dev
```

This will start all microservices with hot-reload enabled.

### Individual Service Development

To develop a specific service:

```bash
# Chat service only
cd apps/chat
pnpm dev

# Subscriptions service only
cd apps/subscriptions
pnpm dev
```

## 🛠️ Available Scripts

- `pnpm dev` - Start all services in development mode
- `pnpm build` - Build all services and packages
- `pnpm lint` - Run linting across all packages
- `pnpm format` - Format code using Prettier
- `pnpm check-types` - Run TypeScript type checking

## 🐳 Docker & Infrastructure

### Message Broker (RabbitMQ)

The project uses RabbitMQ as the message broker for inter-service communication:

```bash
# Start RabbitMQ
docker-compose up -d

# Stop RabbitMQ
docker-compose down

# View logs
docker-compose logs broker
```

**RabbitMQ Management Interface**: http://localhost:15672
- Username: `guest`
- Password: `guest`

## 🔧 Services Overview

### Chat Service
- **Port**: Configure in `.env`
- **Purpose**: Handles chat messages, channels, and real-time communication
- **Database**: Individual Prisma schema
- **Message Queue**: Publishes and consumes chat-related events

### Subscriptions Service
- **Port**: Configure in `.env`
- **Purpose**: Manages user subscriptions, notifications, and billing
- **Database**: Individual Prisma schema
- **Message Queue**: Publishes and consumes subscription-related events

## 📦 Shared Packages

- **@repo/contracts**: TypeScript interfaces and types shared between services
- **@repo/ui**: Reusable UI components
- **@repo/eslint-config**: Shared ESLint configuration
- **@repo/typescript-config**: Shared TypeScript configuration

## 🧪 Testing

Each service can be tested independently:

```bash
# Run tests for all services
pnpm test

# Run tests for specific service
cd apps/chat && pnpm test
```

## 🚢 Deployment

For production deployment:

1. Build all services:
   ```bash
   pnpm build
   ```

2. Set up production environment variables

3. Deploy each service independently using your preferred platform (Docker, Kubernetes, etc.)

4. Ensure RabbitMQ is running and accessible by all services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🔗 Useful Links

- [Turborepo Documentation](https://turborepo.com/docs)
- [Elysia Documentation](https://elysiajs.com/)
- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
- [Prisma Documentation](https://www.prisma.io/docs)
