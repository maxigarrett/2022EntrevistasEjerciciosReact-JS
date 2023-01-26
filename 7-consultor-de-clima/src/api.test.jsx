import { screen, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { kelvinToCelcius, formatWeather } from "./api";

describe("api js", () => {
  afterEach(cleanup);
  it("should convert the function number farengei to celcius", () => {
    expect(kelvinToCelcius(296.76)).toBe(24);
  });
});
