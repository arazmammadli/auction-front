# 1. Aşama: Bağımlılıkları yükleyip uygulamayı oluştur
FROM node:20.9-alpine as builder

# Çalışma dizini oluştur
WORKDIR /app

# package.json ve package-lock.json (varsa) dosyalarını kopyala
COPY package*.json ./

# Gerekli bağımlılıkları yükle
RUN npm install --legacy-peer-deps

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulamayı derle
RUN npm run build

# 2. Aşama: Runtime konteynerini oluştur
FROM node:20.9-alpine

WORKDIR /app

# Bağımlılıkları kopyala
COPY --from=builder /app/package*.json ./
RUN npm install --only=production --legacy-peer-deps

# Oluşturulmuş dosyaları ve gerekli dosyaları kopyala
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Uygulama portunu belirt
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
