# Draw Square

Your task is to create a function that takes two inputs - x & y. It will render / print a square based on the inputs recieved.

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

## Further

1. Modify your function to print squares with the following patterns:

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

2. Modify your function to take an array as a third input. The array should contain the pattern characters required to print the square.

   - drawSquare(4,4,['o-o','| |','o-o']) should render:

```
o-o
| |
o-o
```

3. Create a new function that can read the output of drawSquare and print out the x, y and pattern values.

   - readSquare(drawSquare(4, 4, ['o-o', '| |', 'o-o'])) should return:

```
The square is 4 lines long and 4 lines tall. It is made of: 'o-o', '| |' & 'o-o'
```
