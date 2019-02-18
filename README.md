# Draw Rectangle

![](https://media.giphy.com/media/26BkLIH6ArvoKr1YI/giphy.gif)

Your task is to create a function that takes two inputs - x & y.
It will return a string representing the rectangle.
Printing the function should render the rectangle. (console.log)

## Examples

- drawRectangle(5,5) should render:

```
o---o
|   |
|   |
|   |
o---o
```

- drawRectangle(5,1) should render:

```
o---o
```

- drawRectangle(1,5) should render:

```
o
|
|
|
o
```

- drawRectangle(1,1) should render:

```
o
```

- drawSquare(2,2) should render:

```
oo
oo
```

## Further

Modify your function to print Rectangles with the following patterns:

```
/**\
*  *
\**/

ABBA
B  B
CBBC

ABBC
B  B
ABBC

ABBC
B  B
CBBA
```

## Further further

Modify your function to take an array as a third input. The array should contain the pattern characters required to print the Rectangle.

- drawRectangle(4,4,['o-o','| |','o-o']) should render:

```
o-o
| |
o-o
```

## Furthest

Create a new function that can read the output of drawRectangle and print out the x, y and pattern values.

- readRectangle(drawRectangle(4, 4, ['o-o', '| |', 'o-o'])) should return:

```
The Rectangle is 4 lines long and 4 lines tall. It is made of: 'o-o', '| |' & 'o-o'
```
