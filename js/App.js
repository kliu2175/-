const drinkShops = [
    "可不可",
    "茶學苑",
    "新井茶",
    "50嵐",
    "清心福全",
    "五桐號",
    "迷客夏",
    "得正",
    "鶴茶樓",
    "龜記",
    "麻古",
    "Tea's原味",
    "LOHASS",
    "一沐日",
    "上宇林",
    "烏弄",
    "初韻",
    "萬波",
    "花火禾茶",
    "馬祖奶茶",
    "茗茗究市",
    "黛黛茶",
    "吾奶王",
    "先喝道"
];

const menuImages = {
    "可不可": "https://i.imgur.com/RqwAns9.jpeg",   // 請替換為實際的圖片URL
    "茶學苑": "https://i.imgur.com/B1Fs0z0.jpeg",  // 請替換為實際的圖片URL
    "新井茶": "https://i.imgur.com/N04d1ec.jpeg",  // 請替換為實際的圖片URL
    "50嵐": "https://i.imgur.com/2DUTTBS.png",  // 請替換為實際的圖片URL
    "清心福全": "https://i.imgur.com/ifO9wYO.jpeg",  // 請替換為實際的圖片URL
    "五桐號": "https://i.imgur.com/kd1VkCW.jpeg",  // 請替換為實際的圖片URL
    "迷客夏": "https://i.imgur.com/CxJRb3I.jpeg",  // 請替換為實際的圖片URL
    "得正": "https://i.imgur.com/oC0lmgj.jpeg",  // 請替換為實際的圖片URL
    "鶴茶樓": "https://i.imgur.com/xqsTstt.jpeg",  // 請替換為實際的圖片URL
    "龜記": "https://i.imgur.com/iQSr8JU.jpeg",  // 請替換為實際的圖片URL
    "麻古": "https://i.imgur.com/ewDsEaO.jpeg",  // 請替換為實際的圖片URL
    "Tea's原味": "https://i.imgur.com/gkav3jY.png",  // 請替換為實際的圖片URL
    "LOHASS": "https://i.imgur.com/pfvW6w9.jpeg",  // 請替換為實際的圖片URL
    "一沐日": "https://i.imgur.com/NqTIuEY.jpeg",  // 請替換為實際的圖片URL
    "上宇林": "https://i.imgur.com/TvlL4EX.png",  // 請替換為實際的圖片URL
    "烏弄": "https://i.imgur.com/8NNqN17.jpeg",  // 請替換為實際的圖片URL
    "萬波": "https://i.imgur.com/Du0zUgH.jpeg",  // 請替換為實際的圖片URL
    "初韻": "https://truewin2018.com.tw/wp-content/uploads/2024/07/240726_%E5%88%9D%E9%9F%BB-A3%E8%8F%9C%E5%96%AE-%E4%B8%AD%E8%8B%B1%E3%80%81%E7%86%B1%E9%87%8F_%E9%81%A9%E7%94%A8%E7%8F%BE%E5%A0%B4.jpg",  // 請替換為實際的圖片URL
    "花火禾茶": "https://picdn.gomaji.com/uploads/stores/226/205226/333394/0811%E8%8A%B1%E7%81%AB%E7%A6%BE%E8%8C%B6a5%E8%8F%9C%E5%96%AE_210x148mm_8192%E5%83%8F%E7%B4%A0-(1).jpg",  // 請替換為實際的圖片URL
    "馬祖奶茶": "https://sansalife.com/wp-content/uploads/pixnet/1654404921-3347409087-g_l.jpg",  // 請替換為實際的圖片URL
    "茗茗究市": "https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.6435-9/182699260_276546434178188_1464785731501327489_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=532cfa&_nc_ohc=6hC7KMRNS8MQ7kNvgE_l1gP&_nc_ht=scontent.ftpe7-4.fna&_nc_gid=A9eolNgFy84DmhUnWr-0UIm&oh=00_AYCkJeeNkUY7lG77jjcKR8C4vCaN6GB_4snhRv6xMD6pSw&oe=6734733C",  // 請替換為實際的圖片URL
    "黛黛茶": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/305570562_534770135207756_3963970546519101449_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=532cfa&_nc_ohc=fT5Di-rgPLAQ7kNvgEqtPBR&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=AByoV0MLVq9CpR8HmWdgmbW&oh=00_AYAJxI1-eVkbS_e9zwgsEc2aYIdIwjyKhS2O86cH1Ze1VA&oe=6712D4C0",  // 請替換為實際的圖片URL
    "吾奶王": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/460959934_492252907118616_2077491672881086434_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=h3t8hdSrBRwQ7kNvgE4t8Hi&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=AFox_QXfuAYt76btcyuH2QE&oh=00_AYB6KjkAyRkTlIqf3tnrmUWmByZ9FLPgS_0MLvsvXSy9ig&oe=6712E74B",  // 請替換為實際的圖片URL
    "先喝道": "https://shoplineimg.com/6625caf3b4df420073885d89/66fbae217baa47000e236603/2600x.webp?source_format=jpg"  // 請替換為實際的圖片URL
};

function selectRandomShop() {
    const randomIndex = Math.floor(Math.random() * drinkShops.length);
    const selectedShop = drinkShops[randomIndex];

    document.getElementById('result').textContent = `喝 ${selectedShop} 吧！`;
    document.getElementById('menuImage').src = menuImages[selectedShop];
    document.getElementById('menuImage').style.display = 'block';
}

// Order class
class Order {
    constructor(name, item, addition, size, sugar, ice, price) {
        this.name = name;
        this.item = item;
        this.addition = addition;
        this.size = size;
        this.sugar = sugar;
        this.ice = ice;
        this.price = price;
    }
}

// DOM Elements
const orderForm = document.getElementById('orderForm');
const orderTableBody = document.getElementById('orderTableBody');
const totalPriceElement = document.getElementById('totalPrice');

let orders = [];

// Submit order
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const order = new Order(
        document.getElementById('name').value,
        document.getElementById('item').value,
        document.getElementById('addition').value,
        document.getElementById('size').value,
        document.getElementById('sugar').value,
        document.getElementById('ice').value,
        document.getElementById('price').value
    );
    
    orders.push(order);
    updateOrderTable();

    // Reset form
    orderForm.reset();
    document.getElementById('size').value = 'L';
    document.getElementById('sugar').value = '微糖';
    document.getElementById('ice').value = '微冰';
});

function updateOrderTable() {
    orderTableBody.innerHTML = '';
    let totalPrice = 0;

    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.name}</td>
            <td>${order.item}</td>
            <td>${order.addition}</td>
            <td>${order.size}</td>
            <td>${order.sugar}</td>
            <td>${order.ice}</td>
            <td>${order.price}</td>
        `;
        orderTableBody.appendChild(row);
        totalPrice += parseFloat(order.price || 0);
    });

    totalPriceElement.textContent = totalPrice;
}
