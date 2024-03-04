import bcrypt from "bcryptjs";
const data = {
  admins: [
    {
      email: "ajaygoswami@gmail.com",
      password: bcrypt.hashSync("ajaygoswami"),
      isAdmin: true,
      userName: "ajay1",
    },
    {
      email: "adminsimsun@gmail.com",
      password: bcrypt.hashSync("simsun"),
      userName: "ajay1",
    },
  ],
  customers: [
    {
      email: "ajay@gmail.com",
      password: bcrypt.hashSync("ajay"),
      fullName: "ajay",
      userName: "ajay1",
      phoneNumber: "1234567890",
      address: "afksdjf",
    },
    {
      email: "test@gmail.com",
      password: bcrypt.hashSync("test"),
      fullName: "test",
      userName: "test1",
      phoneNumber: "1234567890",
      address: "afksdjf",
    },
  ],
  engineers: [
    {
      email: "check@gmail.com",
      password: bcrypt.hashSync("check"),
      fullName: "check",
      userName: "check1",
      phoneNumber: "1234567890",
      address: "afksdjf",
      pinCode: "1234",
      location: "India",
      whatsappNumber: "1234",
      field: "xyz",
      experience: "2",
    },
    {
      email: "engineer@gmail.com",
      password: bcrypt.hashSync("engineer"),
      fullName: "engineer",
      userName: "engineer1",
      phoneNumber: "1234567890",
      address: "afksdjf",
      pinCode: "1234",
      location: "India",
      whatsappNumber: "1234",
      field: "xyz",
      experience: "2",
    },
  ],

  categories: [
    { id: 1, name: "Lift" },
    { id: 2, name: "Escalator" },
    { id: 3, name: "Travelator" },
    { id: 4, name: "Lift Spare Parts" },
    { id: 5, name: "Escalator Spare Parts" },
    { id: 6, name: "BLT Elevator PCB" },
  ],
  products: [
    {
      // _id: 1,
      name: "Electric Lift Motor",
      description:
        "Powerful motor designed for smooth and reliable lift operation.",
      price: "199.99",
      imageUrl: "../src/assets/img/escalator1.jpg",
      rating: 4.5,
      category: "Lift",
      brand: "Brand1",
    },
    {
      name: "Product 1",
      description:
        "Powerful motor designed for smooth and reliable lift operation.",
      price: "19.99",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL254_SR254,254_.jpg",
      rating: 4.5,
      category: "BLT Elevator PCB",
      brand: "Brand1",
    },
    {
      name: "Product 1",
      description:
        "Powerful motor designed for smooth and reliable lift operation.",
      price: "19.99",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL254_SR254,254_.jpg",
      rating: 4.5,

      category: "BLT Elevator PCB",
      brand: "Brand1",
    },
    {
      name: "Product 1",
      description:
        "Powerful motor designed for smooth and reliable lift operation.",
      price: "19.99",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL254_SR254,254_.jpg",
      rating: 4.5,

      category: "BLT Elevator PCB",
      brand: "Brand1",
    },
    {
      name: "Product 1",
      description:
        "Powerful motor designed for smooth and reliable lift operation.",
      price: "19.99",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL254_SR254,254_.jpg",
      rating: 4.5,

      category: "BLT Elevator PCB",
      brand: "Brand1",
    },
    {
      // _id: 2,
      name: "Lift Control Panel",
      description:
        "Advanced control panel for precise lift management and safety.",
      price: "129.99",
      imageUrl: "../src/assets/img/lift1.jpg",
      rating: 4,
      category: "Lift",
      brand: "Brand2",
    },
    {
      // _id: 3,
      name: "Safety Sensors Kit",
      description:
        "Essential sensors to ensure safe and obstacle-free lift operation.",
      price: "59.99",
      imageUrl: "../src/assets/img/lift4.jpg",
      rating: 3.5,
      category: "Escalator",
      brand: "Brand3",
    },
    {
      // _id: 4,
      name: "Lift Cable Set",
      description:
        "High-quality cables for lifting heavy loads with stability and durability.",
      price: "79.99",
      imageUrl: "../src/assets/img/lift5.jpg",
      rating: 3,
      category: "Travelator",
      brand: "Brand4",
    },
    {
      // _id: 5,
      name: "Remote Control Unit",
      description:
        "Wireless remote for convenient and easy lift control from a distance.",
      price: "49.99",
      imageUrl: "../src/assets/img/lift7.jpg",
      rating: 4,
      category: "Travelator",
      brand: "Brand5",
    },
    {
      // _id: 6,
      name: "Lift Platform Assembly",
      description: "Complete assembly for a sturdy and reliable lift platform.",
      price: "249.99",
      imageUrl: "../src/assets/img/lift1copy.jpg",
      rating: 4,
      category: "Lift Spare Parts",
      brand: "Brand6",
    },
    {
      // _id: 7,
      name: "Lift Safety Brake System",
      description:
        "Essential safety brake system for emergency lift stops and protection.",
      price: "89.99",
      imageUrl: "../src/assets/img/lift8.jpg",
      rating: 4,
      category: "Escalator Spare Parts",
      brand: "Brand7",
    },
    {
      // _id: 8,
      name: "Lift Push Button Panel",
      description:
        "User-friendly push button panel for convenient floor selection and operation.",
      price: "34.99",
      imageUrl: "../src/assets/img/lift9.jpg",
      rating: 4,
      category: "Escalator Spare Parts",
      brand: "Brand8",
    },
  ],
};

export default data;
