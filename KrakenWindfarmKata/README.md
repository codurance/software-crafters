# Wind Turbine Kata

## Problem Statement

Kraken have been asked to validate the installation of an offshore wind farm.

A wind farm will be represented by an `n` by `n` square of plots.

To be a valid wind farm, the following criteria must be met:
- There must be exactly `n` wind turbines on the farm.
- The wind turbines must be unobstructed in all 8 compass directions. A plot with a wind turbine should have clear horizontal, vertical, and diagonal lines of sight.

One plot may contain one wind turbine.


For example, given `n = 4` and if we represent a wind turbine with '`+`' and an empty plot with '`,`', this would be a valid example:

```
,+,,
,,,+
+,,,
,,+,
```

Whereas these would be invalid examples:

```
++++
,,,,
,,,,
,,,,
```

```
+,,,
+,,,
+,,,
+,,,
```

```
+,,,
,+,,
,,+,
,,,+
```

```
,+,,
,,,+
+,,,
,,,,
```

Your task is to construct a validator that returns `True` if a given wind farm is valid, and `False` if it is not.

Given a size n, try to find a valid solution for placing the wind turbines in an allotment size of n. If there is no valid solution, return an empty array.