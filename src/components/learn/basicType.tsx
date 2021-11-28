import React from 'react';
function BasicType() {
    let x: [string, number] = ['hello', 10];
    x[0] = 'x';
    x[1] = 0;
    console.log('元组->', x);
    enum Color { Red = 1, Green = 5, Yellow = 2 };
    let c: Color = Color.Green;
    let c2: string = Color[5];
    console.log('枚举->',c, c2, Color);

    return (
        <h1>ts基本类型</h1>
    );
}
export {
    BasicType,
};
