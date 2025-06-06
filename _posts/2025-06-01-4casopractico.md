---
layout: post
title: "4. Caso práctico"
date: 2025-06-01 15:13:14 -0500
permalink: /caso-practico-rsa/
---

### 4. Caso práctico:
Uso del algoritmo RSA en una comunicación segura
¿Qué es RSA?
RSA (Rivest-Shamir-Adleman) es uno de los algoritmos de criptografía de clave pública más conocidos. Se utiliza para cifrar mensajes, firmar digitalmente y proteger comunicaciones.
¿Dónde se usa?
Se usa ampliamente en:
Certificados digitales (SSL/TLS)
Firmas electrónicas
Autenticación segura en correos electrónicos y sitios web
¿Cómo funciona?
Generación de claves:
Se generan dos números primos grandes.
Se calculan valores matemáticos para producir una clave pública y una clave privada.
Cifrado:
El emisor cifra el mensaje usando la clave pública del receptor.
Descifrado:
El receptor usa su clave privada para descifrar el mensaje.

<a href="/rsa-python.html">Ver ejemplo práctico de RSA en Python</a>

Ref.
Rivest, R. L., Shamir, A., & Adleman, L. (1978). A method for obtaining digital signatures and public‐key cryptosystems.
Communications of the ACM, 21(2), 120–126. https://doi.org/10.1145/359340.359342
