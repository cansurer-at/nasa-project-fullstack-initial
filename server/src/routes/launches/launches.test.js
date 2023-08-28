const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("it should response 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launch", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NNC 17012-D",
    target: "Kepler Mepler",
    launchDate: "January 4, 2029",
  };

  const launchDataWithoutData = {
    mission: "USS Enterprise",
    rocket: "NNC 17012-D",
    target: "Kepler Mepler",
  };

  test("it should response 201", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(launchDataWithoutData);
  });

  test("it should catch missing required properties", () => {});
  test("ity should catch invalid dates", () => {});
});
