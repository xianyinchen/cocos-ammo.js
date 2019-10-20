# 测试情况

- 非复合 ：非复合
index0: -1061933865
index1: 0
partId0: -1076610333
partId1: -1060540253
[img](./非复合-非复合.jpg)

- 复合 ：非复合
index0: 0
index1: 0
partId0: -1
partId1: -1060540253
[img](./复合-非复合.jpg)

- 非复合 ：复合
index0: 0
index1: -1061825571
partId0: -1
partId1: -1076031393
[img](./非复合-复合.jpg)

- 复合 ：复合
index0: 0
index1: 0
partId0: -1
partId1: -1
[img](./复合-复合.jpg)

## 结论

在 bullet 的 btManifoldPoint 中可以用以下思路查询形状

1. 通过 btManifoldPoint 获取 body
2. 通过 body 获取形状 shape
3. 判断 shape 是不是复合形状
4. 根据 index 获取子形状
