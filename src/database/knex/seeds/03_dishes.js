exports.seed = async function(knex) {
    await knex("dishes").del();
    await knex("dishes").insert([
        {
            "id": 1,
            "user_id": 2,
            "name": "Suco de Laranja",
            "description": "Suco natural de laranja fresco.",
            "avatar": "",
            "price": 5.50,
            "category_id": 1
        },
        {
            "id": 2,
            "user_id": 2,
            "name": "Café Espresso",
            "description": "Café forte e encorpado.",
            "avatar": "",
            "price": 4.00,
            "category_id": 1
        },
        {
            "id": 3,
            "user_id": 2,
            "name": "Milkshake de Chocolate",
            "description": "Milkshake cremoso de chocolate.",
            "avatar": "",
            "price": 8.00,
            "category_id": 1
        },
        {
            "id": 4,
            "user_id": 2,
            "name": "Refrigerante",
            "description": "Refrigerante com gás, vários sabores.",
            "avatar": "",
            "price": 4.50,
            "category_id": 1
        },
        {
            "id": 5,
            "user_id": 2,
            "name": "Chá Gelado",
            "description": "Chá refrescante servido gelado.",
            "avatar": "",
            "price": 5.00,
            "category_id": 1
        },
        {
            "id": 6,
            "user_id": 2,
            "name": "Água de Coco",
            "description": "Água de coco natural.",
            "avatar": "",
            "price": 6.00,
            "category_id": 1
        },
        {
            "id": 7,
            "user_id": 2,
            "name": "Hambúrguer Clássico",
            "description": "Pão, hambúrguer, queijo, alface e tomate.",
            "avatar": "",
            "price": 15.00,
            "category_id": 2
        },
        {
            "id": 8,
            "user_id": 2,
            "name": "Pizza Margherita",
            "description": "Pizza com molho de tomate, queijo e manjericão.",
            "avatar": "",
            "price": 25.00,
            "category_id": 2
        },
        {
            "id": 9,
            "user_id": 2,
            "name": "Salmão Grelhado",
            "description": "Salmão grelhado acompanhado de legumes.",
            "avatar": "",
            "price": 30.00,
            "category_id": 2
        },
        {
            "id": 10,
            "user_id": 2,
            "name": "Frango à Parmegiana",
            "description": "Frango empanado com molho e queijo.",
            "avatar": "",
            "price": 20.00,
            "category_id": 2
        },
        {
            "id": 11,
            "user_id": 2,
            "name": "Espaguete à Bolonhesa",
            "description": "Espaguete com molho de carne e tomate.",
            "avatar": "",
            "price": 18.00,
            "category_id": 2
        },
        {
            "id": 12,
            "user_id": 2,
            "name": "Risoto de Cogumelos",
            "description": "Risoto cremoso com cogumelos frescos.",
            "avatar": "",
            "price": 22.00,
            "category_id": 2
        },
        {
            "id": 13,
            "user_id": 2,
            "name": "Tacos Mexicanos",
            "description": "Tacos recheados com carne, queijo e vegetais.",
            "avatar": "",
            "price": 15.00,
            "category_id": 2
        },
        {
            "id": 14,
            "user_id": 2,
            "name": "Bolo de Chocolate",
            "description": "Bolo macio com cobertura de chocolate.",
            "avatar": "",
            "price": 7.00,
            "category_id": 3
        },
        {
            "id": 15,
            "user_id": 2,
            "name": "Sorvete de Baunilha",
            "description": "Sorvete cremoso sabor baunilha.",
            "avatar": "",
            "price": 6.00,
            "category_id": 3
        },
        {
            "id": 16,
            "user_id": 2,
            "name": "Torta de Limão",
            "description": "Torta com recheio de limão e merengue.",
            "avatar": "",
            "price": 8.00,
            "category_id": 3
        },
        {
            "id": 17,
            "user_id": 2,
            "name": "Brownie",
            "description": "Brownie de chocolate com nozes.",
            "avatar": "",
            "price": 7.50,
            "category_id": 3
        },
        {
            "id": 18,
            "user_id": 2,
            "name": "Pudim de Leite",
            "description": "Pudim cremoso com calda de caramelo.",
            "avatar": "",
            "price": 5.50,
            "category_id": 3
        },
        {
            "id": 19,
            "user_id": 2,
            "name": "Panqueca com Mel",
            "description": "Panqueca doce servida com mel.",
            "avatar": "",
            "price": 6.50,
            "category_id": 3
        },
        {
            "id": 20,
            "user_id": 2,
            "name": "Cheesecake de Morango",
            "description": "Cheesecake com cobertura de morango.",
            "avatar": "",
            "price": 9.00,
            "category_id": 3
        }       
    ])
    await knex("ingredients").del();
    await knex("ingredients").insert([
        { "id": 1, "name": "Laranja", "dish_id": 1 },
        { "id": 2, "name": "Açúcar", "dish_id": 1 },
        { "id": 3, "name": "Água", "dish_id": 1 },
        
        { "id": 4, "name": "Café", "dish_id": 2 },
        { "id": 5, "name": "Água", "dish_id": 2 },
        
        { "id": 6, "name": "Leite", "dish_id": 3 },
        { "id": 7, "name": "Sorvete de Chocolate", "dish_id": 3 },
        { "id": 8, "name": "Calda de Chocolate", "dish_id": 3 },
        
        { "id": 9, "name": "Refrigerante Base", "dish_id": 4 },
        { "id": 10, "name": "Açúcar", "dish_id": 4 },
        
        { "id": 11, "name": "Chá Preto", "dish_id": 5 },
        { "id": 12, "name": "Limão", "dish_id": 5 },
        { "id": 13, "name": "Açúcar", "dish_id": 5 },
        
        { "id": 14, "name": "Água de Coco", "dish_id": 6 },
        
        { "id": 15, "name": "Pão de Hambúrguer", "dish_id": 7 },
        { "id": 16, "name": "Carne de Hambúrguer", "dish_id": 7 },
        { "id": 17, "name": "Queijo", "dish_id": 7 },
        { "id": 18, "name": "Alface", "dish_id": 7 },
        { "id": 19, "name": "Tomate", "dish_id": 7 },
        
        { "id": 20, "name": "Massa de Pizza", "dish_id": 8 },
        { "id": 21, "name": "Molho de Tomate", "dish_id": 8 },
        { "id": 22, "name": "Queijo", "dish_id": 8 },
        { "id": 23, "name": "Manjericão", "dish_id": 8 },
        
        { "id": 24, "name": "Salmão", "dish_id": 9 },
        { "id": 25, "name": "Azeite", "dish_id": 9 },
        { "id": 26, "name": "Legumes", "dish_id": 9 },
        
        { "id": 27, "name": "Frango", "dish_id": 10 },
        { "id": 28, "name": "Farinha de Trigo", "dish_id": 10 },
        { "id": 29, "name": "Molho de Tomate", "dish_id": 10 },
        { "id": 30, "name": "Queijo", "dish_id": 10 },
        
        { "id": 31, "name": "Espaguete", "dish_id": 11 },
        { "id": 32, "name": "Molho de Tomate", "dish_id": 11 },
        { "id": 33, "name": "Carne Moída", "dish_id": 11 },
        
        { "id": 34, "name": "Arroz Arbóreo", "dish_id": 12 },
        { "id": 35, "name": "Cogumelos", "dish_id": 12 },
        { "id": 36, "name": "Caldo de Legumes", "dish_id": 12 },
        { "id": 37, "name": "Parmesão", "dish_id": 12 },
        
        { "id": 38, "name": "Tortilha", "dish_id": 13 },
        { "id": 39, "name": "Carne Moída", "dish_id": 13 },
        { "id": 40, "name": "Queijo", "dish_id": 13 },
        { "id": 41, "name": "Vegetais", "dish_id": 13 },
        
        { "id": 42, "name": "Farinha de Trigo", "dish_id": 14 },
        { "id": 43, "name": "Chocolate", "dish_id": 14 },
        { "id": 44, "name": "Açúcar", "dish_id": 14 },
        { "id": 45, "name": "Ovo", "dish_id": 14 },
        
        { "id": 46, "name": "Leite", "dish_id": 15 },
        { "id": 47, "name": "Baunilha", "dish_id": 15 },
        { "id": 48, "name": "Açúcar", "dish_id": 15 },
        
        { "id": 49, "name": "Massa de Torta", "dish_id": 16 },
        { "id": 50, "name": "Limão", "dish_id": 16 },
        { "id": 51, "name": "Leite Condensado", "dish_id": 16 },
        
        { "id": 52, "name": "Chocolate", "dish_id": 17 },
        { "id": 53, "name": "Nozes", "dish_id": 17 },
        { "id": 54, "name": "Farinha de Trigo", "dish_id": 17 },
        
        { "id": 55, "name": "Leite Condensado", "dish_id": 18 },
        { "id": 56, "name": "Ovo", "dish_id": 18 },
        { "id": 57, "name": "Açúcar", "dish_id": 18 },
        
        { "id": 58, "name": "Farinha de Trigo", "dish_id": 19 },
        { "id": 59, "name": "Ovo", "dish_id": 19 },
        { "id": 60, "name": "Mel", "dish_id": 19 },
        
        { "id": 61, "name": "Massa de Cheesecake", "dish_id": 20 },
        { "id": 62, "name": "Queijo Cream Cheese", "dish_id": 20 },
        { "id": 63, "name": "Geleia de Morango", "dish_id": 20 }
    ])
}