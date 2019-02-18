# Draw Square

![](https://media.giphy.com/media/26BkLIH6ArvoKr1YI/giphy.gif)

Your task is to create a function that takes two inputs - x & y.
It will return a string representing the square.
Printing the function should render the square. (console.log)

## Examples

- drawSquare(5,5) should render:

```
o---o
|   |
|   |
|   |
o---o
```

- drawSquare(5,1) should render:

```
o---o
```

- drawSquare(1,5) should render:

```
o
|
|
|
o
```

- drawSquare(1,1) should render:

```
o
```

- drawSquare(2,2) should render:

```
oo
oo
```

## Further

Modify your function to print squares with the following patterns:

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

Modify your function to take an array as a third input. The array should contain the pattern characters required to print the square.

- drawSquare(4,4,['o-o','| |','o-o']) should render:

```
o-o
| |
o-o
```

## Furthest

Create a new function that can read the output of drawSquare and print out the x, y and pattern values.

- readSquare(drawSquare(4, 4, ['o-o', '| |', 'o-o'])) should return:

```
The square is 4 lines long and 4 lines tall. It is made of: 'o-o', '| |' & 'o-o'
```
