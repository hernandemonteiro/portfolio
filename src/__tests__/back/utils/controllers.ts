import { jest, expect } from "@jest/globals";

export function resConfig() {
  const res = {
    json: jest.fn(() => res),
    status: jest.fn(() => res),
  };
  return res;
}

export function commonExpectsSuccess(res) {
  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json.mock.calls[0][0].status).toBe("success");
  expect(res.status.mock.calls[0][0]).toBe(200);
}

export function commonExpectsFailure(res) {
  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.status.mock.calls[0][0]).toBe(500);
}
