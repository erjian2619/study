function tsFuncoin(str: string): void{
  console.log('hello ts' + str)
}

tsFuncoin('zs')

enum Store {
  YB,
  HH = '123',
  LH = 1,
  FEN,
  WM
}

// unknown 绕过类型检查，但是传递不可更改
const unknownValue: unknown = 123;
const value1: unknown = unknownValue
// eror: const value2: boolean = unknownValue

// Object(包含原始类型) | object(object本身) | {}(没有成员的的对象)

Store[2]