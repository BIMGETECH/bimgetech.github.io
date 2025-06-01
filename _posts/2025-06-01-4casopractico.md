---
layout: post
title:  "4. Caso practico"
date:   2025-06-01 15:13:14 -0500
categories: jekyll update
---

### 4. Caso práctico:
Comunicación Segura con TLS/SSL
Algoritmo usado: RSA o ECC (en handshake TLS) + AES (simétrico para datos). Dónde se aplica: Conexiones web (HTTPS), APIs, correos (SMTP/TLS).
Cómo funciona:
El cliente verifica el certificado SSL del servidor (firmado con RSA/ECC).
Intercambio de claves:
El servidor envía su clave pública.
El cliente cifra una “clave de sesión” (para AES) con esa clave pública.
Comunicación cifrada:
Ambos usan AES con la clave de sesión para intercambiar datos rápidamente. Ejemplo real: plaintext Cliente (Navegador) Servidor (Web) |———————->| Solicita conexión HTTPS. |<———————-| Envía certificado (clave pública RSA). |– [Cifra clave AES] –>| Usa RSA para enviar clave simétrica. |<======== [AES] ======>| Comunicación cifrada con AES.
