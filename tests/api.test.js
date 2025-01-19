const { test, expect, request } = require("@playwright/test");

test.describe("Test API menggunakan playwright", () => {
  test("GET Single User", async ({}) => {
    const apiContext = await request.newContext();
    const res = await apiContext.get("https://reqres.in/api/users?page=2");
    expect(res.status()).toBe(200);
    const respondBody = await res.json();
    expect(respondBody.page).toBe(2);
    expect(respondBody.per_page).toBe(6);
    console.log(respondBody);
  });

  test("POST", async ({}) => {
    const apiContext = await request.newContext();
    const postData = {
      name: "morpheus",
      job: "leader",
    };
    const res = await apiContext.post("https://reqres.in/api/users", {
      data: postData,
    });
    expect(res.status()).toBe(201);
    const respondBody = await res.json();
    expect(respondBody.name).toBe("morpheus");
    expect(respondBody.job).toBe("leader");
    console.log(respondBody);
  });

  test("PATCH", async ({}) => {
    const apiContext = await request.newContext();
    const postData = {
      name: "morpheus",
      job: "zion resident",
    };
    const res = await apiContext.post("https://reqres.in/api/users", {
      data: postData,
    });
    expect(res.status()).toBe(200);
    const respondBody = await res.json();
    expect(respondBody.name).toBe("morpheus");
    expect(respondBody.job).toBe("zion resident");
    console.log(respondBody);
  });

  test("DELETE", async ({}) => {
    const apiContext = await request.newContext();
    const res = await apiContext.delete("https://reqres.in/api/users/2");
    expect(res.status()).toBe(204);
    console.log(res);
  });
});
