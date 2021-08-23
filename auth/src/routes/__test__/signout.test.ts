import request from "supertest";
import { app } from "../../app";

it("removes a cookie upon signout", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "harry@winston.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);

  // This is what is returned to kill a cookie, date in the past, sess=;
  expect(response.get("Set-Cookie")[0]).toEqual(
    "express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});
