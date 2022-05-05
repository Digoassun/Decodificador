# Decodificador
Olá pessoal! Essa sprint proposta pela RESILIA educação foi um desafio de criar um codificador/decodificador de texto baseado em duas ferramentas:
- <strong>Base 64</strong>
- <strong>Cifra de César</strong>

<h2>Base 64</h2>
Base64 é um algoritmo de codificação (encoding) que permite transformar qualquer caractere de qualquer idioma em um alfabeto que consiste em letras latinas, dígitos e sinais. Com isso podemos converter caracteres especiais como os logogramas chineses, emoji e até imagens em uma sequência “legível” (para qualquer computador), que pode ser salvo e/ou transferido para qualquer outro lugar. É utilizado frequentemente para transmitir dados binários por meio de transmissões que lidam apenas com texto, como, por exemplo, para enviar imagens e arquivos em anexo por e-mail.

Seu alfabeto é constituído por 64 caracteres ([A-Z],[a-z],[0-9], “/” e “+”), o que deu  origem ao seu nome. O carácter = é utilizado como um sufixo especial e a especificação original (RFC 989) definiu que o símbolo * pode ser utilizado para delimitar dados convertidos, mas não criptografados, dentro de um stream.

<strong>Fonte da explicação:</strong> https://marquesfernandes.com/self/o-que-e-base64-para-que-serve-e-como-funciona/

<h2>Cifra de César</h2>
A Cifra de César é uma técnica de criptografia bastante simples e provavelmente a mais conhecida de todas.
Trata-se de um tipo de cifra de substituição, na qual cada letra de um texto a ser criptografado é substituída por outra letra, presente no alfabeto porém deslocada um certo número de posições à esquerda ou à direita.
Por exemplo, se usarmos uma troca de quatro posições à esquerda, cada letra é substituída pela letra que está quatro posições adiante no alfabeto, e nesse caso a letra A seria substituída pela letra E, B por F, C por G, e assim sucessivamente.
A cifra de César recebe esse nome pois, segundo o escritor Suetônio, foi utilizada por Júlio César para se comunicar com seus generais, protegendo mensagens militares.

<strong>Fonte da explicação:</strong> http://www.bosontreinamentos.com.br/seguranca/criptografia-cifra-de-cesar/

<h2>Estrutura</h2>
Esse projeto foi criado utilizando HTML, CSS e principalmente JavaScript. O JS foi criado com tudo que aprendi até agora pela RESILIA educação, e principalmente manipulação de DOM e eventos
