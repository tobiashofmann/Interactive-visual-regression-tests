# Interactive visual regression tests

This is a sample app to show how interactive visual regression testing can be used for testing web apps. More information about the approach and app created as an example can be found at the my blog post [Interactive visual regression tests]().

The recommended approach for going through the example is to read first the blog post and create the app in parallel by following the steps outlined in the blog post. This repository should be used as reference and help.

## Step 2: Add tests to access homepage and open value help

In this step the first visual regression tests are added. The first test is simply checking if the startpage of the app loads. The second test is to check the value help for filter value agency.

Agency value help:

![agency value help](backstop_data/bitmaps_reference/backstop_default_VH_Agency_0_document_0_desktop.png)

### Configure agency value help test

The following test scenario triggers a click on the value help of the agency filter and opens the value help dialog. Values to add to [backstop.json](backstop.json)

```json
{
    "label": "VH Agency",
    "url": "http://localhost:4004/travel_processor/webapp/index.html?sap-language=en",    
    "clickSelectors": [
    "#sap\\.fe\\.cap\\.travel\\:\\:TravelList--fe\\:\\:FilterBar\\:\\:Travel\\:\\:FilterField\\:\\:to_Agency_AgencyID-inner-vhi"
    ]
}
```

### Run test

```sh
npm test
```

### Create baseline

```sh
npx backstop approve
```