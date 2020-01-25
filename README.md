# sieveOfEratosthenes_Visualization
Visualizer for Sieve of Eratosthenes (Prime Number Generator)

![day26_3](https://user-images.githubusercontent.com/59413787/73128209-f9de8700-3ff1-11ea-895e-e2009c4f5b10.png)

In mathematics, the Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

It does so by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between them that is equal to that prime.
This is the sieve's key distinction from using trial division to sequentially test each candidate number for divisibility by each prime.

Algorithm Sieve of Eratosthenes:
    
    input: an integer n > 1.
    output: all prime numbers from 2 through n.

    let A be an array of Boolean values, indexed by integers 2 to n,
    initially all set to true.
    
    for i = 2, 3, 4, ..., not exceeding √n do
        if A[i] is true
            for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
                A[j] := false

    return all i such that A[i] is true.

