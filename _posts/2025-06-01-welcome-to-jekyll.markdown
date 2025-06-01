---
layout: post
title:  "Somos Bimgetech"
date:   2025-06-01 13:13:14 -0500
categories: jekyll update
---
### 1. ¿Qué es el criptosistema de clave pública?
Es un sistema de criptografía asimétrica que utiliza dos claves matemáticamente relacionadas:

#### Clave pública: Compartida abiertamente para cifrar datos o verificar firmas.
#### Clave privada: Secreta, usada para descifrar mensajes o firmar digitalmente.

Su objetivo es resolver problemas de confidencialidad, autenticación y no repudio en entornos inseguros (como Internet), sin necesidad de compartir secretos previamente.

### 2. ¿Cómo funciona y cuáles son sus algoritmos representativos?
Funcionamiento básico:

Cifrado: Cualquiera usa la clave pública del receptor para cifrar un mensaje.
Descifrado: Solo el receptor usa su clave privada para descifrarlo.
Firma digital: El emisor firma con su clave privada; otros verifican con su clave pública.

Algoritmos representativos:

Algoritmo	Aplicación Principal
RSA	Cifrado y firmas digitales. Basado en la dificultad de factorizar números grandes.
ECC (Elliptic Curve Cryptography)	Alternativa eficiente a RSA. Usa curvas elípticas (ej: Bitcoin, TLS).
Diffie-Hellman	Intercambio de claves seguras en canales inseguros.
DSA (Digital Signature Algorithm)	Firmas digitales (estándar gubernamental de EE.UU.).

### 3. Ventajas, desventajas y diferencias con la criptografía simétrica
Ventajas:
✔️ Seguridad en canales abiertos: No requiere compartir claves secretas.
✔️ Autenticación y no repudio: Las firmas digitales validan identidad e integridad.
✔️ Escalabilidad: Ideal para entornos con muchos usuarios (ej: internet).

Desventajas:
❌ Lentitud: Operaciones matemáticas complejas (ej: RSA es ~1000 veces más lento que AES).
❌ Gestión de claves: Requiere infraestructura (PKI) para validar identidades.
❌ Longitud de claves: Claves más largas que en simétrico (ej: RSA-3072 bits vs. AES-256 bits).

Diferencias clave vs. criptografía simétrica:

Característica	Asimétrica (Clave Pública)	Simétrica
Número de claves	2 (pública + privada).	1 clave secreta compartida.
Velocidad	Lenta.	Rápida (ideal para grandes volúmenes de datos).
Casos de uso	Intercambio inicial de claves, firmas digitales.	Cifrado de datos masivos (ej: archivos, streaming).
Seguridad	Basada en problemas matemáticos (factorización, logaritmos discretos).	Basada en operaciones de bits (sustitución, permutación).
4. Caso práctico: Comunicación Segura con TLS/SSL
Algoritmo usado: RSA o ECC (en handshake TLS) + AES (simétrico para datos).
Dónde se aplica: Conexiones web (HTTPS), APIs, correos (SMTP/TLS).

Cómo funciona:

El cliente verifica el certificado SSL del servidor (firmado con RSA/ECC).

Intercambio de claves:

El servidor envía su clave pública.

El cliente cifra una "clave de sesión" (para AES) con esa clave pública.

Comunicación cifrada:

Ambos usan AES con la clave de sesión para intercambiar datos rápidamente.
Ejemplo real:
plaintext
Cliente (Navegador)          Servidor (Web)
       |---------------------->| Solicita conexión HTTPS.
       |<----------------------| Envía certificado (clave pública RSA).
       |-- [Cifra clave AES] -->| Usa RSA para enviar clave simétrica.
       |<======== [AES] ======>| Comunicación cifrada con AES.
5. Observaciones y Recomendaciones de Implementación
Buenas prácticas:

Usa híbridos: Combina asimétrico (para intercambio de claves/firmas) + simétrico (para datos).
Certificados válidos: Emplea una PKI (ej: Let's Encrypt) para evitar ataques man-in-the-middle.
Actualiza algoritmos: Prefiere ECC sobre RSA (menor longitud de clave, misma seguridad).
Longitudes seguras:

RSA: Mínimo 2048 bits (3072 recomendado).

ECC: Mínimo 256 bits.

Riesgos a evitar:

Almacenamiento inseguro de claves privadas: Usa HSM (Hardware Security Modules) o keystores con contraseña.
Algoritmos obsoletos: No uses RSA-1024 o Diffie-Hellman < 2048 bits.
Falta de rotación de claves: Renueva claves periódicamente (ej: cada 1-2 años).
Herramientas recomendadas:
OpenSSL: Para generar claves y certificados.
Librerías: cryptography (Python), Bouncy Castle (Java), o APIs nativas como Web Crypto (JavaScript).

Conclusión
La criptografía de clave pública es esencial para la seguridad moderna, aunque su uso óptimo requiere combinarla con sistemas simétricos y gestionar cuidadosamente las claves. En aplicaciones web, su implementación en el protocolo TLS garantiza la privacidad de millones de usuarios diarios.
