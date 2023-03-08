export const REST = {
  getBoard: function () {
    return fetch(`http://localhost:5001/puzzle`);
  },
  solveBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`http://localhost:5001/solve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  validateBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`http://localhost:5001/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};
