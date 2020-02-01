// subject.spec.js
import { baseURL } from "./constants";
const mockBaseURL = "https://food-power.glitch.me";

describe("subject", () => {
  test("baseURL, URL correct", () => {
    expect(baseURL).toBe(mockBaseURL);
  });
});
