---
layout: post
title:  "3. Ventajas, desventajas y diferencias con la criptografía simétrica"
date:   2025-06-01 16:13:14 -0500
categories: jekyll update
---
### 3. Ventajas, desventajas y diferencias con la criptografía simétrica
Ventajas:
✔Seguridad en canales abiertos: No requiere compartir claves secretas.
✔Autenticación y no repudio: Las firmas digitales validan identidad e integridad.
✔Escalabilidad: Ideal para entornos con muchos usuarios (ej: internet).

Desventajas:
Lentitud: Operaciones matemáticas complejas (ej: RSA es ~1000 veces más lento que AES).
Gestión de claves: Requiere infraestructura (PKI) para validar identidades.
Longitud de claves: Claves más largas que en simétrico (ej: RSA-3072 bits vs. AES-256 bits).

Diferencias clave vs. criptografía simétrica:

Característica	Asimétrica (Clave Pública)	Simétrica
Número de claves	2 (pública + privada).	1 clave secreta compartida.
Velocidad	Lenta.	Rápida (ideal para grandes volúmenes de datos).
Casos de uso	Intercambio inicial de claves, firmas digitales.	Cifrado de datos masivos (ej: archivos, streaming).
Seguridad	Basada en problemas matemáticos (factorización, logaritmos discretos).	Basada en operaciones de bits (sustitución, permutación).
