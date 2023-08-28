const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("it should response 200 success", async () => {
    const response = await request(app).get("/launches");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launch", () => {
  test("it should response 200", () => {});

  test("it should catch missing required properties", () => {});
  test("ity should catch invalid dates", () => {});
});
