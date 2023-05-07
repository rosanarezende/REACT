import "@testing-library/jest-dom";

import { unidades, geracoes } from "./mocks/api";

global.fetch = jest.fn((url) => {
  if (url.includes("/unidades")) {
    return Promise.resolve({
      json: () => Promise.resolve(unidades),
    });
  } else if (url.includes("/geracoes")) {
    return Promise.resolve({
      json: () => Promise.resolve(geracoes),
    });
  }
});
