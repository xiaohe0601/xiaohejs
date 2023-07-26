import { describe, expect, test } from "vitest";

import { tree2flat } from "../../src/array";

describe("ArrayUtils.tree2flat", () => {
  test("null", () => {
    expect.soft(tree2flat(null)).toEqual([]);
  });

  test("树形结构数组", () => {
    const tree = [{
      id: 1,
      name: "test1",
      children: [{
        id: 2,
        name: "test2",
        children: [{
          id: 3,
          name: "test3"
        }]
      }]
    }, {
      id: 4,
      name: "test4",
      children: [{
        id: 5,
        name: "test5"
      }]
    }, {
      id: 6,
      name: "test6"
    }];

    const array = [{
      id: 1,
      name: "test1"
    }, {
      id: 2,
      name: "test2"
    }, {
      id: 3,
      name: "test3"
    }, {
      id: 4,
      name: "test4"
    }, {
      id: 5,
      name: "test5"
    }, {
      id: 6,
      name: "test6"
    }];

    expect.soft(tree2flat(tree)).toEqual(array);
  });

  test("异常参数", () => {
    expect.soft(tree2flat([], {
      childrenKey: null,
      processor: null
    })).toEqual([]);
  });
});