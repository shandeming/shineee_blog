---
title: Garbage Collection in C#
date: "2023-10-01"
description: 关于C#里的generation Heap的gc原理
tags: ["C#"]
---


# Garbage Collection in C#

## Key Word

**Generation Garbage Collection**

## The Execution Time of GC

The collection occurs when allocated memory reaches a certain threshold

or when a new object cannot be allocated due to insufficient space.

## Generation Garbage Collection

The GC in C# uses a generation garbage collection approach,where objects are divided into different generations base on their age. The GC runs more frequently for younger generation. For example, the GC runs more frequently in generation 0.

**There are some features about Generation GC:**

1. There are 3 generation garbage collect,including Generation 0,Generation 1,Generation 2.
2. Resources in generation 0 will be promoted to generation 1 if they are still alive after garbage collection in generation 0. The same approach applies in generation 1 as well. **It's important to note that garbage collection in generation 2 will take a different approach to dispose of memory.**

## GC in C#

GC执行时，根据Stack中存在的对象对Heap中的对象进行访问，如果能够访问，那么就标记。在C#的特殊GC中，在Generation 0 GC后会将存活的（也就是标记的）资源转移到Generation 1。然后Generation 0中的指针(Heap Pointer）重新指向起始点，这样有一个好处，可以避免内存碎片，因为下一次加入资源时从头开始直接替换，无论这个位置是否存在以前的资源（也就是说之前GC时未标记的资源还在这，但是下次用到这块地方时直接替换）。

<img src="/public/images/csharp-heap.png" alt="csharp-heap" style="zoom: 33%;" />

如果Generation 2 都要满了的话，那么GC会在Generation2 同样执行，不同的是不会进行标记的资源转移，而是将未标记的**移除**，然后进行**资源压缩**，将资源紧接在一起，避免内存碎片。
