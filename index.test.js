const { sequelize } = require("./db");
const { User, Board, Cheese } = require("./models/index");

describe("Database model tests", () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  afterEach(async () => {
    // Delete all records from the tables after each test
    await User.destroy({ where: {} });
    await Board.destroy({ where: {} });
    await Cheese.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  // 1.USER TEST
  test("should create a user record", async () => {
    const user = await User.create({
      name: "David Carlin",
      email: "elmonoartico@gmail.com",
    });
    expect(user.name).toBe("David Carlin");
    expect(user.email).toBe("elmonoartico@gmail.com");
  });

  //2.BOARD TEST
  test("should create a board record", async () => {
    const board = await Board.create({
      type: "cheddar",
      description: "Plain English",
      rating: 10,
    });
    expect(board.type).toBe("cheddar");
    expect(board.description).toBe("Plain English");
    expect(board.rating).toBe(10);
  });

  // 3.CHEESE TEST
  test("should create a cheese record", async () => {
    const cheese = await Cheese.create({
      title: "pecorino",
      description: "Roman classic",
    });
    expect(cheese.title).toBe("pecorino");
    expect(cheese.description).toBe("Roman classic");
  });
});
