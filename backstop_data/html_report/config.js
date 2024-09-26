report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Filter_table_0_document_0_desktop.png",
        "test": "../bitmaps_test/20240926-085005/backstop_default_Filter_table_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Filter_table_0_document_0_desktop.png",
        "label": "Filter table",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4004/travel_processor/webapp/index.html?sap-language=en",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});