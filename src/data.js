const products = [
  {
    id: 1,
    company: "Steelcase",
    name: "Migration SE Adjustable Height Standing Desk",
    price: 899.00,
    oldPrice: 1198.00,
    promotion: function () {
      return Math.round((this.price * 100) / this.oldPrice);
    },
    images: [
      { img: "./images/products/MigrationSE/standing_desk_1.jpg", ["data-value"]: 1 },
      { img: "./images/products/MigrationSE/standing_desk_2.jpg", ["data-value"]: 2 },
      { img: "./images/products/MigrationSE/standing_desk_3.jpg", ["data-value"]: 3 },
      { img: "./images/products/MigrationSE/standing_desk_4.jpg", ["data-value"]: 4 },
    ],
    snippet: `Migration SE is a value-driven height-adjustable desk that delivers on quality, durability and ergonomics.
     Built for the home office, it allows you to personalize your workspace and match the height of your desk to your tasks to support you wherever work gets done.`,
  },
  {
    id: 2,
    company: "Insignia™",
    name: "Adjustable Powered 1-Drawer Standing Desk with Electronic Controls – 47.6'' Wide - White",
    price: 240.00,
    oldPrice: 349.99,
    promotion: function () {
      return Math.round((this.price * 100) / this.oldPrice);
    },
    images: [
      { img: "./images/products/Insignia/standing_desk_1.jpg", ["data-value"]: 1 },
      { img: "./images/products/Insignia/standing_desk_2.jpg", ["data-value"]: 2 },
      { img: "./images/products/Insignia/standing_desk_3.jpg", ["data-value"]: 3 },
      { img: "./images/products/Insignia/standing_desk_4.jpg", ["data-value"]: 4 },
    ],
    snippet: `You don’t want to be sitting at your desk all day — not only is it uncomfortable, but it’s also unhealthy. Make work more comfortable with the Insignia NS-PSDD48WH2 Adjustable Powered 1-Drawer Standing Desk with Electronic Controls – 47.6" Wide.`,
  },
  {
    id: 3,
    company: "Flash Furniture",
    name: "Fairway Rectangle Modern Laminate Sit and Stand Desk - White",
    price: 146.99,
    oldPrice: 189.00,
    promotion: function () {
      return Math.round((this.price * 100) / this.oldPrice);
    },
    images: [
      { img: "./images/products/Flash/standing_desk_1.jpg", ["data-value"]: 1 },
      { img: "./images/products/Flash/standing_desk_2.jpg", ["data-value"]: 2 },
      { img: "./images/products/Flash/standing_desk_3.jpg", ["data-value"]: 3 },
      { img: "./images/products/Flash/standing_desk_4.jpg", ["data-value"]: 4 },
    ],
    snippet: `For those of us that like to sit up a little higher an adjustable office desk will be your best investment.
     Complete your height adjustable desk setting by coupling with your favorite standard height office chair or drafting chair.`,
  },
  {
    id: 4,
    company: "Koble",
    name: "Daneé 60'' Height Adjustable Desk - Walnut",
    price: 1299.99,
    oldPrice: 1600.00,
    promotion: function () {
      return Math.round((this.price * 100) / this.oldPrice);
    },
    images: [
      { img: "./images/products/Koble/standing_desk_1.jpg", ["data-value"]: 1 },
      { img: "./images/products/Koble/standing_desk_2.jpg", ["data-value"]: 2 },
      { img: "./images/products/Koble/standing_desk_3.jpg", ["data-value"]: 3 },
      { img: "./images/products/Koble/standing_desk_4.jpg", ["data-value"]: 4 },
    ],
    snippet: `Improve Productivity and Health: Breaking up long periods of sitting with time spent standing can improve alertness and circulation and can reduce the likelihood of muscle degeneration & osteoporosis.`,
  },
  {
    id: 5,
    company: "Serta",
    name: "Creativity Electric Height Adjustable Standing Desk",
    price: 379.99,
    oldPrice: 450.00,
    promotion: function () {
      return Math.round((this.price * 100) / this.oldPrice);
    },
    images: [
      { img: "./images/products/Serta/standing_desk_1.jpg", ["data-value"]: 1 },
      { img: "./images/products/Serta/standing_desk_2.jpg", ["data-value"]: 2 },
      { img: "./images/products/Serta/standing_desk_3.jpg", ["data-value"]: 3 },
      { img: "./images/products/Serta/standing_desk_4.jpg", ["data-value"]: 4 },
    ],
    snippet: `The modern work from home professional knows that a standing desk converter is the secret weapon to staying productive and comfortable while working. You spend hours, weeks, years at your desk.`,
  },
];

export default products;
