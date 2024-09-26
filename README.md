# Interactive visual regression tests

This is a sample app to show how interactive visual regression testing can be used for testing web apps. More information about the approach and app created as an example can be found at the my blog post [Interactive visual regression tests]().

The recommended approach for going through the example is to read first the blog post and create the app in parallel by following the steps outlined in the blog post. This repository should be used as reference and help.

## Step 3: Run UI tests

In this step the UI tests added in step  2 are executed against the baseline. As a result, no errors should be reported and the result report shown.

### Run visual regression test

```sh
npm test
```

### Result

![result report](doc/ResultReport.png)