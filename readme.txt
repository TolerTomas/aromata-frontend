¿Cómo entiende chatgpt los prompts?
Analiza el contexto y la estructura gramatical del prompt

Dentro del algoritmo de chatGPT para producir palabra tras palabra ¿Cómo se realiza este procedimiento?
1. Tokenización: Eltexto se subdivide en partes mas chiquitas llamadas tokens (generalmente un token=palabra)
2. Codificacion de tokens: Cada token equivale a un vector numérico que se utiliza para el input de la red neuronal
3. Modelo de capaz: Los vectores se pasan a traves de lascapaz de la red neuronal para extraer informacion clave
4. Atención multi-cabeza: se pondera la importancia de cada palabra
5. Generación de la siguiente palabra: genera un distribucion de probabilidades de que palabra puede ser utilizada
6. mustreo de palabras

¿Cómo emite respuestas chatGPT?
1. Procesa el prompt para entender el tema del prompt, contexto, tono, etc. del prompt
2. Genera una palabra cuya generacion está influidapor la ocurrencia en el prompt
3. Tras la generación de la 1ra palabra, basado en el contexto del prompt va generando más palabras. esto tambiwen está influido por custiones estadisticas
4. Durante la generacion del texto se va ealuando la coherencia y cohesion de la respuesta misma
5. Se completa la respuesta con texto no relacionado (introduccion y conclusion) y se la entrega al usuario

¿A qué equivale una palabra en el prompt?
A un número o vector numérico

ejemplo:
https://i.gzn.jp/img/2023/04/07/tokenizer-open-ai/snap1746.png?trk=article-ssr-frontend-pulse_publishing-image-block

en general cada palabra es un token