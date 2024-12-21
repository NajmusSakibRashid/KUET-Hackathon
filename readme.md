- Route: /groq
- Method: POST
- Body:

```json
{
  "recipe": "A rich and moist chocolate dessert, perfect for any occasion. The cake is easy to prepare, with ingredients like flour, sugar, cocoa powder, butter, eggs, and milk. It bakes for around 30 minutes, resulting in a delicious, soft, and fluffy treat. Serve it to your friends and family for a special occasion or just as a sweet indulgence. This dessert is sure to satisfy any chocolate lover's cravings. It makes about 8 servings, and you can top it with frosting or powdered sugar for an extra touch of sweetness."
}
```

Sample Response:

```json
{
  "name": "Rich and Moist Chocolate Dessert",
  "description": "A rich and moist chocolate dessert, perfect for any occasion.",
  "prep_time": null,
  "cook_time": 30,
  "total_time": 30,
  "servings": 8,
  "ingredients": [
    {
      "name": "flour",
      "quantity": null
    },
    {
      "name": "sugar",
      "quantity": null
    },
    {
      "name": "cocoa powder",
      "quantity": null
    },
    {
      "name": "butter",
      "quantity": null
    },
    {
      "name": "eggs",
      "quantity": null
    },
    {
      "name": "milk",
      "quantity": null
    }
  ],
  "steps": [],
  "categories": ["dessert", "chocolate"]
}
```
