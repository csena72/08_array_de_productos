# Desafío: Array de productos

### Ejemplo para guardar un producto por curl desde consola:

```
curl --location --request POST 'localhost:8080/api/productos' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "Melón",
  "price": 390,
  "thumbnail": "http/localhost:8080/img/melon.jpg"
}'
```