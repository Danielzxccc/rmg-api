const request = require("supertest");
const app = require("../app");
require("dotenv").config();

describe("GET /transactions", () => {
  it("should return all transactions", async () => {
    const res = await request(app).get("/transactions");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should return one transcation", async () => {
    const res = await request(app).get("/transactions/888529626415104001");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toEqual(1);
  });
});
