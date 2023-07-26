import { describe, expect, test } from "vitest";

import { flat2tree } from "../../src/array";

describe("ArrayUtils.flat2tree", () => {
  test("null", () => {
    expect.soft(flat2tree(null)).toEqual([]);
  });

  test("扁平结构数组 (第一级pid为0)", () => {
    const array = [{
      id: 1,
      pid: 0,
      name: "test1"
    }, {
      id: 2,
      pid: 1,
      name: "test2"
    }, {
      id: 3,
      pid: 2,
      name: "test3"
    }, {
      id: 4,
      pid: 0,
      name: "test4"
    }, {
      id: 5,
      pid: 4,
      name: "test5"
    }, {
      id: 6,
      pid: 0,
      name: "test6"
    }];

    const tree = [{
      id: 1,
      pid: 0,
      name: "test1",
      children: [{
        id: 2,
        pid: 1,
        name: "test2",
        children: [{
          id: 3,
          pid: 2,
          name: "test3"
        }]
      }]
    }, {
      id: 4,
      pid: 0,
      name: "test4",
      children: [{
        id: 5,
        pid: 4,
        name: "test5"
      }]
    }, {
      id: 6,
      pid: 0,
      name: "test6"
    }];

    expect.soft(flat2tree(array)).toEqual(tree);
  });

  test("扁平结构数组 (第一级pid为null)", () => {
    const array = [{
      id: 1,
      pid: null,
      name: "test1"
    }, {
      id: 2,
      pid: 1,
      name: "test2"
    }, {
      id: 3,
      pid: 2,
      name: "test3"
    }, {
      id: 4,
      pid: null,
      name: "test4"
    }, {
      id: 5,
      pid: 4,
      name: "test5"
    }, {
      id: 6,
      pid: null,
      name: "test6"
    }];

    const tree = [{
      id: 1,
      pid: null,
      name: "test1",
      children: [{
        id: 2,
        pid: 1,
        name: "test2",
        children: [{
          id: 3,
          pid: 2,
          name: "test3"
        }]
      }]
    }, {
      id: 4,
      pid: null,
      name: "test4",
      children: [{
        id: 5,
        pid: 4,
        name: "test5"
      }]
    }, {
      id: 6,
      pid: null,
      name: "test6"
    }];

    expect.soft(flat2tree(array)).toEqual(tree);
  });

  test("异常参数", () => {
    expect.soft(flat2tree([], {
      key: null,
      parentKey: null,
      processor: null
    })).toEqual([]);
  });
});