# Bacon & Jest example

An example of using Bacon.js with Jest. Nothing unusual, except that all Bacon
requires should happen during the same lifecycle method. Mixing file requires
with requires within examples or beforeEach doesn't work.
